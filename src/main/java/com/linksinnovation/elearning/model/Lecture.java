package com.linksinnovation.elearning.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.linksinnovation.elearning.model.enumuration.ContentType;
import com.linksinnovation.elearning.utils.time.TimeConvert;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@Entity
public class Lecture {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String content;
    @Enumerated(EnumType.STRING)
    private ContentType contentType;
    @Column(nullable = false)
    private Long duration = 0L;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public ContentType getContentType() {
        return contentType;
    }

    public void setContentType(ContentType contentType) {
        this.contentType = contentType;
    }

    public Long getDuration() {
        return duration;
    }

    public void setDuration(Long duration) {
        this.duration = duration;
    }

    @JsonProperty
    public String getDurationString(){
        return TimeConvert.fromMilisec(this.duration);
    }
}
