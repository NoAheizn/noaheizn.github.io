"use strict";(self.webpackChunknah_blog=self.webpackChunknah_blog||[]).push([[8818],{1194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(5893),o=r(3905);const a={sidebar_position:2},s="Create a Document",i={id:"tutorial-basics/create-a-document",title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/tutorial-basics/create-a-document.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-document",permalink:"/docs/tutorial-basics/create-a-document",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Create a Page",permalink:"/docs/tutorial-basics/create-a-page"},next:{title:"Create a Blog Post",permalink:"/docs/tutorial-basics/create-a-blog-post"}},c={},l=[{value:"Create your first Doc",id:"create-your-first-doc",level:2},{value:"Configure the Sidebar",id:"configure-the-sidebar",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-a-document",children:"Create a Document"}),"\n",(0,n.jsxs)(t.p,{children:["Documents are ",(0,n.jsx)(t.strong,{children:"groups of pages"})," connected through:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["a ",(0,n.jsx)(t.strong,{children:"sidebar"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"previous/next navigation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"versioning"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-your-first-doc",children:"Create your first Doc"}),"\n",(0,n.jsxs)(t.p,{children:["Create a Markdown file at ",(0,n.jsx)(t.code,{children:"docs/hello.md"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-md",metastring:'title="docs/hello.md"',children:"# Hello\n\nThis is my **first Docusaurus document**!\n"})}),"\n",(0,n.jsxs)(t.p,{children:["A new document is now available at ",(0,n.jsx)(t.a,{href:"http://localhost:3000/docs/hello",children:"http://localhost:3000/docs/hello"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"configure-the-sidebar",children:"Configure the Sidebar"}),"\n",(0,n.jsxs)(t.p,{children:["Docusaurus automatically ",(0,n.jsx)(t.strong,{children:"creates a sidebar"})," from the ",(0,n.jsx)(t.code,{children:"docs"})," folder."]}),"\n",(0,n.jsx)(t.p,{children:"Add metadata to customize the sidebar label and position:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-md",metastring:'title="docs/hello.md" {1-4}',children:"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n"})}),"\n",(0,n.jsxs)(t.p,{children:["It is also possible to create your sidebar explicitly in ",(0,n.jsx)(t.code,{children:"sidebars.js"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  tutorialSidebar: [\n    'intro',\n    // highlight-next-line\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>l});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(r),p=o,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));u.displayName="MDXCreateElement"}}]);