gsap.registerPlugin(ScrollTrigger);
/* 
gsap.to(".reveal-type",{
  opacity:1,
  stagger:1,
  scrollTrigger:{
    trigger:'#para1_wrap',
    markers:true,
    scrub:false,
    start:'top center',
    end:'bottom center',
    pin:true,
    toggleActions:'play play reverse reverse'
  }
}) */

/* --- Split the text, Client Title --- */
function setupSplits() {
  const targets = gsap.utils.toArray(".para");
  targets.forEach((target) => {
    //let SplitClient = new SplitText(target, { type: "words,chars" });
    let SplitClient = new SplitType(target, { types: 'words, chars' });
    let chars = SplitClient.chars; //an array of all the divs that wrap each character
    gsap.from(chars, {
      duration: 0.8,
      opacity: 0.2,
      y: 10,
      ease: "none",
      stagger: 0.2,
      scrollTrigger: {
        trigger: target,
        //markers: true,
        start: "top top",
        end: "bottom 80%",
        scrub: true,
        //pin:true,
      }
    }); 
  });
  const target2 = gsap.utils.toArray(".para_l");
  target2.forEach((target) => {
    //let SplitClient = new SplitText(target, { type: "words,chars" });
    let SplitClient2 = new SplitType(target, { types: 'words, chars' });
    let chars2 = SplitClient2.chars; //an array of all the divs that wrap each character
    gsap.from(chars2, {
      duration: 0.8,
      opacity: 0.2,
      y: 10,
      ease: "none",
      stagger: 0.2,
      scrollTrigger: {
        trigger: target,
        //markers: true,
        start: "top top",
        end: "80% 80%",
        scrub: true,
        //pin:true,
      }
    }); 
   /*  gsap.from('#vision_wrap', {
      duration: 0.8,
      y: 0,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: target,
        markers: true,
        start: "top bottom",
        end: "bottom 80%",
        scrub: true,
        pin:true,
      }
    });  */
  });
}

setupSplits();

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  //ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});