/**
 * @file language.constants.js
 * @module language.constants
 * @description Contains many re-usable language constants.
 * @requires module:basic.constants
 * @requires module:country-constants
 * @requires module:phonic.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2021/11/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as ctr from './country.constants.js';
import * as phn from './phonic.constants.js';
import * as wrd from './word.constants.js';

// Languages
export const cchinese = phn.cchi + bas.cn + phn.cese; // chinese
export const cChinese = phn.cChi + bas.cn + phn.cese; // Chinese
export const cCHINESE = phn.cCHI + bas.cN + phn.cESE; // CHINESE
export const cchinesesimplified = cchinese + wrd.csimplified; // chinesesimplified
export const cChineseSimplified = cChinese + wrd.cSimplified; // ChineseSimplified
export const cCHINESESIMPLIFIED = cCHINESE + wrd.cSIMPLIFIED; // CHINESESIMPLIFIED
export const cchinesetraditional = cchinese + wrd.ctraditional; // chinesetraditional
export const cChineseTraditional = cChinese + wrd.cTraditional; // ChineseTraditional
export const cCHINESETRADITIONAL = cCHINESE + wrd.cTRADITIONAL; // CHINESETRADITIONAL
export const cczech = bas.ccz + bas.ce + bas.cch; // czech
export const cCzech = bas.cCz + bas.ce + bas.cch; // Czech
export const cCZECH = bas.cCZ + bas.cE + bas.cCH; // CZECH
export const cenglish = bas.cen + bas.cgl + phn.cish; // english
export const cEnglish = bas.cEn + bas.cgl + phn.cish; // English
export const cENGLISH = bas.cEN + bas.cGL + phn.cISH; // ENGLISH
export const cfrench = bas.cfr + bas.cen + bas.cch; // french
export const cFrench = bas.cFr + bas.cen + bas.cch; // French
export const cFRENCH = bas.cFR + bas.cEN + bas.cCH; // FRENCH
export const cgerman = bas.cge + bas.cr + wrd.cman; // german
export const cGerman = bas.cGe + bas.cr + wrd.cman; // German
export const cGERMAN = bas.cGE + bas.cR + wrd.cMAN; // GERMAN
export const chungarian = wrd.chung + bas.car + phn.cian; // hungarian
export const cHungarian = wrd.cHung + bas.car + phn.cian; // Hungarian
export const cHUNGARIAN = wrd.cHUNG + bas.cAR + phn.cIAN; // HUNGARIAN
export const citalian = bas.cit + bas.cal + phn.cian; // italian
export const cItalian = bas.cIt + bas.cal + phn.cian; // Italian
export const cITALIAN = bas.cIT + bas.cAL + phn.cIAN; // ITALIAN
export const cjapanese = ctr.cjapan + phn.cese; // japanese
export const cJapanese = ctr.cJapan + phn.cese; // Japanese
export const cJAPANESE = ctr.cJAPAN + phn.cESE; // JAPANESE
export const ckorean = bas.cko + bas.cre + bas.can; // korean
export const cKorean = bas.cKo + bas.cre + bas.can; // Korean
export const cKOREAN = bas.cKO + bas.cRE + bas.cAN; // KOREAN
export const cmiscellaneous = phn.cmis + wrd.ccell + bas.can + phn.ceous; // miscellaneous
export const cMiscellaneous = phn.cMis + wrd.ccell + bas.can + phn.ceous; // Miscellaneous
export const cMISCELLANEOUS = phn.cMIS + wrd.cCELL + bas.cAN + phn.cEOUS; // MISCELLANEOUS
export const cpolish = bas.cpo + bas.cl + phn.cish; // polish
export const cPolish = bas.cPo + bas.cl + phn.cish; // Polish
export const cPOLISH = bas.cPO + bas.cL + phn.cISH; // POLISH
export const cportuguese = wrd.cport + bas.cug + bas.cu + phn.cese; // portuguese
export const cPortuguese = wrd.cPort + bas.cug + bas.cu + phn.cese; // Portuguese
export const cPORTUGUESE = wrd.cPORT + bas.cUG + bas.cU + phn.cESE; // PORTUGUESE
export const crussian = bas.cru + bas.css + phn.cian; // russian
export const cRussian = bas.cRu + bas.css + phn.cian; // Russian
export const cRUSSIAN = bas.cRU + bas.cSS + phn.cIAN; // RUSSIAN
export const cspanish = bas.csp + bas.can + phn.cish; // spanish
export const cSpanish = bas.cSp + bas.can + phn.cish; // Spanish
export const cSPANISH = bas.cSP + bas.cAN + phn.cISH; // SPANISH
