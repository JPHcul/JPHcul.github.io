(function(a){function t(t){for(var s,i,c=t[0],n=t[1],l=t[2],b=0,u=[];b<c.length;b++)i=c[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var a,t=0;t<o.length;t++){for(var e=o[t],s=!0,c=1;c<e.length;c++){var n=e[c];0!==r[n]&&(s=!1)}s&&(o.splice(t--,1),a=i(i.s=e[0]))}return a}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=a,i.c=s,i.d=function(a,t,e){i.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)i.d(e,s,function(t){return a[t]}.bind(null,s));return e},i.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(t,"a",t),t},i.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=n;o.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";e("85ec")},"306e":function(a,t,e){"use strict";e("aebc")},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("b-navbar",{attrs:{id:"nav",toggleable:"md",type:"dark",variant:"dark"}},[e("b-navbar-brand",{attrs:{to:"/"}},[a._v("Juridicos Perez Hernandez")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{attrs:{id:"navBrand"}},[e("b-nav-item",{attrs:{to:"/about"}},[e("b-icon",{attrs:{icon:"telephone-outbound","aria-hidden":"true"}}),a._v(" Contactame ")],1)],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:a._u([{key:"button-content",fn:function(){return[e("em",[a._v("Servicios ofrecidos")])]},proxy:!0}])},[e("b-dropdown-item",{attrs:{to:"/Amparo"}},[a._v("Derecho Amparo")]),e("b-dropdown-item",{attrs:{to:"/Civil"}},[a._v("Derecho Civil")]),e("b-dropdown-item",{attrs:{to:"/Familiar"}},[a._v("Derecho Familiar")]),e("b-dropdown-item",{attrs:{to:"/Fiscal"}},[a._v("Derecho Fiscal y Administrativo")]),e("b-dropdown-item",{attrs:{to:"/Laboral"}},[a._v("Derecho Laboral")]),e("b-dropdown-item",{attrs:{to:"/Mercantil"}},[a._v("Derecho Mercantil")]),e("b-dropdown-item",{attrs:{to:"/Penal"}},[a._v("Derecho Penal")])],1)],1)],1)],1),e("router-view"),e("b-container",{staticClass:"pie",attrs:{fluid:"md"}},[e("b-row",{staticClass:"text-center",attrs:{"align-v":"stretch"}},[e("b-col",{attrs:{cols:"",md:"8"}},[e("h4",[a._v("¿Tienes dudas?")]),e("b-button",{staticClass:"btnContacto",attrs:{pill:"",variant:"success",href:"tel:6673753981"}},[e("b-icon",{attrs:{icon:"telephone-outbound-fill"}})],1),e("b-button",{staticClass:"btnContacto",attrs:{pill:"",variant:"success",href:"https://api.whatsapp.com/send?phone=526673753981"}},[e("b-icon",{attrs:{icon:"chat-square-dots-fill"}})],1),e("h4",[a._v("Hablame o Mensajeame")])],1),e("b-col",{attrs:{cols:"",md:"4"}},[e("h5",[a._v("Developed with")]),e("h6",[e("a",{attrs:{href:"https://vuejs.org/"}},[a._v("VUE JS")])]),e("h6",[e("a",{attrs:{href:"https://bootstrap-vue.org/"}},[a._v("Bootstrap")])]),e("h6",[e("a",{attrs:{href:"https://reallittlebomb.github.io"}},[a._v("LB Studio")])])])],1)],1)],1)},o=[],i=(e("034f"),e("2877")),c={},n=Object(i["a"])(c,r,o,!1,null,null,null),l=n.exports,d=e("8c4f"),b=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"home"},[e("b-container",{attrs:{fluid:"md"}},[e("b-row",[e("b-col",{staticClass:"title"},[e("h2",[a._v("Habla con los profesionales, haremos validos tus derechos")])])],1),e("b-row",[e("div",[e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},[e("b-carousel-slide",{attrs:{caption:"Salva tu pensión","img-width":"960","img-height":"480","img-src":"https://i.ibb.co/x7cMWht/pension.png"}}),e("b-carousel-slide",{attrs:{caption:"Salva tu patrimonio","img-width":"960","img-height":"480","img-src":"https://i.ibb.co/GRFk4ZW/patrimonio.png"}}),e("b-carousel-slide",{attrs:{caption:"Protege a tu familia","img-width":"960","img-height":"480","img-src":"https://i.ibb.co/jhVrnvc/funeral.png"}})],1)],1)])],1),e("b-container",{staticClass:"descServicios"},[e("div",[e("div",[e("b-card-group",[e("b-card",{staticClass:"b-cardMargin",attrs:{"border-variant":"info",header:"DERECHO DE AMPARO",align:"center","header-bg-variant":"info"}},[e("b-card-text",[a._v("Es tu medio de defensa si las autoridades abusan de su poder, restringen tus derechos o limitan tus libertades.")]),e("b-button",{attrs:{variant:"outline-info",to:"/Amparo"}},[a._v("IR "),e("b-icon",{attrs:{icon:"shield-fill"}})],1)],1),e("b-card",{staticClass:"b-cardMargin",attrs:{"border-variant":"light",header:"DERECHO CIVIL",align:"center","header-bg-variant":"light"}},[e("b-card-text",[a._v("Son tuyos desde el nacimiento y se pierden hasta el dia de su muerte ante la ley.")]),e("b-button",{attrs:{variant:"outline-primary",to:"/Civil"}},[a._v("IR "),e("b-icon",{attrs:{icon:"person-fill"}})],1)],1)],1)],1),e("div",{staticClass:"descServicios"},[e("b-card-group",[e("b-card",{staticClass:"b-cardMargin titleCard",attrs:{"border-variant":"success",header:"DERECHO FAMILIAR",align:"center","header-bg-variant":"success"}},[e("b-card-text",{staticClass:"contCard"},[a._v("Aclara y establece la situacion de ti y tus seres queridos ante la ley.")]),e("b-button",{attrs:{variant:"outline-success",to:"/Familiar"}},[a._v("IR "),e("b-icon",{attrs:{icon:"people-fill"}})],1)],1),e("b-card",{staticClass:"b-cardMargin titleCard",attrs:{"border-variant":"danger",header:"DERECHO FISCAL Y ADMINISTRATIVO",align:"center","header-bg-variant":"danger"}},[e("b-card-text",{staticClass:"contCard"},[a._v("Aclara y evita problemas on las autoridades tributarias, e impide que ellos abusen de su cargo.")]),e("b-button",{attrs:{variant:"outline-danger",to:"/Fiscal"}},[a._v("IR "),e("b-icon",{attrs:{icon:"receipt-cutoff"}})],1)],1)],1)],1),e("div",{staticClass:"descServicios"},[e("b-card-group",[e("b-card",{staticClass:"b-cardMargin titleCard",attrs:{"border-variant":"primary",header:"DERECHO LABORAL",align:"center","header-bg-variant":"primary"}},[e("b-card-text",{staticClass:"contCard"},[a._v("Trabaja con confianza y como la ley lo indica.")]),e("b-button",{attrs:{variant:"outline-primary",to:"/Laboral"}},[a._v("IR "),e("b-icon",{attrs:{icon:"hammer"}})],1)],1),e("b-card",{staticClass:"b-cardMargin titleCard",attrs:{"border-variant":"warning",header:"DERECHO MERCANTIL",align:"center","header-bg-variant":"warning"}},[e("b-card-text",{staticClass:"contCard"},[a._v("Asociate sin miedo y con letras claras, nosotros lo testificamos.")]),e("b-button",{attrs:{variant:"outline-warning",to:"/Mercantil"}},[a._v("IR "),e("b-icon",{attrs:{icon:"handbag-fill"}})],1)],1),e("b-card",{staticClass:"b-cardMargin titleCard",attrs:{"border-variant":"secondary",header:"DERECHO PENAL",align:"center","header-bg-variant":"secondary"}},[e("b-card-text",{staticClass:"contCard"},[a._v("Demuestra tu inocencia o aclara tu situacion.")]),e("b-button",{attrs:{variant:"outline-secondary",to:"/Penal"}},[a._v("IR "),e("b-icon",{attrs:{icon:"x-octagon-fill"}})],1)],1)],1)],1)])])],1)},u=[],m={name:"Home",components:{}},p=m,v=(e("cccb"),Object(i["a"])(p,b,u,!1,null,null,null)),h=v.exports,g=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"about"},[e("b-container",{staticClass:"space",attrs:{fluid:"md"}},[e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{cols:"12",md:"auto"}},[e("div",{staticClass:"contTitle"},[e("h2",[e("b",[a._v(" No dejes ir tus derechos")])]),e("h2",[e("b",[a._v("Asesórate conmigo hoy ")])]),e("h2",[e("b",[a._v("Tambien podemos hablar por WhatsApp")])]),e("b-button",{attrs:{pill:"",variant:"success",href:"tel:6673753981"}},[e("b-icon",{attrs:{icon:"telephone-outbound-fill"}}),a._v(" LLAMA YA")],1),e("b-button",{staticClass:"btnContacto",attrs:{pill:"",variant:"success",href:"https://api.whatsapp.com/send?phone=526673753981"}},[e("b-icon",{attrs:{icon:"chat-square-dots-fill"}}),a._v(" WhatsApp")],1),e("h4",[a._v("6673753981")])],1)])],1)],1)],1)},f=[],C={},_=C,y=(e("e76e"),Object(i["a"])(_,g,f,!1,null,null,null)),w=y.exports,P=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-container",[e("b-row",[e("b-col",{staticClass:"title"},[e("b-img",a._b({staticClass:"titleImg",attrs:{alt:"Portada_Civil",src:"https://i.ibb.co/QY0YLZ5/Amparo-Portada.jpg"}},"b-img",a.mainProps,!1)),e("h2",[a._v("Protege tus derechos humanos con la fuerza del amparo")])],1)],1),e("b-row",[e("b-col",{attrs:{col:"6"}},[e("b-img",{staticClass:"imgAmp",attrs:{alt:"Amparo_Desc",center:"",src:"https://i.ibb.co/0K0xqCb/Amparo-Desc.jpg"}})],1),e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("Pero, ¿Que es un amparo?")]),e("h5",[a._v(" Un amparo es el principal instrumento de defensa de los derechos del individuo contra los actos de la autoridad ante los sistemas jurídicos, así como normas que vulneran los derechos humanos reconocidos en la constitución o tratados internacionales en los que el estado participe. ")])])])],1),e("b-row",[e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("¿Que amparos ofrecemos?")]),e("h5",[a._v(" -Pendiente de aclarar- ")])])])],1)],1)},j=[],A={},E=A,D=(e("fb3d"),Object(i["a"])(E,P,j,!1,null,null,null)),x=D.exports,S=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-container",[e("b-row",[e("b-col",{staticClass:"title"},[e("b-img",a._b({staticClass:"titleImg",attrs:{alt:"Portada_Civil",src:"https://i.ibb.co/SJLmCDS/civil-portada.jpg"}},"b-img",a.mainProps,!1)),e("h2",[a._v("Son tuyos y nadie te los puede negar")])],1)],1),e("b-row",[e("b-col",[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("Y, ¿Son importantes?")]),e("h5",[a._v(" El Derecho Civil en México se ocupa de regular los derechos y obligaciones de los individuos desde el momento de su concepción hasta su muerte."),e("br"),a._v(" Es la rama del derecho privado que contempla temas relativos a las personas, los bienes, las sucesiones, las obligaciones y los contratos. ")])])]),e("b-col",[e("b-img",{staticClass:"imgCivilDesc",attrs:{center:"",src:"https://i.ibb.co/ysQYS1G/civil-desc.png",alt:"CivilDesc"}})],1)],1),e("b-row",[e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("¿Como pueden protegerme?")]),e("h5",[a._v(" -Pendiente de aclarar- ")])])])],1)],1)},M=[],Q={},O=Q,q=(e("5d73"),Object(i["a"])(O,S,M,!1,null,null,null)),F=q.exports,L=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-container",[e("b-row",[e("b-col",{staticClass:"title"},[e("b-img",a._b({staticClass:"titleImg",attrs:{alt:"Portada_Familiar",src:"https://i.ibb.co/BVsN4xw/familiar-Portada.jpg"}},"b-img",a.mainProps,!1)),e("h2",[a._v("una mano amiga para tus problemas familiares")])],1)],1),e("b-row",[e("b-col",[e("b-img",{staticClass:"imgAmp",attrs:{alt:"Descripcion_Familiar",center:"",src:"https://i.ibb.co/qMy6xdr/familiar-Desc.jpg"}})],1),e("b-col",[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("¿como es un derecho familiar?")]),e("h5",[a._v(" El derecho de familia se refiere a las normas de orden público e interés social que regulan y protegen a la familia y a sus integrantes, así como su organización y desarrollo integral, sobre la base del respeto a los derechos de igualdad, no discriminación y respeto a la dignidad humana. "),e("br"),a._v(" El derecho de familia regula las relaciones de carácter personal y patrimonial entre los miembros de la familia y frente a terceros. ")])])])],1),e("b-row",[e("b-col",[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("¿Que cubre?")]),e("h5",[a._v(" -Pendiente de aclarar- ")])])])],1)],1)},I=[],R={},H=R,z=(e("e09d"),Object(i["a"])(H,L,I,!1,null,null,null)),T=z.exports,k=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-container",[e("b-row",[e("b-col",{staticClass:"title"},[e("b-img",a._b({staticClass:"titleImg",attrs:{alt:"Portada_Familiar",src:"https://i.ibb.co/7bSkRHW/fiscal-Portada.jpg"}},"b-img",a.mainProps,!1)),e("h2",[a._v("Finanzas sanas, mente tranquila")])],1)],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("¿Que es el dereho administrativo?")]),e("h5",[a._v(" Es la rama del Derecho Público que regula al Estado al realizar sus funciones esenciales, así como regular las relaciones entre las personas, ya sean físicas o morales con el Estado y todo lo relacionado con la administración pública y la prestación de servicios públicos. ")])])]),e("b-col",{attrs:{col:"6"}},[e("b-img",{staticClass:"imgAdministrativo",attrs:{center:"",src:"https://i.ibb.co/Y0Y3LZp/admin.jpg",alt:"Administrativo"}})],1)],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"8"}},[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("Pero, ¿Como se relaciona el dereho administrativo y el derecho fiscal?")]),e("h5",[a._v(" Están íntimamente relacionados, por ejemplo, las autoridades intervinientes en los procedimientos de naturaleza tributaria son también autoridades administrativas, además comparten tribunales y por lo tanto hay muchas similitudes en sus procedimientos. ")])])]),e("b-col",{attrs:{col:"4"}},[e("b-img",{staticClass:"imgFiscal",attrs:{center:"",src:"https://i.ibb.co/2kVQFPy/fiscal-Desc.jpg",alt:"Fiscal"}})],1)],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("¿Qué autoridad coordina esto?")]),e("h5",[a._v(" La Secretaría de Hacienda y Crédito Público tiene la facultad, entre otras, de cobrar y administrar los impuestos exigidos a los gobernados, por medio de un órgano desconcentrado, el Sistema de Administración Tributaria. ")])])]),e("b-col",{attrs:{col:"6"}},[e("b-img",{staticClass:"imgSHCP",attrs:{center:"",src:"https://i.ibb.co/02wN6Gd/SHCP.png",alt:"SHCP"}})],1)],1),e("b-row",[e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QAamparo"},[e("h3",[a._v("Podemos ayudarlo en")]),e("h5",[a._v(" -Pendiente de aclarar- ")])])])],1)],1)},Y=[],$={},N=$,B=(e("ba80"),Object(i["a"])(N,k,Y,!1,null,null,null)),V=B.exports,J=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-container",[e("b-row",[e("b-col",{staticClass:"title"},[e("b-img",a._b({staticClass:"titleImg",attrs:{alt:"Portada_Familiar",src:"https://i.ibb.co/09Zp5VC/laboral-Portada.jpg"}},"b-img",a.mainProps,!1)),e("h2",[a._v("Trabaja en confianza, nosotros te respaldamos")])],1)],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"4"}},[e("b-img",{staticClass:"imglaboral",attrs:{center:"",src:"https://i.ibb.co/cFzX95q/laboral-Desc1.jpg",alt:"Administrativo"}})],1),e("b-col",{attrs:{col:"8"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Que hace este derecho?")]),e("h5",[a._v(" Se encarga de regularizar, las relaciones que se establecen a partir de trabajo, Garantizando el cumplimiento de las obligaciones de las partes que intervienen en una relación de trabajo. ")])])])],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"4"}},[e("b-img",{staticClass:"imglaboral",attrs:{center:"",src:"https://i.ibb.co/tYJ4qv7/laboral-Desc2.gif",alt:"Fiscal"}})],1),e("b-col",{attrs:{col:"8"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Cual es su objetivo?")]),e("h5",[a._v(" En defender los intereses del trabajador y protegerlo de aquellas circunstancias que puedan llegar a perjudicarlo. ")])])])],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"4"}},[e("b-img",{staticClass:"imglaboral",attrs:{center:"",src:"https://i.ibb.co/qB2ZQ0P/laboral-Desc3.jpg",alt:"SHCP"}})],1),e("b-col",{attrs:{col:"8"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Qué institución lo respalda?")]),e("h5",[a._v(" La Secretaría del Trabajo y Previsión Social tiene la misión de fortalecer y observar el cumplimiento de los derechos laborales mediante el diálogo social, la democracia sindical y la negociación colectiva auténtica conforme el modelo laboral; La recuperación de activos de los salarios mínimos y los ingresos; La vigilancia del cumplimiento de la normativa laboral en el trabajo; Y la mejora en las condiciones laborales de las y los trabajadores para que incrementen su calidad de vida. . ")])])])],1),e("b-row",[e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Como me puede ayudar en esta situación?")]),e("h5",[a._v(" -Pendiente de aclarar- ")])])])],1)],1)},W=[],Z={},G=Z,K=(e("306e"),Object(i["a"])(G,J,W,!1,null,null,null)),U=K.exports,X=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-container",[e("b-row",[e("b-col",{staticClass:"title"},[e("b-img",a._b({staticClass:"titleImg",attrs:{alt:"Portada_Familiar",src:"https://i.ibb.co/d6sFCky/Mercantil-Portada.jpg"}},"b-img",a.mainProps,!1)),e("h2",[a._v("Negocios claros, cuentas claras")])],1)],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"8"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Que fin tiene este derecho?")]),e("h5",[a._v(" Se encarga de regular la actividad generada por los operadores jurídicos conocidos como actos de comercio ")])])]),e("b-col",{attrs:{col:"4"}},[e("b-img",{staticClass:"imgMercantil",attrs:{rounded:"circle",center:"",src:"https://i.ibb.co/1r6cykZ/Mercantil-Desc1.jpg",alt:"imgMercantil1"}})],1)],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"8"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Que es un acto de comercio?")]),e("h5",[a._v(" Se consideran actos de comercio como las acciones relacionadas con una adquisición de un objeto con las siguientes caracteristicas: ")]),e("ul",[e("li",[a._v("Finalidad de ganar dinero.")]),e("li",[a._v("Estos bienes no son adquiridos para el uso propio sino para el intercambio posterior.")]),e("li",[a._v("Estos actos son realizados por una empresa.")]),e("li",[a._v("Los actos son masivos, ya que la finalidad no es el consumo propio sino el intercambio.")])])])]),e("b-col",{attrs:{col:"4"}},[e("b-img",{staticClass:"imgMercantil",attrs:{center:"",src:"https://i.ibb.co/FDQRyb4/Mercantil-Desc2.jpg",alt:"imgMercantil2"}})],1)],1),e("b-row",[e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("Y ¿como me ayudan estos derechos?")]),e("h5",[a._v(" -Pendiente de aclarar- ")])])])],1)],1)},aa=[],ta={},ea=ta,sa=(e("82f2"),Object(i["a"])(ea,X,aa,!1,null,null,null)),ra=sa.exports,oa=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-container",[e("b-row",[e("b-col",[e("b-img",a._b({staticClass:"titleImg",attrs:{rounded:"",alt:"Portada derecho penal",src:"https://i.ibb.co/0MmMKBg/Penal-Portada.jpg"}},"b-img",a.mainProps,!1)),e("div",{staticClass:"titleDesc"},[e("h2",[a._v("La justicia siempre estara para protegerte")])])],1)],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"4"}},[e("b-img",{staticClass:"imgMercantil",attrs:{rounded:"circle",center:"",src:"https://i.ibb.co/17TdLcD/Penal-Desc1.jpg",alt:"imgPenal1"}})],1),e("b-col",{attrs:{col:"8"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Que hace este derecho?")]),e("h5",[a._v(" Establecer qué conductas son las que lesionan derechos de otras personas y qué consecuencias jurídicas tendrán esas conductas. ")])])])],1),e("b-row",{staticClass:"parrafo"},[e("b-col",{attrs:{col:"4"}},[e("b-img",{staticClass:"imgMercantil",attrs:{center:"",src:"https://i.ibb.co/xgN552W/Penal-Desc2.jpg",alt:"imgPenal2"}})],1),e("b-col",{attrs:{col:"8"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Cuando es necesario este drecho?")]),e("h5",[a._v(" Sólo es adecuado recurrir al Derecho Penal cuando no son eficaces todos los demás medios de control, ya que éste es el último recurso que ha de utilizar el Estado, tomando en cuenta la especial gravedad que revisten las sanciones penales. ")])])])],1),e("b-row",{staticClass:"decoracion1"},[e("b-col",{attrs:{cols:"12"}},[e("b-img",a._b({staticClass:"decoImg",attrs:{rounded:"",alt:"DecoracionPenal1",src:"https://i.ibb.co/y0srwkv/Penal-Deco1.png"}},"b-img",a.mainProps,!1))],1)],1),e("b-row",[e("b-col",{attrs:{col:"6"}},[e("div",{staticClass:"QA"},[e("h3",[a._v("¿Que se hace en estos casos?")]),e("h5",[a._v(" -Pendiente de aclarar- ")])])])],1)],1)},ia=[],ca={},na=ca,la=(e("ce67"),Object(i["a"])(na,oa,ia,!1,null,null,null)),da=la.exports;s["default"].use(d["a"]);var ba=[{path:"/",name:"Home",component:h},{path:"/About",name:"About",component:w},{path:"/Amparo",name:"Amparo",component:x},{path:"/Civil",name:"Civil",component:F},{path:"/Familiar",name:"Familiar",component:T},{path:"/Fiscal",name:"Fiscal",component:V},{path:"/Laboral",name:"Laboral",component:U},{path:"/Mercantil",name:"Mercantil",component:ra},{path:"/Penal",name:"Penal",component:da}],ua=new d["a"]({mode:"history",base:"/",routes:ba}),ma=ua,pa=e("2f62");s["default"].use(pa["a"]);var va=new pa["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ha=e("5f5b"),ga=e("b1e0");e("f9e3"),e("2dd8");s["default"].use(ha["a"]),s["default"].use(ga["a"]),s["default"].config.productionTip=!1,new s["default"]({router:ma,store:va,render:function(a){return a(l)}}).$mount("#app")},"5ced":function(a,t,e){},"5d73":function(a,t,e){"use strict";e("ae44")},"82f2":function(a,t,e){"use strict";e("c8a2")},"85ec":function(a,t,e){},"91aa":function(a,t,e){},ae44:function(a,t,e){},aebc:function(a,t,e){},b7cb:function(a,t,e){},ba80:function(a,t,e){"use strict";e("cd33")},c8a2:function(a,t,e){},cccb:function(a,t,e){"use strict";e("5ced")},cd33:function(a,t,e){},ce67:function(a,t,e){"use strict";e("b7cb")},e09d:function(a,t,e){"use strict";e("ee6e")},e76e:function(a,t,e){"use strict";e("91aa")},ee6e:function(a,t,e){},fb3d:function(a,t,e){"use strict";e("fb43")},fb43:function(a,t,e){}});
//# sourceMappingURL=app.60345c72.js.map