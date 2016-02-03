package com.linksinnovation.elearning.config;

import com.linksinnovation.elearning.model.UserDetails;
import com.linksinnovation.elearning.model.authen.Authen;
import com.linksinnovation.elearning.model.authen.UserInfo;
import com.linksinnovation.elearning.model.enumuration.UserType;
import com.linksinnovation.elearning.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    
    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        if (iserviceAuthen(authentication)) {
            List<GrantedAuthority> grantedAuths = new ArrayList<>();
            grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
            Authentication auth = new UsernamePasswordAuthenticationToken(authentication.getName(), authentication.getCredentials().toString(), grantedAuths);
            return auth;
        } else {
            return null;
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
    
    private boolean iserviceAuthen(Authentication authentication){
        RestTemplate rest = new RestTemplate();
        Map<String,String> map = new HashMap<>();
        map.put("username", authentication.getName());
        map.put("password",authentication.getCredentials().toString());
        
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Basic YWRtaW46YWRtaW4=");
        HttpEntity<String> request = new HttpEntity<>(headers);
        //ResponseEntity<Authen> postForEntity = rest.postForEntity("http://iservice.mitrphol.com/iAuthen/rest/authenInfo/Authen", map, Authen.class);
        
        if(false){
            ResponseEntity<UserInfo> forEntity = rest.getForEntity("http://iservice.mitrphol.com/iHR/rest/personal/GetMitrpholEmployee/APPTIVIDIA_DEV/"+authentication.getName(), UserInfo.class);
            if(forEntity.getBody().getResults().size() > 0){
                UserDetails user = forEntity.getBody().getResults().get(0);
                user.setType(UserType.ISERVICE);
                userDetailsRepository.save(user);
                return true;
            }
        }
        
        return false;
    }
}
