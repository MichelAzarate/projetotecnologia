 // pré caregamento
 var imgs=[];
 var slider;
 var imgAtual;
 var maximg;
 var tmp;
 function preCarregamento(){
     var s=1;
     for(var i=0 ; i<4; i++){
         imgs[i]= new Image();
         imgs[i].src="imagens/s"+s+".jpg";
         s++;
     }
 }
 function carregarimg(img){
     slider.style.backgroundImage="url('"+imgs[img].src+"')";
 }

 function inicia(){
     preCarregamento();
     imgAtual=0;
     maximg=imgs.length-1;
     slider=document.getElementById("dvslider");
     carregarimg(imgAtual);
     tmp=setInterval(troca,3000);
 }
 function troca(){
     imgAtual++;
     if(imgAtual>maximg){
         imgAtual=0;
     }
     carregarimg(imgAtual);
     
 }
 window.addEventListener("load",inicia);