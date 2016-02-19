package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Course;
import com.linksinnovation.elearning.model.Rating;
import com.linksinnovation.elearning.model.UserDetails;
import com.linksinnovation.elearning.model.enumuration.CourseStatus;
import com.linksinnovation.elearning.repository.CourseRepositroy;
import com.linksinnovation.elearning.repository.RatingRepository;
import com.linksinnovation.elearning.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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
    @Autowired
    private RatingRepository ratingRepository;

    @RequestMapping(value = "/create", method = RequestMethod.GET)
    public Long create(@AuthenticationPrincipal String username) {
        UserDetails userDetails = userDetailsRepository.findOne(username.toUpperCase());
        Course course = new Course();
        course.setCreator(userDetails);
        course.addInstructor(userDetails);
        return courseRepositroy.save(course).getId();
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Course> get(@AuthenticationPrincipal String username) {
        UserDetails userDetails = userDetailsRepository.findOne(username.toUpperCase());
        return courseRepositroy.findByCreator(userDetails);
    }

    @RequestMapping(value = "/status", method = RequestMethod.POST)
    public Course toggleStatus(@RequestBody Course course) {
        Course findOne = courseRepositroy.findOne(course.getId());
        if (findOne.getStatus().equals(CourseStatus.DRAFT) || findOne.getStatus().equals(CourseStatus.UNPUBLISH)) {
            findOne.setStatus(CourseStatus.PUBLISH);
        } else {
            findOne.setStatus(CourseStatus.UNPUBLISH);
        }
        return courseRepositroy.save(findOne);
    }

    @RequestMapping(value = "/basic/{id}", method = RequestMethod.GET)
    public Course basic(@PathVariable("id") Long id,@AuthenticationPrincipal String username) {
        Course course = courseRepositroy.findOne(id);
        UserDetails userDetails = userDetailsRepository.findOne(username.toUpperCase());
        List<Rating> ratings = ratingRepository.findByUserAndCourse(userDetails, course);
        if(ratings.isEmpty()){
            course.setPoint(0);
        }else{
            course.setPoint(ratings.get(0).getPoint());
        }
        return course;
    }

    @RequestMapping(value = "/basic", method = RequestMethod.POST)
    public Course basic(@RequestBody Course course,@AuthenticationPrincipal String username) {
        Course findOne = courseRepositroy.findOne(course.getId());
        UserDetails userDetails = userDetailsRepository.findOne(username.toUpperCase());
        course.setCreator(userDetails);
        course.setLectures("0 lectures");
        course.setWishlists(findOne.getWishlists());
        course.setRatings(findOne.getRatings());
        return courseRepositroy.save(course);
    }
    
    @RequestMapping(value = "/instructor", method = RequestMethod.POST)
    public Course addInstructor(@RequestBody Map<String,String> params){
        UserDetails userDetails = userDetailsRepository.findOne(params.get("username").toUpperCase());
        Course course = courseRepositroy.findOne(Long.parseLong(params.get("course")));
        course.addInstructor(userDetails);
        return courseRepositroy.save(course);
    }
    
    @RequestMapping(value = "/instructor", method = RequestMethod.DELETE)
    public Course removeInstructor(@RequestBody Map<String,String> params){
        UserDetails userDetails = userDetailsRepository.findOne(params.get("username").toUpperCase());
        Course course = courseRepositroy.findOne(Long.parseLong(params.get("course")));
        course.removeInstructor(userDetails);
        return courseRepositroy.save(course);
    }

}
