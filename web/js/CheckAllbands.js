function CheckAllbands(){
    var el=document.getElementById('bandall');
    var ell=document.getElementsByName('band');
    if(el.checked){
        for(var i=0; i<ell.length ;i++){
            ell[i].checked=true;
        }
    }
    else{
        for(var i=0; i<ell.length ;i++){
            ell[i].checked=false;
        }
    }
    showValue_bands();
};