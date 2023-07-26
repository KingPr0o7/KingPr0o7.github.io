(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();function r(){document.documentElement.style.setProperty("--vh",`${window.innerHeight/100}px`),addEventListener("load",r),addEventListener("resize",r),addEventListener("orientationchange",r)}function v(){const t=new IntersectionObserver(a=>{a.forEach(c=>{c.isIntersecting&&(c.target.classList.add("show"),c.target.classList.contains("page-header")&&c.target.setAttribute("animate",""))})});document.querySelectorAll(".hidden").forEach(a=>t.observe(a))}function i(t,s,a,c){s=="tab"?a=="link"?c.key=="Enter"&&window.open(t,"_blank"):a=="page"&&c.key=="Enter"&&(window.location.href=t):a=="link"?window.open(t,"_blank"):window.location.href=t}const b="../../",f="../../blogs/",y="../../blogs/all-about-me/",k="../../blogs/the-computer-science-speedrun/",l="../../privacy-policy/",_="https://github.com/KingPr0o7/Combo-Menu",g="https://discord.gg/QGDPS6wHB8",u="https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA",m="https://x.com/KingPr0o7",p="https://mail.google.com/mail/?view=cm&fs=1&to=nathan@ncp.dev&su=&body=",h="https://github.com/KingPr0o7",w="https://github.com/KingPr0o7/KingPr0o7.github.io#404-filepage-not-found-online-only",E="https://www.githubstatus.com/",L="https://twitter.com/githubstatus?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",S="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",q="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection",P="https://github.com/KingPr0o7/KingPr0o7.github.io",x="https://code.org/",C="https://palletsprojects.com/p/flask/",M="https://github.com/KingPr0o7/Combo-Menu/commits/main";var e=document.createElement("div");e.innerHTML=`
    <dialog data-modal id="footer-modal">
    <div id='footer-modal-container'>
        <div id="footer-modal-content">
            <p>📧 <span class='inline'>nathan@ncp.dev</span></p>
            <div id="gmail-link" tabindex="0">
                <img id="link-image" src="/images/icons/link.svg" alt="Redirect Icon" />
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
                    <img id="footer-icon" src="/images/branding/ncp-logo.png" alt="NCP Icon" title="NCP Logo">
                </div>			
                <div id="footer-socials">
                    <div id="contact-container">
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-github" src="/images/icons/logos/github.svg" alt="Contact Method GitHub" title="GitHub" tabindex="0">
                        </div>	
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-x" src="/images/icons/logos/x.svg" alt="Contact Method X" title="X" tabindex="0">
                        </div>
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-discord" src="/images/icons/logos/discord.svg" alt="Contact Method Discord" title="Discord" tabindex="0">
                        </div>
                        <div class="contact-image-container">
                            <img class="contact-image" id="contact-youtube" src="/images/icons/logos/youtube.svg" alt="Contact Method YouTube" title="YouTube" tabindex="0">
                        </div>
                        <div class="contact-image-container" data-open-modal>
                            <img class="contact-image" id="contact-gmail" src="/images/icons/logos/gmail.svg" alt="Contact Method Gmail" title="Gmail" tabindex="0">
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
`;e.querySelector("#contact-github").addEventListener("click",t=>i(h,"click","link",t));e.querySelector("#contact-github").addEventListener("keydown",t=>i(h,"tab","link",t));e.querySelector("#contact-x").addEventListener("click",t=>i(m,"click","link",t));e.querySelector("#contact-x").addEventListener("keydown",t=>i(m,"tab","link",t));e.querySelector("#contact-discord").addEventListener("click",t=>i(g,"click","link",t));e.querySelector("#contact-discord").addEventListener("keydown",t=>i(g,"tab","link",t));e.querySelector("#contact-youtube").addEventListener("click",t=>i(u,"click","link",t));e.querySelector("#contact-youtube").addEventListener("keydown",t=>i(u,"tab","link",t));e.querySelector("#contact-gmail").addEventListener("click",()=>e.querySelector("[data-modal]").showModal());e.querySelector("#contact-gmail").addEventListener("keydown",t=>t.key=="Enter"?e.querySelector("[data-modal]").showModal():null);e.querySelector("#gmail-link").addEventListener("click",t=>i(p,"click","link",t));e.querySelector("#gmail-link").addEventListener("keydown",t=>i(p,"tab","link",t));e.querySelector("[data-close-modal]").addEventListener("click",()=>e.querySelector("[data-modal]").close());e.querySelector("[data-close-modal]").addEventListener("keydown",t=>t.key=="Enter"?e.querySelector("[data-modal]").close():null);e.querySelector("#footer-privacy").addEventListener("click",t=>i(l,"click","page",t));e.querySelector("#footer-privacy").addEventListener("keydown",t=>i(l,"tab","page",t));function K(){r(),document.body.appendChild(e),v()}export{y as a,k as b,f as c,_ as d,S as e,q as f,E as g,b as h,P as i,x as j,C as k,M as l,w as r,K as s,i as t,L as x};
