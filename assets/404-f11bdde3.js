import"./modulepreload-polyfill-3cfb730f.js";var n=document.getElementById("cursor");const o="0123456789",u=document.getElementById("error-code");l("error-name","PAGE NOT FOUND!",40,0,!0);function f(){return"index.html"}const h="https://github.com/KingPr0o7/KingPr0o7.github.io#404-filepage-not-found-online-only",s="https://www.githubstatus.com/",w="https://twitter.com/githubstatus?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";document.getElementById("readme-link").addEventListener("click",function(){window.open(h,"_blank")});document.getElementById("readme-link").addEventListener("keydown",function(e){e.key=="Enter"&&window.open(h,"_blank")});document.getElementById("error-link").addEventListener("click",function(){window.location.href=f()});document.getElementById("error-link").addEventListener("keydown",function(e){e.key=="Enter"&&(window.location.href=f())});document.getElementById("github-website").addEventListener("click",function(){window.open(s,"_blank")});document.getElementById("github-website").addEventListener("keydown",function(e){e.key=="Enter"&&window.open(s,"_blank")});document.getElementById("github-twitter").addEventListener("click",function(){window.open(w,"_blank")});document.getElementById("github-twitter").addEventListener("keydown",function(e){e.key=="Enter"&&window.open(w,"_blank")});function l(e,E,a,t,c){let d=document.getElementById(`${e}`),i=`${E}`;if(t<i.length)c==!0?(d.removeChild(n),d.innerHTML+=i.charAt(t),t++,d.appendChild(n)):(d.innerHTML+=i.charAt(t),t++),setTimeout(l,a,`${e}`,i,a,t,c);else if(i=="PAGE NOT FOUND!"){var m=n.cloneNode();n.remove(),document.getElementById("error-link").append(m),n=m,l("error-link","RETURN HOME!",40,0,!0)}else n.remove()}var r=0,g=setInterval(function(){var e=u.textContent;r<=75?e=`${o[Math.floor(Math.random()*10)]}${o[Math.floor(Math.random()*10)]}${o[Math.floor(Math.random()*10)]}`:r<=150?e=`4${o[Math.floor(Math.random()*10)]}${o[Math.floor(Math.random()*10)]}`:r<=225?e=`40${o[Math.floor(Math.random()*10)]}`:r<=300&&(e="404"),u.textContent=e,r>=300&&clearInterval(g),r+=1},20);
