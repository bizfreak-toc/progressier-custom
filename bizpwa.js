function setConfig(config, basePath, scope, name, shortName, changeIcon) {
  config.startUrl = basePath + scope;
  if (changeIcon) {
    config.icon512 = "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FiDWpnFeonBLfiQN.png?alt=media&token=7b7d4e52-4aac-46bc-bbe9-ece8bc6738f7";
  }
  config.scope = basePath + scope;
  config.name = name;
  config.shortName = shortName;
}

function preinitializeProgressier() {
  let pathname = window.location.pathname;
  let config = {};
  let basePath = pathname.includes("version-test") ? "version-test/" : "";
  let name = basePath ? "[DEV] bizpwa" : "bizpwa";
  let shortName = basePath ? "[DEV] bizpwa" : "bizpwa";
  let changeIcon = pathname.includes("manage");

  if (pathname.includes("manage/agent")) {
    setConfig(config, basePath, "manage/agent", name, shortName, changeIcon);
  } else if (pathname.includes("manage/admin")) {
    setConfig(config, basePath, "manage/admin", name, shortName, changeIcon);
  } else {
    setConfig(config, basePath, "", name, shortName, changeIcon);
  }

  window.progressierAppRuntimeSettings = config;

  let progressierScript = document.createElement("script");
  progressierScript.setAttribute("src", "https://progressier.app/tTD4oTBMz4ZuQAhT7HeQ/script.js");
  document.querySelector("head").appendChild(progressierScript);
}

preinitializeProgressier();
