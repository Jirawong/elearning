package com.linksinnovation.elearning.model;

import com.linksinnovation.elearning.model.enumuration.CourseStatus;
import java.util.ArrayList;
import lombok.Data;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.concurrent.TimeUnit;

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
    @Column(nullable = false)
    private String cover = "draft.jpg";
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
    private List<Section> sections = new ArrayList<>();

    @PrePersist
    @PreUpdate
    public void summary(){
        Long lectures = 0L;
        Long hours = 0L;
        for(Section section : this.sections){
            lectures += section.getLectures().size();
            for(Lecture lecture : section.getLectures()){
                hours += lecture.getDuration();
            }
        }

        this.lectures = lectures + " lectures";
        this.hours = TimeUnit.MILLISECONDS.toHours(hours) + " hours video";
    }

}
