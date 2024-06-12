function preinitializeProgressier(){
  let pathname = window.location.pathname;
  let config = {};
  if (pathname.includes("/manage/agent") || pathname.includes("/manage/admin")){
    config.startUrl = window.location.pathname.slice(1, window.location.pathname.length);
    config.icon512 = "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FiDWpnFeonBLfiQN.png?alt=media&token=7b7d4e52-4aac-46bc-bbe9-ece8bc6738f7";
    config.scope = "manage/agent"
  } else if (pathname.includes("/manage/admin")) {
    config.startUrl = window.location.pathname.slice(1, window.location.pathname.length);
    config.icon512 = "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FiDWpnFeonBLfiQN.png?alt=media&token=7b7d4e52-4aac-46bc-bbe9-ece8bc6738f7";
    config.scope = "manage/admin"
  }
  if (pathname.includes("/version-test")){
    config.name = "[DIV] bizpwa";
    config.shortName = "[DIV] bizpwa";
    config.startUrl = window.location.pathname.slice(1, window.location.pathname.length);
  }
  window.progressierAppRuntimeSettings = config;
  let progressierScript = document.createElement("script");
  progressierScript.setAttribute("src", "https://progressier.app/tTD4oTBMz4ZuQAhT7HeQ/script.js");
  document.querySelector("head").appendChild(progressierScript);
}
preinitializeProgressier();
