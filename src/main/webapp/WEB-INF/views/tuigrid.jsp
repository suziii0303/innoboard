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
	        		const grid = new tui.Grid({
	        		      el: document.getElementById("grid"),
	        		      data: rslt,//여기에 api 넣는것임  url
	        		      scrollX: true,
	        		      scrollY: false,
	        		      minBodyHeight: 30,
 	        		      rowHeaders: [{
	        		        type: 'rowNum',
	        		        header: "번호",
	        		        width: 80,
	        		     /*    rowKey : "num",
	        		       formatter: function(params) {
	                            return params.value.num;
	        		        }  */
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
		        		          type: 'checkbox',
		        		          align: 'center',
		        		          header: "체크",
		        		          width: 80,
		        		          formatter:function(data){
		        		        	  let html = '<input class="seq" type="checkbox" value='+data.row.num+'>'
		        		        	  
		        		        	  return html
		        		          }
		        		        }, 
	        		        {
	        		          header: '제목',
	        		          name: 'title',
	        		          align: 'center',
	        		          formatter:function(data){
	        		        	  let html = '<span class="titleNum" data-num="' + data.row.num + '">' + data.row.title + '</span>';
	        		        	  return html;
	        		          }
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
	        			// 체크박스의 id 값을 가져와서 배열에 넣어주기
	        			let checkboxes = document.querySelectorAll('.seq');
	        			let checkboxArray = Array.from(checkboxes);
	        			let values = [];
	        			
	        			checkboxes.forEach(checkbox => {
	        			    let value = checkbox.value;
	        			    values.push(value);
	        			});
	        			
	        			console.log(values);
	        			
	        			
	        			// 제목에 데이터를 가져와서 id 값 가져오기 
	        			let titleNum = document.querySelectorAll('.titleNum[data-num]');
	        			let titleNumArray = Array.from(titleNum);
	        			
	        			titleNum.forEach(element => {
	        			    let dataNumValue = element.getAttribute('data-num');
							
							element.addEventListener("click",function(){
								
								location.href = "/board/selectOne/"+dataNumValue
							});
	        			});
	        			console.log("제목",tvalues);
	        			
	        			
	        		/* 	checkboxArray.forEach(checkbox => {
	        			    const value = checkbox.value;
	        			    console.log(value);
	        			}) */;
	        		
	        		
	        		 /* grid.on('check', function(ev) {
	                     var checkedRows = grid.getCheckedRows();
	                     var nums = checkedRows.map(row => row.num);
	                     console.log(checkedRows);
	                     console.log(nums);
	        		 });
	                 grid.on("click", function (ev) {
	                	 var focusedCell = grid.getFocusedCell();
	                	 var clickedRow = grid.getRow(focusedCell.rowKey);
	                	 
	                	 console.log('aa'+focusedCell);
	                	 
	                	 var num = clickedRow.num;
	                	 
	                	 console.log(clickedRow);
	                	 console.log(num);
	                	 
	                	 $.ajax({
	                		 url:"/board/selectOne/" +num,
	         	        	method:"get",
	         	        	dataType : "json",
	         	        	success: function(rslt){
	         	        		
	         	        	},
	         	        	error: function(xhr, status, error) {
	        	        	    console.log("code: " + xhr.status);
	        	        	    console.log("message: " + xhr.responseText);
	        	        	    console.log("error: " + error);
	        	        	}
	                	 })
	                 }) */
	        	},
	        	error: function(xhr, status, error) {
	        	    console.log("code: " + xhr.status);
	        	    console.log("message: " + xhr.responseText);
	        	    console.log("error: " + error);
	        	}
	        });
	        
	    }
	    function fTitle(data){
	    	console.log('제목', data);
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