let pathname = window.location.pathname;
let startUrl = "";
if (pathname.includes("/manage/agent")){
  startUrl = "manage/agent";
}
else if (pathname.includes("/manage/admin")){
  startUrl = "manage/admin";
}
window.progressierAppRuntimeSettings = {
  startUrl: startUrl,
}

let progressierScript = document.createElement("script");
progressierScript.setAttribute("src", "https://progressier.app/tTD4oTBMz4ZuQAhT7HeQ/script.js");
document.querySelector("head").appendChild(progressierScript);
