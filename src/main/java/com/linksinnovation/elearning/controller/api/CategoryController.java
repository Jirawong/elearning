package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Course;
import com.linksinnovation.elearning.model.Menu;
import com.linksinnovation.elearning.model.UserDetails;
import com.linksinnovation.elearning.model.enumuration.CourseStatus;
import com.linksinnovation.elearning.repository.CourseRepositroy;
import com.linksinnovation.elearning.repository.MenuRepository;
import com.linksinnovation.elearning.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CourseRepositroy courseRepositroy;
    @Autowired
    private MenuRepository menuRepository;
    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Course> get(@AuthenticationPrincipal String user) {
        List<Course> courses = courseRepositroy.findByStatus(CourseStatus.PUBLISH);
        UserDetails userDetails = userDetailsRepository.findOne(user.toUpperCase());
        courses.stream().forEach((course) -> {
            course.getWishlists().stream().filter((wishlist) -> (wishlist.getUser().equals(userDetails))).forEach((_item) -> {
                course.setWishlist(true);
            });
        });
        
        return courses;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<Course> get(@PathVariable("id") Long id,@AuthenticationPrincipal String user) {
        Menu menu = menuRepository.findOne(id);
        UserDetails userDetails = userDetailsRepository.findOne(user.toUpperCase());
        List<Course> courses = courseRepositroy.findByCategoryAndStatusOrSubCategoryAndStatus(menu, CourseStatus.PUBLISH, menu, CourseStatus.PUBLISH);
        courses.stream().forEach((course) -> {
            course.getWishlists().stream().filter((wishlist) -> (wishlist.getUser().equals(userDetails))).forEach((_item) -> {
                course.setWishlist(true);
            });
        });
        return courses;
    }
}
