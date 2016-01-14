package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Menu;
import com.linksinnovation.elearning.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    @Autowired
    private MenuRepository menuRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Menu> get() {
        return menuRepository.findByParentIsNullOrderByOrderedAsc();
    }

    @RequestMapping(method = RequestMethod.POST)
    public List<Menu> post(@RequestBody List<Menu> menus) {
        menuRepository.save(menus);
        return menuRepository.findByParentIsNullOrderByOrderedAsc();
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public List<Menu> delete(@RequestBody Map<String,Long> map){
        menuRepository.delete(map.get("id"));
        return menuRepository.findByParentIsNullOrderByOrderedAsc();
    }
}
