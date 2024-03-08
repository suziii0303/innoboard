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

	@Override
	public boardVO selectOne(boardVO num) {
		return boardMapper.selectOne(num);
	}

	@Override
	public int delete(boardVO num) {
		return boardMapper.delete(num);
	}

	@Override
	public int update(boardVO vo) {
		return boardMapper.update(vo);
	}

	@Override
	public int insert(boardVO vo) {
		return boardMapper.insert(vo);
	}



}
