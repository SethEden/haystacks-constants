/**
 * @file state.constants.js
 * @module state.constants
 * @description Contains constants for all of the states for different countries.
 * @requires module:basic.constants
 * @requires module:color.constants
 * @requires module:country.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2024/10/03
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants.js';
import * as clr from './color.constants.js';
import * as ctr from './country.constants.js';
import * as gen from './generic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';
import * as wrd from './word.constants.js';

export const calabama = phn.cala + bas.cba + bas.cma; // alabama
export const cAlabama = phn.cAla + bas.cba + bas.cma; // Alabama
export const cALABAMA = phn.cALA + bas.cBA + bas.cMA; // ALABAMA
export const calaska = phn.cala + bas.csk + bas.ca; // alaska
export const cAlaska = phn.cAla + bas.csk + bas.ca; // Alaska
export const cALASKA = phn.cALA + bas.cSK + bas.cA; // ALASKA
export const carizona = phn.cari + bas.czo + bas.cna; // arizona
export const cArizona = phn.cAri + bas.czo + bas.cna; // Arizona
export const cARIZONA = phn.cARI + bas.cZO + bas.cNA; // ARIZONA
export const carkansas = phn.cark + phn.cans + bas.cas; // arkansas
export const cArkansas = phn.cArk + phn.cans + bas.cas; // Arkansas
export const cARKANSAS = phn.cARK + phn.cANS + bas.cAS; // ARKANSAS
export const ccalifornia = phn.ccal + bas.cif + phn.corn + bas.cia; // california
export const cCalifornia = phn.cCal + bas.cif + phn.corn + bas.cia; // California
export const cCALIFORNIA = phn.cCAL + bas.cIF + phn.cORN + bas.cIA; // CALIFORNIA
export const ccolorado = wrd.ccolor + phn.cado; // colorado
export const cColorado = wrd.cColor + phn.cado; // Colorado
export const cCOLORADO = phn.cCOL + bas.cOR + phn.cADO; // COLORADO
export const cconnecticut = wrd.cconnect + bas.cic + bas.cut; // connecticut
export const cConnecticut = wrd.cConnect + bas.cic + bas.cut; // Connecticut
export const cCONNECTICUT = gen.cCON + bas.cNE + bas.cCT + bas.cIC + bas.cUT; // CONNECTICUT
export const cdelaware = phn.cdel + bas.caw + phn.care; // delaware
export const cDelaware = phn.cDel + bas.caw + phn.care; // Delaware
export const cDELAWARE = phn.cDEL + bas.cAW + phn.cARE; // DELAWARE
export const cflorida = bas.cfl + phn.cori + bas.cda; // florida
export const cFlorida = bas.cFl + phn.cori + bas.cda; // Florida
export const cFLORIDA = bas.cFL + phn.cORI + bas.cDA; // FLORIDA
export const cgeorgia = ctr.cgeorgia; // georgia
export const cGeorgia = ctr.cGeorgia; // Georgia
export const cGEORGIA = ctr.cGEORGIA; // GEORGIA
export const chawaii = bas.cha + bas.cwa + bas.cii; // hawaii
export const cHawaii = bas.cHa + bas.cwa + bas.cii; // Hawaii
export const cHAWAII = bas.cHA + bas.cWA + bas.cII; // HAWAII
export const cidaho = bas.cid + bas.cah + bas.co; // idaho
export const cIdaho = bas.cId + bas.cah + bas.co; // Idaho
export const cIDAHO = bas.cID + bas.cAH + bas.cO; // IDAHO
export const cillinois = phn.cill + phn.cino + bas.cis; // illinois
export const cIllinois = phn.cIll + phn.cino + bas.cis; // Illinois
export const cILLINOIS = phn.cILL + phn.cINO + bas.cIS; // ILLINOIS
export const cindiana = ctr.cindia + bas.cna; // indiana
export const cIndiana = wrd.cIndian + bas.ca; // Indiana
export const cINDIANA = ctr.cINDIA + bas.cNA; // INDIANA
export const ciowa = bas.cio + bas.cwa; // iowa
export const cIowa = bas.cIo + bas.cwa; // Iowa
export const cIOWA = bas.cIO + bas.cWA; // IOWA
export const ckansas = bas.cka + bas.cns + bas.cas; // kansas
export const cKansas = bas.cKa + bas.cns + bas.cas; // Kansas
export const cKANSAS = bas.cKA + bas.cNS + bas.cAS; // KANSAS
export const ckentucky = bas.cke + bas.cnt + bas.cuc + bas.cky; // kentucky
export const cKentucky = bas.cKe + bas.cnt + bas.cuc + bas.cky; // Kentucky
export const cKENTUCKY = bas.cKE + bas.cNT + bas.cUC + bas.cKY; // KENTUCKY
export const clouisiana = bas.clo + bas.cui + phn.csia + bas.cna; // louisiana
export const cLouisiana = bas.cLo + bas.cui + phn.csia + bas.cna; // Louisiana
export const cLOUISIANA = bas.cLO + bas.cUI + phn.cSIA + bas.cNA; // LOUISIANA
export const cmaine = wrd.cmain + bas.ce; // maine
export const cMaine = wrd.cMain + bas.ce; // Maine
export const cMAINE = bas.cMA + phn.cINE; // MAINE
export const cmaryland = phn.cmary + phn.clan + bas.cd; // maryland
export const cMaryland = phn.cMary + phn.clan + bas.cd; // Maryland
export const cMARYLAND = phn.cMARY + phn.cLAN + bas.cD; // MARYLAND
export const cmassachusetts = phn.cmas + bas.csa + bas.cch + wrd.cuse + bas.ctt + bas.cs; // massachusetts
export const cMassachusetts = phn.cMas + bas.csa + bas.cch + wrd.cuse + bas.ctt + bas.cs; // Massachusetts
export const cMASSACHUSETTS = phn.cMAS + bas.cSA + bas.cCH + bas.cUS + bas.cET + bas.cTS; // MASSACHUSETTS
export const cmichigan = bas.camai + bas.cch + bas.cig + bas.can; // michigan
export const cMichigan = bas.cMi + bas.cch + bas.cig + bas.can; // Michigan
export const cMICHIGAN = bas.cMI + bas.cCH + bas.cIG + bas.cAN; // MICHIGAN
export const cminnesota = gen.cmin + phn.cnes + bas.cot + bas.ca; // minnesota
export const cMinnesota = gen.cMin + phn.cnes + bas.cot + bas.ca; // Minnesota
export const cMINNESOTA = gen.cMIN + phn.cNES + bas.cOT + bas.cA; // MINNESOTA
export const cmississippi = wrd.cmiss + phn.ciss + bas.cip + bas.cpi; // mississippi
export const cMississippi = wrd.cMiss + phn.ciss + bas.cip + bas.cpi; // Mississippi
export const cMISSISSIPPI = phn.cMIS + phn.cSIS + bas.cSI + bas.cPP + bas.cI; // MISSISSIPPI
export const cmissouri = wrd.cmiss + phn.cour + bas.ci; // missouri
export const cMissouri = wrd.cMiss + phn.cour + bas.ci; // Missouri
export const cMISSOURI = phn.cMIS + bas.cSO + gen.cURI; // MISSOURI
export const cmontana = phn.cmon + clr.ctan + bas.ca; // montana
export const cMontana = phn.cMon + clr.ctan + bas.ca; // Montana
export const cMONTANA = phn.cMON + phn.cTAN + bas.cA; // MONTANA
export const cnebraska = bas.cne + phn.cbra + bas.csk + bas.ca; // nebraska
export const cNebraska = bas.cNe + phn.cbra + bas.csk + bas.ca; // Nebraska
export const cNEBRASKA = bas.cNE + phn.cBRA + bas.cSK + bas.cA; // NEBRASKA
export const cnevada = bas.cne + bas.cva + bas.cda; // nevada
export const cNevada = bas.cNe + bas.cva + bas.cda; // Nevada
export const cNEVADA = bas.cNE + bas.cVA + bas.cDA; // NEVADA
export const cnew_hampshire = wrd.cnew + bas.cSpace + wrd.cham + bas.cps + phn.chire; // new hampshire
export const cNewHampshire = wrd.cNew + wrd.cHam + bas.cps + phn.chire; // NewHampshire
export const cNew_Hampshire = wrd.cNew + bas.cSpace + wrd.cHam + bas.cps + phn.chire; // New Hampshire
export const cNEW_HAMPSHIRE = wrd.cNEW + bas.cSpace + bas.cHA + bas.cMP + bas.cSH + phn.cIRE; // NEW HAMPSHIRE
export const cnew_jersey = wrd.cnew + bas.cSpace + bas.cje + phn.crse + bas.cy; // new jersey
export const cNewJersey = wrd.cNew + bas.cJe + phn.crse + bas.cy; // NewJersey
export const cNew_Jersey = wrd.cNew + bas.cSpace + bas.cJe + phn.crse + bas.cy; // New Jersey
export const cNEW_JERSEY = wrd.cNEW + bas.cSpace + bas.cJE + phn.cRSE + bas.cY; // NEW JERSEY
export const cnew_mexico = wrd.cnew + bas.cSpace + ctr.cmexico; // new mexico
export const cNewMexico = wrd.cNew + ctr.cMexico; // NewMexico
export const cNew_Mexico = wrd.cNew + bas.cSpace + ctr.cMexico; // New Mexico
export const cNEW_MEXICO = wrd.cNEW + bas.cSpace + ctr.cMEXICO; // NEW MEXICO
export const cnew_york = wrd.cnew + bas.cSpace + bas.cyo + bas.crk; // new york
export const cNewYork = wrd.cNew + wrd.cYork; // NewYork
export const cNew_York = wrd.cNew + bas.cSpace + wrd.cYork; // New York
export const cNEW_YORK = wrd.cNEW + bas.cSpace + bas.cYO + bas.cRK; // NEW YORK
export const cnorth_carolina = bas.cno + phn.crth + bas.cSpace + phn.ccar + phn.colin + bas.ca; // north carolina
export const cNorthCarolina = bas.cNo + phn.crth + phn.cCar + phn.colin + bas.ca; // NorthCarolina
export const cNorth_Carolina = bas.cNo + phn.crth + bas.cSpace + phn.cCar + phn.colin + bas.ca; // North Carolina
export const cNORTH_CAROLINA = bas.cNO + phn.cRTH + bas.cSpace + phn.cCAR + phn.cOLIN + bas.cA; // NORTH CAROLINA
export const cnorth_dakota = bas.cno + phn.crth + bas.cSpace + bas.cda + bas.cko + bas.cta; // north dakota
export const cNorthDakota = bas.cNo + phn.crth + bas.cDa + bas.cko + bas.cta; // NorthDakota
export const cNorth_Dakota = bas.cNo + phn.crth + bas.cSpace + bas.cDa + bas.cko + bas.cta; // North Dakota
export const cNORTH_DAKOTA = bas.cNO + phn.cRTH + bas.cSpace + bas.cDA + bas.cKO + bas.cTA; // NORTH DAKOTA
export const cohio = bas.coh + bas.cio; // ohio
export const cOhio = bas.cOh + bas.cio; // Ohio
export const cOHIO = bas.cOH + bas.cIO; // OHIO
export const coklahoma = bas.cok + bas.cla + bas.cho + bas.cma; // oklahoma
export const cOklahoma = bas.cOk + bas.cla + bas.cho + bas.cma; // Oklahoma
export const cOKLAHOMA = bas.cOK + bas.cLA + bas.cHO + bas.cMA; // OKLAHOMA
export const coregon = phn.core + phn.cgon; // oregon
export const cOregon = phn.cOre + phn.cgon; // Oregon
export const cOREGON = phn.cORE + phn.cGON; // OREGON
export const cpennsylvania = wrd.cpen + bas.cns + bas.cyl + wrd.cvan + bas.cia; // pennsylvania
export const cPennsylvania = wrd.cPen + bas.cns + bas.cyl + wrd.cvan + bas.cia; // Pennsylvania
export const cPENNSYLVANIA = bas.cPE + bas.cNN + bas.cSY + bas.cLV + phn.cANIA; // PENNSYLVANIA
export const crhode_island = gen.crho + bas.cde + bas.cSpace + bas.cis + phn.clan + bas.cd; // rhode island
export const cRhodeIsland = gen.cRho + bas.cde + bas.cIs + phn.clan + bas.cd; // RhodeIsland
export const cRhode_Island = gen.cRho + bas.cde + bas.cSpace + bas.cIs + phn.clan + bas.cd; // Rhode Island
export const cRHODE_ISLAND = gen.cRHO + bas.cDE + bas.cSpace + bas.cIS + phn.cLAN + bas.cD; // RHODE ISLAND
export const csouth_carolina = bas.cso + phn.cuth + bas.cSpace + phn.ccar + phn.colin + bas.ca; // south carolina
export const cSouthCarolina = bas.cSo + phn.cuth + phn.cCar + phn.colin + bas.ca; // SouthCarolina
export const cSouth_Carolina = bas.cSo + phn.cuth + bas.cSpace + phn.cCar + phn.colin + bas.ca; // South Carolina
export const cSOUTH_CAROLINA = bas.cSO + phn.cUTH + bas.cSpace + phn.cCAR + phn.cOLIN + bas.cA; // SOUTH CAROLINA
export const csouth_dakota = bas.cso + phn.cuth + bas.cSpace + bas.cda + bas.cko + bas.cta; // south dakota
export const cSouthDakota = bas.cSo + phn.cuth + bas.cDa + bas.cko + bas.cta; // SouthDakota
export const cSouth_Dakota = bas.cSo + phn.cuth + bas.cSpace + bas.cDa + bas.cko + bas.cta; // South Dakota
export const cSOUTH_DAKOTA = bas.cSO + phn.cUTH + bas.cSpace + bas.cDA + bas.cKO + bas.cTA; // SOUTH DAKOTA
export const ctennessee = num.cten + phn.cness + bas.cee; // tennessee
export const cTennessee = num.cTen + phn.cness + bas.cee; // Tennessee
export const cTENNESSEE = num.cTEN + phn.cNESS + bas.cEE; // TENNESSEE
export const ctexas = bas.cte + bas.cxa + bas.cs; // texas
export const cTexas = bas.cTe + bas.cxa + bas.cs; // Texas
export const cTEXAS = bas.cTE + bas.cXA + bas.cS; // TEXAS
export const cutah = bas.cut + bas.cah; // utah
export const cUtah = bas.cUt + bas.cah; // Utah
export const cUTAH = bas.cUT + bas.cAH; // UTAH
export const cvermont = phn.cver + phn.cmon + bas.ct; // vermont
export const cVermont = phn.cVer + phn.cmon + bas.ct; // Vermont
export const cVERMONT = phn.cVER + phn.cMON + bas.cT; // VERMONT
export const cvirginia = bas.cvi + bas.crg + phn.cini + bas.ca; // virginia
export const cVirginia = bas.cVi + bas.crg + phn.cini + bas.ca; // Virginia
export const cVIRGINIA = bas.cVI + bas.cRG + phn.cINI + bas.cA; // VIRGINIA
export const cwashington = wrd.cwas + phn.ching + phn.cton; // washington
export const cWashington = wrd.cWas + phn.ching + phn.cton; // Washington
export const cWASHINGTON = bas.cWA + bas.cSH + phn.cING + phn.cTON; // WASHINGTON
export const cwest_virginia = wrd.cwest + bas.cSpace + bas.cvi + bas.crg + phn.cini + bas.ca; // west virginia
export const cWestVirginia = wrd.cWest + bas.cVi + bas.crg + phn.cini + bas.ca; // WestVirginia
export const cWest_Virginia = wrd.cWest + bas.cSpace + bas.cVi + bas.crg + phn.cini + bas.ca; // West Virginia
export const cWEST_VIRGINIA = bas.cWE + bas.cST + bas.cSpace + bas.cVI + bas.cRG + phn.cINI + bas.cA; // WEST VIRGINIA
export const cwisconsin = bas.cwi + bas.csc + bas.con + wrd.csin; // wisconsin
export const cWisconsin = bas.cWi + bas.csc + bas.con + wrd.csin; // Wisconsin
export const cWISCONSIN = bas.cWI + bas.cSC + bas.cON + bas.cSI + bas.cN; // WISCONSIN
export const cwyoming = bas.cwy + bas.com + phn.cing; // wyoming
export const cWyoming = bas.cWy + bas.com + phn.cing; // Wyoming
export const cWYOMING = bas.cWY + bas.cOM + phn.cING; // WYOMING