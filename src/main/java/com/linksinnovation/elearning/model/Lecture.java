package com.linksinnovation.elearning.model;

import com.linksinnovation.elearning.utils.time.TimeConvert;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@Data
@Entity
public class Lecture {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String vdo;
    private Long duration;
    
    public String getDurationString(){
        return TimeConvert.fromMilisec(this.duration);
    }
}
