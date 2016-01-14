package com.linksinnovation.elearning.repository;

import com.linksinnovation.elearning.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
public interface UserDetailsRepository extends JpaRepository<UserDetails,String> {
}
