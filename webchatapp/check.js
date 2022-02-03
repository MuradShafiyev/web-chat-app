function startchatting(){
    var uname = document.getElementById('uname');
    var pw = document.getElementById('pw');
    if(uname.value == "" || pw.value == ""){
        alert("Please login to continue!");
        return false;
    }

    var xmlhttp;
    if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } 
    // else { // code for IE6, IE5
    //     xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    // }

    xmlhttp.open("POST", "chat?uname=" + uname.value + "&pw=" + pw.value, true);

    document.getElementById("loading-icon").innerHTML = '<img src="loader.gif" border="o" alt="Loading, please wait..." />';
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            if(xmlhttp.responseText.indexOf('Incorrect') !== -1){
                document.getElementById("loading-icon").innerHTML = '<h4 style="color: red;">' + xmlhttp.responseText + '</h4>';
            } else {
                document.getElementById("result-data").innerHTML = '<h1>' + xmlhttp.responseText + '</h1>';
            }
        }
    }

    xmlhttp.send(null);
}

function addText()
{
    var username = document.getElementById('u').value;
    var msg = document.getElementById('h').value;
    olist = document.getElementById('list');
    op = document.createElement('p');
    op.innerHTML = username + "- <g>" + msg + "</g>";
    ocontent = document.getElementById('content');
    ocontent.appendChild(op);             //Add new line on click
    olist.scrollTop = olist.scrollHeight; //Adjust Height
    document.getElementById('h').value = '';
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", "chatstore?uname=" + username + "&msg=" + msg, true);

    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            document.getElementById("result").innerHTML = 'sent';
            document.getElementById("result").innerHTML = '';
        }
    }
    xmlhttp.send(null);
}

function reloaddata()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", "reloaddata", true);
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            document.getElementById("content").innerHTML = xmlhttp.responseText;
            olist = document.getElementById('list'); //everything in id list
            olist.scrollTop = olist.scrollHeight;
        }
    }
    xmlhttp.send(null);
}

// function addText() {
//     var username = document.getElementById('u').value;
//     var msg = document.getElementById('h').value;
//     C_list = document.getElementById('list');
//     C_post = document.getElementById('p');
    
//     C_post.innerHTML = username + "- <g>" + msg + "</g>";
//     C_content = document.getElementById('content');
//     C_content.appendChild(C_post); //add new line on click

//     C_list.scrollTop = C_list.scrollHeight; //adjust height
//     document.getElementById('h').value = '';

//     var xmlhttp;
//     if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp = new XMLHttpRequest();
//     } else { // code for IE6, IE5
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xmlhttp.open("POST", "chatstore?uname=" + username + "&msg=" + msg, true);
//     xmlhttp.onreadystatechange = function() {
//         if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             document.getElementById("result").innerHTML = 'sent';
//             document.getElementById("result").innerHTML = '';
//         }
//     }
//     xmlhttp.send(null);
// }

// function reloaddata() {
//     var xmlhttp;
//     if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp = new XMLHttpRequest();
//     } else { // code for IE6, IE5
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xmlhttp.open("POST", "reloaddata", true);
//     xmlhttp.onreadystatechange = function() {
//         if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
//             document.getElementById("content").innerHTML = xmlhttp.responseText;
//             C_list = document.getElementById("list"); //everything in id list
//             C_list.scrollTop = C_list.scrollHeight;
//         }
//     }
    
//     xmlhttp.send(null);
// }