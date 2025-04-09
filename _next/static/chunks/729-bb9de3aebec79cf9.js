"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{7746:(e,s,t)=>{t.d(s,{default:()=>h});var a=t(5155),i=t(6874),l=t.n(i),n=t(488),r=t(8175),c=t(5684),o=t(2894);let d={product:[{name:"Features",href:"/#features",type:"scroll"},{name:"How it works",href:"/#how-it-works",type:"scroll"},{name:"Pricing",href:"/#pricing",type:"scroll"},{name:"FAQ",href:"/#faq",type:"scroll"}],company:[{name:"About us",href:"/about",type:"page"},{name:"Careers",href:"/careers",type:"page"},{name:"Contact us",href:"/contact",type:"page"}],legal:[{name:"Privacy policy",href:"/privacy-policy",type:"page"},{name:"Terms of service",href:"/terms-of-service",type:"page"}],social:[{name:"Facebook",href:"#",icon:n.A},{name:"Twitter",href:"#",icon:r.A},{name:"Instagram",href:"#",icon:c.A},{name:"LinkedIn",href:"#",icon:o.A}]};function h(){let e=(e,s,t)=>{if("/"===window.location.pathname&&"scroll"===t){e.preventDefault();let t=s.replace("/#",""),a=document.getElementById(t);a&&a.scrollIntoView({behavior:"smooth"})}};return(0,a.jsxs)("footer",{className:"bg-gray-900","aria-labelledby":"footer-heading",children:[(0,a.jsx)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,a.jsxs)("div",{className:"container py-12 md:py-16",children:[(0,a.jsxs)("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsxs)(l(),{href:"/",className:"flex items-center",children:[(0,a.jsx)("div",{className:"h-8 w-8 rounded-md bg-indigo-500 flex items-center justify-center",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5 text-white",children:(0,a.jsx)("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})})}),(0,a.jsx)("span",{className:"ml-2 text-xl font-bold text-white",children:"Fittish"})]}),(0,a.jsx)("p",{className:"text-sm leading-6 text-gray-300",children:"Helping you stay in shape with personalized meal plans, workouts, and AI-powered health tracking."}),(0,a.jsx)("div",{className:"flex space-x-6",children:d.social.map(e=>(0,a.jsxs)(l(),{href:e.href,className:"text-gray-400 hover:text-gray-300",children:[(0,a.jsx)("span",{className:"sr-only",children:e.name}),(0,a.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name))})]}),(0,a.jsxs)("div",{className:"mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0",children:[(0,a.jsx)("div",{className:"md:grid md:grid-cols-1 md:gap-8",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-sm font-semibold leading-6 text-white",children:"Product"}),(0,a.jsx)("ul",{className:"mt-6 space-y-4",children:d.product.map(s=>(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:s.href,onClick:t=>e(t,s.href,s.type),className:"text-sm leading-6 text-gray-300 hover:text-white",children:s.name})},s.name))})]})}),(0,a.jsx)("div",{className:"md:grid md:grid-cols-1 md:gap-8",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-sm font-semibold leading-6 text-white",children:"Legal"}),(0,a.jsx)("ul",{className:"mt-6 space-y-4",children:d.legal.map(s=>(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:s.href,onClick:t=>e(t,s.href,s.type),className:"text-sm leading-6 text-gray-300 hover:text-white",children:s.name})},s.name))})]})})]})]}),(0,a.jsx)("div",{className:"mt-12 border-t border-white/10 pt-8",children:(0,a.jsxs)("p",{className:"text-xs leading-5 text-gray-400",children:["\xa9 ",new Date().getFullYear()," Fittish, Inc. All rights reserved."]})})]})]})}},9464:(e,s,t)=>{t.d(s,{default:()=>m});var a=t(5155),i=t(2115),l=t(6874),n=t.n(l),r=t(4783),c=t(4416),o=t(499),d=t(5695);let h=[{name:"Home",href:"/",type:"page"},{name:"Features",href:"/#features",type:"scroll"},{name:"How it works",href:"/#how-it-works",type:"scroll"},{name:"Pricing",href:"/#pricing",type:"scroll"},{name:"Contact",href:"/#getintouch",type:"page"}];function m(){let[e,s]=(0,i.useState)(!1),[t,l]=(0,i.useState)(null),m=(0,d.usePathname)();(0,d.useRouter)(),(0,i.useEffect)(()=>{if("/"!==m){l(null);return}let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&l(e.target.id)})},{threshold:.3}),s=document.querySelectorAll("section[id]");return s.forEach(s=>e.observe(s)),()=>{s.forEach(s=>e.unobserve(s))}},[m]);let x=(t,a,i)=>{if("/"===m&&"scroll"===i){t.preventDefault();let e=a.replace("/#",""),s=document.getElementById(e);s&&s.scrollIntoView({behavior:"smooth"})}else"/"===m&&"/"===a&&(t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}));e&&s(!1)},p=(e,s,a)=>"/"!==m?m===e:"Home"===a?!t||"hero"===t:"Features"===a?"features"===t:"How it works"===a&&"how-it-works"===t;return(0,a.jsxs)(o.P.header,{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,ease:"easeOut"},children:[(0,a.jsxs)("nav",{className:"container flex items-center justify-between py-4",children:[(0,a.jsx)("div",{className:"flex lg:flex-1",children:(0,a.jsxs)(n(),{href:"/",className:"-m-1.5 p-1.5",children:[(0,a.jsx)("span",{className:"sr-only",children:"Fittish"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"h-8 w-8 rounded-md bg-indigo-500 flex items-center justify-center",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5 text-white",children:(0,a.jsx)("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})})}),(0,a.jsx)("span",{className:"ml-2 text-xl font-bold text-indigo-500",children:"Fittish"})]})]})}),(0,a.jsx)("div",{className:"flex lg:hidden",children:(0,a.jsxs)("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:()=>s(!0),children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsx)(r.A,{className:"h-6 w-6","aria-hidden":"true"})]})}),(0,a.jsx)("div",{className:"hidden lg:flex lg:gap-x-8",children:h.map(e=>(0,a.jsx)(n(),{href:e.href,onClick:s=>x(s,e.href,e.type),className:"text-sm font-medium transition-colors duration-200 ".concat(p(e.href,e.type,e.name)?"text-indigo-500":"text-gray-700 hover:text-indigo-500"),children:e.name},e.name))}),(0,a.jsx)("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:(0,a.jsx)(o.P.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,a.jsx)(n(),{href:"",className:"btn btn-primary",children:"Coming Soon...."})})})]}),e&&(0,a.jsx)(o.P.div,{className:"fixed inset-0 z-50 bg-white",initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{duration:.3,ease:"easeInOut"},children:(0,a.jsx)("div",{className:"fixed inset-0 flex",children:(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-6 py-4",children:[(0,a.jsx)("div",{children:(0,a.jsxs)(n(),{href:"/",className:"-m-1.5 p-1.5",children:[(0,a.jsx)("span",{className:"sr-only",children:"Fittish"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"h-8 w-8 rounded-md bg-indigo-500 flex items-center justify-center",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5 text-white",children:(0,a.jsx)("path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"})})}),(0,a.jsx)("span",{className:"ml-2 text-xl font-bold text-indigo-500",children:"Fittish"})]})]})}),(0,a.jsx)("div",{children:(0,a.jsxs)("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:()=>s(!1),children:[(0,a.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,a.jsx)(c.A,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,a.jsxs)("div",{className:"mt-6 flow-root",children:[(0,a.jsx)("div",{className:"space-y-2 py-6",children:h.map((e,s)=>(0,a.jsx)(o.P.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*s,duration:.3},children:(0,a.jsx)(n(),{href:e.href,onClick:s=>x(s,e.href,e.type),className:"block px-6 py-3 text-base font-medium ".concat(p(e.href,e.type,e.name)?"text-indigo-500 bg-indigo-50":"text-gray-900 hover:bg-gray-50"),children:e.name})},e.name))}),(0,a.jsx)(o.P.div,{className:"px-6 py-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.3},children:(0,a.jsx)(n(),{href:"/contact",className:"btn btn-primary w-full",onClick:()=>s(!1),children:"Coming Soon...."})})]})]})})})]})}}}]);