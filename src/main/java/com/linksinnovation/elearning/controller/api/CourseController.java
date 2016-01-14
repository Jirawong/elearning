package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Course;
import com.linksinnovation.elearning.model.UserDetails;
import com.linksinnovation.elearning.repository.CourseRepositroy;
import com.linksinnovation.elearning.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private CourseRepositroy courseRepositroy;
    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @RequestMapping(value = "/create", method = RequestMethod.GET)
    public Long create() {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDetails userDetails = userDetailsRepository.findOne(userName);
        Course course = new Course();
        course.setUser(userDetails);
        return courseRepositroy.save(course).getId();
    }

    @RequestMapping(value = "/basic/{id}", method = RequestMethod.GET)
    public Course basic(@PathVariable("id") Long id) {
        return courseRepositroy.findOne(id);
    }

    @RequestMapping(value = "/basic", method = RequestMethod.POST)
    public Course basic(@RequestBody Course course) {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDetails userDetails = userDetailsRepository.findOne(userName);
        course.setUser(userDetails);
        return courseRepositroy.save(course);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Course> get() {
        String userName = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserDetails userDetails = userDetailsRepository.findOne(userName);
        return courseRepositroy.findByUser(userDetails);
    }

}
