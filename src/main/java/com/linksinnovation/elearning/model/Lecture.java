package com.linksinnovation.elearning.model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@Entity
public class Lecture {

    @Id
    private Long id;
    private String name;
    private String vdo;
}
