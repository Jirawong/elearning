package com.linksinnovation.elearning.model;

import lombok.Data;

import javax.persistence.*;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@Data
@Entity
public class Course {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String subTitle;
    private String details;
    private String lectures = "0 lectures";
    private String hours = "0 hours video";
    private String status = "Draft";
    @ManyToOne
    private Menu category;
    @ManyToOne
    private Menu subCategory;
    @ManyToOne
    private UserDetails user;

}
