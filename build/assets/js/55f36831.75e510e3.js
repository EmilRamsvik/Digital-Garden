"use strict";(self.webpackChunkdigital_garden=self.webpackChunkdigital_garden||[]).push([[45852],{72171:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=r(85893),a=r(11151);const t={"Date Started":"Jun 12, 2023",tags:["azure","microsoft","cloud","article"],Finished:null,created:"2024-01-06T15:04",updated:"2024-01-06T15:04"},s="Azure",o={id:"Cloud/Azure",title:"Azure",description:"Storage",source:"@site/docs/Cloud/Azure.md",sourceDirName:"Cloud",slug:"/Cloud/Azure",permalink:"/docs/Cloud/Azure",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cloud/Azure.md",tags:[{label:"azure",permalink:"/docs/tags/azure"},{label:"microsoft",permalink:"/docs/tags/microsoft"},{label:"cloud",permalink:"/docs/tags/cloud"},{label:"article",permalink:"/docs/tags/article"}],version:"current",frontMatter:{"Date Started":"Jun 12, 2023",tags:["azure","microsoft","cloud","article"],Finished:null,created:"2024-01-06T15:04",updated:"2024-01-06T15:04"},sidebar:"gardenSidebar",previous:{title:"AWS",permalink:"/docs/Cloud/AWS"},next:{title:"GCP",permalink:"/docs/Cloud/GCP"}},c={},l=[{value:"Storage",id:"storage",level:2},{value:"Cognitive Search",id:"cognitive-search",level:2},{value:"Semantic Search",id:"semantic-search",level:3},{value:"Machine Learning Studio",id:"machine-learning-studio",level:2},{value:"ML-Ops",id:"ml-ops",level:4},{value:"Infrastructure as Code",id:"infrastructure-as-code",level:2},{value:"Bicep",id:"bicep",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"azure",children:"Azure"}),"\n",(0,i.jsx)(n.h2,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(n.h2,{id:"cognitive-search",children:"Cognitive Search"}),"\n",(0,i.jsxs)(n.p,{children:["Cognitive search is like Google search on the data you have available in a storage container or database.\n",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/search/cognitive-search-quickstart-blob",children:"Reasonably easy tutorial on cognitive search"})]}),"\n",(0,i.jsxs)(n.p,{children:["Cognitive search is based on indexing the documents in the database, a good overview of the search index is available from the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/search/search-what-is-an-index",children:"Azure documentation"})]}),"\n",(0,i.jsxs)(n.p,{children:["Using the command line interface (CLI) is always a good way of understanding and learning the services.  The documentation for ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/search/search-manage-azure-cli",children:"cognitive search"})," CLI is pretty good. In my experience doing continuous integration (CI) and continuous delivery (CD) makes knowing the CLI mandatory."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/Azure-Samples/azure-search-power-skills",children:"Make better indexers with Powerskills Repo"})}),"\n",(0,i.jsx)(n.p,{children:"![[Pasted image 20230615144221.png]]"}),"\n",(0,i.jsx)(n.h3,{id:"semantic-search",children:"Semantic Search"}),"\n",(0,i.jsx)(n.p,{children:"Azure Cognitive Search's Semantic Search is a feature that enhances traditional search methods by understanding the intent and contextual meaning of search queries. By leveraging AI and natural language processing, it can deliver more relevant search results, even when queries are phrased in a conversational manner or have ambiguous terms. It can also provide advanced query capabilities, like document summarisation, named entity recognition, and personalized ranking of search results."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/Azure-Samples/azure-search-openai-demo/blob/main/README.md",children:"Demo using Cognitive Search and ChatGPT"})}),"\n",(0,i.jsx)(n.h2,{id:"machine-learning-studio",children:"Machine Learning Studio"}),"\n",(0,i.jsx)(n.h4,{id:"ml-ops",children:"ML-Ops"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/MLOps",children:"ML-Ops in Azure Examples"})}),"\n",(0,i.jsx)(n.h2,{id:"infrastructure-as-code",children:"Infrastructure as Code"}),"\n",(0,i.jsx)(n.h3,{id:"bicep",children:"Bicep"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Azure-Samples/bicep-github-actions",children:"GitHub Actions for testing Bicep"})}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://en.wikipedia.org/wiki/Binary_large_object",children:["A\xa0binary large object\xa0(",(0,i.jsx)(n.strong,{children:"BLOB"}),"\xa0or\xa0",(0,i.jsx)(n.strong,{children:"blob"}),") is a collection of binary data\xa0stored as a single entity."]})}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"thoughts",children:"Thoughts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'SKU is the product tier of the resource in Azure. In Azure, the term "SKU," which stands for "Stock Keeping Unit," refers to a specific version or configuration of an Azure service or product.'}),"\n",(0,i.jsx)(n.li,{children:"Purge protection in the key vault is that you don't delete everything by accident. Postgres backups are, for example, linked to the Postgres resource."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var i=r(67294);const a={},t=i.createContext(a);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);