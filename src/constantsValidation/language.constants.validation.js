/**
 * @file language.constants.validation.js
 * @module language.constants.validation
 * @description Contains all validations for named language constants.
 * @requires module:language.constants
 * @author Seth Hollingsead
 * @date 2022/03/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as lng from '../constants/language.constants.js';

/**
 * @function languageConstantsValidation
 * @description Initializes the language constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/20
 */
export const languageConstantsValidation = [
  // Languages
  {Name: 'cchinese', Actual: lng.cchinese, Expected: 'chinese'},
  {Name: 'cChinese', Actual: lng.cChinese, Expected: 'Chinese'},
  {Name: 'cCHINESE', Actual: lng.cCHINESE, Expected: 'CHINESE'},
  {Name: 'cchinesesimplified', Actual: lng.cchinesesimplified, Expected: 'chinesesimplified'},
  {Name: 'cChineseSimplified', Actual: lng.cChineseSimplified, Expected: 'ChineseSimplified'},
  {Name: 'cCHINESESIMPLIFIED', Actual: lng.cCHINESESIMPLIFIED, Expected: 'CHINESESIMPLIFIED'},
  {Name: 'cchinesetraditional', Actual: lng.cchinesetraditional, Expected: 'chinesetraditional'},
  {Name: 'cChineseTraditional', Actual: lng.cChineseTraditional, Expected: 'ChineseTraditional'},
  {Name: 'cCHINESETRADITIONAL', Actual: lng.cCHINESETRADITIONAL, Expected: 'CHINESETRADITIONAL'},
  {Name: 'cczech', Actual: lng.cczech, Expected: 'czech'},
  {Name: 'cCzech', Actual: lng.cCzech, Expected: 'Czech'},
  {Name: 'cCZECH', Actual: lng.cCZECH, Expected: 'CZECH'},
  {Name: 'cenglish', Actual: lng.cenglish, Expected: 'english'},
  {Name: 'cEnglish', Actual: lng.cEnglish, Expected: 'English'},
  {Name: 'cENGLISH', Actual: lng.cENGLISH, Expected: 'ENGLISH'},
  {Name: 'cfrench', Actual: lng.cfrench, Expected: 'french'},
  {Name: 'cFrench', Actual: lng.cFrench, Expected: 'French'},
  {Name: 'cFRENCH', Actual: lng.cFRENCH, Expected: 'FRENCH'},
  {Name: 'chungarian', Actual: lng.chungarian, Expected: 'hungarian'},
  {Name: 'cHungarian', Actual: lng.cHungarian, Expected: 'Hungarian'},
  {Name: 'cHUNGARIAN', Actual: lng.cHUNGARIAN, Expected: 'HUNGARIAN'},
  {Name: 'citalian', Actual: lng.citalian, Expected: 'italian'},
  {Name: 'cItalian', Actual: lng.cItalian, Expected: 'Italian'},
  {Name: 'cITALIAN', Actual: lng.cITALIAN, Expected: 'ITALIAN'},
  {Name: 'cjapanese', Actual: lng.cjapanese, Expected: 'japanese'},
  {Name: 'cJapanese', Actual: lng.cJapanese, Expected: 'Japanese'},
  {Name: 'cJAPANESE', Actual: lng.cJAPANESE, Expected: 'JAPANESE'},
  {Name: 'ckorean', Actual: lng.ckorean, Expected: 'korean'},
  {Name: 'cKorean', Actual: lng.cKorean, Expected: 'Korean'},
  {Name: 'cKOREAN', Actual: lng.cKOREAN, Expected: 'KOREAN'},
  {Name: 'cmiscellaneous', Actual: lng.cmiscellaneous, Expected: 'miscellaneous'},
  {Name: 'cMiscellaneous', Actual: lng.cMiscellaneous, Expected: 'Miscellaneous'},
  {Name: 'cMISCELLANEOUS', Actual: lng.cMISCELLANEOUS, Expected: 'MISCELLANEOUS'},
  {Name: 'cpolish', Actual: lng.cpolish, Expected: 'polish'},
  {Name: 'cPolish', Actual: lng.cPolish, Expected: 'Polish'},
  {Name: 'cPOLISH', Actual: lng.cPOLISH, Expected: 'POLISH'},
  {Name: 'cportuguese', Actual: lng.cportuguese, Expected: 'portuguese'},
  {Name: 'cPortuguese', Actual: lng.cPortuguese, Expected: 'Portuguese'},
  {Name: 'cPORTUGUESE', Actual: lng.cPORTUGUESE, Expected: 'PORTUGUESE'},
  {Name: 'crussian', Actual: lng.crussian, Expected: 'russian'},
  {Name: 'cRussian', Actual: lng.cRussian, Expected: 'Russian'},
  {Name: 'cRUSSIAN', Actual: lng.cRUSSIAN, Expected: 'RUSSIAN'},
  {Name: 'cspanish', Actual: lng.cspanish, Expected: 'spanish'},
  {Name: 'cSpanish', Actual: lng.cSpanish, Expected: 'Spanish'},
  {Name: 'cSPANISH', Actual: lng.cSPANISH, Expected: 'SPANISH'}
];
