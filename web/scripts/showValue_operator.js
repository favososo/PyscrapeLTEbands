function showValue_operator() {
	var checkboxs_operator = document.getElementsByName('coperator');
	var operatorSelected = [];
    var countrylist = [];
	for (var i = 0; i < checkboxs_operator.length; i++) {
		if (checkboxs_operator[i].checked) {
			operatorSelected.push(checkboxs_operator[i].nextElementSibling.innerText);
            countrylist.push(checkboxs_operator[i].parentNode.parentNode.parentElement.firstChild.nextElementSibling.innerText)
		}
	}
	if (operatorSelected.length == 0) {
		document.getElementById("click_message1").innerHTML='<li>Please check the country, then you will see the result immediately</li>';
	}
	var sql5 = "SELECT distinct bands FROM lte_band.band where operator in (";
	for (var i = 0, length = operatorSelected.length; i < length; i++) {
		sql5 += '\'\\\'';
		sql5 += operatorSelected[i];
		sql5 += '\\\'\'';
		if (i == length - 1)
			break;
		sql5 += ",";
	}
    sql5 += ") AND country in (";
    for(var i=0;i<countrylist.length;i++){
        sql5 += '\'\\\'';
        sql5 += countrylist[i];
        sql5 += '\\\'\'';
        if (i == length - 1)
			break;
        sql5 += ",";
    }
	sql5 += ") order by bands asc;";
    sql5=sql5.replace(/&/,"%26");
	//document.getElementById("click_message1").innerHTML=sql5;
	$.ajax({
		url: "PHP/conn_MySQL_checkOperator.php",
		data: "&sql5=" + sql5,
		type: "POST",
		dataType: 'text',

		success: function (message) {
			if (operatorSelected.length == 0) {
				document.getElementById("click_message1").innerHTML='<li>Please check the country, then you will see the result immediately</li>';
			}
			else {
				var temp=message.split('<br>');
				document.getElementById("click_message1").innerHTML='';
				for(var i=0;i<temp.length-1;i++){
					document.getElementById("click_message1").innerHTML+="<li name='cband'>band "+temp[i]+"</li>";
				}
				
			}
			lcheckr(temp);
			console.log(temp);
		},

		error: function (jqXHR, textStatus, errorThrown) {
			document.getElementById("click_message1").innerHTML=errorThrown;
		}
	});
	//document.write("CMD is " + sql);
	//Redraw the map with the selected radio button language value and the selected time (if time exists)
	//document.getElementById("editor").innerHTML="choose "+bandSelected;
}