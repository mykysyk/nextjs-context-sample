(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{2281:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timer",function(){return r(3556)}])},2250:function(e,t,r){"use strict";r.d(t,{y:function(){return c}});var n=r(5893),u=r(1664),l=r.n(u);let i=[{title:"index",url:"/"},{title:"index2",url:"/index2/"},{title:"timer",url:"/timer/"},{title:"text",url:"/text/"}],c=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Links"}),i.map(e=>(0,n.jsx)("p",{children:(0,n.jsx)(l(),{href:e.url,children:e.title})},e.url))]})},3556:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),u=r(2250),l=r(7294);let i=()=>{let e=(0,l.useRef)(null);return(0,l.useEffect)(()=>()=>{null!==e.current&&clearTimeout(e.current)},[]),{startTimer:(t,r)=>{null!==e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{t(),e.current=null},1e3*r)}}};var c=()=>{let{startTimer:e}=i(),t=()=>{console.log("指定した秒数が経過しました。"),alert(r)},r=1;return(0,n.jsxs)("div",{children:[(0,n.jsx)(u.y,{}),(0,n.jsx)("h1",{children:"TIMER"}),(0,n.jsxs)("button",{onClick:()=>e(t,r),children:["遅延スタート(",r,")"]})]})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=2281)}),_N_E=e.O()}]);