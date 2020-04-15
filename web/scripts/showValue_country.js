function showValue_country() {
	let checkboxs_country = document.getElementsByName('ccountry');
	let countrySelected = [];
	for (let i = 0; i < checkboxs_country.length; i++) {
		if (checkboxs_country[i].checked) {
			countrySelected.push(checkboxs_country[i].nextElementSibling.innerText);
		}
	}
	if (countrySelected.length == 0) {
		document.getElementById("click_message1").innerHTML='<li>Please check the country, then you will see the result immediately</li>';
	}
	drawMap(countrySelected);
	let sql3 = "SELECT distinct bands FROM lte_band.band where country in (";
	for (let i = 0, length = countrySelected.length; i < length; i++) {
		sql3 += '\'\\\'';
		sql3 += countrySelected[i];
		sql3 += '\\\'\'';
		if (i == length - 1)
			break;
		sql3 += ",";
	}
	sql3 += ") order by bands asc;";
	//document.getElementById("click_message1").innerHTML=sql3;
	$.ajax({
		url: "PHP/conn_MySQL_checkCountry.php",
		data: "&sql3=" + sql3,
		type: "POST",
		dataType: 'text',

		success: function (message) {
			if (countrySelected.length == 0) {
				document.getElementById("click_message1").innerHTML='<li>Please check the country, then you will see the result immediately</li>';
			}
			else {
				let temp=message.split('<br>');
				document.getElementById("click_message1").innerHTML='';
				for(let i=0;i<temp.length-1;i++){
					document.getElementById("click_message1").innerHTML+="<li name='cband'>band "+temp[i]+"</li>";
				}
				
			}
		},

		error: function (jqXHR, textStatus, errorThrown) {
			document.getElementById("click_message1").innerHTML=errorThrown;
		}
	});
}