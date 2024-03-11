package com.suji.basic.board.vo;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class boardVO {
    private int num; 
    private String title; 
    private String content; 
    private String writer; 
    private Date cdate; 
    private String strdate; 
    private int hit;
    private String state;
    private String keyword;
    
	private List<String> voList; 
}
