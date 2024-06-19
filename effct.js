function initializePage(){const e=document.querySelector("body"),t=document.querySelector(".moon"),n=document.querySelector(".sun");e.classList.add("dark"),n.style.display="none",t.style.display="block"}function handleMoonClick(){const e=document.querySelector("body"),t=document.querySelector(".moon"),n=document.querySelector(".sun");e.classList.remove("dark"),t.style.transform="translateX(50%)",n.style.transform="translateX(0%)",setTimeout((()=>{t.style.display="none",n.style.display="block"}),300)}function handleSunClick(){const e=document.querySelector("body"),t=document.querySelector(".moon"),n=document.querySelector(".sun");e.classList.add("dark"),n.style.transform="translateX(-50%)",t.style.transform="translateX(calc(-50% - 60px))",setTimeout((()=>{n.style.display="none",t.style.display="block"}),300)}function stars(){const e=document.querySelector(".scene");for(let t=0;t<500;t++){const t=document.createElement("i"),n=Math.floor(Math.random()*window.innerWidth),o=Math.floor(Math.random()*window.innerHeight),s=10*Math.random(),c=2*Math.random();t.style.left=`${n}px`,t.style.top=`${o}px`,t.style.width=`${1+c}px`,t.style.height=`${1+c}px`,t.style.animationDuration=`${5+s}s`,t.style.animationDelay=`${s}s`,e.appendChild(t)}}function consoleText(e,t,n){void 0===n&&(n=["#fff"]);var o=!0,s=document.getElementById("console"),c=1,a=1,l=!1,r=document.getElementById(t);r.setAttribute("style","color:"+n[0]),window.setInterval((function(){0===c&&!1===l?(l=!0,r.innerHTML=e[0].substring(0,c),window.setTimeout((function(){var t=n.shift();n.push(t);var o=e.shift();e.push(o),a=1,r.setAttribute("style","color:"+n[0]),c+=a,l=!1}),1e3)):c===e[0].length+1&&!1===l?(l=!0,window.setTimeout((function(){c+=a=-1,l=!1}),1e3)):!1===l&&(r.innerHTML=e[0].substring(0,c),c+=a)}),120),window.setInterval((function(){!0===o?(s.className="console-underscore hidden",o=!1):(s.className="console-underscore",o=!0)}),400)}document.addEventListener("DOMContentLoaded",(()=>{initializePage();const e=document.querySelector(".moon"),t=document.querySelector(".sun");e.addEventListener("click",handleMoonClick),t.addEventListener("click",handleSunClick)})),stars(),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".nav-button"),t=document.querySelectorAll(".tab-pane");e.forEach((n=>{n.addEventListener("click",(function(){const n=this.getAttribute("data-target");t.forEach((e=>{e.classList.remove("active")})),document.getElementById(n).classList.add("active"),e.forEach((e=>{e.classList.remove("active")})),this.classList.add("active")}))}))})),consoleText(["A Web Designer","A problem Solver.","An innovative thinker.","A...cool guy?","Ok......M running out of ideas","uhhh...you can scroll down to see my projects now...","Seriously my projects are really cool,go check them out!","You are uh.... still here?","Ok,this has been fun,but M gonna restart the loop now","see ya!:)"],"text",["#a28089","rebeccapurple","#9bc400","#cc7502"]),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".nav-link"),t=document.querySelectorAll(".projects-container");e.forEach((n=>{n.addEventListener("click",(function(){const n=this.getAttribute("data-category");e.forEach((e=>e.classList.remove("active"))),this.classList.add("active"),t.forEach((e=>{e.classList.contains(n)?e.classList.add("active"):e.classList.remove("active")}))}))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".mob"),t=document.querySelector(".collapse");e.addEventListener("click",(function(){t.classList.toggle("show")}))}));