"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1241],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(2685),o=(n(7378),n(5318));const i={sidebar_position:4},r="Windows",l={unversionedId:"Installation/windows-install",id:"Installation/windows-install",title:"Windows",description:"This page contains information regarding installation of Podman Desktop on Windows.",source:"@site/docs/Installation/windows-install.md",sourceDirName:"Installation",slug:"/Installation/windows-install",permalink:"/docs/Installation/windows-install",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/windows-install.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"MacOS",permalink:"/docs/Installation/macos-install"},next:{title:"Linux",permalink:"/docs/Installation/linux-install"}},s={},p=[{value:"Installing Podman Desktop on Windows",id:"installing-podman-desktop-on-windows",level:2},{value:"a. Using <code>.exe</code> file from Downloads",id:"a-using-exe-file-from-downloads",level:3},{value:"b. Using Chocolatey package manager for Windows",id:"b-using-chocolatey-package-manager-for-windows",level:3},{value:"c. Using Winget package manager for Windows",id:"c-using-winget-package-manager-for-windows",level:3},{value:"d. Using Scoop package manager for Windows",id:"d-using-scoop-package-manager-for-windows",level:3},{value:"Setting up Podman Desktop on Windows",id:"setting-up-podman-desktop-on-windows",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows"},"Windows"),(0,o.kt)("p",null,"This page contains information regarding installation of Podman Desktop on Windows."),(0,o.kt)("admonition",{title:"Prerequisites:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"NOTE: Administrator access is required for both these prerequisites.")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v"},"Hyper-V should be enabled")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install-manual"},"Windows Subsystem for Linux v2 (WSL2)")," should be installed."))),(0,o.kt)("h2",{id:"installing-podman-desktop-on-windows"},"Installing Podman Desktop on Windows"),(0,o.kt)("h3",{id:"a-using-exe-file-from-downloads"},"a. Using ",(0,o.kt)("inlineCode",{parentName:"h3"},".exe")," file from ",(0,o.kt)("a",{parentName:"h3",href:"/downloads/windows"},"Downloads")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Download the latest ",(0,o.kt)("inlineCode",{parentName:"strong"},".exe")," file from the ",(0,o.kt)("a",{parentName:"strong",href:"/downloads/windows"},"Downloads")," section of this website.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Locate the downloaded file and and double-click on it to open Podman Desktop. (Usually, you will find the downloaded file in the Downloads folder)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img0",src:n(7830).Z,width:"791",height:"414"})),(0,o.kt)("h3",{id:"b-using-chocolatey-package-manager-for-windows"},"b. Using ",(0,o.kt)("a",{parentName:"h3",href:"https://chocolatey.org/install"},"Chocolatey")," package manager for Windows"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Using the installation guide ",(0,o.kt)("a",{parentName:"strong",href:"https://chocolatey.org/install"},"here"),", install Chocolatey Package Manager.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. To install Podman Desktop, run the following command from the command line or from PowerShell:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"choco install podman-desktop\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Read more about Podman Desktop on Chocolatey ",(0,o.kt)("a",{parentName:"strong",href:"https://community.chocolatey.org/packages/podman-desktop"},"here"),".")),(0,o.kt)("h3",{id:"c-using-winget-package-manager-for-windows"},"c. Using ",(0,o.kt)("a",{parentName:"h3",href:"https://winget.run/pkg/RedHat/Podman-Desktop"},"Winget")," package manager for Windows"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Get the Winget Package manager for Windows by clicking ",(0,o.kt)("a",{parentName:"strong",href:"https://aka.ms/getwinget"},"here"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. To install Podman Desktop, run the following command from the command line or from PowerShell:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"winget install -e --id RedHat.Podman-Desktop\n")),(0,o.kt)("h3",{id:"d-using-scoop-package-manager-for-windows"},"d. Using ",(0,o.kt)("a",{parentName:"h3",href:"https://scoop.sh/#/apps?q=podman-desktop&s=0&d=1&o=true"},"Scoop")," package manager for Windows"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Using the installation guide ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/ScoopInstaller/Install#readme"},"here"),", install Scoop Package Manager.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. To install Podman Desktop, run the following commands from the command line or from PowerShell:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"scoop bucket add extras\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"scoop install podman-desktop\n")),(0,o.kt)("h2",{id:"setting-up-podman-desktop-on-windows"},"Setting up Podman Desktop on Windows"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Install Podman from Podman Desktop, if not yet installed.")),(0,o.kt)("p",null,"When you open Podman Desktop, your home screen would look like the one in the image below if you don't have Podman (Engine) installed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img1",src:n(8670).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"a. To install Podman, click on the ",(0,o.kt)("inlineCode",{parentName:"strong"},"Install")," button on the home screen. This will check for all the requirements for installation of Podman Engine.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img2",src:n(1745).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"b. If you do not have WSL2 installed, follow the instructions ",(0,o.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/en-us/windows/wsl/install-manual"},"here")," to install the same.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"c. Once all the requirements are met, Podman Desktop will ask you to allow installation of Podman (Engine). Click on ",(0,o.kt)("inlineCode",{parentName:"strong"},"Yes")," to continue.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img3",src:n(2460).Z,width:"1561",height:"895"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Once installation is completed, you are ready to use Podman Desktop.")),(0,o.kt)("p",null,"After the installation of Podman Engine, your home screen would like the one in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img4",src:n(6074).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"If the screen says ",(0,o.kt)("inlineCode",{parentName:"p"},"Podman is installed but not ready"),", it means that installation of Podman Engine has been completed but a Podman Machine has not been initialized. "),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"You can learn more about initializing a Podman Machine and working with Podman Desktop in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/getting-started"},"Getting Started guide"),"."))}m.isMDXComponent=!0},8670:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/homescreen-3bf408d19d6b48375101e7123335e428.png"},7830:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open-podman-desktop-5bcb5f1f236e0c8870dac16845b4ef35.png"},6074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-desktop-ready-1ca79102449e4d6918adb26abbc3c9ec.png"},2460:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-install-f2896fcd53f3b9b3f52dbd545fb697d4.png"},1745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/prereq-wsl2-bc43cee27e9938a067efe0f28a4f084d.png"}}]);