package com.linksinnovation.elearning.model;

import com.linksinnovation.elearning.model.enumuration.CourseStatus;
import lombok.Data;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

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
    @Enumerated(EnumType.STRING)
    private CourseStatus status = CourseStatus.DRAFT;
    @ManyToOne
    private Menu category;
    @ManyToOne
    private Menu subCategory;
    @ManyToOne
    @JsonIgnore
    private UserDetails user;
    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Section> sections;

}
