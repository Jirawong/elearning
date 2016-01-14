package com.linksinnovation.elearning.repository;

import com.linksinnovation.elearning.model.Course;
import com.linksinnovation.elearning.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
public interface CourseRepositroy extends JpaRepository<Course, Long> {
    public List<Course> findByUser(UserDetails userDetails);
}
