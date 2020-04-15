function CheckAllcountries(){
    var el=document.getElementById('countryall');
    var ell=document.getElementsByName('ccountry');
    var elll=document.getElementsByName('coperator');
    if(el.checked){
        for(var i=0; i<ell.length ;i++){
            ell[i].checked=true;
            elll[i].checked=true;
        }
    }
    else{
        for(var i=0; i<ell.length ;i++){
            ell[i].checked=false;
            elll[i].checked=false;
        }
    }
    showValue_country();
}