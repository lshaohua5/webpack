import TEMPLATE from "./template";
import pushplay from "@lib/pushplay.html"
console.log(pushplay)  
// require('@lib/pushplay.html')
let VideoPopup = {
  init() {
    let body = document.getElementsByTagName("body");
    if (!document.getElementById("pushplay")) {
      let iframe = document.createElement("iframe"),
        first = document.body.firstChild;
      iframe.setAttribute("id", "pushplay");
      iframe.setAttribute("style", "display: none");
      iframe.setAttribute("src", pushplay);
      document.body.insertBefore(iframe, first);
    }
    let videopopup = document.createElement("div");
    videopopup.innerHTML = TEMPLATE;
    document.body.appendChild(videopopup);
  }
};

export default VideoPopup;
