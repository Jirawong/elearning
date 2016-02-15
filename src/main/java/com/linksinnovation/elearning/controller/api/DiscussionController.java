/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Course;
import com.linksinnovation.elearning.model.Reply;
import com.linksinnovation.elearning.model.Topic;
import com.linksinnovation.elearning.model.UserDetails;
import com.linksinnovation.elearning.repository.CourseRepositroy;
import com.linksinnovation.elearning.repository.TopicRepository;
import com.linksinnovation.elearning.repository.UserDetailsRepository;
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
@RequestMapping("/api")
public class DiscussionController {
    
    @Autowired
    private UserDetailsRepository userDetailsRepository;
    @Autowired
    private CourseRepositroy courseRepositroy;
    @Autowired
    private TopicRepository topicRepository;
    
    @RequestMapping(value = "/savetopic",method = RequestMethod.POST)
    public Course saveTopic(@RequestBody Map<String,String> params,@AuthenticationPrincipal String username){
        UserDetails user = userDetailsRepository.findOne(username.toUpperCase());
        Topic topic = new Topic();
        topic.setMessage(params.get("message"));
        topic.setUser(user);
        Course course = courseRepositroy.findOne(Long.parseLong(params.get("course")));
        course.addTopic(topic);
        return courseRepositroy.save(course);
    }
    
    @RequestMapping(value = "/savereply",method = RequestMethod.POST)
    public Course saveReply(@RequestBody Map<String,String> params,@AuthenticationPrincipal String username){
        UserDetails user = userDetailsRepository.findOne(username.toUpperCase());
        Course course = courseRepositroy.findOne(Long.parseLong(params.get("course")));
        Reply reply = new Reply();
        reply.setMessage(params.get("message"));
        reply.setUser(user);
        for(Topic topic : course.getTopics()){
            if(Long.parseLong(params.get("topic")) == topic.getId()){
                topic.addReply(reply);
            }
        }
        return courseRepositroy.save(course);
    }
}
