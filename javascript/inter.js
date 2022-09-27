 // pré caregamento
 var imgs=[];
 var slider;
 var imgAtual;
 var maximg;
 var tmp;
 var tempotroca
 var vtempo;
 var vload;
 var vbarra
 function preCarregamento(){
     let s=1;
     for(var i=0 ; i<4; i++){
         imgs[i]= new Image();
         imgs[i].src="imagens/s"+s+".jpg";
         imgs[i].style.width="s"
         s++;
     }
 }
 function inicia(){
     preCarregamento();
     imgAtual=0;
     maximg=imgs.length-1;
     slider=document.getElementById("dvslider");
     vbarra = document.getElementById("dvbarra");
     carregarimg(imgAtual);
     tempotroca=0
     animac();
 }
 function carregarimg(img){
    slider.style.backgroundImage="url('"+imgs[img].src+"')";
    slider.style.backgroundSize="cover";
    slider.style.backgroundRepeat="no-repeat";
    // slider.style.backgroundAttachment="fixed";
    slider.style.backgroundPosittion="center";
}
 function troca(dir){
    tempotroca=0;
    imgAtual+=dir;
    if(imgAtual>maximg){
         imgAtual=0;
     }else if(imgAtual<0){
        imgAtual=maximg;
    }
     carregarimg(imgAtual);   
 }
 function animac(){
    tempotroca++
    if(tempotroca>=300){
        tempotroca=0;
        troca(1);
    }
    vtempo=tempotroca/3;
    vbarra.style.width=vtempo+"%";
    window.requestAnimationFrame(animac);
 }
 window.addEventListener("load",inicia);