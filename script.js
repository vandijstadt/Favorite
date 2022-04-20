window.onpointerover=function(){
    var element = document.querySelectorAll('p a');
    for(let i =0; i<element.length;i++){
        element[i].onpointerover=function(){
            console.log('Over :',element[i]);
        }
        element[i].onpointerout=function(){
            console.log('Left over :',element[i]);
            element[i].setAttribute('style', 'font-style: none; ');
        }
    }
}
window.onpointerout=function(){
    console.log('Unload');
}   
