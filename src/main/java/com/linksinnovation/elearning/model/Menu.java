package com.linksinnovation.elearning.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */

@Data
@Entity
public class Menu {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String url;
    @Column(nullable = false)
    private Double ordered = 999999D;

    @ManyToOne
    @JoinColumn(name = "PARENT_ID")
    @JsonBackReference
    private Menu parent;

    @JsonManagedReference
    @OrderBy("ordered ASC")
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Menu> childs;

    @PrePersist
    private void updateParent() {
        if (this.getChilds() != null) {
            for (Menu menu : this.getChilds()) {
                menu.setParent(this);
            }
        }
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Menu menu = (Menu) o;

        return id != null ? id.equals(menu.id) : menu.id == null;

    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
