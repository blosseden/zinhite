package com.nsrp.controller.main;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class MainController {


    /**
     *  TBL_BOARD  게시판 리스트
     *  @return map
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String main() throws Exception {
        return "main/main";
    }

}
