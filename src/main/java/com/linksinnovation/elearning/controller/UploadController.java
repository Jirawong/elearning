package com.linksinnovation.elearning.controller;

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

    @RequestMapping(value = "/upload", method = RequestMethod.PUT)
    public void upload(@RequestBody byte[] file, HttpServletRequest request) {
        InputStream chunk = new ByteArrayInputStream(file);
        appendFile(chunk, new File("/Users/Kong/"+request.getHeader("Content-Name")));
        System.out.println(request.getHeader("Content-Range"));
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
