/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.dto.BasicConditionDTO;
import com.linksinnovation.elearning.model.report.VideoAmount;
import com.linksinnovation.elearning.model.report.ViewAmount;
import com.linksinnovation.elearning.repository.VideoAmountRepository;
import com.linksinnovation.elearning.repository.ViewAmountRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
    
    @RequestMapping(value="/videoamount",method = RequestMethod.POST)
    public List<VideoAmount> videoAmount(@RequestBody BasicConditionDTO amountDTO){
        return videoAmountRepository.findByCondition(amountDTO);
    }
    
    @RequestMapping(value="/viewamount",method = RequestMethod.POST)
    public List<ViewAmount> viewAmount(@RequestBody BasicConditionDTO amountDTO){
        return viewAmountRepository.findByCondition(amountDTO);
    }
}
