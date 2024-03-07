package com.suji.basic.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.suji.basic.board.vo.boardVO;

@Mapper
public interface boardMapper {
	
	List<boardVO> selectAll();
	boardVO selectOne(boardVO num);
	int delete(boardVO num);
	int update(boardVO vo);

}
