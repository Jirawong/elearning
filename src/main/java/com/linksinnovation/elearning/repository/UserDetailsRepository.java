package com.linksinnovation.elearning.repository;

import com.linksinnovation.elearning.model.UserDetails;
import com.linksinnovation.elearning.model.enumuration.UserType;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
public interface UserDetailsRepository extends JpaRepository<UserDetails,String> {
    public UserDetails findByUsernameAndType(String username,UserType type);
}
