function setConfig(config, basePath, scope, name, shortName) {
  config.startUrl = basePath + scope;
  config.icon512 = "https://pwa.xyz/v0/b/pwaa-8d87e.appspot.com/o/eWYX0PrgnbmJTIRgmYiH%2FiDWpnFeonBLfiQN.png?alt=media&token=7b7d4e52-4aac-46bc-bbe9-ece8bc6738f7";
  config.scope = basePath + scope;
  config.name = name;
  config.shortName = shortName;
}

function preinitializeProgressier() {
  let pathname = window.location.pathname;
  let config = {};
  let basePath = pathname.includes("version-test") ? "version-test/" : "";
  let namePrefix = basePath ? "[DEV] bizpwa" : "bizpwa";
  let shortNamePrefix = basePath ? "[DEV] bizpwa" : "bizpwa";

  if (pathname.includes("manage/agent")) {
    setConfig(config, basePath, "manage/agent", namePrefix + " Agent", shortNamePrefix + " Agent");
  } else if (pathname.includes("manage/admin")) {
    setConfig(config, basePath, "manage/admin", namePrefix + " Admin", shortNamePrefix + " Admin");
  }

  window.progressierAppRuntimeSettings = config;

  let progressierScript = document.createElement("script");
  progressierScript.setAttribute("src", "https://progressier.app/tTD4oTBMz4ZuQAhT7HeQ/script.js");
  document.querySelector("head").appendChild(progressierScript);
}

preinitializeProgressier();