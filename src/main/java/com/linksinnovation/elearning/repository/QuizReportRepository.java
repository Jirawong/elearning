/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.linksinnovation.elearning.repository;

import com.linksinnovation.elearning.model.report.QuizReport;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Jirawong Wongdokpuang <jirawong@linksinnovation.com>
 */
@Repository
public class QuizReportRepository {
    @PersistenceContext
    private EntityManager em;
    
    private static final String query = "select course,name,pass,total from report_quiz";
    
    public List<QuizReport> findQuizReport(Map<String,Long> map){
        if(null != map.get("category")){
            String queryString = query+" WHERE category_id=:cat";
            if(null != map.get("subcategory")){
                queryString = queryString+" AND sub_category_id=:subcat";
            }
            if(null != map.get("course")){
                queryString = queryString+" AND course_id=:course";
            }
            queryString = queryString+" ORDER BY course_id,name ASC";
            
            Query q = em.createNativeQuery(queryString);
            q.setParameter("cat", map.get("category"));
            if(null != map.get("subcategory")){
                q.setParameter("subcat", map.get("subcategory"));
            }
            if(null != map.get("course")){
                q.setParameter("course", map.get("course"));
            }
            return mapObject(q.getResultList());
        }else{
            String queryString = query+" ORDER BY course_id,name ASC";
            Query q = em.createNativeQuery(queryString);
            return mapObject(q.getResultList());
        }
    }

    private List<QuizReport> mapObject(List<Object[]> resultList) {
        List<QuizReport> quizReports = new ArrayList<>();
        resultList.stream().forEach((o) -> {
            quizReports.add(new QuizReport(""+o[0], ""+o[1], (Integer)o[2], (Integer)o[3]));
        });
        return quizReports;
    }
}
