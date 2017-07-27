google.charts.load('current', {'packages': ['geochart']});
google.charts.setOnLoadCallback(drawMap);
function drawMap(message) {
	var countrylist = [];
	countrylist.push(['Country', 'Country']);
	if(message != null){
		for(var i=0;i<message.length;i++){
			countrylist.push([message[i],message[i]]);
		}
	} 
	var data = google.visualization.arrayToDataTable(countrylist);
	var options = {
		'legend' : 'none'
	};
	var container = document.getElementById('map_canvas');
	var chart = new google.visualization.GeoChart(container);
	chart.draw(data, options);
};