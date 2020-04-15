function showValue_bands() {
	var checkboxs_band = document.getElementsByName('band');
	var bandSelected = [];
	for (var i = 0, length = checkboxs_band.length; i < length; i++) {
		if (checkboxs_band[i].checked) {
			bandSelected.push(checkboxs_band[i].value);
		}
	}
	if (bandSelected.length == 0) {
		document.getElementById("click_message").innerHTML = '<li>Please check the band to get the result. If you want to show the map, click ok.</li>';
		return;
	}

	var sql = "SELECT distinct country FROM lte_band.band where bands in (";

	for (var i = 0, length = bandSelected.length; i < length; i++) {
		sql += bandSelected[i];
		if (i == length - 1)
			break;
		sql += ",";
	}
	sql += ") order by country asc;";
	$.ajax({
		url: "PHP/conn_MySQL_checkBand.php",
		data: "&sql=" + sql,
		type: "POST",
		dataType: 'text',

		success: function (message) {
			if (message == "MySQL query error") {
				document.getElementById("click_message").innerHTML = '<li>Please check the band to get the result. If you want to show the map, click ok.</li>';
				return;
			}
			var content=message.split('<br>');
			document.getElementById("click_message").innerHTML ='';
			for(var i=0;i<content.length-1;i++){
				document.getElementById("click_message").innerHTML += "<li>"+content[i]+"</li>";
			}
			//document.getElementById("click_message").innerHTML = message;
			drawMap(content);
		},

		error: function (jqXHR, textStatus, errorThrown) {
			document.getElementById("click_message").innerHTML = errorThrown;
		}
	});
	//document.write("CMD is " + sql);
	//Redraw the map with the selected radio button language value and the selected time (if time exists)
	//document.getElementById("editor").innerHTML="choose "+bandSelected;
}