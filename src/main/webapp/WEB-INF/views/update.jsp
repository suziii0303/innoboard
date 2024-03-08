<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
	    <form name=myform id="updateForm" action="/board/updateBoard" method="POST">
	        <input type="hidden" id="num" name="num" value="${vo.num}"><br>
	        
	        <label for="boarId">제목 : </label>
	        <input type="text" id="title" name="title" value="${vo.title}"><br>
	        <label for="boarId">작성자 : </label>
	        <input type="text" id="writer" name="writer" value="${vo.writer}"><br>
	        <label for="boarId">내용 : </label>
	        <textarea rows="3" cols="20" id="content" name="content">${vo.content}</textarea>
	         <button id="btn" type="button">저장</button>
	    </form>
	</div>
</body>
<script src="/resources/js/jquery-1.9.1.js"></script>
<script>
	window.onload=function(){
		console.log("페이지가 로드되었습니다.");
	    let num = document.querySelector("#num").value;
	    console.log("num",num);
	    if (num === "") {
	        console.log("제목 입력란이 비활성화왜 안되는데");
	    	document.getElementById('writer').readOnly = false;
	    }else {
	    	document.getElementById('writer').readOnly = true;
	    }
	 }
 
	let btn = document.querySelector("#btn");
	btn.addEventListener("click",function(){
		let form = document.myform;
		let num = form.num.value;
	    let title = form.title.value;
	    let writer = form.writer.value;
	    let content = form.content.value;
		console.log("아녕 ",num);
		let date ={
				"num": num,
				"title": title,
				"writer": writer,
				"content": content
			};
		console.log("데이터 확인!!!!!!!!!!!!", date);
		$.ajax({
			url:"/board/updateBoard",
			type: "post",
			dataType : "json",
			data : JSON.stringify({
				"num": num,
				"title": title,
				"writer": writer,
				"content": content
			}),
			contentType :"application/json; charset-utf-8",
	        success: function(rslt){
	        	console.log('rslt',rslt);
	        	if(rslt == 1){
	        		alert("등록 되었습니다.");
	        		location.href = "/board/main"
	        	}
	        },
	        error: function(xhr, status, error) {
	              console.log("code: " + xhr.status);
	              console.log("message: " + xhr.responseText);
	              console.log("error: " + error);
	          }
			
			
		})
		
		
	})
	/* const num = document.querySelector("#num").value;

	let btn = document.querySelector("#btn");
	btn.addEventListener('click',function(){
		if (num != null){
			console.log("안녕",num)
			location.href= "/board/updateBoard?num="+num
		}else{
			document.sub.submit();
		}
	}) */
</script>


</html>