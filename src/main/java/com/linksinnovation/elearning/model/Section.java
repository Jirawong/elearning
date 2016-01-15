package com.linksinnovation.elearning.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@Entity
public class Section {

    @Id
    private Long id;
    private String name;
    @OneToMany
    private List<Lecture> lectures;
}
