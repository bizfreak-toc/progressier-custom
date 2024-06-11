function preinitializeProgressier(){
    let pathname = window.location.pathname;
    let config = {};
    if (pathname.includes("/version-test")){
      config.name = "[DIV] EV充電時間シフト実証";
      config.shortName = "[DIV] EV";
      config.startUrl = "version-test";
    }
    window.progressierAppRuntimeSettings = config;
    let progressierScript = document.createElement("script");
    progressierScript.setAttribute("src", "https://progressier.app/pqKMpPbgMdF1084AOSWJ/script.js");
    document.querySelector("head").appendChild(progressierScript);
  }
  preinitializeProgressier();
  