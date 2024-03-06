package com.suji.basic.board.service;

import java.util.List;

import com.suji.basic.board.vo.boardVO;

public interface boardService {
	
	public List<boardVO> selectAll();
	public boardVO selectOne(boardVO num);
}
