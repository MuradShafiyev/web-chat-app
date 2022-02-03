<html>
    <head>
        <title>::Sign out::</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <link rel="shortcut icon" href="icon.jpg"/>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <%session.invalidate();%>
        <h1>You are Signed out!
            <br>
            <a href="http://localhost:6060/webchatapp">Login</a> to continue...
        </h1>
    </body>
</html>