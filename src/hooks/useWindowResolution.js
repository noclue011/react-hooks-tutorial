import { useEffect, useState } from "react";

function UseWindowResolution() {
    //hook to set the width and height based on the size of the page
    const [width, setWidth] = useState(window.innerWidth);
    const[height, setHeight] = useState(window.innerHeight);
    //useEffect hook to handle when the page is resized
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [width, height]);
    
    //returns the width & height values to display on the page
    return {
      width,
      height
    };
  }

  export {UseWindowResolution};