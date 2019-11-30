(this["webpackJsonpclient-src"]=this["webpackJsonpclient-src"]||[]).push([[0],{37:function(e,t,a){e.exports=a(76)},42:function(e,t,a){},72:function(e,t){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n,l,c=a(0),r=a.n(c),o=a(35),s=a.n(o),i=(a(42),a(6)),m=a(18),d=a(7),u=a(8),f=a(10),b=a(9),h=a(11),E=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("span",{id:"Logo",className:"font-weight-bold"},r.a.createElement("span",{className:"text-primary"},"share"),r.a.createElement("span",{className:"text-secondary"},"drop"))}}]),t}(c.Component),p=a(36),v=a.n(p),g=(a(75),function(e){return"____sharedrop__"+e});function y(){var e,t;navigator.userAgent.match(/ipad|iphone/i)?((e=document.createRange()).selectNodeContents(n),(t=window.getSelection()).removeAllRanges(),t.addRange(e),n.setSelectionRange(0,999999)):n.select()}l=function(e){!function(e){(n=document.createElement("textArea")).value=e,document.body.appendChild(n)}(e),y(),document.execCommand("copy"),document.body.removeChild(n)};var N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={connectionBtnDisabled:!1,createMode:!0,mode:"light",createCode:"",joinCode:"",connectedCode:"",connected:!1,infoData:{},textToSend:"",fileToSend:null,response:[],loading:!1,activeOldData:[]},a.tone=new Audio("/assets/audio/message.mp3"),a.setTimeoutAlerterGlobal=null,a.isAlerterActiveGlobal=!1,a.iconHash={svg:"fa fa-image mr-2",jpg:"fa fa-image mr-2",jpeg:"fa fa-image mr-2",png:"fa fa-image mr-2"},a.domain="/",a.socket=v()(a.domain),a.oldData=function(){var e=localStorage.getItem(g(""));return e?Object.values(JSON.parse(e)).reverse():[]}(),a.activeOldDataIndex=0,a.incActiveOldData=function(){var e=Object(m.a)(a.oldData);e=e.splice(0,a.activeOldDataIndex+1),a.setState({activeOldData:e}),a.activeOldDataIndex=a.activeOldDataIndex+1},a.alerter=function(e,t,n,l){var c=4e3;if(l&&(c=l),!e)throw console.error("No type in alert");var r=document.getElementById("alerter");r&&(a.isAlerterActiveGlobal?(a.isAlerterActiveGlobal=!1,clearTimeout(a.setTimeoutAlerterGlobal),a.alerter(e,t)):(r.innerHTML='\n                        <div class="alert alert-'.concat(e,' animated fadeInDown squared">\n                        <i class="fa ').concat(n,' mr-2"></i>\n                                ').concat(""===t?"<i class='fa fa-check-circle'>  </i>":t,"\n                        </div>\n                        "),r.style.display="inline-block",a.isAlerterActiveGlobal=!0,a.setTimeoutAlerterGlobal=setTimeout((function(){a.isAlerterActiveGlobal=!1,r.style.display="none"}),c)))},a.preCopy=function(e,t){if(e)return l(e),t?void a.alerter("success","Copied  to clipboard <br>"+t,"fa-check",1e4):void a.alerter("success","Copied  to clipboard","fa-check")},a.toggleMode=function(e,t){if(t)a.setState({mode:t});else{var n="light"===a.state.mode?"dark":"light";localStorage.setItem("___color",n),a.setState({mode:n})}},a.codeGenerator=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,l=0;l<5;l++)e+=t.charAt(Math.floor(Math.random()*n));a.setState({createCode:e})},a.handleUpload=function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.readAsArrayBuffer(t),n.onload=function(e){var l=n.result,c={name:t.name,size:t.size,type:t.type,data:l};a.setState({fileToSend:c})}}},a.inputUpdate=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onMessageHandler=function(){a.socket.on("message",(function(e){e&&(a.tone.play().then((function(e){return e})).catch((function(e){return e})),e.isFile&&a.setState({loading:!1}),a.setState({response:[].concat(Object(m.a)(a.state.response),[e])}),function(e,t){var a=localStorage.getItem(g(""));a?(a=JSON.parse(a))[e]={code:e,response:t}:a=Object(i.a)({},e,{code:e,response:t}),localStorage.setItem(g(""),JSON.stringify(a))}(a.state.connectedCode,a.state.response))}))},a.sender=function(){var e;if(a.state.infoData.length<2&&!window.confirm("This is the only device connected, are you sure you want to send this file"))return;a.state.fileToSend&&(e=!0,a.setState({loading:!0}));var t={file:a.state.fileToSend,text:a.state.textToSend,code:a.state.connectedCode,isFile:e};a.socket.emit("message",t),a.setState({textToSend:"",fileToSend:null})},a.clearLs=function(){localStorage.setItem(g(""),"{}"),a.oldData=null,window.location.reload()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("___color");t&&this.toggleMode(null,t);var a=new URLSearchParams(window.location.search);a.has("code")&&this.setState({createMode:!1,joinCode:a.get("code")}),this.codeGenerator(),this.socket.on("connect",(function(){})),this.socket.on("disconnect",(function(){e.state.connectedCode?(e.alerter("info","..Reconnecting to "+e.state.connectedCode,"fa-info",2e4),e.connect(e.state.connectedCode,!0),e.setState({loading:!0,connected:!1}),setTimeout((function(){e.state.connected?(e.socket.off("message"),e.socket.addEventListener("message"),e.onMessageHandler()):window.location.reload()}),2e4)):window.location.reload()})),this.incActiveOldData()}},{key:"connect",value:function(e,t){var a=this;this.setState({connectionBtnDisabled:!0}),this.socket.emit("create",{code:e,isJoin:t}),this.socket.on("sync",(function(e){if(e){var n=t?a.state.joinCode:a.state.createCode;a.setState({connected:!0,connectedCode:n,loading:!1}),a.alerter("success","Device Connected","fa-check")}})),this.socket.on("info",(function(e){e&&a.setState({infoData:e})})),this.socket.on("upload error",(function(e){e&&alert("error")})),this.socket.on("404",(function(e){e&&(a.socket.removeAllListeners(),a.alerter("danger","..Connection not found, "),a.setState({connected:!1,connectionBtnDisabled:!1,connectedCode:null}))})),this.onMessageHandler()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.state.mode},this.state.loading?r.a.createElement("div",{className:"loading"},r.a.createElement("img",{alt:"loader",src:"/assets/loader.svg"})):"",r.a.createElement("div",{className:"container main-body"},r.a.createElement("div",{id:"alerter",className:"rounded"}),r.a.createElement("div",{className:"navbar"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fab fa-cloudsmith text-primary mr-1"}),"   ",r.a.createElement(E,null)),r.a.createElement("span",{onClick:this.toggleMode},this.state.connected?r.a.createElement("span",{className:"fa fa-check-circle mr-2 text-success"}):r.a.createElement("span",{className:"fa fa-times-circle mr-2 text-danger"}),"light"===this.state.mode?r.a.createElement("i",{className:"fa fa-moon"}):r.a.createElement("i",{className:"fa fa-sun text-white"}))),"Share files across your devices, no sign up no login. just share! Just like  AirDrop",r.a.createElement("br",null),r.a.createElement("br",null),this.state.connected?r.a.createElement("div",{className:"border mb-3 p-2 border-secondary rounded"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{onClick:function(){return window.location.reload()},className:"btn btn-sm btn-danger"},r.a.createElement("i",{className:"fa fa-times mr-2"}),"Exit connection")),r.a.createElement("br",null),r.a.createElement("div",{className:"border rounded p-2"},"Connected to ",r.a.createElement("code",null,this.state.connectedCode),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-group mb-1"},r.a.createElement("button",{onClick:function(){return e.preCopy(e.state.connectedCode)},className:"btn btn-sm btn-primary"},r.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),r.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"?code="+e.state.connectedCode,"Share this link so other devices can automatically join")},className:"btn btn-sm btn-outline-primary"},r.a.createElement("i",{className:"fa fa-share mr-1"}),"Share")),r.a.createElement("br",null),"Connected devices: ",this.state.infoData.length,r.a.createElement("br",null),this.state.infoData.length<2?r.a.createElement("small",{className:"text-info"},"Please connect another device, Only you is recieving these files"):""),r.a.createElement("br",null),"Files you share will appear here",r.a.createElement("br",null),this.state.response.map((function(t,a){return r.a.createElement("div",{key:a,className:"border rounded p-2 mt-3"},t.isFile?r.a.createElement("div",null,t.file.name,r.a.createElement("br",null),t.text,r.a.createElement("small",{className:"d-block text-muted text-right"},r.a.createElement("a",{href:"/api/get/"+t.file.data,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-cloud-download-alt fa-big mr-1 text-secondary"})),r.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"/api/get/"+t.file.data)},className:"btn btn-sm btn-primary mr-2"},r.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),r.a.createElement("i",{className:e.iconHash[t.file.ext]}," "),t.file.ext,t.date?r.a.createElement("span",{className:"ml-1 date"},new Date(t.date).toLocaleString()):"")):r.a.createElement("div",null,t.text,r.a.createElement("br",null),r.a.createElement("small",{className:"d-block text-muted text-right"},r.a.createElement("button",{onClick:function(){return e.preCopy(t.text)},className:"btn btn-sm btn-primary mr-2"},r.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),r.a.createElement("i",{className:"far fa-sticky-note mr-1"}),"Note",t.date?r.a.createElement("span",{className:"ml-1 date"},new Date(t.date).toLocaleString()):"")))}))):r.a.createElement("div",{onClick:function(){return e.setState({createMode:!e.state.createMode})},className:"row"},r.a.createElement("div",{className:"col-6 cursor"},r.a.createElement("div",{className:this.state.createMode?"bg-primary text-white rounded p-2 text-center ":"rounded p-2 text-center"},r.a.createElement("h3",null,"Create"))),r.a.createElement("div",{className:"col-6 cursor"},r.a.createElement("div",{className:this.state.createMode?"rounded p-2 text-center":"bg-primary text-white rounded p-2 text-center "},r.a.createElement("h3",null,"Join")))),r.a.createElement("br",null),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-md-6"},this.state.connected?"":r.a.createElement("div",null,this.state.createMode?r.a.createElement("div",null,r.a.createElement("small",{className:"text-warning"},"Your create code"),r.a.createElement("h1",null,r.a.createElement("code",null,r.a.createElement("b",null,this.state.createCode))),r.a.createElement("div",{className:"btn-group mb-1"},r.a.createElement("button",{onClick:function(){return e.preCopy(e.state.createCode)},className:"btn btn-sm btn-primary"},r.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),r.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"?code="+e.state.createCode,"Share this link so other devices can automatically join")},className:"btn btn-sm btn-outline-primary"},r.a.createElement("i",{className:"fa fa-share mr-1"}),"Share")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.connect(e.state.createCode)},className:"btn btn-outline-primary btn-block",disabled:!!this.state.connectionBtnDisabled,type:"button"},"Create Connection")):r.a.createElement("div",null,r.a.createElement("small",{className:"text-warning"},"Enter Your join code"),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",placeholder:"Enter your join code ",onChange:this.inputUpdate,name:"joinCode",value:this.state.joinCode}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.connect(e.state.joinCode,!0)},className:"btn btn-outline-primary btn-block",disabled:!(""!==this.state.joinCode&&!this.state.connectionBtnDisabled),type:"button"},"Join Connection"))),this.state.connected?r.a.createElement("div",{className:"border rounded p-2"},"Upload File",this.state.fileToSend?r.a.createElement("div",null,r.a.createElement("div",{className:"text-right p-2"},r.a.createElement("i",{onClick:function(){return e.setState({fileToSend:null})},className:"fa cursor fa-times text-danger"})),"Name: ",this.state.fileToSend.name,",",r.a.createElement("br",null),"Size: ",this.state.fileToSend.size/1024," kb,"):"",r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"fileinput",className:"cursor d-block p-5"}," ",r.a.createElement("i",{className:"fa fa-cloud-upload-alt fa-big"})),r.a.createElement("input",{id:"fileinput",type:"file",onChange:this.handleUpload,className:"form-control d-none"}),r.a.createElement("small",null,"Files are only available on our servers for 10 Munites, after which they will be deleted"),r.a.createElement("br",null),r.a.createElement("small",null,"File upload is in beta, please restrict file size to  2 mb")),r.a.createElement("hr",null),"Send Text",r.a.createElement("textarea",{onChange:this.inputUpdate,name:"textToSend",className:"form-control ",value:this.state.textToSend}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.sender,className:"btn btn-primary btn-block"},"Send")):""),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:""},r.a.createElement("span",{className:"underline"},"How to use"),r.a.createElement("br",null),r.a.createElement("ol",null,r.a.createElement("li",null," If you do not have an existing connection, Create a connection. If you have a connection, click join and enter the create code"),r.a.createElement("li",null," When you care connected, you will be able to see the number of devices in your network "),r.a.createElement("li",null," You can send / recieve texts or files instantly "),r.a.createElement("li",null," To leave the connection, click Exit connection ")),r.a.createElement("br",null),r.a.createElement("span",{className:"text-info"},"On Iphones, You might be restricted to downloading just media files, due to ios  limitations, "),r.a.createElement("br",null),r.a.createElement("span",{className:"underline"},"Tips"),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null," You can always connect back to the same connection so far there is atleast one device active. Connection only deletes when all devices have left, in this case, you will have to create a new connection"))))),r.a.createElement("hr",{className:"text-secondary"}),this.state.activeOldData&&this.state.activeOldData.length?r.a.createElement("div",{className:"border border-secondary  rounded"},r.a.createElement("div",{className:"bg-secondary p-3"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-9 col-md-6"},"              ",r.a.createElement("h3",null,"Old Data"),r.a.createElement("small",null,"We use your local storage to keep track of your old data")),r.a.createElement("div",{className:"col-3 col-md-6 text-right"},r.a.createElement("button",{onClick:function(){return e.clearLs()},className:"btn btn-sm btn-info"},r.a.createElement("i",{className:"fab fa-cloudscale mr-2"}),"Clear")))),r.a.createElement("br",null),r.a.createElement("div",{className:"p-3"},this.state.activeOldData.map((function(t,a){return r.a.createElement("div",{key:a,className:"mt-2"},r.a.createElement("h4",null,t.code),r.a.createElement("div",{className:"border rounded p-2 mt-3"},t.response.map((function(t,a){return r.a.createElement("div",{key:a},t.isFile?r.a.createElement("div",null,t.file.name,r.a.createElement("br",null),t.text,r.a.createElement("small",{className:"d-block text-muted text-right"},t.date&&Number(new Date-Number(new Date(t.date))<=6e5)?r.a.createElement("span",null,r.a.createElement("a",{href:"/api/get/"+t.file.data,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-cloud-download-alt fa-big mr-1 text-secondary"})),r.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"/api/get/"+t.file.data)},className:"btn btn-sm btn-primary mr-2"},r.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy")):"file expired",r.a.createElement("i",{className:e.iconHash[t.file.ext]}," "),t.file.ext,t.date?r.a.createElement("span",{className:"ml-1 date"},new Date(t.date).toLocaleString()):""),r.a.createElement("hr",null)):r.a.createElement("div",null,t.text,r.a.createElement("br",null),r.a.createElement("small",{className:"d-block text-muted text-right"},r.a.createElement("button",{onClick:function(){return e.preCopy(t.text)},className:"btn btn-sm btn-primary mr-2"},r.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),r.a.createElement("i",{className:"far fa-sticky-note mr-1"}),"Note",t.date?r.a.createElement("span",{className:"ml-1 date"},new Date(t.date).toLocaleString()):"")))}))))})),r.a.createElement("br",null),this.activeOldDataIndex<this.oldData.length?r.a.createElement("button",{onClick:this.incActiveOldData,className:"btn btn-sm btn-primary"},"Load more"):"")):"",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("footer",{className:"light"===this.state.mode?"text-center p-3 bg-white":"text-center p-3 bg-cus-dark"},"Made with ",r.a.createElement("i",{className:"fa fa-heart text-danger"})," by ",r.a.createElement("a",{href:"http://ayotycoon.github.io/"},"Sunmola Ayokunle")," | ",r.a.createElement("a",{href:"https://twitter.com/ayotycoon"},r.a.createElement("i",{className:"fab fa-twitter mr-1 ml-1 "})),"  | ",r.a.createElement("span",null,"Help Ayokunle find a job! ",r.a.createElement("i",{className:"far fa-smile-wink"})," | ",r.a.createElement("a",{href:"https://cvngayotycoon.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Generate your CV"))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.fae92701.chunk.js.map