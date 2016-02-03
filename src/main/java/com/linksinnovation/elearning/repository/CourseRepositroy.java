package com.linksinnovation.elearning.repository;

import com.linksinnovation.elearning.model.Course;
import com.linksinnovation.elearning.model.Menu;
import com.linksinnovation.elearning.model.UserDetails;
import com.linksinnovation.elearning.model.enumuration.CourseStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
public interface CourseRepositroy extends JpaRepository<Course, Long> {

    public List<Course> findByUser(UserDetails userDetails);

    public List<Course> findByStatus(CourseStatus status);

    public List<Course> findByCategoryAndStatusOrSubCategoryAndStatus(Menu category, CourseStatus status1, Menu subCategory, CourseStatus status2);

    public Optional<Course> findByIdAndUser(Long id, UserDetails userDetails);
}
