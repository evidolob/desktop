"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5068],{5318:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),m=p(n),u=o,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6766:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(2685),o=(n(7378),n(5318));const i={sidebar_position:3},l="MacOS",r={unversionedId:"Installation/macos-install",id:"Installation/macos-install",title:"MacOS",description:"This page contains information regarding installation of Podman Desktop on MacOS.",source:"@site/docs/Installation/macos-install.md",sourceDirName:"Installation",slug:"/Installation/macos-install",permalink:"/docs/Installation/macos-install",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/macos-install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installing Podman with OpenShift Local",permalink:"/docs/Installation/windows-install/installing-podman-with-openshift-local"},next:{title:"Linux",permalink:"/docs/Installation/linux-install/"}},s={},p=[{value:"Installing Podman Desktop on MacOS using .dmg file",id:"installing-podman-desktop-on-macos-using-dmg-file",level:2},{value:"Installing Podman Desktop on MacOS using brew.",id:"installing-podman-desktop-on-macos-using-brew",level:2},{value:"Installation steps",id:"installation-steps",level:3},{value:"Getting Started",id:"getting-started",level:2}],d={toc:p};function c(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"macos"},"MacOS"),(0,o.kt)("p",null,"This page contains information regarding installation of Podman Desktop on MacOS. "),(0,o.kt)("p",null,"You can install Podman Desktop on Mac:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using the .dmg file "),(0,o.kt)("li",{parentName:"ol"},"Using Brew")),(0,o.kt)("admonition",{title:"Prerequisite",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Podman Desktop requires ",(0,o.kt)("a",{parentName:"p",href:"https://docs.podman.io/en/latest/index.html"},"Podman Engine"),". If you don't have Podman Engine installed, Podman Desktop will prompt you to do so at a later stage.")),(0,o.kt)("h2",{id:"installing-podman-desktop-on-macos-using-dmg-file"},"Installing Podman Desktop on MacOS using .dmg file"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Download the ",(0,o.kt)("inlineCode",{parentName:"strong"},".dmg")," file from the ",(0,o.kt)("a",{parentName:"strong",href:"/downloads/macos"},"Downloads")," section of this website.")),(0,o.kt)("p",null,'While we recommend getting the "universal" binary file which will work irrespective of the chip architecture your Mac possesses, you also have the option to get the applicable .dmg file depending on your Mac Hardware Architecture (that is Intel or Apple M1).'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Locate the downloaded file and and double-click on it. (Usually, you will find the downloaded file in the Downloads folder)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"img0",src:n(4636).Z,width:"1594",height:"786"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Drag Podman Desktop icon to the Applications folder.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"img1",src:n(3936).Z,width:"1037",height:"703"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Start Podman Desktop from the 'Launchpad' or Mac's ",(0,o.kt)("inlineCode",{parentName:"strong"},"Applications")," directory.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"img2",src:n(4349).Z,width:"674",height:"714"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Install Podman from Podman Desktop, if not yet installed.")," "),(0,o.kt)("p",null,'When you open Podman Desktop for the first time, click on the "View detection checks" button to scan if all the prerequisites to use Podman Desktop are met. If it says ',(0,o.kt)("inlineCode",{parentName:"p"},"\u274c podman cli was not found in the PATH"),", then you need to install the Podman CLI/Engine which can be done within the application. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img3",src:n(2066).Z,width:"2880",height:"1800"})),(0,o.kt)("p",null,'Click on the "Install" button next to the "View detection checks" button, and follow the instructions on screen.\nYou will be redirected to the Podman Installer. Follow the instructions on screen and enter your system password when asked.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img4",src:n(9641).Z,width:"1265",height:"1149"})),(0,o.kt)("p",null,"After the installation is complete, close the installation program. Podman Engine has been installed and you are now ready to use Podman Desktop."),(0,o.kt)("h2",{id:"installing-podman-desktop-on-macos-using-brew"},"Installing Podman Desktop on MacOS using ",(0,o.kt)("a",{parentName:"h2",href:"https://brew.sh/"},"brew"),"."),(0,o.kt)("admonition",{title:"Prerequisite",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")))),(0,o.kt)("h3",{id:"installation-steps"},"Installation steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open a terminal on your Mac."),(0,o.kt)("li",{parentName:"ol"},"Run the command mentioned below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install podman-desktop\n")),(0,o.kt)("p",null,"Brew will also install the Podman Engine along with the Podman Desktop application, in case you don't have it installed yet. "),(0,o.kt)("p",null,"After the command is executed, you can find the Podman Desktop Application within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Applications")," directory of the MacOS."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Learn more on how to get started with Podman Desktop by clicking ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/getting-started"},"here"),"."))}c.isMDXComponent=!0},3936:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/click-and-drag-862777e1ab1bfcafc559dd59f71a77e8.png"},4636:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/download-dmg-a847cf16a9f16dfddba0e46a4dbb3c2b.png"},2066:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pd-before-podman-22ea6273dc67b3521d8836ce6fa717ec.png"},4349:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/podman-desktop-app-9ea27077f1d767753acfb5c574657f27.png"},9641:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/system-pass-563b1bc0979f040e796c2e2eec40f11b.png"}}]);