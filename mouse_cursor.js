const cursor = document.getElementById("cursor_circle");
window.addEventListener("mousemove",(e)=>{
    let mouse_x = e.clientX;
    let mouse_y = e.clientY;
    cursor.style.top = mouse_y+'px';
    cursor.style.left = mouse_x+'px';
})
document.addEventListener("mouseleave",()=>{
    cursor.style.scale = '0';
})
document.addEventListener("mouseenter",()=>{
    cursor.style.scale = '1';
})