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
		
		<p id="boardId">${vo.num}</p>
		<p>${vo.title}</p>
		<p>${vo.writer}</p>
		<p>${vo.content}</p>
		
		<div>
			<button id="deleteButton">삭제</button>
			<button onclick="update()">수정</button>
		</div>
	</div>
</body>
	<script src="/resources/js/jquery-1.9.1.js"></script>
	<script>
		function update(){
			const num = document.querySelector("#boardId").innerText;
			location.href = "/board/updateForm?num=" + num;
		}
		
	    const deleteBtn = document.getElementById('deleteButton');
    	deleteBtn.addEventListener('click', function() {
    	const boardId = document.querySelector("#boardId").innerText;
    		console.log("boardId",boardId);
    		let a = [];
    		a.push(boardId);
	        let data = {voList : a};
	        console.log("qoduff" , data)
	        // ajax 만들기
	 	    var v_ajax = new XMLHttpRequest();
	        //v_ajax.open("메소드","주소" ,비동기여부);
	        v_ajax.open("post","/board/delete" ,true);
	        v_ajax.setRequestHeader('Content-Type', 'application/json');
	        //이벤트
	        v_ajax.onreadystatechange = function(){
	        	// 4 이거나 200 일때만 성공
	           if(v_ajax.readyState == 4 && v_ajax.status == 200){
	             console.log(v_ajax.responseText);
	              if(v_ajax.responseText ==1){
	            	  location.href ="/board/main";
	              }
	             // 값 나오면 여기서 작업
	           }
	        }
	        v_ajax.send(JSON.stringify({voList:a}));
	    });

	</script>
	
</html>

