/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.linksinnovation.elearning.model.report;

import java.util.Date;

/**
 *
 * @author Jirawong Wongdokpuang <jirawong@linksinnovation.com>
 */
public class ViewAmount {
    private Date updateDate;
    private String user;
    private String lecture;

    public ViewAmount(Date updateDate, String user, String lecture) {
        this.updateDate = updateDate;
        this.user = user;
        this.lecture = lecture;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public String getUser() {
        return user;
    }

    public String getLecture() {
        return lecture;
    }
    
    
}
