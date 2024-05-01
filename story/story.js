// mouse cursor \

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    //ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  let classes = document.getElementsByClassName("features_pages");
  for (let index = 0; index < classes.length; index++) {
      const element = classes[index];
      element.addEventListener("click",(e)=>{
          const feature = e.target;
          let click_switch = e.target.attributes.switch.value;
          //console.log(click_switch);
          if (click_switch==0) {
              feature.setAttribute("switch",1);
              feature.children[1].style.cssText="color:black;bottom:calc(70vh - 6vw - 4px);background: linear-gradient(300deg,cyan,white);background-size: 120% 120%;animation: gradient-animation 2s ease infinite";
              feature.children[2].style.cssText="height:calc(100% - 6vw)";
              
          } else {
              feature.setAttribute("switch",0);
              feature.children[1].style.cssText="background-color:white;bottom:0;";
              feature.children[2].style.cssText="height:0";
              
          }
      })
      element.addEventListener("mouseenter",(e)=>{
          //console.log("in");
          const feature = e.target;
          feature.children[0].style.cssText="scale:1.2";
          //feature.children[1].style.cssText='background:linear-gradient(300deg,white,cyan);';
        })
        element.addEventListener("mouseleave",(e)=>{
            //console.log("out");
            const feature = e.target;
            feature.children[0].style.cssText="scale:1";
            //feature.children[1].style.cssText='background:linear-gradient(300deg,white,white);';
      })
    }