function getoperator(incountry) {
  var temp;
  sql4 = 'SELECT distinct operator from lte_band.band where country =' + '\'\\\'' + incountry + '\\\'\' order by operator asc;';
  $.ajax({
    async: false, //we must modify this, or return will fail
    url: "PHP/conn_MySQL_operatorList.php",
    data: "&sql4=" + sql4,
    type: "POST",
    dataType: 'text',

    success: function (message) {
      temp = message;
      //var temp=message.split('<br>');
      //document.getElementById("testbox").innerHTML = temp;
    },

    error: function (jqXHR, textStatus, errorThrown) {
      //document.getElementById("testbox").innerHTML = errorThrown;
    }
  });
  return temp;
};
$(function () {
    var sql1 = "SELECT distinct country from lte_band.band order by country asc;";
    var separator = '<br>';
    var Bcountry = [];
    var Boperator = [];
    $.ajax({
        url: "PHP/conn_MySQL_countryList.php",
        data: "&sql1=" + sql1,
        type: "POST",
        dataType: 'text',
        success: function (message) {
            //document.getElementById("countree").innerHTML = message;
            Bcountry = message.split(separator);
            var saving = '';
            for (var i = 0; i < Bcountry.length - 1; i++) {
                //data.country.push({ name: Bcountry[i], children: [] });
                Boperator = getoperator(Bcountry[i]).split(separator);
                saving = saving + '{ name:\'' + Bcountry[i] + '\', children: [';
                for (var j = 0; j < Boperator.length - 1; j++) {
                    //data.country[i].children.push({ name: Boperator[j] });
                    saving = saving + '{ name: \'' + Boperator[j] + '\'}';
                    if (j == Boperator.length - 2) { break; }
                    saving += ',';
                }
                saving += ']}';
                if (i == Bcountry.length - 2) { break; }
                saving += ',';
            }
            document.getElementById("countree").innerHTML = saving;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            document.getElementById("countree").innerHTML = errorThrown;
        }
    });
})