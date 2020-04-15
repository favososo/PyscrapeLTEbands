function lcheckr(bands){
    var el=document.getElementsByName('band');
    for(var i=0;i<el.length-1;i++){
        if(bands.indexOf(el[i].value)>=0){
            el[i].checked=true;
        }
        else{
            el[i].checked=false;
        }        
    }
    showValue_bands(); 
}