var modal= document.getElementById('MyModal');
var span = document.getElementsByClassName("close")[0];
var images=document.getElementsByTagName("img");    //links to all images
var modalImg=document.getElementById("img01");   //links to modal

span.onclick= function()
{
    modal.style.display = "none";
}


var i ;
for (i = 0; i < images.length; i++)
    {
     images[i].onclick=function()
     {
         modal.style.display="block";
         modalImg.src =this.src;
         modalImg.alt=this.alt;
         
     }
     }