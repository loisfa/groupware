
var ShareDB = require('sharedb/lib/client');
var StringBinding = require('sharedb-string-binding');

// Open WebSocket connection to ShareDB server
var socket = new WebSocket('ws://' + window.location.host);
var connection = new ShareDB.Connection(socket);
/*socket.send(JSON.stringify({
  id: "client1"
}));*/

/*
var pathname = window.location.pathname;
console.log("pathname1:" + pathname);
pathname = pathname.split("/")[2];
pathname = pathname.replace(/\//g, '');
console.log("pathname2:" + pathname);
*/

/*
var myWidgets = [];
var myFormerWidgets = JSON.parse(localStorage.getItem('myWidgets'));
myFormerWidgets === null ? console.log('No prior widget found') : myWidgets = myFormerWidgets;
*/

// Create local Doc instance mapped to 'examples' collection document with id 'textarea'
socket.onmessage(function() {
  console.log("message arrivé");
}

socket.send("data");

var doc = connection.get('examples', 'documents');
console.log("scoket.data: "+ socket.data);

doc.subscribe(function(err) {
    console.log("subscribe to doc: " + doc);
    if (err) throw err;
    if (doc.type === null) {
        doc.create('new data');
        console.log("doc.type === null");
    }
    console.log("doc.type != null");

    var element = document.getElementById('content-list');
    var binding = new StringBinding(element, doc);
    binding.setup();
    documentChange();
    doc.on('op',documentChange);
});

var documentChange = function(){
    doc.data = document.getElementById('content-list').innerHTML;
    console.log("documentChange: doc.data: "+doc.data);
    socket.send(JSON.stringify({
      id: "client1"
    }));
}

document.getElementById('content-list').oninput = documentChange ;


/*
// Create local Chat instance
var chat = connection.get('chat', 'chat-msg');
doc.subscribe(function(err){
    if (err) throw err;
              var chatlist = document.getElementById('chat');
    var binding = new StringBinding(chatlist, chat);
    binding.setup();
    chatChange();
    chat.on('op', chatChange);
});
*/


/*
var chatChange = function(){
    var chatMsg = document.getElementById('chat').innerText;
}
*/

// document.getElementById('chat').oninput = chatChange;
/*
window.onload = function(){

    var em_script = document.createElement('script');
    em_script.src = '/static/em_button.js';

    document.getElementById('editable-editor').insertBefore(em_script, document.getElementById('editable-editor').childNodes[0]);
}
*/
// Ui add modal stuff


/*
var modal = document.getElementById('ui-add-modal');
var btn = document.getElementById("ui-add-button");
var closeButton = document.getElementById("close-button");
var widgetUrlButton = document.getElementById('widget-url-button');
*/

/*
btn.onclick = function() {
    modal.style.display = "block";
}

var closeModale = function() {
    modal.style.display = "none";
}

closeButton.onclick = closeModale;

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/

/*
widgetUrlButton.onclick = function() {
    var widgetUrl = document.getElementById('widget-url-input').value;
    addWidget(widgetUrl);

    myWidgets.push(widgetUrl);
    localStorage.setItem('myWidgets',JSON.stringify(myWidgets));

    document.getElementById('widget-url-input').value = "";
    closeModale();
}
*/

/*
var addWidget = function(widgetUrl) {

    var em_script = document.createElement('script');
    em_script.src = widgetUrl;
    document.getElementById('editable-editor').insertBefore(em_script, document.getElementById('editable-editor').childNodes[0]);
}


myWidgets.forEach(function(widget){
    addWidget(widget);
})
*/
