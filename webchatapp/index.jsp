<html>
  <head>
    <link rel="stylesheet" href="styles.css" type="text/css" />
    <link rel="shortcut icon" href="icon.jpeg" />
    <title>Chat Room</title>
    <script src="check.js" type="text/javascript"></script>
  </head>
  <body>
    <div class="wrapper">
      <div class="middle" id="result-data">
        <form autocomplete="off">
          <table>
            <tr style="height: 80px">
              <td>Username:</td>
              <td>
                <input
                  type="text"
                  id="uname"
                  class="textbox"
                  autocomplete="off"
                />
              </td>
            </tr>
            <tr style="height: 20px">
              <td>Password:</td>
              <td><input type="password" id="pw" class="textbox" /></td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="Sign In"
                  class="circle"
                  onclick="startchatting();"
                />
              </td>
              <td><div id="loading-icon"></div></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </body>
</html>