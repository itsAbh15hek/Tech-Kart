(this["webpackJsonptech-kart"]=this["webpackJsonptech-kart"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":"fgsa2142fa","name":"Keyboards","description":"Buy different keyboard from any brand available"},{"id":"xasgy42fa","name":"Headphones","description":"Find best-fit for your ears"}]')},12:function(e){e.exports=JSON.parse('[{"id":"1a","name":"Ducky One 2","price":100,"currency":"USD","delivery":false,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_DKME1961ST-USPDZZT1_10.jpg","inStock":true,"categoryId":"fgsa2142fa"},{"id":"2a","name":"Varmilo Sakura","price":140,"currency":"USD","delivery":true,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_2790_SakuraTKL_1.jpg","inStock":true,"categoryId":"fgsa2142fa"},{"id":"3a","name":"MK Disco","price":80,"currency":"USD","delivery":true,"thumbnail":"https://mechanicalkeyboards.com/shop/images/products/large_2017_Disco_White_Caps_1.png","inStock":false,"categoryId":"fgsa2142fa"},{"id":"4b","name":"Razer Kraken","price":60,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/71BKQhFzDmL._AC_SY355_.jpg","inStock":false,"categoryId":"xasgy42fa"},{"id":"5b","name":"HyperX Cloud II","price":115,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/719KtJ-RAFL._AC_SL1417_.jpg","inStock":true,"categoryId":"xasgy42fa"},{"id":"6b","name":"Sennheiser PC 3 Chat","price":60,"currency":"USD","delivery":false,"thumbnail":"https://images-na.ssl-images-amazon.com/images/I/61kIoNSe3VL._SL1500_.jpg","inStock":true,"categoryId":"xasgy42fa"}]')},17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(11),i=c.n(r),s=(c(17),c(3)),o=c(5),l=c(0),u=Object(n.createContext)();function d(e){var t=Object(n.useState)(0),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(0),o=Object(s.a)(i,2),d=o[0],j=o[1],b=Object(n.useState)([]),h=Object(s.a)(b,2),m=h[0],O=h[1];return localStorage.getItem("dataExists")||(localStorage.setItem("dataExists",!0),localStorage.setItem("cartItemNumber",0),localStorage.setItem("cartAmount",0),localStorage.setItem("cartData",JSON.stringify([]))),Object(n.useEffect)((function(){r(JSON.parse(localStorage.getItem("cartItemNumber"))),j(JSON.parse(localStorage.getItem("cartAmount"))),O(JSON.parse(localStorage.getItem("cartData")))}),[]),Object(n.useEffect)((function(){localStorage.setItem("cartItemNumber",a),localStorage.setItem("cartAmount",d),localStorage.setItem("cartData",JSON.stringify(m))}),[a,d,m]),Object(l.jsx)(u.Provider,{value:[a,r,d,j,m,O],children:e.children})}var j=function(e){var t,c=e.categoryData,a=e.otherCategoryData,r=e.isCheckout,i=e.isHeader,d=Object(n.useContext)(u),j=Object(s.a)(d,3),b=j[0],h=j[2],m={},O={};return i||r||(t="Keyboards"===c.name,m="Keyboards"===c.name?c:a,O="Headphones"===c.name?c:a),Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("h1",{className:"title",children:"Tech Kart"})}),!i&&!r&&Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(o.b,{to:"/catagories",state:{categoryData:O||0,otherCategoryData:m||0},children:Object(l.jsx)("button",{className:"nav-btn ".concat(t?"":"nav-active"),children:"Headphones"})}),Object(l.jsx)(o.b,{to:"/catagories",state:{categoryData:m||0,otherCategoryData:O||0},children:Object(l.jsx)("button",{className:"nav-btn ".concat(t?"nav-active":""),children:"Keyboards"})})]}),!r&&Object(l.jsx)(o.b,{to:"/checkout",children:Object(l.jsxs)("div",{className:"cart",children:[Object(l.jsx)("p",{className:"item-number",children:b}),Object(l.jsx)("p",{className:"item-amount",children:"$".concat(h)})]})})]})};j.defaultProps={isCheckout:!1};var b=j,h=c(10),m=c.p+"static/media/keyboard.bfe46479.png",O=c.p+"static/media/headphone.7b3d83f1.png",x=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({}),i=Object(s.a)(r,2),u=i[0],d=i[1],j=Object(n.useState)(""),x=Object(s.a)(j,2),f=x[0],p=x[1];Object(n.useEffect)((function(){a((function(e){return h.filter((function(e){return"Keyboards"===e.name}))[0]})),d((function(e){return h.filter((function(e){return"Headphones"===e.name}))[0]}))}),[]);var g={position:"fixed",width:"30%",top:"35vh",right:"".concat("Keyboards"===f?"-5%":"-40%"),zIndex:"-1",transition:"right .5s ease-in-out"},y={position:"fixed",width:"25%",top:"31vh",transform:"scaleX(-1)",left:"".concat("Headphones"===f?"-0%":"-30%"),zIndex:"-1",transition:"left .5s ease-in-out"},v={position:"fixed",bottom:"100px",fontSize:"20px",fontFamily:"Lucida Console, Monaco, monospace",letterSpacing:"1px",color:"".concat("Headphones"===f?"white":"transparent"),transition:"all .5s ease-in-out"},S={position:"fixed",bottom:"100px",fontSize:"20px",fontFamily:"Lucida Console, Monaco, monospace",letterSpacing:"1px",color:"".concat("Keyboards"===f?"white":"transparent"),transition:"all .5s ease-in-out"};return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)(b,{isHeader:!0}),Object(l.jsxs)("div",{className:"home-showcase",children:[Object(l.jsx)(o.b,{to:"/catagories",state:{categoryData:u||0,otherCategoryData:c||0},children:Object(l.jsx)("button",{onMouseEnter:function(){return p("Headphones")},onMouseLeave:function(){return p("")},className:"button type1",children:"Headphones"})}),Object(l.jsx)(o.b,{to:"/catagories",state:{categoryData:c||0,otherCategoryData:u||0},children:Object(l.jsx)("button",{onMouseEnter:function(){return p("Keyboards")},onMouseLeave:function(){return p("")},className:"button type1",children:"Keyboards"})})]}),Object(l.jsx)("div",{style:v,children:u.description}),Object(l.jsx)("div",{style:S,children:c.description}),Object(l.jsx)("img",{src:O,alt:"keyboard",style:y}),Object(l.jsx)("img",{src:m,alt:"keyboard",style:g})]})},f=c(2),p=function(e){var t=e.filters,c=e.setFilters,n=t.delivery,a=t.inStock,r=t.expensive;return Object(l.jsx)("div",{className:"filter",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{htmlFor:"delivery",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(){return c({delivery:!n,inStock:a,expensive:r})}}),Object(l.jsx)("span",{children:" Delivery"})]}),Object(l.jsxs)("label",{htmlFor:"in-stock",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(){return c({delivery:n,inStock:!a,expensive:r})}}),Object(l.jsx)("span",{children:" Only In-Stock"})]}),Object(l.jsxs)("label",{htmlFor:"expensive",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(){return c({delivery:n,inStock:a,expensive:!r})}}),Object(l.jsx)("span",{children:" Expensive"})]})]})})},g=c(8),y=c(12),v=function(e){var t=e.id,c=e.thumbnail,a=e.name,r=e.currency,i=e.price,o=e.inStock,d=Object(n.useContext)(u),j=Object(s.a)(d,6),b=j[1],h=j[3],m=j[4],O=j[5];return Object(l.jsxs)("div",{className:"item-container",children:[Object(l.jsx)("div",{className:"item-image-container",children:Object(l.jsx)("img",{className:"item-image",src:c,alt:a})}),Object(l.jsx)("span",{className:"item-data",children:a}),Object(l.jsx)("span",{className:"item-data",children:"".concat(r," ").concat(i)}),o?Object(l.jsx)("span",{className:"item-data",style:{color:"green"},children:"In Stock"}):Object(l.jsx)("span",{className:"item-data",style:{color:"red"},children:"Out of Stock"}),o?Object(l.jsx)("button",{className:"add-btn",onClick:function(){var e=!1;m.forEach((function(c){return c.id!==t||(e=!e)})),0===m.length||!1===e?O((function(e){return[].concat(Object(g.a)(e),[{id:t,thumbnail:c,name:a,price:i,quantity:1}])})):m.forEach((function(e){return e.id!==t||(e.quantity=e.quantity+1)})),b((function(e){return e+1})),h((function(e){return e+i}))},children:"Add to Cart"}):Object(l.jsx)("button",{className:"add-btn",style:{backgroundColor:"grey",color:"white",cursor:"default"},children:"Add to Cart"})]},t)},S=function(e){var t=e.filters,c=e.categoryId,a=t.delivery,r=t.inStock,i=t.expensive,o=Object(n.useState)([]),u=Object(s.a)(o,2),d=u[0],j=u[1];Object(n.useEffect)((function(){j((function(e){return[].concat(Object(g.a)(e),Object(g.a)(y))}))}),[]);var b=d.filter((function(e){return e.categoryId===c})).filter((function(e){return!a||!0===e.delivery})).filter((function(e){return!r||!0===e.inStock})).filter((function(e){return!i||e.price>100}));return Object(l.jsx)("div",{className:"product-list",children:b.map((function(e){return Object(l.jsx)(v,{id:e.id,thumbnail:e.thumbnail,name:e.name,currency:e.currency,price:e.price,inStock:e.inStock},e.id)}))})},k=function(){var e=Object(n.useState)({delivery:!1,inStock:!1,expensive:!1}),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(f.e)();console.log(r);var i=r.state,o=i.categoryData,u=i.otherCategoryData,d=o.id;return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{categoryData:o,otherCategoryData:u}),Object(l.jsxs)("div",{className:"categories",children:[Object(l.jsx)(p,{filters:c,setFilters:a}),Object(l.jsx)("div",{className:"scroll",children:Object(l.jsx)(S,{filters:c,categoryId:d})})]})]})},N=c.p+"static/media/x-mark-48.fc7c867b.ico",C=function(e){var t=e.id,c=e.thumbnail,n=e.name,a=e.price,r=e.quantity,i=e.setCartItemNumber,s=e.setCartAmount,o=e.setCartData,u=function(){o((function(e){return e.filter((function(e){return e.id!==t}))})),i((function(e){return e-r})),s((function(e){return e-a*r}))};return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("div",{className:"cart-img-container",children:Object(l.jsx)("img",{className:"cart-img",src:c,alt:"thumbnail"})})}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:a}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{onClick:function(){1===r?u():(o((function(e){return e.map((function(e){return e.id!==t?e:{id:t,thumbnail:c,name:n,price:a,quantity:r-1}}))})),i((function(e){return e-1})),s((function(e){return e-a})))},className:"qty",children:"-"}),r,Object(l.jsx)("button",{onClick:function(){o((function(e){return e.map((function(e){return e.id!==t?e:{id:t,thumbnail:c,name:n,price:a,quantity:r+1}}))})),i((function(e){return e+1})),s((function(e){return e+a}))},className:"qty",children:"+"})]}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{className:"delete",src:N,alt:"delete",onClick:u})})]},t)},I=function(){var e=Object(n.useContext)(u),t=Object(s.a)(e,6),c=t[1],a=t[2],r=t[3],i=t[4],d=t[5];return Object(l.jsxs)("div",{className:"checkout-parent",children:[Object(l.jsx)(b,{isCheckout:!0}),Object(l.jsxs)("div",{className:"checkout-container",children:[Object(l.jsx)("h1",{children:"Checkout"}),i.length>0?Object(l.jsxs)("div",{className:"table",children:[Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Quantity"}),Object(l.jsx)("th",{})]})}),Object(l.jsx)("tbody",{children:i.map((function(e){return Object(l.jsx)(C,{id:e.id,thumbnail:e.thumbnail,name:e.name,price:e.price,quantity:e.quantity,setCartItemNumber:c,setCartAmount:r,setCartData:d},e.id)}))})]}),Object(l.jsx)("div",{className:"total",children:Object(l.jsx)("p",{children:"Total Amount: $".concat(a)})}),Object(l.jsx)("button",{className:"checkout-btn",onClick:function(){return d((function(e){return[]})),c((function(e){return 0})),void r((function(e){return 0}))},children:"Checkout"})]}):Object(l.jsx)("p",{children:"Your Cart is empty"})]}),Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("button",{className:"footer-btn",children:"Continue Shopping"})})})]})};var D=function(){return Object(l.jsx)(d,{children:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(o.a,{children:Object(l.jsxs)(f.c,{children:[Object(l.jsx)(f.a,{path:"/",element:Object(l.jsx)(x,{})}),Object(l.jsx)(f.a,{path:"/catagories/",element:Object(l.jsx)(k,{})}),Object(l.jsx)(f.a,{path:"/checkout",element:Object(l.jsx)(I,{})})]})})})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),_()}},[[19,1,2]]]);
//# sourceMappingURL=main.9077b155.chunk.js.map