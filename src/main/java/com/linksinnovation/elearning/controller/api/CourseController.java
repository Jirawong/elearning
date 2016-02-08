package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Course;
import com.linksinnovation.elearning.model.UserDetails;
import com.linksinnovation.elearning.model.enumuration.CourseStatus;
import com.linksinnovation.elearning.repository.CourseRepositroy;
import com.linksinnovation.elearning.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

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
    public Long create(@AuthenticationPrincipal String username) {
        UserDetails userDetails = userDetailsRepository.findOne(username.toUpperCase());
        Course course = new Course();
        course.setUser(userDetails);
        return courseRepositroy.save(course).getId();
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Course> get(@AuthenticationPrincipal String username) {
        UserDetails userDetails = userDetailsRepository.findOne(username.toUpperCase());
        return courseRepositroy.findByUser(userDetails);
    }

    @RequestMapping(value = "/status", method = RequestMethod.POST)
    public Course toggleStatus(@RequestBody Course course) {
        if (course.getStatus().equals(CourseStatus.DRAFT) || course.getStatus().equals(CourseStatus.UNPUBLISH)) {
            course.setStatus(CourseStatus.PUBLISH);
        } else {
            course.setStatus(CourseStatus.UNPUBLISH);
        }
        return courseRepositroy.save(course);
    }

    @RequestMapping(value = "/basic/{id}", method = RequestMethod.GET)
    public Course basic(@PathVariable("id") Long id) {
        return courseRepositroy.findOne(id);
    }

    @RequestMapping(value = "/basic", method = RequestMethod.POST)
    public Course basic(@RequestBody Course course,@AuthenticationPrincipal String username) {
        UserDetails userDetails = userDetailsRepository.findOne(username.toUpperCase());
        course.setUser(userDetails);
        course.setLectures("0 lectures");
        return courseRepositroy.save(course);
    }

}
