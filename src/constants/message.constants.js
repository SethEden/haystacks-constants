/**
 * @file message.constants.js
 * @module message-constants
 * @description Contains many re-usable message constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2021/12/27
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as cfg from './configuration.constants.js'
import * as gen from './generic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';
import * as sys from './system.constants.js';
import * as wrd from './word.constants.js';

// Logging Constants
export const cBEGIN_Space = wrd.cBEGIN + bas.cSpace; // BEGIN
export const cEND_Space = wrd.cEND + bas.cSpace; // END
export const cSpaceFunction = bas.cSpace + wrd.cFunction; // Function
export const cSpaceEvent = bas.cSpace + wrd.cEvent; // Event
export const cBEGIN_Function = cBEGIN_Space + bas.cDoublePercent + cSpaceFunction; // BEGIN %% Function
export const cEND_Function = cEND_Space + bas.cDoublePercent + cSpaceFunction; // END %% Function
export const cBEGIN_Event = cBEGIN_Space + bas.cDoublePercent + cSpaceEvent; // BEGIN %% Event
export const cEND_Event = cEND_Space + bas.cDoublePercent + cSpaceEvent; // END %% Event

export const cinputData = wrd.cinput + wrd.cData; // inputData
export const cInputData = wrd.cInput + wrd.cData; // InputData
export const cinputMetaData = wrd.cinput + wrd.cMetaData; // inputMetaData
export const cInputMetaData = wrd.cInput + wrd.cMetaData; // InputMetaData
export const cinputDataIs = cinputData + sys.cSpaceIsColonSpace; // inputData is:
export const cinputsIs = wrd.cinputs + sys.cSpaceIsColonSpace; // inputs is:
export const cinputMetaDataIs = wrd.cinput + wrd.cMetaData + sys.cSpaceIsColonSpace; // inputMetaData is:
export const creturnDataIs = wrd.creturn + wrd.cData + sys.cSpaceIsColonSpace; // returnData is:
export const creturnDataTempIs = wrd.creturn + wrd.cData + wrd.cTemp + sys.cSpaceIsColonSpace; // returnDataTemp is:

// Commonly used phrases
export const cisAnInvalidValue = wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cvalue; // is an invalid value

// System Messages
export const cERROR_Colon = wrd.cERROR + bas.cColon + bas.cSpace; // ERROR:
export const cWARNING_Colon = wrd.cWARNING + bas.cColon + bas.cSpace; // WARNING:
export const cSUCCESS_Colon = wrd.cSUCCESS + bas.cColon + bas.cSpace; // SUCCESS:
// WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
export const cApplicationWarningMessage1a = wrd.cWARNING + bas.cColon + bas.cSpace + bas.cNo + bas.cSpace + gen.cDotEnv + bas.cSpace + wrd.cFile + bas.cSpace + wrd.cfound + bas.cExclamation + bas.cSpace; // WARNING: No .Env File found!
export const cApplicationWarningMessage1b = wrd.cGoing + bas.cSpace + bas.cto + bas.cSpace + wrd.cdefault + bas.cSpace + bas.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cDEVELOPMENT + bas.cSpace + wrd.cENVIRONMENT + bas.cExclamation; // Going to default to the DEVELOPMENT ENVIRONMENT!
export const cCharacterGenerationMessage1 = wrd.ctype + bas.cTo + wrd.cGenerate + sys.cSpaceIsColonSpace; // typeToGenerate is:
export const cCharacterGenerationMessage2 = sys.cGenerateA + bas.cSpace + wrd.cnumber + bas.cDot; // Generate a number.
export const cCharacterGenerationMessage3 = sys.cGenerateA + bas.cSpace + wrd.crandom + bas.cSpace + wrd.cupper + bas.cSpace + wrd.ccase + bas.cSpace + bas.cor + bas.cSpace + wrd.clower + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cletter + bas.cDot; // Generate a random upper case or lower case letter.
export const cCharacterGenerationMessage4 = sys.cGenerateA + bas.cSpace + wrd.cspecial + bas.cSpace + wrd.ccharacter + bas.cDot; // Generate a special character.
export const cCharacterGenerationMessage5 = wrd.cDEFAULT + bas.cColon + bas.cSpace + sys.cGenerateA + bas.cSpace + wrd.crandom + bas.cSpace + wrd.cupper + bas.cSpace + wrd.ccase + bas.cSpace + bas.cor + bas.cSpace + wrd.clower + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cletter + bas.cDot; // DEFAULT: Generate a random upper case or lower case letter.
export const cMathOperationsMessage1 = sys.cbigInteger + sys.cSpaceIsColonSpace; // bigInteger is:
export const cnumberOfCharactersToGenerateIs = sys.cnumberOfCharactersToGenerate + sys.cSpaceIsColonSpace; // numberOfCharactersToGenerate is:
export const cgenerateSpecialCharactersIs = sys.cgenerateSpecialCharacters + sys.cSpaceIsColonSpace; // generateSpecialCharacters is:
export const callowableSpecialCharactersIs = sys.callowableSpecialCharacters + sys.cSpaceIsColonSpace; // allowableSpecialCharacters is:
export const cspecifiedSuffixAndDomainIs = sys.cspecifiedSuffixAndDomain + sys.cSpaceIsColonSpace; // specifiedSuffixAndDomain is:
export const cfailureModeIs = sys.cfailureMode + sys.cSpaceIsColonSpace; // failureMode is:
export const cprefixIs = wrd.cprefix + sys.cSpaceIsColonSpace; // prefix is:
export const csuffixIs = wrd.csuffix + sys.cSpaceIsColonSpace; // suffix is:
export const cWithoutTheAtSymbol = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + wrd.csymbol + bas.cDot; // Without the @ symbol.
export const cWithoutThePrefix = sys.cWithoutThe + bas.cSpace + wrd.cprefix + bas.cDot; // Without the prefix.
export const cWithoutTheSuffix = sys.cWithoutThe + bas.cSpace + wrd.csuffix + bas.cDot; // Without the suffix.
export const cWithoutTheAtSymbolAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candPrefix + bas.cDot; // Without the @ and prefix.
export const cDEFAULTWithoutTheAtSymbolAndPrefix = wrd.cDEFAULT + bas.cColon + bas.cSpace + cWithoutTheAtSymbolAndPrefix // DEFAULT: Without the @ and prefix.
export const cdomainNameIs = wrd.cdomain + wrd.cName + sys.cSpaceIsColonSpace; // domainName is:
export const cnumberOfPrefixCharactersIs = wrd.cnumber + bas.cOf + wrd.cPrefix + wrd.cCharacters + sys.cSpaceIsColonSpace; // numberOfPrefixCharacters is:
export const cnumberOfSuffixCharactersIs = wrd.cnumber + bas.cOf + wrd.cSuffix + wrd.cCharacters + sys.cSpaceIsColonSpace; // numberOfSuffixCharacters is:
export const cWithoutTheDotSymbol = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + wrd.csymbol + bas.cDot; // Without the . symbol.
export const cWithoutTheAtAndDotSymbols = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + wrd.cand + bas.cSpace + bas.cDot + bas.cSpace + wrd.csymbols + bas.cDot; // Without the @ and . symbols.
export const cWithoutTheDomainName = sys.cWithoutThe + bas.cSpace + sys.cdomainSpaceName + bas.cDot; // Without the domain name.
export const cWithoutTheAtSymbolAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @ and domain name.
export const cWithoutTheDotAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the . and domain name.
export const cWithoutTheAtSymbolDotAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, . and domain name.
export const cWithoutTheDotAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candPrefix + bas.cDot; // Without the . and prefix.
export const cWithoutTheAtSymbolAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @ and suffix.
export const cWithoutTheDotAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cSpace + sys.candSuffix + bas.cDot; // Without the . and suffix.
export const cWithoutTheAtSymbolDotAndPrefix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candPrefix + bas.cDot; // Without the @, . and prefix.
export const cWithoutTheAtSymbolDotAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @, . and suffix.
export const cWithoutTheAtSymbolDotPrefixAndSuffix = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wrd.cprefix + bas.cSpace + sys.candSuffix + bas.cDot; // Without the @, ., prefix and suffix.
export const cWithoutThePrefixAndDomainName = sys.cWithoutThe + bas.cSpace + wrd.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the prefix and domain name.
export const cWithoutTheSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + wrd.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the suffix and domain name.
export const cWithoutThePrefixAndSuffix = sys.cWithoutThe + bas.cSpace + wrd.cprefix + bas.cSpace + sys.candSuffix + bas.cDot; // Without the prefix and suffix.
export const cWithoutThePrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + wrd.cprefix + bas.cComa + bas.cSpace + wrd.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the prefix, suffix and domain name.
export const cWithoutTheAtSymbolPrefixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wrd.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, prefix and domain name.
export const cWithoutTheDotPrefixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wrd.cprefix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., prefix and domain name.
export const cWithoutTheAtSymbolSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wrd.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, suffix and domain name.
export const cWithoutTheDotSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wrd.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., suffix and domain name.
export const cWithoutTheAtSymbolPrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cAt + bas.cComa + bas.cSpace + wrd.cprefix + bas.cComa + bas.cSpace + wrd.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the @, prefix, suffix and domain name.
export const cWithoutTheDotPrefixSuffixAndDomainName = sys.cWithoutThe + bas.cSpace + bas.cDot + bas.cComa + bas.cSpace + wrd.cprefix + bas.cComa + bas.cSpace + wrd.csuffix + bas.cSpace + sys.candSpaceDomainSpaceName + bas.cDot; // Without the ., prefix, suffix and domain name.
export const cWithoutThePrefixSuffixAndAtSymbol = sys.cWithoutThe + bas.cSpace + wrd.cprefix + bas.cComa + bas.cSpace + wrd.csuffix + bas.cSpace + wrd.cand + bas.cSpace + bas.cAt + bas.cDot; // Without the prefix, suffix and @.
export const cWithoutThePrefixSuffixAndDot = sys.cWithoutThe + bas.cSpace + wrd.cprefix + bas.cComa + bas.cSpace + wrd.csuffix + bas.cSpace + wrd.cand + bas.cSpace + bas.cDot + bas.cDot; // Without the prefix, suffix and ..
export const cIndexOfTheSpace = wrd.cIndex + bas.cSpace + bas.cof + bas.cSpace + wrd.cthe + bas.cSpace; // Index of the
export const cisResolvingAs = bas.cis + bas.cSpace + wrd.cresolving + bas.cSpace + bas.cas + bas.cColon + bas.cSpace; // is resolving as:
export const cparsedStringSpaceTerm = wrd.cparsed + wrd.cString + bas.cSpace + wrd.cterm; // parsedString term
export const cstring1Is = wrd.cstring + num.c1 + sys.cSpaceIsColonSpace; // string1 is:
export const cstring2Is = wrd.cstring + num.c2 + sys.cSpaceIsColonSpace; // string2 is:
export const cvariation0ValueIs = wrd.cvariation + num.c0 + bas.cSpace + wrd.cvalue + sys.cSpaceIsColonSpace; // variation0 value is:
export const cvariation1ValueIs = wrd.cvariation + num.c1 + bas.cSpace + wrd.cvalue + sys.cSpaceIsColonSpace; // variation1 value is:
export const ciValueIs = bas.ci + bas.cSpace + wrd.cvalue + sys.cSpaceIsColonSpace; // i value is:
export const cjValueIs = bas.cj + bas.cSpace + wrd.cvalue + sys.cSpaceIsColonSpace; // j value is:
export const cdeletionCostIs = wrd.cdeletion + wrd.cCost + sys.cSpaceIsColonSpace; // deletionCost is:
export const cinsertionCostIs = wrd.cinsertion + wrd.cCost + sys.cSpaceIsColonSpace; // insertionCost is:
export const csubstitutionCostIs = wrd.csubstitution + wrd.cCost + sys.cSpaceIsColonSpace; // substitutionCost is:
export const ccamelCaseWordCountIs = wrd.ccamel + wrd.cCase + wrd.cWord + wrd.cCount + sys.cSpaceIsColonSpace; // camelCaseWordCount is:
export const ccontainsAcronymIs = wrd.ccontains + wrd.cAcronym + sys.cSpaceIsColonSpace; // containsAcronym is:
export const cspacesCountIs = wrd.cspaces + wrd.cCount + sys.cSpaceIsColonSpace; // spacesCount is:
export const cperiodCountIs = wrd.cperiod + wrd.cCount + sys.cSpaceIsColonSpace; // periodCount is:
export const cdashCountIs = wrd.cdash + wrd.cCount + sys.cSpaceIsColonSpace; // dashCount is:
export const cunderscoreCountIs = wrd.cunderscore + wrd.cCount + sys.cSpaceIsColonSpace; // underscoreCount is:
export const cplusCountIs = wrd.cplus + wrd.cCount + sys.cSpaceIsColonSpace; // plusCount is:
export const cpercentCountIs = wrd.cpercent + wrd.cCount + sys.cSpaceIsColonSpace; // percentCount is:
export const cstringDeltaValueIs = wrd.cstring + gen.cDelta + bas.cSpace + wrd.cvalue + sys.cSpaceIsColonSpace; // stringDelta value is:
export const cFilenamesMatch = wrd.cFilenames + bas.cSpace + wrd.cmatch; // Filenames match
export const cFilenamesDoNotMatch = wrd.cFilenames + bas.cSpace + bas.cdo + bas.cSpace + gen.cnot + bas.cSpace + wrd.cmatch; // Filenames do not match
export const cconstantsLineIs = wrd.cconstants + bas.cSpace + wrd.cLine + sys.cSpaceIsColonSpace; // constants Line is:
export const cconstantsLineKeyIs = wrd.cconstants + bas.cSpace + wrd.cLine + wrd.cKey + sys.cSpaceIsColonSpace; // constants LineKey is:
export const cArrayElementsMatch = wrd.cArray + bas.cSpace + wrd.celements + bas.cSpace + wrd.cmatch; // Array elements match
export const cArrayElementsDoNotMatch = wrd.cArray + bas.cSpace + wrd.celements + bas.cSpace + bas.cdo + bas.cSpace + gen.cnot + bas.cSpace + wrd.cmatch; // Array elements do not match
export const clineArray2Is = wrd.cline + wrd.cArray + bas.cOpenBracket + num.c2 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // lineArray[2] is:
export const cSuggestedLineOfCodeIs = wrd.cSuggested + bas.cSpace + wrd.cline + bas.cSpace + bas.cof + bas.cSpace + wrd.ccode + sys.cSpaceIsColonSpace; // Suggested line of code is:
export const cErrorUnknownConstantFile = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cUnknown + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.cfile + bas.cDot; // ERROR: Unknown constant file.
export const cconstantsTypesKeysIs = wrd.cconstants + wrd.cTypes + wrd.cKeys + sys.cSpaceIsColonSpace; // constantsTypesKeys is:
export const cconstantTypeKeyIs = wrd.cconstant + wrd.cType + wrd.cKey + sys.cSpaceIsColonSpace; // constantTypeKey is:
export const cconstantTypeValuesIs = wrd.cconstant + wrd.cType + wrd.cValues + sys.cSpaceIsColonSpace; // constantTypeValues is:
export const cconstantsKeysIs = wrd.cconstants + wrd.cKeys + sys.cSpaceIsColonSpace; // constantsKeys is:
export const cconstantKeyIs = wrd.cconstant + wrd.cKey + sys.cSpaceIsColonSpace; // constantKey is:
export const cconstantActualValueIs = wrd.cconstant + wrd.cActual + wrd.cValue + sys.cSpaceIsColonSpace; // constantActualValue is:
export const cconstantNameIs = wrd.cconstant + wrd.cName + sys.cSpaceIsColonSpace; // constantName is:
export const cconstantValueIs = wrd.cconstant + wrd.cValue + sys.cSpaceIsColonSpace; // constantValue is:
export const cdeltaLengthIs = wrd.cdelta + wrd.cLength + sys.cSpaceIsColonSpace; // deltaLength is:
export const crecursiveSubStringIs = wrd.crecursive + wrd.cSubString + sys.cSpaceIsColonSpace; // recursiveSubString is:
export const cmaxStringLengthIs = gen.cmax + wrd.cString + wrd.cLength + sys.cSpaceIsColonSpace; // maxStringLength is:
export const cminStringLengthIs = gen.cmin + wrd.cString + wrd.cLength + sys.cSpaceIsColonSpace; // minStringLength is:
export const ccurrentMasterStringArrayElementIs = sys.ccurrentMasterStringArrayElement + sys.cSpaceIsColonSpace; // currentMasterStringArrayElement is:
export const ccValueIs = bas.cc + bas.cSpace + wrd.cvalue + sys.cSpaceIsColonSpace; // c value is:
export const cbeginningIndexIs = wrd.cbeginning + wrd.cIndex + sys.cSpaceIsColonSpace; // beginningIndex is:
export const cendingIndexIs = wrd.cending + wrd.cIndex + sys.cSpaceIsColonSpace; // endingIndex is:
export const cstringToCompareIs = wrd.cstring + wrd.cTo + wrd.cCompare + sys.cSpaceIsColonSpace; // stringToCompare is:
export const cdValueIs = bas.cd + bas.cSpace + wrd.cvalue + sys.cSpaceIsColonSpace; // d value is:
export const cdNotEqualA = bas.cd + bas.cSpace + bas.cExclamation + bas.cEqual + bas.cSpace + bas.ca; // d != a
export const cotherStringToCompareIs = wrd.cother + wrd.cString + wrd.cTo + wrd.cCompare + sys.cSpaceIsColonSpace; // otherStringToCompare is:
export const cFoundAMatch = wrd.cFOUND + bas.cSpace + bas.cA + bas.cSpace + wrd.cMATCH + bas.cExclamation + bas.cExclamation + bas.cExclamation + bas.cExclamation; // FOUND A MATCH!!!!
export const cConstantDoesNotExist = wrd.cConstant + bas.cSpace + wrd.cdoes + bas.cSpace + gen.cNOT + bas.cSpace + wrd.cexist + bas.cColon + bas.cSpace; // Constant does NOT exist:
export const cConstantDoesExist = wrd.cConstant + bas.cSpace + wrd.cdoes + bas.cSpace + wrd.cexist + bas.cColon + bas.cSpace; // Constant does exist:
export const cBEGIN_ithLoop = wrd.cBEGIN + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wrd.cloop + bas.cColon + bas.cSpace; // BEGIN i-th loop:
export const cBEGIN_ithIteration = wrd.cBEGIN + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wrd.citeration + bas.cColon + bas.cSpace; // BEGIN i-th iteration:
export const cBEGIN_jthLoop = wrd.cBEGIN + bas.cSpace + bas.cj + bas.cDash + bas.cth + bas.cSpace + wrd.cloop + bas.cColon + bas.cSpace; // BEGIN j-th loop:
export const cBEGIN_kthIteration = wrd.cBEGIN + bas.cSpace + bas.ck + bas.cDash + bas.cth + bas.cSpace + wrd.citeration + bas.cColon + bas.cSpace; // BEGIN k-th iteration:
export const cEND_ithLoop = wrd.cEND + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wrd.cloop + bas.cColon + bas.cSpace; // END i-th loop:
export const cEND_ithIteration = wrd.cEND + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wrd.citeration + bas.cColon + bas.cSpace; // END i-th iteration:
export const cEND_jthLoop = wrd.cEND + bas.cSpace + bas.cj + bas.cDash + bas.cth + bas.cSpace + wrd.cloop + bas.cColon + bas.cSpace; // END j-th loop:
export const cEND_kthIteration = wrd.cEND + bas.cSpace + bas.ck + bas.cDash + bas.cth + bas.cSpace + wrd.citeration + bas.cColon + bas.cSpace; // END k-th iteration:
export const ccurrentCommandIs = wrd.ccurrent + wrd.cCommand + sys.cSpaceIsColonSpace; // currentCommand is:
export const caliasListIs = wrd.calias + wrd.cList + sys.cSpaceIsColonSpace; // aliasList is:
export const ccurrentAliasIs = wrd.ccurrent + wrd.cAlias + sys.cSpaceIsColonSpace; // currentAlias is:
export const cduplicateAliasCountIs = wrd.cduplicate + wrd.cAlias + wrd.cCount + sys.cSpaceIsColonSpace; // duplicateAliasCount is:
export const cduplicateCommandAliasIs = wrd.cduplicate + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.calias + sys.cSpaceIsColonSpace; // duplicate command alias is:
export const ccommandWordAliasesBeforeChangeIs = wrd.ccommand + wrd.cWord + wrd.cAliases + bas.cSpace + wrd.cBEFORE + bas.cSpace + wrd.cCHANGE + sys.cSpaceIsColonSpace; // commandWordAliases BEFORE CHANGE is:
export const ccommandWordAliasesAfterChangeIs = wrd.ccommand + wrd.cWord + wrd.cAliases + wrd.cArray + bas.cSpace + wrd.cAFTER + bas.cSpace + wrd.cCHANGE + sys.cSpaceIsColonSpace; // commandWordAliasesArray AFTER CHANGE is:
export const cmasterCommandWordAlisesArrayIs = wrd.cmaster + wrd.cCommand + wrd.cWord + wrd.cAliases + wrd.cArray + sys.cSpaceIsColonSpace; // masterCommandWordAliasesArray is:
export const cmasterArrayIndexIs = wrd.cmaster + wrd.cArray + wrd.cIndex + sys.cSpaceIsColonSpace; // masterArrayIndex is:
export const cCommandAliasesAre = wrd.cCommand + bas.cSpace + wrd.cAliases + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // Command Aliases are:
export const cexpandedArrayIs = wrd.cexpanded + wrd.cArray + sys.cSpaceIsColonSpace; // expandedArray is:
export const cexpandedLehmerCodeArrayIs = wrd.cexpanded + sys.cLehmerCodeArray + sys.cSpaceIsColonSpace; // expandedLehmerCodeArray is:
export const cindexOfExpansionIs = wrd.cindex + bas.cOf + wrd.cExpansion + sys.cSpaceIsColonSpace; // indexOfExpansion is:
export const carrayToBeExpandedIs = wrd.carray+ bas.cTo + bas.cBe + wrd.cExpanded + sys.cSpaceIsColonSpace; // arrayToBeExpanded is:
export const climitOfExpansionIs = wrd.climit + bas.cOf + wrd.cExpansion + sys.cSpaceIsColonSpace;  // limitOfExpansion is:
export const cpushingLehmerCodeArray1ToReturnDataValue = wrd.cpushing + bas.cSpace + sys.cLehmerCodeArray + num.c1 + bas.cSpace + bas.cto + bas.cSpace + sys.creturnData + bas.cSpace + wrd.cvalue + bas.cColon + bas.cSpace; // pushing LehmerCodeArray1 to returnData value:
export const creturnDataAfterPushIs = sys.creturnData + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cpush + sys.cSpaceIsColonSpace; // returnData after push is:
export const creturnDataAfterLevel1Is = sys.creturnData + bas.cSpace + wrd.cafter + bas.cSpace + wrd.clevel + bas.cSpace + num.c1 + sys.cSpaceIsColonSpace; // returnData after Level 1 is:
export const carrayToBeExpandedDotLengthIs = wrd.carray + bas.cTo + bas.cBe + wrd.cExpanded + bas.cDot + wrd.clength + sys.cSpaceIsColonSpace; // arrayToBeExpanded.length is:
export const creturnDataDotLengthIs = sys.creturnData + bas.cDot + wrd.clength + sys.cSpaceIsColonSpace; // returnData.length is:
export const creturnDataBeforePopIs = sys.creturnData + bas.cSpace + wrd.cBEFORE + bas.cSpace + wrd.cPOP + sys.cSpaceIsColonSpace; // returnData BEFORE POP is:
export const creturnDataAfterPopIs = sys.creturnData + bas.cSpace + wrd.cAFTER + bas.cSpace + wrd.cPOP + sys.cSpaceIsColonSpace; // returnData AFTER POP is:
export const cmasterTempReturnDataBeforeRecursiveCallIs = wrd.cmaster + wrd.cTemp + wrd.cReturn + wrd.cData + bas.cSpace + wrd.cBEFORE + bas.cSpace + wrd.crecursive + bas.cSpace + wrd.ccall + sys.cSpaceIsColonSpace; // masterTempReturnData BEFORE recursive call is:
export const ctempReturnData1Is = wrd.ctemp + wrd.cReturn + wrd.cData + num.c1 + sys.cSpaceIsColonSpace; // tempReturnData1 is:
export const ctempReturnData2Is = wrd.ctemp + wrd.cReturn + wrd.cData + num.c2 + sys.cSpaceIsColonSpace; // tempReturnData2 is:
export const ctempReturnData1DotLengthIs = wrd.ctemp + wrd.cReturn + wrd.cData + num.c1 + bas.cDot + wrd.clength + sys.cSpaceIsColonSpace; // tempReturnData1.length is:
export const cpushingTempReturnData1Kvalue = wrd.cpushing + bas.cSpace + wrd.ctemp + wrd.cReturn + wrd.cData + num.c1 + bas.cOpenBracket + bas.ck + bas.cCloseBracket + bas.cSpace + wrd.cvalue + bas.cColon + bas.cSpace; // pushing tempReturnData1[k] value:
export const cmasterTempReturnDataAfterRecursiveCallIs = wrd.cmaster + wrd.cTemp + wrd.cReturn + wrd.cData + bas.cSpace + wrd.cAFTER + bas.cSpace + wrd.crecursive + bas.cSpace + wrd.ccall + sys.cSpaceIsColonSpace; // masterTempReturnData AFTER recursive call is:
export const clookupIndexIs = wrd.clookup + wrd.cIndex + sys.cSpaceIsColonSpace; // lookupIndex is:
export const clookupValueIs = wrd.clookup + wrd.cValue + sys.cSpaceIsColonSpace; // lookupValue is:
export const cDataCategoryShouldBe = wrd.cData + bas.cSpace + wrd.cCategory + bas.cSpace + wrd.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Data Category should be:
export const cDataCategoryDetailNameShouldBe = wrd.cData + bas.cSpace + wrd.cCategory + bas.cSpace + wrd.cDetail + bas.cSpace + wrd.cName + bas.cSpace + wrd.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Data Category Detail Name should be:
export const cKeywordNameShouldBe = wrd.cKeyword + bas.cSpace + wrd.cName + bas.cSpace + wrd.cshould + bas.cSpace + bas.cbe + bas.cColon + bas.cSpace; // Keyword Name should be:
export const cpathElementIs = wrd.cpath + wrd.cElement + sys.cSpaceIsColonSpace; // pathElement is:
export const ccaseIEqual0 = wrd.ccase + bas.cColon + bas.cSpace + bas.ci + bas.cSpace + bas.cEqual + bas.cSpace + num.c0; // case: i = 0
export const ccasePathElementEqual = wrd.ccase + bas.cColon + bas.cSpace + wrd.cpath + wrd.cElement + bas.cSpace + bas.cEqual + bas.cSpace; // case: pathElement =
export const ccaseElse = wrd.ccase + bas.cSpace + wrd.celse; // case else
export const creturnDataSoFarIs = sys.creturnData + bas.cSpace + bas.cso + bas.cSpace + wrd.cfar + sys.cSpaceIsColonSpace; // returnData so far is:
export const cpathArrayIs = wrd.cpath + wrd.cArray + sys.cSpaceIsColonSpace; // pathArray is:
export const ccurrentPathElementIs = wrd.ccurrent + bas.cSpace + wrd.cpath + bas.cSpace + wrd.celement + sys.cSpaceIsColonSpace; // current path element is:
export const cAttemptingToLoadXmlData = wrd.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wrd.cload + bas.cSpace + gen.cXML + bas.cSpace + wrd.cdata + bas.cExclamation; // Attempting to load XML data!
export const cAttemptingToLoadCsvData = wrd.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wrd.cload + bas.cSpace + gen.cCSV + bas.cSpace + wrd.cdata + bas.cExclamation; // Attempting to load CSV data!
export const cAttemptingToLoadJsonData = wrd.cAttempting + bas.cSpace + bas.cto + bas.cSpace + wrd.cload + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cdata + bas.cExclamation; // Attempting to load JSON data!
export const cLoadedDataIs = wrd.cLoaded + bas.cSpace + wrd.cdata + sys.cSpaceIsColonSpace; // Loaded data is:
export const cattributeArrayIs = wrd.cattribute + wrd.cArray + sys.cSpaceIsColonSpace; // attributeArray is:
export const cattributeArray0Is = wrd.cattribute + wrd.cArray + bas.cOpenBracket + num.c0 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // attributeArray[0] is:
export const cattributeArray1Is = wrd.cattribute + wrd.cArray + bas.cOpenBracket + num.c1 + bas.cCloseBracket + sys.cSpaceIsColonSpace; // attributeArray[1] is:
export const carrayIs = wrd.carray + sys.cSpaceIsColonSpace; // array is:
export const cvalueIs = wrd.cvalue + sys.cSpaceIsColonSpace; // value is:
export const cmyFunctionIs = bas.cmy + wrd.cFunction + sys.cSpaceIsColonSpace; // myFunction is:
export const carrayInputObjectIsNotAnArray = wrd.carray + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cobject + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wrd.carray + bas.cDot; // array input object is not an array.
export const cTheValueWasFoundInTheArray = wrd.cThe + bas.cSpace + wrd.cvalue + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cfound + bas.cSpace + bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.carray + bas.cDot; // The value was found in the array.
export const cTheValueWasNotFoundInTheArray = wrd.cThe + bas.cSpace + wrd.cvalue + bas.cSpace + wrd.cwas + bas.cSpace + gen.cNOT + bas.cSpace + wrd.cfound + bas.cSpace + bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.carray + bas.cDot; // The value was NOT found in the array.
export const coriginalStringIs = wrd.coriginal + wrd.cString + sys.cSpaceIsColonSpace; // originalString is:
export const cindexIs = wrd.cindex + sys.cSpaceIsColonSpace; // index is:
export const creplacementIs = wrd.creplacement + sys.cSpaceIsColonSpace; // replacement is:
export const cDEPLOY_APPLICATION = wrd.cDEPLOY + bas.cUnderscore + wrd.cAPPLICATION; // DEPLOY_APPLICATION
export const cRELEASE_APPLICATION = wrd.cRELEASE + bas.cUnderscore + wrd.cAPPLICATION; // RELEASE_APPLICATION
export const cReleaseFailed = wrd.cRelease + bas.cSpace + wrd.cfailed; // Release failed
// smuggle something cinputDataIis = cinputData + bas.cOpenBracket + bas.ci + bas.cCloseBracket + sys.cSpaceIsColonSpace; // inputData[i] is:
export const caggregateCommandStringIs = wrd.caggregate + wrd.cCommand + wrd.cString + sys.cSpaceIsColonSpace; // aggregateCommandString is:
export const cmetaDataParametersIs = wrd.cmetaData + wrd.cParameters + sys.cSpaceIsColonSpace; // metaDataParameters is:
export const cmetaDataParametersLengthIs = wrd.cmetaData + wrd.cParameters + bas.cSpace + wrd.clength + sys.cSpaceIsColonSpace; // metaDataParameters length is:
export const cmetaDataPathAndFilenameIs = wrd.cmetaData + wrd.cPath + wrd.cAnd + wrd.cFilename + sys.cSpaceIsColonSpace; // metaDataPathAndFilename is:
export const cpathAndFilenameIs = wrd.cpath + wrd.cAnd + wrd.cFilename + sys.cSpaceIsColonSpace; // pathAndFilename is:
export const ccontentsAre = wrd.ccontents + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // contents are:
export const ccontentsOfDare = wrd.ccontents + bas.cSpace + bas.cof + bas.cSpace + bas.cD + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // contents of D are:
export const cBEGIN_theIthIterationOfInputDataArray = wrd.cBEGIN + bas.cSpace + wrd.cthe + bas.cSpace + bas.ci + bas.cDash + bas.cth + bas.cSpace + wrd.citeration + bas.cSpace + bas.cof + bas.cSpace + wrd.cthe + bas.cSpace + cinputData + bas.cSpace + wrd.carray + bas.cDot + bas.cSpace + bas.ci + sys.cSpaceIsColonSpace; // Begin the i-th iteration of the inputData array. i is:
export const ccurrentRuleIs = wrd.ccurrent + wrd.cRule + sys.cSpaceIsColonSpace; // currentRule is:
export const crulesIs = wrd.crules + sys.cSpaceIsColonSpace; // rules is:
export const cruleInputDataIs = wrd.crule + cInputData + sys.cSpaceIsColonSpace; // ruleInputData is:
export const cruleInputMetaData = wrd.crule + wrd.cInput + wrd.cMetaData + sys.cSpaceIsColonSpace; // ruleInputMetaData is:
export const cBusinessRuleStartTimeIs = wrd.cBusiness + bas.cSpace + wrd.cRule + bas.cSpace + wrd.cStart + bas.cSpace + wrd.ctime + sys.cSpaceIsColonSpace; // Business Rule Start time is:
export const cBusinessRuleEndTimeIs = wrd.cBusiness + bas.cSpace + wrd.cRule + bas.cSpace + wrd.cEnd + bas.cSpace + wrd.ctime + sys.cSpaceIsColonSpace; // Business Rule End time is:
export const cBusinessRuleRunTimeIs = wrd.cBusiness + wrd.cRule + bas.cSpace + wrd.crun + bas.cDash + wrd.ctime + sys.cSpaceIsColonSpace; // BusinessRule run-time is:
export const ccommandStringBeforeAttemptedDelimiterSwapIs = wrd.ccommand + wrd.cString + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cattempted + bas.cSpace + wrd.cdelimiter + bas.cSpace + wrd.cswap + sys.cSpaceIsColonSpace; // commandString before attempted delimiter swap is:
export const creplaceCharacterWithCharacterRuleIs = wrd.creplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter + wrd.cRule + sys.cSpaceIsColonSpace; // replaceCharacterWithCharacterRule is:
export const cRuleOutputIs = wrd.cRule + bas.cSpace + wrd.coutput + sys.cSpaceIsColonSpace; // Rule output is:
export const ccamelCaseCommandNameArrayIs = wrd.ccamel + wrd.cCase + wrd.cCommand + wrd.cName + wrd.cArray + sys.cSpaceIsColonSpace; // camelCaseCommandNameArray is:
export const ccurrentCommandWordIs = wrd.ccurrent + bas.cSpace + wrd.ccommand + wrd.cWord + sys.cSpaceIsColonSpace; // current commandWord is:
export const cPARSER_ERROR = wrd.cPARSER + bas.cSpace + wrd.cERROR + bas.cColon + bas.cSpace; // PARSER ERROR:
export const ccommandAliasDataStructureIs = wrd.ccommand + wrd.cAlias + wrd.cData + wrd.cStructure + sys.cSpaceIsColonSpace; // commandAliasDataStructure is:
export const cuserDefinedConstantIs = wrd.cuser + wrd.cDefined + wrd.cConstant + sys.cSpaceIsColonSpace; // userDefinedConstant is:
export const cwordCountIs = wrd.cword + wrd.cCount + sys.cSpaceIsColonSpace; // wordCount is:
export const cwordsArrayIs = wrd.cwords + wrd.cArray + sys.cSpaceIsColonSpace; // wordsArray is:
export const cOptimizedConstantDefinitionForWord = wrd.cOptimized + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.cdefinition + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cword + bas.cColon + bas.cSpace; // Optimized constant definition for word:
export const cuserDefinedConstantListIs = wrd.cuser + wrd.cDefined + wrd.cConstant + wrd.cList + sys.cSpaceIsColonSpace; // userDefinedConstantList is:
export const cuserDefinedConstantListContainsComas = wrd.cuser + wrd.cDefined + wrd.cConstant + wrd.cList + bas.cSpace + wrd.ccontains + bas.cSpace + wrd.ccomas; // userDefinedConstantList contains comas
export const cuserDefinedConstantsListArrayIs = wrd.cuser + wrd.cDefined + wrd.cConstants + wrd.cList + wrd.cArray + sys.cSpaceIsColonSpace; // userDefinedConstantsListArray is:
export const cuserDefinedConstantsListDoesNotContainComas = wrd.cuser + wrd.cDefined + wrd.cConstant + wrd.cList + bas.cSpace + wrd.cDOES + bas.cSpace + gen.cNOT + bas.cSpace + wrd.ccontain + bas.cSpace + wrd.ccomas; // userDefinedConstantList DOES NOT contain comas
export const ccommonPatternsArrayIs = wrd.ccommon + wrd.cPatterns + wrd.cArray + sys.cSpaceIsColonSpace; // commonPatternsArray is:
export const cbusinessRuleCounterIs = wrd.cbusiness + wrd.cRule + wrd.cCounter + sys.cSpaceIsColonSpace; // businessRuleCounter is:
export const cbusinessRulePerformanceSumIs = wrd.cbusiness + wrd.cRule + wrd.cPerformance + wrd.cSum + sys.cSpaceIsColonSpace; // businessRulePerformanceSum is:
export const cDoneBusinessRulePerformanceSumIs = wrd.cDONE + bas.cExclamation + bas.cSpace + cbusinessRulePerformanceSumIs; // DONE! businessRulePerformanceSum is:
export const caverageIs = wrd.caverage + sys.cSpaceIsColonSpace; // average is:
export const cbusinessRulePerformanceStdSumIs = wrd.cbusiness + wrd.cRule + wrd.cPerformance + phn.cStd + wrd.cSum + sys.cSpaceIsColonSpace; // businessRulePerformanceStdSum is:
export const cDoneBusinessRulePerformanceStdSumIs = wrd.cDONE + bas.cExclamation + bas.cSpace + cbusinessRulePerformanceStdSumIs; // DONE! businessRulePerformanceStdSum is:
export const cstandardDevIs = wrd.cstandard + phn.cDev + sys.cSpaceIsColonSpace; // standardDev is:
export const ccommandCounterIs = wrd.ccommand + wrd.cCounter + sys.cSpaceIsColonSpace; // commandCounter is:
export const ccommandPerformanceSumIs = wrd.ccommand + wrd.cPerformance + wrd.cSum + sys.cSpaceIsColonSpace; // commandPerformanceSum is:
export const cDoneCommandPerformanceSumIs = wrd.cDONE + bas.cExclamation + bas.cSpace + ccommandPerformanceSumIs; // DONE! commandPerformanceSum is:
export const ccommandPerformanceStdSumIs = wrd.ccommand + wrd.cPerformance + phn.cStd + wrd.cSum + sys.cSpaceIsColonSpace; // commandPerformanceStdSum is:
export const cDoneCommandPerformanceStdSumIs = wrd.cDONE + bas.cExclamation + bas.cSpace + ccommandPerformanceStdSumIs; // DONE! commandPerformanceStdSum is:
export const ccolorKeysIs = wrd.ccolor + wrd.cKeys + sys.cSpaceIsColonSpace; // colorKeys is:
export const ccurrentColorNameIs = wrd.ccurrent + wrd.cColor + wrd.cName + sys.cSpaceIsColonSpace; // currentColorName is:
export const ccurrentColorObjectIs = wrd.ccurrent + wrd.cColor + wrd.cObject + sys.cSpaceIsColonSpace; // currentColorObject is:
export const ccurrentColorHexValueIs = wrd.ccurrent + wrd.cColor + phn.cHex + wrd.cValue + sys.cSpaceIsColonSpace; // currentColorHexValue is:
export const cruleOutputIs = wrd.crule + wrd.cOutput + sys.cSpaceIsColonSpace; // ruleOutput is:
export const cBeginPhase1ConstantsValidation = wrd.cBEGIN + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cValidation; // BEGIN Phase 1 Constants Validation
export const cEndPhase1ConstantsValidation = wrd.cEND + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cValidation; // END Phase 1 Constants Validation
export const cBeginPhase2ConstantsValidation = wrd.cBEGIN + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cValidation; // BEGIN Phase 2 Constants Validation
export const cEndPhase2ConstantsValidation = wrd.cEND + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cValidation; // END Phase 2 Constants Validation
export const cconstantsPathIs = wrd.cconstants + wrd.cPath + sys.cSpaceIsColonSpace; // constantsPath is:
export const cresolvedConstantsPath_BasicIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cBasic + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Basic is:
export const cresolvedConstantsPath_BusinessIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Business is:
export const cresolvedConstantsPath_ColorIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cColor + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Color is:
export const cresolvedConstantsPath_CommandIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Command is:
export const cresolvedConstantsPath_ConfigurationIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Configuration is:
export const cresolvedConstantsPath_CountryIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cCountry + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Country is:
export const cresolvedConstantsPath_ElementIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cElement + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Element is:
export const cresolvedConstantsPath_FunctionIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cFunction + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Function is:
export const cresolvedConstantsPath_GenericIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cGeneric + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Generic is:
export const cresolvedConstantsPath_IsotopeIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cIsotope + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Isotope is:
export const cresolvedConstantsPath_KnotIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cKnot + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Knot is:
export const cresolvedConstantsPath_LanguageIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cLanguage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Language is:
export const cresolvedConstantsPath_MessageIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Message is:
export const cresolvedConstantsPath_NumericIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cNumeric + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Numeric is:
export const cresolvedConstantsPath_PhonicIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cPhonic + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Phonic is:
export const cresolvedConstantsPath_ShapeIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cShape + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Shape is:
export const cresolvedConstantsPath_SystemIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_System is:
export const cresolvedConstantsPath_UnitIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cUnit + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Unit is:
export const cresolvedConstantsPath_WordIs = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cWord + sys.cSpaceIsColonSpace; // resolvedConstantsPath_Word is:
export const cBasicConstantsPhase1Validation = wrd.cBasic + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Basic Constants Phase 1 Validation
export const cBusinessConstantsPhase1Validation = wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Business Constants Phase 1 Validation
export const cColorConstantsPhase1Validation = wrd.cColor + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Color Constants Phase 1 Validation
export const cCommandConstantsPhase1Validation = wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Command Constants Phase 1 Validation
export const cConfigurationConstantsPhase1Validation = wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Configuration Constants Phase 1 Validation
export const cCountryConstantsPhase1Validation = wrd.cCountry + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Country Constants Phase 1 Validation
export const cElementConstantsPhase1Validation = wrd.cElement + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Element Constants Phase 1 Validation
export const cFunctionConstantsPhase1Validation = wrd.cFunction + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Function Constants Phase 1 Validation
export const cGenericConstantsPhase1Validation = wrd.cGeneric + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Generic Constants Phase 1 Validation
export const cIsotopeConstantsPhase1Validation = wrd.cIsotope + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Isotope Constants Phase 1 Validation
export const cKnotConstantsPhase1Validation = wrd.cKnot + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Knot Constants Phase 1 Validation
export const cLanguageConstantsPhase1Validation = wrd.cLanguage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Language Constants Phase 1 Validation
export const cMessageConstantsPhase1Validation = wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Message Constants Phase 1 Validation
export const cNumericConstantsPhase1Validation = wrd.cNumeric + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Numeric Constants Phase 1 Validation
export const cPhonicConstantsPhase1Validation = wrd.cPhonic + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Phonic Constants Phase 1 Validation
export const cShapeConstantsPhase1Validation = wrd.cShape + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Shape Constants Phase 1 Validation
export const cSystemConstantsPhase1Validation = wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // System Constants Phase 1 Validation
export const cUnitConstantsPhase1Validation = wrd.cUnit + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Unit Constants Phase 1 Validation
export const cWordConstantsPhase1Validation = wrd.cWord + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Word Constants Phase 1 Validation
export const cBasicConstantsPhase2Validation = wrd.cBasic + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Basic Constants Phase 2 Validation
export const cBusinessConstantsPhase2Validation = wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Business Constants Phase 2 Validation
export const cColorConstantsPhase2Validation = wrd.cColor + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Color Constants Phase 2 Validation
export const cCommandConstantsPhase2Validation = wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Command Constants Phase 2 Validation
export const cConfigurationConstantsPhase2Validation = wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Configuration Constants Phase 2 Validation
export const cCountryConstantsPhase2Validation = wrd.cCountry + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Country Constants Phase 2 Validation
export const cElementConstantsPhase2Validation = wrd.cElement + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Element Constants Phase 2 Validation
export const cFunctionConstantsPhase2Validation = wrd.cFunction + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Function Constants Phase 2 Validation
export const cGenericConstantsPhase2Validation = wrd.cGeneric + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Generic Constants Phase 2 Validation
export const cIsotopeConstantsPhase2Validation = wrd.cIsotope + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Isotope Constants Phase 2 Validation
export const cKnotConstantsPhase2Validation = wrd.cKnot + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Knot Constants Phase 2 Validation
export const cLanguageConstantsPhase2Validation = wrd.cLanguage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Language Constants Phase 2 Validation
export const cMessageConstantsPhase2Validation = wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Message Constants Phase 2 Validation
export const cNumericConstantsPhase2Validation = wrd.cNumeric + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Numeric Constants Phase 2 Validation
export const cPhonicConstantsPhase2Validation = wrd.cPhonic + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Phonic Constants Phase 2 Validation
export const cShapeConstantsPhase2Validation = wrd.cShape + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Shape Constants Phase 2 Validation
export const cSystemConstantsPhase2Validation = wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // System Constants Phase 2 Validation
export const cUnitConstantsPhase2Validation = wrd.cUnit + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Unit Constants Phase 2 Validation
export const cWordConstantsPhase2Validation = wrd.cWord + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Word Constants Phase 2 Validation
export const ccommandStringIs = wrd.ccommand + wrd.cString + sys.cSpaceIsColonSpace; // commandString is:
export const ccommandDelimiterIs = wrd.ccommand + wrd.cDelimiter + sys.cSpaceIsColonSpace; // commandDelimiter is:
export const ccommandToExecuteBeforeTheAliasIs = wrd.ccommand + bas.cTo + wrd.cExecute + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cAlias + sys.cSpaceIsColonSpace; // commandToExecute before the Alias is:
export const ccommandToExecuteAfterTheAliasIs = wrd.ccommand + bas.cTo + wrd.cExecute + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cAlias + sys.cSpaceIsColonSpace; // commandToExecute after the Alias is:
export const cWarningTheSpecifiedCommand = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.ccommand + bas.cColon + bas.cSpace; // WARNING: The specified command:
export const cdoesNotExistPleaseTryAgain = bas.cSpace + wrd.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wrd.cexist + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cExclamation; // does not exist, please try again!
export const ccommandStringContainsEitherSingleQuoteOrBackTickQuote = wrd.ccommand + wrd.cString + bas.cSpace + wrd.ccontains + bas.cSpace + wrd.ceither + bas.cSpace + bas.ca + bas.cSpace + wrd.csingle + wrd.cQuote + bas.cSpace + bas.cor + bas.cSpace + bas.ca + bas.cSpace + wrd.cback + wrd.cTick + wrd.cQuote; // commandString contains either a singleQuote or a backTickQuote
export const ccommandStringContainsSingleQuote = wrd.ccommand + wrd.cString + bas.cSpace + wrd.ccontains + bas.cSpace + bas.ca + bas.cSpace + wrd.csingle + wrd.cQuote + bas.cExclamation; // commandString contains a singleQuote!
export const cnumberOfSingleQuotesIsEven = wrd.cnumber + bas.cOf + wrd.cSingle + wrd.cQuotes + bas.cSpace + bas.cis + bas.cSpace + bas.cGreaterThan + bas.cEqual + bas.cSpace + num.c2 + bas.cSpace + bas.cAndPersand + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cnumber + bas.cOf + wrd.cSingle + wrd.cQuotes + bas.cSpace + bas.cis + bas.cSpace + wrd.cEVEN + bas.cExclamation + bas.cSpace + wrd.cYAY + bas.cExclamation; // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!
export const cFirstIndexIs = num.cFirst + bas.cSpace + wrd.cindex + sys.cSpaceIsColonSpace; // First index is:
export const ccommandStringAfterTaggingTheFirstStringDelimiter = wrd.ccommand + wrd.cString + bas.cSpace + wrd.cafter + bas.cSpace + wrd.ctagging + bas.cSpace + wrd.cthe + bas.cSpace + num.cfirst + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging the first string delimiter:
export const cAdditionalIndexIs = wrd.cAdditional + bas.cSpace + wrd.cindex + sys.cSpaceIsColonSpace; // Additional index is:
export const coddIndex = wrd.codd + bas.cSpace + wrd.cindex; // odd index
export const cevenIndex = wrd.ceven + bas.cSpace + wrd.cindex; // even index
export const ccommandStringAfterTaggingAnOddStringDelimiter = wrd.ccommand + wrd.cString + bas.cSpace + wrd.cafter + bas.cSpace + wrd.ctagging + bas.cSpace + bas.can + bas.cSpace + wrd.codd + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging an odd string delimiter:
export const ccommandStringAfterTaggingAnEvenStringDelimiter = wrd.ccommand + wrd.cString + bas.cSpace + wrd.cafter + bas.cSpace + wrd.ctagging + bas.cSpace + bas.can + bas.cSpace + wrd.ceven + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cdelimiter + bas.cColon + bas.cSpace; // commandString after tagging an even string delimiter:
export const cpreSplitCommandStringIs = phn.cpre + wrd.cSplit + wrd.cCommand + wrd.cString + sys.cSpaceIsColonSpace; // preSplitCommandString is:
export const cpostSplitCommandStringIs = wrd.cpost + wrd.cSplit + wrd.cCommand + wrd.cString + bas.cOpenBracket + bas.ck + bas.cCloseBracket + sys.cSpaceIsColonSpace; // postSplitCommandString[k] is:
export const cpreSplitCommandStringElementIs = phn.cpre + wrd.cSplit + wrd.cCommand + wrd.cString + wrd.cElement + sys.cSpaceIsColonSpace; // preSplitCommandStringElement is:
export const cDoingStraightSplitCommandString = wrd.cDoing + bas.cSpace + bas.ca + bas.cSpace + wrd.cstraight + bas.cSpace + wrd.csplit + bas.cSpace + bas.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccommand + wrd.cString + bas.cColon + bas.cSpace; // Doing a straight split of the commandString:
export const cCommandStartTimeIs = wrd.cCommand + bas.cSpace + wrd.cStart + bas.cSpace + wrd.ctime + sys.cSpaceIsColonSpace; // Command Start time is:
export const cCommandEndTimeIs = wrd.cCommand + bas.cSpace + wrd.cEnd + bas.cSpace + wrd.ctime + sys.cSpaceIsColonSpace; // Command End time is:
export const cCommandRunTimeIs = wrd.cCommand + bas.cSpace + wrd.crun + bas.cDash + wrd.ctime + sys.cSpaceIsColonSpace; // Command run-time is:
export const ccommandAliasesFilePathConfigurationNameIs = wrd.ccommand + wrd.cAliases + wrd.cFile + wrd.cPath + wrd.cConfiguration + wrd.cName + sys.cSpaceIsColonSpace; // commandAliasesFilePathConfigurationName is:
export const ccommandIs = wrd.ccommand + sys.cSpaceIsColonSpace; // command is:
export const ccommandToExecuteIs = wrd.ccommand + bas.cTo + wrd.cExecute + sys.cSpaceIsColonSpace; // commandToExecute is:
export const ccommandArgsIs = wrd.ccommand + gen.cArgs + sys.cSpaceIsColonSpace; // commandArgs is:
export const celseClauseLookingForCommandAliases = wrd.celse + bas.cDash + wrd.cclause + bas.cSpace + wrd.clooking + bas.cSpace + wrd.cfor + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cDot; // else-clause looking for command aliases.
export const callCommandAliasesIs = wrd.call + wrd.cCommand + wrd.cAliases + sys.cSpaceIsColonSpace; // allCommandAliases is:
export const ccontextNameIs = wrd.ccontext + wrd.cName + sys.cSpaceIsColonSpace; // contextName is:
export const callXmlDataIs = wrd.call + gen.cXml + wrd.cData + sys.cSpaceIsColonSpace; // allXmlData is:
export const cdataPathConfigurationNameIs = wrd.cdata + wrd.cPath + wrd.cConfiguration + wrd.cName + sys.cSpaceIsColonSpace; // dataPathConfigurationName is:
export const cdataPathIs = wrd.cdata + wrd.cPath + sys.cSpaceIsColonSpace; // dataPath is:
export const cfilesFoundIs = wrd.cfiles + wrd.cFound + sys.cSpaceIsColonSpace; // filesFound is:
export const cfileToLoadIs = wrd.cfile + wrd.cTo + wrd.cLoad + sys.cSpaceIsColonSpace; // fileToLoad is:
export const cfilesToLoadIs = wrd.cfiles + wrd.cTo + wrd.cLoad + sys.cSpaceIsColonSpace; // filesToLoad is:
export const cdataFileToMergeIs = wrd.cdata + wrd.cFile + bas.cSpace + bas.cto + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace; // dataFile to merge is:
export const cparsedDataFileIs = wrd.cparsed + wrd.cData + wrd.cFile + sys.cSpaceIsColonSpace; // parsedDataFile is:
export const cexecuteBusinessRules = wrd.cexecute + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crules + bas.cColon + bas.cSpace; // execute business rules:
export const cdataFileIs = wrd.cdata + wrd.cFile + sys.cSpaceIsColonSpace; // dataFile is:
export const cmergedDataIs = wrd.cmerged + wrd.cData + sys.cSpaceIsColonSpace; // mergedData is:
export const cdebugConfigurationSettingValueIs = wrd.cdebug + wrd.cConfiguration + wrd.cSetting + wrd.cValue + sys.cSpaceIsColonSpace; // debugConfigurationSettingValue is:
export const cclientRootPathIs = wrd.cclient + wrd.cRoot + wrd.cPath + sys.cSpaceIsColonSpace; // clientRootPath is:
export const cappConfigResourcesPathIs = phn.capp + wrd.cConfig + wrd.cResources + wrd.cPath + sys.cSpaceIsColonSpace; // appConfigResourcesPath is:
export const cappConfigReferencePathIs = phn.capp + wrd.cConfig + wrd.cReference + wrd.cPath + sys.cSpaceIsColonSpace; // appConfigReferencePath is:
export const cclientMetaDataPathIs = wrd.cclient + wrd.cMetaData + wrd.cPath + sys.cSpaceIsColonSpace; // clientMetaDataPath is:
export const cclientCommandAliasesPathIs = wrd.cclient + wrd.cCommand + wrd.cAliases + wrd.cPath + sys.cSpaceIsColonSpace; // clientCommandAliasesPath is:
export const cclientWorkflowsPathIs = wrd.cclient + wrd.cWorkflows + wrd.cPath + sys.cSpaceIsColonSpace; // clientWorkflowsPath is:
export const cframeworkRootPathIs = wrd.cframework + wrd.cRoot + wrd.cPath + sys.cSpaceIsColonSpace; // frameworkRootPath is:
export const cappConfigPathIs = phn.capp + wrd.cConfig + wrd.cPath + sys.cSpaceIsColonSpace; // appConfigPath is:
export const cpluginConfigPathIs = wrd.cplugin + wrd.cConfig + wrd.cPath + sys.cSpaceIsColonSpace; // pluginConfigPath is:
export const cpluginResourcePathIs = wrd.cplugin + wrd.cResource + wrd.cPath + sys.cSpaceIsColonSpace; // pluginResourcePath is:
export const cconfigPathIs = wrd.cconfig + wrd.cPath + sys.cSpaceIsColonSpace; // configPath is:
export const cframeworkResourcesPathIs = wrd.cframework + wrd.cResources + wrd.cPath + sys.cSpaceIsColonSpace; // frameworkResourcesPath is:
export const cframeworkFullMetaDataPathIs = wrd.cframework + wrd.cFull + wrd.cMetaData + wrd.cPath + sys.cSpaceIsColonSpace; // frameworkFullMetaDataPath is:
export const cframeworkConfigPathIs = wrd.cframework + wrd.cConfig + wrd.cPath + sys.cSpaceIsColonSpace; // frameworkConfigPath is:
export const cframeworkThemesPathIs = wrd.cframework + wrd.cThemes + wrd.cPath + sys.cSpaceIsColonSpace; // frameworkThemesPath is:
export const cframeworkCommandAliasesPathIs = wrd.cframework + wrd.cCommand + wrd.cAliases + wrd.cPath + sys.cSpaceIsColonSpace; // frameworkCommandAliasesPath is:
export const cframeworkWorkflowsPathIs = wrd.cframework + wrd.cWorkflows + wrd.cPath + sys.cSpaceIsColonSpace; // frameworkWorkflowsPath is:
export const ccommandAliasesPathIs = wrd.ccommand + wrd.cAliases + wrd.cPath + sys.cSpaceIsColonSpace; // commandAliasesPath is:
export const cworkflowPathIs = wrd.cworkflow + wrd.cPath + sys.cSpaceIsColonSpace; // workflowPath is:
export const cALL_DATA_IS = wrd.cALL + bas.cSpace + wrd.cDATA + sys.cSpaceIsColonSpace; // ALL DATA is:
export const cAllLoadedDataIs = wrd.cAll + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cdata + sys.cSpaceIsColonSpace; // All loaded data is:
export const callPluginConfigDataIs = wrd.call + wrd.cPlugin + wrd.cConfig + wrd.cData + sys.cSpaceIsColonSpace; // allPluginConfigData is:
export const cconfigDataIs = wrd.cconfig + wrd.cData + sys.cSpaceIsColonSpace; // configData is:
export const cERROR = wrd.cERROR + bas.cColon + bas.cSpace; // ERROR:
// ERROR: Invalid access to:
export const cErrorInvalidAccessTo = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cInvalid + bas.cSpace + wrd.caccess + bas.cSpace + wrd.cto + bas.cColon + bas.cSpace;
export const crootPathIs = wrd.croot + wrd.cPath + sys.cSpaceIsColonSpace; // rootPath is:
export const caskIs = wrd.cask + sys.cSpaceIsColonSpace; // ask is:
export const cINPUT = wrd.cINPUT + bas.cColon + bas.cSpace; // INPUT:
export const cinputIs = wrd.cinput + sys.cSpaceIsColonSpace; // input is:
export const cstartTimeIs = wrd.cstart + wrd.cTime + sys.cSpaceIsColonSpace; // startTime is:
export const cendTimeIs = wrd.cend + wrd.cTime + sys.cSpaceIsColonSpace; // endTime is:
export const cdeltaTimeResultIs = wrd.cdelta + wrd.cTime + wrd.cResult + sys.cSpaceIsColonSpace; // deltaTimeResult is:
export const cclientConfigurationIs = wrd.cclient + wrd.cConfiguration + sys.cSpaceIsColonSpace; // clientConfiguration is:
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const cloadedAndMergedDataAllFilesIs = wrd.cloaded + wrd.cAnd + wrd.cMerged + wrd.cData + wrd.cAll + wrd.cFiles + sys.cSpaceIsColonSpace; // loadedAndMergedDataAllFiles is:
export const cloadedAndMergedDataAllFilesContentsAre = wrd.cloaded + wrd.cAnd + wrd.cMerged + wrd.cData + wrd.cAll + wrd.cFiles + bas.cSpace + wrd.ccontents + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // loadedAndMergedDataAllFiles contents are:
export const ccommandWorkflowFilePathConfigurationNameIs = wrd.ccommand + wrd.cWorkflow + wrd.cFile + wrd.cPath + wrd.cConfiguration + wrd.cName + sys.cSpaceIsColonSpace; // commandWorkflowFilePathConfigurationName is:
export const ccontentsOfDataStructreIs = wrd.ccontents + bas.cSpace + bas.cof + bas.cSpace + bas.cD + bas.cDash + wrd.cdata + bas.cSpace + wrd.cstructure + sys.cSpaceIsColonSpace; // contents of D-data structure is:
export const cclientBusinessRulesAre = wrd.cclient + wrd.cBusiness + wrd.cRules + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // clientBusinessRules are:
export const cclientCommandsAre = wrd.cclient + wrd.cCommands + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // clientCommands are:
export const ccommandAliasesPathConfigNameIs = wrd.ccommand + wrd.cAliases + wrd.cPath + wrd.cConfig + wrd.cName + sys.cSpaceIsColonSpace; // commandAliasesPathConfigName is:
export const cresolvedSystemCommandsAliasesPathIs = wrd.cresolved + wrd.cSystem + wrd.cCommands + wrd.cAliases + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedSystemCommandsAliasesPath is:
export const cresolvedClientCommandsAliasesPathIs = wrd.cresolved + wrd.cClient + wrd.cCommands + wrd.cAliases + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedClientCommandsAliasesPath is:
export const cresolvedCustomCommandsAliasesPathIs = wrd.cresolved + wrd.cCustom + wrd.cCommands + wrd.cAliases + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedCustomCommandsAliasesPath is:
export const cresolvedPluginCommandsAliasesPathIs = wrd.cresolved + wrd.cPlugin + wrd.cCommands + wrd.cAliases + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedPluginCommandsAliasesPath is:
export const cworkflowPathConfigurationNameIs = wrd.cworkflow + wrd.cPath + wrd.cConfiguration + wrd.cName + sys.cSpaceIsColonSpace; // workflowPathConfigurationName is:
export const cresolvedSystemWorkflowsPathIs = wrd.cresolved + wrd.cSystem + wrd.cWorkflows + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedSystemWorkflowsPath is:
export const cresolvedClientWorkflowsPathIs = wrd.cresolved + wrd.cClient + wrd.cWorkflows + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedClientWorkflowsPath is:
export const cresolvedCustomWorkflowsPathIs = wrd.cresolved + wrd.cCustom + wrd.cWorkflows + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedCustomWorkflowsPath is:
export const cbusinessRulesIs = wrd.cbusiness + wrd.cRules + sys.cSpaceIsColonSpace; // businessRules is:
export const crulesToExecuteIs = wrd.crules + wrd.cTo + wrd.cExecute + sys.cSpaceIsColonSpace; // rulesToExecute is:
export const cruleInputIs = wrd.crule + wrd.cInput + sys.cSpaceIsColonSpace; // ruleInput is:
export const cruleMetaDataIs = wrd.crule + wrd.cMetaData + sys.cSpaceIsColonSpace; // ruleMetaData is:
export const cconfigurationNamespaceIs = wrd.cconfiguration + wrd.cName + wrd.cspace + sys.cSpaceIsColonSpace; // configurationNamespace is:
export const cconfigurationNameIs = wrd.cconfiguration + wrd.cName + sys.cSpaceIsColonSpace; // configurationName is:
export const cconfigurationValueIs = wrd.cconfiguration + wrd.cValue + sys.cSpaceIsColonSpace; // configurationValue is:
export const creturnConfiguraitonValueIs = wrd.creturn + wrd.cConfiguration + wrd.cValue + sys.cSpaceIsColonSpace; // returnConfigurationValue is:
export const cattributeJsonStringIs = wrd.cattribute + gen.cJson + wrd.cString + sys.cSpaceIsColonSpace; // attributeJsonString is:
export const cappAttributeNameIs = gen.capp + wrd.cAttribute + wrd.cName + sys.cSpaceIsColonSpace; // appAttributeName is:
export const cappAttributeValueIs = gen.capp + wrd.cAttribute + wrd.cValue + sys.cSpaceIsColonSpace; // appAttributeValue is:
export const cexecuteBusinessRulesColon = wrd.cexecute + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crules + bas.cColon + bas.cSpace; // execute business rules:
export const cdataPathAfterBusinessRulesProcessingIs = wrd.cdata + wrd.cPath + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crules + bas.cSpace + wrd.cprocessing + sys.cSpaceIsColonSpace; // dataPath after business rules processing is:
export const cFileToLoadIs = wrd.cFile + bas.cSpace + bas.cto + bas.cSpace + wrd.cload + sys.cSpaceIsColonSpace; // File to load is:
export const cfileExtensionIs = wrd.cfile + wrd.cExtension + sys.cSpaceIsColonSpace; // fileExtension is:
export const cexecuteBusienssRulesColon = wrd.cexecute + wrd.cBusiness + wrd.cRules + bas.cColon + bas.cSpace; // executeBusinessRules:
export const cloadedFileDataIs = wrd.cloaded + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cdata + sys.cSpaceIsColonSpace; // loaded file data is:
export const cBEGIN_PROCESSING_ADDITIONAL_DATA = wrd.cBEGIN + bas.cSpace + wrd.cPROCESSING + bas.cSpace + wrd.cADDITIONAL + bas.cSpace + wrd.cDATA; // BEGIN PROCESSING ADDITIONAL DATA
export const cDONE_PROCESSING_ADDITIONAL_DATA = wrd.cDONE + bas.cSpace + wrd.cPROCESSING + bas.cSpace + wrd.cADDITIONAL + bas.cSpace + wrd.cDATA; // DONE PROCESSING ADDITIONAL DATA
export const cMERGED_dataIs = wrd.cMERGED + bas.cSpace + wrd.cdata + sys.cSpaceIsColonSpace; // MERGED data is:
export const cfileContentsAre = wrd.cfile + wrd.cContents + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // fileContents are:
export const cparsedDataFileContentsAre = wrd.cparsed + wrd.cData + wrd.cFile + bas.cSpace + wrd.ccontents + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // parsedDataFile contents are:
export const cdataCategoryIs = wrd.cdata + wrd.cCategory + sys.cSpaceIsColonSpace; // dataCategory is:
export const cfullyParsedDataIs = wrd.cfully + bas.cSpace + wrd.cparsed + bas.cSpace + wrd.cdata + sys.cSpaceIsColonSpace; // fully parsed data is:
export const cD_finalMergeIs = bas.cD + bas.cSpace + wrd.cfinal + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace; // D final merge is:
export const cdataStorageContextNameIs = wrd.cdata + wrd.cStorage + wrd.cContext + wrd.cName + sys.cSpaceIsColonSpace; // dataStorageContextName is:
export const cdataToStoreIs = wrd.cdata + bas.cTo + wrd.cStore + sys.cSpaceIsColonSpace; // dataToStore is:
export const cdataCategoryDetailsNameIs = wrd.cdata + wrd.cCategory + wrd.cDetails + wrd.cName + sys.cSpaceIsColonSpace; // dataCategoryDetailsName is:
export const ctempDataIs = wrd.ctemp + wrd.cData + sys.cSpaceIsColonSpace; // tempData is:
export const ctargetDataIs = wrd.ctarget + wrd.cData + sys.cSpaceIsColonSpace; // targetData is:
export const cpageNameIs = wrd.cpage + wrd.cName + sys.cSpaceIsColonSpace; // pageName is:
export const cdataToMergeIs = wrd.cdata + bas.cSpace + bas.cto + bas.cSpace + wrd.cMerge + sys.cSpaceIsColonSpace; // data to Merge is:
export const cdataToMergeElementCountIs = wrd.cdata + bas.cTo + wrd.cMerge + wrd.cElement + wrd.cCount + sys.cSpaceIsColonSpace; // dataToMergeElementCount is:
export const cdataToMergeElementCountIs1 = wrd.cdata + bas.cTo + wrd.cMerge + wrd.cElement + wrd.cCount + sys.cSpaceIsColonSpace + num.c1; // dataToMergeElementCount is 1
export const ccheckIfThePageNameIsNotAnEmptyString = wrd.ccheck + bas.cSpace + bas.cif + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpage + wrd.cName + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wrd.cempty + bas.cSpace + wrd.cstring; // check if the pageName is not an empty string
export const cpageNameIsNotAnEmptyString = wrd.cpage + wrd.cName + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wrd.cempty + bas.cSpace + wrd.cstring; // pageName is not an empty string
export const cCheckIfTheDataCategoryIsAnEmptyStringOrNot = wrd.cCheck + bas.cSpace + bas.cif + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdata + wrd.cCategory + bas.cSpace + bas.cis + bas.cSpace + bas.can + bas.cSpace + wrd.cempty + bas.cSpace + wrd.cstring + bas.cSpace + bas.cor + bas.cSpace + gen.cnot; // Check if the dataCategory is an empty string or not
export const cdataCategoryIsNotAnEmptyString = wrd.cdata + wrd.cCategory + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wrd.cempty + bas.cSpace + wrd.cstring + bas.cExclamation; // dataCategory is not an empty string!
export const cdataCategoryIsAnEmptyString = wrd.cdata + wrd.cCategory + bas.cSpace + bas.cIS + bas.cSpace + bas.can + bas.cSpace + wrd.cempty + bas.cSpace + wrd.cstring + bas.cExclamation; // dataCategory IS an empty string!
export const ctargetDataContentIs = wrd.ctarget + wrd.cData + bas.cSpace + wrd.ccontent + sys.cSpaceIsColonSpace; // targetData content is:
export const cafterAttemptToMergeResultsAre = wrd.cafter + bas.cSpace + wrd.cattempt + bas.cSpace + bas.cto + bas.cSpace + wrd.cmerge + bas.cComa + bas.cSpace + wrd.cresults + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // after attempt to merge, results are:
export const cMergedDataIs = wrd.cMerged + bas.cSpace + wrd.cdata + sys.cSpaceIsColonSpace; // Merged data is:
export const cpageNameIsAnEmptyString = wrd.cpage + wrd.cName + bas.cSpace + bas.cis + bas.cSpace + bas.can + bas.cSpace + wrd.cempty + bas.cSpace + wrd.cstring; // pageName is an empty string
export const cCaughtTheSpecialCaseThatWeAreMergingFlatList = wrd.cCaught + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecial + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cthat + bas.cSpace + bas.cwe + bas.cSpace + wrd.care + bas.cSpace + wrd.cmerging + bas.cSpace + bas.ca + bas.cSpace + wrd.cflat + bas.cSpace + wrd.clist + bas.cDot; // Caught the special case that we are merging a flat list.
export const cinsideTheForLoop = wrd.cinside + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfor + bas.cDash + wrd.cloop; // inside the for-loop
export const ckeyIs = wrd.ckey + sys.cSpaceIsColonSpace; // key is:
export const ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = wrd.ctarget + wrd.cData + bas.cSpace + bas.cis + bas.cSpace + wrd.cmodified + bas.cSpace + bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cpass + bas.cDash + bas.cby + bas.cDash + wrd.creference + bas.cSpace + wrd.cvariable + bas.cSpace + wrd.ccontent + sys.cSpaceIsColonSpace; // targetData is modified in the input pass-by-reference variable content is:
export const cdataObjectValueIs = wrd.cdata + wrd.cObject + bas.cSpace + wrd.cvalue + sys.cSpaceIsColonSpace; // dataObject value is:
export const celementNameIs = wrd.celement + wrd.cName + sys.cSpaceIsColonSpace; // elementName is:
export const cdataObjectIs = wrd.cdata + wrd.cObject + sys.cSpaceIsColonSpace; // dataObject is:
export const celementNamePatternIs = wrd.celement + wrd.cName + wrd.cPattern + sys.cSpaceIsColonSpace; // elementNamePattern is:
export const celementCountIs = wrd.celement + wrd.cCount + sys.cSpaceIsColonSpace; // elementCount is:
export const cfileAndPathToLoadFromIs = wrd.cfile + bas.cSpace + wrd.cand + bas.cSpace + wrd.cpath + bas.cSpace + bas.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cfrom + sys.cSpaceIsColonSpace; // file and path to load from is:
export const cDoneLoadingDataFrom = wrd.cDONE + bas.cSpace + wrd.cloading + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfrom + bas.cColon + bas.cSpace; // DONE loading data from:
export const cfileAndPathToWriteDataToIs = wrd.cfile + bas.cSpace + wrd.cand + bas.cSpace + wrd.cpath + bas.cSpace + bas.cto + bas.cSpace + wrd.cwrite + bas.cSpace + wrd.cdata + bas.cSpace + bas.cto + bas.cSpace + bas.cis + bas.cColon + bas.cSpace; // file and path to write data to is:
export const cdataToWriteIs = wrd.cdata + bas.cSpace + bas.cto + bas.cSpace + wrd.cwrite + sys.cSpaceIsColonSpace; // data to write is:
export const cDataWasWrittenToTheFile = wrd.cData + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cwritten + bas.cSpace + bas.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // Data was written to the file:
export const cPathThatShouldBeScannedIs = wrd.cPath + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cshould + bas.cSpace + bas.cbe + bas.cSpace + wrd.cscanned + sys.cSpaceIsColonSpace; // Path that should be scanned is:
export const cfilesFoundAre = wrd.cfiles + bas.cSpace + wrd.cfound + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // files found are:
export const cdirectorIs = wrd.cdirectory + sys.cSpaceIsColonSpace; // directory is:
export const cdirectoryPathIs = wrd.cdirectory + wrd.cPath + sys.cSpaceIsColonSpace; // directoryPath is:
export const csourceFolderIs = wrd.csource + wrd.cFolder + sys.cSpaceIsColonSpace; // sourceFolder is:
export const cdestinationFolderIs = wrd.cdestination + wrd.cFolder + sys.cSpaceIsColonSpace; // destinationFolder is:
export const ccopySuccessIs = wrd.ccopy + wrd.cSuccess + sys.cSpaceIsColonSpace; // copySuccess is:
export const ccurrentVersionIs = wrd.ccurrent + bas.cSpace + wrd.cversion + sys.cSpaceIsColonSpace; // current version is:
export const creleasedArchiveFilesListIs = wrd.creleased + bas.cSpace + wrd.carchive + bas.cSpace + wrd.cfiles + bas.cSpace + wrd.clist + sys.cSpaceIsColonSpace; // released archive files list is:
export const cfileIs = wrd.cfile + sys.cSpaceIsColonSpace; // file is:
export const cfileNameIs = wrd.cfile + wrd.cName + sys.cSpaceIsColonSpace; // fileName is:
export const creleaseFilesListIs = wrd.crelease + bas.cSpace + wrd.cfiles + bas.cSpace + wrd.clist + sys.cSpaceIsColonSpace; // release files list is:
export const creleaseDateTimeStampIs = wrd.crelease + bas.cSpace + wrd.cdate + bas.cDash + wrd.ctime + bas.cSpace + wrd.cstamp + sys.cSpaceIsColonSpace; // release date-time stamp is:
export const creleaseFileNameIs = wrd.crelease + bas.cSpace + wrd.cfile + wrd.cName + sys.cSpaceIsColonSpace; // release fileName is:
export const cDoneWritingTheZipFile = wrd.cDone + bas.cSpace + wrd.cwriting + bas.cSpace + wrd.cthe + bas.cSpace + gen.czip + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // Done writing the zip file:
export const cSetTheReturnPackageSuccessFlagToTrue = wrd.cSet + bas.cSpace + wrd.cthe + bas.cSpace + wrd.creturn + bas.cSpace + wrd.cpackage + wrd.cSuccess + bas.cSpace + wrd.cflag + bas.cSpace + bas.cto + bas.cSpace + gen.cTRUE; // Set the return packageSuccess flag to TRUE
export const ccurrentVersionAlreadyReleased = wrd.ccurrent + bas.cSpace + wrd.cversion + bas.cSpace + wrd.calready + bas.cSpace + wrd.creleased; // current version already released
export const cpackageSuccessIs = wrd.cpackage + wrd.cSuccess + sys.cSpaceIsColonSpace; // packageSuccess is:
export const cRootPathBeforeProcessingIs = wrd.cRoot + wrd.cPath + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cprocessing + sys.cSpaceIsColonSpace; // RootPath before processing is:
export const cRootPathAfterProcessingIs = wrd.cRoot + wrd.cPath + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cprocessing + sys.cSpaceIsColonSpace; // RootPath after processing is:
export const cSourceIs = wrd.csource + sys.cSpaceIsColonSpace; // source is:
export const ctargetIs = wrd.ctarget + sys.cSpaceIsColonSpace; // target is:
export const cErrorCouldNotCopyFile = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cCould + bas.cSpace + gen.cnot + bas.cSpace + wrd.ccopy + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // ERROR: Could not copy file:
export const cErrorCouldNotCreateFolder = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cCould + bas.cSpace + gen.cnot + bas.cSpace + wrd.ccreate + bas.cSpace + wrd.cfolder + bas.cColon + bas.cSpace; // ERROR: Could not create folder:
export const csuccessfulCopyIs = wrd.csuccessful + wrd.cCopy + sys.cSpaceIsColonSpace; // successfulCopy is:
export const cErrorCouldNotCopyFolderContents = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cCould + bas.cSpace + gen.cnot + bas.cSpace + wrd.ccopy + bas.cSpace + wrd.cfolder + bas.cSpace + wrd.ccontents + bas.cColon + bas.cSpace; // ERROR: Could not copy folder contents:
export const cargumentValueIs = wrd.cargument + wrd.cValue + sys.cSpaceIsColonSpace; // argumentValue is:
export const cconsolidatedArgumentModeIs = wrd.cconsolidated + wrd.cArgument + wrd.cMode + sys.cSpaceIsColonSpace; // consolidatedArgumentMode is:
export const cPushingArgumentValueToReturnDataAsArrayElement = wrd.cPushing + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cargument + wrd.cValue + bas.cSpace + bas.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.creturn + wrd.cData + bas.cSpace + bas.cas + bas.cSpace + bas.can + bas.cSpace + wrd.carray + bas.cSpace + wrd.celement; // Pushing the argumentValue to the returnData as an array element
export const cargumentValueLengthGreaterThanZero = wrd.cargument + wrd.cValue + bas.cDot + wrd.clength + bas.cSpace + bas.cGreaterThan + bas.cSpace + num.c0; // argumentValue.length > 0
export const cCallingAnalyzeArgumentIndexIs = wrd.cCalling + bas.cSpace + wrd.canalyze + wrd.cArgument + wrd.cIndex + sys.cSpaceIsColonSpace; // Calling analyzeArgumentIndex is:
export const cReturnArgumentValueSameAsItWasPassedIn = wrd.cReturn + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cargument + wrd.cValue + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csame + bas.cSpace + bas.cas + bas.cSpace + bas.cit + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cpassed + bas.cSpace + bas.cin + bas.cDot; // Return the argumentValue the same as it was passed in.
export const cCheckIfThereAreBracketsOrNoBrackets = wrd.cCheck + bas.cSpace + bas.cif + bas.cSpace + wrd.cthere + bas.cSpace + wrd.care + bas.cSpace + wrd.cbrackets + bas.cSpace + bas.cor + bas.cSpace + bas.cno + bas.cSpace + wrd.cbrackets + bas.cDot; // Check if there are brackets or no brackets.
export const cBracketsWereFound = wrd.cBrackets + bas.cSpace + wrd.cwere + bas.cSpace + wrd.cfound; // Brackets were found
export const cBracketsWereNotFound = wrd.cBrackets + bas.cSpace + wrd.cwere + bas.cSpace + gen.cnot + bas.cSpace + wrd.cfound; // Brackets were not found
export const cCheckIfThereIsRegularExpressionOrNot = wrd.cCheck + bas.cSpace + bas.cif + bas.cSpace + wrd.cthere + bas.cSpace + bas.cis + bas.cSpace + bas.ca + bas.cSpace + wrd.cRegular + bas.cSpace + wrd.cExpression + bas.cSpace + bas.cor + bas.cSpace + gen.cnot + bas.cDot; // Check if there is a Regular Expression or not.
export const cRegularExpressionWasFound = bas.cA + bas.cSpace + wrd.cregular + bas.cSpace + wrd.cexpression + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cfound + bas.cExclamation; // A regular expression was found!
export const cNoRegExpFound = bas.cNO + bas.cSpace + gen.cRegExp + bas.cSpace + wrd.cfound + bas.cExclamation; // NO RegExp found!
export const cBracketsAreFound = wrd.cBrackets + bas.cSpace + wrd.cARE + bas.cSpace + wrd.cfound + bas.cExclamation; // Brackets ARE found!
export const cNoSecondaryCommandArgumentDelimiters = bas.cNO + bas.cSpace + wrd.csecondary + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cargument + bas.cSpace + wrd.cdelimiters + bas.cDot; // NO secondary command argument delimiters.
export const cregularExpressionIs = wrd.cregular + bas.cSpace + wrd.cexpression + sys.cSpaceIsColonSpace; // regular expression is:
export const cregExValueIs = gen.cregEx + wrd.cValue + sys.cSpaceIsColonSpace; // regExValue is:
export const cregularExpressionFlagsAre = wrd.cregular + bas.cSpace + wrd.cexpression + bas.cSpace + wrd.cflags + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // regular expression flags are:
export const cregExFlagsIs = gen.cregEx + wrd.cFlags + sys.cSpaceIsColonSpace; // regExFlags is:
export const cargumentValueContainsTheDelimiterLetsSplitIt = wrd.cargument + wrd.cValue + bas.cSpace + wrd.ccontains + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdelimiter + bas.cComa + bas.cSpace + wrd.clets + bas.cSpace + wrd.csplit + bas.cSpace + bas.cit + bas.cExclamation; // argumentValue contains the delimiter, lets split it!
export const cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = wrd.cargument + wrd.cValue + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cattempting + bas.cSpace + bas.cto + bas.cSpace + wrd.cremove + bas.cSpace + bas.ca + bas.cSpace + wrd.copen + bas.cSpace + wrd.cbracket + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.call + bas.cSpace + wrd.carray + bas.cSpace + wrd.celements + sys.cSpaceIsColonSpace; // argumentValue after attempting to remove a open bracket from all array elements is:
export const cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = wrd.cargument + wrd.cValue + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cattempting + bas.cSpace + bas.cto + bas.cSpace + wrd.cremove + bas.cSpace + bas.ca + bas.cSpace + wrd.cclose + bas.cSpace + wrd.cbracket + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.call + bas.cSpace + wrd.carray + bas.cSpace + wrd.celements + sys.cSpaceIsColonSpace; // argumentValue after attempting to remove a close bracket from all array elements is:
export const csecondaryCommandArgsDelimiterIs = wrd.csecondary + wrd.cCommand + gen.cArgs + wrd.cDelimiter + sys.cSpaceIsColonSpace; // secondaryCommandArgsDelimiter is:
export const cargumentArrayIs = wrd.cargument + wrd.cArray + sys.cSpaceIsColonSpace; // argumentArray is:
export const cformattingIs = wrd.cformatting + sys.cSpaceIsColonSpace; // formatting is:
export const cdeltaTimeIs = wrd.cdelta + wrd.cTime + sys.cSpaceIsColonSpace; // deltaTime is:
export const cformatIs = wrd.cformat + sys.cSpaceIsColonSpace; // format is:
export const creturnDeltaTimeIs = wrd.creturn + wrd.cDelta + wrd.cTime + sys.cSpaceIsColonSpace; // returnDeltaTime is:
export const csleepTimeIs = wrd.csleep + wrd.cTime + sys.cSpaceIsColonSpace; // sleepTime is:
export const cworkflowNameIs = wrd.cworkflow + wrd.cName + sys.cSpaceIsColonSpace; // workflowName is:
export const csecondTierWorkflowNameIs = num.csecond + wrd.cTier + wrd.cWorkflow + wrd.cName + sys.cSpaceIsColonSpace; // secondTierWorkflowName is:
export const ccurrentWorkflowIs = wrd.ccurrent + wrd.cWorkflow + sys.cSpaceIsColonSpace; // currentWorkflow is:
export const cworkflowValueIs = wrd.cworkflow + wrd.cValue + sys.cSpaceIsColonSpace; // workflowValue is:
export const cdataHivePathArrayIs = wrd.cdata + wrd.cHive + wrd.cPath + wrd.cArray + sys.cSpaceIsColonSpace; // dataHivePathArray is:
export const ccontentsOfLeafDataHiveElementIs = wrd.ccontents + bas.cSpace + bas.cof + bas.cSpace + wrd.cleaf + wrd.cData + wrd.cHive + wrd.cElement + sys.cSpaceIsColonSpace; // contents of leafDataHiveElement is:
export const centryIs = wrd.centry + sys.cSpaceIsColonSpace; // entry is:
export const cattributeValueIs = wrd.cattribute + wrd.cValue + sys.cSpaceIsColonSpace; // attributeValue is:
export const ckey1Is = wrd.ckey + num.c1 + sys.cSpaceIsColonSpace; // key1 is:
export const ckey2Is = wrd.ckey + num.c2 + sys.cSpaceIsColonSpace; // key2 is:
export const centityIs = wrd.centity + sys.cSpaceIsColonSpace; // entity is:
export const cqueueNameSpaceIs = wrd.cqueue + wrd.cName + wrd.cSpace + sys.cSpaceIsColonSpace; // queueNameSpace is:
export const cstackNameSpaceIs = wrd.cstack + wrd.cName + wrd.cSpace + sys.cSpaceIsColonSpace; // stackNameSpace is:
export const cWarningStackColon = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cStack + bas.cColon + bas.cSpace; // WARNING: Stack:
export const cAlreadyExists = bas.cSpace + wrd.cALREADY + bas.cSpace + wrd.cexist + bas.cExclamation; // ALREADY exist!
export const cdoesNotExist = bas.cSpace + wrd.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wrd.cexist + bas.cExclamation; // does not exist!
export const cisEmpty = bas.cSpace + bas.cis + bas.cSpace + wrd.cempty + bas.cExclamation; // is empty!
export const cContentsOfTheStackNamespace = wrd.cContents + bas.cSpace + bas.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cname + wrd.cspace + bas.cColon + bas.cSpace; // Contents of the stack namespace:
export const cContentsOfTheQueueNamespace = wrd.cContents + bas.cSpace + bas.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cqueue + bas.cSpace + wrd.cname + wrd.cspace + bas.cColon + bas.cSpace; // Contents of the queue namespace:
export const cwordDelimiterIs = wrd.cword + wrd.cDelimiter + sys.cSpaceIsColonSpace; // wordDelimiter is:
export const cstringContainsAcronymIs = wrd.cstring + wrd.cContains + wrd.cAcronym + sys.cSpaceIsColonSpace; // stringContainsAcronym is:
export const cErrorZipPackageReleaseFailed = wrd.cERROR + bas.cColon + bas.cSpace + gen.cZip + bas.cSpace + wrd.cpackage + bas.cSpace + wrd.crelease + bas.cSpace + wrd.cfailed + bas.cColon + bas.cSpace; // ERROR: Zip package release failed:
export const cminimumColorRangeIs = wrd.cminimum + wrd.cColor + wrd.cRange + sys.cSpaceIsColonSpace; // minimumColorRange is:
export const cmaximumColorRangeIs = wrd.cmaximum + wrd.cColor + wrd.cRange + sys.cSpaceIsColonSpace; // maximumColorRange is:
export const callSystemConstantsValidationDataIs = wrd.call + wrd.cSystem + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // allSystemConstantsValidationData is:
export const callClientConstantsValidationDataIs = wrd.call + wrd.cClient + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cconstantLibraryDataIs = wrd.cconstant + wrd.cLibrary + wrd.cData + sys.cSpaceIsColonSpace; // constantLibraryData is:
export const cclientValidationDataIs = wrd.cclient + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // clientValidationData is:
export const carrayValidationDataIs = wrd.carray + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // arrayValidationData is:
export const cfilesListLimitIs = wrd.cfiles + wrd.cList + wrd.cLimit + sys.cSpaceIsColonSpace; // filesListLimit is:
export const cenableLimitIs = wrd.cenable + wrd.cLimit + sys.cSpaceIsColonSpace; // enableLimit is:
export const cfilesLimitIs = wrd.cfiles + wrd.cLimit + sys.cSpaceIsColonSpace; // filesLimit is:
export const cinputDataRightBeforeProcessingIs = cinputData + bas.cSpace + wrd.cright + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cprocessing + sys.cSpaceIsColonSpace; // inputData right before processing is:
export const cnumberIs = wrd.cnumber + sys.cSpaceIsColonSpace; // number is:
export const capplicationMetaDataPathAndFilenameIs = wrd.capplication + wrd.cMetaData + wrd.cPath + wrd.cAnd + wrd.cFilename + sys.cSpaceIsColonSpace; // applicationMetaDataPathAndFilename is:
export const cframeworkMetaDataPathAndFilenameIs = wrd.cframework + wrd.cMetaData + wrd.cPath + wrd.cAnd + wrd.cFilename + sys.cSpaceIsColonSpace; // frameworkMetaDataPathAndFilename is:
export const cpluginMetaDataPathAndFilenameIs = wrd.cplugin + wrd.cMetaData + wrd.cPath + wrd.cAnd + wrd.cFilename + sys.cSpaceIsColonSpace; // pluginMetaDataPathAndFilename is:
export const capplicationMetaDataIs = wrd.capplication + wrd.cMetaData + sys.cSpaceIsColonSpace; // applicationMetaData is:
export const cframeworkMetaDataIs = wrd.cframework + wrd.cMetaData + sys.cSpaceIsColonSpace; // frameworkMetaData is:
export const cApplicationNameIs = wrd.cApplication + wrd.cName + sys.cSpaceIsColonSpace; // ApplicationName is:
export const cApplicationVersionNumberIs = wrd.cApplication + wrd.cVersion + wrd.cNumber + sys.cSpaceIsColonSpace; // ApplicationVersionNumber is:
export const cApplicationDescriptionIs = wrd.cApplication + wrd.cDescription + sys.cSpaceIsColonSpace; // ApplicationDescription is:
export const cFrameworkNameIs = wrd.cFramework + wrd.cName + sys.cSpaceIsColonSpace; // FrameworkName is:
export const cFrameworkVersionNumberIs = wrd.cFramework + wrd.cVersion + wrd.cNumber + sys.cSpaceIsColonSpace; // FrameworkVersionNumber is:
export const cFrameworkDescriptionIs = wrd.cFramework + wrd.cDescription + sys.cSpaceIsColonSpace; // FrameworkDescription is:
export const cPluginVersionNumberIs = wrd.cPlugin + wrd.cVersion + wrd.cNumber + sys.cSpaceIsColonSpace; // PluginVersionNumber is:
export const cPluginDescriptionIs = wrd.cPlugin + wrd.cDescription + sys.cSpaceIsColonSpace; // PluginDescription is:
export const csessionDateTimeStampIs = wrd.csession + wrd.cDate + wrd.cTime + wrd.cStamp + sys.cSpaceIsColonSpace; // sessionDateTimeStamp is:
export const clogFileNameIs = wrd.clog + wrd.cFileName + sys.cSpaceIsColonSpace; // logFileName is:
export const cprimaryCommandDelimiterIs = wrd.cprimary + wrd.cCommand + wrd.cDelimiter + sys.cSpaceIsColonSpace; // primaryCommandDelimiter is:
export const csecondaryCommandDelimiterIs = wrd.csecondary + wrd.cCommand + wrd.cDelimiter + sys.cSpaceIsColonSpace; // secondaryCommandDelimiter is:
export const ctertiaryCommandDelimiterIs = wrd.ctertiary + wrd.cCommand + wrd.cDelimiter + sys.cSpaceIsColonSpace; // tertiaryCommandDelimiter is:
export const ccommandSequencerCommandToEnqueueIs = wrd.ccommand + wrd.cSequencer + bas.cSpace + wrd.cCommand + bas.cSpace + bas.cTo + bas.cSpace + wrd.cEnqueue + sys.cSpaceIsColonSpace; // commandSequencer Command To Enqueue is:
export const cWarningMessageIsUndefined = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cmessage + bas.cSpace + wrd.cis + bas.cSpace + 'undefined'; // WARNING: message is undefined
export const cclassPathIs = wrd.cclass + wrd.cPath + sys.cSpaceIsColonSpace; // classPath is:
export const cargsArrayContainsRegEx1Is = gen.cargs + wrd.cArray + wrd.cContains + wrd.cRegEx + num.c1 + sys.cSpaceIsColonSpace; // argsArrayContainsRegEx1 is:
export const cargsArrayContainsRegEx2Is = gen.cargs + wrd.cArray + wrd.cContains + wrd.cRegEx + num.c2 + sys.cSpaceIsColonSpace; // argsArrayContainsRegEx2 is:
export const cargsArrayContainsColonIs = gen.cargs + wrd.cArray + wrd.cContains + wrd.cColon + sys.cSpaceIsColonSpace; // argsArrayContainsColon is:
export const cfileToSaveToIs = wrd.cfile + wrd.cTo + wrd.cSave + wrd.cTo + sys.cSpaceIsColonSpace; // fileToSaveTo is:
export const cdataToWriteOutIs = wrd.cdata + wrd.cTo + wrd.cWrite + wrd.cOut + sys.cSpaceIsColonSpace; // dataToWriteOut is:
export const clogFilePathAndNameIs = gen.clog + wrd.cFile + wrd.cPath + wrd.cAnd + wrd.cName + sys.cSpaceIsColonSpace; // logFilePathAndName is:
export const cmetaDataOutputIs = wrd.cmetaData + wrd.cOutput + sys.cSpaceIsColonSpace; // metaDataOutput is:
export const callCommandAliasesDataIs = wrd.call + wrd.cCommand + wrd.cAliases + wrd.cData + sys.cSpaceIsColonSpace; // allCommandAliasesData is:
export const cresolvedFrameworkConstantsPathActualIs = wrd.cresolved + wrd.cFramework + wrd.cConstants + wrd.cPath + wrd.cActual + sys.cSpaceIsColonSpace; // resolvedFrameworkConstantsPathActual is:
export const cresolvedClientConstantsPathActualIs = wrd.cresolved + wrd.cClient + wrd.cConstants + wrd.cPath + wrd.cActual + sys.cSpaceIsColonSpace; // resolvedClientConstantsPathActual is:
export const cframeworkConstantsValidationDataIs = wrd.cframework + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // frameworkConstantsValidationData is:
export const capplicationConstantsValidationDataIs = wrd.capplication + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // applicationConstantsValidationData is:
export const cActualColonDoublePercent = bas.cDoubleQuote + wrd.cActual + bas.cDoubleQuote + bas.cColon + bas.cSpace + bas.cDoubleQuote + bas.cDoublePercent + bas.cDoubleQuote + bas.cComa; // "Actual": "%%",
export const callCommandWorkflowsDataIs = wrd.call + wrd.cCommand + wrd.cWorkflows + wrd.cData + sys.cSpaceIsColonSpace; // allCommandWorkflowsData is:
export const csourceDestinationArrayIs = wrd.csource + wrd.cDestination + wrd.cArray + sys.cSpaceIsColonSpace; // sourceDestinationArray is:
export const cfilterArrayIs = wrd.cfilter + wrd.cArray + sys.cSpaceIsColonSpace; // filterArray is:
export const cnamespaceDataObjectPathNotFound = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cNamespace + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cobject + bas.cSpace + wrd.cpath + bas.cSpace + gen.cnot + bas.cSpace + wrd.cfound + bas.cColon + bas.cSpace; // ERROR: Namespace data object path not found:
export const cnewValueIs = wrd.cnew + wrd.cValue + sys.cSpaceIsColonSpace; // newValue is:
export const cparentDataObjectBeforeMutationIs = wrd.cparent + wrd.cData + wrd.cObject + bas.cSpace + wrd.cBEFORE + bas.cSpace + wrd.cmutation + sys.cSpaceIsColonSpace; // parentDataObject BEFORE mutation is:
export const cparentDataObjectAfterMutationIs = wrd.cparent + wrd.cData + wrd.cObject + bas.cSpace + wrd.cAFTER + bas.cSpace + wrd.cmutation + sys.cSpaceIsColonSpace; // parentDataObject AFTER mutation is:
export const callPluginsDataIs = wrd.call + wrd.cPlugins + wrd.cData + sys.cSpaceIsColonSpace; // allPluginsData is:
export const cpluginsPathsAre = wrd.cplugin + wrd.cPaths + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // pluginPaths are:
export const cpluginNameIs = wrd.cplugin + wrd.cName + sys.cSpaceIsColonSpace; // pluginName is:
export const cpluginDataIs = wrd.cplugin + wrd.cData + sys.cSpaceIsColonSpace; // pluginData is:
export const cpluginNamesIs = wrd.cplugin + wrd.cNames + sys.cSpaceIsColonSpace; // pluginNames is:
export const cpluginPathIs = wrd.cplugin + wrd.cPath + sys.cSpaceIsColonSpace; // pluginPath is:
export const cpluginRulesIs = wrd.cplugin + wrd.cRules + sys.cSpaceIsColonSpace; // pluginRules is:
export const cpluginCommandsIs = wrd.cplugin + wrd.cCommands + sys.cSpaceIsColonSpace; // pluginCommands is:
export const cpluginConfigDataIs = wrd.cplugin + wrd.cConfig + wrd.cData + sys.cSpaceIsColonSpace; // pluginConfigData is:
export const ccomaCountIs = wrd.ccoma + wrd.cCount + sys.cSpaceIsColonSpace; // comaCount is:
export const cpluginRegistryPathIs = wrd.cplugin + wrd.cRegistry + wrd.cPath + sys.cSpaceIsColonSpace; // pluginRegistryPath is:
export const cresolvedPluginPathIs = wrd.cresolved + wrd.cPlugin + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedPluginPath is:
export const cpluginMetaDataIs = wrd.cplugin + wrd.cMetaData + sys.cSpaceIsColonSpace; // pluginMetaData is:
export const cpluginExecutionPathIs = wrd.cplugin + wrd.cExecution + wrd.cPath + sys.cSpaceIsColonSpace; // pluginExecutionPath is:
export const cdataLoadedIs = wrd.cdata + wrd.cLoaded + sys.cSpaceIsColonSpace; // dataLoaded is:
export const cresolvedPluginRegistryPathIs = wrd.cresolved + wrd.cPlugin + wrd.cRegistry + wrd.cPath + sys.cSpaceIsColonSpace; // resolvedPluginRegistryPath is:
export const cpluginRegistryDataIs = wrd.cplugin + wrd.cRegistry + wrd.cData + sys.cSpaceIsColonSpace; // pluginRegistryData is:
export const cerrorMessage = wrd.cerror + bas.cSpace + wrd.cmessage + bas.cColon + bas.cSpace; // error message:
export const ccurrentPluginNameIs = wrd.ccurrent + wrd.cPlugin + wrd.cName + sys.cSpaceIsColonSpace; // currentPluginName is:
export const cpluginRegistryIs = wrd.cplugin + wrd.cRegistry + sys.cSpaceIsColonSpace; // pluginRegistry is:
export const cpluginRegistryListIs = wrd.cplugin + wrd.cRegistry + wrd.cList + sys.cSpaceIsColonSpace; // pluginRegistryList is:
export const cpluginRegistryFolderListIs = wrd.cplugin + wrd.cRegistry + wrd.cFolder + wrd.cList + sys.cSpaceIsColonSpace; // pluginRegistryFolderList is:
export const cfolderPluginIs = wrd.cfolder + wrd.cPlugin + sys.cSpaceIsColonSpace; // folderPlugin is:
export const cfolderPluginNameIs = wrd.cfolder + wrd.cPlugin + wrd.cName + sys.cSpaceIsColonSpace; // folderPluginName is:
export const cregistryPluginIs = wrd.cregistry + wrd.cPlugin + sys.cSpaceIsColonSpace; // registryPlugin is:
export const cregistryPluginNameIs = wrd.cregistry + wrd.cPlugin + wrd.cName + sys.cSpaceIsColonSpace; // registryPluginName is:
export const csynchronizedPluginRegistryListIs = wrd.csynchronized + wrd.cPlugin + wrd.cRegistry + wrd.cList + sys.cSpaceIsColonSpace; // synchronizedPluginRegistryList is:
export const cpluginKeyIs = wrd.cplugin + wrd.cKey + sys.cSpaceIsColonSpace; // pluginKey is:
export const cloadedPluginMetaDataAtIndex = wrd.cloaded + wrd.cPlugin + wrd.cMetaData + bas.cSpace + wrd.cat + bas.cSpace + wrd.cindex + bas.cColon + bas.cSpace; // loadedPluginMetaData at index:
export const cpluginsMetaDataIs = wrd.cplugins + wrd.cMetaData + sys.cSpaceIsColonSpace; // pluginsMetaData is:
export const cpluginMetaDataKeyIs = wrd.cplugin + wrd.cMetaData + wrd.cKey + sys.cSpaceIsColonSpace; // pluginMetaDataKey is:
export const cpluginPathUriAtIndex = wrd.cplugin + wrd.cPath + gen.cURI + bas.cSpace + wrd.cat + bas.cSpace + wrd.cindex + bas.cColon + bas.cSpace; // pluginPathURI at index:
export const cpluginsExecutionPathsIs = wrd.cplugins + wrd.cExecution + wrd.cPaths + sys.cSpaceIsColonSpace; // pluginsExecutionPaths is:
export const cpluginsRootPathIs = wrd.cplugins + wrd.cRoot + wrd.cPath + sys.cSpaceIsColonSpace; // pluginsRootPath is:
export const cpluginRegistryListLengthEqualZero = wrd.cplugin + wrd.cRegistry + wrd.cList + bas.cDot + wrd.clength + bas.cSpace + bas.cEqualEqualEqual + bas.cSpace + num.c0; // pluginRegistryList.length === 0
export const cpluginRegistryListLengthNotEqualZero = wrd.cplugin + wrd.cRegistry + wrd.cList + bas.cDot + wrd.clength + bas.cSpace + bas.cExclamation + bas.cEqualEqual + bas.cSpace + num.c0; // pluginRegistryList.length !== 0
export const cpluginPathsArrayIs = wrd.cplugin + wrd.cPaths + wrd.cArray + sys.cSpaceIsColonSpace; // pluginPathsArray is:
export const cvalidationFrameworkArrayIs = wrd.cvalidation + wrd.cFramework + wrd.cArray + sys.cSpaceIsColonSpace; // validationFrameworkArray is:
export const cvalidationApplicationArrayIs = wrd.cvalidation + wrd.cApplication + wrd.cArray + sys.cSpaceIsColonSpace; // validationApplicationArray is:
export const cvalidationPluginsMetaArrayIs = wrd.cvalidation + wrd.cPlugins + wrd.cMeta + wrd.cArray + sys.cSpaceIsColonSpace; // validationPluginsMetaArray is:
export const cvalidationArrayBeforePluginConstantsValidationDataMergeIs = wrd.cvalidation + wrd.cArray + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace; // validationArray before plugin constants validation data merge is:
export const cvalidationArrayAfterPluginConstantsValidationDataMergeIs = wrd.cvalidation + wrd.cArray + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace; // validationArray after plugin constants validation data merge is:
export const clineIs = wrd.cline + sys.cSpaceIsColonSpace; // line is:
export const celement1Is = wrd.celement + num.c1 + sys.cSpaceIsColonSpace; // element1 is:
export const cconstantsNamespaceParentObjectIs = wrd.cconstants + wrd.cNamespace + wrd.cParent + wrd.cObject + sys.cSpaceIsColonSpace; // constantsNamespaceParentObject is:
export const cconstantNamespaceObjectIs = wrd.cconstant + wrd.cNamespace + wrd.cObject + sys.cSpaceIsColonSpace; // constantNamespaceObject is:
export const celementIs = wrd.celement + sys.cSpaceIsColonSpace; // element is:
export const cvalidationLineItemIs = wrd.cvalidation + wrd.cLine + wrd.cItem + sys.cSpaceIsColonSpace; // validationLineItem is:
export const cphase1ResultsIs = wrd.cphase + num.c1 + wrd.cResults + sys.cSpaceIsColonSpace; // phase1Results is:
export const cphase2ResultsIs = wrd.cphase + num.c2 + wrd.cResults + sys.cSpaceIsColonSpace; // phase2Results is:
export const cconstantValidationObjectIs = wrd.cconstant + wrd.cValidation + wrd.cObject + sys.cSpaceIsColonSpace; // constantValidationObject is:
export const ccharacterIs = wrd.ccharacter + sys.cSpaceIsColonSpace; // character is:
export const cconstantTypeIs = wrd.cconstant + wrd.cType + sys.cSpaceIsColonSpace; // constantType is:
export const cconstantPrefixIs = wrd.cconstant + wrd.cPrefix + sys.cSpaceIsColonSpace; // constantPrefix is:
export const cinputAndOutputAreTheSame = wrd.cinput + bas.cSpace + wrd.cand + bas.cSpace + wrd.coutput + bas.cSpace + wrd.care + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csame + bas.cExclamation; // input and output are the same!
export const carrayElementIs = wrd.carray + wrd.cElement + sys.cSpaceIsColonSpace; // arrayElement is:
export const cattributeNameIs = wrd.cattribute + wrd.cName + sys.cSpaceIsColonSpace; // attributeName is:
export const cjthIteration = bas.cj + bas.cDash + bas.cth + bas.cSpace + wrd.citeration + bas.cColon + bas.cSpace; // j-th iteration:
export const cSpaceDataColonSpace = bas.cSpace + wrd.cdata + bas.cColon + bas.cSpace; // data:
export const cinputDataLengthIs = cinputData + bas.cDot + wrd.clength + sys.cSpaceIsColonSpace; // inputData.length is:
export const cvalidationTypesInputArrayIs = wrd.cvalidation + wrd.cTypes + wrd.cInput + wrd.cArray + sys.cSpaceIsColonSpace; // validationTypesInputArray is:
export const cvalidationTypesConfirmedArrayIs = wrd.cvalidation + wrd.cTypes + wrd.cConfirmed + wrd.cArray + sys.cSpaceIsColonSpace; // validationTypesConfirmedArray is:
export const cvalidationTypesConfirmedListIs = wrd.cvalidation + wrd.cTypes + wrd.cConfirmed + wrd.cList + sys.cSpaceIsColonSpace; // validationTypesConfirmedList is:
export const cvalidationFileNameInputArrayIs = wrd.cvalidation + wrd.cFile + wrd.cName + wrd.cInput + wrd.cArray + sys.cSpaceIsColonSpace; // validationFileNameInputArray is: 
export const cvalidationFileNameConfirmedArrayIs = wrd.cvalidation + wrd.cFile + wrd.cName + wrd.cConfirmed + wrd.cArray + sys.cSpaceIsColonSpace; // validationFileNameConfirmedArray is: 
export const cvalidationFileNameConfirmedListIs = wrd.cvalidation + wrd.cFile + wrd.cName + wrd.cConfirmed + wrd.cList + sys.cSpaceIsColonSpace; // validationFileNameConfirmedList is: 
export const callCommandAliasesToValidateIs = wrd.call + wrd.cCommand + wrd.cAliases + wrd.cTo + wrd.cValidate + sys.cSpaceIsColonSpace; // callCommandAliasesToValidate is:
export const cvalidationArrayIs = wrd.cvalidation + wrd.cArray + sys.cSpaceIsColonSpace; // validationArray is:
export const capplicationCommandAliasesIs = wrd.capplication + wrd.cCommand + wrd.cAliases + sys.cSpaceIsColonSpace; // applicationCommandAliases is:
export const ccommandNamespaceTypesInputArrayIs = wrd.ccommand + wrd.cNamespace + wrd.cTypes + wrd.cInput + wrd.cArray + sys.cSpaceIsColonSpace; // commandNamespaceTypesInputArray is:
export const ccommandNamespaceTypesConfirmedArrayIs = wrd.ccommand + wrd.cNamespace + wrd.cTypes + wrd.cConfirmed + wrd.cArray + sys.cSpaceIsColonSpace; // commandNamespaceTypesConfirmedArray is:
export const cnamespaceAllCommandsDataObjectIs = wrd.cnamespace + wrd.cAll + wrd.cCommands + wrd.cData + wrd.cObject + sys.cSpaceIsColonSpace; // namespaceAllCommandsDataObject is:
export const cprocessingFrameworkCommands = wrd.cprocessing + bas.cSpace + wrd.cframework + bas.cSpace + wrd.ccommands; // processing framework commands
export const cprocessingApplicationCommands = wrd.cprocessing + bas.cSpace + wrd.capplication + bas.cSpace + wrd.ccommands; // processing application commands
export const cprocessingPluginsCommands = wrd.cprocessing + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.ccommands; // processing plugin commands
export const cprocessingCommandsFor = wrd.cprocessing + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.cfor + bas.cColon + bas.cSpace; // processing commands for:
export const cframeworkCommandAliasesIs = wrd.cframework + wrd.cCommand + wrd.cAliases + sys.cSpaceIsColonSpace; // frameworkCommandAliases is:
export const cpluginsCommandAliasesIs = wrd.cplugins + wrd.cCommand + wrd.cAliases + sys.cSpaceIsColonSpace; // pluginsCommandAliases is:
export const cextraUserEnteredCommandAliasesIs = wrd.cextra + wrd.cUser + wrd.cEntered + wrd.cCommand + wrd.cAliases + sys.cSpaceIsColonSpace; // extraUserEnteredCommandAliases is:
export const cworkflowNamespaceTypesInputArrayIs = wrd.cworkflow + wrd.cNamespace + wrd.cTypes + wrd.cInput + wrd.cArray + sys.cSpaceIsColonSpace; // workflowNamespaceTypesInputArray is:
export const cworkflowNamespaceTypesConfirmedArrayIs = wrd.cworkflow + wrd.cNamespace + wrd.cTypes + wrd.cConfirmed + wrd.cArray + sys.cSpaceIsColonSpace; // workflowNamespaceTypesConfirmedArray is:
export const cprocessingFrameworkWorkflows = wrd.cprocessing + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cworkflows; // processing framework workflows
export const cprocessingApplicationWorkflows = wrd.cprocessing + bas.cSpace + wrd.capplication + bas.cSpace + wrd.cworkflows; // processing application workflows
export const cprocessingPluginsWorkflows = wrd.cprocessing + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cworkflows; // processing plugins workflows
export const cprocessingWorkflowsFor = wrd.cprocessing + bas.cSpace + wrd.cworkflows + bas.cSpace + wrd.cfor + bas.cColon + bas.cSpace; // processing workflows for:
export const cframeworkWorkflowsIs = wrd.cframework + wrd.cWorkflows + sys.cSpaceIsColonSpace; // frameworkWorkflows is:
export const capplicationWorkflowsIs = wrd.capplication + wrd.cWorkflows + sys.cSpaceIsColonSpace; // applicationWorkflows is:
export const cextraUserEnteredWorkflowsIs = wrd.cextra + wrd.cUser + wrd.cEntered + wrd.cWorkflows + sys.cSpaceIsColonSpace; // extraUserEnteredWorkflows is:
export const cnamespaceAllWorkflowsDataObjectIs = wrd.cnamespace + wrd.cAll + wrd.cWorkflows + wrd.cData + wrd.cObject + sys.cSpaceIsColonSpace; // namespaceAllWorkflowsDataObject is:
export const cdataNameIs = wrd.cdata + wrd.cName + sys.cSpaceIsColonSpace; // dataName is:
export const cdataIs = wrd.cdata + sys.cSpaceIsColonSpace; // data is:
export const cdataSourceIs = wrd.cdata + wrd.cSource + sys.cSpaceIsColonSpace; // dataSource is:
export const cpossibleDataNamesArrayIs = wrd.cpossible + wrd.cData + wrd.cNames + wrd.cArray + sys.cSpaceIsColonSpace; // possibleDataNamesArray is:
export const cdataElementIs = wrd.cdata + wrd.cElement + sys.cSpaceIsColonSpace; // dataElement is:
export const ccommandsAre = wrd.ccommands + sys.cSpaceAreColonSpace; // commands are:
export const cbusinessRulesAre = sys.cbusinessRules + sys.cSpaceAreColonSpace; // businessRules are:
export const cmessageFromChild = wrd.cmessage + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cchild + bas.cColon + bas.cSpace; // message from child:
export const cexitedWithCode = wrd.cExited + bas.cSpace + wrd.cwith + bas.cSpace + wrd.ccode + bas.cColon + bas.cSpace; // Exited with code:
export const candSignal = bas.cComa + bas.cSpace + wrd.cand + bas.cSpace + wrd.csignal + bas.cColon + bas.cSpace; // , and signal:
export const cisAbsent = wrd.cis + bas.cSpace + wrd.cabsent + bas.cDot; // is absent.
export const creadECONNRESET = wrd.cread + bas.cSpace + gen.cECONNRESET; // read ECONNRESET
export const cbufferIs = wrd.cbuffer + sys.cSpaceIsColonSpace; // buffer is:
export const capplicationRootPathIs = wrd.capplication + wrd.cRoot + wrd.cPath + sys.cSpaceIsColonSpace; // applicationRootPath is:
export const cErrorFromChildColon = wrd.cError + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cchild + bas.cColon + bas.cSpace; // Error from child:
export const cChildDisconnected = wrd.cChild + bas.cSpace + wrd.cdisconnected; // Child disconnected
export const cscriptContentIs = wrd.cScript + bas.cSpace + wrd.ccontent + sys.cSpaceIsColonSpace; // Script content is:
export const cOpeningColon = wrd.cOpening + bas.cColon + bas.cSpace; // Opening:
export const cExitingChildProcess = wrd.cExiting + bas.cSpace + wrd.cchild + bas.cSpace + wrd.cprocess; // Exiting child process
export const cErrorOnShell = wrd.cError + bas.cSpace + wrd.con + bas.cSpace + wrd.cshell + bas.cColon + bas.cSpace; // Error on shell:
export const coptionsAre = wrd.coptions + sys.cSpaceAreColonSpace; // options are:
// New Workflow defined messages.
export const cnamespaceWorkflowDataIs = wrd.cnamespace + wrd.cWorkflow + wrd.cData + sys.cSpaceIsColonSpace; // namespaceWorkflowData is:
export const callWorkflowDataIs = wrd.call + wrd.cWorkflow + wrd.cData + sys.cSpaceIsColonSpace; // allWorkflowData is:
export const cworkflowDataIs = wrd.cworkflow + wrd.cData + sys.cSpaceIsColonSpace; // workflowData is:
export const cworkflowEntityIs = wrd.cworkflow + wrd.cEntity + sys.cSpaceIsColonSpace; // workflowEntity is:
export const cworkflowObjectIs = wrd.cworkflow + wrd.cObject + sys.cSpaceIsColonSpace; // workflowObject is:
export const cworkflowIs = wrd.cworkflow + sys.cSpaceIsColonSpace; // workflow is:
export const cworkflowDataStructureWorkflowEntityIs = wrd.cworkflow + wrd.cData + wrd.cStructure + bas.cOpenBracket + wrd.cworkflow + wrd.cEntity + bas.cCloseBracket + sys.cSpaceIsColonSpace; // workflowDataStructure[workflowEntity] is:
export const cinternalWorkflowDataStructureWorkflowEntityIs = wrd.cinternal + wrd.cWorkflow + wrd.cData + wrd.cStructure + bas.cOpenBracket + wrd.cworkflow + wrd.cEntity + bas.cCloseBracket + sys.cSpaceIsColonSpace; // internalWorkflowDataStructure[workflowEntity] is:
export const cworkflowDataStructureWorkflowEntityIsOfTypeObject = wrd.cworkflow + wrd.cData + wrd.cStructure + bas.cOpenBracket + wrd.cworkflow + wrd.cEntity + bas.cCloseBracket + bas.cSpace + wrd.cis + bas.cSpace + wrd.cof + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cobject + bas.cExclamation; // workflowDataStructure[workflowEntity] is of type object!
export const cinternalWorkflowDataStructureWorkflowEntityIsOfTypeObject = wrd.cinternal + wrd.cWorkflow + wrd.cData + wrd.cStructure + bas.cOpenBracket + wrd.cworkflow + wrd.cEntity + bas.cCloseBracket + bas.cSpace + wrd.cis + bas.cSpace + wrd.cof + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cobject + bas.cExclamation; // internalWorkflowDataStructure[workflowEntity] is of type object!
export const callWorkflowsTempReturnedFromRecursiveCallIs = wrd.call + wrd.cWorkflows + wrd.cTemp + bas.cSpace + wrd.creturned + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.crecursive + bas.cSpace + wrd.ccall + sys.cSpaceIsColonSpace; // allWorkflowsTemp returned from the recursive call is:
export const callWorkflowsAfterPushingToArray1Is = wrd.call + wrd.cWorkflows + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cpushing + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.carray + bas.cSpace + num.c1 + sys.cSpaceIsColonSpace; // allWorkflows after pushing to the array 1 is:
export const callWorkflowsAfterPushingToArray2Is = wrd.call + wrd.cWorkflows + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cpushing + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.carray + bas.cSpace + num.c2 + sys.cSpaceIsColonSpace; // allWorkflows after pushing to the array 2 is:
export const cworkflowDataStructureIs = wrd.cworkflow + wrd.cData + wrd.cStructure + sys.cSpaceIsColonSpace; // workflowDataStructure is:
export const cinternalWorkflowDataStructureIs = wrd.cinternal + wrd.cWorkflow + wrd.cData + wrd.cStructure + sys.cSpaceIsColonSpace; // internalWorkflowDataStructure is:
export const cnamespaceToFindIs = wrd.cnamespace + wrd.cTo + wrd.cFind + sys.cSpaceIsColonSpace; // namespaceToFind is:
export const cworkflowNamespaceObjectIs = wrd.cworkflow + wrd.cNamespace + wrd.cObject + sys.cSpaceIsColonSpace; // workflowNamespaceObject is:
export const cleafNodeNameIs = wrd.cleaf + wrd.cNode + wrd.cName + sys.cSpaceIsColonSpace; // leafNodeName is:
export const cpropertyIs = wrd.cproperty + sys.cSpaceIsColonSpace; // property is:
export const cinputDataPropertyIs = wrd.cinput + wrd.cData + bas.cOpenBracket + wrd.cproperty + bas.cCloseBracket + sys.cSpaceIsColonSpace; // inputData[property] is:
export const cinputMetaDataPropertyIs = wrd.cinput + wrd.cMetaData + bas.cOpenBracket + wrd.cproperty + bas.cCloseBracket + sys.cSpaceIsColonSpace; // inputMetaData[property] is:
export const cworkflowEntityValueIs = wrd.cworkflow + wrd.cEntity + bas.cOpenBracket + wrd.cValue + bas.cCloseBracket + sys.cSpaceIsColonSpace; // workflowEntity[Value] is:
export const cworkflowParentIs = wrd.cworkflow + wrd.cParent + sys.cSpaceIsColonSpace; // workflowParent is:
export const cDoneWithForLoopReturnDataIs = wrd.cDone + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfor + bas.cDash + wrd.cloop + bas.cComa + bas.cSpace + creturnDataIs; // Done with the for-loop, returnData is:
export const cAfterRecursiveCallReturnDataPropertyIs = wrd.cAFTER + bas.cSpace + wrd.crecursive + bas.cSpace + wrd.ccall + bas.cSpace + wrd.creturn + wrd.cData + bas.cOpenBracket + wrd.cproperty + bas.cCloseBracket + sys.cSpaceIsColonSpace; // AFTER recursive call returnData[property] is:
export const cdataToMergeKeysJis = wrd.cdata + wrd.cTo + wrd.cMerge + wrd.cKeys + bas.cOpenBracket + bas.cj + bas.cCloseBracket + sys.cSpaceIsColonSpace; // dataToMergeKeys[j] is:
export const cAfterConcatenating2ArraysInputDataPropertyIs = wrd.cAFTER + bas.cSpace + wrd.cconcatenating + bas.cSpace + num.ctwo + bas.cSpace + wrd.carrays + bas.cColon + bas.cSpace + cinputDataPropertyIs; // AFTER concatenating two arrays: inputData[property] is:
export const cAfterRecursiveMergeInputDataPropertyIs = wrd.cAFTER + bas.cSpace + wrd.crecursive + bas.cSpace + wrd.cmerge + bas.cColon + bas.cSpace + cinputDataPropertyIs; // AFTER recursive merge: inputData[property] is:
export const cnamespaceDataObjectIs = wrd.cnamespace + wrd.cData + wrd.cObject + sys.cSpaceIsColonSpace; // namespaceDataObject is:
export const cdataStructureIs = wrd.cdata + wrd.cStructure + sys.cSpaceIsColonSpace; // dataStructure is:
export const ccommandQueueIs = wrd.ccommand + wrd.cQueue + sys.cSpaceIsColonSpace; // commandQueue is:
// MultiCommandAliases
export const cnamespaceCommandsDataIs = wrd.cnamespace + wrd.cCommands + wrd.cData + sys.cSpaceIsColonSpace; // namespaceCommandsData is:
export const callCommandAliasFlatDataIs = wrd.call + wrd.cCommand + wrd.cAlias + wrd.cFlat + wrd.cData + sys.cSpaceIsColonSpace; // allCommandAliasFlatData is:
export const cfoundValidCommandIs = wrd.cfound + wrd.cValid + wrd.cCommand + sys.cSpaceIsColonSpace; // foundValidCommand is:
export const ccommandAliasDataIs = wrd.ccommand + wrd.cAlias + wrd.cData + sys.cSpaceIsColonSpace; // commandAliasData is:
export const ccommandAliasNameIs = wrd.ccommand + wrd.cAlias + wrd.cName + sys.cSpaceIsColonSpace; // commandAliasName is:
export const ccommandAliasEntityIs = wrd.ccommand + wrd.cAlias + wrd.cEntity + sys.cSpaceIsColonSpace; // commandAliasEntity is:
export const ccommandAliasEntityValueIs = wrd.ccommand + wrd.cAlias + wrd.cEntity + wrd.cValue + sys.cSpaceIsColonSpace; // commandAliasEntityValue is:
export const ctempCommandAliasCountIs = wrd.ctemp + wrd.cCommand + wrd.cAlias + wrd.cCount + sys.cSpaceIsColonSpace; // tempCommandAliasCount is:
export const caddingCommandAliasCount = wrd.cadding + bas.cSpace + wrd.ccommand + wrd.cAlias + wrd.cCount + bas.cColon + bas.cSpace; // adding commandAliasCount:
export const cAfterAddingCommandAliasCountAndTempCommandAliasCount = wrd.cAfter + bas.cSpace + wrd.cadding + bas.cSpace + wrd.ccommand + wrd.cAlias + wrd.cCount + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctemp + wrd.cCommand + wrd.cAlias + wrd.cCount + bas.cColon + bas.cSpace; // After adding commandAliasCount and tempCommandAliasCount:
export const ccommandAliasCountIs = wrd.ccommand + wrd.cAlias + wrd.cCount + sys.cSpaceIsColonSpace; // commandAliasCount is:
export const ccommandAliasesObjectTempIs = wrd.ccommand + wrd.cAliases + wrd.cObject + wrd.cTemp + sys.cSpaceIsColonSpace; // commandAliasesObjectTemp is:
export const ccommandAliasObjectIs = wrd.ccommand + wrd.cAlias + wrd.cObject + sys.cSpaceIsColonSpace; // commandAliasObject is:
export const cinternalCommandAliasDataStructureIs = wrd.cinternal + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + sys.cSpaceIsColonSpace; // internalCommandAliasDataStructure is:
export const cinternalCommandAliasDataStructureCommandAliasEntityIs = wrd.cinternal + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + bas.cOpenBracket + wrd.ccommand + wrd.cAlias + wrd.cEntity + bas.cCloseBracket + sys.cSpaceIsColonSpace; // internalCommandAliasDataStructure[commandAliasEntity] is:
export const callCommandAliasesTempReturnedFromRecursiveCallIs = wrd.call + wrd.cCommand + wrd.cAliases + wrd.cTemp + bas.cSpace + wrd.creturned + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.crecursive + bas.cSpace + wrd.ccall + sys.cSpaceIsColonSpace; // allCommandAliasesTemp returned from the recursive call is:
export const callCommandsDataAfterPushingToTheArrayIs = wrd.call + wrd.cCommands + wrd.cData + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cpushing + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.carray + sys.cSpaceIsColonSpace; // allCommandsData after pushing to the array is:
export const callCommandsDataIs = wrd.call + wrd.cCommands + wrd.cData + sys.cSpaceIsColonSpace; // allCommandsData is:
export const ccommandAliasDataStructureCommandAliasEntityIs = wrd.ccommand + wrd.cAlias + wrd.cData + wrd.cStructure + bas.cOpenBracket + wrd.ccommand + wrd.cAlias + wrd.cEntity + bas.cCloseBracket + sys.cSpaceIsColonSpace; // commandAliasDataStructure[commandAliasEntity] is:
export const cnamespaceCommandsObjectIs = wrd.cnamespace + wrd.cCommands + wrd.cObject + sys.cSpaceIsColonSpace; // namespaceCommandsObject is:
export const cTheConstantDoesNotExist = wrd.cThe + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.cdoes + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cexist + bas.cColon + bas.cSpace; // The constant does not exist:
export const callWorkflowsDataIs = wrd.call + wrd.cWorkflows + wrd.cData + sys.cSpaceIsColonSpace; // allWorkflowsData is:
export const callWorkflowsToValidate = wrd.call + wrd.cWorkflows + wrd.cTo + wrd.cValidate + sys.cSpaceIsColonSpace; // allWorkflowsToValidate is:
export const cDuplicateWorkflowCountIs = wrd.cDuplicate + bas.cSpace + wrd.cworkflow + bas.cSpace + wrd.ccount + sys.cSpaceIsColonSpace ; // Duplicate workflow count is:
export const cDuplicateWorkflowNameIs = wrd.cDuplicate + bas.cSpace + wrd.cworkflow + bas.cSpace + wrd.cname + sys.cSpaceIsColonSpace ; // Duplicate workflow name is:
// Themes
export const cthemesNamesIs = wrd.cthemes + wrd.cNames + sys.cSpaceIsColonSpace; // themesNames is:
export const cthemeNameIs = wrd.ctheme + wrd.cName + sys.cSpaceIsColonSpace; // themeName is:
export const cthemePathIs = wrd.ctheme + wrd.cPath + sys.cSpaceIsColonSpace; // themePath is:
export const cthemesListIs = wrd.cthemes + wrd.cList + sys.cSpaceIsColonSpace; // themesList is:
export const cthemeDataIs = wrd.ctheme + wrd.cData + sys.cSpaceIsColonSpace; // themeData is:
export const cthemeConfigPathNameIs = wrd.ctheme + wrd.cConfig + wrd.cPath + wrd.cName + sys.cSpaceIsColonSpace; // themeConfigPathName is:
export const cthemeConfigFilesToLoadIs = wrd.ctheme + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + sys.cSpaceIsColonSpace; // themeConfigFilesToLoad is:
export const cdesiredThemeNameIs = wrd.cdesired + wrd.cTheme + wrd.cName + sys.cSpaceIsColonSpace; // desiredThemeName is:
export const cnamedThemePathIsVerified = wrd.cnamed + wrd.cTheme + wrd.cPath + bas.cSpace + wrd.cis + bas.cSpace + wrd.cverified + bas.cColon + bas.cSpace; // namedThemePath is verified:
export const cloadedThemeDataIs = wrd.cloaded + wrd.cTheme + wrd.cData + sys.cSpaceIsColonSpace; // loadedThemeData is:
export const cErrorLineIsNullOrUndefined = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cline + bas.cSpace + wrd.cis + bas.cSpace + 'null' + bas.cSpace + wrd.cor + bas.cSpace + 'undefined' + bas.cColon + bas.cSpace; // ERROR: line is null or undefined:
export const cSpaceFileIs = bas.cSpace + wrd.cfile + sys.cSpaceIsColonSpace; // file is:
export const cthemesDataIs = wrd.cthemes + wrd.cData + sys.cSpaceIsColonSpace; // themesData is:
export const capplicationThemesIs = wrd.capplication + wrd.cThemes + sys.cSpaceIsColonSpace; // applicationThemes is:
export const cthemesRootPathIs = wrd.cthemes + wrd.cRoot + wrd.cPath + sys.cSpaceIsColonSpace; // themesRootPath is:
export const cframeworkThemeDataIs = wrd.cframework + wrd.cTheme + wrd.cData + sys.cSpaceIsColonSpace; // frameworkThemeData is:
export const capplicationThemesPathIs = wrd.capplication + wrd.cThemes + wrd.cPath + sys.cSpaceIsColonSpace; // applicationThemesPath is:
export const capplicationThemeDataIs = wrd.capplication + wrd.cTheme + wrd.cData + sys.cSpaceIsColonSpace; // applicationThemeData is:
// Plugin specific
export const cconfigFilesPathIs = wrd.cconfig + wrd.cFiles + wrd.cPath + sys.cSpaceIsColonSpace; // configFilesPath is:
export const chighLevelPluginSystemConfigurationContainerIs = wrd.chigh + wrd.cLevel + wrd.cPlugin + wrd.cSystem + wrd.cConfiguration + wrd.cContainer + sys.cSpaceIsColonSpace; // highLevelPluginSystemConfigurationContainer is:
export const chighLevelPluginDebugConfigurationContainerIs = wrd.chigh + wrd.cLevel + wrd.cPlugin + wrd.cDebug + wrd.cConfiguration + wrd.cContainer + sys.cSpaceIsColonSpace; // highLevelPluginDebugConfigurationContainer is:
export const cfullyQualifiedNameIs = wrd.cfully + wrd.cQualified + wrd.cName + sys.cSpaceIsColonSpace; // fullyQualifiedName is:
export const cnameIs = wrd.cname + sys.cSpaceIsColonSpace; // name is:
export const cpluginIs = wrd.cplugin + sys.cSpaceIsColonSpace; // plugin is:
export const cnamespaceIs = wrd.cnamespace + sys.cSpaceIsColonSpace; // namespace is:
export const cValueBeforeRuleProcessingIs = wrd.cvalue + bas.cSpace + wrd.cBEFORE + bas.cSpace + wrd.crule + bas.cSpace + wrd.cprocessing + sys.cSpaceIsColonSpace; // value BEFORE rule processing is:
export const cValueAfterRuleProcessingIs = wrd.cvalue + bas.cSpace + wrd.cAFTER + bas.cSpace + wrd.crule + bas.cSpace + wrd.cprocessing + sys.cSpaceIsColonSpace; // value AFTER rule processing is:
export const creturnDataAfterObjectAssignIs = sys.creturnData + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cobject + bas.cDot + wrd.cassign + sys.cSpaceIsColonSpace; // returnData after object.assign is:
export const cbeginProcessingHighLevelPluginSystemConfigurationContainer = wrd.cbegin + bas.cSpace + wrd.cprocessing + bas.cSpace + wrd.chigh + wrd.cLevel + wrd.cPlugin + wrd.cSystem + wrd.cConfiguration + wrd.cContainer; // begin processing highLevelPluginSystemConfigurationContainer
export const cendProcessingHighLevelPluginSystemConfigurationContainer = wrd.cend + bas.cSpace + wrd.cprocessing + bas.cSpace + wrd.chigh + wrd.cLevel + wrd.cPlugin + wrd.cSystem + wrd.cConfiguration + wrd.cContainer; // end processing highLevelPluginSystemConfigurationContainer
export const cbeginProcessingHighLevelPluginDebugConfigurationContainer = wrd.cbegin + bas.cSpace + wrd.cprocessing + bas.cSpace + wrd.chigh + wrd.cLevel + wrd.cPlugin + wrd.cDebug + wrd.cConfiguration + wrd.cContainer; // begin processing highLevelPluginDebugConfigurationContainer
export const cendProcessingHighLevelPluginDebugConfigurationContainer = wrd.cend + bas.cSpace + wrd.cprocessing + bas.cSpace + wrd.chigh + wrd.cLevel + wrd.cPlugin + wrd.cDebug + wrd.cConfiguration + wrd.cContainer; // end processing highLevelPluginDebugConfigurationContainer
export const cpluginBusinessRulesIs = wrd.cplugin + wrd.cBusiness + wrd.cRules + sys.cSpaceIsColonSpace; // pluginBusinessRules is:
export const cplguinCommandsIs = wrd.cplugin + wrd.cCommands + sys.cSpaceIsColonSpace; // pluginCommands is:
export const cpluginConfigurationDataIs = wrd.cplugin + wrd.cConfiguration + wrd.cData + sys.cSpaceIsColonSpace; // pluginConfigurationData is:
export const cpluginCommandAliasesIs = wrd.cplugin + wrd.cCommand + wrd.cAliases + sys.cSpaceIsColonSpace; // pluginCommandAliases is:
export const cpluginWorkflowsIs = wrd.cplugin + wrd.cWorkflows + sys.cSpaceIsColonSpace; // pluginWorkflows is:
export const cpluginConstansValidationIs = wrd.cplugin + wrd.cConstants + wrd.cValidation + sys.cSpaceIsColonSpace; // pluginConstantsValidation is:
export const cpluginThemeDataIs = wrd.cplugin + wrd.cTheme + wrd.cData + sys.cSpaceIsColonSpace; // pluginThemeData is:
export const cpluginNameArrayIs = wrd.cplugin + wrd.cName + wrd.cArray + sys.cSpaceIsColonSpace; // pluginNameArray is:
export const cconstantsFilePathNamesIs = wrd.cconstants + wrd.cFile + wrd.cPath + wrd.cName + sys.cSpaceIsColonSpace; // constantsFilePathName is:
export const cconstantsFilePathValueIs = wrd.cconstants + wrd.cFile + wrd.cPath + wrd.cValue + sys.cSpaceIsColonSpace; // constantsFilePathValue is:
export const cnewPluginConstantValidationNameIs = wrd.cnew + wrd.cPlugin + wrd.cConstant + wrd.cValidation + wrd.cName + sys.cSpaceIsColonSpace; // newPluginConstantValidationName is:
export const cpluginObjectIs = wrd.cplugin + wrd.cObject + sys.cSpaceIsColonSpace; // pluginObject is:
export const cpluginParentObjectIs = wrd.cplugin + wrd.cParent + wrd.cObject + sys.cSpaceIsColonSpace; // pluginParentObject is:
export const cpluginBusinessRuleConstValidationObjectIs = wrd.cplugin + wrd.cBusiness + wrd.cRule + gen.cConst + wrd.cValidation + wrd.cObject + sys.cSpaceIsColonSpace; // pluginBusinessRuleConstValidationObject is:
export const cpluginCommandsConstValidationObjectIs = wrd.cplugin + wrd.cCommands + gen.cConst + wrd.cValidation + wrd.cObject + sys.cSpaceIsColonSpace; // pluginCommandsConstValidationObject is:
export const cloadedPlugin = wrd.cloaded + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace; // loaded plugin:
export const cpluginsLoadedListIs = wrd.cplugins + wrd.cLoaded + wrd.cList + sys.cSpaceIsColonSpace; // pluginsLoadedList is:
export const cpluginLoadedKeyIs = wrd.cplugin + wrd.cLoaded + wrd.cKey + sys.cSpaceIsColonSpace; // pluginLoadedKey is:
export const cpluginLoadedEntryIs = wrd.cplugin + wrd.cLoaded + wrd.cEntry + sys.cSpaceIsColonSpace; // pluginLoadedEntry is:
export const cpluginLoadedEntryNameIs = wrd.cplugin + wrd.cLoaded + wrd.cEntry + bas.cSpace + wrd.cname + sys.cSpaceIsColonSpace; // pluginLoadedEntry name is:
export const clistAllLoadedPluginsMessage01 = wrd.cList + bas.cSpace + wrd.cof + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cplugins + sys.cSpaceIsColonSpace; // List of loaded plugins is:
export const clistOfPluginsInRegistryIs = wrd.cList + bas.cSpace + wrd.cof + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cin + bas.cSpace + wrd.cregistry + sys.cSpaceIsColonSpace; // List of plugins in registry is:
export const cpluginListArrayIs = wrd.cplugin + wrd.cList + wrd.cArray + sys.cSpaceIsColonSpace; // pluginListArray is:
export const cpluginsListArrayIs = wrd.cplugins + wrd.cList + wrd.cArray + sys.cSpaceIsColonSpace; // pluginsListArray is:
export const caccumulatorPluginRegistryIs = wrd.caccumulator + wrd.cPlugin + wrd.cRegistry + sys.cSpaceIsColonSpace; // accumulatorPluginRegistry is:
export const cprefixPluginPathIs = wrd.cprefix + wrd.cPlugin + wrd.cPath + sys.cSpaceIsColonSpace; // prefixPluginPath is:
export const cformatStringIs = wrd.cformat + wrd.cString + sys.cSpaceIsColonSpace; // formatString is:
export const cmessageIs = wrd.cmessage + sys.cSpaceIsColonSpace; // message is:
export const cerrorIs = wrd.cerror + sys.cSpaceIsColonSpace; // error is:
export const cwarningIs = wrd.cwarning + sys.cSpaceIsColonSpace; // warning Is:
export const ccodeIs = wrd.ccode + sys.cSpaceIsColonSpace; // code is:
export const csignalIs = wrd.csignal + sys.cSpaceIsColonSpace; // signal is:
export const cpluginCommandAliasesPathIs = wrd.cplugin + wrd.cCommand + wrd.cAliases + wrd.cPath + sys.cSpaceIsColonSpace; // pluginCommandAliasesPath is:
export const cpluginWorkflowsPathIs = wrd.cplugin + wrd.cWorkflows + wrd.cPath + sys.cSpaceIsColonSpace; // pluginWorkflowsPath is:
export const cpluginThemesPathIs = wrd.cplugin + wrd.cThemes + wrd.cPath + sys.cSpaceIsColonSpace; // pluginThemesPath is:
export const cpluginCommandAliasesDataIs = wrd.cplugin + wrd.cCommand + wrd.cAliases + wrd.cData + sys.cSpaceIsColonSpace; // pluginCommandAliasesData is:
export const cpluginWorkflowsDataIs = wrd.cplugin + wrd.cWorkflows + wrd.cData + sys.cSpaceIsColonSpace; // pluginWorkflowsData is:
export const cpluginThemesDataIs = wrd.cplugin + wrd.cThemes + wrd.cData + sys.cSpaceIsColonSpace; // pluginThemesData is:
export const chaystacksConfigDataIs = wrd.chaystacks + wrd.cConfig + wrd.cData + sys.cSpaceIsColonSpace; // haystacksConfigData is:
export const clogFileIs = wrd.clog + wrd.cFile + sys.cSpaceIsColonSpace; // logFile is:
export const copenFileSyncMessage = wrd.copen + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfile + bas.cSpace + wrd.csync + bas.cColon + bas.cSpace; // open the file sync:
export const cappendFileSyncMessage = wrd.cappend + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfile + bas.cSpace + wrd.csync + bas.cColon + bas.cSpace; // append to the file sync:
export const cDoneAppendingToFileMessage = wrd.cDONE + bas.cSpace + wrd.cappending + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // DONE appending to the file:
export const caliasesPathIs = wrd.caliases + wrd.cPath + sys.cSpaceIsColonSpace; // aliasesPath is:
export const cworkflowsPathIs = wrd.cworkflows + wrd.cPath + sys.cSpaceIsColonSpace; // workflowsPath is:
export const cthemesPathIs = wrd.cthemes + wrd.cPath + sys.cSpaceIsColonSpace; // themesPath is:
export const cpluginCodeRootPathIs = wrd.cplugin + wrd.cCode + wrd.cRoot + wrd.cPath + sys.cSpaceIsColonSpace; // pluginCodeRootPath is:
export const cpluginRootPathIs = wrd.cplugin + wrd.cRoot + wrd.cPath + sys.cSpaceIsColonSpace; // pluginRootPath is:
export const cpluginReleaseResourcesPathIs = wrd.cplugin + wrd.cRelease + wrd.cResources + wrd.cPath + sys.cSpaceIsColonSpace; // pluginReleaseResourcesPath is:
export const cfilesToLoadIsValid = wrd.cfiles + wrd.cTo + wrd.cLoad + bas.cSpace + wrd.cis + bas.cSpace + wrd.cvalid; // filesToLoad is valid
export const cpluginsFromPathArrayIs = wrd.cplugins + wrd.cFrom + wrd.cPath + wrd.cArray + sys.cSpaceIsColonSpace; // pluginsFromPathArray is:

// Capture the session date-time-stamp so we can determine a log file name.
export const cCaptureSessionDateTimeStampLogFileName = wrd.cCapture + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csession + bas.cSpace + wrd.cdate + bas.cDash + wrd.ctime + bas.cDash + wrd.cstamp + bas.cSpace + bas.cso + bas.cSpace + wrd.cwe + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cdetermine + bas.cSpace + bas.ca + bas.cSpace + wrd.clog + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cDot;
// WARNING: Some rules do not exist:
export const cProcessRulesWarningSomeRulesDoNotExist = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cSome + bas.cSpace + wrd.crules + bas.cSpace + wrd.cdo + bas.cSpace + gen.cnot + bas.cSpace + wrd.cexist + bas.cColon + bas.cSpace;
// WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
export const cDetermineWordDelimiterMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cMixed + bas.cSpace + wrd.cstring + bas.cDot + bas.cSpace; // WARNING: Mixed string.
export const cDetermineWordDelimiterMessage2 = wrd.cCannot + bas.cSpace + wrd.cdetermine + bas.cSpace + wrd.cwhat + bas.cSpace + wrd.cdelimiter + bas.cSpace + wrd.cshould + bas.cSpace; // Cannot determine what delimiter should
export const cDetermineWordDelimiterMessage3 = bas.cbe + bas.cSpace + wrd.cused + bas.cSpace + bas.cto + bas.cSpace + wrd.cbreak + bas.cSpace + bas.cup + bas.cSpace + wrd.cthe + bas.cSpace; // be used to break up the
export const cDetermineWordDelimiterMessage4 = wrd.cstring + bas.cSpace + wrd.cinto + bas.cSpace + wrd.cwords + bas.cDot; // string into words.
// WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
export const cGetWordCountInStringMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cMixed + bas.cSpace + wrd.cstring + bas.cDot + bas.cSpace; // WARNING: Mixed string.
export const cGetWordCountInStringMessage2 = wrd.cCannot + bas.cSpace + wrd.cdetermine + bas.cSpace + wrd.chow + bas.cSpace + wrd.cwords + bas.cSpace + wrd.care + bas.cSpace + wrd.cdelimited + bas.cSpace; // Cannot determine how words are delimited
export const cGetWordCountInStringMessage3 = bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cstring + bas.cDot + bas.cSpace + wrd.cUnable + bas.cSpace + bas.cto + bas.cSpace + wrd.ccount + bas.cSpace + wrd.cwords + bas.cDot; // in the string. Unable to count words.
// WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
export const cGetWordsArrayFromStringMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cMixed + bas.cSpace + wrd.cstring + bas.cDot + bas.cSpace; // WARNING: Mixed string.
export const cGetWordsArrayFromStringMessage2 = wrd.cCannot + bas.cSpace + wrd.cget + bas.cSpace + wrd.cwords + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cstring + bas.cDot + bas.cSpace; // Cannot get words from the string.
export const cGetWordsArrayFromStringMessage3 = wrd.cUnable + bas.cSpace + bas.cto + bas.cSpace + wrd.cdetermine + bas.cSpace + wrd.cwords + bas.cDot; // Unable to determine words.
// Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
export const cCommandNamePrompt1 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cnamed + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cwhere + bas.cSpace; // Please enter a named command where
export const cCommandNamePrompt2 = wrd.cthe + bas.cSpace + num.cfirst + bas.cSpace + wrd.cword + bas.cSpace + wrd.cstarts + bas.cSpace + wrd.cwith + bas.cSpace + bas.ca + bas.cSpace; // the first word starts with a
export const cCommandNamePrompt3 = wrd.clower + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cletter + bas.cSpace + wrd.cand + bas.cSpace + wrd.call + bas.cSpace + wrd.cother + bas.cSpace; // lower case letter and all other
export const cCommandNamePrompt4 = wrd.cwords + bas.cSpace + bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cnamed + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cstart + bas.cSpace; // words in the named command start
export const cCommandNamePrompt5 = wrd.cwith + bas.cSpace + bas.can + bas.cSpace + wrd.cupper + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cletter + bas.cColon + bas.cSpace; // with an upper case letter:
// Please enter a list of command word abreviations/acronyms/aliases for the command word:
export const cCommandWordAliasPrompt1 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.clist + bas.cSpace + bas.cof + bas.cSpace + wrd.ccommand + bas.cSpace;
export const cCommandWordAliasPrompt2 = wrd.cword + bas.cSpace + wrd.cabreviations + bas.cForwardSlash + wrd.cacronyms + bas.cForwardSlash + wrd.caliases + bas.cSpace;
export const cCommandWordAliasPrompt3 = wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cword + bas.cColon + bas.cSpace;
// Please enter a string you would like to define as a constant in the constants system:
export const cConstantPrompt1 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cwould + bas.cSpace; // Please enter a string you would
export const cConstantPrompt2 = wrd.clike + bas.cSpace + bas.cto + bas.cSpace + wrd.cdefine + bas.cSpace + bas.cas + bas.cSpace + bas.ca + bas.cSpace + wrd.cconstant + bas.cSpace; // like to define as a constant
export const cConstantPrompt3 = bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.csystem + bas.cColon + bas.cSpace; // in the constants system:
// Please enter a coma separated list of strings you would like to define in the constants system:
export const cConstantsListPrompt1 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.ccoma + bas.cSpace + wrd.cseparated + bas.cSpace + wrd.clist + bas.cSpace + bas.cof + bas.cSpace;
export const cConstantsListPrompt2 = wrd.cstrings + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cwould + bas.cSpace + wrd.clike + bas.cSpace + bas.cto + bas.cSpace + wrd.cdefine + bas.cSpace + bas.cin + bas.cSpace;
export const cConstantsListPrompt3 = wrd.cthe + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.csystem + bas.cColon + bas.cSpace;
// Please enter a coma separated list of strings you would like to search for common patterns:
export const cConstantsListPatternSearchPrompt1 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.ccoma + bas.cSpace + wrd.cseparated + bas.cSpace + wrd.clist + bas.cSpace + bas.cof + bas.cSpace; // Please enter a coma separated list of
export const cConstantsListPatternSearchPrompt2 = wrd.cstrings + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cwould + bas.cSpace + wrd.clike + bas.cSpace + bas.cto + bas.cSpace + wrd.csearch + bas.cSpace + wrd.cfor + bas.cSpace; // strings you would like to search for
export const cConstantsListPatternSearchPrompt3 = wrd.ccommon + bas.cSpace + wrd.cpatterns + bas.cColon + bas.cSpace; // common patterns:
// ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
// 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
// 'Please reformat the constant correctly so a line of code can be generated for you.
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cAttempted + bas.cSpace + bas.cto + bas.cSpace + wrd.cgenerate + bas.cSpace + bas.ca + bas.cSpace + wrd.csuggested + bas.cSpace; // ERROR: Attempted to generate a suggested
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = wrd.cline + bas.cSpace + bas.cof + bas.cSpace + wrd.ccode + bas.cSpace + bas.cto + bas.cSpace + wrd.cvalidate + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconstant + bas.cComa + bas.cSpace; // line of code to validate the constant,
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = wrd.cbut + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconstant + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + wrd.cformatted + bas.cSpace + wrd.ccorrectly + bas.cComa + bas.cSpace; // but the constant is not formatted correctly,
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = bas.cit + bas.cSpace + wrd.cshould + bas.cSpace + wrd.cbegin + bas.cSpace + wrd.cwith + bas.cSpace + bas.ca + bas.cSpace + wrd.clower + bas.cSpace + wrd.ccase + bas.cSpace + bas.cDoubleQuote + bas.cc + bas.cDoubleQuote + bas.cDot + bas.cSpace; // it should begin with a lower case "c".
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = wrd.cPlease + bas.cSpace + wrd.creformat + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.ccorrectly + bas.cSpace + bas.cso + bas.cSpace + bas.ca + bas.cSpace; // Please reformat the constant correctly so a
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = wrd.cline + bas.cSpace + bas.cof + bas.cSpace + wrd.ccode + bas.cSpace + wrd.ccan + bas.cSpace + bas.cbe + bas.cSpace + wrd.cgenerated + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cyou + bas.cDot; // line of code can be generated for you.
export const cSearchForPatternsInStringArrayMessage1 = sys.ccurrentMasterStringArrayElement + bas.cSpace + wrd.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wrd.ccontain + bas.cSpace + bas.ca + bas.cSpace + wrd.cspace + bas.cSpace + wrd.ccharacter; // currentMasterStringArrayElement does not contain a space character
export const cSearchForPatternsInStringArrayMessage2 = wrd.clength + bas.cSpace + wrd.cof + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cto + bas.cSpace + wrd.ccompare + sys.cSpaceIsColonSpace; // length of string to compare is:
export const cSearchForPatternsInStringArrayMessage3 = wrd.clength + bas.cSpace + wrd.cof + bas.cSpace + wrd.ccurrent + wrd.cMaster + wrd.cString + wrd.cArray + wrd.cElement + sys.cSpaceIsColonSpace; // length of currentMasterStringArrayElement is:
export const cSearchForPatternsInStringArrayMessage4 = wrd.cPUSHING + bas.cSpace + bas.ca + bas.cSpace + wrd.cnew + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.cpattern + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.coutput + bas.cSpace + wrd.carray + bas.cColon + bas.cSpace; // PUSHING a new constant pattern to the output array:
// WARNING: The current string being searched contains a space character, we are going to skip comparison.
export const cSearchForPatternsInStringArrayMessage5 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.ccurrent + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cbeing + bas.cSpace + wrd.csearched + bas.cSpace + wrd.ccontains + bas.cSpace + bas.ca + bas.cSpace + wrd.cspace + bas.cSpace + wrd.ccharacter + bas.cComa + bas.cSpace; // WARNING: The current string being searched contains a space character,
export const cSearchForPatternsInStringArrayMessage6 = bas.cwe + bas.cSpace + wrd.care + bas.cSpace + wrd.cgoing + bas.cSpace + bas.cto + bas.cSpace + wrd.cskip + bas.cSpace + wrd.ccomparison + bas.cDot; // we are going to skip comparison.
// WARNING: InputData was not an array or had an empty array.
export const cSearchForPatternsInStringArrayMessage7 = wrd.cWARNING + bas.cColon + bas.cSpace + cInputData + bas.cSpace + wrd.cwas + bas.cSpace + gen.cnot + bas.cSpace + bas.can + bas.cSpace + wrd.carray + bas.cSpace + bas.cor + bas.cSpace + wrd.chad + bas.cSpace + bas.can + bas.cSpace + wrd.cempty + bas.cSpace + wrd.carray + bas.cDot; // WARNING: InputData was not an array or had an empty array.
// WARNING: No data to load, please specify a valid path & filename!
export const cLoadDataFileMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + bas.cNo + bas.cSpace + wrd.cdata + bas.cSpace + bas.cto + bas.cSpace + wrd.cload + bas.cComa + bas.cSpace; // WARNING: No data to load,
export const cloadDataFileMessage2 = wrd.cplease + bas.cSpace + wrd.cspecify + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cpath + bas.cSpace + bas.cAndPersand + bas.cSpace + wrd.cfilename + bas.cExclamation; // please specify a valid path & filename!
export const cloadDataFileMessage3 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cInvalid + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cformat + bas.cComa + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cformats + bas.cSpace + wrd.csupported + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // WARNING: Invalid file format, file formats supported are:
// WARNING: No data to save, please specify a valid path & filename!
export const csaveDataFileMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + bas.cNo + bas.cSpace + wrd.cdata + bas.cSpace + bas.cto + bas.cSpace + wrd.csave + bas.cComa + bas.cSpace; // WARNING: No data to save,
export const ccommandSequencerMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cadvanced + bas.cDot + wrd.ccommand + wrd.cSequencer + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cwas + bas.cSpace + gen.cnot + bas.cSpace + wrd.cfound + bas.cComa + bas.cSpace; // WARNING: advanced.commandSequencer: The specified command was not found,
export const ccommandSequencerMessage2 = wrd.cplease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot; // please enter a valid command and try again.
export const cworkflowMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cadvanced + bas.cDot + wrd.cworkflow + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cworkflow + bas.cColon + bas.cSpace; // WARNING: advanced.workflow: The specified workflow:
export const cworkflowMessage2 = bas.cSpace + wrd.cwas + bas.cSpace + gen.cnot + bas.cSpace + wrd.cfound + bas.cSpace + bas.cin + bas.cSpace + wrd.ceither + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csystem + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cworkflows + bas.cComa + bas.cSpace + bas.cor + bas.cSpace + wrd.cclient + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cworkflows + bas.cDot; // was not found in either the system defined workflows, or client defined workflows.
export const cworkflowMessage3 = bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cworkflow + bas.cSpace + wrd.cname + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot; // Please enter a valid workflow name and try again.
// After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
export const ccommandGeneratorMessage1 = wrd.cAfter + bas.cSpace + wrd.cattempting + bas.cSpace + bas.cto + bas.cSpace + wrd.creplace + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csecondary + wrd.cCommand + gen.cArgs + wrd.cDelimiter + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cprimary + wrd.cCommand + wrd.cDelimiter + bas.cSpace + wrd.ccommand + wrd.cString + sys.cSpaceIsColonSpace;
// After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
export const ccommandGeneratorMessage2 = wrd.cAfter + bas.cSpace + wrd.cattempting + bas.cSpace + bas.cto + bas.cSpace + wrd.creplace + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctertiary + wrd.cCommand + wrd.cDelimiter + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csecondary + wrd.cCommand + gen.cArgs + wrd.cDelimiter + bas.cSpace + wrd.ccommand + wrd.cString + sys.cSpaceIsColonSpace;
// WARNING: advanced.commandGenerator: Must enter a number greater than 0, number entered:
export const ccommandGeneratorMessage3 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cadvanced + bas.cDot + wrd.ccommand + wrd.cGenerator + bas.cColon + bas.cSpace + wrd.cMust + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.cgreater + bas.cSpace + wrd.cthan + bas.cSpace + num.c0 + bas.cComa + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.centered + bas.cColon + bas.cSpace;
// WARNING: advanced.commandGenerator: Number entered for the number of commands to generate is not a number:
export const ccommandGeneratorMessage4 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cadvanced + bas.cDot + wrd.ccommand + wrd.cGenerator + bas.cColon + bas.cSpace + wrd.cNumber + bas.cSpace + wrd.centered + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cnumber + bas.cSpace + bas.cof + bas.cSpace + wrd.ccommands + bas.cSpace + bas.cto + bas.cSpace + wrd.cgenerate + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + bas.ca + bas.cSpace + wrd.cnumber + bas.cColon + bas.cSpace;
// WARNING: advanced.commandGenerator: The specified command:
export const ccommandGeneratorMessage5 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cadvanced + bas.cDot + wrd.ccommand + wrd.cGenerator + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.ccommand + bas.cColon + bas.cSpace;
// was not found, please enter a valid command and try again.
export const ccommandGeneratorMessage6 = bas.cSpace + wrd.cwas + bas.cSpace + gen.cnot + bas.cSpace + wrd.cfound + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot;
// Command can be called by passing parameters and bypass the prompt system.
export const ccommandAliasGeneratorMessage1 = wrd.cCommand + bas.cSpace + wrd.ccan + bas.cSpace + bas.cbe + bas.cSpace + wrd.ccalled + bas.cSpace + bas.cby + bas.cSpace + wrd.cpassing + bas.cSpace + wrd.cparameters + bas.cSpace + wrd.cand + bas.cSpace + wrd.cbypass + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cprompt + bas.cSpace + wrd.csystem + bas.cDot;
// EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
export const ccommandAliasGeneratorMessage2 = wrd.cEXAMPLE + bas.cColon + bas.cSpace + bas.cOpenCurlyBrace + bas.cDoubleQuote + wrd.cconstants + bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cc + bas.cComa + gen.cconst + bas.cDoubleQuote + bas.cComa + bas.cDoubleQuote + wrd.cGenerator + bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cg + bas.cComa + phn.cgen + bas.cComa + phn.cgen + bas.crt + bas.cr + bas.cDoubleQuote + bas.cComa + bas.cDoubleQuote + wrd.cList +
bas.cDoubleQuote + bas.cColon + bas.cDoubleQuote + bas.cl + bas.cComa + bas.cls + bas.ct + bas.cDoubleQuote + bas.cCloseCurlyBrace;
// INVALID INPUT: Please enter a valid camel-case command name.
export const ccommandAliasGeneratorMessage3 = wrd.cINVALID + bas.cSpace + wrd.cINPUT + bas.cColon + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccamel + bas.cDash + wrd.ccase + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cname + bas.cDot;
// INVALID INPUT: Please enter a valid command word alias list.
export const ccommandAliasGeneratorMessage4 = wrd.cINVALID + bas.cSpace + wrd.cINPUT + bas.cColon + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cword + bas.cSpace + wrd.calias + bas.cSpace + wrd.clist + bas.cDot;
// INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
export const ccommandAliasGeneratorMessage5 = wrd.cINVALID + bas.cSpace + wrd.cCOMMAND + bas.cSpace + wrd.cINPUT + bas.cColon + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwhen + bas.cSpace + wrd.ctrying + bas.cSpace + bas.cto + bas.cSpace + wrd.ccall + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cparameters + bas.cDot;
// INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
export const cconstantsGeneratorMessage1 = wrd.cINVALID + bas.cSpace + wrd.cINPUT + bas.cColon + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.cvalue + bas.cSpace + wrd.cthat + bas.cSpace + wrd.ccontains + bas.cSpace + wrd.cmore + bas.cSpace + wrd.cthan + bas.cSpace + num.c4 + bas.cSpace + wrd.ccharacters + bas.cDot;
// WARNING: The constant has already been defined in the following library(ies):
export const cconstantsGeneratorMessage2 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.chas + bas.cSpace + wrd.calready + bas.cSpace + wrd.cbeen + bas.cSpace + wrd.cdefined + bas.cSpace + bas.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfollowing + bas.cSpace + wrd.clibrary + bas.cOpenParenthesis + phn.cies + bas.cCloseParenthesis + bas.cColon + bas.cSpace;
// The enableConstantsValidation flag is disabled.
export const cconstantsGeneratorMessage3 = wrd.cThe + bas.cSpace + wrd.cenable + wrd.cConstants + wrd.cValidation + bas.cSpace + wrd.cflag + bas.cSpace + wrd.cis + bas.cSpace + wrd.cdisabled + bas.cDot + bas.cSpace;
// Enable this flag in the configuration settings to activate this command.
export const cconstantsGeneratorMessage4 = wrd.cEnable + bas.cSpace + wrd.cthis + bas.cSpace + wrd.cflag + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csettings + bas.cSpace + wrd.cto + bas.cSpace + wrd.cactivate + bas.cSpace + wrd.cthis + bas.cSpace + wrd.ccommand + bas.cDot;
// INVALID INPUT: Please enter a valid constant list.
export const cconstantsGeneratorListMessage1 = wrd.cINVALID + bas.cSpace + wrd.cINPUT + bas.cColon + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.clist + bas.cDot;
// PASSED: All duplicate command aliases validation tests!
export const cvalidateCommandAliasesMessage1 = wrd.cPASSED + bas.cColon + bas.cSpace + wrd.cAll + bas.cSpace + wrd.cduplicate + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctests + bas.cExclamation;
// About to call the rule broker to process on the number of single quotes
export const cgetCommandArgsMessage1 = wrd.cAbout + bas.cSpace + bas.cto + bas.cSpace + wrd.ccall + bas.cSpace + wrd.cthe + bas.cSpace + wrd.crule + bas.cSpace + wrd.cbroker + bas.cSpace + bas.cto + bas.cSpace + wrd.cprocess + bas.cSpace + bas.con + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cnumber + bas.cSpace + bas.cof + bas.cSpace + wrd.csingle + bas.cSpace + wrd.cquotes + bas.cSpace; // About to call the rule broker to process on the number of single quotes
// and determine if it-be even or odd
export const cgetCommandArgsMessage2 = wrd.cand + bas.cSpace + wrd.cdetermine + bas.cSpace + bas.cif + bas.cSpace + bas.cit + bas.cDash + bas.cbe + bas.cSpace + wrd.ceven + bas.cSpace + bas.cor + bas.cSpace + wrd.codd;
// WARNING: Command does not exist, please enter a valid command and try again!
export const cexecuteCommandMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cdoes + bas.cSpace + gen.cnot + bas.cSpace + wrd.cexist + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cExclamation;
// WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
export const cparseBusinessRuleArgumentMessage1 = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.clexical + bas.cDot + wrd.cparse + wrd.cBusiness + wrd.cRule + wrd.cArgument + bas.cColon + bas.cSpace + wrd.cInvalid + bas.cSpace + wrd.ccombination + bas.cSpace + bas.cof + bas.cSpace + wrd.cinputs + bas.cSpace + bas.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clexical + bas.cDot + wrd.cparse + wrd.cBusiness + wrd.cRule + wrd.cArgument + bas.cSpace + wrd.cfunction + bas.cExclamation + bas.cSpace;
export const cparseBusinessRuleArgumentMessage2 = wrd.cPlease + bas.cSpace + wrd.cadjust + bas.cSpace + wrd.cinputs + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot; //Please adjust inputs and try again.
// Caught the case the user may have only specified a single data hive, such as the configuration data hive.
export const cprintDataHiveAttributesMessage1 = wrd.cCaught + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cuser + bas.cSpace + wrd.cmay + bas.cSpace + wrd.chave + bas.cSpace + wrd.conly + bas.cSpace + wrd.cspecified + bas.cSpace + bas.ca + bas.cSpace + wrd.csingle + bas.cSpace + wrd.cdata + bas.cSpace + wrd.chive + bas.cComa + bas.cSpace;
export const cprintDataHiveAttributesMessage2 = wrd.csuch + bas.cSpace + bas.cas + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cdata + bas.cSpace + wrd.chive + bas.cDot;
// ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
export const cprintDataHiveAttributesMessage3 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cname + bas.cDot + wrd.cspace + bas.cDot + wrd.cattribute + wrd.cName + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csystem + bas.cSpace + bas.cto + bas.cSpace + wrd.cprint + bas.cSpace + wrd.cout + bas.cSpace + wrd.cattribute + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfrom + bas.cDot;
// Nothing to echo.
export const cNothingToEcho = wrd.cNothing + bas.cSpace + bas.cto + bas.cSpace + wrd.cecho + bas.cDot; // Nothing to echo.
// ERROR: Did not find any matching style logic pattern!
export const cDidNotFindAnyMatchingStyleLogicPattern = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cDid + bas.cSpace + gen.cnot + bas.cSpace + wrd.cfind + bas.cSpace + wrd.cany + bas.cSpace + wrd.cmatching + bas.cSpace + wrd.cstyle + bas.cSpace + wrd.clogic + bas.cSpace + wrd.cpattern + bas.cExclamation;
// ERROR: changeSetting command, invalid entry:
export const cchangeSettingError01 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cchange + wrd.cSetting + bas.cSpace + wrd.ccommand + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.centry + bas.cColon + bas.cSpace;
// Please enter a fully qualified path to a data property in the system,
export const cchangeSettingError02 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cfully + bas.cSpace + wrd.cqualified + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cto + bas.cSpace + bas.ca + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cproperty + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csystem + bas.cComa;
// and a value that you would like to assign to that data property.
export const cchangeSettingError03 = wrd.cand + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalue + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cwould + bas.cSpace + wrd.clike + bas.cSpace + wrd.cto + bas.cSpace + wrd.cassign + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cproperty + bas.cDot;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Workflow messages
// The recursive call returned false,
export const cgetAllWorkflowsMessage01 = wrd.cThe + bas.cSpace + wrd.crecursive + bas.cSpace + wrd.ccall + bas.cSpace + wrd.creturned + bas.cSpace + gen.cfalse + bas.cComa + bas.cSpace;
// so push the current entity to the output array!
export const cgetAllWorkflowsMessage02 = wrd.cso + bas.cSpace + wrd.cpush + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccurrent + bas.cSpace + wrd.centity + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.coutput + bas.cSpace + wrd.carray + bas.cExclamation;
// workflowEntity is NOT an object type,
export const cgetAllWorkflowsMessage03 = wrd.cworkflow + wrd.cEntity + bas.cSpace + wrd.cis + bas.cSpace + gen.cNOT + bas.cSpace + wrd.can + bas.cSpace + wrd.cobject + bas.cSpace + wrd.ctype + bas.cComa + bas.cSpace;
// so push it to the output array!
export const cgetAllWorkflowsMessage04 = wrd.cso + bas.cSpace + wrd.cpush + bas.cSpace + wrd.cit + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.coutput + bas.cSpace + wrd.carray + bas.cExclamation;
// calling getWorkflowNamespaceDataObject() function,
export const cworkfowHelpMessage01 = wrd.ccalling + bas.cSpace + wrd.cget + wrd.cWorkflow + wrd.cNamespace + wrd.cData + wrd.cObject + bas.cOpenParenthesis + bas.cCloseParenthesis + bas.cSpace + wrd.cfunction + bas.cComa + bas.cSpace;
// because the user entered some namespace we should look for!
export const cworkfowHelpMessage02 = wrd.cbecause + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cuser + bas.cSpace + wrd.centered + bas.cSpace + wrd.csome + bas.cSpace + wrd.cnamespace + bas.cSpace + wrd.cwe + bas.cSpace + wrd.cshould + bas.cSpace + wrd.clook + bas.cSpace + wrd.cfor + bas.cExclamation;
// NOW call getAllWorkflows with the above found data!
export const cworkfowHelpMessage03 = wrd.cNOW + bas.cSpace + wrd.ccall + bas.cSpace + wrd.cget + wrd.cAll + wrd.cWorkflows + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cabove + bas.cSpace + wrd.cfound + bas.cSpace + wrd.cdata + bas.cExclamation;
// User did not enter any parameters,
export const cworkfowHelpMessage04 = wrd.cUser + bas.cSpace + wrd.cdid + bas.cSpace + wrd.cnot + bas.cSpace + wrd.center + bas.cSpace + wrd.cany + bas.cSpace + wrd.cparameters + bas.cComa + bas.cSpace;
// just call getAllWorkflows functions with no input,
export const cworkfowHelpMessage05 = wrd.cjust + bas.cSpace + wrd.ccall + bas.cSpace + wrd.cget + wrd.cAll + wrd.cWorkflows + bas.cSpace + wrd.cfunctions + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cno + bas.cSpace + wrd.cinput + bas.cComa + bas.cSpace;
// will return all and print all.
export const cworkfowHelpMessage06 = wrd.cwill + bas.cSpace + wrd.creturn + bas.cSpace + wrd.call + bas.cSpace + wrd.cand + bas.cSpace + wrd.cprint + bas.cSpace + wrd.call + bas.cDot;
// property is not a Workflow,
export const cprocessXmlLeafNodeMessage01 = wrd.cproperty + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + bas.ca + bas.cSpace + wrd.cWorkflow + bas.cComa + bas.cSpace;
// so call processXmlLeafNode() recursively!
export const cprocessXmlLeafNodeMessage02 = wrd.cso + bas.cSpace + wrd.ccall + bas.cSpace + wrd.cprocess + gen.cXml + wrd.cLeaf + wrd.cNode + bas.cOpenParenthesis + bas.cCloseParenthesis + bas.cSpace + wrd.crecursively + bas.cExclamation;
// property is in inputData
export const cobjectDeepMergeMessage01 = wrd.cproperty + bas.cSpace + wrd.cis + bas.cSpace + wrd.cin + bas.cSpace + wrd.cinput + wrd.cData;
// inputData[property] is not an object!
export const cobjectDeepMergeMessage02 = wrd.cinput + wrd.cData + bas.cOpenBracket + wrd.cproperty + bas.cCloseBracket + bas.cSpace + wrd.cis + bas.cSpace + gen.cnot + bas.cSpace + wrd.can + bas.cSpace + wrd.cobject + bas.cExclamation;
// Assign it directly.
export const cobjectDeepMergeMessage03 = wrd.cAssign + bas.cSpace + wrd.cit + bas.cSpace + wrd.cdirectly + bas.cDot;
// inputData[property] is an object!
export const cobjectDeepMergeMessage04 = wrd.cinput + wrd.cData + bas.cOpenBracket + wrd.cproperty + bas.cCloseBracket + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.cobject + bas.cExclamation;
// inputMetaData[property] is not an object,
export const cobjectDeepMergeMessage05 = wrd.cinput + wrd.cMetaData + bas.cOpenBracket + wrd.cproperty + bas.cCloseBracket + bas.cSpace + wrd.cis + bas.cSpace + gen.cnot + bas.cSpace + wrd.can + bas.cSpace + wrd.cobject + bas.cComa + bas.cSpace;
// inputMetaData[property] is an object.
export const cobjectDeepMergeMessage06 = wrd.cinput + wrd.cMetaData + bas.cOpenBracket + wrd.cproperty + bas.cCloseBracket + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.cobject + bas.cDot;
// Array lengths are the same at this level.
export const cobjectDeepMergeMessage07 = wrd.cArray + bas.cSpace + wrd.clengths + bas.cSpace + wrd.care + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csame + bas.cSpace + wrd.cat + bas.cSpace + wrd.cthis + bas.cSpace + wrd.clevel + bas.cDot;
// Two arrays get concatenated.
export const cobjectDeepMergeMessage08 = num.cTwo + bas.cSpace + wrd.carrays + bas.cSpace + wrd.cget + bas.cSpace + wrd.cconcatenated + bas.cDot;
// Two objects get merged recursively.
export const cobjectDeepMergeMessage09 = num.cTwo + bas.cSpace + wrd.cobjects + bas.cSpace + wrd.cget + bas.cSpace + wrd.cmerged + bas.cSpace + wrd.crecursively + bas.cDot;
// property is not in inputData,
export const cobjectDeepMergeMessage10 = wrd.cproperty + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cin + bas.cSpace + wrd.cinput + wrd.cData + bas.cComa + bas.cSpace;
// so add it directly.
export const cobjectDeepMergeMessage11 = wrd.cso + bas.cSpace + wrd.c_add + bas.cSpace + wrd.cit + bas.cSpace + wrd.cdirectly + bas.cDot;
// ERROR: The command namespace was not found.
export const chelpCommandMessage01 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cnamespace + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cDot;
// Please make sure you have entered the correct name and try again.
export const chelpCommandMessage02 = wrd.cPlease + bas.cSpace + wrd.cmake + bas.cSpace + wrd.csure + bas.cSpace + wrd.cyou + bas.cSpace + wrd.chave + bas.cSpace + wrd.centered + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccorrect + bas.cSpace + wrd.cname + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot;
// NOW call getAllCommandAliasData with the above found data!
export const chelpCommandMessage03 = wrd.cNOW + bas.cSpace + wrd.ccall + bas.cSpace + wrd.cget + wrd.cAll + wrd.cCommand + wrd.cAlias + wrd.cData + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cabove + bas.cSpace + wrd.cfound + bas.cSpace + wrd.cdata + bas.cExclamation;
// ERROR: The workflow namespace was not found.
export const cworkflowHelpCommandMessage01 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.cworkflow + bas.cSpace + wrd.cnamespace + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cDot;
// Found a matching alias entry! 1
export const cFoundMatchingAliasEntry1 = wrd.cFound + bas.cSpace + bas.ca + bas.cSpace + wrd.cmatching + bas.cSpace + wrd.calias + bas.cSpace + wrd.centry + bas.cExclamation + bas.cSpace + num.c1;
// Found a matching alias entry! 2
export const cFoundMatchingAliasEntry2 = wrd.cFound + bas.cSpace + bas.ca + bas.cSpace + wrd.cmatching + bas.cSpace + wrd.calias + bas.cSpace + wrd.centry + bas.cExclamation + bas.cSpace + num.c2;
// internalCommandAliasDataStructure[commandAliasEntity] is of type object!
export const cgetAllCommandAliasDataMessage01 = wrd.cinternal + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + bas.cOpenBracket + wrd.ccommand + wrd.cAlias + wrd.cEntity + bas.cCloseBracket + bas.cSpace + wrd.cis + bas.cSpace + wrd.cof + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cobject + bas.cExclamation;
// The recursive call returned false, so push the current entity to the output array!
export const cgetAllCommandAliasDataMessage02 = wrd.cThe + bas.cSpace + wrd.crecursive + bas.cSpace + wrd.ccall + bas.cSpace + wrd.creturned + bas.cSpace + gen.cfalse + bas.cComa + bas.cSpace + wrd.cso + bas.cSpace + wrd.cpush + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccurrent + bas.cSpace + wrd.centity + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.coutput + bas.cSpace + wrd.carray + bas.cExclamation;
// ERROR: No constant value entered, please enter a constant name to evaluate.
export const cevaluateConstantMessage01 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cNo + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.cvalue + bas.cSpace + wrd.centered + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.cname + bas.cSpace + wrd.cto + bas.cSpace + wrd.cevaluate + bas.cDot;
// PASSED: All duplicate workflow validation tests!
export const cvalidateWorkflowsMessage01 = wrd.cPASSED + bas.cColon + bas.cSpace + wrd.cAll + bas.cSpace + wrd.cduplicate + bas.cSpace + wrd.cworkflow + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctests + bas.cExclamation;
// ERROR: Invalid entry, please enter a valid configuration namespace to change,
export const cchangeConfigurationSettingMessage01 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cInvalid + bas.cSpace + wrd.centry + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cnamespace + bas.cSpace + wrd.cto + bas.cSpace + wrd.cchange + bas.cComa + bas.cSpace;
// and a value to assign to the configuration setting.
export const cchangeConfigurationSettingMessage02 = wrd.cand + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalue + bas.cSpace + wrd.cto + bas.cSpace + wrd.cassign + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cDot;
// EXAMPLE: changeConfigurationSetting debugSetting.businessRules.rules.arrayParsing.commandArrayParsing.solveLehmerCode true
export const cchangeConfigurationSettingMessage03 = wrd.cEXAMPLE + bas.cColon + bas.cSpace + wrd.cchange + wrd.cConfiguration + wrd.cSetting + bas.cSpace + wrd.cdebug + wrd.cSetting + bas.cDot + wrd.cbusiness + wrd.cRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + wrd.ccommand + wrd.cArray + wrd.cParsing + bas.cDot + wrd.csolve + wrd.cLehmer + wrd.cCode + bas.cSpace + gen.ctrue;
// ERROR: There was an error applying the selected theme to the active debug settings configuration.
export const cchangeDebugConfigurationThemeMessage01 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.capplying + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cselected + bas.cSpace + wrd.ctheme + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cactive + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csettings + bas.cSpace + wrd.cconfiguration + bas.cDot;
// ERROR: The specified theme name was not found in the current list of supported themes.
export const cchangeDebugConfigurationThemeMessage02 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.ctheme + bas.cSpace + wrd.cname + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccurrent + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.csupported + bas.cSpace + wrd.cthemes + bas.cDot;
// You can find the available themes at the following path location:
export const cchangeDebugConfigurationThemeMessage03 = wrd.cYou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cfind + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cavailable + bas.cSpace + wrd.cthemes + bas.cSpace + wrd.cat + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfollowing + bas.cSpace + wrd.cpath + bas.cSpace + wrd.clocation + bas.cColon + bas.cSpace;
// ERROR: Invalid entry, please enter a theme name you would like the debug settings to switch to when logging debug statements.
export const cchangeDebugConfigurationThemeMessage04 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cInvalid + bas.cSpace + wrd.centry + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.ctheme + bas.cSpace + wrd.cname + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cwould + bas.cSpace + wrd.clike + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csettings + bas.cSpace + wrd.cto + bas.cSpace + wrd.cswitch + bas.cSpace + wrd.cto + bas.cSpace + wrd.cwhen + bas.cSpace + wrd.clogging + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.cstatements + bas.cDot;
// EXAMPLE: changeDebugConfigurationTheme Skywalker
export const cchangeDebugConfigurationThemeMessage05 = wrd.cEXAMPLE + bas.cColon + bas.cSpace + wrd.cchange + wrd.cDebug + wrd.cConfiguration + wrd.cTheme + bas.cSpace + wrd.cSky + wrd.cwalker;
// ERROR: Failure to merge the theme data for:
export const cErrorAddThemeDataMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cmerge + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctheme + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cColon + bas.cSpace;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'Caught the case that the input string contains the global carriage return term.'
export const cprompt01 = wrd.cCaught + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cstring + bas.cSpace + wrd.ccontains + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cglobal + bas.cSpace + wrd.ccarriage + bas.cSpace + wrd.creturn + bas.cSpace + wrd.cterm + bas.cDot;
// 'index of the carriage return character: '
export const cprompt02 = wrd.cindex + bas.cSpace + wrd.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccarriage + bas.cSpace + wrd.creturn + bas.cSpace + wrd.ccharacter + bas.cColon + bas.cSpace;
// 'Caught the case that the string includes a carriage return and new line characters.'
export const cprompt03 = wrd.cCaught + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cincludes + bas.cSpace + bas.ca + bas.cSpace + wrd.ccarriage + bas.cSpace + wrd.creturn + bas.cSpace + wrd.cand + bas.cSpace + wrd.cnew + bas.cSpace + wrd.cline + bas.cSpace + wrd.ccharacters + bas.cDot;
// '!file.includes(undefined)'
export const cprintMessageToFile01 = bas.cExclamation + wrd.cfile + bas.cDot + wrd.cincludes + bas.cOpenParenthesis + 'undefined' + bas.cCloseParenthesis;
// 'ERROR: Failure to log to file: '
export const cprintMessageToFile02 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.clog + bas.cSpace + wrd.cto + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace;
// 'ERROR: Log File includes undefined.'
export const cprintMessageToFile03 = wrd.cERROR + bas.cColon + bas.cSpace + wrd.cLog + bas.cSpace + wrd.cFile + bas.cSpace + wrd.cincludes + bas.cSpace + 'undefined' + bas.cDot;
// WARNING: Queue:
export const cWarningQueue = wrd.cWARNING + bas.cColon + bas.cSpace + wrd.cQueue + bas.cColon + bas.cSpace;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const cextractAndProcessPluginEntryPointUriMessage01 = wrd.cplugin + wrd.cMain + wrd.cPath + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cjoin + sys.cSpaceIsColonSpace; // pluginMainPath before join is:
export const cextractAndProcessPluginEntryPointUriMessage02 = wrd.cplugin + wrd.cMain + wrd.cPath + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cjoin + sys.cSpaceIsColonSpace; // pluginMainPath after join is:
export const cextractAndProcessPluginEntryPointUriMessage03 = wrd.cplugin + wrd.cMain + wrd.cPath + bas.cSpace + gen.cURI + sys.cSpaceIsColonSpace; // pluginMainPath URI is:
// ERROR: No plugin meta data or plugin path are specified:
export const cextractAndProcessPluginEntryPointUriMessage04 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cmeta + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cor + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cpath + bas.cSpace + wrd.care + bas.cSpace + wrd.cspecified + bas.cColon + bas.cSpace;
// ERROR: There was a problem saving the registry data to the plugin registry in the d-data structure: 
export const cstorePluginRegistryInDataStoreMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + bas.ca + bas.cSpace + wrd.cproblem + bas.cSpace + wrd.csaving + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cregistry + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + bas.cd + bas.cDash + wrd.cdata + bas.cSpace + wrd.cstructure + bas.cColon + bas.cSpace;
export const cErrorRegisterPluginMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cregister + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace; // ERROR: Failure to register plugin:
export const cErrorUnRegisterPluginMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cunregister + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace; // ERROR: Failure to unregister plugin:
export const cErrorUnregisterAllPluginsMessage01 = cERROR_Colon + wrd.cCould + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cunregister + bas.cSpace + wrd.call + bas.cSpace + wrd.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cDot; // ERROR: Could not unregister all of the plugins.
// ERROR: Failure to write out the plugin registry to the plugin path specified by the application: 
export const cErrorSavePluginRegistryMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cwrite + bas.cSpace + wrd.cout + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cby + bas.cSpace + wrd.cthe + bas.cSpace + wrd.capplication + bas.cColon + bas.cSpace;
// ERROR: Failure to synchronize the plugin registry with the list of plugins available from the plugins folder specified by the application in the plugins registry JSON file.
export const cErrorSyncPluginRegistryWithPluginRegistryPathMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.csynchronize + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cavailable + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cfolder + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cby + bas.cSpace + wrd.cthe + bas.cSpace + wrd.capplication + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cregistry + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cfile + bas.cDot;
export const cErrorLoadAllPluginsMetaDataMessage01 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cpaths + bas.cSpace + wrd.cprovided + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.cprovide + bas.cSpace + wrd.cpaths + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot; // ERROR: No plugin paths provided, please provide paths and try again.
export const cErrorLoadAllPluginsExecutionPathsMessage01 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cmeta + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cfound + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.censure + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccorrect + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cis + bas.cSpace + wrd.cprovided + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot; // ERROR: No plugin meta data was found. Please ensure the correct path is provided and try again.
export const cloadAllPluginsMessage01 = bas.cSpace + wrd.cFailed + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace; // Failed to load the plugin:
export const cloadAllPluginsMessage02 = wrd.cplugin + bas.cSpace + wrd.centry + bas.cSpace + wrd.cpoint + bas.cSpace + wrd.cpath + bas.cColon + bas.cSpace; // plugin entry point path:
export const cloadAllPluginsMessage03 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cpaths + bas.cSpace + wrd.cor + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cmetaData  + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cspecified + bas.cColon + bas.cSpace; // ERROR: No plugin execution paths or plugins metaData was specified:
export const cErrorRegisterPluginCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cregister + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cinput + bas.cColon + bas.cSpace; // ERROR: Failure to register the specified plugin, invalid input:
export const cErrorUnregisterPluginCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cunregister + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cinput + bas.cColon + bas.cSpace; // ERROR: Failure to unregister the specified plugin, invalid input:
export const cErrorLoadPluginCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cinput + bas.cColon + bas.cSpace; // ERROR: Failure to load the specified plugin, invalid input:
export const cErrorLoadPluginsCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugins + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cinput + bas.cColon + bas.cSpace; // ERROR: Failure to load the specified plugins, invalid input:
export const cErrorUnloadPluginCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cunload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cinput + bas.cColon + bas.cSpace; // ERROR: Failure to unload the specified plugin, invalid input:
export const cErrorUnloadPluginsCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cunload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugins + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cinput + bas.cColon + bas.cSpace; // ERROR: Failure to unload the specified plugins, invalid input:
// ERROR: There was an error getting the list of plugins from the registry.
export const cErrorListAllPluginsInRegistryCommandMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cgetting + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cregistry + bas.cDot;
// ERROR: There was an error getting the list of plugins from the path listed in the plugin registry.
export const cErrorListAllPluginsInRegistryPathCommandMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cgetting + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpath + bas.cSpace + wrd.clisted + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cDot;
// ERROR: There was an error getting the number of plugins in the plugin registry.
export const cErrorCountPluginsInRegistryCommandMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cgetting + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.cof + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cDot;
// ERROR: There was an error getting the number of plugins in the path listed in the plugin registry.
export const cErrorCountPluginsInRegistryPathCommandMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cgetting + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.cof + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpath + bas.cSpace + wrd.clisted + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cDot;
// ERROR: Failure to synchronize the plugin registry with the plugin path listed in the plugin registry.
export const cErrorSyncPluginRegistryWithPathCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.csynchronize + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cpath + bas.cSpace + wrd.clisted + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cDot;
// ERROR: Failure to unregister all plugins.
export const cErrorUnregisterAllPluginsCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cunregister + bas.cSpace + wrd.call + bas.cSpace + wrd.cplugins + bas.cDot;
// ERROR: Failure to save the plugin registry to the hard drive.
export const cErrorSavePluginRegistryToDiskCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.csave + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.chard + bas.cSpace + wrd.cdrive + bas.cDot;
// ERROR: Failure to load the plugins from the plugin registry.
export const cErrorLoadPluginsFromRegistryCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cDot;
// ERROR: Failure to unload all the plugins.
export const cErrorUnloadAllPluginsCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cunload + bas.cSpace + wrd.call + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cDot;
// WARNING: dataPathConfigurationName not supported: 
export const cWarningDataPathConfigurationNameNotSupported = cWARNING_Colon + wrd.cdata + wrd.cPath + wrd.cConfiguration + wrd.cName + bas.cSpace + wrd.cnot + bas.cSpace + wrd.csupported + bas.cColon + bas.cSpace;
// ERROR: Invalid data type specified:
export const cloadPluginResourceDataMessage01 = cERROR_Colon + wrd.cInvalid + bas.cSpace + wrd.cdata + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cspecified + bas.cColon + bas.cSpace;
// ERROR: Invalid data input, unable to integrate all plugin data.
export const cErrorIntegrateAllPluginsDataMessage01 = cERROR_Colon + wrd.cInvalid + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cinput + bas.cComa + bas.cSpace + wrd.cunable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cintegrate + bas.cSpace + wrd.call + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cdata + bas.cDot;
// ERROR: Invalid input, either the plugin name or plugin data was undefined. Please provide valid data and try again.
export const cErrorIntegratePluginDataMessage01 = cERROR_Colon + wrd.cInvalid + bas.cSpace + wrd.cinput + bas.cComa + bas.cSpace + wrd.ceither + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cname + bas.cSpace + wrd.cor + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + bas.cun + bas.cde + bas.cfi + bas.cne + bas.cd + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cprovide + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot;
// ERROR: No plugin business rules data was loaded for the plugin:
export const cErrorIntegratePluginDataMessage02 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crules + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: No plugin commands data was loaded for the plugin:
export const cErrorIntegratePluginDataMessage03 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: No plugin configuration data was loaded for the plugin:
export const cErrorIntegratePluginDataMessage04 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: No plugin command aliases data was loaded for the plugin:
export const cErrorIntegratePluginDataMessage05 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: No plugin workflows data was loaded for the plugin:
export const cErrorIntegratePluginDataMessage06 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cworkflows + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: No plugin constants validation data was loaded for the plugin:
export const cErrorIntegratePluginDataMessage07 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: No plugin themes data was loaded for the plugin:
export const cErrorIntegratePluginDataMessage08 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cthemes + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: No plugin data was loaded at all for the plugin:
export const cErrorIntegratePluginDataMessage09 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cat + bas.cSpace + wrd.call + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to merge the plugin rules for plugin:
export const cErrorAddPluginRulesMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cmerge + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.crules + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to merge the plugin commands for plugin:
export const cErrorAddPluginCommandsMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cmerge + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure unable to persist the plugin configuration data for plugin:
export const cErrorAddPluginConfigurationDataMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cunable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cpersist + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to merge the plugin command aliases for plugin:
export const cErrorAddPluginCommandAliasesMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cmerge + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to merge the plugin workflows for plugin:
export const cErrorAddPluginWorkflowsMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cmerge + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cworkflows + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to merge the constants validation data for the type:
export const cErrorAddConstantsValidationDataMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cmerge + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctype + bas.cColon + bas.cSpace;
// ERROR: Failure to read from file: 
export const cErrorLoadAsciiFileFromPathMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cread + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace;
// BEGIN processing all lines from file: 
export const cBeginProcessingAllLinesFromFile = wrd.cBEGIN + bas.cSpace + wrd.cprocessing + bas.cSpace + wrd.call + bas.cSpace + wrd.clines + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace;
// BEGIN processing a line
export const cBeginProcessingLine = wrd.cBEGIN + bas.cSpace + wrd.cprocessing + bas.cSpace + bas.ca + bas.cSpace + wrd.cline;
// END processing a line
export const cEndProcessingLine = wrd.cEND + bas.cSpace + wrd.cprocessing + bas.cSpace + bas.ca + bas.cSpace + wrd.cline;
// END processing all lines from file: 
export const cEndProcessingAllLinesFromFile = wrd.cEND + bas.cSpace + wrd.cprocessing + bas.cSpace + wrd.call + bas.cSpace + wrd.clines + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace;
// ERROR: Unable to find the constant namespace among all the constants validation data:
export const cvalidateConstantsDataValidationLineItemNameErrorMessage1 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cfind + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconstant + bas.cSpace + wrd.cnamespace + bas.cSpace + wrd.camong + bas.cSpace + wrd.call + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cColon + bas.cSpace;
export const cFoundMatchingNamespaceConstant = wrd.cFound + bas.cSpace + bas.ca + bas.cSpace + wrd.cmatching + bas.cSpace + wrd.cnamespace + bas.cSpace + wrd.cconstant + bas.cDot; // Found a matching namespace constant.
export const cScanningConstantsValidationPhase1Message = wrd.cScanning + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cphase + bas.cSpace + num.c1 + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // Scanning constants phase 1 validation data for file:
export const cScanningConstantsValidationPhase2Message = wrd.cScanning + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cphase + bas.cSpace + num.c2 + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cColon + bas.cSpace; // Scanning constants phase 2 validation data for:
export const cdoesConstantExistMessage01 = wrd.cFound + bas.cSpace + bas.ca + bas.cSpace + wrd.cmatch + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.capplication + bas.cSpace + wrd.cconstants + bas.cDot; // Found a match with the application constants.
export const cdoesConstantExistMessage02 = wrd.cFound + bas.cSpace + bas.ca + bas.cSpace + wrd.cmatch + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cconstants + bas.cDot; // Found a match with the framework constants.
export const cupperCaseLetterFound = wrd.cUpper + bas.cSpace + wrd.ccase + bas.cSpace + wrd.cletter + bas.cSpace + wrd.cfound + bas.cDot; // Upper case letter found.
export const csingleQuoteSwapAfterEqualsMessage01 = cinputData + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.carray + bas.cExclamation + bas.cSpace + wrd.cCapture + bas.cSpace + wrd.cthe + bas.cSpace + num.cfirst + bas.cSpace + wrd.celement + bas.cSpace + wrd.conly + bas.cDot; // inputData is an array! Capture the first element only.
export const csingleQuoteSwapAfterEqualsMessage02 = cinputData + bas.cSpace + wrd.cis + bas.cSpace + bas.ca + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cinput + bas.cComa + bas.cSpace + wrd.cuse + bas.cSpace + wrd.cit + bas.cSpace + wrd.cas + bas.cSpace + wrd.cis + bas.cDot; // inputData is a string input, use it as is.
export const csingleQuoteSwapAfterEqualsMessage03 = num.cFirst + bas.cSpace + wrd.creplace + bas.cSpace + wrd.call + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cquotes + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cdouble + bas.cSpace + wrd.cquotes + bas.cDot; // First replace all the quotes in the string with double quotes.
export const cloadConfigDataErrorMessage01 = wrd.cFATAL + bas.cSpace + cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cconfig + bas.cSpace + wrd.cpath + bas.cComa + bas.cSpace + wrd.cHaystacks + bas.cSpace + wrd.cframework + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cdependency + bas.cSpace + wrd.cfailure + bas.cColon + bas.cSpace; // FATAL ERROR: Unable to load the specified plugin config path, Haystacks framework data dependency failure:
// FATAL ERROR: Unable to load the specified plugin, no Haystacks context data object.
export const cloadConfigDataErrorMessage02 = wrd.cFATAL + bas.cSpace + cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cComa + bas.cSpace + wrd.cno + bas.cSpace + wrd.cHaystacks + bas.cSpace + wrd.ccontext + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cobject + bas.cDot;
// FATAL ERROR: Unable to load the specified plugin, no config data for the plugin:
export const cloadConfigDataErrorMessage03 = wrd.cFATAL + bas.cSpace + cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cComa + bas.cSpace + wrd.cno + bas.cSpace + wrd.cconfig + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
export const cErrorUnloadPluginMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cunloading + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace; // ERROR: There was an error unloading the plugin: 
// ERROR: Failure to remove business rules for the plugin:
export const cErrorUnloadPluginMessage02 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crules + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to remove commands for the plugin:
export const cErrorUnloadPluginMessage03 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to remove configuration data for the plugin:
export const cErrorUnloadPluginMessage04 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to remove command aliases for the plugin:
export const cErrorUnloadPluginMessage05 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to remove workflows for the plugin:
export const cErrorUnloadPluginMessage06 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cworkflows + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to remove theme data for the plugin:
export const cErrorUnloadPluginMessage07 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.ctheme + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Failure to remove constants validation data for the plugin:
export const cErrorUnloadPluginMessage08 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Constants validation data for the specified plugin was not found. Plugin:
export const cremovePluginBusinessRulesMessage01 = cERROR_Colon + wrd.cConstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
export const cremovePluginBusinessRulesMessage02 = wrd.cRemoving + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crule + bas.cColon + bas.cSpace; // Removing plugin business rule:
// ERROR: Failure attempting to delete the plugin business rules for plugin:
export const cremovePluginBusinessRulesMessage03 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cattempting + bas.cSpace + wrd.cto + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crules + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Plugin business rule constants validation data for the specified plugin was not found. Plugin:
export const cremovePluginBusinessRulesMessage04 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.cbusiness + bas.cSpace + wrd.crule + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
// Removing plugin command:
export const cremovePluginCommandsMessage01 = wrd.cRemoving + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.ccommand + bas.cColon + bas.cSpace;
// ERROR: Failure attempting to delete the plugin commands for plugin:
export const cremovePluginCommandsMessage02 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cattempting + bas.cSpace + wrd.cto + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Plugin command constants validation data for the specified plugin was not found. Plugin:
export const cremovePluginCommandsMessage03 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
// ERROR: Unable to remove the plugin configuration data for the specified plugin: 
export const cremovePluginConfigurationDataMessage01 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Unable to locate the plugins configuration data. Plugin:
export const cremovePluginConfigurationDataMessage02 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.clocate + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cdata + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
// ERROR: Unable to locate the plugins configuration debug settings data. Plugin:
export const cremovePluginConfigurationDataMessage03 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.clocate + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csettings + bas.cSpace + wrd.cdata + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
// ERROR: Unable to remove the plugin command aliases for the specified plugin:
export const cremovePluginCommandAliasesMessage01 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Unable to locate the plugins command aliases data. Plugin: 
export const cremovePluginCommandAliasesMessage02 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.clocate + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cdata + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
// ERROR: Unable to remove the plugin workflows for the specified plugin:
export const cremovePluginWorkflowsMessage01 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cworkflows + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Unable to locate the plugins workflow data. Plugin:
export const cremovePluginWorkflowsMessage02 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.clocate + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cworkflow + bas.cSpace + wrd.cdata + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
// ERROR: Unable to remove the plugin themes for the specified plugin:
export const cremovePluginThemesMessage01 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cthemes + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Unable to locate the plugins themes data. Plugin:
export const cremovePluginThemesMessage02 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.clocate + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cthemes + bas.cSpace + wrd.cdata + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
// ERROR: Unable to remove the plugin constants validation data for the specified plugin:
export const cremovePluginConstantsValidationDataMessage01 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cremove + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: Unable to locate the plugins constants validation data. Plugin:
export const cremovePluginConstantsValidationDataMessage02 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.clocate + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cdata + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cColon + bas.cSpace;
// ERROR: No plugin name specified:
export const cErrorUnloadPluginsMessage01 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cname + bas.cSpace + wrd.cspecified + bas.cColon + bas.cSpace;
// pluginsLoadedList is an array and length greater than or equal to 1
export const cunloadPluginMessage01 = wrd.cplugins + wrd.cLoaded + wrd.cList + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.carray + bas.cSpace + wrd.cand + bas.cSpace + wrd.clength + bas.cSpace + wrd.cgreater + bas.cSpace + wrd.cthan + bas.cSpace + wrd.cor + bas.cSpace + wrd.cequal + bas.cSpace + wrd.cto + bas.cSpace + num.c1;
// ERROR: There was an error getting the list of loaded plugins.
export const cErrorListAllLoadedPluginsMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cgetting + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.cloaded + bas.cSpace + wrd.cplugins + bas.cDot;
// ERROR: Failure to unregister any of the specified plugins, invalid input:
export const cErrorUnregisterPluginsCommandMessage01 = cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cunregister + bas.cSpace + wrd.cany + bas.cSpace + wrd.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugins + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cinput + bas.cColon + bas.cSpace;
// ERROR: The plugin name was not a valid name: 
export const cErrorUnregisterPluginsMessage01 = cERROR_Colon + wrd.cThe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cname + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cname + bas.cColon + bas.cSpace;
// ERROR: There is no defined plugin registry.
export const cErrorGetPluginsRegistryPathMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cis + bas.cSpace + wrd.cno + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cregistry + bas.cDot;
export const cpluginsRegistryPathMessageIs = wrd.cplugins + bas.cSpace + wrd.cregistry + bas.cSpace + wrd.cpath + sys.cSpaceIsColonSpace; // plugins registry path is:
// ERROR: The specified plugin is already registered. Plugin name:
export const cErrorRegisterPluginMessage02 = cERROR_Colon + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cis + bas.cSpace + wrd.calready + bas.cSpace + wrd.cregistered + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cSpace + wrd.cname + bas.cColon + bas.cSpace;
// ERROR: Plugin Name is an invalid value:
export const cErrorRegisterPluginMessage03 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.cName + bas.cSpace + cisAnInvalidValue + bas.cColon + bas.cSpace;
// ERROR: Plugin Path is an invalid value:
export const cErrorRegisterPluginMessage04 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.cPath + bas.cSpace + cisAnInvalidValue + bas.cColon + bas.cSpace;
// ERROR: A command is missing command aliases definitions. Data:
export const cErrorCountMatchingCommandAliasMessage01 = cERROR_Colon + bas.cA + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cis + bas.cSpace + wrd.cmissing + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cdefinitions + bas.cDot + bas.cSpace + wrd.cData + bas.cColon + bas.cSpace;
// ERROR: There was an error attempting to load the specified plugin: 
export const cloadPluginErrorMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cattempting + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// ERROR: No data available for reading, error message:
export const cErrorNoDataAvailableForReading = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cavailable + bas.cSpace + wrd.cfor + bas.cSpace + wrd.creading + bas.cComa + bas.cSpace + cerrorMessage;
// ERROR: There was an error attempting to load the plugin:
export const cErrorLoadingPlugin = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cattempting + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cColon + bas.cSpace;
// Done loading the Haystacks dependency data, now try and use Haystacks to load the config data, from the configPath.
export const cpluginLoadConfigDataMessage = wrd.cDone + bas.cSpace + wrd.cloading + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cHaystacks + bas.cSpace + wrd.cdependency + bas.cSpace + wrd.cdata + bas.cComa + bas.cSpace + wrd.cnow + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cand + bas.cSpace + wrd.cuse + bas.cSpace + wrd.cHaystacks + bas.cSpace + wrd.cto + bas.cSpace + wrd.cload + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfig + bas.cSpace + wrd.cdata + bas.cComa + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfig + wrd.cPath + bas.cDot;
// NOTE: The user entered command log setting is not enabled.
export const cprintUserCommandLogMessage01 = wrd.cNOTE + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.cuser + bas.cSpace + wrd.centered + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.clog + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cenabled + bas.cDot;
// Change the setting logUserEnteredCommands to enable user entered command log data to be captured for printing.
export const cprintUserCommandLogMessage02 = wrd.cChange + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csetting + bas.cSpace + wrd.clog + wrd.cUser + wrd.cEntered + wrd.cCommands + bas.cSpace + wrd.cto + bas.cSpace + wrd.cenable + bas.cSpace + wrd.cuser + bas.cSpace + wrd.centered + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.clog + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cto + bas.cSpace + wrd.cbe + bas.cSpace + wrd.ccaptured + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cprinting + bas.cDot;
// NOTE: The command log setting is not enabled.
export const cprintAllCommandLogMessage01 = wrd.cNOTE + bas.cColon + bas.cSpace + wrd.cThe + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.clog + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cenabled + bas.cDot;
// Change the setting logAllCommands to enable command log data to be captured for printing.
export const cprintAllCommandLogMessage02 = wrd.cChange + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csetting + bas.cSpace + wrd.clog + wrd.cAll + wrd.cCommands + bas.cSpace + wrd.cto + bas.cSpace + wrd.cenable + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.clog + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cto + bas.cSpace + wrd.cbe + bas.cSpace + wrd.ccaptured + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cprinting + bas.cDot;
// User commands log is empty.
export const cUserCommandsLogIsEmpty = wrd.cUser + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.clog + bas.cSpace + wrd.cis + bas.cSpace + wrd.cempty + bas.cDot;
// All commands log is empty.
export const cAllCommandsLogIsEmpty = wrd.cAll + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.clog + bas.cSpace + wrd.cis + bas.cSpace + wrd.cempty + bas.cDot;
// NOTE: User commands log clearing setting is not enabled.
export const cclearUserCommandsLogMessage01 = wrd.cNOTE + bas.cColon + bas.cSpace + wrd.cUser + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.clog + bas.cSpace + wrd.cclearing + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cenabled + bas.cDot;
// NOTE: All commands log clearing setting is not enabled.
export const cclearAllCommandsLogMessage01 = wrd.cNOTE + bas.cColon + bas.cSpace + wrd.cAll + bas.cSpace + wrd.ccommands + bas.cSpace + wrd.clog + bas.cSpace + wrd.cclearing + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cenabled + bas.cDot;
// Invalid input object. Expected a valid JSON object. Object type is:
export const cErrorObjectDeepCloneMessage01 = wrd.cInvalid + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cobject + bas.cDot + bas.cSpace + wrd.cExpected + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + gen.cJSON + bas.cSpace + wrd.cobject + bas.cDot + bas.cSpace + wrd.cObject + bas.cSpace + wrd.ctype + sys.cSpaceIsColonSpace;
// D-command stack before loading is:
export const cdCommandStackBeforeLoadingIs = bas.cD + bas.cDash + wrd.ccommand + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cloading + sys.cSpaceIsColonSpace;
// D-businessRules stack before loading is:
export const cdBusinessRulesStackBeforeLoadingIs = bas.cD + bas.cDash + sys.cbusinessRules + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cloading + sys.cSpaceIsColonSpace;
// dCommandClone stack before loading is:
export const cdCommandCloneStackBeforeLoadingIs = bas.cd + wrd.cCommand + wrd.cClone + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cloading + sys.cSpaceIsColonSpace;
// dBusinessRulesClone stack before loading is:
export const cdBusinessRulesCloneStackBeforeLoadingIs = bas.cd + wrd.cBusiness + wrd.cRules + wrd.cClone + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cloading + sys.cSpaceIsColonSpace;
// dCommandClone stack after loading is:
export const cdCommandCloneStackAfterLoadingIs = bas.cd + wrd.cCommand + wrd.cClone + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cloading + sys.cSpaceIsColonSpace;
// dBusinessRulesClone stack after loading is:
export const cdBusinessRulesCloneStackAfterLoadingIs = bas.cd + wrd.cBusiness + wrd.cRules + wrd.cClone + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cloading + sys.cSpaceIsColonSpace;
// D-command stack after loading is:
export const cdCommandStackAfterLoadingIs = bas.cD + bas.cDash + wrd.ccommand + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cloading + sys.cSpaceIsColonSpace;
// D-businessRules stack after loading is:
export const cdBusinessRulesStackAfterLoadingIs = bas.cD + bas.cDash + sys.cbusinessRules + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cloading + sys.cSpaceIsColonSpace;
// D-command stack after over-write is:
export const cdCommandStackAfterOverWriteIs = bas.cD + bas.cDash + wrd.ccommand + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cover + bas.cDash + wrd.cwrite + sys.cSpaceIsColonSpace;
// D-businessRules stack after over-write is:
export const cdBusinessRulesStackAfterOverWriteIs = bas.cD + bas.cDash + sys.cbusinessRules + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cover + bas.cDash + wrd.cwrite + sys.cSpaceIsColonSpace;
// D-command stack is:
export const cdCommandStackIs = bas.cD + bas.cDash + wrd.ccommand + bas.cSpace + wrd.cstack + sys.cSpaceIsColonSpace;
// D-command stack before merge is:
export const cdCommandStackBeforeMergeIs = bas.cD + bas.cDash + wrd.ccommand + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace;
// D-command stack after merge is:
export const cdCommandStackAfterMergeIs = bas.cD + bas.cDash + wrd.ccommand + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace;
// D-businessRules stack is:
export const cdBusinessRulesStackIs = bas.cD + bas.cDash + sys.cbusinessRules + bas.cSpace + wrd.cstack + sys.cSpaceIsColonSpace;
// D-businessRules stack before merge is:
export const cdBusinessRulesStackBeforeMergeIs = bas.cD + bas.cDash + sys.cbusinessRules + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace;
// D-businessRules stack after merge is:
export const cdBusinessRulesStackAfterMergeIs = bas.cD + bas.cDash + sys.cbusinessRules + bas.cSpace + wrd.cstack + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cmerge + sys.cSpaceIsColonSpace;
// ERROR: Unable to clone data and re-assign it to the D-data structure.
export const cErrorSetDataMessage01 = cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.cclone + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cand + bas.cSpace + bas.cre + bas.cDash + wrd.cassign + bas.cSpace + wrd.cit + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + bas.cD + bas.cDash + wrd.cdata + bas.cSpace + wrd.cstructure + bas.cDot;
// fast exit enabled
export const cfastExitEnabled = wrd.cfast + bas.cSpace + wrd.cexit + bas.cSpace + wrd.cenabled;
// array cloning object
export const carrayCloningObject = wrd.carray + bas.cSpace + wrd.ccloning + bas.cSpace + wrd.cobject;
// array deep clone string
export const carrayDeepCloneString = wrd.carray + bas.cSpace + wrd.cdeep + bas.cSpace + wrd.cclone + bas.cSpace + wrd.cstring;
// object deep cloning
export const cobjectDeepCloning = wrd.cobject + bas.cSpace + wrd.cdeep + bas.cSpace + wrd.ccloning;
// shift the data1!
export const cshiftData1 = wrd.cshift + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdata + num.c1 + bas.cExclamation;
// shift the data2!
export const cshiftData2 = wrd.cshift + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdata + num.c2 + bas.cExclamation;
// WARNING: The specified validation type is not available, please enter a valid type and try again. Type not recognized: 
export const cWarningUserEnteredConstantsValidationDataTypeMessage01 = cWARNING_Colon + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cavailable + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot + bas.cSpace + wrd.cType + bas.cSpace + wrd.cnot + bas.cSpace + wrd.crecognized + bas.cColon + bas.cSpace;
// Constants validation types are:
export const cWarningUserEnteredConstantsValidationDataTypeMessage02 = wrd.cConstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.care + bas.cColon + bas.cSpace;
// WARNING: No valid constants validation types were entered.
export const cWarningUserEnteredConstantsValidationDataTypeMessage03 = cWARNING_Colon + wrd.cNo + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.cwere + bas.cSpace + wrd.centered + bas.cDot;
// Command Aliases validation types are:
export const cWarningUserEnteredCommandAliasesValidationDataTypeMessage02 = wrd.cCommand + bas.cSpace + wrd.cAliases + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.care + bas.cColon + bas.cSpace;
// WARNING: No valid command aliases validation types were entered.
export const cWarningUserEnteredCommandAliasesValidationDataTypeMessage03 = cWARNING_Colon + wrd.cNo + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.cwere + bas.cSpace + wrd.centered + bas.cDot;
// Workflows validation types are:
export const cWarningUserEnteredWorkflowsValidationDataTypeMessage02 = wrd.cWorkflows + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.care + bas.cColon + bas.cSpace;
// WARNING: No valid workflow validation types were entered.
export const cWarningUserEnteredWorkflowsValidationDataTypeMessage03 = cWARNING_Colon + wrd.cNo + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cworkflow + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.cwere + bas.cSpace + wrd.centered + bas.cDot;
// ERROR: The specified path does not exist or cannot be found:
export const cErrorGetDirectoryListMessage01 = cERROR_Colon + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cdoes + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cexist + bas.cSpace + wrd.cor + bas.cSpace + wrd.ccannot + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cfound + bas.cColon + bas.cSpace;
// Validation types are:
export const cWarningUserEnteredValidationDateTypeMessage02 = wrd.cValidation + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.care + bas.cColon + bas.cSpace;
// WARNING: No valid validation types were entered.
export const cWarningUserEnteredValidationDataTypeMessage03 = cWARNING_Colon + wrd.cNo + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.cwere + bas.cSpace + wrd.centered + bas.cDot;
// Begin command aliases validation
export const cBeginCommandAliasesValidationMessage = wrd.cBegin + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.caliases + bas.cSpace + wrd.cvalidation;
// Begin workflows validation
export const cBeginWorkflowsValidationMessage = wrd.cBegin + bas.cSpace + wrd.cworkflows + bas.cSpace + wrd.cvalidation;
// ERROR: Please enter a valid constants file name(s) to validate.
export const cErrorInvalidConstantsFileNameMessage01 = cERROR_Colon + wrd.cPlease + bas.cSpace + gen.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cOpenParenthesis + bas.cs + bas.cCloseParenthesis + bas.cSpace + bas.cto + bas.cSpace + wrd.cvalidate + bas.cDot;
// WARNING: The specified validation file name is not available, please enter a valid file name and try again. Name not recognized:
export const cWarningUserEnteredValidationDataFileNameMessage01 = cWARNING_Colon + wrd.cThe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cSpace + bas.cis + bas.cSpace + gen.cnot + bas.cSpace + wrd.cavailable + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + gen.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cSpace + phn.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot + bas.cSpace + wrd.cName + bas.cSpace + gen.cnot + bas.cSpace + wrd.crecognized + bas.cColon + bas.cSpace; 
// WARNING: No valid constants validation file names were entered.
export const cWarningUserEnteredValidationDataFileNameMessage02 = cWARNING_Colon + bas.cNo + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cnames + bas.cSpace + wrd.cwere + bas.cSpace + wrd.centered + bas.cDot; 
// Constants validation file names are:
export const cConstantsValidationFileNamesAre = wrd.cConstants + bas.cSpace + wrd.cvalidation + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cnames + bas.cSpace + phn.care + bas.cColon + bas.cSpace; 
// WARNING: You have to enter a file name to run constants validations of that file.
export const cWarningUserEnteredValidationDataFileNameMessage03 = cWARNING_Colon + wrd.cYou + bas.cSpace + wrd.chave + bas.cSpace + bas.cto + bas.cSpace + gen.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cSpace + bas.cto + bas.cSpace + wrd.crun + bas.cSpace + wrd.cconstants + bas.cSpace + wrd.cvalidations + bas.cSpace + bas.cof + bas.cSpace + wrd.cthat + bas.cSpace + wrd.cfile + bas.cDot; 
// Running all validations
export const cRunningAllValidationsMessage = wrd.cRunning + bas.cSpace + wrd.call + bas.cSpace + wrd.cvalidations;
// ERROR: There was a fatal error in warden.initFrameworkSchema function.
export const cErrorInitFrameworkMessage01 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + bas.ca + bas.cSpace + wrd.cfatal + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cin + bas.cSpace + wrd.cwarden + bas.cDot + gen.cinit + wrd.cFramework + wrd.cSchema + bas.cSpace + wrd.cfunction + bas.cDot;
// ERROR: There was a fatal error in main.initFramework function.
export const cErrorInitFrameworkMessage02 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + bas.ca + bas.cSpace + wrd.cfatal + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cin + bas.cSpace + wrd.cmain + bas.cDot + gen.cinit + wrd.cFramework + bas.cSpace + wrd.cfunction + bas.cDot;
// ERROR: clientConfiguration was not properly defined.
export const cErrorInitFrameworkMessage03 = cERROR_Colon + wrd.cclient + wrd.cConfiguration + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cproperly + bas.cSpace + wrd.cdefined + bas.cDot;
// ERROR: Input data was not properly defined.
export const cErrorAccouterFrameworkMessage01 = cERROR_Colon + wrd.cInput + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cproperly + bas.cSpace + wrd.cdefined + bas.cDot; 
// ERROR: clientBusinessRules was not properly defined.
export const cErrorMergeClientBusinessRulesMessage01 = cERROR_Colon + wrd.cclient + wrd.cBusiness + wrd.cRules + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cproperly + bas.cSpace + wrd.cdefined + bas.cDot;
// ERROR: clientCommands was not properly defined.
export const cErrorMergeClientCommandsMessage01 = cERROR_Colon + wrd.cclient + wrd.cCommands + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cproperly + bas.cSpace + wrd.cdefined + bas.cDot;
// ERROR: commandAliasesPath was not properly defined.
export const cErrorLoadCommandAliasesMessage01 = cERROR_Colon + wrd.ccommand + wrd.cAliases + wrd.cPath + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cproperly + bas.cSpace + wrd.cdefined + bas.cDot;
// ERROR: contextName was not properly defined.
export const cErrorLoadCommandAliasesMessage02 = cERROR_Colon + wrd.ccontext + wrd.cName + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cproperly + bas.cSpace + wrd.cdefined + bas.cDot;
// ERROR: Plugin list does not exist or is not an array.
export const cErrorListAllLoadedPluginsMessage02 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.clist + bas.cSpace + wrd.cdoes + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cexist + bas.cSpace + wrd.cor + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.can + bas.cSpace + wrd.carray + bas.cDot;
// ERROR: attributeName was not properly defined.
export const cErrorAttributeNameMessage01 = cERROR_Colon + wrd.cattribute + wrd.cName + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cproperly + bas.cSpace + wrd.cdefined + bas.cDot;
// ERROR: The plugin does not exist in the plugin path. Plugin name:
export const cErrorRegisterPluginMessage05 = cERROR_Colon + wrd.cThe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cdoes + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cexist + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cpath + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cSpace + wrd.cname + bas.cColon + bas.cSpace;
// ERROR: There are no plugins in the plugin path. Plugin path:
export const cErrorRegisterPluginMessage06 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.care + bas.cSpace + wrd.cno + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cplugin + bas.cSpace + wrd.cpath + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cSpace + wrd.cpath + bas.cColon + bas.cSpace;
// ERROR: Plugin Name does not exist. Plugin Name:
export const cErrorUnRegisterPluginMessage02 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.cName + bas.cSpace + wrd.cdoes + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cexist + bas.cDot + bas.cSpace + wrd.cPlugin + bas.cSpace + wrd.cName + bas.cColon + bas.cSpace;
// ERROR: Plugin Name is an invalid value: 
export const cErrorUnRegisterPluginMessage03 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.cName + bas.cSpace + cisAnInvalidValue + bas.cColon + bas.cSpace;
// ERROR: No file specified, cannot delete nothing.
export const cErrorDeleteFileMessage01 = cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cspecified + bas.cComa + bas.cSpace + wrd.ccannot + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.cnothing + bas.cDot;
// ERROR: There was an error attempting to delete the file:
export const cErrorDeleteFileMessage02 = cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cattempting + bas.cSpace + wrd.cto + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace;
// ERROR: Plugin List Array is an invalid value: 
export const cErrorUnregisterPluginsMessage02 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.cList + bas.cSpace + wrd.cArray + bas.cSpace + cisAnInvalidValue + bas.cColon + bas.cSpace;
// ERROR: pluginRegistry is an invalid value: 
export const cErrorSavePluginRegistryMessage02 = cERROR_Colon + wrd.cplugin + wrd.cRegistry + bas.cSpace + cisAnInvalidValue + bas.cColon + bas.cSpace;
// ERROR: Plugin Name is an invalid value, pluginName is: 
export const cErrorUnloadPluginMessage09 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.cName + bas.cSpace + cisAnInvalidValue + bas.cComa + bas.cSpace + wrd.cplugin + wrd.cName + sys.cSpaceIsColonSpace;
// ERROR: Plugin Name was not found in plugins loaded, pluginName is: 
export const cErrorUnloadPluginMessage10 = cERROR_Colon + wrd.cPlugin + bas.cSpace + wrd.cName + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cSpace + wrd.cin + bas.cSpace + wrd.cplugins + bas.cSpace + wrd.cloaded + bas.cComa + bas.cSpace + wrd.cplugin + wrd.cName + sys.cSpaceIsColonSpace;
// ERROR: prefixPluginPath is an undefined string.
export const cErrorLoadPluginMetaDataMessage01 = cERROR_Colon + wrd.cprefix + wrd.cPlugin + wrd.cPath + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.cundefined + bas.cSpace + wrd.cstring + bas.cDot;
// ERROR: Invalid input for contextName: 
export const cErrorLoadAllJsonDataMessage01 = cERROR_Colon + wrd.cInvalid + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cfor + bas.cSpace + wrd.ccontext + wrd.cName + bas.cColon + bas.cSpace;
// ERROR: Invalid input for dataPath: 
export const cErrorLoadAllJsonDataMessage02 = cERROR_Colon + wrd.cInvalid + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cdata + wrd.cPath + bas.cColon + bas.cSpace;
// ERROR: Given data name already exists. Data context name is: 
export const cErrorStoreDataMessage01 = cERROR_Colon + wrd.cGiven + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cname + bas.cSpace + wrd.cto + bas.cSpace + wrd.cstore + bas.cSpace + wrd.calready + bas.cSpace + wrd.cexists + bas.cDot + bas.cSpace + wrd.cData + bas.cSpace + wrd.ccontext + bas.cSpace + wrd.cname + sys.cSpaceIsColonSpace;
// ERROR: Data to store is undefined.
export const cErrorStoreDataMessage02 = cERROR_Colon + wrd.cData + bas.cSpace + wrd.cto + bas.cSpace + wrd.cstore + bas.cSpace + wrd.cis + bas.cSpace + wrd.cundefined + bas.cDot;
// ERROR: Data name is an invalid value. Data name is: 
export const cErrorStoreDataMessage03 = cERROR_Colon + wrd.cData + bas.cSpace + wrd.cname + bas.cSpace + cisAnInvalidValue + bas.cDot + bas.cSpace + wrd.cData + bas.cSpace + wrd.cname + sys.cSpaceIsColonSpace;
// ERROR: Incorrect input for command: 
export const cErrorEnqueueCommandMessage01 = cERROR_Colon + wrd.cIncorrect + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cfor + bas.cSpace + wrd.ccommand + bas.cColon + bas.cSpace;
// ERROR: pluginResourcePath is an invalid value, pluginResourcePath is: 
export const cErrorLoadPluginResourceDataMessage01 = cERROR_Colon + wrd.cplugin + wrd.cResource + wrd.cPath + bas.cSpace + cisAnInvalidValue + bas.cComa + bas.cSpace + wrd.cplugin + wrd.cResource + wrd.cPath + sys.cSpaceIsColonSpace; 
// ERROR: Incorrect type of input for configuration value: 
export const cErrorConfigurationSettingMessage01 = cERROR_Colon + wrd.cIncorrect + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cof + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cvalue + bas.cColon + bas.cSpace; 
// ERROR: Incorrect type of input for configuration name: 
export const cErrorConfigurationSettingMessage02 = cERROR_Colon + wrd.cIncorrect + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cof + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cname + bas.cColon + bas.cSpace; 
// ERROR: Incorrect type of input for configuration path: 
export const cErrorConfigurationSettingMessage03 = cERROR_Colon + wrd.cIncorrect + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cof + bas.cSpace + wrd.cinput + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cpath + bas.cColon + bas.cSpace; 
// ERROR: debugFilesModuleFontStyleSetting not defined in debug setting configuration file.
export const cErrorDebugFilesModuleFontStyleSettingMessage = cERROR_Colon + cfg.cdebugFilesModuleFontStyleSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesFunctionFontStyleSetting not defined in debug setting configuration file.
export const cErrorDebugFilesFunctionFontStyleSettingMessage = cERROR_Colon + cfg.cdebugFilesFunctionFontStyleSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesMessageFontStyleSetting not defined in debug setting configuration file.
export const cErrorDebugFilesMessageFontStyleSettingMessage = cERROR_Colon + cfg.cdebugFilesMessageFontStyleSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesDataFontStyleSetting not defined in debug setting configuration file.
export const cErrorDebugFilesDataFontStyleSettingMessage = cERROR_Colon + cfg.cdebugFilesDataFontStyleSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesModuleFontColorSetting not defined in debug setting configuration file.
export const cErrorDebugFilesModuleFontColorSettingMessage = cERROR_Colon + cfg.cdebugFilesModuleFontColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesFunctionFontColorSetting not defined in debug setting configuration file.
export const cErrorDebugFilesFunctionFontColorSettingMessage = cERROR_Colon + cfg.cdebugFilesFunctionFontColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesMessageFontColorSetting not defined in debug setting configuration file.
export const cErrorDebugFilesMessageFontColorSettingMessage = cERROR_Colon + cfg.cdebugFilesMessageFontColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesDataFontColorSetting not defined in debug setting configuration file.
export const cErrorDebugFilesDataFontColorSettingMessage = cERROR_Colon + cfg.cdebugFilesDataFontColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesModuleFontBackgroundColorSetting not defined in debug setting configuration file.
export const cErrorDebugFilesModuleFontBackgroundColorSettingMessage = cERROR_Colon + cfg.cdebugFilesModuleFontBackgroundColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesFunctionFontBackgroundColorSetting not defined in debug setting configuration file.
export const cErrorDebugFilesFunctionFontBackgroundColorSettingMessage = cERROR_Colon + cfg.cdebugFilesFunctionFontBackgroundColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesMessageFontBackgroundColorSetting not defined in debug setting configuration file.
export const cErrorDebugFilesMessageFontBackgroundColorSettingMessage = cERROR_Colon + cfg.cdebugFilesMessageFontBackgroundColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFilesDataFontBackgroundColorSetting not defined in debug setting configuration file.
export const cErrorDebugFilesDataFontBackgroundColorSettingMessage = cERROR_Colon + cfg.cdebugFilesDataFontBackgroundColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsModuleFontStyleSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsModuleFontStyleSettingMessage = cERROR_Colon + cfg.cdebugFunctionsModuleFontStyleSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsFunctionFontStyleSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsFunctionFontStyleSettingMessage = cERROR_Colon + cfg.cdebugFunctionsFunctionFontStyleSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsMessageFontStyleSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsMessageFontStyleSettingMessage = cERROR_Colon + cfg.cdebugFunctionsMessageFontStyleSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsDataFontStyleSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsDataFontStyleSettingMessage = cERROR_Colon + cfg.cdebugFunctionsDataFontStyleSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsModuleFontColorSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsModuleFontColorSettingMessage = cERROR_Colon + cfg.cdebugFunctionsModuleFontColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsFunctionFontColorSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsFunctionFontColorSettingMessage = cERROR_Colon + cfg.cdebugFunctionsFunctionFontColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsMessageFontColorSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsMessageFontColorSettingMessage = cERROR_Colon + cfg.cdebugFunctionsMessageFontColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsDataFontColorSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsDataFontColorSettingMessage = cERROR_Colon + cfg.cdebugFunctionsDataFontColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsModuleFontBackgroundColorSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsModuleFontBackgroundColorSettingMessage = cERROR_Colon + cfg.cdebugFunctionsModuleFontBackgroundColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsFunctionFontBackgroundColorSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsFunctionFontBackgroundColorSettingMessage = cERROR_Colon + cfg.cdebugFunctionsFunctionFontBackgroundColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsMessageFontBackgroundColorSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsMessageFontBackgroundColorSettingMessage = cERROR_Colon + cfg.cdebugFunctionsMessageFontBackgroundColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: debugFunctionsDataFontBackgroundColorSetting not defined in debug setting configuration file.
export const cErrorDebugFunctionsDataFontBackgroundColorSettingMessage = cERROR_Colon + cfg.cdebugFunctionsDataFontBackgroundColorSetting + bas.cSpace + gen.cnot + bas.cSpace + wrd.cdefined + bas.cSpace + wrd.cin + bas.cSpace + wrd.cdebug + bas.cSpace + wrd.csetting + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cfile + bas.cDot;
// ERROR: columnNames is not an array of strings.
export const cErrorConsoleLogTableMessage01 = cERROR_Colon + wrd.ccolumn + wrd.cNames + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.can + bas.cSpace + wrd.carray + bas.cSpace + wrd.cof + bas.cSpace + wrd.cstrings + bas.cDot;
// ERROR: tableData is not an array of objects.
export const cErrorConsoleLogTableMessage02 = cERROR_Colon + wrd.ctable + wrd.cData + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.can + bas.cSpace + wrd.carray + bas.cSpace + wrd.cof + bas.cSpace + wrd.cobjects + bas.cDot;
// ERROR: classPath is an invalid value.
export const cErrorConsoleLogTableMessage03 = cERROR_Colon + wrd.cclass + wrd.cPath + bas.cSpace + cisAnInvalidValue + bas.cDot;
// ERROR: pluginCommands is an invalid value. pluginCommands is: 
export const cErrorAddPluginsCommandsMessage01 = cERROR_Colon + wrd.cplugin + wrd.cCommands + bas.cSpace + cisAnInvalidValue + bas.cDot + bas.cSpace + wrd.cplugin + wrd.cCommands + sys.cSpaceIsColonSpace;
// ERROR: pluginName is an invalid value. pluginName is: 
export const cErrorAddPluginsCommandsMessage02 = cERROR_Colon + wrd.cplugin + wrd.cName + bas.cSpace + cisAnInvalidValue + bas.cDot + bas.cSpace + wrd.cplugin + wrd.cName + sys.cSpaceIsColonSpace;
// ERROR: pluginCommandAliases is an invalid value. pluginCommandAliases is: 
export const cErrorAddPluginCommandAliasesMessage02 = cERROR_Colon + wrd.cplugin + wrd.cCommand + wrd.cAliases + bas.cSpace + cisAnInvalidValue + bas.cDot + bas.cSpace + wrd.cplugin + wrd.cCommand + wrd.cAliases + sys.cSpaceIsColonSpace;
// ERROR: pluginName is an invalid value. pluginName is: 
export const cErrorAddPluginCommandAliasesMessage03 = cERROR_Colon + wrd.cplugin + wrd.cName + bas.cSpace + cisAnInvalidValue + bas.cDot + bas.cSpace + wrd.cplugin + wrd.cName + sys.cSpaceIsColonSpace;
// ERROR: commandAliasData is an invalid value.
export const cErrorCountMatchingCommandAliasMessage02 = cERROR_Colon + wrd.ccommand + wrd.cAlias + wrd.cData + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cvalue + bas.cDot;
// ERROR: commandAliasName is an invalid value.
export const cErrorCountMatchingCommandAliasMessage03 = cERROR_Colon + wrd.ccommand + wrd.cAlias + wrd.cName + bas.cSpace + wrd.cis + bas.cSpace + wrd.can + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.cvalue + bas.cDot;

// Coded System Messages
// EXAMPLE:
// '!mergedData[wrd.csystem] && !D[wrd.csystem] === true'
// D[sys.cbusinessRules][inputData] is:
export const cgetRuleMessage01 = bas.cD + bas.cOpenBracket + gen.csys + bas.cDot + bas.cc+ sys.cbusinessRules + bas.cCloseBracket + bas.cOpenBracket + cinputData + bas.cCloseBracket + sys.cSpaceIsColonSpace;