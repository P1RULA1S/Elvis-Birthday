function addComment(){

const input =
document.getElementById("messageInput");

const comments =
document.getElementById("comments");

if(input.value.trim() === ""){
return;
}

const div =
document.createElement("div");

div.classList.add("comment");

div.textContent =
"💖 " + input.value;

comments.prepend(div);

input.value = "";

}

document.getElementById("copyBtn").addEventListener("click", async () => {

const cuenta =
document.getElementById("accountNumber").textContent.trim();

const btn =
document.getElementById("copyBtn");

try {
await navigator.clipboard.writeText(cuenta);
btn.textContent = "✅ Cuenta Copiada";
} catch (error) {
const fallback = document.createElement("textarea");
fallback.value = cuenta;
fallback.setAttribute("readonly", "");
fallback.style.position = "fixed";
fallback.style.opacity = "0";
document.body.appendChild(fallback);
fallback.select();
const copied = document.execCommand("copy");
fallback.remove();
btn.textContent = copied ? "✅ Cuenta Copiada" : "⚠️ Copia manual";
}

setTimeout(()=>{

btn.textContent =
"🎁 Copiar Cuenta";

},2000);

});

setInterval(()=>{

const star =
document.createElement("div");

star.innerHTML = "✨";

star.style.position = "fixed";
star.style.left = Math.random()*100+"vw";
star.style.top = "-30px";
star.style.fontSize = (15 + Math.random()*25)+"px";
star.style.pointerEvents = "none";

document.body.appendChild(star);

let pos = -30;

const anim = setInterval(()=>{

pos += 4;

star.style.top = pos + "px";

if(pos > window.innerHeight){

clearInterval(anim);
star.remove();

}

},20);

},500);
