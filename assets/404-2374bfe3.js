import{t,r as k,h,g,x as E}from"./config-12d2ef65.js";var o=document.getElementById("cursor");const r="0123456789",u=document.getElementById("error-code");i("error-name","PAGE NOT FOUND!",40,0,!0);document.getElementById("readme-link").addEventListener("click",e=>t(k,"click","link",e));document.getElementById("readme-link").addEventListener("keydown",e=>t(k,"tab","link",e));document.getElementById("error-link").addEventListener("click",e=>t(h,"click","page",e));document.getElementById("error-link").addEventListener("keydown",e=>t(h,"tab","page",e));document.getElementById("github-website").addEventListener("click",e=>t(g,"click","link",e));document.getElementById("github-website").addEventListener("keydown",e=>t(g,"tab","link",e));document.getElementById("github-x").addEventListener("click",e=>t(E,"click","link",e));document.getElementById("github-x").addEventListener("keydown",e=>t(E,"tab","link",e));function i(e,v,m,n,c){let d=document.getElementById(`${e}`),a=`${v}`;if(n<a.length)c==!0?(d.removeChild(o),d.innerHTML+=a.charAt(n),n++,d.appendChild(o)):(d.innerHTML+=a.charAt(n),n++),setTimeout(i,m,`${e}`,a,m,n,c);else if(a=="PAGE NOT FOUND!"){var s=o.cloneNode();o.remove(),document.getElementById("error-link").append(s),o=s,i("error-link","RETURN HOME!",40,0,!0)}else o.remove()}var l=0,f=setInterval(function(){var e=u.textContent;l<=75?e=`${r[Math.floor(Math.random()*10)]}${r[Math.floor(Math.random()*10)]}${r[Math.floor(Math.random()*10)]}`:l<=150?e=`4${r[Math.floor(Math.random()*10)]}${r[Math.floor(Math.random()*10)]}`:l<=225?e=`40${r[Math.floor(Math.random()*10)]}`:l<=300&&(e="404"),u.textContent=e,l>=300&&clearInterval(f),l+=1},20);
