var modal= document.getElementById('MyModal');
var span = document.getElementsByName("close")[0];
var images=document.getElementById("img");
var modalImg=document.getElementById("img01");

span.onclick= function()
{
    
modal.style.display = "none";
}


var i ;
for (i = 0; i <images.length; i++)
    {
     images[i].onclick=function()
     {
         modal.style.display="block";
         modalImg.src =this.src;
         modalImg.alt=this.alt;
         
     }
     }