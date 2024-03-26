<%--
  Created by IntelliJ IDEA.
  User: GWSS
  Date: 2023-09-22
  Time: 오후 3:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../common/header.jsp"%>
<style>

    table {
        /* 셀의 이중선 제거 */
        border-collapse: collapse;
    }

    td {
        width: 150px;
        height: 30px;
        border: 1px solid #000;

        /* 셀 안에서 세로 정렬 - middle이 기본값 */
        vertical-align: top;
        vertical-align: bottom;
        vertical-align: middle;

        text-align: center;
        font-size: 17px;
        font-weight: 500;
    }

    hr {
        margin: 50px 0;
    }
</style>
<body>
<div id="wrap">
    <header>
        <h1 class="sr-only">New Seoul Train</h1>
        <p class="logo"><a href="신서울%20공작창.html">Logo</a></p>

        <nav class="pc_menu">
            <ul class="menu_btn">
                <li><a href="하이퍼링크.html" target="_blank">철도 도트</a></li>
                <li><a href="공지사항.html" target="_blank">공지 사항</a></li>
                <li><a href="./홈소개.html" target="_blank">홈소개</a></li>
                <li><a href="제작%20문의.html" target="_blank">제작 문의</a></li>
            </ul>
        </nav>

        <div id="page">
            <div id="toggle">
                <div class="bar"></div>
            </div>

            <section id="overlay">
                <nav>
                    <ul class="gnb">
                        <li><a href="하이퍼링크.html" target="_blank">철도 도트</a></li>
                        <li><a href="공지사항.html" target="_blank">공지 사항</a></li>
                        <li><a href="./홈소개.html" target="_blank">홈소개</a></li>
                        <li><a href="제작%20문의.html" target="_blank">제작 문의</a></li>
                    </ul>
                </nav>
            </section>
        </div>
    </header>

    <section class="home">
        <h2>홈페이지 소개</h2>

        <img src="/resources//images/slides1.png" alt="#">
        <p>
            - 메뉴 안내 <br>
            초기화면 : Train House 접속 시 연결되는 화면 / 공지사항과 탑승일지, 웰페이퍼 수록 <br>
            기차 CG : 실제로 다니는 철도 차량을 가상 2D 그래픽으로 측면 기준으로 제작 된 그래픽을 수록한 페이지 <br>
            철도 정보 : <br>
            관련 사이트 : <br>
            커뮤니티 : <br>
            홈소개 : <br>
        </p>
    </section>

    <section class="introduce">
        <h2>운영자 소개</h2>
        <div>
            <img src="/resources//images/intro.png" alt="#">
            <p>
                김진운입니다. <br>
                철도 도트를 게시하는 홈페이지입니다. <br>
                텍스트가 들어갑니다. <br>
                텍스트가 들어갑니다. <br>
                텍스트가 들어갑니다. <br>
                텍스트가 들어갑니다. <br>
                텍스트가 들어갑니다. <br>
            </p>
        </div>
    </section>
    <%@include file="../common/footer.jsp"%>
</html>