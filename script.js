/* box_toplft = document.getElementById("box_toplft");
box_toprgt = document.getElementById("box_toprgt");
box_center = document.getElementById("box_center");
box_btmlft = document.getElementById("box_btmlft");
box_btmrgt = document.getElementById("box_btmrgt");
main_box = document.getElementById("mainbox");

const animate_options={
    duration:600,
    easing:'easeInOut'
}
animateCSSGrid.wrapGrid(main_box,animate_options);

console.log(box_btmlft, box_btmrgt, box_center, box_toplft, box_toprgt);
box_toplft.addEventListener("mouseenter", () => {
    let x = getComputedStyle(main_box);
    console.log("hello");
    let cmp_style = "grid-template-areas";
    let val =
    '"box1 box1 box1 box1 box2" "box1 box1 box1 box1 box2" "box4 box4 box3 box3 box2" "box4 box4 box5 box5 box5" "box4 box4 box5 box5 box5"';
    main_box.style.gridTemplateAreas = val;
    console.log(x.gridTemplateAreas);
    console.log(main_box);
    console.log("done");
});
*/


box_toplft = document.getElementById("box_toplft");
box_toprgt = document.getElementById("box_toprgt");
box_center = document.getElementById("box_center");
box_btmlft = document.getElementById("box_btmlft");
box_btmrgt = document.getElementById("box_btmrgt");
logo_img = document.getElementById("logo_img");
inside_logotxt = document.getElementById("inside_logotxt");
main_box=document.getElementById("mainbox");



main_box.addEventListener("mouseout",()=>{
    box_toplft.style.cssText="width: 60%;height: 40%;";
    box_toprgt.style.cssText="width: 40%;height: 60%;";
    box_btmlft.style.cssText="width: 40%;height: 60%;";
    box_btmrgt.style.cssText="width: 60%;height: 40%;";
    box_center.style.cssText="width:20%;height:20%;top:40%;left:40%";
    logo_img.style.cssText="opacity:100%";
    inside_logotxt.style.cssText="opacity:0%";
})

box_toplft.addEventListener("mouseenter",()=>{
    box_toplft.style.cssText="width: 70%;height: 50%;";
    box_toprgt.style.cssText="width: 30%;height: 70%;";
    box_btmlft.style.cssText="width: 50%;height: 50%;";
    box_btmrgt.style.cssText="width: 50%;height: 30%;";
    box_center.style.cssText="width:20%;height:20%;top:50%;left:50%";
})
box_toprgt.addEventListener("mouseenter",()=>{
    box_toplft.style.cssText="width: 44%;height: 52%;";
    box_toprgt.style.cssText="width: 56%;height: 72%;";
    box_btmlft.style.cssText="width: 24%;height: 48%;";
    box_btmrgt.style.cssText="width: 76%;height: 28%;";
    box_center.style.cssText="width:20%;height:20%;top:52%;left:24%";
})
box_btmlft.addEventListener("mouseenter",()=>{
    box_toplft.style.cssText="width: 75%;height: 40%;";
    box_toprgt.style.cssText="width: 25%;height: 60%;";
    box_btmlft.style.cssText="width: 55%;height: 60%;";
    box_btmrgt.style.cssText="width: 45%;height: 40%;";
    box_center.style.cssText="width:20%;height:20%;top:40%;left:55%";
})
box_btmrgt.addEventListener("mouseenter",()=>{
    box_toplft.style.cssText="width: 56%;height: 24%;";
    box_toprgt.style.cssText="width: 44%;height: 44%;";
    box_btmlft.style.cssText="width: 36%;height: 76%;";
    box_btmrgt.style.cssText="width: 64%;height: 56%;";
    box_center.style.cssText="width:20%;height:20%;top:24%;left:36%";
})
box_center.addEventListener("mouseenter",()=>{
    box_center.style.cssText="width:40%;height:40%;top:32%;left:28%;";
    box_toplft.style.cssText="width: 28%;height: 72%;";
    box_toprgt.style.cssText="width: 72%;height: 32%;";
    box_btmlft.style.cssText="width: 68%;height: 28%;";
    box_btmrgt.style.cssText="width: 32%;height: 68%;";
    logo_img.style.cssText="opacity:0%";
    inside_logotxt.style.cssText="opacity:20%";
})

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    //ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
