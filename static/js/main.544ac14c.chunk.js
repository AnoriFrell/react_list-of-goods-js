(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{10:function(t,e,s){},12:function(t,e,s){"use strict";s.r(e);var n=s(4),c=s.n(n),o=s(1),i=s(2),l=s.n(i),r=(s(9),s(10),s(0));const a=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u="alpha",b="length";const d=()=>{const[t,e]=Object(o.useState)(""),[s,n]=Object(o.useState)(!1),c=function(t,e){let{sortField:s,reverseField:n}=e;const c=[...t];return s&&c.sort(((t,e)=>{switch(s){case u:return t.localeCompare(e);case b:return t.length-e.length;default:return 0}})),n&&c.reverse(),c}(a,{sortField:t,reverseField:s});return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{onClick:()=>e(u),type:"button",className:l()("button","is-info",{"is-light":t!==u}),children:"Sort alphabetically"}),Object(r.jsx)("button",{onClick:()=>e(b),type:"button",className:l()("button","is-success",{"is-light":t!==b}),children:"Sort by length"}),Object(r.jsx)("button",{onClick:()=>n(!s),type:"button",className:l()("button","is-warning",{"is-light":!s}),children:"Reverse"}),(""!==t||s)&&Object(r.jsx)("button",{onClick:()=>{e(""),n(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(r.jsx)("ul",{children:c.map((t=>Object(r.jsx)("li",{"data-cy":"Good",children:t},t)))})]})};c.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.544ac14c.chunk.js.map