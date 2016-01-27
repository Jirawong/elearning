package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Course;
import com.linksinnovation.elearning.model.Menu;
import com.linksinnovation.elearning.model.enumuration.CourseStatus;
import com.linksinnovation.elearning.repository.CourseRepositroy;
import com.linksinnovation.elearning.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@RestController
@RequestMapping("/api/category")
public class CategoryConstroller {

    @Autowired
    private CourseRepositroy courseRepositroy;
    @Autowired
    private MenuRepository menuRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Course> get() {
        return courseRepositroy.findByStatus(CourseStatus.PUBLISH);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<Course> get(@PathVariable("id") Long id) {
        Menu menu = menuRepository.findOne(id);
        return courseRepositroy.findByStatusAndCategoryOrSubCategory(CourseStatus.PUBLISH, menu, menu);
    }
}
