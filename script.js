window.onpointerover=function(){
    var element = document.querySelectorAll('p a');
    for(let i =0; i<element.length;i++){
        element[i].onpointerover=function(){
            console.log('Over :',element[i]);
            element[i].setAttribute('style', 'font-size: 50px; background-color: black; border: 3px solid white; padding: 5px; border-radius: 10px;');
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
