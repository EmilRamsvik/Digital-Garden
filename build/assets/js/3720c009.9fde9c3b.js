"use strict";(self.webpackChunkdigital_garden=self.webpackChunkdigital_garden||[]).push([[13751],{9861:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});a(67294);var s=a(90512),r=a(1944),l=a(35281),n=a(95999);const i=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var c=a(13008),g=a(92503);const o={tag:"tag_Nnez"};var u=a(85893);function d(t){let{letterEntry:e}=t;return(0,u.jsxs)("article",{children:[(0,u.jsx)(g.Z,{as:"h2",id:e.letter,children:e.letter}),(0,u.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,u.jsx)("li",{className:o.tag,children:(0,u.jsx)(c.Z,{...t})},t.permalink)))}),(0,u.jsx)("hr",{})]})}function h(t){let{tags:e}=t;const a=function(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}(e);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,u.jsx)(d,{letterEntry:t},t.letter)))})}var j=a(90197);function m(t){let{title:e}=t;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.d,{title:e}),(0,u.jsx)(j.Z,{tag:"doc_tags_list"})]})}function x(t){let{tags:e,title:a}=t;return(0,u.jsx)(r.FG,{className:(0,s.Z)(l.k.page.docsTagsListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,u.jsx)(g.Z,{as:"h1",children:a}),(0,u.jsx)(h,{tags:e})]})})})})}function p(t){const e=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{...t,title:e}),(0,u.jsx)(x,{...t,title:e})]})}},13008:(t,e,a)=>{a.d(e,{Z:()=>i});a(67294);var s=a(90512),r=a(33692);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(85893);function i(t){let{permalink:e,label:a,count:i}=t;return(0,n.jsxs)(r.Z,{href:e,className:(0,s.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,n.jsx)("span",{children:i})]})}}}]);