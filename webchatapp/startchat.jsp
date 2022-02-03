<%if(session.getAttribute("name") == null)
        response.sendRedirect("/webchatapp");
%>

<html>
    <%String uname = (String)session.getAttribute("name"); %>
    <head>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <script type="text/javascript" src="check.js"></script>
        <title>Chat Room</title>
        <link rel="shortcut icon" href="icon.jpg"/>
        <script>
            setInterval(reloaddata, 3000);
        </script>
    </head>

    <body>
        <p id="result"></p>
        Welcome, <%=uname%>
        <div class="logout-div" align="right"><a href="logout.jsp" class="logout-chat">Logout</a></div>
        <div id="list">
            <div id="content">
            </div>
            <input style="display:none" type="text" id="u" value="<%=uname%>">
            <textarea id="h" style="width: 100%; height: 10%;"></textarea>
            <input type="button" value="send" onclick="addText()"/>
        </div>
    </body>
</html>