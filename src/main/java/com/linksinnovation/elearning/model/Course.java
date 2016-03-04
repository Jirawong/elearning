package com.linksinnovation.elearning.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.linksinnovation.elearning.model.enumuration.CourseStatus;
import java.util.ArrayList;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@Entity
public class Course {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String subTitle;
    @Column(length = 4000)
    private String details;
    @Column(nullable = false)
    private String cover = "draft.jpg";
    private String lectures = "0 lectures";
    private String hours = "0 hours video";
    @Enumerated(EnumType.STRING)
    private CourseStatus status = CourseStatus.DRAFT;
    @OneToOne
    private Menu category;
    @OneToOne
    private Menu subCategory;
    @OneToOne
    private UserDetails creator;
    @ManyToMany
    private List<UserDetails> instructors;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Section> sections = new ArrayList<>();
    @OneToMany
    @JsonIgnore
    private List<Wishlist> wishlists;
    private boolean wishlist = false;
    @OrderBy("id DESC")
    @OneToMany(cascade = CascadeType.ALL)
    private List<Topic> topics;
    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Rating> ratings;
    private Integer point;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Quiz> quizzes = new ArrayList<>();;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getLectures() {
        return lectures;
    }

    public void setLectures(String lectures) {
        this.lectures = lectures;
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }

    public CourseStatus getStatus() {
        return status;
    }

    public void setStatus(CourseStatus status) {
        this.status = status;
    }

    public Menu getCategory() {
        return category;
    }

    public void setCategory(Menu category) {
        this.category = category;
    }

    public Menu getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(Menu subCategory) {
        this.subCategory = subCategory;
    }

    public UserDetails getCreator() {
        return creator;
    }

    public void setCreator(UserDetails creator) {
        this.creator = creator;
    }

    public List<UserDetails> getInstructors() {
        return instructors;
    }

    public void setInstructors(List<UserDetails> instructors) {
        this.instructors = instructors;
    }

    public void addInstructor(UserDetails instructor) {
        if (this.instructors == null) {
            this.instructors = new ArrayList<>();
        }
        this.instructors.add(instructor);
    }

    public void removeInstructor(UserDetails instructor) {
        this.instructors.remove(instructor);
    }

    public List<Section> getSections() {
        return sections;
    }

    public void setSections(List<Section> sections) {
        this.sections = sections;
    }

    public List<Wishlist> getWishlists() {
        return wishlists;
    }

    public void setWishlists(List<Wishlist> wishlists) {
        this.wishlists = wishlists;
    }

    public boolean isWishlist() {
        return wishlist;
    }

    public void setWishlist(boolean wishlist) {
        this.wishlist = wishlist;
    }

    public List<Topic> getTopics() {
        return topics;
    }

    public void setTopics(List<Topic> topics) {
        this.topics = topics;
    }

    public void addTopic(Topic topic) {
        if (this.topics == null) {
            this.topics = new ArrayList<>();
        }
        this.topics.add(topic);
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public void addRating(Rating rating) {
        if (this.ratings == null) {
            this.ratings = new ArrayList<>();
        }
        rating.setCourse(this);
        this.ratings.add(rating);
    }

    public Integer getVote() {
        if (this.ratings == null) {
            return 0;
        }
        return this.ratings.size();
    }

    public float getPercentRate() {
        if (this.ratings == null || 0 == this.ratings.size()) {
            return 0f;
        }
        int total = this.ratings.size() * 5;
        int sum = this.ratings.stream().mapToInt(r -> r.getPoint()).sum();
        return ((float)sum / (float)total) * 100;
    }

    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }

    public List<Quiz> getQuizzes() {
        return quizzes;
    }

    public void setQuizzes(List<Quiz> quizzes) {
        this.quizzes = quizzes;
    }
    
    public void addQuiz(Quiz quiz){
        this.quizzes.add(quiz);
    }
    

    @PrePersist
    @PreUpdate
    public void summary() {
        Long lectures = 0L;
        Long hours = 0L;
        for (Section section : this.sections) {
            lectures += section.getLectures().size();
            for (Lecture lecture : section.getLectures()) {
                hours += lecture.getDuration();
            }
        }

        this.lectures = lectures + " lectures";
        this.hours = TimeUnit.MILLISECONDS.toHours(hours) + " hours video";
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 19 * hash + Objects.hashCode(this.id);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Course other = (Course) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

}
