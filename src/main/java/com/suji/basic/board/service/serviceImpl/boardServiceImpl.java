package com.suji.basic.board.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suji.basic.board.mapper.boardMapper;
import com.suji.basic.board.service.boardService;
import com.suji.basic.board.vo.boardVO;

@Service
public class boardServiceImpl implements boardService{
	
	@Autowired
	private boardMapper boardMapper;
	
	@Override
	public List<boardVO> selectAll() {
		
		return boardMapper.selectAll();
	}

}
