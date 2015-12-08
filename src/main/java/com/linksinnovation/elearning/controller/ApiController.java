package com.linksinnovation.elearning.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Jirawong Wongdokpuang <jirawong@linksinnovation.com>
 */
@Controller
public class ApiController {

    @RequestMapping("/api/index")
    public String get() {
        return "index";
    }
}
