"use strict";(self.webpackChunknah_blog=self.webpackChunknah_blog||[]).push([[5589],{9775:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(5893),n=t(3905);const o={sidebar_position:1},c="Create a Page",s={id:"tutorial-basics/create-a-page",title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/docs/tutorial-basics/create-a-page",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics-2"},next:{title:"Create a Document",permalink:"/docs/tutorial-basics/create-a-document"}},i={},l=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"create-a-page",children:"Create a Page"}),"\n",(0,a.jsxs)(r.p,{children:["Add ",(0,a.jsx)(r.strong,{children:"Markdown or React"})," files to ",(0,a.jsx)(r.code,{children:"src/pages"})," to create a ",(0,a.jsx)(r.strong,{children:"standalone page"}),":"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"src/pages/index.js"})," \u2192 ",(0,a.jsx)(r.code,{children:"localhost:3000/"})]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"src/pages/foo.md"})," \u2192 ",(0,a.jsx)(r.code,{children:"localhost:3000/foo"})]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"src/pages/foo/bar.js"})," \u2192 ",(0,a.jsx)(r.code,{children:"localhost:3000/foo/bar"})]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"create-your-first-react-page",children:"Create your first React Page"}),"\n",(0,a.jsxs)(r.p,{children:["Create a file at ",(0,a.jsx)(r.code,{children:"src/pages/my-react-page.js"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',children:"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["A new page is now available at ",(0,a.jsx)(r.a,{href:"http://localhost:3000/my-react-page",children:"http://localhost:3000/my-react-page"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"create-your-first-markdown-page",children:"Create your first Markdown Page"}),"\n",(0,a.jsxs)(r.p,{children:["Create a file at ",(0,a.jsx)(r.code,{children:"src/pages/my-markdown-page.md"}),":"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',children:"# My Markdown page\n\nThis is a Markdown page\n"})}),"\n",(0,a.jsxs)(r.p,{children:["A new page is now available at ",(0,a.jsx)(r.a,{href:"http://localhost:3000/my-markdown-page",children:"http://localhost:3000/my-markdown-page"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,n.ah)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3905:(e,r,t)=>{t.d(r,{ah:()=>l});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=n,h=u["".concat(i,".").concat(g)]||u[g]||d[g]||o;return t?a.createElement(h,c(c({ref:r},p),{},{components:t})):a.createElement(h,c({ref:r},p))}));p.displayName="MDXCreateElement"}}]);