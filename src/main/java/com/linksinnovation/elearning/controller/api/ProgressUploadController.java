package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Lecture;
import com.linksinnovation.elearning.model.enumuration.ContentType;
import com.linksinnovation.elearning.repository.LectureRepository;
import com.linksinnovation.elearning.utils.QualitySelect;
import com.linksinnovation.elearning.utils.mediainfo.MediaInfo;
import com.linksinnovation.elearning.utils.mediainfo.MediaInfoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.net.URLDecoder;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.client.RestTemplate;

/**
 * Created by Kong on 12/26/2015 AD.
 */
@RestController
@RequestMapping("/api")
public class ProgressUploadController {

    private static final int BUFFER_SIZE = 1024 * 100;

    @Autowired
    private LectureRepository lectureRepository;

    @RequestMapping(value = "/videoupload", method = RequestMethod.PUT)
    public void upload(@RequestBody byte[] file, HttpServletRequest request) throws IOException, InterruptedException {
        InputStream chunk = new ByteArrayInputStream(file);
        String filename = URLDecoder.decode(request.getHeader("Content-Name"), "UTF-8");
        appendFile(chunk, new File("/mnt/data/source/"+ filename));
        if (request.getHeader("Content-End") != null && request.getHeader("Content-End").equals(request.getHeader("Content-FileSize"))) {
            final MediaInfo mediaInfo = MediaInfoUtil.getMediaInfo("/mnt/data/source/" + filename);
            Lecture lecture = lectureRepository.findOne(Long.parseLong(request.getHeader("Content-Lecture")));
            lecture.setContent(filename);
            lecture.setContentType(ContentType.VIDEO);
            lecture.setDuration(Long.parseLong(mediaInfo.get("Video", "Duration")));
            lecture.setQualities(QualitySelect.listQuality(mediaInfo.get("Video", "Height")));
            lecture.setUpdateDate(new Date());
            lectureRepository.save(lecture);

            RestTemplate rest = new RestTemplate();
            Map<String, String> map = new HashMap<>();
            map.put("input", "/mnt/data/source/" + filename);
            map.put("output", "/mnt/data/convert/video-" + lecture.getId());
            map.put("quality", QualitySelect.select(mediaInfo.get("Video", "Height")).toString());
            rest.postForEntity("http://10.1.2.203:8080", map, String.class);
        }
    }

    @RequestMapping(value = "/pdfupload", method = RequestMethod.PUT)
    public void pdfUpload(@RequestBody byte[] file, HttpServletRequest request) throws UnsupportedEncodingException {
        InputStream chunk = new ByteArrayInputStream(file);
        String filename = URLDecoder.decode(request.getHeader("Content-Name"), "UTF-8");
        appendFile(chunk, new File("/mnt/data/files/" + request.getHeader("Content-Lecture") + "-" + filename));
        if (request.getHeader("Content-End") != null && request.getHeader("Content-End").equals(request.getHeader("Content-FileSize"))) {
            Lecture lecture = lectureRepository.findOne(Long.parseLong(request.getHeader("Content-Lecture")));
            lecture.setContent(filename);
            lecture.setContentType(ContentType.PDF);
            lectureRepository.save(lecture);
        }
    }

    private void appendFile(InputStream in, File dest) {
        OutputStream out = null;

        try {
            if (dest.exists()) {
                out = new BufferedOutputStream(new FileOutputStream(dest, true), BUFFER_SIZE);
            } else {
                out = new BufferedOutputStream(new FileOutputStream(dest), BUFFER_SIZE);
            }
            in = new BufferedInputStream(in, BUFFER_SIZE);

            int len = 0;
            byte[] buffer = new byte[BUFFER_SIZE];
            while ((len = in.read(buffer)) > 0) {
                out.write(buffer, 0, len);
            }
        } catch (Exception ex) {
            System.out.println(ex);
        } finally {
            try {
                if (in != null) {
                    in.close();
                }
                if (out != null) {
                    out.close();
                }
            } catch (IOException ex) {
                System.out.println(ex);
            }
        }
    }
}
