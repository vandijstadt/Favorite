window.onpointerover=function(){
    var element = document.querySelectorAll('p a');
    for(let i =0; i<element.length;i++){
        element[i].onpointerover=function(){
            console.log('Over :',element[i]);
            element[i].setAttribute('style', 'color: black; background-color: white; border: 3px solid black; padding: 5px; border-radius: 10px;');
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
