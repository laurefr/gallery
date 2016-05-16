var modal= document.getElementById('MyModal');
var img=document.getElementById('MyImg');
var modalImg=document.getElementById("img_01");
var captionText=document.getElementById("caption");

img.onclick= function()
{
    modal.style.display = "block";
    modalImg.src=this.src;
    modalImg.alt=this.alt;
    captionText.innerHTML=this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function ()
{
    modal.style.display = "none";
}
function hover(element) {
    element.setAttribute('src', "Picture/paris.jpg");
}
function unhover(element) {
    element.setAttribute('src', "Picture/london.jpg");
}