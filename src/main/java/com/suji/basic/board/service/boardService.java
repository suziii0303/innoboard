package com.suji.basic.board.service;

import java.util.List;

import com.suji.basic.board.vo.boardVO;

public interface boardService {
	
	public List<boardVO> selectAll(String keyword);
	public boardVO selectOne(boardVO num);
	public int update(boardVO vo);
	public int insert(boardVO vo);
	public int delete(int num);
}
