<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<form action="/board/updateBoard" method="POST">
			<div>
				<label for="boarId">번호 : </label>
				<input type="text" id="num" value="${vo.num}" readonly="readonly" ><br>
				<label for="boarId">제목 : </label>
				<input type="text"value="${vo.title}"><br>
				<label for="boarId">작성자 : </label>
				<input type="text" value="${vo.writer}" readonly="readonly"><br>
				<label for="boarId">내용 : </label>
				<textarea rows="3" cols="20" >${vo.content}</textarea>
			</div>
			<div>
				<!-- <button  type="button" id="deleteButton">삭제</button> -->
				<button type="submit">저장</button>
			</div>
		</form>
	</div>
</body>
</html>