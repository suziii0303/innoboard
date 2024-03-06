package com.suji.basic.board.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.suji.basic.board.service.boardService;
import com.suji.basic.board.vo.boardVO;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/board")
public class boardController {
	@Autowired
	private boardService boardService;
	
	@GetMapping("/main")
	public String boardMain() {
		return "tuigrid";
	}
	
	@ResponseBody
	@GetMapping("/all")
	public List<boardVO> selectAll(){
		System.out.println("오냐");
		List<boardVO> vo = boardService.selectAll();
		log.info("나왕{}",vo);
		//mav.addObject("vo",vo);
		//mav.setViewName("/tuigrid");
		return vo;
	}

}
