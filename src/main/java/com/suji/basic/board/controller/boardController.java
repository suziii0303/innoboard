package com.suji.basic.board.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.suji.basic.board.service.boardService;
import com.suji.basic.board.vo.boardVO;
import com.sun.javafx.collections.MappingChange.Map;

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
	
	@GetMapping("/selectOne/{num}")
	public ModelAndView selectOne(@PathVariable String num, ModelAndView mav){
		log.info("hihi");
		boardVO detailNum = new boardVO();
		detailNum.setNum(Integer.parseInt(num));
		boardVO vo = boardService.selectOne(detailNum);
		mav.addObject("vo",vo);
		mav.setViewName("/detail");
		return mav;
	}
	@ResponseBody
	@PostMapping("/delete")
	public int delete(@RequestBody boardVO voList) {
		System.out.println("-----"+ voList);
		List<String> Arr = voList.getVoList();
		boardVO vo = new boardVO();
		for (String list : Arr) {
			System.out.println(list);
			vo.setNum(Integer.parseInt(list));
		}
		return boardService.delete(vo);
		
	}
	/*
	 * @GetMapping("/updateFormview") public String updateFormview() { return
	 * "update"; }
	 */
	
	@GetMapping("/updateForm")
	public String updateForm(@RequestParam(name="num", required = false)String num, Model model) {
		if (num == null) {
		}else if(num != null) {
			boardVO  vo = new boardVO();
			vo.setNum(Integer.parseInt(num));
			boardVO updateId = boardService.selectOne(vo);
			model.addAttribute("vo",updateId);
		}
		return "update";
	}
	
	@PostMapping("/updateBoard")
	@ResponseBody
	public int updateBoard(@RequestBody boardVO boardVO) {
		System.out.println(boardVO.toString());
		int num = boardVO.getNum();
		
		if(num >0) {
			return boardService.update(boardVO);
		}else {
		 	return boardService.insert(boardVO);
		}
		
	}
	/*
	 * @PostMapping("/updateBoard") public String
	 * updateBoard(@RequestParam(name="num", required = false)String num, boardVO
	 * boardvo) { System.out.println(boardvo); System.out.println(num); if(num !=
	 * null) { boardService.update(boardvo); }else { boardService.insert(boardvo); }
	 * return "redirect:/board/main"; }
	 */
	
	

}
