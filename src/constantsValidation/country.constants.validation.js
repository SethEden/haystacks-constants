/**
 * @file country.constants.validation.js
 * @module country.constants.validation
 * @description Contains all validations for named country constants.
 * @requires module:country.constants
 * @author Seth Hollingsead
 * @date 2022/03/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as ctr from '../constants/country.constants.js';

/**
 * @function countryConstantsValidation
 * @description Initializes the country constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/20
 */
export const countryConstantsValidation = [
  // Countries
  {Name: 'cAfghanistan', Actual: ctr.cAfghanistan, Expected: 'Afghanistan'},
  {Name: 'cAlbania', Actual: ctr.cAlbania, Expected: 'Albania'},
  {Name: 'cAlgeria', Actual: ctr.cAlgeria, Expected: 'Algeria'},
  {Name: 'cAndorra', Actual: ctr.cAndorra, Expected: 'Andorra'},
  {Name: 'cAngola', Actual: ctr.cAngola, Expected: 'Angola'},
  {Name: 'cAntigua', Actual: ctr.cAntigua, Expected: 'Antigua'},
  {Name: 'cArgentina', Actual: ctr.cArgentina, Expected: 'Argentina'},
  {Name: 'cArmenia', Actual: ctr.cArmenia, Expected: 'Armenia'},
  {Name: 'cAustralia', Actual: ctr.cAustralia, Expected: 'Australia'},
  {Name: 'cAustria', Actual: ctr.cAustria, Expected: 'Austria'},
  {Name: 'cAzerbaijan', Actual: ctr.cAzerbaijan, Expected: 'Azerbaijan'},
  {Name: 'cBahamas', Actual: ctr.cBahamas, Expected: 'Bahamas'},
  {Name: 'cBahrain', Actual: ctr.cBahrain, Expected: 'Bahrain'},
  {Name: 'cBangladesh', Actual: ctr.cBangladesh, Expected: 'Bangladesh'},
  {Name: 'cBarbados', Actual: ctr.cBarbados, Expected: 'Barbados'},
  {Name: 'cBarbuda', Actual: ctr.cBarbuda, Expected: 'Barbuda'},
  {Name: 'cBelarus', Actual: ctr.cBelarus, Expected: 'Belarus'},
  {Name: 'cBelgium', Actual: ctr.cBelgium, Expected: 'Belgium'},
  {Name: 'cBelize', Actual: ctr.cBelize, Expected: 'Belize'},
  {Name: 'cBenin', Actual: ctr.cBenin, Expected: 'Benin'},
  {Name: 'cBhutan', Actual: ctr.cBhutan, Expected: 'Bhutan'},
  {Name: 'cBolivia', Actual: ctr.cBolivia, Expected: 'Bolivia'},
  {Name: 'cBosnia', Actual: ctr.cBosnia, Expected: 'Bosnia'},
  {Name: 'cBotswana', Actual: ctr.cBotswana, Expected: 'Botswana'},
  {Name: 'cBrazil', Actual: ctr.cBrazil, Expected: 'Brazil'},
  {Name: 'cBrunei', Actual: ctr.cBrunei, Expected: 'Brunei'},
  {Name: 'cBulgaria', Actual: ctr.cBulgaria, Expected: 'Bulgaria'},
  {Name: 'cBurkinaFaso', Actual: ctr.cBurkinaFaso, Expected: 'BurkinaFaso'},
  {Name: 'cBurundi', Actual: ctr.cBurundi, Expected: 'Burundi'},
  {Name: 'cCotedlvoire', Actual: ctr.cCotedlvoire, Expected: 'Cote dlvoire'},
  {Name: 'cCaboVerde', Actual: ctr.cCaboVerde, Expected: 'Cabo Verde'},
  {Name: 'cCambodia', Actual: ctr.cCambodia, Expected: 'Cambodia'},
  {Name: 'cCameroon', Actual: ctr.cCameroon, Expected: 'Cameroon'},
  {Name: 'cCanada', Actual: ctr.cCanada, Expected: 'Canada'},
  {Name: 'cCentralAfricanRepublic', Actual: ctr.cCentralAfricanRepublic, Expected: 'Central African Republic'},
  {Name: 'cChad', Actual: ctr.cChad, Expected: 'Chad'},
  {Name: 'cChile', Actual: ctr.cChile, Expected: 'Chile'},
  {Name: 'cChina', Actual: ctr.cChina, Expected: 'China'},
  {Name: 'cColombia', Actual: ctr.cColombia, Expected: 'Colombia'},
  {Name: 'cComoros', Actual: ctr.cComoros, Expected: 'Comoros'},
  {Name: 'cCongo', Actual: ctr.cCongo, Expected: 'Congo'},
  {Name: 'cCostaRica', Actual: ctr.cCostaRica, Expected: 'Costa Rica'},
  {Name: 'cCroatia', Actual: ctr.cCroatia, Expected: 'Croatia'},
  {Name: 'cCuba', Actual: ctr.cCuba, Expected: 'Cuba'},
  {Name: 'cCyprus', Actual: ctr.cCyprus, Expected: 'Cyprus'},
  {Name: 'cCzechia', Actual: ctr.cCzechia, Expected: 'Czechia'},
  {Name: 'cDemocraticRepublicOfTheCongo', Actual: ctr.cDemocraticRepublicOfTheCongo, Expected: 'Democratic Republic of the Congo'},
  {Name: 'cDenmark', Actual: ctr.cDenmark, Expected: 'Denmark'},
  {Name: 'cDjibouti', Actual: ctr.cDjibouti, Expected: 'Djibouti'},
  {Name: 'cDominica', Actual: ctr.cDominica, Expected: 'Dominica'},
  {Name: 'cDominicanRepublic', Actual: ctr.cDominicanRepublic, Expected: 'Dominican Republic'},
  {Name: 'cEcuador', Actual: ctr.cEcuador, Expected: 'Ecuador'},
  {Name: 'cEgypt', Actual: ctr.cEgypt, Expected: 'Egypt'},
  {Name: 'cElSalvador', Actual: ctr.cElSalvador, Expected: 'El Salvador'},
  {Name: 'cEquatorialGuinea', Actual: ctr.cEquatorialGuinea, Expected: 'Equatorial Guinea'},
  {Name: 'cEritrea', Actual: ctr.cEritrea, Expected: 'Eritrea'},
  {Name: 'cEstonia', Actual: ctr.cEstonia, Expected: 'Estonia'},
  {Name: 'cEswatini', Actual: ctr.cEswatini, Expected: 'Eswatini'},
  {Name: 'cEthiopia', Actual: ctr.cEthiopia, Expected: 'Ethiopia'},
  {Name: 'cFiji', Actual: ctr.cFiji, Expected: 'Fiji'},
  {Name: 'cFinland', Actual: ctr.cFinland, Expected: 'Finland'},
  {Name: 'cFrance', Actual: ctr.cFrance, Expected: 'France'},
  {Name: 'cGabon', Actual: ctr.cGabon, Expected: 'Gabon'},
  {Name: 'cGambia', Actual: ctr.cGambia, Expected: 'Gambia'},
  {Name: 'cGeorgia', Actual: ctr.cGeorgia, Expected: 'Georgia'},
  {Name: 'cGermany', Actual: ctr.cGermany, Expected: 'Germany'},
  {Name: 'cGhana', Actual: ctr.cGhana, Expected: 'Ghana'},
  {Name: 'cGreece', Actual: ctr.cGreece, Expected: 'Greece'},
  {Name: 'cGrenada', Actual: ctr.cGrenada, Expected: 'Grenada'},
  {Name: 'cGuatemala', Actual: ctr.cGuatemala, Expected: 'Guatemala'},
  {Name: 'cGuinea', Actual: ctr.cGuinea, Expected: 'Guinea'},
  {Name: 'cGuineaBissau', Actual: ctr.cGuineaBissau, Expected: 'Guinea-Bissau'},
  {Name: 'cGuyana', Actual: ctr.cGuyana, Expected: 'Guyana'},
  {Name: 'cHaiti', Actual: ctr.cHaiti, Expected: 'Haiti'},
  {Name: 'cHerzegovina', Actual: ctr.cHerzegovina, Expected: 'Herzegovina'},
  {Name: 'cHolySee', Actual: ctr.cHolySee, Expected: 'Holy See'},
  {Name: 'cHonduras', Actual: ctr.cHonduras, Expected: 'Honduras'},
  {Name: 'cHungary', Actual: ctr.cHungary, Expected: 'Hungary'},
  {Name: 'cIceland', Actual: ctr.cIceland, Expected: 'Iceland'},
  {Name: 'cIndia', Actual: ctr.cIndia, Expected: 'India'},
  {Name: 'cIndonesia', Actual: ctr.cIndonesia, Expected: 'Indonesia'},
  {Name: 'cIran', Actual: ctr.cIran, Expected: 'Iran'},
  {Name: 'cIraq', Actual: ctr.cIraq, Expected: 'Iraq'},
  {Name: 'cIreland', Actual: ctr.cIreland, Expected: 'Ireland'},
  {Name: 'cIsrael', Actual: ctr.cIsrael, Expected: 'Israel'},
  {Name: 'cItaly', Actual: ctr.cItaly, Expected: 'Italy'},
  {Name: 'cJamaica', Actual: ctr.cJamaica, Expected: 'Jamaica'},
  {Name: 'cjapan', Actual: ctr.cjapan, Expected: 'japan'},
  {Name: 'cJapan', Actual: ctr.cJapan, Expected: 'Japan'},
  {Name: 'cJAPAN', Actual: ctr.cJAPAN, Expected: 'JAPAN'},
  {Name: 'cJordan', Actual: ctr.cJordan, Expected: 'Jordan'},
  {Name: 'cKazakhstan', Actual: ctr.cKazakhstan, Expected: 'Kazakhstan'},
  {Name: 'cKenya', Actual: ctr.cKenya, Expected: 'Kenya'},
  {Name: 'cKiribati', Actual: ctr.cKiribati, Expected: 'Kiribati'},
  {Name: 'cKuwait', Actual: ctr.cKuwait, Expected: 'Kuwait'},
  {Name: 'cKyrgyzstan', Actual: ctr.cKyrgyzstan, Expected: 'Kyrgyzstan'},
  {Name: 'cLaos', Actual: ctr.cLaos, Expected: 'Laos'},
  {Name: 'cLatvia', Actual: ctr.cLatvia, Expected: 'Latvia'},
  {Name: 'cLebanon', Actual: ctr.cLebanon, Expected: 'Lebanon'},
  {Name: 'cLesotho', Actual: ctr.cLesotho, Expected: 'Lesotho'},
  {Name: 'cLiberia', Actual: ctr.cLiberia, Expected: 'Liberia'},
  {Name: 'cLibya', Actual: ctr.cLibya, Expected: 'Libya'},
  {Name: 'cLiechtenstein', Actual: ctr.cLiechtenstein, Expected: 'Liechtenstein'},
  {Name: 'cLithuania', Actual: ctr.cLithuania, Expected: 'Lithuania'},
  {Name: 'cLuxembourg', Actual: ctr.cLuxembourg, Expected: 'Luxembourg'},
  {Name: 'cMadagascar', Actual: ctr.cMadagascar, Expected: 'Madagascar'},
  {Name: 'cMalawi', Actual: ctr.cMalawi, Expected: 'Malawi'},
  {Name: 'cMalaysia', Actual: ctr.cMalaysia, Expected: 'Malaysia'},
  {Name: 'cMaldives', Actual: ctr.cMaldives, Expected: 'Maldives'},
  {Name: 'cMali', Actual: ctr.cMali, Expected: 'Mali'},
  {Name: 'cMalta', Actual: ctr.cMalta, Expected: 'Malta'},
  {Name: 'cMarshallIslands', Actual: ctr.cMarshallIslands, Expected: 'Marshall Islands'},
  {Name: 'cMauritania', Actual: ctr.cMauritania, Expected: 'Mauritania'},
  {Name: 'cMauritius', Actual: ctr.cMauritius, Expected: 'Mauritius'},
  {Name: 'cMexico', Actual: ctr.cMexico, Expected: 'Mexico'},
  {Name: 'cMicronesia', Actual: ctr.cMicronesia, Expected: 'Micronesia'},
  {Name: 'cMoldova', Actual: ctr.cMoldova, Expected: 'Moldova'},
  {Name: 'cMonaco', Actual: ctr.cMonaco, Expected: 'Monaco'},
  {Name: 'cMongolia', Actual: ctr.cMongolia, Expected: 'Mongolia'},
  {Name: 'cMontenegro', Actual: ctr.cMontenegro, Expected: 'Montenegro'},
  {Name: 'cMorocco', Actual: ctr.cMorocco, Expected: 'Morocco'},
  {Name: 'cMozambique', Actual: ctr.cMozambique, Expected: 'Mozambique'},
  {Name: 'cMyanmar', Actual: ctr.cMyanmar, Expected: 'Myanmar'},
  {Name: 'cNamibia', Actual: ctr.cNamibia, Expected: 'Namibia'},
  {Name: 'cNauru', Actual: ctr.cNauru, Expected: 'Nauru'},
  {Name: 'cNepal', Actual: ctr.cNepal, Expected: 'Nepal'},
  {Name: 'cNetherlands', Actual: ctr.cNetherlands, Expected: 'Netherlands'},
  {Name: 'cNewZealand', Actual: ctr.cNewZealand, Expected: 'New Zealand'},
  {Name: 'cNevis', Actual: ctr.cNevis, Expected: 'Nevis'},
  {Name: 'cNicaragua', Actual: ctr.cNicaragua, Expected: 'Nicaragua'},
  {Name: 'cNiger', Actual: ctr.cNiger, Expected: 'Niger'},
  {Name: 'cNigeria', Actual: ctr.cNigeria, Expected: 'Nigeria'},
  {Name: 'cNorthKorea', Actual: ctr.cNorthKorea, Expected: 'North Korea'},
  {Name: 'cNorthMacedonia', Actual: ctr.cNorthMacedonia, Expected: 'North Macedonia'},
  {Name: 'cNorway', Actual: ctr.cNorway, Expected: 'Norway'},
  {Name: 'cOman', Actual: ctr.cOman, Expected: 'Oman'},
  {Name: 'cPakistan', Actual: ctr.cPakistan, Expected: 'Pakistan'},
  {Name: 'cPalau', Actual: ctr.cPalau, Expected: 'Palau'},
  {Name: 'cPalestine', Actual: ctr.cPalestine, Expected: 'Palestine'},
  {Name: 'cPanama', Actual: ctr.cPanama, Expected: 'Panama'},
  {Name: 'cPapuaNewGuinea', Actual: ctr.cPapuaNewGuinea, Expected: 'Papua New Guinea'},
  {Name: 'cParaguay', Actual: ctr.cParaguay, Expected: 'Paraguay'},
  {Name: 'cPeru', Actual: ctr.cPeru, Expected: 'Peru'},
  {Name: 'cPhilippines', Actual: ctr.cPhilippines, Expected: 'Philippines'},
  {Name: 'cPoland', Actual: ctr.cPoland, Expected: 'Poland'},
  {Name: 'cPortugal', Actual: ctr.cPortugal, Expected: 'Portugal'},
  {Name: 'cPrincipe', Actual: ctr.cPrincipe, Expected: 'Principe'},
  {Name: 'cQatar', Actual: ctr.cQatar, Expected: 'Qatar'},
  {Name: 'cRomania', Actual: ctr.cRomania, Expected: 'Romania'},
  {Name: 'cRussia', Actual: ctr.cRussia, Expected: 'Russia'},
  {Name: 'cRwanda', Actual: ctr.cRwanda, Expected: 'Rwanda'},
  {Name: 'cSaintKitts', Actual: ctr.cSaintKitts, Expected: 'Saint Kitts'},
  {Name: 'cSaintLucia', Actual: ctr.cSaintLucia, Expected: 'Saint Lucia'},
  {Name: 'cSaintVincent', Actual: ctr.cSaintVincent, Expected: 'Saint Vincent'},
  {Name: 'cSomoa', Actual: ctr.cSomoa, Expected: 'Somoa'},
  {Name: 'cSanMarino', Actual: ctr.cSanMarino, Expected: 'San Marino'},
  {Name: 'cSaoTome', Actual: ctr.cSaoTome, Expected: 'Sao Tome'},
  {Name: 'cSaudiArabia', Actual: ctr.cSaudiArabia, Expected: 'Saudi Arabia'},
  {Name: 'cSenegal', Actual: ctr.cSenegal, Expected: 'Senegal'},
  {Name: 'cSerbia', Actual: ctr.cSerbia, Expected: 'Serbia'},
  {Name: 'cSeychelles', Actual: ctr.cSeychelles, Expected: 'Seychelles'},
  {Name: 'cSierraLeone', Actual: ctr.cSierraLeone, Expected: 'Sierra Leone'},
  {Name: 'cSingapore', Actual: ctr.cSingapore, Expected: 'Singapore'},
  {Name: 'cSlovakia', Actual: ctr.cSlovakia, Expected: 'Slovakia'},
  {Name: 'cSlovenia', Actual: ctr.cSlovenia, Expected: 'Slovenia'},
  {Name: 'cSolomonIslands', Actual: ctr.cSolomonIslands, Expected: 'Solomon Islands'},
  {Name: 'cSomalia', Actual: ctr.cSomalia, Expected: 'Somalia'},
  {Name: 'cSouthAfrica', Actual: ctr.cSouthAfrica, Expected: 'South Africa'},
  {Name: 'cSouthKorea', Actual: ctr.cSouthKorea, Expected: 'South Korea'},
  {Name: 'cSouthSudan', Actual: ctr.cSouthSudan, Expected: 'South Sudan'},
  {Name: 'cSpain', Actual: ctr.cSpain, Expected: 'Spain'},
  {Name: 'cSriLanka', Actual: ctr.cSriLanka, Expected: 'Sri Lanka'},
  {Name: 'cSudan', Actual: ctr.cSudan, Expected: 'Sudan'},
  {Name: 'cSuriname', Actual: ctr.cSuriname, Expected: 'Suriname'},
  {Name: 'cSweden', Actual: ctr.cSweden, Expected: 'Sweden'},
  {Name: 'cSwitzerland', Actual: ctr.cSwitzerland, Expected: 'Switzerland'},
  {Name: 'cSyria', Actual: ctr.cSyria, Expected: 'Syria'},
  {Name: 'cTajikistan', Actual: ctr.cTajikistan, Expected: 'Tajikistan'},
  {Name: 'cTanzania', Actual: ctr.cTanzania, Expected: 'Tanzania'},
  {Name: 'cThailand', Actual: ctr.cThailand, Expected: 'Thailand'},
  {Name: 'cTimorLeste', Actual: ctr.cTimorLeste, Expected: 'Timor-Leste'},
  {Name: 'cTogo', Actual: ctr.cTogo, Expected: 'Togo'},
  {Name: 'cTonga', Actual: ctr.cTonga, Expected: 'Tonga'},
  {Name: 'cTrinidadAndTabago', Actual: ctr.cTrinidadAndTabago, Expected: 'Trinidad and Tabago'},
  {Name: 'cTunisia', Actual: ctr.cTunisia, Expected: 'Tunisia'},
  {Name: 'cTurkey', Actual: ctr.cTurkey, Expected: 'Turkey'},
  {Name: 'cTurkmenistan', Actual: ctr.cTurkmenistan, Expected: 'Turkmenistan'},
  {Name: 'cTuvalu', Actual: ctr.cTuvalu, Expected: 'Tuvalu'},
  {Name: 'cUganda', Actual: ctr.cUganda, Expected: 'Uganda'},
  {Name: 'cUkraine', Actual: ctr.cUkraine, Expected: 'Ukraine'},
  {Name: 'cUnitedArabEmirates', Actual: ctr.cUnitedArabEmirates, Expected: 'United Arab Emirates'},
  {Name: 'cUnitedKingdom', Actual: ctr.cUnitedKingdom, Expected: 'United Kingdom'},
  {Name: 'cUnitedStatesOfAmerica', Actual: ctr.cUnitedStatesOfAmerica, Expected: 'United States of America'},
  {Name: 'cUruguay', Actual: ctr.cUruguay, Expected: 'Uruguay'},
  {Name: 'cUzbekistan', Actual: ctr.cUzbekistan, Expected: 'Uzbekistan'},
  {Name: 'cVanuatu', Actual: ctr.cVanuatu, Expected: 'Vanuatu'},
  {Name: 'cVenezuela', Actual: ctr.cVenezuela, Expected: 'Venezuela'},
  {Name: 'cVietnam', Actual: ctr.cVietnam, Expected: 'Vietnam'},
  {Name: 'cYemen', Actual: ctr.cYemen, Expected: 'Yemen'},
  {Name: 'cZambia', Actual: ctr.cZambia, Expected: 'Zambia'},
  {Name: 'cZimbabwe', Actual: ctr.cZimbabwe, Expected: 'Zimbabwe'}
];
