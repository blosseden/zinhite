<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"    uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt"  uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn"   uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="js" value="/js" scope="request"/>
<c:set var="script" value="/script" scope="request"/>
<c:set var="image" value="/images" scope="request"/>
<c:set var="css" value="/css" scope="request"/>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>신서울공작창_홈소개</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
    <link rel="stylesheet" href="${css}/reset.css">
    <link rel="stylesheet" href="${css}/style.css">
    <script src="${js}/jquery-1.12.4.min.js"></script>
    <script defer src="${js}/function.js"></script>
</head>
<body>