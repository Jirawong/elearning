/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.linksinnovation.elearning.repository;

import com.linksinnovation.elearning.model.report.ProgressReport;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * @author Jirawong Wongdokpuang <jirawong@linksinnovation.com>
 */
@Repository
public class ProgressReportRepository {
    @PersistenceContext
    private EntityManager em;
    
    private static final String query = "select name,course,pass,total,view,total_lecture from report_progress where creator=:creator";
    private static final String queryUser = "select name,course,pass,total,view,total_lecture from report_progress where username=:username";
    
    public List<ProgressReport> findReport(@RequestBody Map<String,Long> map,String username){
        if(null != map.get("category")){
            String queryString = query+" AND category_id=:cat";
            if(null != map.get("subcategory")){
                queryString = queryString+" AND sub_category_id=:subcat";
            }
            if(null != map.get("course")){
                queryString = queryString+" AND course_id=:course";
            }
            queryString = queryString+" ORDER BY name,course_id ASC";
            
            Query q = em.createNativeQuery(queryString);
            q.setParameter("cat", map.get("category"));
            q.setParameter("creator", username);
            if(null != map.get("subcategory")){
                q.setParameter("subcat", map.get("subcategory"));
            }
            if(null != map.get("course")){
                q.setParameter("course", map.get("course"));
            }
            return mapObject(q.getResultList());
        }else{
            String queryString = query+" ORDER BY name,course_id ASC";
            Query q = em.createNativeQuery(queryString);
            q.setParameter("creator", username);
            return mapObject(q.getResultList());
        }
    }
    
    public List<ProgressReport> findUserReport(@RequestBody Map<String,Long> map,String username){
        if(null != map.get("category")){
            String queryString = queryUser+" AND category_id=:cat";
            if(null != map.get("subcategory")){
                queryString = queryString+" AND sub_category_id=:subcat";
            }
            if(null != map.get("course")){
                queryString = queryString+" AND course_id=:course";
            }
            queryString = queryString+" ORDER BY name,course_id ASC";
            
            Query q = em.createNativeQuery(queryString);
            q.setParameter("cat", map.get("category"));
            q.setParameter("username", username);
            if(null != map.get("subcategory")){
                q.setParameter("subcat", map.get("subcategory"));
            }
            if(null != map.get("course")){
                q.setParameter("course", map.get("course"));
            }
            return mapObject(q.getResultList());
        }else{
            String queryString = queryUser+" ORDER BY name,course_id ASC";
            Query q = em.createNativeQuery(queryString);
            q.setParameter("username", username);
            return mapObject(q.getResultList());
        }
    }

    private List<ProgressReport> mapObject(List<Object[]> resultList) {
        List<ProgressReport> instructorReports = new ArrayList<>();
        for(Object[] o : resultList){
            instructorReports.add(new ProgressReport(""+o[0], ""+o[1], (Integer)o[2], (Integer)o[3], (BigInteger)o[4], (BigInteger)o[5]));
        }
        return instructorReports;
    }
}
