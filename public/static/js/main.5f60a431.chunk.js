(this["webpackJsonpclient-src"]=this["webpackJsonpclient-src"]||[]).push([[0],{37:function(e,t,a){e.exports=a(76)},42:function(e,t,a){},72:function(e,t){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n,l,r=a(0),c=a.n(r),o=a(34),s=a.n(o),i=(a(42),a(36)),m=a(6),d=a(7),u=a(8),f=a(10),h=a(9),b=a(11),E=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("span",{id:"Logo",className:"font-weight-bold"},c.a.createElement("span",{className:"text-primary"},"share"),c.a.createElement("span",{className:"text-secondary"},"drop"))}}]),t}(r.Component),p=a(35),v=a.n(p),y=(a(75),function(e){return"____sharedrop__"+e});function g(){localStorage.setItem(y(""),"{}")}function N(){var e,t;navigator.userAgent.match(/ipad|iphone/i)?((e=document.createRange()).selectNodeContents(n),(t=window.getSelection()).removeAllRanges(),t.addRange(e),n.setSelectionRange(0,999999)):n.select()}l=function(e){!function(e){(n=document.createElement("textArea")).value=e,document.body.appendChild(n)}(e),N(),document.execCommand("copy"),document.body.removeChild(n)};var k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={createMode:!0,mode:"light",createCode:"",joinCode:"",connectedCode:"",connected:!1,infoData:{},textToSend:"",fileToSend:null,response:[],loading:!1},a.setTimeoutAlerterGlobal=null,a.isAlerterActiveGlobal=!1,a.iconHash={svg:"fa fa-image mr-2"},a.domain="/",a.socket=v()(a.domain),a.oldData=function(){var e=localStorage.getItem(y(""));if(e)return Object.values(JSON.parse(e)).reverse()}(),a.alerter=function(e,t,n,l){var r=4e3;if(l&&(r=l),!e)throw console.error("No type in alert");var c=document.getElementById("alerter");c&&(a.isAlerterActiveGlobal?(a.isAlerterActiveGlobal=!1,clearTimeout(a.setTimeoutAlerterGlobal),a.alerter(e,t)):(c.innerHTML='\n                        <div class="alert alert-'.concat(e,' animated fadeInDown squared">\n                        <i class="fa ').concat(n,' mr-2"></i>\n                                ').concat(""===t?"<i class='fa fa-check-circle'>  </i>":t,"\n                        </div>\n                        "),c.style.display="inline-block",a.isAlerterActiveGlobal=!0,a.setTimeoutAlerterGlobal=setTimeout((function(){a.isAlerterActiveGlobal=!1,c.style.display="none"}),r)))},a.preCopy=function(e,t){if(e)return l(e),t?void a.alerter("success","Copied  to clipboard <br>"+t,"fa-check",1e4):void a.alerter("success","Copied  to clipboard","fa-check")},a.toggleMode=function(e,t){if(t)a.setState({mode:t});else{var n="light"===a.state.mode?"dark":"light";localStorage.setItem("___color",n),a.setState({mode:n})}},a.codeGenerator=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,l=0;l<5;l++)e+=t.charAt(Math.floor(Math.random()*n));a.setState({createCode:e})},a.handleUpload=function(e){var t=e.target.files[0];if(t){var n=new FileReader;n.readAsArrayBuffer(t),n.onload=function(e){var l=n.result,r={name:t.name,size:t.size,type:t.type,data:l};a.setState({fileToSend:r})}}},a.inputUpdate=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.sender=function(){var e;if(a.state.infoData.length<2&&!window.confirm("This is the only device connected, are you sure you want to send this file"))return;a.state.fileToSend&&(e=!0,a.setState({loading:!0}));var t={file:a.state.fileToSend,text:a.state.textToSend,code:a.state.connectedCode,isFile:e};a.socket.emit("message",t),a.setState({textToSend:"",fileToSend:null})},a.clearLs=function(){g(),a.oldData=null},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("___color");e&&this.toggleMode(null,e);var t=new URLSearchParams(window.location.search);t.has("code")&&this.setState({createMode:!1,joinCode:t.get("code")}),this.codeGenerator(),this.socket.on("connect",(function(){})),this.socket.on("disconnect",(function(){window.location.reload()}))}},{key:"connect",value:function(e,t){var a=this;this.socket.emit("create",{code:e,isJoin:t}),this.socket.on("sync",(function(e){if(e){var n=t?a.state.joinCode:a.state.createCode;a.setState({connected:!0,connectedCode:n})}})),this.socket.on("info",(function(e){e&&a.setState({infoData:e})})),this.socket.on("upload error",(function(e){e&&alert("error")})),this.socket.on("404",(function(e){e&&(alert("not found"),a.setState({connected:!1}))})),this.socket.on("message",(function(e){e&&(e.isFile&&a.setState({loading:!1}),a.setState({response:[].concat(Object(i.a)(a.state.response),[e])}),function(e,t){var a=localStorage.getItem(y(""));JSON.parse(a)&&(0==JSON.parse(a).length||JSON.parse(a).length)&&(g(),a=null),a?(a=JSON.parse(a))[e]={code:e,response:t}:a=Object(m.a)({},e,{code:e,response:t}),localStorage.setItem(y(""),JSON.stringify(a))}(a.state.connectedCode,a.state.response))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:this.state.mode},this.state.loading?c.a.createElement("div",{className:"loading"},c.a.createElement("img",{alt:"loader",src:"/assets/loader.svg"})):"",c.a.createElement("div",{className:"container main-body"},c.a.createElement("div",{id:"alerter",className:"rounded"}),c.a.createElement("div",{className:"navbar"},c.a.createElement("h3",null,c.a.createElement(E,null)),c.a.createElement("span",{onClick:this.toggleMode},this.state.connected?c.a.createElement("span",{className:"fa fa-check-circle mr-2 text-success"}):c.a.createElement("span",{className:"fa fa-times-circle mr-2 text-danger"}),"light"===this.state.mode?c.a.createElement("i",{className:"fa fa-moon"}):c.a.createElement("i",{className:"fa fa-sun text-white"}))),"Share files across your devices, no sign up no login. just share! Just like  AirDrop",c.a.createElement("br",null),c.a.createElement("br",null),this.state.connected?c.a.createElement("div",{className:"border mb-3 p-2 border-secondary rounded"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{onClick:function(){return e.socket.emit("disconnect")},className:"btn btn-sm btn-danger"},c.a.createElement("i",{className:"fa fa-times mr-2"}),"Exit connection")),c.a.createElement("br",null),c.a.createElement("div",{className:"border rounded p-2"},"Connected to ",c.a.createElement("code",null,this.state.connectedCode),c.a.createElement("br",null),c.a.createElement("div",{className:"btn-group mb-1"},c.a.createElement("button",{onClick:function(){return e.preCopy(e.state.connectedCode)},className:"btn btn-sm btn-primary"},c.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),c.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"?code="+e.state.connectedCode,"Share this link so other devices can automatically join")},className:"btn btn-sm btn-outline-primary"},c.a.createElement("i",{className:"fa fa-share mr-1"}),"Share")),c.a.createElement("br",null),"Connected devices: ",this.state.infoData.length,c.a.createElement("br",null),this.state.infoData.length<2?c.a.createElement("small",{className:"text-info"},"Please connect another device, Only you is recieving these files"):""),c.a.createElement("br",null),"Files you share will appear here",c.a.createElement("br",null),this.state.response.map((function(t,a){return c.a.createElement("div",{key:a,className:"border rounded p-2 mt-3"},t.isFile?c.a.createElement("div",null,t.file.name,c.a.createElement("br",null),t.text,c.a.createElement("small",{className:"d-block text-muted text-right"},c.a.createElement("a",{href:"/api/get/"+t.file.data,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fa fa-cloud-download-alt fa-big mr-1 text-secondary"})),c.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"/api/get/"+t.file.data)},className:"btn btn-sm btn-primary mr-2"},c.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),c.a.createElement("i",{className:e.iconHash[t.file.ext]}," "),t.file.ext)):c.a.createElement("div",null,t.text,c.a.createElement("br",null),c.a.createElement("small",{className:"d-block text-muted text-right"},c.a.createElement("button",{onClick:function(){return e.preCopy(t.text)},className:"btn btn-sm btn-primary mr-2"},c.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),c.a.createElement("i",{className:"far fa-sticky-note mr-1"}),"Note")))}))):c.a.createElement("div",{onClick:function(){return e.setState({createMode:!e.state.createMode})},className:"row"},c.a.createElement("div",{className:"col-6 cursor"},c.a.createElement("div",{className:this.state.createMode?"bg-primary text-white rounded p-2 text-center ":"rounded p-2 text-center"},c.a.createElement("h3",null,"Create"))),c.a.createElement("div",{className:"col-6 cursor"},c.a.createElement("div",{className:this.state.createMode?"rounded p-2 text-center":"bg-primary text-white rounded p-2 text-center "},c.a.createElement("h3",null,"Join")))),c.a.createElement("br",null),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-md-6"},this.state.connected?"":c.a.createElement("div",null,this.state.createMode?c.a.createElement("div",null,c.a.createElement("small",{className:"text-warning"},"Your create code"),c.a.createElement("h1",null,c.a.createElement("code",null,c.a.createElement("b",null,this.state.createCode))),c.a.createElement("div",{className:"btn-group mb-1"},c.a.createElement("button",{onClick:function(){return e.preCopy(e.state.createCode)},className:"btn btn-sm btn-primary"},c.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),c.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"?code="+e.state.createCode,"Share this link so other devices can automatically join")},className:"btn btn-sm btn-outline-primary"},c.a.createElement("i",{className:"fa fa-share mr-1"}),"Share")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){return e.connect(e.state.createCode)},className:"btn btn-outline-primary btn-block",type:"button"},"Create Connection")):c.a.createElement("div",null,c.a.createElement("small",{className:"text-warning"},"Enter Your join code"),c.a.createElement("br",null),c.a.createElement("input",{className:"form-control",placeholder:"Enter your join code ",onChange:this.inputUpdate,name:"joinCode",value:this.state.joinCode}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){return e.connect(e.state.joinCode,!0)},className:"btn btn-outline-primary btn-block",disabled:""===this.state.joinCode,type:"button"},"Join Connection"))),this.state.connected?c.a.createElement("div",{className:"border rounded p-2"},"Upload File",this.state.fileToSend?c.a.createElement("div",null,c.a.createElement("div",{className:"text-right p-2"},c.a.createElement("i",{onClick:function(){return e.setState({fileToSend:null})},className:"fa cursor fa-times text-danger"})),"Name: ",this.state.fileToSend.name,",",c.a.createElement("br",null),"Size: ",this.state.fileToSend.size/1024," kb,"):"",c.a.createElement("br",null),c.a.createElement("div",{className:"text-center"},c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"fileinput",className:"cursor d-block p-5"}," ",c.a.createElement("i",{className:"fa fa-cloud-upload-alt fa-big"})),c.a.createElement("input",{id:"fileinput",type:"file",onChange:this.handleUpload,className:"form-control d-none"}),c.a.createElement("small",null,"Files are only available on our servers for 10 Munites, after which they will be deleted")),c.a.createElement("hr",null),"Send Text",c.a.createElement("textarea",{onChange:this.inputUpdate,name:"textToSend",className:"form-control ",value:this.state.textToSend}),c.a.createElement("br",null),c.a.createElement("button",{onClick:this.sender,className:"btn btn-primary btn-block"},"Send")):""),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:""},c.a.createElement("span",{className:"underline"},"How to use"),c.a.createElement("br",null),c.a.createElement("ol",null,c.a.createElement("li",null," If you do not have an existing connection, Create a connection. If you have a connection, click join and enter the create code"),c.a.createElement("li",null," When you care connected, you will be able to see the number of devices in your network "),c.a.createElement("li",null," You can send / recieve texts or files instantly "),c.a.createElement("li",null," To leave the connection, click Exit connection ")),c.a.createElement("br",null),c.a.createElement("span",{className:"text-info"},"On Iphones, You might be restricted to downloading just media files, due to ios  limitations, "),c.a.createElement("br",null),c.a.createElement("span",{className:"underline"},"Tips"),c.a.createElement("br",null),c.a.createElement("ul",null,c.a.createElement("li",null," You can always connect back to the same connection so far there is atleast one device active. Connection only deletes when all devices have left, in this case, you will have to create a new connection"))))),c.a.createElement("hr",{className:"text-secondary"}),this.oldData&&this.oldData.length?c.a.createElement("div",{className:"border border-secondary  rounded"},c.a.createElement("div",{className:"bg-secondary p-3"},c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-9 col-md-6"},"              ",c.a.createElement("h3",null,"Old Data"),c.a.createElement("small",null,"We use your local storage to keep track of your old data")),c.a.createElement("div",{onClick:function(){return e.clearLs()},className:"col-3 col-md-6 text-right"},c.a.createElement("button",{onClick:function(){return e.socket.emit("disconnect")},className:"btn btn-sm btn-info"},c.a.createElement("i",{className:"fab fa-cloudscale mr-2"}),"Clear")))),c.a.createElement("br",null),c.a.createElement("div",{className:"p-3"},this.oldData.map((function(t,a){return c.a.createElement("div",{key:a,className:"mt-2"},c.a.createElement("h4",null,t.code),c.a.createElement("div",{className:"border rounded p-2 mt-3"},t.response.map((function(t,a){return c.a.createElement("div",{key:a},t.isFile?c.a.createElement("div",null,t.file.name,c.a.createElement("br",null),t.text,c.a.createElement("small",{className:"d-block text-muted text-right"},c.a.createElement("a",{href:"/api/get/"+t.file.data,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fa fa-cloud-download-alt fa-big mr-1 text-secondary"})),c.a.createElement("button",{onClick:function(){return e.preCopy(window.location.hostname+"/api/get/"+t.file.data)},className:"btn btn-sm btn-primary mr-2"},c.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),c.a.createElement("i",{className:e.iconHash[t.file.ext]}," "),t.file.ext),c.a.createElement("hr",null)):c.a.createElement("div",null,t.text,c.a.createElement("br",null),c.a.createElement("small",{className:"d-block text-muted text-right"},c.a.createElement("button",{onClick:function(){return e.preCopy(t.text)},className:"btn btn-sm btn-primary mr-2"},c.a.createElement("i",{className:"fa fa-copy mr-1"}),"Copy"),c.a.createElement("i",{className:"far fa-sticky-note mr-1"}),"Note")))}))))})))):"",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement("footer",{className:"light"===this.state.mode?"text-center p-3 bg-white":"text-center p-3 bg-cus-dark"},"Made with ",c.a.createElement("i",{className:"fa fa-heart text-danger"})," by ",c.a.createElement("a",{href:"http://ayotycoon.github.io/"},"Sunmola Ayokunle")," | ",c.a.createElement("a",{href:"https://twitter.com/ayotycoon"},c.a.createElement("i",{className:"fab fa-twitter mr-1 ml-1 "})),"  | ",c.a.createElement("span",null,"Help Ayokunle find a job! ",c.a.createElement("i",{className:"far fa-smile-wink"})," | ",c.a.createElement("a",{href:"https://cvngayotycoon.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"Generate your CV"))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5f60a431.chunk.js.map