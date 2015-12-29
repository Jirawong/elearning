package com.linksinnovation.elearning.controller.api;

import com.linksinnovation.elearning.model.Menu;
import com.linksinnovation.elearning.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Jirawong Wongdokpuang <jiraowng@linksinnovation.com>
 */

@RestController
@RequestMapping("/api")
public class MenuController {

    @Autowired
    private MenuRepository menuRepository;

    @RequestMapping(value = "/menu", method = RequestMethod.GET)
    public List<Menu> get() {
        return menuRepository.findByParentIsNull();
    }

    @RequestMapping(value = "/menu", method = RequestMethod.POST)
    public List<Menu> post(@RequestBody List<Menu> menus) {
        menuRepository.save(menus);
        return menuRepository.findByParentIsNull();
    }
}
