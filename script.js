//your JS code here. If required.
const h1 = document.getElementsByTagName("h1")[0];
const btn = document.getElementById("enterBtn");

btn.addEventListener("click", () => {
	h1.innerText = "Entered Metaverse"
})