import"./modulepreload-polyfill-3cfb730f.js";function t(){return"../../index.html"}const o="../blogs/index.html",i="../privacy-policy/index.html",c="../blogs/all-about-me/index.html",d="../blogs/the-computer-science-speedrun/index.html",l="https://discord.gg/QGDPS6wHB8",a="https://www.youtube.com/channel/UCmMcPTUznYtu3zo7X3sVbgA",r="https://twitter.com/KingPr0o7",u="https://mail.google.com/mail/?view=cm&fs=1&to=nathan@ncp.dev&su=&body=",s="https://github.com/KingPr0o7",m=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.classList.add("show"),n.target.classList.contains("page-header")&&n.target.setAttribute("animate",""))})}),w=document.querySelectorAll(".hidden");w.forEach(e=>m.observe(e));document.getElementById("navbar-icon").addEventListener("click",function(){window.location.href=t()});document.getElementById("navbar-icon").addEventListener("keydown",function(e){e.key=="Enter"&&(window.location.href=t())});document.getElementById("navbar-page-id").addEventListener("click",function(){window.location.href=o});document.getElementById("navbar-page-id").addEventListener("keydown",function(e){e.key=="Enter"&&(window.location.href=o)});document.getElementById("exit-button").addEventListener("click",function(){window.location.href=t()});document.getElementById("exit-button").addEventListener("keydown",function(e){e.key=="Enter"&&(window.location.href=t())});document.getElementById("all-about-me").addEventListener("click",function(){window.location.href=c});document.getElementById("all-about-me").addEventListener("keydown",function(e){e.key=="Enter"&&(window.location.href=c)});document.getElementById("the-computer-science-speedrun").addEventListener("click",function(){window.location.href=d});document.getElementById("the-computer-science-speedrun").addEventListener("keydown",function(e){e.key=="Enter"&&(window.location.href=d)});document.getElementById("footer-privacy").addEventListener("click",function(){window.location.href=i});document.getElementById("footer-privacy").addEventListener("keydown",function(e){e.key=="Enter"&&(window.location.href=i)});document.getElementById("contact-discord").addEventListener("click",function(){window.open(l,"_blank")});document.getElementById("contact-discord").addEventListener("keydown",function(e){e.key=="Enter"&&window.open(l,"_blank")});document.getElementById("contact-youtube").addEventListener("click",function(){window.open(a,"_blank")});document.getElementById("contact-youtube").addEventListener("keydown",function(e){e.key=="Enter"&&window.open(a,"_blank")});document.getElementById("contact-twitter").addEventListener("click",function(){window.open(r,"_blank")});document.getElementById("contact-twitter").addEventListener("keydown",function(e){e.key=="Enter"&&window.open(r,"_blank")});document.getElementById("contact-gmail").addEventListener("click",function(){window.open(u,"_blank")});document.getElementById("contact-gmail").addEventListener("keydown",function(e){e.key=="Enter"&&window.open(u,"_blank")});document.getElementById("contact-github").addEventListener("click",function(){window.open(s,"_blank")});document.getElementById("contact-github").addEventListener("keydown",function(e){e.key=="Enter"&&window.open(s,"_blank")});
