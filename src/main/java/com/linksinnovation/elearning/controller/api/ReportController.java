/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.dto.BasicConditionDTO;
import com.linksinnovation.elearning.dto.CourseDTO;
import com.linksinnovation.elearning.model.report.ProgressReport;
import com.linksinnovation.elearning.model.report.QuizReport;
import com.linksinnovation.elearning.model.report.VideoAmount;
import com.linksinnovation.elearning.model.report.ViewAmount;
import com.linksinnovation.elearning.repository.CourseDTORepository;
import com.linksinnovation.elearning.repository.ProgressReportRepository;
import com.linksinnovation.elearning.repository.QuizReportRepository;
import com.linksinnovation.elearning.repository.VideoAmountRepository;
import com.linksinnovation.elearning.repository.ViewAmountRepository;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jirawong Wongdokpuang <jirawong@linksinnovation.com>
 */
@RestController
@RequestMapping("/api/report")
public class ReportController {
    
    @Autowired
    private VideoAmountRepository videoAmountRepository;
    @Autowired
    private ViewAmountRepository viewAmountRepository;
    @Autowired
    private CourseDTORepository courseDTORepository;
    @Autowired
    private QuizReportRepository quizReportRepository;
    @Autowired
    private ProgressReportRepository instructorReportRepository;
    
    @RequestMapping(value="/videoamount",method = RequestMethod.POST)
    public List<VideoAmount> videoAmount(@RequestBody BasicConditionDTO amountDTO){
        return videoAmountRepository.findByCondition(amountDTO);
    }
    
    @RequestMapping(value="/viewamount",method = RequestMethod.POST)
    public List<ViewAmount> viewAmount(@RequestBody BasicConditionDTO amountDTO){
        return viewAmountRepository.findByCondition(amountDTO);
    }
    
    @RequestMapping(value="/listcourse",method = RequestMethod.POST)
    public List<CourseDTO> courseList(@RequestBody Map<String,Long> map){
        return courseDTORepository.findByCategory(map);
    }
    
    @RequestMapping(value="/quizreport",method = RequestMethod.POST)
    public List<QuizReport> quizreport(@RequestBody Map<String,Long> map){
        return quizReportRepository.findQuizReport(map);
    }
    
    @RequestMapping(value="/instructor",method = RequestMethod.POST)
    public List<ProgressReport> instructorReport(@RequestBody Map<String,Long> map,@AuthenticationPrincipal String username){
        return instructorReportRepository.findReport(map, username);
    }
    
    @RequestMapping(value="/user",method = RequestMethod.POST)
    public List<ProgressReport> userReport(@RequestBody Map<String,Long> map,@AuthenticationPrincipal String username){
        return instructorReportRepository.findUserReport(map, username);
    }
}
