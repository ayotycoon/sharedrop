(this["webpackJsonpclient-src"]=this["webpackJsonpclient-src"]||[]).push([[0],{37:function(e,t,a){e.exports=a(78)},42:function(e,t,a){},72:function(e,t){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t),function(e){var t,n,l=a(6),r=function(e){return"____sharedrop__"+e};function c(){localStorage.setItem(r(""),"{}")}function o(){var e,a;navigator.userAgent.match(/ipad|iphone/i)?((e=document.createRange()).selectNodeContents(t),(a=window.getSelection()).removeAllRanges(),a.addRange(e),t.setSelectionRange(0,999999)):t.select()}n=function(e){!function(e){(t=document.createElement("textArea")).value=e,document.body.appendChild(t)}(e),o(),document.execCommand("copy"),document.body.removeChild(t)},e.exports.util={setData:function(e,t){var a=localStorage.getItem(r(""));JSON.parse(a)&&JSON.parse(a).length&&(c(),a=null),a?(a=JSON.parse(a))[e]={code:e,response:t}:a=Object(l.a)({},e,{code:e,response:t}),localStorage.setItem(r(""),JSON.stringify(a))},getData:function(){var e=localStorage.getItem(r(""));if(e)return Object.values(JSON.parse(e)).reverse()},clear:c,copy:n}}.call(this,a(77)(e))},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),o=(a(42),a(36)),s=a(6),i=a(7),m=a(8),d=a(10),u=a(9),f=a(11),h=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("span",{id:"Logo",className:"font-weight-bold"},l.a.createElement("span",{className:"text-primary"},"share"),l.a.createElement("span",{className:"text-secondary"},"drop"))}}]),t}(n.Component),E=a(35),b=a.n(E),p=(a(75),a(76).util),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={createMode:!0,mode:"light",createCode:"",joinCode:"",connectedCode:"",connected:!1,infoData:{},textToSend:"",fileToSend:null,response:[],loading:!1},a.setTimeoutAlerterGlobal=null,a.isAlerterActiveGlobal=!1,a.iconHash={svg:"fa fa-image mr-2"},a.domain="/",a.socket=b()(a.domain),a.oldData=p.getData(),a.alerter=function(e,t,n,l){var r=4e3;if(l&&(r=l),!e)throw console.error("No type in alert");var c=document.getElementById("alerter");c&&(a.isAlerterActiveGlobal?(a.isAlerterActiveGlobal=!1,clearTimeout(a.setTimeoutAlerterGlobal),a.alerter(e,t)):(c.innerHTML='\n                        <div class="alert alert-'.concat(e,' animated fadeInDown squared">\n                        <i class="fa ').concat(n,' mr-2"></i>\n                                ').concat(""===t?"<i class='fa fa-check-circle'>  </i>":t,"\n                        </div>\n                        "),c.style.display="inline-block",a.isAlerterActiveGlobal=!0,a.setTimeoutAlerterGlobal=setTimeout((function(){a.isAlerterActiveGlobal=!1,c.style.display="none"}),r)))},a.preCopy=function(e,t){if(e)return p.copy(e),t?void a.alerter("success","Copied  to clipboard <br>"+t,"fa-check",1e4):void a.alerter("success","Copied  to clipboard","fa-check")},a.toggleMode=function(e,t){if(t)a.setState({mode:t});else{var n="light"===a.state.mode?"dark":"light";localStorage.setItem("___color",n),a.setState({mode:n})}},a.codeGenerator=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,l=0;l<5;l++)e+=t.charAt(Math.floor(Math.random()*n));a.setState({createCode:e})},a.handleUpload=function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.readAsArrayBuffer(t),n.onload=function(e){var l=n.result,r={name:t.name,size:t.size,type:t.type,data:l};a.setState({fileToSend:r})}}},a.inputUpdate=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.sender=function(){var e;if(a.state.infoData.length<2&&!window.confirm("This is the only device connected, are you sure you want to send this file"))return;a.state.fileToSend&&(e=!0,a.setState({loading:!0}));var t={file:a.state.fileToSend,text:a.state.textToSend,code:a.state.connectedCode,isFile:e};a.socket.emit("message",t),a.setState({textToSend:"",fileToSend:null})},a.clearLs=function(){p.clear(),a.oldData=null},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("___color");e&&this.toggleMode(null,e);var t=new URLSearchParams(window.location.search);t.has("code")&&this.setState({createMode:!1,joinCode:t.get("code")}),this.codeGenerator(),this.socket.on("connect",(function(){})),this.socket.on("disconnect",(function(){window.location.reload()}))}},{key:"connect",value:function(e,t){var a=this;this.socket.emit("create",{code:e,isJoin:t}),this.socket.on("sync",(function(e){if(e){var n=t?a.state.joinCode:a.state.createCode;a.setState({connected:!0,connectedCode:n})}})),this.socket.on("info",(function(e){e&&a.setState({infoData:e})})),this.socket.on("upload error",(function(e){e&&alert("error")})),this.socket.on("404",(function(e){e&&(alert("not found"),a.setState({connected:!1}))})),this.socket.on("message",(function(e){e&&(e.isFile&&a.setState({loading:!1}),a.setState({response:[].concat(Object(o.a)(a.state.response),[e])}),p.setData(a.state.connectedCode,a.state.response))}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:this.state.mode},this.state.loading?l.a.createElement("div",{className:"loading"},l.a.createElement("img",{alt:"loader",src:"/assets/loader.svg"})):"",l.a.createElement("div",{className:"container main-body"},l.a.createElement("div",{id:"alerter",className:"rounded"}),l.a.createElement("div",{className:"navbar"},l.a.createElement("h3",null,l.a.createElement(h,null)),l.a.createElement("span",{onClick:this.toggleMode},this.state.connected?l.a.createElement("span",{className:"fa fa-check-circle mr-2 text-success"}):l.a.createElement("span",{className:"fa fa-times-circle mr-2 text-danger"}),"light"===this.state.mode?l.a.createElement("i",{className:"fa fa-moon"}):l.a.createElement("i",{className:"fa fa-sun text-white"}))),"Share files across your devices, no sign up no login. just share! Just like  AirDrop",l.a.createElement("br",null),l.a.createElement("br",null),this.state.connected?l.a.createElement("div",{className:"border mb-3 p-2 border-secondary rounded"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{onClick:function(){return e.socket.emit("disconnect")},className:"btn btn-sm btn-danger"},l.a.createElement("i",{className:"fa fa-times mr-2"}),"Exit connection")),l.a.createElement("br",null),l.a.createElement("div",{className:"border rounded p-2"},l.a.createElement("span",{onClick:function(){return e.preCopy(e.state.connectedCode)}},"Connected to ",l.a.createElement("code",null,this.state.connectedCode)),l.a.createElement("br",null),"Connected devices: ",this.state.infoData.length,l.a.createElement("br",null),this.state.infoData.length<2?l.a.createElement("small",{className:"text-info"},"Please connect another device, Only you is recieving these files"):""),l.a.createElement("br",null),"Files you share will appear here",l.a.createElement("br",null),this.state.response.map((function(t,a){return l.a.createElement("div",{key:a,className:"border rounded p-2 mt-3"},t.isFile?l.a.createElement("div",null,t.file.name,l.a.createElement("br",null),t.text,l.a.createElement("small",{className:"d-block text-muted text-right"},l.a.createElement("a",{href:"/api/get/"+t.file.data,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-cloud-download-alt fa-big mr-1 text-secondary"})),l.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"/api/get/"+t.file.data)},className:"btn btn-sm btn-primary mr-2"},l.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),l.a.createElement("i",{className:e.iconHash[t.file.ext]}," "),t.file.ext)):l.a.createElement("div",null,t.text,l.a.createElement("br",null),l.a.createElement("small",{className:"d-block text-muted text-right"},l.a.createElement("button",{onClick:function(){return e.preCopy(t.text)},className:"btn btn-sm btn-primary mr-2"},l.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),l.a.createElement("i",{className:"far fa-sticky-note mr-1"}),"Note")))}))):l.a.createElement("div",{onClick:function(){return e.setState({createMode:!e.state.createMode})},className:"row"},l.a.createElement("div",{className:"col-6 cursor"},l.a.createElement("div",{className:this.state.createMode?"bg-primary text-white rounded p-2 text-center ":"rounded p-2 text-center"},l.a.createElement("h3",null,"Create"))),l.a.createElement("div",{className:"col-6 cursor"},l.a.createElement("div",{className:this.state.createMode?"rounded p-2 text-center":"bg-primary text-white rounded p-2 text-center "},l.a.createElement("h3",null,"Join")))),l.a.createElement("br",null),l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"col-md-6"},this.state.connected?"":l.a.createElement("div",null,this.state.createMode?l.a.createElement("div",null,l.a.createElement("small",{className:"text-warning"},"Your create code"),l.a.createElement("h1",null,l.a.createElement("code",null,l.a.createElement("b",null,this.state.createCode))),l.a.createElement("div",{className:"btn-group mb-1"},l.a.createElement("button",{onClick:function(){return e.preCopy(e.state.createCode)},className:"btn btn-sm btn-primary"},l.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),l.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"?code="+e.state.createCode,"Share this link so other devices can automatically join")},className:"btn btn-sm btn-outline-primary"},l.a.createElement("i",{className:"fa fa-share mr-1"}),"Share")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.connect(e.state.createCode)},className:"btn btn-outline-primary btn-block",type:"button"},"Create Connection")):l.a.createElement("div",null,l.a.createElement("small",{className:"text-warning"},"Enter Your join code"),l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",placeholder:"Enter your join code ",onChange:this.inputUpdate,name:"joinCode",value:this.state.joinCode}),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.connect(e.state.joinCode,!0)},className:"btn btn-outline-primary btn-block",disabled:""===this.state.joinCode,type:"button"},"Join Connection"))),this.state.connected?l.a.createElement("div",{className:"border rounded p-2"},"Upload File",this.state.fileToSend?l.a.createElement("div",null,l.a.createElement("div",{className:"text-right p-2"},l.a.createElement("i",{onClick:function(){return e.setState({fileToSend:null})},className:"fa cursor fa-times text-danger"})),"Name: ",this.state.fileToSend.name,",",l.a.createElement("br",null),"Size: ",this.state.fileToSend.size/1024," kb,"):"",l.a.createElement("br",null),l.a.createElement("div",{className:"text-center"},l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"fileinput",className:"cursor d-block p-5"}," ",l.a.createElement("i",{className:"fa fa-cloud-upload-alt fa-big"})),l.a.createElement("input",{id:"fileinput",type:"file",onChange:this.handleUpload,className:"form-control d-none"}),l.a.createElement("small",null,"Files are only available on our servers for 10 Munites, after which they will be deleted")),l.a.createElement("hr",null),"Send Text",l.a.createElement("textarea",{onChange:this.inputUpdate,name:"textToSend",className:"form-control ",value:this.state.textToSend}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.sender,className:"btn btn-primary btn-block"},"Send")):""),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:""},l.a.createElement("span",{className:"underline"},"How to use"),l.a.createElement("br",null),l.a.createElement("ol",null,l.a.createElement("li",null," If you do not have an existing connection, Create a connection. If you have a connection, click join and enter the create code"),l.a.createElement("li",null," When you care connected, you will be able to see the number of devices in your network "),l.a.createElement("li",null," You can send / recieve texts or files instantly "),l.a.createElement("li",null," To leave the connection, click Exit connection ")),l.a.createElement("br",null),l.a.createElement("span",{className:"text-info"},"On Iphones, You might be restricted to downloading just media files, due to ios  limitations, "),l.a.createElement("br",null),l.a.createElement("span",{className:"underline"},"Tips"),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null," You can always connect back to the same connection so far there is atleast one device active. Connection only deletes when all devices have left, in this case, you will have to create a new connection"))))),l.a.createElement("hr",{className:"text-secondary"}),this.oldData&&this.oldData.length?l.a.createElement("div",{className:"border border-secondary  rounded"},l.a.createElement("div",{className:"bg-secondary p-3"},l.a.createElement("div",{className:"row "},l.a.createElement("div",{className:"col-9 col-md-6"},"              ",l.a.createElement("h3",null,"Old Data"),l.a.createElement("small",null,"We use your local storage to keep track of your old data")),l.a.createElement("div",{onClick:function(){return e.clearLs()},className:"col-3 col-md-6 text-right"},l.a.createElement("button",{onClick:function(){return e.socket.emit("disconnect")},className:"btn btn-sm btn-info"},l.a.createElement("i",{className:"fab fa-cloudscale mr-2"}),"Clear")))),l.a.createElement("br",null),l.a.createElement("div",{className:"p-3"},this.oldData.map((function(t,a){return l.a.createElement("div",{key:a,className:"mt-2"},l.a.createElement("h4",null,t.code),l.a.createElement("div",{className:"border rounded p-2 mt-3"},t.response.map((function(t,a){return l.a.createElement("div",{key:a},t.isFile?l.a.createElement("div",null,t.file.name,l.a.createElement("br",null),t.text,l.a.createElement("small",{className:"d-block text-muted text-right"},l.a.createElement("a",{href:"/api/get/"+t.file.data,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-cloud-download-alt fa-big mr-1 text-secondary"})),l.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"/api/get/"+t.file.data)},className:"btn btn-sm btn-primary mr-2"},l.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),l.a.createElement("i",{className:e.iconHash[t.file.ext]}," "),t.file.ext),l.a.createElement("hr",null)):l.a.createElement("div",null,t.text,l.a.createElement("br",null),l.a.createElement("small",{className:"d-block text-muted text-right"},l.a.createElement("button",{onClick:function(){return e.preCopy(t.text)},className:"btn btn-sm btn-primary mr-2"},l.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),l.a.createElement("i",{className:"far fa-sticky-note mr-1"}),"Note")))}))))})))):"",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("footer",{className:"light"===this.state.mode?"text-center p-3 bg-white":"text-center p-3 bg-cus-dark"},"Made with ",l.a.createElement("i",{className:"fa fa-heart text-danger"})," by ",l.a.createElement("a",{href:"http://ayotycoon.github.io/"},"Sunmola Ayokunle")," | ",l.a.createElement("a",{href:"https://twitter.com/ayotycoon"},l.a.createElement("i",{className:"fab fa-twitter mr-1 ml-1 "})),"  | ",l.a.createElement("span",null,"Help Ayokunle find a job! ",l.a.createElement("i",{className:"far fa-smile-wink"})," | ",l.a.createElement("a",{href:"https://cvngayotycoon.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Generate your CV"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.7cd11b2b.chunk.js.map