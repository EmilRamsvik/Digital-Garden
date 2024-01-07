"use strict";(self.webpackChunkdigital_garden=self.webpackChunkdigital_garden||[]).push([[28947],{71547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(85893),i=a(11151);const s={Finished:null,tags:["article","digital-garden","python","fast-api","#api","#web-development","#backend","#programming"]},r="FastAPI",o={id:"Programming/Python/FastAPI",title:"FastAPI",description:"I like Fastapi as a backend service. It is very easy to learn and it is good when designing apis.",source:"@site/docs/Programming/Python/FastAPI.md",sourceDirName:"Programming/Python",slug:"/Programming/Python/FastAPI",permalink:"/docs/Programming/Python/FastAPI",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Programming/Python/FastAPI.md",tags:[{label:"article",permalink:"/docs/tags/article"},{label:"digital-garden",permalink:"/docs/tags/digital-garden"},{label:"python",permalink:"/docs/tags/python"},{label:"fast-api",permalink:"/docs/tags/fast-api"},{label:"#api",permalink:"/docs/tags/api"},{label:"#web-development",permalink:"/docs/tags/web-development"},{label:"#backend",permalink:"/docs/tags/backend"},{label:"#programming",permalink:"/docs/tags/programming"}],version:"current",frontMatter:{Finished:null,tags:["article","digital-garden","python","fast-api","#api","#web-development","#backend","#programming"]},sidebar:"gardenSidebar",previous:{title:"Python",permalink:"/docs/Programming/Python/"},next:{title:"Pytest",permalink:"/docs/Programming/Python/Pytest"}},d={},c=[{value:"Security Layer FastAPI",id:"security-layer-fastapi",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fastapi",children:"FastAPI"}),"\n",(0,n.jsx)(t.p,{children:"I like Fastapi as a backend service. It is very easy to learn and it is good when designing apis."}),"\n",(0,n.jsx)(t.h3,{id:"security-layer-fastapi",children:"Security Layer FastAPI"}),"\n",(0,n.jsx)(t.p,{children:"API key and Depends can be used to create a validation layer. The API key can be imported by fastapi. security and is used to authenticate the api. However, you need to include it in the codebase. This is just one of many ways to use FastAPI to take care of authentication."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from fastapi.security.api_key import APIKeyHeader\nfrom fastapi import Security, HTTPException\nfrom starlette.status import HTTP_403_FORBIDDEN\napi_key_header = APIKeyHeader(name="access_token", auto_error=False)\nasync def get_api_key(api_key_header: str = Security(api_key_header)):\n    if api_key_header == API_KEY: # secret value\n        return api_key_header\n    else:\n        raise HTTPException(\n            status_code=HTTP_403_FORBIDDEN, detail="Could not validate API KEY"\n        )\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'APIKeyHeader(name="access_token", auto_error=False)'}),": This creates an instance of the\xa0",(0,n.jsx)(t.code,{children:"APIKeyHeader"}),"\xa0class, which represents an API key security scheme where the key is sent in the headers of the request. The\xa0",(0,n.jsx)(t.code,{children:"name"}),"\xa0argument is the name of the header where the API key should be found and\xa0",(0,n.jsx)(t.code,{children:"auto_error=False"}),"\xa0means that FastAPI won't automatically raise an exception if the API key is missing or invalid."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Security(api_key_header)"}),": This creates a dependency that FastAPI will inject into the\xa0",(0,n.jsx)(t.code,{children:"get_api_key"}),"\xa0function. FastAPI will look for an API key in the headers of the request and pass it to\xa0",(0,n.jsx)(t.code,{children:"get_api_key"}),"\xa0as the\xa0",(0,n.jsx)(t.code,{children:"api_key_header"}),"\xa0argument."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"get_api_key(api_key_header: str = Security(api_key_header))"}),": This is an asynchronous function that takes the API key from the request headers (injected by FastAPI) and checks if it matches the expected API key. If the keys match, the function returns the key; otherwise, it raises an\xa0",(0,n.jsx)(t.code,{children:"HTTPException"}),"\xa0with a 403 status code to indicate that the request is forbidden."]}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.vidavolta.io/?ref=vidavolta.io",children:"FastAPI Articles"})}),"\n",(0,n.jsx)(t.li,{}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"thoughts",children:"Thoughts"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(67294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);