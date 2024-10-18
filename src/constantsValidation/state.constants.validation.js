/**
 * @file state.constants.validation.js
 * @module state.constants.validation
 * @description Contains all validation for constants for all of the states for different countries.
 * @requires module:state.constants
 * @author Seth Hollingsead
 * @date 2022/03/18
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as stt from '../constants/state.constants.js';

/**
 * @function stateConstantsValidation
 * @description Initializes the state constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2024/10/03
 */
export const stateConstantsValidation = [  
  {Name: 'calabama', Actual: stt.calabama, Expected: 'alabama'},
  {Name: 'cAlabama', Actual: stt.cAlabama, Expected: 'Alabama'},
  {Name: 'cALABAMA', Actual: stt.cALABAMA, Expected: 'ALABAMA'},
  {Name: 'calaska', Actual: stt.calaska, Expected: 'alaska'},
  {Name: 'cAlaska', Actual: stt.cAlaska, Expected: 'Alaska'},
  {Name: 'cALASKA', Actual: stt.cALASKA, Expected: 'ALASKA'},
  {Name: 'carizona', Actual: stt.carizona, Expected: 'arizona'},
  {Name: 'cArizona', Actual: stt.cArizona, Expected: 'Arizona'},
  {Name: 'cARIZONA', Actual: stt.cARIZONA, Expected: 'ARIZONA'},
  {Name: 'carkansas', Actual: stt.carkansas, Expected: 'arkansas'},
  {Name: 'cArkansas', Actual: stt.cArkansas, Expected: 'Arkansas'},
  {Name: 'cARKANSAS', Actual: stt.cARKANSAS, Expected: 'ARKANSAS'},
  {Name: 'ccalifornia', Actual: stt.ccalifornia, Expected: 'california'},
  {Name: 'cCalifornia', Actual: stt.cCalifornia, Expected: 'California'},
  {Name: 'cCALIFORNIA', Actual: stt.cCALIFORNIA, Expected: 'CALIFORNIA'},
  {Name: 'ccolorado', Actual: stt.ccolorado, Expected: 'colorado'},
  {Name: 'cColorado', Actual: stt.cColorado, Expected: 'Colorado'},
  {Name: 'cCOLORADO', Actual: stt.cCOLORADO, Expected: 'COLORADO'},
  {Name: 'cconnecticut', Actual: stt.cconnecticut, Expected: 'connecticut'},
  {Name: 'cConnecticut', Actual: stt.cConnecticut, Expected: 'Connecticut'},
  {Name: 'cCONNECTICUT', Actual: stt.cCONNECTICUT, Expected: 'CONNECTICUT'},
  {Name: 'cdelaware', Actual: stt.cdelaware, Expected: 'delaware'},
  {Name: 'cDelaware', Actual: stt.cDelaware, Expected: 'Delaware'},
  {Name: 'cDELAWARE', Actual: stt.cDELAWARE, Expected: 'DELAWARE'},
  {Name: 'cflorida', Actual: stt.cflorida, Expected: 'florida'},
  {Name: 'cFlorida', Actual: stt.cFlorida, Expected: 'Florida'},
  {Name: 'cFLORIDA', Actual: stt.cFLORIDA, Expected: 'FLORIDA'},
  {Name: 'cgeorgia', Actual: stt.cgeorgia, Expected: 'georgia'},
  {Name: 'cGeorgia', Actual: stt.cGeorgia, Expected: 'Georgia'},
  {Name: 'cGEORGIA', Actual: stt.cGEORGIA, Expected: 'GEORGIA'},
  {Name: 'chawaii', Actual: stt.chawaii, Expected: 'hawaii'},
  {Name: 'cHawaii', Actual: stt.cHawaii, Expected: 'Hawaii'},
  {Name: 'cHAWAII', Actual: stt.cHAWAII, Expected: 'HAWAII'},
  {Name: 'cidaho', Actual: stt.cidaho, Expected: 'idaho'},
  {Name: 'cIdaho', Actual: stt.cIdaho, Expected: 'Idaho'},
  {Name: 'cIDAHO', Actual: stt.cIDAHO, Expected: 'IDAHO'},
  {Name: 'cillinois', Actual: stt.cillinois, Expected: 'illinois'},
  {Name: 'cIllinois', Actual: stt.cIllinois, Expected: 'Illinois'},
  {Name: 'cILLINOIS', Actual: stt.cILLINOIS, Expected: 'ILLINOIS'},
  {Name: 'cindiana', Actual: stt.cindiana, Expected: 'indiana'},
  {Name: 'cIndiana', Actual: stt.cIndiana, Expected: 'Indiana'},
  {Name: 'cINDIANA', Actual: stt.cINDIANA, Expected: 'INDIANA'},
  {Name: 'ciowa', Actual: stt.ciowa, Expected: 'iowa'},
  {Name: 'cIowa', Actual: stt.cIowa, Expected: 'Iowa'},
  {Name: 'cIOWA', Actual: stt.cIOWA, Expected: 'IOWA'},
  {Name: 'ckansas', Actual: stt.ckansas, Expected: 'kansas'},
  {Name: 'cKansas', Actual: stt.cKansas, Expected: 'Kansas'},
  {Name: 'cKANSAS', Actual: stt.cKANSAS, Expected: 'KANSAS'},
  {Name: 'ckentucky', Actual: stt.ckentucky, Expected: 'kentucky'},
  {Name: 'cKentucky', Actual: stt.cKentucky, Expected: 'Kentucky'},
  {Name: 'cKENTUCKY', Actual: stt.cKENTUCKY, Expected: 'KENTUCKY'},
  {Name: 'clouisiana', Actual: stt.clouisiana, Expected: 'louisiana'},
  {Name: 'cLouisiana', Actual: stt.cLouisiana, Expected: 'Louisiana'},
  {Name: 'cLOUISIANA', Actual: stt.cLOUISIANA, Expected: 'LOUISIANA'},
  {Name: 'cmaine', Actual: stt.cmaine, Expected: 'maine'},
  {Name: 'cMaine', Actual: stt.cMaine, Expected: 'Maine'},
  {Name: 'cMAINE', Actual: stt.cMAINE, Expected: 'MAINE'},
  {Name: 'cmaryland', Actual: stt.cmaryland, Expected: 'maryland'},
  {Name: 'cMaryland', Actual: stt.cMaryland, Expected: 'Maryland'},
  {Name: 'cMARYLAND', Actual: stt.cMARYLAND, Expected: 'MARYLAND'},
  {Name: 'cmassachusetts', Actual: stt.cmassachusetts, Expected: 'massachusetts'},
  {Name: 'cMassachusetts', Actual: stt.cMassachusetts, Expected: 'Massachusetts'},
  {Name: 'cMASSACHUSETTS', Actual: stt.cMASSACHUSETTS, Expected: 'MASSACHUSETTS'},
  {Name: 'cmichigan', Actual: stt.cmichigan, Expected: 'michigan'},
  {Name: 'cMichigan', Actual: stt.cMichigan, Expected: 'Michigan'},
  {Name: 'cMICHIGAN', Actual: stt.cMICHIGAN, Expected: 'MICHIGAN'},
  {Name: 'cminnesota', Actual: stt.cminnesota, Expected: 'minnesota'},
  {Name: 'cMinnesota', Actual: stt.cMinnesota, Expected: 'Minnesota'},
  {Name: 'cMINNESOTA', Actual: stt.cMINNESOTA, Expected: 'MINNESOTA'},
  {Name: 'cmississippi', Actual: stt.cmississippi, Expected: 'mississippi'},
  {Name: 'cMississippi', Actual: stt.cMississippi, Expected: 'Mississippi'},
  {Name: 'cMISSISSIPPI', Actual: stt.cMISSISSIPPI, Expected: 'MISSISSIPPI'},
  {Name: 'cmissouri', Actual: stt.cmissouri, Expected: 'missouri'},
  {Name: 'cMissouri', Actual: stt.cMissouri, Expected: 'Missouri'},
  {Name: 'cMISSOURI', Actual: stt.cMISSOURI, Expected: 'MISSOURI'},
  {Name: 'cmontana', Actual: stt.cmontana, Expected: 'montana'},
  {Name: 'cMontana', Actual: stt.cMontana, Expected: 'Montana'},
  {Name: 'cMONTANA', Actual: stt.cMONTANA, Expected: 'MONTANA'},
  {Name: 'cnebraska', Actual: stt.cnebraska, Expected: 'nebraska'},
  {Name: 'cNebraska', Actual: stt.cNebraska, Expected: 'Nebraska'},
  {Name: 'cNEBRASKA', Actual: stt.cNEBRASKA, Expected: 'NEBRASKA'},
  {Name: 'cnevada', Actual: stt.cnevada, Expected: 'nevada'},
  {Name: 'cNevada', Actual: stt.cNevada, Expected: 'Nevada'},
  {Name: 'cNEVADA', Actual: stt.cNEVADA, Expected: 'NEVADA'},
  {Name: 'cnew_hampshire', Actual: stt.cnew_hampshire, Expected: 'new hampshire'},
  {Name: 'cNewHampshire', Actual: stt.cNewHampshire, Expected: 'NewHampshire'},
  {Name: 'cNew_Hampshire', Actual: stt.cNew_Hampshire, Expected: 'New Hampshire'},
  {Name: 'cNEW_HAMPSHIRE', Actual: stt.cNEW_HAMPSHIRE, Expected: 'NEW HAMPSHIRE'},
  {Name: 'cnew_jersey', Actual: stt.cnew_jersey, Expected: 'new jersey'},
  {Name: 'cNewJersey', Actual: stt.cNewJersey, Expected: 'NewJersey'},
  {Name: 'cNew_Jersey', Actual: stt.cNew_Jersey, Expected: 'New Jersey'},
  {Name: 'cNEW_JERSEY', Actual: stt.cNEW_JERSEY, Expected: 'NEW JERSEY'},
  {Name: 'cnew_mexico', Actual: stt.cnew_mexico, Expected: 'new mexico'},
  {Name: 'cNewMexico', Actual: stt.cNewMexico, Expected: 'NewMexico'},
  {Name: 'cNew_Mexico', Actual: stt.cNew_Mexico, Expected: 'New Mexico'},
  {Name: 'cNEW_MEXICO', Actual: stt.cNEW_MEXICO, Expected: 'NEW MEXICO'},
  {Name: 'cnew_york', Actual: stt.cnew_york, Expected: 'new york'},
  {Name: 'cNewYork', Actual: stt.cNewYork, Expected: 'NewYork'},
  {Name: 'cNew_York', Actual: stt.cNew_York, Expected: 'New York'},
  {Name: 'cNEW_YORK', Actual: stt.cNEW_YORK, Expected: 'NEW YORK'},
  {Name: 'cnorth_carolina', Actual: stt.cnorth_carolina, Expected: 'north carolina'},
  {Name: 'cNorthCarolina', Actual: stt.cNorthCarolina, Expected: 'NorthCarolina'},
  {Name: 'cNorth_Carolina', Actual: stt.cNorth_Carolina, Expected: 'North Carolina'},
  {Name: 'cNORTH_CAROLINA', Actual: stt.cNORTH_CAROLINA, Expected: 'NORTH CAROLINA'},
  {Name: 'cnorth_dakota', Actual: stt.cnorth_dakota, Expected: 'north dakota'},
  {Name: 'cNorthDakota', Actual: stt.cNorthDakota, Expected: 'NorthDakota'},
  {Name: 'cNorth_Dakota', Actual: stt.cNorth_Dakota, Expected: 'North Dakota'},
  {Name: 'cNORTH_DAKOTA', Actual: stt.cNORTH_DAKOTA, Expected: 'NORTH DAKOTA'},
  {Name: 'cohio', Actual: stt.cohio, Expected: 'ohio'},
  {Name: 'cOhio', Actual: stt.cOhio, Expected: 'Ohio'},
  {Name: 'cOHIO', Actual: stt.cOHIO, Expected: 'OHIO'},
  {Name: 'coklahoma', Actual: stt.coklahoma, Expected: 'oklahoma'},
  {Name: 'cOklahoma', Actual: stt.cOklahoma, Expected: 'Oklahoma'},
  {Name: 'cOKLAHOMA', Actual: stt.cOKLAHOMA, Expected: 'OKLAHOMA'},
  {Name: 'coregon', Actual: stt.coregon, Expected: 'oregon'},
  {Name: 'cOregon', Actual: stt.cOregon, Expected: 'Oregon'},
  {Name: 'cOREGON', Actual: stt.cOREGON, Expected: 'OREGON'},
  {Name: 'cpennsylvania', Actual: stt.cpennsylvania, Expected: 'pennsylvania'},
  {Name: 'cPennsylvania', Actual: stt.cPennsylvania, Expected: 'Pennsylvania'},
  {Name: 'cPENNSYLVANIA', Actual: stt.cPENNSYLVANIA, Expected: 'PENNSYLVANIA'},
  {Name: 'crhode_island', Actual: stt.crhode_island, Expected: 'rhode island'},
  {Name: 'cRhodeIsland', Actual: stt.cRhodeIsland, Expected: 'RhodeIsland'},
  {Name: 'cRhode_Island', Actual: stt.cRhode_Island, Expected: 'Rhode Island'},
  {Name: 'cRHODE_ISLAND', Actual: stt.cRHODE_ISLAND, Expected: 'RHODE ISLAND'},
  {Name: 'csouth_carolina', Actual: stt.csouth_carolina, Expected: 'south carolina'},
  {Name: 'cSouthCarolina', Actual: stt.cSouthCarolina, Expected: 'SouthCarolina'},
  {Name: 'cSouth_Carolina', Actual: stt.cSouth_Carolina, Expected: 'South Carolina'},
  {Name: 'cSOUTH_CAROLINA', Actual: stt.cSOUTH_CAROLINA, Expected: 'SOUTH CAROLINA'},
  {Name: 'csouth_dakota', Actual: stt.csouth_dakota, Expected: 'south dakota'},
  {Name: 'cSouthDakota', Actual: stt.cSouthDakota, Expected: 'SouthDakota'},
  {Name: 'cSouth_Dakota', Actual: stt.cSouth_Dakota, Expected: 'South Dakota'},
  {Name: 'cSOUTH_DAKOTA', Actual: stt.cSOUTH_DAKOTA, Expected: 'SOUTH DAKOTA'},
  {Name: 'ctennessee', Actual: stt.ctennessee, Expected: 'tennessee'},
  {Name: 'cTennessee', Actual: stt.cTennessee, Expected: 'Tennessee'},
  {Name: 'cTENNESSEE', Actual: stt.cTENNESSEE, Expected: 'TENNESSEE'},
  {Name: 'ctexas', Actual: stt.ctexas, Expected: 'texas'},
  {Name: 'cTexas', Actual: stt.cTexas, Expected: 'Texas'},
  {Name: 'cTEXAS', Actual: stt.cTEXAS, Expected: 'TEXAS'},
  {Name: 'cutah', Actual: stt.cutah, Expected: 'utah'},
  {Name: 'cUtah', Actual: stt.cUtah, Expected: 'Utah'},
  {Name: 'cUTAH', Actual: stt.cUTAH, Expected: 'UTAH'},
  {Name: 'cvermont', Actual: stt.cvermont, Expected: 'vermont'},
  {Name: 'cVermont', Actual: stt.cVermont, Expected: 'Vermont'},
  {Name: 'cVERMONT', Actual: stt.cVERMONT, Expected: 'VERMONT'},
  {Name: 'cvirginia', Actual: stt.cvirginia, Expected: 'virginia'},
  {Name: 'cVirginia', Actual: stt.cVirginia, Expected: 'Virginia'},
  {Name: 'cVIRGINIA', Actual: stt.cVIRGINIA, Expected: 'VIRGINIA'},
  {Name: 'cwashington', Actual: stt.cwashington, Expected: 'washington'},
  {Name: 'cWashington', Actual: stt.cWashington, Expected: 'Washington'},
  {Name: 'cWASHINGTON', Actual: stt.cWASHINGTON, Expected: 'WASHINGTON'},
  {Name: 'cwest_virginia', Actual: stt.cwest_virginia, Expected: 'west virginia'},
  {Name: 'cWestVirginia', Actual: stt.cWestVirginia, Expected: 'WestVirginia'},
  {Name: 'cWest_Virginia', Actual: stt.cWest_Virginia, Expected: 'West Virginia'},
  {Name: 'cWEST_VIRGINIA', Actual: stt.cWEST_VIRGINIA, Expected: 'WEST VIRGINIA'},
  {Name: 'cwisconsin', Actual: stt.cwisconsin, Expected: 'wisconsin'},
  {Name: 'cWisconsin', Actual: stt.cWisconsin, Expected: 'Wisconsin'},
  {Name: 'cWISCONSIN', Actual: stt.cWISCONSIN, Expected: 'WISCONSIN'},
  {Name: 'cwyoming', Actual: stt.cwyoming, Expected: 'wyoming'},
  {Name: 'cWyoming', Actual: stt.cWyoming, Expected: 'Wyoming'},
  {Name: 'cWYOMING', Actual: stt.cWYOMING, Expected: 'WYOMING'}
];
