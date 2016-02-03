package com.linksinnovation.elearning.controller;

import com.linksinnovation.elearning.model.Lecture;
import com.linksinnovation.elearning.repository.LectureRepository;
import com.linksinnovation.elearning.utils.mediainfo.MediaInfo;
import com.linksinnovation.elearning.utils.mediainfo.MediaInfoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.client.RestTemplate;

/**
 * Created by Kong on 12/26/2015 AD.
 */
@RestController
public class UploadController {

    private static final int BUFFER_SIZE = 1024 * 100;

    @Autowired
    private LectureRepository lectureRepository;

    @RequestMapping(value = "/upload", method = RequestMethod.PUT)
    public void upload(@RequestBody byte[] file, HttpServletRequest request) throws IOException, InterruptedException {
        InputStream chunk = new ByteArrayInputStream(file);
        appendFile(chunk, new File("/mnt/data/source/"+request.getHeader("Content-Name")));
        if(request.getHeader("Content-End") != null && request.getHeader("Content-End").equals(request.getHeader("Content-FileSize"))){
            final MediaInfo mediaInfo = MediaInfoUtil.getMediaInfo("/mnt/data/source/"+request.getHeader("Content-Name"));
            Lecture lecture = lectureRepository.findOne(Long.parseLong(request.getHeader("Content-Lecture")));
            lecture.setVdo(request.getHeader("Content-Name"));
            lecture.setDuration(Long.parseLong(mediaInfo.get("Video", "Duration")));
            lectureRepository.save(lecture);
            
            RestTemplate rest = new RestTemplate();
            Map<String,String> map = new HashMap<>();
            map.put("input","/mnt/data/source/"+request.getHeader("Content-Name"));
            map.put("output","/mnt/data/convert/video-"+lecture.getId());
            map.put("quality", "720");
            rest.postForEntity("http://10.1.2.203:8080", map, String.class);
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
