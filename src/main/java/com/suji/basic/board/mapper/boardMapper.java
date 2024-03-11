package com.suji.basic.board.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.suji.basic.board.vo.boardVO;

@Mapper
public interface boardMapper {
	
	List<boardVO> selectAll(String keyword);
	boardVO selectOne(boardVO num);
	int delete(int num);
	int update(boardVO vo);
	int insert(boardVO vo);

}
