package com.linksinnovation.elearning.controller;

import com.linksinnovation.elearning.model.Lecture;
import com.linksinnovation.elearning.repository.LectureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.*;

/**
 * Created by Kong on 12/26/2015 AD.
 */
@RestController
public class UploadController {

    private static final int BUFFER_SIZE = 1024 * 100;

    @Autowired
    private LectureRepository lectureRepository;

    @RequestMapping(value = "/upload", method = RequestMethod.PUT)
    public void upload(@RequestBody byte[] file, HttpServletRequest request) {
        InputStream chunk = new ByteArrayInputStream(file);
        appendFile(chunk, new File("/Users/Kong/"+request.getHeader("Content-Name")));
        if(request.getHeader("Content-End") != null && request.getHeader("Content-End").equals(request.getHeader("Content-FileSize"))){
            Lecture lecture = lectureRepository.findOne(Long.parseLong(request.getHeader("Content-Lecture")));
            lecture.setVdo(request.getHeader("Content-Name"));
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
