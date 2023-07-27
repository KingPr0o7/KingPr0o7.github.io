(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const h="/assets/ncp-logo-f1944a85.png",v="/assets/link-707baf7d.svg",f="/assets/github-d0312bf6.svg",y="/assets/x-9bb1ed28.svg",k="/assets/discord-bd04cdd8.svg",_="/assets/youtube-733a09bd.svg",w="/assets/gmail-aa9bddda.svg";function d(){document.documentElement.style.setProperty("--vh",`${window.innerHeight/100}px`),addEventListener("load",d),addEventListener("resize",d),addEventListener("orientationchange",d)}function E(){const t=new IntersectionObserver(a=>{a.forEach(c=>{c.isIntersecting&&(c.target.classList.add("show"),c.target.classList.contains("page-header")&&c.target.setAttribute("animate",""))})});document.querySelectorAll(".hidden").forEach(a=>t.observe(a))}function i(t,s,a,c){s=="tab"?a=="link"?c.key=="Enter"&&window.open(t,"_blank"):a=="page"&&c.key=="Enter"&&(window.location.href=t):a=="link"?window.open(t,"_blank"):window.location.href=t}const L="../../",S="../../blogs/",q="../../blogs/all-about-me/",x="../../blogs/the-computer-science-speedrun/",l="../../privacy-policy/",P="https://github.com/KingPr0o7/Combo-Menu",u="https://discord.gg/QGDPS6wHB8",g="https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA",m="https://x.com/KingPr0o7",b="https://mail.google.com/mail/?view=cm&fs=1&to=nathan@ncp.dev&su=&body=",p="https://github.com/KingPr0o7",C="https://github.com/KingPr0o7/KingPr0o7.github.io#404-filepage-not-found-online-only",M="https://www.githubstatus.com/",K="https://twitter.com/githubstatus?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",$="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",G="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection",O="https://github.com/KingPr0o7/KingPr0o7.github.io",A="https://code.org/",H="https://palletsprojects.com/p/flask/",N="https://github.com/KingPr0o7/Combo-Menu/commits/main";var e=document.createElement("div");e.innerHTML=`
    <dialog data-modal id="footer-modal">
    <div id='footer-modal-container'>
        <div id="footer-modal-content">
            <p>📧 <span class='inline'>nathan@ncp.dev</span></p>
            <div id="gmail-link" tabindex="0">
                <img id="link-image" src="${v}" alt="Redirect Icon" />
                <p id="link-text">Gmail</p>
            </div>	
        </div>
        <div id="footer-modal-button">
            <button data-close-modal id="footer-modal-close">Close</button>
        </div>
    </div>
    </dialog>

    <!-- Footer -->
    <div class="hidden" id="footer">
        <div id="footer-container">
            <div id="footer-content">
                <div id="footer-logo">
                    <img id="footer-icon" src="${h}" alt="NCP Icon" title="NCP Logo">
                </div>			
                <div id="footer-socials">
                    <div id="contact-container">
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-github" src="${f}" alt="Contact Method GitHub" title="GitHub" tabindex="0">
                        </div>	
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-x" src="${y}" alt="Contact Method X" title="X" tabindex="0">
                        </div>
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-discord" src="${k}" alt="Contact Method Discord" title="Discord" tabindex="0">
                        </div>
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-youtube" src="${_}" alt="Contact Method YouTube" title="YouTube" tabindex="0">
                        </div>
                        <div class="contact-image-container" data-open-modal>
                            <img class="contact-image" id="contact-gmail" src="${w}" alt="Contact Method Gmail" title="Gmail" tabindex="0">
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-documents">
                <p id="footer-privacy" tabindex="0">Privacy</p>			
            </div>	
            <hr>
            <div id="footer-copyright">
                <p id="footer-copyright">Copyright © 2023 Nathan Parker. All rights reserved. Licensed under the AGPLv3.</p>
            </div>
        </div>
    </div>
`;e.querySelector("#contact-github").addEventListener("click",t=>i(p,"click","link",t));e.querySelector("#contact-github").addEventListener("keydown",t=>i(p,"tab","link",t));e.querySelector("#contact-x").addEventListener("click",t=>i(m,"click","link",t));e.querySelector("#contact-x").addEventListener("keydown",t=>i(m,"tab","link",t));e.querySelector("#contact-discord").addEventListener("click",t=>i(u,"click","link",t));e.querySelector("#contact-discord").addEventListener("keydown",t=>i(u,"tab","link",t));e.querySelector("#contact-youtube").addEventListener("click",t=>i(g,"click","link",t));e.querySelector("#contact-youtube").addEventListener("keydown",t=>i(g,"tab","link",t));e.querySelector("#contact-gmail").addEventListener("click",()=>e.querySelector("[data-modal]").showModal());e.querySelector("#contact-gmail").addEventListener("keydown",t=>t.key=="Enter"?e.querySelector("[data-modal]").showModal():null);e.querySelector("#gmail-link").addEventListener("click",t=>i(b,"click","link",t));e.querySelector("#gmail-link").addEventListener("keydown",t=>i(b,"tab","link",t));e.querySelector("[data-close-modal]").addEventListener("click",()=>e.querySelector("[data-modal]").close());e.querySelector("[data-close-modal]").addEventListener("keydown",t=>t.key=="Enter"?e.querySelector("[data-modal]").close():null);e.querySelector("#footer-privacy").addEventListener("click",t=>i(l,"click","page",t));e.querySelector("#footer-privacy").addEventListener("keydown",t=>i(l,"tab","page",t));function I(){d(),document.body.appendChild(e),E()}export{q as a,S as b,x as c,P as d,$ as e,G as f,M as g,L as h,O as i,A as j,H as k,N as l,C as r,I as s,i as t,K as x};
