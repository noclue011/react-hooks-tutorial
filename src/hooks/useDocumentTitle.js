import { useEffect } from "react";

//useEffect hook to set the title of the page
function UseDocumentTitle(title) {
    useEffect(() => {
      document.title = title;
    });
  }

  export {UseDocumentTitle};