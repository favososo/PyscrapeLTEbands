/*var sql1 = "SELECT distinct country from lte_bands.bands order by country asc;";
var separator = '<br>';
var Bcountry = [];
var Boperator = [];
$.ajax({
  url: "PHP/conn_MySQL2.php",
  data: "&sql1=" + sql1,
  type: "POST",
  dataType: 'text',
  success: function (message) {
    Bcountry = message.split(separator);
  },

  error: function (jqXHR, textStatus, errorThrown) {
    document.getElementById("countree").innerHTML = errorThrown;
  }
});*/
function getoperator(incountry) {
  var temp;
  sql4 = 'SELECT distinct operator from lte_band.band where country =' + '\'\\\'' + incountry + '\\\'\';';
  $.ajax({
    async: false, //we must modify this, or return will fail
    url: "PHP/conn_MySQL4.php",
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
  var data = {
    country: [
      { name:'Abkhazia', children: [{ name: 'A-Mobile'},{ name: 'Aquafon'}]},{ name:'Åland Islands', children: [{ name: 'Ålcom'}]},{ name:'Albania', children: [{ name: 'ALBtelecom'},{ name: 'Albtelecom(Eagle Mobile)'},{ name: 'Telekom'},{ name: 'Vodafone'}]},{ name:'Algeria', children: [{ name: 'Algérie Télécom(Mobilis)'},{ name: 'Mobilis (Algérie Télécom)'},{ name: 'Ooredoo'},{ name: 'Optimum Telecom(Djezzy)'}]},{ name:'American Samoa', children: [{ name: 'BlueSky'}]},{ name:'Andorra', children: [{ name: 'Andorra Telecom'}]},{ name:'Angola', children: [{ name: 'Movicel'},{ name: 'Net One'},{ name: 'Unitel'}]},{ name:'Antigua And Barbuda', children: [{ name: 'Digicel'},{ name: 'LIME'}]},{ name:'Argentina', children: [{ name: 'Claro'},{ name: 'Movistar'},{ name: 'Personal'}]},{ name:'Armenia', children: [{ name: 'Beeline'},{ name: 'MTS'},{ name: 'U!com'},{ name: 'VivaCell-MTS'}]},{ name:'Aruba', children: [{ name: 'SETAR'}]},{ name:'Ascension Island', children: [{ name: 'Sure'}]},{ name:'Australia', children: [{ name: 'NBN Co'},{ name: 'Optus'},{ name: 'Telstra'},{ name: 'Virgin Mobile'},{ name: 'Vodafone'}]},{ name:'Austria', children: [{ name: '3 (Drei)'},{ name: '3'},{ name: 'A1 Telekom'},{ name: 'A1'},{ name: 'T-Mobile'}]},{ name:'Azerbaijan', children: [{ name: 'Azercell Telecom'},{ name: 'Azercell'},{ name: 'Azerfon(Nar Mobile)'},{ name: 'Bakcell Telecom'},{ name: 'Bakcell'},{ name: 'Nar Mobile'}]},{ name:'Bahamas', children: [{ name: 'BTC'}]},{ name:'Bahrain', children: [{ name: 'Batelco'},{ name: 'Menatelecom'},{ name: 'VIVA'},{ name: 'Zain'}]},{ name:'Bangladesh', children: [{ name: 'Ollo'}]},{ name:'Belarus', children: [{ name: 'ANLIM.BR(via beCloud)'},{ name: 'beCloud'},{ name: 'life:)(via beCloud)'},{ name: 'MTS'},{ name: 'MTS(via beCloud)'}]},{ name:'Belgium', children: [{ name: 'BASE'},{ name: 'Mobistar'},{ name: 'Orange'},{ name: 'Proximus'}]},{ name:'Belize', children: [{ name: 'BTL(DigiCell)'},{ name: 'DigiCell'},{ name: 'Smart'},{ name: 'Speednet(Smart)'}]},{ name:'Benin', children: [{ name: 'be.Telecoms'}]},{ name:'Bhutan', children: [{ name: 'Bhutan Telecom'},{ name: 'BT(B-Mobile)'},{ name: 'Tashicell'}]},{ name:'Bolivia', children: [{ name: 'Entel'},{ name: 'Tigo'},{ name: 'Viva'}]},{ name:'Botswana', children: [{ name: 'BTC'},{ name: 'Mascom'},{ name: 'Orange'}]},{ name:'Brazil', children: [{ name: 'Algar'},{ name: 'Claro'},{ name: 'Nextel'},{ name: 'Oi'},{ name: 'On Telecom'},{ name: 'SKY Brasil'},{ name: 'TIM'},{ name: 'Vivo'}]},{ name:'Brunei Darussalam', children: [{ name: 'DSTCom'}]},{ name:'Brunei', children: [{ name: 'DST'}]},{ name:'Bulgaria', children: [{ name: 'Bulsatcom'},{ name: 'Max Telecom'},{ name: 'Max'},{ name: 'mtel'},{ name: 'Telenor'},{ name: 'Vivacom'}]},{ name:'Cambodia', children: [{ name: 'CamGSM'},{ name: 'Kingtel'},{ name: 'SEATEL'},{ name: 'Smart Axiata'},{ name: 'Smart'},{ name: 'Viettel(Metfone)'}]},{ name:'Cameroon', children: [{ name: 'MTN'}]},{ name:'Canada', children: [{ name: 'ABC'},{ name: 'Bell Wireless'},{ name: 'Bell'},{ name: 'CGI Wireless'},{ name: 'Eastlink'},{ name: 'Fido'},{ name: 'Freedom'},{ name: 'NetSet'},{ name: 'Public Mobile'},{ name: 'Rogers Wireless'},{ name: 'Rogers'},{ name: 'SaskTel'},{ name: 'Tbaytel'},{ name: 'Telus'},{ name: 'Vidéotron'},{ name: 'Virgin Mobile'},{ name: 'Xplornet'}]},{ name:'Cayman Islands', children: [{ name: 'Digicel'},{ name: 'LIME'}]},{ name:'Chad', children: [{ name: 'Tigo'}]},{ name:'Chile', children: [{ name: 'Claro'},{ name: 'Entel'},{ name: 'Movistar'},{ name: 'WOM'}]},{ name:'China', children: [{ name: 'China Mobile'},{ name: 'China Telecom'},{ name: 'China Unicom'}]},{ name:'Colombia', children: [{ name: 'Avantel'},{ name: 'Claro'},{ name: 'DirecTV'},{ name: 'ETB'},{ name: 'Movistar'},{ name: 'Tigo'}]},{ name:'Costa Rica', children: [{ name: 'Claro'},{ name: 'Kölbi'},{ name: 'Movistar'}]},{ name:'Croatia', children: [{ name: 'Hrvatski Telekom'},{ name: 'T-Hrvatski Telekom'},{ name: 'Tele2'},{ name: 'Vip'},{ name: 'Vipnet'}]},{ name:'Cyprus', children: [{ name: 'CYTA'},{ name: 'MTN'},{ name: 'PrimeTel'}]},{ name:'Czech Republic', children: [{ name: 'O2'},{ name: 'T-Mobile'},{ name: 'Vodafone'}]},{ name:'Denmark', children: [{ name: '3 (Tre)'},{ name: '3'},{ name: 'Net1'},{ name: 'TDC'},{ name: 'Telenor'},{ name: 'Telenor(TT-Netværket)'},{ name: 'Telia'},{ name: 'Telia(TT-Netværket)'}]},{ name:'Dominica', children: [{ name: 'Digicel'},{ name: 'LIME'}]},{ name:'Dominican Republic', children: [{ name: 'Claro'},{ name: 'Orange'},{ name: 'Tricom'}]},{ name:'Ecuador', children: [{ name: 'Claro'},{ name: 'CNT Mobile'},{ name: 'CNT'},{ name: 'Movistar'}]},{ name:'El Salvador', children: [{ name: 'Movistar'},{ name: 'Tigo'}]},{ name:'Estonia', children: [{ name: 'Elisa'},{ name: 'EMT'},{ name: 'Tele2'},{ name: 'Telia'}]},{ name:'Ethiopia', children: [{ name: 'Ethio Telecom'},{ name: 'Ethiotelecom'}]},{ name:'Fiji', children: [{ name: 'Digicel'},{ name: 'TFL'},{ name: 'Vodafone'}]},{ name:'Finland', children: [{ name: 'DNA'},{ name: 'Elisa'},{ name: 'Sonera'},{ name: 'Ukkoverkot'},{ name: 'Yhteisverkko(DNA / Sonera)'}]},{ name:'France', children: [{ name: 'Bouygues Télécom'},{ name: 'Bouygues'},{ name: 'Free'},{ name: 'Orange'},{ name: 'SFR'}]},{ name:'French Guiana', children: [{ name: 'Orange Caraibe'}]},{ name:'French Polynesia', children: [{ name: 'Viti'}]},{ name:'Gambia', children: [{ name: 'Netpage'}]},{ name:'Georgia', children: [{ name: 'Beeline'},{ name: 'Geocell'},{ name: 'MagtiCom'},{ name: 'Mobitel(Beeline)'},{ name: 'Silknet'}]},{ name:'Germany', children: [{ name: 'E-Plus'},{ name: 'O2'},{ name: 'T-Mobile'},{ name: 'Telekom'},{ name: 'Vodafone'}]},{ name:'Ghana', children: [{ name: 'Blu Telecom'},{ name: 'BusyInternet'},{ name: 'MTN'},{ name: 'Surfline'},{ name: 'Vodafone'}]},{ name:'Gibraltar', children: [{ name: 'Gibtelecom'}]},{ name:'Greece', children: [{ name: 'Cosmote'},{ name: 'Vodafone'},{ name: 'WIND'}]},{ name:'Greenland', children: [{ name: 'TELE Greenland'},{ name: 'TELE'}]},{ name:'Guadeloupe', children: [{ name: 'Orange Caraibe'}]},{ name:'Guam', children: [{ name: 'GTA'},{ name: 'iConnect'},{ name: 'IT&E Guam'},{ name: 'IT&E Overseas'},{ name: 'NTT Docomo Pacific'},{ name: 'NTT DoCoMo'}]},{ name:'Guatemala', children: [{ name: 'Claro'},{ name: 'Movistar'},{ name: 'Tigo'}]},{ name:'Guernsey', children: [{ name: 'Jersey Telecom'},{ name: 'Sure'}]},{ name:'Honduras', children: [{ name: 'Claro'},{ name: 'Tigo'}]},{ name:'Hong Kong', children: [{ name: '3 (Three)'},{ name: 'China Mobile'},{ name: 'CSL'},{ name: 'SmarTone'}]},{ name:'Hong Kong(SAR)', children: [{ name: '3'},{ name: 'China Mobile HK'},{ name: 'csl / 3(Genius)'},{ name: 'csl'},{ name: 'SmarTone'}]},{ name:'Hungary', children: [{ name: 'MVM Net'},{ name: 'T-Mobile'},{ name: 'Telekom'},{ name: 'Telenor'},{ name: 'Vodafone'}]},{ name:'Iceland', children: [{ name: 'Nova /Vodafone'},{ name: 'Nova'},{ name: 'Síminn'},{ name: 'Vodafone'}]},{ name:'India', children: [{ name: 'Aircel'},{ name: 'Airtel / Telenor'},{ name: 'Airtel'},{ name: 'Idea'},{ name: 'Jio'},{ name: 'Tikona'},{ name: 'Vodafone'}]},{ name:'Indonesia', children: [{ name: '3 (Tri)'},{ name: '3'},{ name: 'Berca Hardayaperkasa(hinet)'},{ name: 'Bolt'},{ name: 'Indosat Ooredoo'},{ name: 'Indosat'},{ name: 'PT Internux(Bolt!)'},{ name: 'Smartfren'},{ name: 'Telkomsel'},{ name: 'XL Axiata'}]},{ name:'Iran', children: [{ name: 'Hamrahe Aval (MCI)'},{ name: 'MCI (Hamrah-e-Aval)'},{ name: 'Mobinnet'},{ name: 'MTN Irancell'},{ name: 'RighTel'}]},{ name:'Iraq', children: [{ name: 'Goran Net'},{ name: 'Regional Telecom(Fastlink)'},{ name: 'Tishknet'}]},{ name:'Ireland', children: [{ name: '3 (Three)'},{ name: '3'},{ name: 'Imagine Communications'},{ name: 'Meteor'},{ name: 'Vodafone'}]},{ name:'Isle of Man', children: [{ name: 'Manx Telecom'},{ name: 'Sure'}]},{ name:'Israel', children: [{ name: 'Cellcom'},{ name: 'Golan Telecom'},{ name: 'Hot Mobile'},{ name: 'Partner'},{ name: 'Pelephone'},{ name: 'Rami Levy'}]},{ name:'Italy', children: [{ name: '3 (Tre)'},{ name: 'GO Internet'},{ name: 'Linkem'},{ name: 'Telecom Italia Mobile (TIM)'},{ name: 'TIM'},{ name: 'Tiscali'},{ name: 'Vodafone'},{ name: 'Wind Tre'},{ name: 'Wind'}]},{ name:'Ivory Coast', children: [{ name: 'YooMee'}]},{ name:'Jamaica', children: [{ name: 'Digicel'},{ name: 'LIME'}]},{ name:'Japan', children: [{ name: 'KDDI au'},{ name: 'KDDI(au)'},{ name: 'KDDI(UQ)'},{ name: 'NTT DoCoMo'},{ name: 'SoftBank'},{ name: 'SoftBank(WCP)'}]},{ name:'Jersey', children: [{ name: 'Jersey Telecom'},{ name: 'JT (Jersey Telecom)'},{ name: 'Sure'}]},{ name:'Jordan', children: [{ name: 'Orange'},{ name: 'Umniah'},{ name: 'Zain'}]},{ name:'Kazakhstan', children: [{ name: 'Altel'},{ name: 'Beeline'},{ name: 'Kazakhtelecom(Altel) / Tele2'},{ name: 'Kcell'}]},{ name:'Kenya', children: [{ name: 'Safaricom'}]},{ name:'Kiribati', children: [{ name: 'TSKL'}]},{ name:'Kosovo', children: [{ name: 'IPKO'},{ name: 'Vala'}]},{ name:'Kuwait', children: [{ name: 'Ooredoo'},{ name: 'VIVA'},{ name: 'Zain'}]},{ name:'Kyrgyzstan', children: [{ name: 'Megacom'},{ name: 'Nur Telecom(O!)'},{ name: 'O!'},{ name: 'Saima Telecom'},{ name: 'Sky Mobile'}]},{ name:'Laos', children: [{ name: 'Lao Telecom (LTC, LaoTel)'},{ name: 'LTC(Laotel)'},{ name: 'Unitel'}]},{ name:'Latvia', children: [{ name: 'Bite'},{ name: 'LMT'},{ name: 'Tele2'}]},{ name:'Lebanon', children: [{ name: 'Alfa'},{ name: 'touch'}]},{ name:'Lesotho', children: [{ name: 'Vodacom'}]},{ name:'Liberia', children: [{ name: 'Cellcom'}]},{ name:'Liechtenstein', children: [{ name: 'Salt(7acht)'},{ name: 'Swisscom'},{ name: 'Telecom Liechtenstein'},{ name: 'Telecom Liechtenstein(FL1)'}]},{ name:'Lithuania', children: [{ name: 'Bite'},{ name: 'Omnitel'},{ name: 'Tele2'},{ name: 'Telecentras(MEZON)'},{ name: 'Teledema'},{ name: 'Telia'}]},{ name:'Luxembourg', children: [{ name: 'Orange'},{ name: 'POST'},{ name: 'Tango'}]},{ name:'Macao', children: [{ name: 'CTM'}]},{ name:'Macau (SAR)', children: [{ name: '3'},{ name: 'China Telecom'},{ name: 'CTM'},{ name: 'SmarTone'}]},{ name:'Macedonia', children: [{ name: 'One'},{ name: 'T-Mobile'},{ name: 'Telekom (T-Mobile)'},{ name: 'Vip'}]},{ name:'Madagascar', children: [{ name: 'Blueline'}]},{ name:'Malawi', children: [{ name: 'Access Comm'},{ name: 'TNM'}]},{ name:'Malaysia', children: [{ name: 'Celcom /Puncak (Altel)'},{ name: 'Celcom'},{ name: 'Digi'},{ name: 'Maxis /REDtone'},{ name: 'Maxis'},{ name: 'Telekom Malaysia(webe)'},{ name: 'U Mobile'},{ name: 'Yes 4G'}]},{ name:'Maldives', children: [{ name: 'Dhiraagu'},{ name: 'Ooredoo'}]},{ name:'Malta', children: [{ name: 'GO'},{ name: 'Melita'},{ name: 'Vodafone'}]},{ name:'Martinique', children: [{ name: 'Orange Caraibe'}]},{ name:'Mauritius', children: [{ name: 'Emtel'},{ name: 'MTML'},{ name: 'Orange'}]},{ name:'Mayotte', children: [{ name: 'Orange'},{ name: 'SFR'}]},{ name:'Mexico', children: [{ name: 'AT&T'},{ name: 'Movistar'},{ name: 'Nextel'},{ name: 'Telcel'}]},{ name:'Moldova', children: [{ name: 'Interdnestrcom'},{ name: 'Moldcell'},{ name: 'Orange'},{ name: 'Unité'}]},{ name:'Monaco', children: [{ name: 'Monaco Telecom'}]},{ name:'Mongolia', children: [{ name: 'Mobicom'},{ name: 'Unitel'}]},{ name:'Montenegro', children: [{ name: 'T-Mobile'},{ name: 'Telekom'},{ name: 'Telenor'}]},{ name:'Morocco', children: [{ name: 'Inwi'},{ name: 'Maroc Telecom'},{ name: 'Méditel'}]},{ name:'Myanmar', children: [{ name: 'MPT'},{ name: 'Ooredoo'},{ name: 'Telenor'}]},{ name:'Namibia', children: [{ name: 'MTC'},{ name: 'TN Mobile'}]},{ name:'Nepal', children: [{ name: 'Ncell'},{ name: 'Nepal Telecom'}]},{ name:'Netherlands', children: [{ name: 'KPN'},{ name: 'T-Mobile'},{ name: 'Tele2'},{ name: 'Vodafone'},{ name: 'Ziggo'}]},{ name:'New Caledonia', children: [{ name: 'OPT'}]},{ name:'New Zealand', children: [{ name: '2degrees'},{ name: 'Spark'},{ name: 'Vodafone'}]},{ name:'Nicaragua', children: [{ name: 'Claro'},{ name: 'Movistar'}]},{ name:'Nigeria', children: [{ name: 'Bitflux'},{ name: 'Cyberspace'},{ name: 'Etisalat'},{ name: 'Glo Mobile'},{ name: 'InterCellular'},{ name: 'MTN(HyNet)'},{ name: 'MTN(Visafone)'},{ name: 'ntel'},{ name: 'Smile'},{ name: 'Spectranet'},{ name: 'SWIFT'}]},{ name:'Northern Mariana Islands', children: [{ name: 'IT&E Overseas'},{ name: 'IT&E'}]},{ name:'Norway', children: [{ name: 'ice.net'},{ name: 'Telenor'},{ name: 'Telia'}]},{ name:'Oman', children: [{ name: 'Omantel'},{ name: 'Ooredoo'}]},{ name:'Pakistan', children: [{ name: 'Jazz'},{ name: 'Telenor'},{ name: 'Warid'},{ name: 'Zong'}]},{ name:'Panama', children: [{ name: '+Movil'},{ name: 'Cables and Wireless'},{ name: 'Claro'},{ name: 'Movistar'}]},{ name:'Papua New Guinea', children: [{ name: 'Digicel'},{ name: 'Telikom PNG'}]},{ name:'Paraguay', children: [{ name: 'Claro'},{ name: 'Personal'},{ name: 'Tigo'},{ name: 'VOX'}]},{ name:'Peru', children: [{ name: 'Bitel'},{ name: 'Claro'},{ name: 'Entel'},{ name: 'Movistar'}]},{ name:'Philippines', children: [{ name: 'Globe'},{ name: 'PLDT(Ultera)'},{ name: 'Smart'}]},{ name:'Poland', children: [{ name: 'Aero2'},{ name: 'Cyfrowy Polsat(Aero2)'},{ name: 'Cyfrowy Polsat(Plus)'},{ name: 'Orange'},{ name: 'Play'},{ name: 'T-Mobile /Orange'},{ name: 'T-Mobile'}]},{ name:'Portugal', children: [{ name: 'Meo'},{ name: 'NOS'},{ name: 'Vodafone'}]},{ name:'Puerto Rico', children: [{ name: 'AT&T'},{ name: 'Claro'},{ name: 'Claro(PRTC)'},{ name: 'Open Mobile'},{ name: 'Sprint'},{ name: 'T-Mobile'}]},{ name:'Qatar', children: [{ name: 'Ooredoo'},{ name: 'Vodafone'}]},{ name:'Réunion', children: [{ name: 'Orange'},{ name: 'SFR'}]},{ name:'Romania', children: [{ name: 'Digi.Mobil'},{ name: 'Orange'},{ name: 'Telekom'},{ name: 'Vodafone'}]},{ name:'Russia', children: [{ name: 'Beeline'},{ name: 'MegaFon'},{ name: 'Motiv'},{ name: 'MTS (Mobile TeleSystems)'},{ name: 'MTS'},{ name: 'Tattelecom'},{ name: 'Tele2'},{ name: 'Tele2(Rostelecom)'},{ name: 'Vainakh Telecom'},{ name: 'VimpelCom(Beeline)'},{ name: 'Yota'}]},{ name:'Rwanda', children: [{ name: 'ORN'}]},{ name:'Saint Barthelemy', children: [{ name: 'Orange Caraibe'}]},{ name:'Saint Helena', children: [{ name: 'Sure'}]},{ name:'Saint-Martin', children: [{ name: 'Orange Caraibe'},{ name: 'UTS (Chippie)'}]},{ name:'Samoa', children: [{ name: 'Digicel'}]},{ name:'San Marino', children: [{ name: 'TISM (Telecom Italia)'}]},{ name:'Saudi Arabia', children: [{ name: 'Mobily'},{ name: 'STC'},{ name: 'Zain'}]},{ name:'Serbia', children: [{ name: 'MTS'},{ name: 'Telenor'},{ name: 'Vip'}]},{ name:'Seychelles', children: [{ name: 'Airtel'}]},{ name:'Singapore', children: [{ name: 'M1'},{ name: 'MobileOne (M1)'},{ name: 'Singtel'},{ name: 'StarHub'}]},{ name:'Slovakia', children: [{ name: '4ka'},{ name: 'O2'},{ name: 'Orange'},{ name: 'Slovak Telekom'},{ name: 'Slovanet'},{ name: 'SWAN'}]},{ name:'Slovenia', children: [{ name: 'A1'},{ name: 'Si.mobile'},{ name: 'Telekom Slovenije'},{ name: 'Telemach'}]},{ name:'South Africa', children: [{ name: 'Cell C'},{ name: 'MTN (Afrihost)'},{ name: 'MTN Group'},{ name: 'MTN'},{ name: 'Neotel'},{ name: 'Telkom / 8ta'},{ name: 'Telkom'},{ name: 'Vodacom'}]},{ name:'South Korea', children: [{ name: 'KT'},{ name: 'LG U+ (Uplus)'},{ name: 'LG U+'},{ name: 'SK Telecom'}]},{ name:'Spain', children: [{ name: 'COTA(Murcia4G)'},{ name: 'Masmovil(Neo-Sky)'},{ name: 'Movistar'},{ name: 'Orange'},{ name: 'Vodafone'},{ name: 'Yoigo'}]},{ name:'Sri Lanka', children: [{ name: 'Dialog'},{ name: 'Dialog(DBN)'},{ name: 'Lanka Bell'},{ name: 'Mobitel'},{ name: 'SLT'},{ name: 'SLT(Mobitel)'}]},{ name:'Sudan', children: [{ name: 'Sudani'},{ name: 'Zain'}]},{ name:'Suriname', children: [{ name: 'Telesur'}]},{ name:'Sweden', children: [{ name: '3 (Tre)'},{ name: '3'},{ name: 'Comviq'},{ name: 'Net1'},{ name: 'Net4Mobility(Telenor / Tele2)'},{ name: 'Tele2'},{ name: 'Telenor'},{ name: 'Telia'}]},{ name:'Switzerland', children: [{ name: 'Salt'},{ name: 'Sunrise'},{ name: 'Swisscom'}]},{ name:'Taiwan', children: [{ name: 'Ambit'},{ name: 'APT'},{ name: 'Chunghwa Telecom'},{ name: 'FarEasTone'},{ name: 'T Star'},{ name: 'Taiwan Mobile'},{ name: 'Taiwan Star'}]},{ name:'Tajikistan', children: [{ name: 'Babilon Mobile'},{ name: 'MegaFon'},{ name: 'Tcell'}]},{ name:'Tanzania', children: [{ name: 'Smart'},{ name: 'Smile'},{ name: 'Tigo'},{ name: 'TTCL'},{ name: 'Vodacom'},{ name: 'Zantel'}]},{ name:'Thailand', children: [{ name: 'AIS'},{ name: 'DTAC'},{ name: 'TrueMove H'},{ name: 'TrueMove-H'}]},{ name:'Transnistria', children: [{ name: 'Interdnestrcom'}]},{ name:'Trinidad and Tobago', children: [{ name: 'Bmobile'}]},{ name:'Tunisia', children: [{ name: 'Ooredoo'},{ name: 'Orange'},{ name: 'Tunisie Telecom'}]},{ name:'Turkey', children: [{ name: 'Türk Telekom'},{ name: 'Turkcell'},{ name: 'Vodafone'}]},{ name:'Turkmenistan', children: [{ name: 'Altyn Asyr(TMCELL)'},{ name: 'TM Cell'}]},{ name:'Turks and Caicos Islands', children: [{ name: 'Digicel'},{ name: 'LIME'}]},{ name:'U.S. Virgin Islands', children: [{ name: 'AT&T'},{ name: 'Choice Wireless'},{ name: 'Sprint'}]},{ name:'UAE', children: [{ name: 'du'},{ name: 'Etisalat'}]},{ name:'Uganda', children: [{ name: 'Africell'},{ name: 'MTN'},{ name: 'Orange'},{ name: 'Smile'},{ name: 'Vodafone'},{ name: 'Warid'}]},{ name:'United Kingdom', children: [{ name: '3 (Three)'},{ name: '3 (UK Broadband)'},{ name: '3'},{ name: 'EE (Everything Everywhere)'},{ name: 'EE'},{ name: 'O2'},{ name: 'Vodafone'}]},{ name:'United States', children: [{ name: 'Adams Networks'},{ name: 'AlaskaComm / GCI'},{ name: 'AT&T'},{ name: 'Big River Broadband'},{ name: 'BIT Broadband(Wildfire)'},{ name: 'Bluegrass Cellular'},{ name: 'Boost Mobile'},{ name: 'Bug Tussel Wireless'},{ name: 'C Spire'},{ name: 'ClearTalk'},{ name: 'Colorado Valley Com'},{ name: 'Cricket Wireless'},{ name: 'ETC'},{ name: 'Evolve Broadband'},{ name: 'FreedomPop'},{ name: 'Google Project Fi'},{ name: 'H2O Wireless'},{ name: 'Infrastructure Networks'},{ name: 'iWireless'},{ name: 'Lycamobile'},{ name: 'Mosaic Telecom'},{ name: 'Nex-Tech Wireless'},{ name: 'Nortex(SkyFi)'},{ name: 'PTC'},{ name: 'PTCI'},{ name: 'Redzone Wireless'},{ name: 'Rise Broadband'},{ name: 'Rock Wireless'},{ name: 'Silver Star'},{ name: 'Space Data Corporation'},{ name: 'Speed Connect'},{ name: 'Sprint'},{ name: 'Syringa Wireless'},{ name: 'T-Mobile'},{ name: 'Ting (GSM)'},{ name: 'U.S. Cellular'},{ name: 'United Wireless'},{ name: 'Verizon Wireless'},{ name: 'Verizon'},{ name: 'VTel Wireless'},{ name: 'West Central Wireless'}]},{ name:'Uruguay', children: [{ name: 'ANTEL'},{ name: 'Claro'},{ name: 'Movistar'}]},{ name:'US Virgin Islands', children: [{ name: 'AT&T'}]},{ name:'Uzbekistan', children: [{ name: 'Beeline'},{ name: 'Super iMAX(EVO)'},{ name: 'UCell'},{ name: 'UMS'}]},{ name:'Vanuatu', children: [{ name: 'Digicel'},{ name: 'WanTok'}]},{ name:'Venezuela', children: [{ name: 'Digitel'},{ name: 'Movilnet'},{ name: 'Movistar'}]},{ name:'Vietnam', children: [{ name: 'Viettel'},{ name: 'VNPT Vinaphone'}]},{ name:'Zambia', children: [{ name: 'MTN'},{ name: 'Vodafone'},{ name: 'Zamtel'}]},{ name:'Zimbabwe', children: [{ name: 'Econet'},{ name: 'Net*One'}]}
    ]
  };
  ///////////////////////////create the data///////////////////////////
  /*var sql1 = "SELECT distinct country from lte_bands.bands order by country asc;";
  var separator = '<br>';
  var Bcountry = [];
  var Boperator = [];
  $.ajax({
    url: "PHP/conn_MySQL2.php",
    data: "&sql1=" + sql1,
    type: "POST",
    dataType: 'text',
    success: function (message) {
      //document.getElementById("countree").innerHTML = message;
      Bcountry = message.split(separator);
      //var saving='';
      for (var i = 0; i < Bcountry.length - 1; i++) {
        data.country.push({ name: Bcountry[i], children: [] });
        Boperator = getoperator(Bcountry[i]).split(separator);
        //saving=saving+'{ name:\''+Bcountry[i]+'\', children: [';
        for (var j = 0; j < Boperator.length - 1; j++) {
          data.country[i].children.push({ name: Boperator[j] });
          //saving=saving+'{ name: \''+Boperator[j]+'\'}';
          //if(j==Boperator.length-2){break;}
          //saving+=',';
        }
        //saving+=']}';
        //if(i==Bcountry.length-2){break;}
        //saving+=',';
      }
      //document.getElementById("countree").innerHTML = saving;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      document.getElementById("countree").innerHTML = errorThrown;
    }
  });*/
  ///////////////////////////create the data///////////////////////////
  // define the division component
  var root = Vue.component('root', {
    template: '#root-template',
    props: {
      model: Object
    }
  });

  // define the country list component
  var comcountry = Vue.component('comcountry', {
    template: '#comcountry-template',
    props: {
      model: Object
    },
    data: function () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    }
  });
  var comoperator = Vue.component('comoperator', {
    template: '#comoperator-template',
    props: {
      model: Object
    },
    data: function () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    }
  });
  // boot up the demo
  var countree = new Vue({
    el: '#countree',
    data: {
      root: 'root',
      comcountry: 'comcountry',
      comoperator: 'comoperator',
      treeData: data
    },
    component: {
      'root': root,
      'comcountry': comcountry,
      'comoperator': comoperator
    }
  });
});
