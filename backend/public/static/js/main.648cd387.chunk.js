(this.webpackJsonpvericure=this.webpackJsonpvericure||[]).push([[0],{11:function(e,t,a){e.exports={body:"services_body__Q34wu",selector:"services_selector__pdePE",fadeIn:"services_fadeIn__3nNji",compTitle:"services_compTitle__Hi9AE",currentSelection:"services_currentSelection__3KXkC",fivePercent:"services_fivePercent__1F6OM",optionText:"services_optionText__13di8",optionTextSelected:"services_optionTextSelected__2lZUz",staffBorder:"services_staffBorder__3GUn0",doctor:"services_doctor__2bvNk",serviceImages:"services_serviceImages__1yYlR",mainPageBottom:"services_mainPageBottom__2x9U5",bioGrid:"services_bioGrid__3wR6w",officeLocation:"services_officeLocation__2RlHc",qnaEnd:"services_qnaEnd__qqpEk",textBorder:"services_textBorder__2uP1X"}},12:function(e,t,a){e.exports={hoursGrid:"hours_hoursGrid__3AJxb",highlightDate:"hours_highlightDate__3dw_B",header:"hours_header__3SOCu",connectGrid:"hours_connectGrid__3Tdcw",hitEmWithTheFlex:"hours_hitEmWithTheFlex__1kiwj",seperator:"hours_seperator__Z80Q9",connectContact:"hours_connectContact__1WHu3",connectSocial:"hours_connectSocial__XjDYz",weekDays:"hours_weekDays__1_pr8"}},13:function(e,t,a){e.exports={galleryContainer:"results_galleryContainer__DLa9B",gridContainer:"results_gridContainer__17qcV",fadeIn:"results_fadeIn__2xd7B",box:"results_box__NJtoC",centerText:"results_centerText__1h3T1",photoGrid:"results_photoGrid__3XQmb",photoBox:"results_photoBox__EXvdI",albumTitleText:"results_albumTitleText__3VXu3",photoModal:"results_photoModal__3X0UA",up:"results_up__2QIV-",photoContent:"results_photoContent__1QoKi",sliderContainer:"results_sliderContainer__2tL8o",pictureCounter:"results_pictureCounter__1wkcX",closePhotoModal:"results_closePhotoModal__2ZSuY",subheading:"results_subheading__Y8waC",photoTop:"results_photoTop__3hY30",imageGalleryButtons:"results_imageGalleryButtons__3IYLs",compTitle:"results_compTitle__3Jqh8",photoGalleryContainer:"results_photoGalleryContainer__1rJ2I"}},131:function(e,t){},150:function(e,t,a){"use strict";a.r(t);var n,s=a(0),r=a.n(s),i=a(36),o=a.n(i),l=a(27),c=(a(84),a(26)),m=a(5),u=a(6),d=a(8),h=a(7),p=a(9),g=a(74),E=a.n(g),_=a(22),v=a.n(_),f=a(1),b=window.localStorage,w=function(e,t,a){return{type:"AUTH_SUCCESS",idToken:e,userId:t,email:a}},y=function(){return b.removeItem("token"),b.removeItem("userId"),b.removeItem("expirationDate"),b.removeItem("logOutTime"),{type:"AUTH_LOGOUT"}},C=function(e){return function(t){setTimeout((function(){t(y())}),1e3*e)}},N="https://varicureveincenter.com",O=a(29),S=function(e){return e.children},k=a(10),j=a(20),T=a.n(j),x=function(e){return{type:"CHANGE_LANGUAGE",payload:e}},A=a(18),R=a.n(A),P=function(e){var t=e.isOpen,a=e.close,n=e.isEnglish,s=e.languageToggle,i=e.isFadeOut;return t?r.a.createElement("div",{className:i?R.a.modalPositionClose:R.a.modalPositionOpen},r.a.createElement("div",{className:i?R.a.modalDisappear:R.a.modalContainer},r.a.createElement("span",{className:R.a.parent,onClick:function(){return a("close")}},r.a.createElement(k.a,{to:"/"},"e"===n?"Home":"Principal")),r.a.createElement("span",{className:R.a.serviceParent,onClick:function(){return a("close")}},r.a.createElement(k.a,{to:"/services/about"},"e"===n?"Services":"Servicios")),r.a.createElement("span",{className:R.a.subService,onClick:function(){return a("/services/faq")}},r.a.createElement(k.a,{to:"/services/faq"},"\u2022 FAQ")),r.a.createElement("span",{className:R.a.subService,onClick:function(){return a("/services/results")}},r.a.createElement(k.a,{to:"/services/results"},"e"===n?"\u2022 Results":"\u2022 Resultados")),r.a.createElement("span",{className:R.a.subService,onClick:function(){return a("/services/about")}},r.a.createElement(k.a,{to:"/services/about"},"e"===n?"\u2022 About Us":"\u2022 Acerca")),r.a.createElement("span",{className:R.a.parent,onClick:function(){return a("/contact")},t:!0},r.a.createElement(k.a,{to:"/contact"},"e"===n?"Contact":"Contacto")),r.a.createElement("span",{className:R.a.parent,onClick:s},"e"===n?"Espa\xf1ol":"English"))):null},I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={isScrolled:!0,isResized:!0,isOpen:!1,isFadeOut:!1,isServicesLogo:!1},a.setLogo=function(){a.props.history.location.pathname.includes("services")&&!1===a.state.isServicesLogo&&a.setState({isServicesLogo:!0}),a.props.history.location.pathname.includes("services")||!0!==a.state.isServicesLogo||a.setState({isServicesLogo:!1})},a.logoScroll=function(){window.pageYOffset>25&&"/home"!==window.location.pathname?a.setState({isScrolled:!1}):a.setState({isScrolled:!0})},a.logoResize=function(){window.innerWidth<620?a.setState({isResized:!1}):a.setState({isResized:!0})},a.languageToggler=function(){"e"===a.props.isEnglish?a.props.translate("s"):a.props.translate("e")},a.modalToggler=function(e){if(e)a.setState({isFadeOut:!0}),setTimeout((function(){a.modalToggler()}),1500);else{var t=a.state.isOpen;a.setState({isOpen:!t,isFadeOut:!1})}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.location.pathname.includes("/services")&&this.setLogo(),window.addEventListener("scroll",this.logoScroll),window.pageYOffset>25&&"/home"!==window.location.pathname?this.setState({isScrolled:!1}):this.setState({isScrolled:!0}),window.addEventListener("resize",this.logoResize),window.innerWidth<620?this.setState({isResized:!1}):this.setState({isResized:!0}),this.props.history.listen((function(t){e.setLogo()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(P,{isOpen:this.state.isOpen,close:this.modalToggler,isEnglish:this.props.isEnglish,languageToggle:this.languageToggler,isFadeOut:this.state.isFadeOut}),r.a.createElement("div",{className:T.a.headerPosition},r.a.createElement("div",{className:T.a.headerContainer},!this.state.isScrolled||!this.state.isResized||this.state.isOpen||this.state.isServicesLogo?r.a.createElement(k.a,{to:"/"},r.a.createElement("img",{alt:"VeriCure Logo",className:T.a.VCsmall,src:"/logos/smallLogo.png"})):null,!this.state.isResized||this.state.isOpen?r.a.createElement("div",{className:T.a.headerContainerSmallText},this.state.isOpen?r.a.createElement("span",{className:T.a.imageContain,onClick:function(){return e.modalToggler("close")}},"X"):r.a.createElement("img",{alt:"hamburger",className:T.a.imageContain,src:"/myImages/hamburger.png",onClick:function(){return e.modalToggler()}})):r.a.createElement("div",{className:T.a.headerContainerText},r.a.createElement(k.a,{className:T.a.textSpace,to:"/services/about"},"e"===this.props.isEnglish?"Services":"Servicios"),r.a.createElement(k.a,{className:T.a.textSpace,to:"/contact"},"e"===this.props.isEnglish?"Contact":"Contacto"),r.a.createElement("span",{onClick:function(){return e.languageToggler()}},"e"===this.props.isEnglish?"Espa\xf1ol":"English"))),this.state.isScrolled&&this.state.isResized&&!this.state.isOpen&&!this.state.isServicesLogo?r.a.createElement(k.a,{to:"/"},r.a.createElement("img",{alt:"VeriCure Logo",className:T.a.VClogo,src:"/logos/siteLogo.png"})):null))}}]),t}(s.Component),D=Object(l.g)(Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),(function(e){return{translate:function(t){return e(x(t))}}}))(I)),M=a(19),L=a.n(M),F=(new Date).getDay(),B=["Do","Lu","Ma","Mi","Ju","Vi","S\xe1"][F],q=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][F];n=5===F?"9a \u2013 3p":6===F||0===F?"Closed":"8a \u2013 6p";var G=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)((function(e){var t=[e.background,L.a.grid];return r.a.createElement("div",{className:L.a.footerContainer},r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",null,r.a.createElement("span",{className:L.a.visibleBig},r.a.createElement("a",{href:"tel:305-284-8090"},r.a.createElement("b",null,"(305) 284-8090"))),r.a.createElement("span",{className:L.a.visibleSmall},r.a.createElement("a",{href:"tel:305-284-8090"},r.a.createElement("b",null,"e"===e.isEnglish?"Phone":"Fon")))),r.a.createElement("div",{title:"Open Map",className:L.a.address,onClick:function(){return function(e){-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("iPod")?window.open("maps://".concat(e)):window.open("https://".concat(e))}("www.google.com/maps/place/9595+N+Kendall+Dr,+Miami,+FL+33176/@25.6880755,-80.3506089,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9c73c861e9189:0xeb40d00fad0dec28!8m2!3d25.6880755!4d-80.3484202")}},r.a.createElement("span",{className:L.a.visibleBig},"9595 N.Kendall Dr. \u2022 Miami"),r.a.createElement("span",{className:L.a.visibleSmall},"e"===e.isEnglish?"Map":"Mapa")),r.a.createElement("div",null,r.a.createElement("span",{className:L.a.visibleBig},"e"===e.isEnglish?r.a.createElement("span",null,q,": ",r.a.createElement("span",{className:"Closed"===n?L.a.closed:null},n)):r.a.createElement("span",null,B,": ",r.a.createElement("span",{className:"Closed"===n?L.a.closed:null},"s"===e.isEnglish&&"Closed"===n?"Cerrado":n))),r.a.createElement("span",{className:L.a.visibleSmall},r.a.createElement("a",{href:"mailto:info@varicureveincenter.com?subject=New%20Question%20for%20Dr.%20Gurvich"},"e"===e.isEnglish?"Email":"Correo")))))})),H=a(31);function z(){var e=Object(O.a)(["background-color: rgb(19,163,153); color:white;"]);return z=function(){return e},e}var Q=function(e){var t="/admin-login"===window.location.pathname,a="/contact"===window.location.pathname;if(!("/"===window.location.pathname))var n=Object(H.a)(z());return r.a.createElement("div",null,t?null:r.a.createElement(D,null),r.a.createElement(S,null,e.children),t||a?null:r.a.createElement(G,{background:n}))},U=a(3),V=a.n(U);function Y(){var e=Object(O.a)(['\n        background-image: url("/','.jpg");']);return Y=function(){return e},e}function J(){var e=Object(O.a)(['\n        background-image: url("/circles/','.jpg");']);return J=function(){return e},e}function W(){var e=Object(O.a)(["\n    opacity: 0;\n    transition: 1s ;\n    transform: scale(0);\n"]);return W=function(){return e},e}var X,Z=["About","FAQ","Results"],K=["Acerca","FAQ","Resultados"],$=(new Date).getDay(),ee=["Do","Lu","Ma","Mi","Ju","Vi","S\xe1"][$],te=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][$];X=5===$?"9a \u2013 3p":6===$||0===$?"Closed":"8a \u2013 6p";var ae=Object(H.a)(W()),ne=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={isResized:!1,fadeOut:[!1,!1,!1],isRedirect:!1,redirectLink:""},a.UserReview=function(e){var t=e.classType,n=e.isEnglish;return r.a.createElement("div",{className:t},'"',"e"===n?a.props.englishReview:a.props.spanishReview,'" ',a.props.url?r.a.createElement("div",{className:V.a.indent},"\u2013",r.a.createElement("a",{href:a.props.url,rel:"noopener noreferrer",target:"_blank"},a.props.name," ",r.a.createElement("img",{alt:a.props.social,src:"/myImages/"+a.props.social+".png"}))," "):r.a.createElement("div",{className:V.a.indent},"\u2013",a.props.name," ",a.props.social?r.a.createElement("img",{alt:a.props.social,src:"/myImages/"+a.props.social+".png"}):null," "))},a.logoResize=function(){window.innerWidth<620?a.setState({isResized:!0}):a.setState({isResized:!1})},a.displayCircles=function(e){var t=e.forwardAddress,n=e.titleIndex,s=t,i=n,o=[Object(H.a)(J(),n),V.a.innerCircle];return r.a.createElement("div",{className:a.state.fadeOut[n]?ae:null},r.a.createElement("div",{className:o.join(" ")},r.a.createElement("div",{className:V.a.circleTextBackground,onClick:function(){return a.circleRedirect(s,i)}},"e"===a.props.isEnglish?Z[n]:K[n])))},a.circleRedirect=function(e,t){var n=a.state.fadeOut;n[t]=!0,a.setState({fadeOut:n}),setTimeout((function(){a.setState({isRedirect:!0,redirectLink:"/services/".concat(e)})}),800)},a.languageToggler=function(){"e"===a.props.isEnglish?a.props.translate("s"):a.props.translate("e")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.logoResize),window.innerWidth<620?this.setState({isResized:!0}):this.setState({isResized:!1})}},{key:"render",value:function(){var e=this,t=[Object(H.a)(Y(),this.props.homePagePic),V.a.backgroundIn,V.a.backgroundStyle];return r.a.createElement("div",null,this.state.isRedirect&&r.a.createElement(l.a,{push:!0,to:this.state.redirectLink}),this.state.isResized?null:r.a.createElement("div",{className:V.a.notMobile},r.a.createElement("div",{className:t.join(" ")},r.a.createElement(this.UserReview,{classType:V.a.userReviewDesktop,isEnglish:this.props.isEnglish}))),this.state.isResized?r.a.createElement("div",{className:V.a.mobile},r.a.createElement("div",{className:V.a.blankSpace}),r.a.createElement(this.UserReview,{classType:V.a.userReviewMobile,isEnglish:this.props.isEnglish}),r.a.createElement("div",{className:V.a.mobileHomeCircleContainer},r.a.createElement("div",{className:V.a.circlesJustify},Z.map((function(t,a){return r.a.createElement(e.displayCircles,{forwardAddress:t.toLowerCase(),titleIndex:a})})))),r.a.createElement("hr",{className:V.a.seperator}),r.a.createElement("div",{className:V.a.todaysHours},"e"===this.props.isEnglish?r.a.createElement("span",null,te,": ",r.a.createElement("span",{className:"Closed"===X?V.a.closed:null},X)):r.a.createElement("span",null,ee,": ",r.a.createElement("span",{className:"Closed"===X?V.a.closed:null},"s"===this.props.isEnglish&&"Closed"===X?"Cerrado":X))),r.a.createElement("hr",{className:V.a.seperator}),r.a.createElement("div",null,r.a.createElement("button",{className:V.a.translateButton,onClick:function(){return e.languageToggler()}},"e"===this.props.isEnglish?"\xbfEspa\xf1ol?":"English"))):null,r.a.createElement("div",{className:V.a.mainPageBottom}))}}]),t}(s.Component),se=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),(function(e){return{translate:function(t){return e(x(t))}}}))(ne),re=a(11),ie=a.n(re),oe={e:["About","Faq","Results"],s:["Acerca","Faq","Resultados"]},le=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)((function(e){var t=function(t){var a=t.display,n=t.listNum;return r.a.createElement("span",{className:ie.a.optionText,key:n},r.a.createElement(k.a,{to:"/services/".concat(oe.e[n].toLowerCase())},"e"===e.isEnglish?a:oe.s[n]))};return r.a.createElement("div",{className:ie.a.body},r.a.createElement("div",{className:ie.a.selector},oe[e.isEnglish].map((function(e,a){return r.a.createElement(t,{display:e,listNum:a})}))),r.a.createElement("div",{className:ie.a.currentSelection},r.a.createElement("div",{className:ie.a.fadeIn},e.children)),r.a.createElement("div",{className:ie.a.mainPageBottom}))})),ce=a(39),me=a(30),ue=a.n(me),de=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={QnA:{},isEnglish:"e"},a.getFAQ=function(){var e=a.props.isEnglish;v.a.get("".concat(N,"/faq/").concat(e)).then((function(t){a.setState({QnA:Object(ce.a)(t.data),isEnglish:e})})).catch((function(e){console.log(e),a.setState({QnA:[{question:"Loading Error \u2013 Please try back again later.\n",answer:"Error de Carga \u2013 Por favor vuelva m\xe1s tarde."}]})}))},a.FAQs=function(e){return r.a.createElement("div",{id:"FAQ".concat(e.key),className:ie.a.officeLocation},r.a.createElement("h3",null,ue()(e.question)),r.a.createElement("p",null,ue()(e.answer)))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getFAQ(),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.isEnglish!==this.props.isEnglish?this.getFAQ():null,r.a.createElement("div",{className:ie.a.compTitle},"FAQ"),r.a.createElement("div",null,Object.keys(this.state.QnA).map((function(t,a){var n=e.state.QnA[t],s=n.question,i=n.answer;return r.a.createElement("div",{className:ie.a.textBorder},r.a.createElement(e.FAQs,{key:a,question:s,answer:i}),a!==e.state.QnA.length-1?r.a.createElement("hr",null):r.a.createElement("div",{className:ie.a.qnaEnd}),r.a.createElement("br",null))}))))}}]),t}(s.Component),he=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)(de),pe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={QnA:{},isEnglish:"e"},a.getAbout=function(){var e=a.props.isEnglish;v.a.get("".concat(N,"/about/").concat(e)).then((function(t){a.setState({QnA:Object(ce.a)(t.data),isEnglish:e})})).catch((function(e){console.log(e),a.setState({QnA:[{question:"Loading Error \u2013 Please try back again later.\n",answer:"Error de Carga \u2013 Por favor vuelva m\xe1s tarde."}]})}))},a.About=function(e){return r.a.createElement("div",{id:"About".concat(e.key),className:ie.a.officeLocation},e.question?r.a.createElement("h3",null,ue()(e.question)):null,r.a.createElement("p",null,ue()(e.answer)))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getAbout(),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.isEnglish!==this.props.isEnglish?this.getAbout():null,r.a.createElement("div",{className:ie.a.compTitle},"e"===this.props.isEnglish?"About":"Acerca"),r.a.createElement("div",null,Object.keys(this.state.QnA).map((function(t,a){var n=e.state.QnA[t],s=n.question,i=n.answer;return r.a.createElement("div",{className:ie.a.textBorder},r.a.createElement(e.About,{key:a,question:s,answer:i}),a!==e.state.QnA.length-1?r.a.createElement("hr",null):r.a.createElement("div",{className:ie.a.qnaEnd}),r.a.createElement("br",null))}))))}}]),t}(s.Component),ge=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)(pe),Ee=a(13),_e=a.n(Ee),ve=[1,2,3,4,5,6,7,8],fe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={isEnglish:"e",modalShow:!1,modalPhoto:null},a.pictureDisplayOn=function(e){a.setState((function(t){return{modalShow:!t.modalShow,modalPhoto:e}}))},a.getTranslation=function(){a.setState({isEnglish:a.props.isEnglish})},a.pictureDisplayOff=function(){a.setState((function(e){return{modalShow:!e.modalShow,modalPhoto:null}}))},a.clickL=function(e){--e<1&&(e=ve.length),a.setState({modalPhoto:e})},a.clickR=function(e){++e>ve.length&&(e=1),a.setState({modalPhoto:e})},a.isBeforeOrAfter=function(){var e;return e=a.state.modalPhoto%2===0?"e"===a.state.isEnglish?"After":"Despu\xe9s":"e"===a.state.isEnglish?"Before":"Antes",r.a.createElement("span",null,e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=null;return this.state.modalShow&&(t=r.a.createElement("div",{className:_e.a.photoModal},r.a.createElement("div",{className:_e.a.photoTop},r.a.createElement("span",{className:_e.a.closePhotoModal,onClick:function(){return e.pictureDisplayOff()}},"x"),r.a.createElement(this.isBeforeOrAfter,null)),r.a.createElement("div",{className:_e.a.photoContent},r.a.createElement("div",{className:_e.a.imageGalleryButtons,onClick:function(){return e.clickL(e.state.modalPhoto)}},"<"),r.a.createElement("div",{className:_e.a.sliderContainer},r.a.createElement("img",{alt:"Results"+this.state.modalPhoto,src:""+"/beforeAfter/".concat(this.state.modalPhoto,".jpg")})),r.a.createElement("div",{className:_e.a.imageGalleryButtons,onClick:function(){return e.clickR(e.state.modalPhoto)}},">")),r.a.createElement("div",{className:_e.a.pictureCounter},this.state.modalPhoto,"/",ve.length))),r.a.createElement("div",{className:_e.a.fadeIn},this.state.isEnglish!==this.props.isEnglish?this.getTranslation():null,t,r.a.createElement("div",{className:_e.a.compTitle},"e"===this.state.isEnglish?"Results":"Resultados"),r.a.createElement("h1",{className:_e.a.subheading},"e"===this.state.isEnglish?"Healthy Legs Should Not Look Like Road Maps":"Las piernas sanas no deber\xedan verse como mapas de carreteras."),r.a.createElement("div",{className:_e.a.photoGalleryContainer},r.a.createElement("div",{className:_e.a.photoGrid},ve.map((function(t,a){return r.a.createElement("div",{key:a,className:_e.a.photoBox},r.a.createElement("img",{onClick:function(){return e.pictureDisplayOn(t)},alt:"Results"+t,src:"".concat("","/beforeAfter/").concat(t,".jpg")}))})))))}}]),t}(s.Component),be=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)(fe),we=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).NoSelection=function(){return r.a.createElement(l.a,{push:!0,to:"/services/about"})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"about"!==this.props.match.params.param&&"faq"!==this.props.match.params.param&&"results"!==this.props.match.params.param?this.NoSelection():null,r.a.createElement(le,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/services/about/",component:ge}),r.a.createElement(l.b,{exact:!0,path:"/services/faq/",component:he}),r.a.createElement(l.b,{exact:!0,path:"/services/results/",component:be}))))}}]),t}(s.Component),ye=Object(l.g)(we),Ce=a(34),Ne=a.n(Ce),Oe=a(48),Se=a.n(Oe),ke=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)((function(e){return r.a.createElement("div",{className:Se.a.topImage},r.a.createElement("div",{className:Se.a.topImageText},"e"===e.isEnglish?"Contact":"Contacto"))})),je=a(12),Te=a.n(je),xe=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)((function(e){var t=(new Date).getDay();return r.a.createElement("div",{className:Te.a.hoursGrid},r.a.createElement("div",{className:Te.a.weekDays},r.a.createElement("div",{className:Te.a.header},"e"===e.isEnglish?"Hours":"Horas"),r.a.createElement("div",{className:1===t||2===t||3===t||4===t?Te.a.highlightDate:null},"e"===e.isEnglish?r.a.createElement("div",null,"Monday \u2013 Thursday ",r.a.createElement("br",null)," 8 a.m. \u2013 6 p.m."):r.a.createElement("div",null,"Lunes\u2013 Jueves ",r.a.createElement("br",null)," 8 a.m. \u2013 6 p.m."))," ",r.a.createElement("br",null),r.a.createElement("div",{className:5===t?Te.a.highlightDate:null},"e"===e.isEnglish?r.a.createElement("div",null,"Friday",r.a.createElement("br",null)," 9 a.m. \u2013 3 p.m."):r.a.createElement("div",null,"Viernes",r.a.createElement("br",null)," 9 a.m. \u2013 3 p.m."))," ",r.a.createElement("br",null),r.a.createElement("div",{className:6===t||0===t?Te.a.highlightDate:null},"e"===e.isEnglish?r.a.createElement("div",null,"Saturday \u2013 Sunday",r.a.createElement("br",null)," Closed"):r.a.createElement("div",null,"S\xe1bado \u2013 Domingo",r.a.createElement("br",null),"Cerrado"))),r.a.createElement("div",{className:Te.a.seperator},r.a.createElement("div",{className:Te.a.header},"e"===e.isEnglish?"Connect":"Connecto"),r.a.createElement("div",{className:Te.a.connectGrid},r.a.createElement("div",{className:Te.a.hitEmWithTheFlex},r.a.createElement("a",{href:"tel:305-284-8090"},r.a.createElement("img",{alt:"305-284-8090",className:Te.a.connectContact,src:"/myImages/phone.png"}),r.a.createElement("br",null),"(305) 284-8090")),r.a.createElement("div",{className:Te.a.hitEmWithTheFlex},r.a.createElement("a",{href:"mailto:info@varicureveincenter.com?subject=Question for Dr. Gurvich"},r.a.createElement("img",{alt:"info@varicureveincenter.com",className:Te.a.connectContact,src:"/myImages/email.png"}),r.a.createElement("br",null),"info@vericure.com"))),r.a.createElement("a",{href:"https://www.facebook.com/VaricureMiami",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"Facebook",className:Te.a.connectSocial,src:"/myImages/FacebookBox.png"})),r.a.createElement("a",{href:"https://www.yelp.com/biz/varicure-vein-center-miami-2",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"Yelp",className:Te.a.connectSocial,src:"/myImages/YelpBox.png"}))))})),Ae=a(49),Re=a.n(Ae),Pe=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:Re.a.header},"e"===e.isEnglish?"Directions":"Direcciones"),r.a.createElement("iframe",{title:"9595 N.Kendall Dr., Miami",className:Re.a.mapBody,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.4936270180046!2d-80.35060888498064!3d25.68807548367014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c73c861e9189%3A0xeb40d00fad0dec28!2s9595%20N%20Kendall%20Dr%2C%20Miami%2C%20FL%2033176!5e0!3m2!1sen!2sus!4v1568052164994!5m2!1sen!2sus"}))})),Ie=a(50),De=a.n(Ie),Me=a(38),Le=a(21),Fe=a.n(Le),Be=a(40),qe=a.n(Be),Ge=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={name:"",email:"",phone:"",checked:"",message:""},a.onChangeHandler=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(Me.a)({},n,s))},a.onSubmitHanlder=function(e){var t,n,s,r,i,o;return De.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e.preventDefault(),t=a.state,n=t.name,s=t.email,r=t.phone,i=t.checked,o=t.message,v.a.post("".concat(N,"/personalData"),{name:n,email:s,phone:r,checked:i,message:o}).then((function(e){"Yes"===e.data?qe.a.fire({icon:"success",title:"Hurray!",text:"Your Email has been sent!"}):qe.a.fire({icon:"error",title:"Oops...",text:"Something went wrong. Please try again later!"})})).catch((function(){qe.a.fire({icon:"error",title:"Oops...",text:"Something went wrong. Please try again later!"})})),l.next=5,De.a.awrap(a.setState({name:"",email:"",phone:"",checked:"",message:""}));case 5:case"end":return l.stop()}}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:Fe.a.messageGrid,onChange:this.onChangeHandler,onSubmit:function(t){return e.onSubmitHanlder(t)}},r.a.createElement("div",null,r.a.createElement("div",{className:Fe.a.header},"e"===this.props.isEnglish?"Message":"Mensaje"),r.a.createElement("div",{className:Fe.a.intro},"e"===this.props.isEnglish?"Send a brief message to our lead physician and we will get back to you within two business days.":"Env\xede un breve mensaje a nuestro m\xe9dico principal y le responderemos dentro de dos d\xedas h\xe1biles."),r.a.createElement("input",{className:Fe.a.shortForm,type:"text",name:"name",placeholder:"e"===this.props.isEnglish?"Full Name":"Nombre Completo",value:this.state.name,required:!0})," ",r.a.createElement("br",null),r.a.createElement("input",{className:Fe.a.shortForm,type:"email",name:"email",placeholder:"e"===this.props.isEnglish?"Email":"Correo Electr\xf3nico",value:this.state.email,required:!0})," ",r.a.createElement("br",null),r.a.createElement("input",{className:Fe.a.shortForm,type:"tel",maxLength:"14",name:"phone",placeholder:"e"===this.props.isEnglish?"Phone (Optional)":"Telefono (Opcion)",value:this.state.phone})," ",r.a.createElement("br",null),r.a.createElement("div",{className:Fe.a.radioBoxes},r.a.createElement("input",{className:Fe.a.radio,type:"checkbox",name:"checked",value:"True"}),"e"===this.props.isEnglish?r.a.createElement("span",null,"Recieve occasional e-mail updates from Varicure Vein Center."):r.a.createElement("span",null,"Reciba actualizaciones ocasionales por correo electr\xf3nico de VariCure."))),r.a.createElement("div",null,r.a.createElement("textarea",{className:Fe.a.messageForm,type:"text",name:"message",placeholder:"e"===this.props.isEnglish?"Message":"Mensaje",value:this.state.message,required:!0}),r.a.createElement("button",{type:"submit",className:Fe.a.submit},"e"===this.props.isEnglish?"SUBMIT":"ENVIAR")))}}]),t}(s.Component),He=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)(Ge),ze=(new Date).getFullYear(),Qe=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{className:Ne.a.body},r.a.createElement("div",{className:Ne.a.grid},r.a.createElement(ke,null),r.a.createElement("div",{className:Ne.a.contactMagin},r.a.createElement(xe,null),r.a.createElement("hr",null),r.a.createElement(He,null),r.a.createElement("hr",null)),r.a.createElement(Pe,null),r.a.createElement("div",{className:Ne.a.copyright},"e"===this.props.isEnglish?r.a.createElement("div",null,"Copyright ","".concat(String.fromCharCode(169))," 2019 by ",r.a.createElement("a",{href:"https://www.gregroques.com",target:"_blank",rel:"noopener noreferrer"},"Greg Roques")):r.a.createElement("div",null,"Derechos de Autor ","".concat(String.fromCharCode(169))," ",ze," por ",r.a.createElement("a",{href:"https://www.gregroques.com",target:"_blank",rel:"noopener noreferrer"},"Greg Roques")))))}}]),t}(s.Component),Ue=Object(f.b)((function(e){return{isEnglish:e.isEnglish.isEnglish}}),null)(Qe),Ve=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={customerReviews1:{homePagePic:0,englishReview:"We Take Care of the Spiders",spanishReview:"Cuidamos de las ara\xf1as",url:null,name:null,social:null}},a.userReviews=function(e){var t;t=e?Math.floor(3*Math.random()):a.state.customerReviews1.homePagePic,v.a.get("".concat(N,"/reviews")).then((function(e){a.setState({customerReviews1:Object(c.a)({homePagePic:t},e.data[0])})})).catch((function(e){console.log(e)}))},a.NoPage=function(){return r.a.createElement(l.a,{push:!0,to:se})},a.serviceAbout=function(){return r.a.createElement(l.a,{push:!0,to:"/services/about"})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.userReviews(!0),this.props.onTryAutoSignUp()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:E.a.body},r.a.createElement(Q,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",render:function(){return r.a.createElement(se,e.state.customerReviews1)}}),r.a.createElement(l.b,{exact:!0,path:"/contact",component:Ue}),r.a.createElement(l.b,{exact:!0,path:"/services",component:this.serviceAbout}),r.a.createElement(l.b,{exact:!0,path:"/services/:param",component:ye}),r.a.createElement(l.b,{component:this.NoPage}))))}}]),t}(s.Component),Ye=Object(l.g)(Object(f.b)(null,(function(e){return{onTryAutoSignUp:function(){return e((function(e){var t=b.getItem("token");if(t){var a=new Date(b.getItem("expirationDate"));if(a<=new Date)e(y());else{var n=b.getItem("userId"),s=b.getItem("email");e(w(t,n,s)),e(C((a.getTime()-(new Date).getTime())/1e3))}}else e(y())}))}}}))(Ve)),Je=a(25),We=a(77),Xe=a(78),Ze={idToken:null,userId:null,email:null,error:null},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(c.a)({},e,{idToken:t.idToken,userId:t.userId,email:t.email,error:null});case"AUTH_FAIL":return Object(c.a)({},e,{error:t.error});case"AUTH_LOGOUT":return Object(c.a)({},e,{idToken:null,userId:null,email:null});default:return e}},$e={isEnglish:"e"},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANGUAGE":return Object(c.a)({},e,{isEnglish:t.payload});default:return e}},tt=Object(Je.combineReducers)({auth:Ke,isEnglish:et}),at=a(15),nt=a(41),st=Object(at.a)();nt.a.initialize("UA-154990214-1"),st.listen((function(e){nt.a.set({page:e.pathname}),nt.a.pageview(e.pathname)}));var rt=Object(Je.createStore)(tt,Object(We.composeWithDevTools)(Object(Je.applyMiddleware)(Xe.a)));o.a.render(r.a.createElement(f.a,{store:rt},r.a.createElement(l.c,{history:st},r.a.createElement(Ye,null))),document.getElementById("root"))},18:function(e,t,a){e.exports={modalPositionOpen:"modal_modalPositionOpen__1-YnB",openModal:"modal_openModal__2O210",modalPositionClose:"modal_modalPositionClose__3f8LZ",closeModal:"modal_closeModal__3-P8U",modalContainer:"modal_modalContainer__3pwJ1",textDisplay:"modal_textDisplay__3bAVa",modalDisappear:"modal_modalDisappear__2a6CX",serviceParent:"modal_serviceParent__2dYUI",subService:"modal_subService__2L3AK",parent:"modal_parent__mzhQk"}},19:function(e,t,a){e.exports={footerContainer:"footer_footerContainer__oi5Mq",fadeIn:"footer_fadeIn__18H5k",grid:"footer_grid__1i88U",closed:"footer_closed__f3Eqx",address:"footer_address__3v8of",visibleBig:"footer_visibleBig__nFZm3",visibleSmall:"footer_visibleSmall__3NF7s"}},20:function(e,t,a){e.exports={headerPosition:"header_headerPosition__3Y6Mm",headerContainer:"header_headerContainer__7fRqh",VClogo:"header_VClogo__3xAit",logoShadow:"header_logoShadow__2J0vh",headerContainerText:"header_headerContainerText__1lN_l",VCsmall:"header_VCsmall__8SE0q",headerContainerSmallText:"header_headerContainerSmallText__1Ask0",imageContain:"header_imageContain__4GHJg",fadeIn:"header_fadeIn__31Z7m"}},21:function(e,t,a){e.exports={messageGrid:"message_messageGrid__2uvNC",header:"message_header__26z-H",intro:"message_intro__19IyF",shortForm:"message_shortForm__3TjHP",messageForm:"message_messageForm__2Izpu",submit:"message_submit__1u-k_",radioBoxes:"message_radioBoxes__2HnP8"}},3:function(e,t,a){e.exports={backgroundStyle:"home_backgroundStyle__8rfkW",userReviewDesktop:"home_userReviewDesktop__2pykd",container:"home_container__1XNDx",backgroundIn:"home_backgroundIn__sWbpl",indent:"home_indent__3P_9g",mobile:"home_mobile__2Z5fh",notMobile:"home_notMobile__3hsvm",mobileFadeIn:"home_mobileFadeIn__3pb3Z",blankSpace:"home_blankSpace__1Ei3J",userReviewMobile:"home_userReviewMobile__3lnn_",mobileHomeCircleContainer:"home_mobileHomeCircleContainer__2RIzQ",innerCircle:"home_innerCircle__lFcLr",circleTextBackground:"home_circleTextBackground__2ErEd",circlesJustify:"home_circlesJustify__1TH4Z",mainPageBottom:"home_mainPageBottom___akp1",todaysHours:"home_todaysHours__3IzEp",dayColor:"home_dayColor__15e9T",closed:"home_closed__2iu2d",seperator:"home_seperator__F0sov",translateButton:"home_translateButton__1u0cw"}},34:function(e,t,a){e.exports={grid:"contact_grid__185EW",fadeIn:"contact_fadeIn__2GPYl",body:"contact_body__2K4BH",contactMagin:"contact_contactMagin__3v4rV",copyright:"contact_copyright__2Fx4D"}},48:function(e,t,a){e.exports={topImage:"contactTop_topImage__1HA6l",topImageText:"contactTop_topImageText__3QYhB"}},49:function(e,t,a){e.exports={mapBody:"map_mapBody__25dq_",header:"map_header__1arcg"}},74:function(e,t,a){e.exports={body:"app_body__5lgNh"}},79:function(e,t,a){e.exports=a(150)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.648cd387.chunk.js.map