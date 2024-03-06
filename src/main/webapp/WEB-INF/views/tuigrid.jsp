<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
 <title>CRUD 연습</title>
  <link rel="stylesheet" href="/resources/css/reset.css">
  <link rel="stylesheet" href="/resources/css/swiper-bundle.min.css">
  <link rel="stylesheet" href="/resources/css/mdi-style.css">
  <link rel="stylesheet" href="/resources/css/tui-grid.css">
  <link rel="stylesheet" href="/resources/css/tui-pagination.css">
  <link rel="stylesheet" href="/resources/css/sub-style.css">
</head>

<body>
  <section class="sub-page">
    <div class="s__container">
      <div class="s__row">
        <div class="rayout02">
          <div class="board01">
            <form>
              <div class="border-search01">
                <input type="text" name="searchKeyword" />
                <button class="btn-main">검색</button>
                <!-- <button type="button" class="btn-main" onclick="ajaxBtn()">Ajax</button> -->
                
                <!-- <a href="#" onclick="redirectToAll()">나와랏</a> -->
             	<c:forEach items="${vo}" var="vo">
    				<p>${vo.title}</p>
    				<p>${vo.content}</p>
    				<p>${vo.writer}</p>
				</c:forEach>
              </div>
            </form>
            <!--해당 div에 리스트를 출력해보기-->
            <div id="grid"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="s__footer"></div>
  <script src="/resources/js/jquery-1.9.1.js"></script>
  <script src="/resources/js/tui-pagination.js"></script>
  <script src="/resources/js/tui-grid.js"></script>
  <script>
/* 	  function redirectToAll() {
		    window.location.href = '/board/all';
		} */
/* 	  function clickE(){
		    alert('버튼 클릭');
		}
		let btn = document.getElementById("ajaxBtn");
		btn.addEventListener("click", clickE);
	   */
/* 	    let btn = document.getElementById("ajaxBtn");

	    btn.onclick = function() {
	        alert('버튼 클릭');
	    }; */
	    window.onload=function(){
	    	boardList();
	    }
	    
	    function boardList() {
	        $.ajax({
	        	url:"/board/all",
	        	method:"get",
	        	dataType : "json",
	        	success: function(rslt){
	        		console.log("체크",rslt);
	        		const grid = new tui.Grid({
	        		      el: document.getElementById("grid"),
	        		      data: rslt,//여기에 api 넣는것임  url
	        		      scrollX: true,
	        		      scrollY: false,
	        		      minBodyHeight: 30,
	        		      rowHeaders: [{
	        		        type: 'num',
	        		        header: "번호",
	        		        width: 80,
	        		      }],
	        		      pageOptions: {
	        		        useClient: true,
	        		        perPage: 10,
	        		      },
	        		      header: {
	        		        height: 57
	        		      },
	        		      minRowHeight: 71,
	        		      columns: [
	        		        {
	        		          header: '제목',
	        		          name: 'title',
	        		          align: 'center',
	        		        },
	        		        {
	        		          header: '작성자',
	        		          name: 'writer',
	        		          align: 'center',
	        		          width: 200,
	        		        },
	        		        {
	        		          header: '등록일',
	        		          name: 'strdate',
	        		          align: 'center',
	        		          width: 200,
	        		        },
	        		        {
	        		          header: '조회',
	        		          name: 'hit',
	        		          align: 'center',
	        		          width: 200,
	        		        }
	        		      ],
	        		    });
	        	},
	        	error: function(xhr, status, error) {
	        	    console.log("code: " + xhr.status);
	        	    console.log("message: " + xhr.responseText);
	        	    console.log("error: " + error);
	        	}
	        });
	    }
	    
	    /* function ajaxBtn() {
	        alert('버튼 클릭');
	        $.ajax({
	        	url:"/board/all",
	        	method:"get",
	        	dataType : "json",
	        	success: function(rslt){
	        		console.log("체크",rslt);
	        		const grid = new tui.Grid({
	        		      el: document.getElementById("grid"),
	        		      data: rslt,//여기에 api 넣는것임  url
	        		      scrollX: true,
	        		      scrollY: false,
	        		      minBodyHeight: 30,
	        		      rowHeaders: [{
	        		        type: 'num',
	        		        header: "번호",
	        		        width: 80,
	        		      }],
	        		      pageOptions: {
	        		        useClient: true,
	        		        perPage: 10,
	        		      },
	        		      header: {
	        		        height: 57
	        		      },
	        		      minRowHeight: 71,
	        		      columns: [
	        		        {
	        		          header: '제목',
	        		          name: 'title',
	        		          align: 'center',
	        		        },
	        		        {
	        		          header: '작성자',
	        		          name: 'data2',
	        		          align: 'center',
	        		          width: 200,
	        		        },
	        		        {
	        		          header: '등록일',
	        		          name: 'data3',
	        		          align: 'center',
	        		          width: 200,
	        		        },
	        		        {
	        		          header: '조회',
	        		          name: 'data5',
	        		          align: 'center',
	        		          width: 200,
	        		        }
	        		      ],
	        		    });
	        	},
	        	error: function(xhr, status, error) {
	        	    console.log("code: " + xhr.status);
	        	    console.log("message: " + xhr.responseText);
	        	    console.log("error: " + error);
	        	}
	        });
	    } */
	  
    // 도움말
    //https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.grid/docs/ko/README.md 

    // 원래 대로라면 이렇게
    // const dataSource = {
    //     api: {
    //       readData: { url: '/api/readData', method: 'GET'}
    //     }
    //   };

    //로컬이니까 가라데이터 // DB에서 가라 데이터 작성후 받아와서 리스트 뿌려볼것 
    /* const dataSource = [
      {
        data1: '제목입니다1',
        data2: '작성자',
        data3: '2024.01.01',
        data4: '링크',
        data5: '23411'
      },
      {
        data1: '제목입니다2',
        data2: '작성자',
        data3: '2024.01.01',
        data4: '링크',
        data5: '23411'
      },
      {
        data1: '제목입니다3',
        data2: '작성자',
        data3: '2024.01.01',
        data4: '링크',
        data5: '23411'
      },
      {
        data1: '제목입니다4',
        data2: '작성자',
        data3: '2024.01.01',
        data4: '링크',
        data5: '23411'
      },
      {
        data1: '제목입니다4',
        data2: '작성자',
        data3: '2024.01.01',
        data4: '링크',
        data5: '23411'
      },
      {
        data1: '제목입니다4',
        data2: '작성자',
        data3: '2024.01.01',
        data4: '링크',
        data5: '23411'
      },

    ]; */


    
  </script>
</body>

</html>