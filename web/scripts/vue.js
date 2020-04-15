/*var sql1 = "SELECT distinct country from lte_bands.bands order by country asc;";
var separator = '<br>';
var Bcountry = [];
var Boperator = [];
$.ajax({
  url: "PHP/conn_MySQL_countryList.php",
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
  let temp = '';
  let sql = 'SELECT distinct operator from lte_band.band where country =' + '\'\\\'' + incountry + '\\\'\';';
  $.ajax({
    async: false, //we must modify this, or return will fail
    url: "PHP/conn_MySQL_operatorList.php",
    data: "&sql=" + sql,
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
}

$(function () {

  let data = {
    country: [
      { name:'AlandIslands', children: [{ name: 'Alcom'}]},{ name:'Albania', children: [{ name: 'Telekom'},{ name: 'ALBtelecom'},{ name: 'Vodafone'}]},{ name:'Algeria', children: [{ name: 'Mobilis(AlgérieTélécom)'}]},{ name:'Angola', children: [{ name: 'Unitel'},{ name: 'Movicel'}]},{ name:'AntiguaAndBarbuda', children: [{ name: 'LIME'},{ name: 'Digicel'}]},{ name:'Argentina', children: [{ name: 'Personal'},{ name: 'Movistar'}]},{ name:'Armenia', children: [{ name: 'VivaCell-MTS'}]},{ name:'Aruba', children: [{ name: 'SETAR'}]},{ name:'Australia', children: [{ name: 'Vodafone'},{ name: 'Telstra'},{ name: 'VirginMobile'},{ name: 'Optus'}]},{ name:'Austria', children: [{ name: '3(Drei)'},{ name: 'T-Mobile'},{ name: 'A1Telekom'}]},{ name:'Azerbaijan', children: [{ name: 'AzercellTelecom'},{ name: 'BakcellTelecom'},{ name: 'NarMobile'}]},{ name:'Bahamas', children: [{ name: 'BTC'}]},{ name:'Bahrain', children: [{ name: 'Batelco'},{ name: 'Zain'},{ name: 'Viva'}]},{ name:'Bangladesh', children: [{ name: 'Banglalink'},{ name: 'Robi'},{ name: 'Grameenphone'}]},{ name:'Belarus', children: [{ name: 'beCloud'},{ name: 'MTS'}]},{ name:'Belgium', children: [{ name: 'BASE'},{ name: 'Proximus'},{ name: 'Mobistar'}]},{ name:'Belize', children: [{ name: 'DigiCell'},{ name: 'Smart'}]},{ name:'Bhutan', children: [{ name: 'BhutanTelecom'}]},{ name:'Bolivia', children: [{ name: 'Viva'},{ name: 'Entel'},{ name: 'Tigo'}]},{ name:'Brazil', children: [{ name: 'Nextel'},{ name: 'TIM'},{ name: 'Oi'},{ name: 'Claro'},{ name: 'Vivo'}]},{ name:'BruneiDarussalam', children: [{ name: 'DSTCom'}]},{ name:'Bulgaria', children: [{ name: 'MaxTelecom'}]},{ name:'Cambodia', children: [{ name: 'Smart'},{ name: 'Seatel'}]},{ name:'Canada', children: [{ name: 'Telus'},{ name: 'Videotron'},{ name: 'KoodoMobile'},{ name: 'VirginMobile'},{ name: 'BellWireless'},{ name: 'FreedomMobile'},{ name: 'PublicMobile'},{ name: 'RogersWireless'},{ name: 'Fido'}]},{ name:'CaymanIslands', children: [{ name: 'Digicel'},{ name: 'LIME'}]},{ name:'Chile', children: [{ name: 'WOM'},{ name: 'Claro'},{ name: 'Movistar'},{ name: 'Entel'}]},{ name:'China', children: [{ name: 'ChinaTelecom'},{ name: 'ChinaUnicom'},{ name: 'ChinaMobile'}]},{ name:'Colombia', children: [{ name: 'Movistar'},{ name: 'Tigo'},{ name: 'Claro'}]},{ name:'CostaRica', children: [{ name: 'Claro'},{ name: 'Movistar'},{ name: 'Kolbi'}]},{ name:'Croatia', children: [{ name: 'Vip'},{ name: 'HrvatskiTelekom'}]},{ name:'Cyprus', children: [{ name: 'PrimeTel'},{ name: 'MTN'}]},{ name:'CzechRepublic', children: [{ name: 'T-Mobile'},{ name: 'Vodafone'},{ name: 'O2'}]},{ name:'Denmark', children: [{ name: '3(Tre)'},{ name: 'Telia'},{ name: 'Telenor'},{ name: 'TDC'}]},{ name:'Dominica', children: [{ name: 'LIME'},{ name: 'Digicel'}]},{ name:'DominicanRepublic', children: [{ name: 'Tricom'},{ name: 'Orange'},{ name: 'Claro'}]},{ name:'Ecuador', children: [{ name: 'Movistar'},{ name: 'CNT'},{ name: 'Claro'}]},{ name:'Estonia', children: [{ name: 'Tele2'},{ name: 'EMT'},{ name: 'Elisa'}]},{ name:'Ethiopia', children: [{ name: 'EthioTelecom'}]},{ name:'Fiji', children: [{ name: 'Vodafone'},{ name: 'Digicel'}]},{ name:'Finland', children: [{ name: 'Elisa'},{ name: 'DNA'},{ name: 'Sonera'}]},{ name:'France', children: [{ name: 'BouyguesTélécom'},{ name: 'Free'},{ name: 'Orange'},{ name: 'SFR'}]},{ name:'Georgia', children: [{ name: 'Geocell'},{ name: 'MagtiCom'},{ name: 'Beeline'}]},{ name:'Germany', children: [{ name: 'E-Plus'},{ name: 'T-Mobile'},{ name: 'Vodafone'},{ name: 'O2'}]},{ name:'Gibraltar', children: [{ name: 'Gibtelecom'}]},{ name:'Greece', children: [{ name: 'Wind'},{ name: 'Cosmote'},{ name: 'Vodafone'}]},{ name:'Greenland', children: [{ name: 'TELE'}]},{ name:'Guam', children: [{ name: 'iConnect'},{ name: 'GTA'},{ name: 'IT&EGuam'},{ name: 'NTTDocomoPacific'}]},{ name:'Guatemala', children: [{ name: 'Movistar'},{ name: 'Claro'},{ name: 'Tigo'}]},{ name:'Honduras', children: [{ name: 'Tigo'},{ name: 'Claro'}]},{ name:'HongKong', children: [{ name: 'ChinaMobile'},{ name: '3(Three)'},{ name: 'CSL'},{ name: 'SmarTone'}]},{ name:'Hungary', children: [{ name: 'Telekom'},{ name: 'Telenor'},{ name: 'Vodafone'}]},{ name:'Iceland', children: [{ name: 'Nova'},{ name: 'Siminn'},{ name: 'Vodafone'}]},{ name:'India', children: [{ name: 'Jio'},{ name: 'Aircel'},{ name: 'Airtel'}]},{ name:'Indonesia', children: [{ name: '3(Tri)'},{ name: 'Smartfren'},{ name: 'Telkomsel'},{ name: 'XLAxiata'},{ name: 'Indosat'},{ name: 'Bolt'}]},{ name:'Iran', children: [{ name: 'RighTel'},{ name: 'MTNIrancell'},{ name: 'HamraheAval(MCI)'}]},{ name:'Ireland', children: [{ name: '3(Three)'},{ name: 'Vodafone'},{ name: 'Meteor'}]},{ name:'IsleofMan', children: [{ name: 'ManxTelecom'}]},{ name:'Israel', children: [{ name: 'RamiLevy'},{ name: 'Pelephone'},{ name: 'GolanTelecom'},{ name: 'Cellcom'},{ name: 'Partner'},{ name: 'HotMobile'}]},{ name:'Italy', children: [{ name: 'Vodafone'},{ name: '3(Tre)'},{ name: 'TelecomItaliaMobile(TIM)'},{ name: 'Wind'}]},{ name:'Jamaica', children: [{ name: 'LIME'},{ name: 'Digicel'}]},{ name:'Japan', children: [{ name: 'KDDIau'},{ name: 'Softbank'},{ name: 'NTTDocomo'}]},{ name:'Jersey', children: [{ name: 'JT(JerseyTelecom)'}]},{ name:'Jordan', children: [{ name: 'Umniah'},{ name: 'Zain'},{ name: 'Orange'}]},{ name:'Kazakhstan', children: [{ name: 'Altel'}]},{ name:'Kenya', children: [{ name: 'Safaricom'}]},{ name:'Kiribati', children: [{ name: 'TSKL'}]},{ name:'Kuwait', children: [{ name: 'Zain'},{ name: 'Viva'},{ name: 'Ooredoo'}]},{ name:'Kyrgyzstan', children: [{ name: 'O!'}]},{ name:'Laos', children: [{ name: 'LaoTelecom(LTC,LaoTel)'}]},{ name:'Latvia', children: [{ name: 'LMT'},{ name: 'Tele2'}]},{ name:'Lebanon', children: [{ name: 'Alfa'},{ name: 'Touch'}]},{ name:'Lesotho', children: [{ name: 'Vodacom'}]},{ name:'Liechtenstein', children: [{ name: 'TelecomLiechtenstein'}]},{ name:'Lithuania', children: [{ name: 'Omnitel'},{ name: 'Bite'},{ name: 'Tele2'},{ name: 'Teledema'}]},{ name:'Luxembourg', children: [{ name: 'Orange'},{ name: 'Tango'},{ name: 'POST'}]},{ name:'Macao', children: [{ name: 'CTM'}]},{ name:'Macedonia', children: [{ name: 'VIP'},{ name: 'Telekom(T-Mobile)'},{ name: 'One'}]},{ name:'Malaysia', children: [{ name: 'Celcom'},{ name: 'Maxis'},{ name: 'UMobile'},{ name: 'Digi'}]},{ name:'Maldives', children: [{ name: 'Dhiraagu'},{ name: 'Ooredoo'}]},{ name:'Malta', children: [{ name: 'Melita'},{ name: 'Vodafone'}]},{ name:'Mauritius', children: [{ name: 'Orange'},{ name: 'Emtel'}]},{ name:'Mexico', children: [{ name: 'Movistar'},{ name: 'Nextel'},{ name: 'Telcel'}]},{ name:'Moldova', children: [{ name: 'Unite'},{ name: 'Moldcell'},{ name: 'Orange'},{ name: 'Interdnestrcom'}]},{ name:'Monaco', children: [{ name: 'MonacoTelecom'}]},{ name:'Montenegro', children: [{ name: 'Telenor'},{ name: 'Telekom'}]},{ name:'Morocco', children: [{ name: 'Inwi'},{ name: 'MarocTelecom'},{ name: 'Méditel'}]},{ name:'Namibia', children: [{ name: 'MTC'},{ name: 'TNMobile'}]},{ name:'Netherlands', children: [{ name: 'KPN'},{ name: 'Vodafone'},{ name: 'T-Mobile'},{ name: 'Tele2'},{ name: 'Ziggo'}]},{ name:'NewZealand', children: [{ name: '2degrees'},{ name: 'Spark'},{ name: 'Vodafone'}]},{ name:'Nicaragua', children: [{ name: 'Claro'}]},{ name:'NorthernMarianaIslands', children: [{ name: 'IT&E'}]},{ name:'Norway', children: [{ name: 'Telenor'},{ name: 'Telia'}]},{ name:'Oman', children: [{ name: 'Ooredoo'},{ name: 'Omantel'}]},{ name:'Pakistan', children: [{ name: 'Warid'},{ name: 'Zong'},{ name: 'Telenor'}]},{ name:'Panama', children: [{ name: 'Claro'},{ name: 'CablesandWireless'},{ name: 'Movistar'}]},{ name:'PapuaNewGuinea', children: [{ name: 'Digicel'}]},{ name:'Paraguay', children: [{ name: 'Personal'},{ name: 'Vox'}]},{ name:'Peru', children: [{ name: 'Claro'},{ name: 'Entel'},{ name: 'Movistar'}]},{ name:'Philippines', children: [{ name: 'Smart'},{ name: 'Globe'}]},{ name:'Poland', children: [{ name: 'Play'},{ name: 'T-Mobile'},{ name: 'Orange'},{ name: 'Aero2'}]},{ name:'Portugal', children: [{ name: 'NOS'},{ name: 'MEO'},{ name: 'Vodafone'}]},{ name:'PuertoRico', children: [{ name: 'T-Mobile'},{ name: 'AT&T'},{ name: 'OpenMobile'},{ name: 'Claro'},{ name: 'Sprint'}]},{ name:'Qatar', children: [{ name: 'Vodafone'},{ name: 'Ooredoo'}]},{ name:'Romania', children: [{ name: 'Telekom'},{ name: 'Vodafone'},{ name: 'Orange'},{ name: 'Digi.Mobil'}]},{ name:'Russia', children: [{ name: 'Tele2'},{ name: 'MTS(MobileTeleSystems)'},{ name: 'Yota'},{ name: 'Beeline'},{ name: 'MegaFon'}]},{ name:'SanMarino', children: [{ name: 'TISM(TelecomItalia)'}]},{ name:'SaudiArabia', children: [{ name: 'Zain'},{ name: 'STC'},{ name: 'Mobily'}]},{ name:'Serbia', children: [{ name: 'Vip'},{ name: 'MTS'},{ name: 'Telenor'}]},{ name:'Seychelles', children: [{ name: 'Airtel'}]},{ name:'Singapore', children: [{ name: 'StarHub'},{ name: 'MobileOne(M1)'},{ name: 'Singtel'}]},{ name:'Slovakia', children: [{ name: 'SWAN'},{ name: 'O2'},{ name: 'SlovakTelekom'},{ name: 'Orange'}]},{ name:'Slovenia', children: [{ name: 'Telemach'},{ name: 'TelekomSlovenije'},{ name: 'Si.mobile'}]},{ name:'SouthAfrica', children: [{ name: 'CellC'},{ name: 'MTNGroup'},{ name: 'Vodacom'},{ name: 'Telkom'}]},{ name:'SouthKorea', children: [{ name: 'LGU+(Uplus)'},{ name: 'KT'},{ name: 'SKTelecom'}]},{ name:'Spain', children: [{ name: 'Yoigo'},{ name: 'Movistar'},{ name: 'Orange'},{ name: 'Vodafone'}]},{ name:'SriLanka', children: [{ name: 'Mobitel'},{ name: 'Dialog'}]},{ name:'Sudan', children: [{ name: 'Zain'}]},{ name:'Sweden', children: [{ name: 'Telia'},{ name: 'Tele2'},{ name: 'Telenor'},{ name: 'Comviq'},{ name: '3(Tre)'}]},{ name:'Switzerland', children: [{ name: 'Salt'},{ name: 'Sunrise'},{ name: 'Swisscom'}]},{ name:'Taiwan', children: [{ name: 'TaiwanMobile'},{ name: 'FarEasTone'},{ name: 'ChunghwaTelecom'},{ name: 'TStar'}]},{ name:'Tajikistan', children: [{ name: 'BabilonMobile'},{ name: 'Tcell'}]},{ name:'Tanzania', children: [{ name: 'Tigo'},{ name: 'Smile'}]},{ name:'Thailand', children: [{ name: 'TrueMoveH'},{ name: 'dtac'}]},{ name:'TrinidadandTobago', children: [{ name: 'Bmobile'}]},{ name:'Turkmenistan', children: [{ name: 'TMCell'}]},{ name:'TurksandCaicosIslands', children: [{ name: 'LIME'},{ name: 'Digicel'}]},{ name:'UAE', children: [{ name: 'Etisalat'},{ name: 'du'}]},{ name:'USVirginIslands', children: [{ name: 'AT&T'}]},{ name:'Uganda', children: [{ name: 'Warid'},{ name: 'MTN'},{ name: 'Africell'}]},{ name:'Ukraine', children: [{ name: 'Kyivstar'},{ name: 'Life'},{ name: 'MTS'}]},{ name:'UnitedKingdom', children: [{ name: 'Vodafone'},{ name: '3(Three)'},{ name: 'EE(EverythingEverywhere)'},{ name: 'O2'}]},{ name:'UnitedStates', children: [{ name: 'VerizonWireless'},{ name: 'Ting(GSM)'},{ name: 'Lycamobile'},{ name: 'CricketWireless'},{ name: 'MintMobile'},{ name: 'MetroPCS'},{ name: 'T-Mobile'},{ name: 'AT&T'},{ name: 'H2OWireless'},{ name: 'GoogleProjectFi'},{ name: 'StraightTalk'},{ name: 'U.S.Cellular'},{ name: 'FreedomPop'},{ name: 'Sprint'},{ name: 'BoostMobile'}]},{ name:'Uruguay', children: [{ name: 'Movistar'},{ name: 'Antel'},{ name: 'Claro'}]},{ name:'Uzbekistan', children: [{ name: 'Beeline'},{ name: 'Ucell'}]},{ name:'Vanuatu', children: [{ name: 'WanTok'}]},{ name:'Venezuela', children: [{ name: 'Digitel'},{ name: 'Movistar'}]},{ name:'Zambia', children: [{ name: 'MTN'}]},{ name:'Zimbabwe', children: [{ name: 'NetOne'},{ name: 'Econet'}]},{ name:' Abkhazia', children: [{ name: 'A-Mobile'},{ name: 'Aquafon'}]},{ name:' Algeria', children: [{ name: 'AlgérieTélécom(Mobilis)'},{ name: 'Ooredoo'},{ name: 'OptimumTelecom(Djezzy)'}]},{ name:' AmericanSamoa', children: [{ name: 'BlueSky'}]},{ name:' Angola', children: [{ name: 'Movicel'},{ name: 'NetOne'},{ name: 'Unitel'}]},{ name:' Anguilla', children: [{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' AntiguaandBarbuda', children: [{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' Argentina', children: [{ name: 'Claro'},{ name: 'Movistar'},{ name: 'Personal'}]},{ name:' Aruba', children: [{ name: 'SETAR'},{ name: 'Digicel'}]},{ name:' AscensionIsland', children: [{ name: 'Sure'}]},{ name:' Australia', children: [{ name: 'NBNCo'},{ name: 'Optus'},{ name: 'Telstra'},{ name: 'Vodafone'}]},{ name:' Azerbaijan', children: [{ name: 'Baktelecom'}]},{ name:' Bahamas', children: [{ name: 'Aliv'},{ name: 'BTC'}]},{ name:' Bahrain', children: [{ name: 'Batelco'}]},{ name:' Barbados', children: [{ name: 'Digicel'},{ name: 'FLOW'},{ name: 'Ozone'}]},{ name:' Belgium', children: [{ name: 'Citymesh'}]},{ name:' Belize', children: [{ name: 'Speednet(Smart)'},{ name: 'BTL(DigiCell)'}]},{ name:' Benin', children: [{ name: 'be.Telecoms'},{ name: 'MTN'}]},{ name:' Bermuda', children: [{ name: 'CellOne'},{ name: 'Digicel'}]},{ name:' Bhutan', children: [{ name: 'BT(B-Mobile)'},{ name: 'Tashicell'}]},{ name:' Bolivia', children: [{ name: 'Entel'},{ name: 'Tigo'},{ name: 'Viva'}]},{ name:' Bonaire', children: [{ name: 'Digicel'},{ name: 'TELBO'},{ name: 'UTS(Chippie)'}]},{ name:' Botswana', children: [{ name: 'BTC'},{ name: 'Mascom'},{ name: 'Orange'}]},{ name:' Brazil', children: [{ name: 'Algar'},{ name: 'Claro'},{ name: 'Oi'},{ name: 'OnTelecom'},{ name: 'SKYBrasil'},{ name: 'TIM'},{ name: 'Vivo'}]},{ name:' BritishVirginIslands', children: [{ name: 'CCT'},{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' Brunei', children: [{ name: 'DST'}]},{ name:' BurkinaFaso', children: [{ name: 'Onatel'},{ name: 'Orange'}]},{ name:' Burundi', children: [{ name: 'EconetLeo'},{ name: 'Viettel(Lumitel)'}]},{ name:' Cameroon', children: [{ name: 'MTN'},{ name: 'Orange'}]},{ name:' Canada', children: [{ name: 'ABC'},{ name: 'Bell'},{ name: 'CCIWireless'},{ name: 'Eastlink'},{ name: 'Freedom'},{ name: 'IceWireless'},{ name: 'Qiniq/SSi'},{ name: 'Rogers'},{ name: 'SaskTel'},{ name: 'Tbaytel'},{ name: 'Telus'},{ name: 'Vidéotron'},{ name: 'Xplornet'}]},{ name:' CapeVerde', children: [{ name: 'CVMóvel'}]},{ name:' CaymanIslands', children: [{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' Chad', children: [{ name: 'Airtel'},{ name: 'Tigo'}]},{ name:' Chile', children: [{ name: 'Claro'},{ name: 'Entel'},{ name: 'Movistar'},{ name: 'WOM'}]},{ name:' ChristmasIsland', children: [{ name: 'CiiA'}]},{ name:' Colombia', children: [{ name: 'Avantel'},{ name: 'Claro'},{ name: 'DirecTV'},{ name: 'Movistar'},{ name: 'Tigo/ETB'},{ name: 'Tigo'}]},{ name:' Comoros', children: [{ name: 'Telma'}]},{ name:' Congo', children: [{ name: 'MTN'},{ name: 'Airtel'}]},{ name:' CookIslands', children: [{ name: 'Bluesky'}]},{ name:' CostaRica', children: [{ name: 'Claro'},{ name: 'Kölbi'},{ name: 'Movistar(Tigo)'}]},{ name:' Crimea(Ukraine)', children: [{ name: 'SevmobileSevtelecom'},{ name: 'VolnaMobile'},{ name: 'WinMobileK-Telecom'}]},{ name:' Curaçao', children: [{ name: 'Digicel'},{ name: 'UTS(Chippie)'}]},{ name:' CzechRepublic', children: [{ name: 'NordicTelecom'}]},{ name:' DemocraticRepublicofCongo', children: [{ name: 'Orange'},{ name: 'Vodacom'}]},{ name:' Denmark', children: [{ name: 'Net1'}]},{ name:' Djibouti', children: [{ name: 'DjiboutiTelecom'}]},{ name:' Dominica', children: [{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' DominicanRepublic', children: [{ name: 'Altice'},{ name: 'Claro'},{ name: 'WINDTelecom'}]},{ name:' Donetsk(Ukraine)', children: [{ name: 'Phoenix'}]},{ name:' Ecuador', children: []},{ name:' Egypt', children: []},{ name:' ElSalvador', children: [{ name: 'Movistar'},{ name: 'Tigo'}]},{ name:' Eswatini', children: [{ name: 'MTN'},{ name: 'EswatiniMobile'}]},{ name:' Ethiopia', children: [{ name: 'Ethiotelecom'}]},{ name:' Europe', children: [{ name: 'T-Mobile/Inmarsat'}]},{ name:' FalklandIslands', children: [{ name: 'Sure'}]},{ name:' FederatedStatesofMicronesia', children: [{ name: 'FSMTelecom'}]},{ name:' Fiji', children: [{ name: 'Digicel'},{ name: 'TFL'},{ name: 'Vodafone'}]},{ name:' Finland', children: [{ name: 'Ukkoverkot'}]},{ name:' FrenchGuiana', children: [{ name: 'OrangeCaraibe'}]},{ name:' FrenchPolynesia', children: [{ name: 'Vini'},{ name: 'Viti'}]},{ name:' Gabon', children: [{ name: 'Airtel'},{ name: 'GabonTelecom'}]},{ name:' Gambia', children: [{ name: 'Africell'},{ name: 'Netpage'},{ name: 'QCell'}]},{ name:' Ghana', children: [{ name: 'BluTelecom'},{ name: 'BusyInternet'},{ name: 'MTN'},{ name: 'Telesol'},{ name: 'Vodafone'}]},{ name:' Gibraltar', children: [{ name: 'Gibtelecom'}]},{ name:' Greenland', children: [{ name: 'NuukTV'},{ name: 'TELEGreenland'}]},{ name:' Grenada', children: [{ name: 'Digicel'}]},{ name:' Guadeloupe Martinique', children: [{ name: 'OrangeCaraibe'},{ name: 'SFRCaraibe'}]},{ name:' Guam', children: [{ name: 'GTA'},{ name: 'iConnect'},{ name: 'IT&EOverseas'},{ name: 'NTTDoCoMo'}]},{ name:' Guatemala', children: [{ name: 'Claro'},{ name: 'Movistar'},{ name: 'Tigo'}]},{ name:' Guernsey Jersey', children: [{ name: 'Airtel-Vodafone'},{ name: 'JerseyTelecom'},{ name: 'Sure'}]},{ name:' Guinea', children: [{ name: 'Orange'}]},{ name:' GuineaBissau', children: [{ name: 'Orange'}]},{ name:' Guyana', children: [{ name: 'GTT'}]},{ name:' Haiti', children: [{ name: 'Natcom'}]},{ name:' Honduras', children: [{ name: 'Claro'},{ name: 'Tigo'}]},{ name:' Hungary', children: [{ name: 'Digi'},{ name: 'MVMNet'}]},{ name:' India', children: [{ name: 'Airtel'},{ name: 'BSNL'},{ name: 'Jio'},{ name: 'VodafoneIdea'}]},{ name:' Iran', children: [{ name: 'Mobinnet'},{ name: 'MTNIrancell'},{ name: 'MCIHamraheAval'},{ name: 'RighTel'}]},{ name:' Iraq', children: [{ name: 'GoranNet'},{ name: 'NewrozTelecom'},{ name: 'RegionalTelecom(Fastlink)'},{ name: 'Tishknet'}]},{ name:' IsleofMan', children: [{ name: 'ManxTelecom'},{ name: 'Sure'}]},{ name:' Italy', children: [{ name: 'GOInternet'},{ name: 'Linkem'},{ name: 'Fastweb'}]},{ name:' IvoryCoast', children: [{ name: 'Moov'},{ name: 'MTN'},{ name: 'Orange'},{ name: 'YooMee'}]},{ name:' Jamaica', children: [{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' Jordan', children: [{ name: 'Umniah'}]},{ name:' Kazakhstan', children: [{ name: 'Beeline'},{ name: 'Kcell'},{ name: 'Kazakhtelecom(Altel)/Tele2'}]},{ name:' Kenya', children: [{ name: 'Airtel'},{ name: 'Faiba4G'},{ name: 'Safaricom'},{ name: 'TelkomKenya'}]},{ name:' Kiribati', children: [{ name: 'ATHKL'}]},{ name:' Lesotho', children: [{ name: 'Vodacom'}]},{ name:' Liberia', children: [{ name: 'Orange'}]},{ name:' Libya', children: [{ name: 'AlmadarAljaded'},{ name: 'Libyana'},{ name: 'LTT'}]},{ name:' Madagascar', children: [{ name: 'Airtel'},{ name: 'BIP'},{ name: 'Blueline'},{ name: 'Orange'},{ name: 'Telma'}]},{ name:' Malawi', children: [{ name: 'AccessComm'},{ name: 'Airtel'},{ name: 'TNM'}]},{ name:' Maldives', children: [{ name: 'Dhiraagu'},{ name: 'Ooredoo'}]},{ name:' Mali', children: [{ name: 'Orange'},{ name: 'Malitel'}]},{ name:' MarshallIslands', children: [{ name: 'MINTA'}]},{ name:' Mauritius', children: [{ name: 'Emtel'},{ name: 'MTML'},{ name: 'my.t'}]},{ name:' Mayotte', children: [{ name: 'Orange'},{ name: 'MaoreMobile'},{ name: 'SFR'}]},{ name:' Mexico', children: [{ name: 'AT&T'},{ name: 'Movistar'},{ name: 'ALTANRedes'},{ name: 'Telcel'},{ name: 'Ultravision'}]},{ name:' Monaco', children: [{ name: 'MonacoTelecom'}]},{ name:' Morocco', children: [{ name: 'Inwi'},{ name: 'MarocTelecom'},{ name: 'Orange'}]},{ name:' Mozambique', children: [{ name: 'Movitel,SA'},{ name: 'Vodacom'}]},{ name:' Namibia', children: [{ name: 'MTC'},{ name: 'TNMobile'}]},{ name:' Nauru', children: [{ name: 'Digicel'}]},{ name:' NewCaledonia', children: [{ name: 'OPT'}]},{ name:' NewZealand', children: [{ name: '2degrees'},{ name: 'Spark'},{ name: 'Vodafone'}]},{ name:' Nicaragua', children: [{ name: 'Claro'},{ name: 'Tigo'}]},{ name:' Nigeria', children: [{ name: '9mobile'},{ name: 'Airtel'},{ name: 'Bitflux'},{ name: 'Cyberspace'},{ name: 'GloMobile'},{ name: 'InterCNetwork'},{ name: 'MTN'},{ name: 'MTN(HyNet)'},{ name: 'ntel'},{ name: 'Smile'},{ name: 'Spectranet'},{ name: 'SWIFT'}]},{ name:' Niue', children: [{ name: 'TelecomNiue'}]},{ name:' NorfolkIsland', children: [{ name: 'NIDS'}]},{ name:' NorthernCyprus', children: [{ name: 'KKTCTelsim(Vodafone)'}]},{ name:' NorthernMarianaIslands', children: [{ name: 'IT&EOverseas'}]},{ name:' Norway', children: [{ name: 'Net1(ice.net)'}]},{ name:' Oman', children: [{ name: 'Omantel'},{ name: 'Ooredoo'}]},{ name:' Pakistan', children: [{ name: 'Wi-Tribe'}]},{ name:' Palau', children: [{ name: 'PNCC'}]},{ name:' Panama', children: [{ name: 'C&W(+Movil)'},{ name: 'Claro'},{ name: 'Digicel'},{ name: 'Tigo(Movistar)'}]},{ name:' PapuaNewGuinea', children: [{ name: 'Digicel'},{ name: 'TelikomPNG'}]},{ name:' Paraguay', children: [{ name: 'Claro'},{ name: 'Personal'},{ name: 'Tigo'},{ name: 'VOX'}]},{ name:' Peru', children: [{ name: 'Bitel'},{ name: 'Claro'},{ name: 'Movistar'},{ name: 'Entel'}]},{ name:' Poland', children: [{ name: 'Play'}]},{ name:' PuertoRico', children: [{ name: 'Claro(PRTC)'},{ name: 'Sprint'}]},{ name:' Rwanda', children: [{ name: 'ORN'}]},{ name:' Réunion', children: [{ name: 'Free'},{ name: 'Orange'},{ name: 'SFR'},{ name: 'Zeop'}]},{ name:' Saba', children: [{ name: 'UTS(Chippie)'}]},{ name:' Saint-Martin', children: [{ name: 'OrangeCaraibe'},{ name: 'UTS(Chippie)'}]},{ name:' SaintBarthelemy', children: [{ name: 'OrangeCaraibe'}]},{ name:' SaintHelena', children: [{ name: 'Sure'}]},{ name:' SaintKittsandNevis', children: [{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' SaintLucia', children: [{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' SaintVincentandtheGrenadines', children: [{ name: 'Digicel'},{ name: 'Flow'}]},{ name:' Samoa', children: [{ name: 'Bluesky'},{ name: 'Digicel'}]},{ name:' Senegal', children: [{ name: 'Orange'}]},{ name:' Seychelles', children: [{ name: 'Airtel'}]},{ name:' SintEustatius', children: [{ name: 'UTS(Chippie)'}]},{ name:' SintMaarten', children: [{ name: 'TelCell'}]},{ name:' Slovakia', children: [{ name: 'SlovakTelecom'},{ name: 'Slovanet'},{ name: 'O2'},{ name: 'SWAN'}]},{ name:' SolomonIslands', children: [{ name: 'OurTelecom'}]},{ name:' Somaliland', children: [{ name: 'Somtel'}]},{ name:' SouthAfrica', children: [{ name: 'CellC'},{ name: 'MTN'},{ name: 'MTN(Afrihost)'},{ name: 'Neotel'},{ name: 'RainMobile'},{ name: 'Telkom/8ta'},{ name: 'Vodacom'}]},{ name:' Spain', children: [{ name: 'Masmovil(Neo-Sky)'}]},{ name:' Sudan', children: [{ name: 'Sudani'},{ name: 'Zain'}]},{ name:' Suriname', children: [{ name: 'Telesur'}]},{ name:' Sweden', children: [{ name: 'Net1'}]},{ name:' Syria', children: [{ name: 'MTN'},{ name: 'Syriatel'}]},{ name:' Tajikistan', children: [{ name: 'BabilonMobile'},{ name: 'MegaFon'},{ name: 'Tcell'},{ name: 'ZET-Mobile'}]},{ name:' Tanzania', children: [{ name: 'Airtel'},{ name: 'Smile'},{ name: 'Smart'},{ name: 'Tigo'},{ name: 'TTCL'},{ name: 'Vodacom'},{ name: 'Zantel'}]},{ name:' Timor-Leste', children: [{ name: 'Telemor'},{ name: 'TimorTelecom'}]},{ name:' Tokelau', children: [{ name: 'Teletok'}]},{ name:' Tonga', children: [{ name: 'Digicel'}]},{ name:' Transnistria', children: [{ name: 'Interdnestrcom'}]},{ name:' TrinidadandTobago', children: [{ name: 'Digicel'},{ name: 'bmobile(TSTT)'}]},{ name:' Tunisia', children: [{ name: 'Ooredoo'},{ name: 'Orange'},{ name: 'TunisieTelecom'}]},{ name:' Turkmenistan', children: [{ name: 'AltynAsyr(TMCELL)'}]},{ name:' TurksandCaicosIslands', children: [{ name: 'Digicel'},{ name: 'FLOW'}]},{ name:' Tuvalu', children: [{ name: 'TTC'}]},{ name:' U.S.VirginIslands', children: [{ name: 'Viya'},{ name: 'Sprint'}]},{ name:' Uganda', children: [{ name: 'MTN'},{ name: 'Orange'},{ name: 'Smile'}]},{ name:' UnitedKingdom', children: [{ name: '3(UKBroadband)'}]},{ name:' UnitedStates', children: [{ name: 'AT&T'},{ name: 'T-Mobile'},{ name: 'AdamsNetworks'},{ name: 'AlaskaComm/GCI'},{ name: 'BigRiverBroadband'},{ name: 'BITBroadband(Wildfire)'},{ name: 'BluegrassCellular'},{ name: 'BugTusselWireless'},{ name: 'CSpire'},{ name: 'ColoradoValleyCom'},{ name: 'ETC'},{ name: 'EvolveBroadband'},{ name: 'FirstNet'},{ name: 'InfrastructureNetworks'},{ name: 'LimitlessMobile'},{ name: 'Nex-TechWireless'},{ name: 'Nortex(SkyFi)'},{ name: 'PTCI'},{ name: 'RedzoneWireless'},{ name: 'RiseBroadband'},{ name: 'RockWireless'},{ name: 'SilverStar'},{ name: 'SouthernLINCWireless'},{ name: 'SpaceDataCorporation'},{ name: 'SpeedConnect'},{ name: 'Sprint'},{ name: 'U.S.Cellular'},{ name: 'UnitedWireless'},{ name: 'VTelWireless'}]},{ name:' Uruguay', children: [{ name: 'ANTEL'},{ name: 'Claro'},{ name: 'Movistar'}]},{ name:' Uzbekistan', children: [{ name: 'Beeline'},{ name: 'SuperiMAX(EVO)'},{ name: 'UCell'},{ name: 'UzmobileGSM'},{ name: 'UMS'}]},{ name:' Vanuatu', children: [{ name: 'Digicel'},{ name: 'TelecomVanuatu'},{ name: 'WanTok'}]},{ name:' Venezuela', children: [{ name: 'Digitel'},{ name: 'Movilnet'},{ name: 'Movistar'}]},{ name:' Zambia', children: [{ name: 'Airtel'},{ name: 'LiquidTelecom'},{ name: 'MTN'},{ name: 'Zamtel'}]},{ name:' Zimbabwe', children: [{ name: 'Econet'},{ name: 'Net*One'}]},{ name:' ÅlandIslands', children: [{ name: 'Ukkoverkot'}]}
    ]
  };
  /*///////////////////////////create the data///////////////////////////
  let sql = "&sql="+"SELECT distinct country from lte_band.band order by country asc;";
  let separator = '<br>';
  let Bcountry = [];
  let Boperator = [];
  $.ajax({
    url: "PHP/conn_MySQL_countryList.php",
    data: sql,
    type: "POST",
    dataType: 'text',
    success: function (message) {
      //document.getElementById("countree").innerHTML = message;
      document.getElementById("click_message1").innerHTML='<li>'+ message +'</li>';
      Bcountry = message.split(separator);
      var saving='';
      for (let i = 0; i < Bcountry.length - 1; i++) {
        //data.country.push({ name: Bcountry[i], children: [] });
        Boperator = getoperator(Bcountry[i]).split(separator);
        saving=saving+'{ name:\''+Bcountry[i]+'\', children: [';
        for (let j = 0; j < Boperator.length - 1; j++) {
          //data.country[i].children.push({ name: Boperator[j] });
          saving=saving+'{ name: \''+Boperator[j]+'\'}';
          if(j==Boperator.length-2){break;}
          saving+=',';
        }
        saving+=']}';
        if(i==Bcountry.length-2){break;}
        saving+=',';
      }
      document.getElementById("countree").innerHTML = saving;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      document.getElementById("countree").innerHTML = errorThrown;
    }
  });
  ///////////////////////////create the data//////////////////////////*/
  // define the division component
  let root = Vue.component('root', {
    template: '#root-template',
    props: {
      model: Object
    }
  });

  // define the country list component
  let comcountry = Vue.component('comcountry', {
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
  let comoperator = Vue.component('comoperator', {
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
  let countree = new Vue({
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
