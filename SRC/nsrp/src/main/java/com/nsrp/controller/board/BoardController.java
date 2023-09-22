package com.nsrp.controller.board;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class BoardController{


    /**
     *  TBL_BOARD  게시판 리스트
     *  @return map
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String main(String bdTypeCd, HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
        model.addAttribute("bdTypeCd", bdTypeCd);
        return "main/main";
    }

}
