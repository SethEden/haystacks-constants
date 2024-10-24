/**
 * @file business.constants.js
 * @module business.constants
 * @description Contains many re-usable business rules constants.
 * @requires module:basic.constants
 * @requires module:generic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:system.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2021/10/29
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as gen from './generic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';
import * as sys from './system.constants.js';
import * as wrd from './word.constants.js';

// Business Rules
export const cecho = wrd.cecho; // echo
export const cEcho = wrd.cEcho; // Echo

// ***********************************************************************
// BEGIN ArrayParsing category
// ***********************************************************************
// ***********************************************
// AuxiliaryArrayParsing rules in order
// ***********************************************
export const cparseColorRangeInputs = wrd.cparse + wrd.cColor + wrd.cRange + wrd.cInputs; // parseColorRangeInputs
export const cgetNamedColorDataArray = wrd.cget + wrd.cNamed + wrd.cColor + wrd.cData + wrd.cArray; // getNamedColorDataArray
export const cdoesArrayContainValue = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cValue; // doesArrayContainValue

// ***********************************************
// CharacterArrayParsing rules in order
// ***********************************************
export const creplaceCharacterWithCharacter = wrd.creplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter; // replaceCharacterWithCharacter
export const cdoesArrayContainCharacter = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter; // doesArrayContainCharacter
export const cremoveCharacterFromArray = wrd.cremove + wrd.cCharacter + wrd.cFrom + wrd.cArray; // removeCharacterFromArray
export const creplaceCharacterAtIndex = wrd.creplace + wrd.cCharacter + wrd.cAt + wrd.cIndex; // replaceCharacterAtIndex

// ***********************************************
// CommandArrayParsing rules in order
// ***********************************************
export const csolveLehmerCode = wrd.csolve + wrd.cLehmer + wrd.cCode; // solveLehmerCode
export const crecursiveArrayExpansion = wrd.crecursive + wrd.cArray + wrd.cExpansion; // recursiveArrayExpansion
export const cgetLehmerCodeValue = wrd.cget + wrd.cLehmer + wrd.cCode + wrd.cValue; // getLehmerCodeValue
export const cgenerateCommandAliases = wrd.cgenerate + wrd.cCommand + wrd.cAliases; // generateCommandAliases
export const caggregateCommandArguments = wrd.caggregate + wrd.cCommand + wrd.cArguments; // aggregateCommandArguments

// ***********************************************
// ConstantArrayParsing rules in order
// ***********************************************
export const cgetLengthOfLongestStringInArray = wrd.cget + wrd.cLength + wrd.cOf + wrd.cLongest + wrd.cString + bas.cIn + wrd.cArray; // getLengthOfLongestStringInArray
export const csearchForPatternsInStringArray = wrd.csearch + wrd.cFor + wrd.cPatterns + bas.cIn + wrd.cString + wrd.cArray; // searchForPatternsInStringArray
export const cvalidatePatternsThatNeedImplementation = wrd.cvalidate + wrd.cPatterns + wrd.cThat + wrd.cNeed + wrd.cImplementation; // validatePatternsThatNeedImplementation

// ***********************************************
// DataArrayParsing rules in order
// ***********************************************
export const carraysAreEqual = wrd.carrays + wrd.cAre + wrd.cEqual; // arraysAreEqual
export const cstoreData = wrd.cstore + wrd.cData; // storeData
export const cgetStoredData = wrd.cget + wrd.cStored + wrd.cData; // getStoredData
export const cisObjectEmpty = wrd.cis + wrd.cObject + wrd.cEmpty; // isObjectEmpty
export const cisArrayEmpty = wrd.cis + wrd.cArray + wrd.cEmpty; // isArrayEmpty
export const cisObject = wrd.cis + wrd.cObject; // isObject
export const cisArray = wrd.cis + wrd.cArray; // isArray
export const cisArrayOrObject = wrd.cis + wrd.cArray + wrd.cOr + wrd.cObject; // isArrayOrObject
export const cisNonZeroLengthArray = wrd.cis + phn.cNon + num.cZero + wrd.cLength + wrd.cArray; // isNonZeroLengthArray
export const carrayDeepClone = wrd.carray + wrd.cDeep + wrd.cClone; // arrayDeepClone
export const cobjectDeepClone = wrd.cobject + wrd.cDeep + wrd.cClone; // objectDeepClone
export const cobjectDeepMerge = wrd.cobject + wrd.cDeep + wrd.cMerge; // objectDeepMerge
export const cgetNamespacedDataObject = wrd.cget + wrd.cNamespaced + wrd.cData + wrd.cObject; // getNamespacedDataObject
export const csetNamespacedDataObject = wrd.cset + wrd.cNamespaced + wrd.cData + wrd.cObject; // setNamespacedDataObject

// ***********************************************
// PathArrayParsing rules in order
// ***********************************************
export const cdoesArrayContainFilename = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cFilename; // doesArrayContainFilename
export const cgetFileAndPathListForPath = wrd.cget + wrd.cFile + wrd.cAnd + wrd.cPath + wrd.cList + wrd.cFor + wrd.cPath; // getFileAndPathListForPath

// ***********************************************
// WordArrayParsing rules in order
// ***********************************************
export const cconvertCamelCaseStringToArray = wrd.cconvert + wrd.cCamel + wrd.cCase + wrd.cString + wrd.cTo + wrd.cArray; // convertCamelCaseStringToArray
export const cgetWordsArrayFromString = wrd.cget + wrd.cWords + wrd.cArray + wrd.cFrom + wrd.cString; // getWordsArrayFromString
export const crecombineStringArrayWithSpaces = wrd.crecombine + wrd.cString + wrd.cArray + wrd.cWith + wrd.cSpaces; // recombineStringArrayWithSpaces
export const cconvertArrayToCamelCaseString = wrd.cconvert + wrd.cArray + wrd.cTo + wrd.cCamel + wrd.cCase + wrd.cString; // convertArrayToCamelCaseString
export const cdoesArrayContainLowerCaseConsolidatedString = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cLower + wrd.cCase + wrd.cConsolidated + wrd.cString; // doesArrayContainLowerCaseConsolidatedString
export const cascertainMatchingElements = wrd.cascertain + wrd.cMatching + wrd.cElements; // ascertainMatchingElements

// ***********************************************************************
// END ArrayParsing category
// ***********************************************************************

// ***********************************************************************
// BEGIN StringParsing category
// ***********************************************************************
// ***********************************************
// AuxiliaryArrayParsing rules in order
// ***********************************************
// NONE - getNowMoment was here, but it was a wrapper function, so it was removed.
// I am going to leave this here as a landing place for future auxiliaryStringParsing utility business rules.

// ***********************************************
// CharacterStringParsing rules in order
// ***********************************************
export const csingleQuoteSwapAfterEquals = wrd.csingle + wrd.cQuote + wrd.cSwap + wrd.cAfter + wrd.cEquals; // singleQuoteSwapAfterEquals
export const cswapForwardSlashToBackSlash = wrd.cswap + sys.cForwardSlash + bas.cTo + sys.cBackSlash; // swapForwardSlashToBackSlash
export const cswapBackSlashToForwardSlash = wrd.cswap + sys.cBackSlash + bas.cTo + sys.cForwardSlash; // swapBackSlashToForwardSlash
export const cswapDoubleForwardSlashToSingleForwardSlash = wrd.cswap + wrd.cDouble + sys.cForwardSlash + bas.cTo + wrd.cSingle + sys.cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
export const cswapDoubleBackSlashToSingleBackSlash = wrd.cswap + wrd.cDouble + sys.cBackSlash + bas.cTo + wrd.cSingle + sys.cBackSlash; // swapDoubleBackSlashToSingleBackSlash
export const creplaceSpacesWithPlus = wrd.creplace + wrd.cSpaces + wrd.cWith + wrd.cPlus; // replaceSpacesWithPlus
export const creplaceColonWithUnderscore = wrd.creplace + wrd.cColon + wrd.cWith + wrd.cUnderscore; // replaceColonWithUnderscore
export const ccleanCarriageReturnFromString = wrd.cclean + wrd.cCarriage + wrd.cReturn + wrd.cFrom + wrd.cString; // cleanCarriageReturnFromString
export const cconvertStringToLowerCase = wrd.cconvert + wrd.cString + wrd.cTo + wrd.cLower + wrd.cCase; // convertStringToLowerCase
export const cconvertStringToUpperCase = wrd.cconvert + wrd.cString + wrd.cTo + wrd.cUpper + wrd.cCase; // convertStringToUpperCase
export const cdoesStringContainUpperCaseCharacter = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cUpper + wrd.cCase + wrd.cCharacter; // doesStringContainUpperCaseCharacter
export const cdoesStringContainLowerCaseCharacter = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cLower + wrd.cCase + wrd.cCharacter; // doesStringContainLowerCaseCharacter
export const cisFirstCharacterLowerCase = wrd.cis + num.cFirst + wrd.cCharacter + wrd.cLower + wrd.cCase; // isFirstCharacterLowerCase
export const cisFirstCharacterUpperCase = wrd.cis + num.cFirst + wrd.cCharacter + wrd.cUpper + wrd.cCase; // isFirstCharacterUpperCase
export const creplaceCharacterAtIndexOfString = wrd.creplace + wrd.cCharacter + wrd.cAt + wrd.cIndex + wrd.cOf + wrd.cString; // replaceCharacterAtIndexOfString

// ***********************************************
// CommandStringParsing rules in order
// ***********************************************
export const ccleanCommandInput = wrd.cclean + wrd.cCommand + wrd.cInput; // cleanCommandInput
export const cisValidCommandNameString = wrd.cis + wrd.cValid + wrd.cCommand + wrd.cName + wrd.cString; // isValidCommandNameString

// ***********************************************
// ConstantStringParsing rules in order
// ***********************************************
export const cvalidateConstantsDataValidation = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValidation; // validateConstantsDataValidation
export const cdetermineConstantsContextQualifiedPrefix = wrd.cdetermine + wrd.cConstants + wrd.cContext + wrd.cQualified + wrd.cPrefix; // determineConstantsContextQualifiedPrefix
export const cdetermineSuggestedConstantsValidationLineOfCode = wrd.cdetermine + wrd.cSuggested + wrd.cConstants + wrd.cValidation + wrd.cLine + wrd.cOf + wrd.cCode; // determineSuggestedConstantsValidationLineOfCode
export const cvalidateConstantsDataValidationLineItemName = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValidation + wrd.cLine + wrd.cItem + wrd.cName; // validateConstantsDataValidationLineItemName
export const cgetConstantsValidationNamespaceParentObject = wrd.cget + wrd.cConstants + wrd.cValidation + wrd.cNamespace + wrd.cParent + wrd.cObject; // getConstantsValidationNamespaceParentObject
export const cgetConstantsValidationNamespaceObject = wrd.cget + wrd.cConstants + wrd.cValidation + wrd.cNamespace + wrd.cObject; // getConstantsValidationNamespaceObject
export const cdoesConstantNamespaceExist = wrd.cdoes + wrd.cConstant + wrd.cNamespace + wrd.cExist; // doesConstantNamespaceExist
export const cdoesConstantExist = wrd.cdoes + wrd.cConstant + wrd.cExist; // doesConstantExist
export const cdoesConstantExistInConstantLibraryObject = wrd.cdoes + wrd.cConstant + wrd.cExist + wrd.cIn + wrd.cConstant + wrd.cLibrary + wrd.cObject; // doesConstantExistInConstantLibraryObject
export const cgetConstantTypeInConstantLibraryObject = wrd.cget + wrd.cConstant + wrd.cType + wrd.cIn + wrd.cConstant + wrd.cLibrary + wrd.cObject; // getConstantTypeInConstantLibraryObject
export const cgetConstantNameInConstantLibraryObject = wrd.cget + wrd.cConstant + wrd.cName + wrd.cIn + wrd.cConstant + wrd.cLibrary + wrd.cObject; // getConstantNameInConstantLibraryObject
export const cgetConstantActualValueInConstantLibraryObject = wrd.cget + wrd.cConstant + wrd.cActual + wrd.cValue + wrd.cIn + wrd.cConstant + wrd.cLibrary + wrd.cObject; // getConstantActualValueInConstantLibraryObject
export const cdoesConstantExistInConstantNamespaceObject = wrd.cdoes + wrd.cConstant + wrd.cExist + wrd.cIn + wrd.cConstant + wrd.cNamespace + wrd.cObject; // doesConstantExistInConstantNamespaceObject
export const cgetConstantNameInConstantNamespaceObject = wrd.cget + wrd.cConstant + wrd.cName + wrd.cIn + wrd.cConstant + wrd.cNamespace + wrd.cObject; // getConstantNameInConstantNamespaceObject
export const cgetConstantActualValueInConstantNamespaceObject = wrd.cget + wrd.cConstant + wrd.cActual + wrd.cValue + wrd.cIn + wrd.cConstant + wrd.cNamespace + wrd.cObject; // getConstantActualValueInConstantNamespaceObject
export const cgetConstantType = wrd.cget + wrd.cConstant + wrd.cType; // getConstantType
export const cgetConstantActualValue = wrd.cget + wrd.cConstant + wrd.cActual + wrd.cValue; // getConstantActualValue
export const cgetConstantName = wrd.cget + wrd.cConstant + wrd.cName; // getConstantName
export const cfindConstantName = wrd.cfind + wrd.cConstant + wrd.cName; // findConstantName
export const cisConstantTypeValid = wrd.cis + wrd.cConstant + wrd.cType + wrd.cValid; // isConstantTypeValid
export const cconvertConstantTypeToConstantPrefix = wrd.cconvert + wrd.cConstant + wrd.cType + wrd.cTo + wrd.cConstant + wrd.cPrefix; // convertConstantTypeToConstantPrefix
export const cconstantsOptimizedFulfillmentSystem = wrd.cconstants + wrd.cOptimized + wrd.cFulfillment + wrd.cSystem; // constantsOptimizedFulfillmentSystem
export const cconstantsFulfillmentSystem = wrd.cconstants + wrd.cFulfillment + wrd.cSystem; // constantsFulfillmentSystem
export const cvalidateConstantsDataValues = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValues; // validateConstantsDataValues
export const cisConstantValid = wrd.cis + wrd.cConstant + wrd.cValid; // isConstantValid

// ***********************************************
// DataStringParsing rules in order
// ***********************************************
export const cgetAttributeName = wrd.cget + wrd.cAttribute + wrd.cName; // getAttributeName
export const cgetAttributeValue = wrd.cget + wrd.cAttribute + wrd.cValue; // getAttributeValue
export const cgetValueFromAssignmentOperationString = wrd.cget + wrd.cValue + wrd.cFrom + wrd.cAssignment + wrd.cOperation + wrd.cString; // getValueFromAssignmentOperationString
export const cgetDataCategoryFromDataContextName = wrd.cget + wrd.cData + wrd.cCategory + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getDataCategoryFromDataContextName
export const cgetDataCategoryDetailNameFromDataContextName = wrd.cget + wrd.cData + wrd.cCategory + wrd.cDetail + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getDataCategoryDetailNameFromDataContextName
export const cgetKeywordNameFromDataContextName = wrd.cget + wrd.cKeyword + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getKeywordNameFromDataContextName
export const cloadDataFile = wrd.cload + wrd.cData + wrd.cFile; // loadDataFile
export const csaveDataFile = wrd.csave + wrd.cData + wrd.cFile; // saveDataFile
export const cgetUserNameFromEmail = wrd.cget + wrd.cUser + wrd.cName + wrd.cFrom + wrd.cEmail; // getUserNameFromEmail
export const cencryptStringAes256 = wrd.cencrypt + wrd.cString + gen.cAes256; // encryptStringAes256
export const cdecryptStringAes256 = wrd.cdecrypt + wrd.cString + gen.cAes256; // decryptStringAes256
export const cobfuscateString = wrd.cobfuscate + wrd.cString; // obfuscateString

// ***********************************************
// FileStringParsing rules in order
// ***********************************************
export const cgetFileNameFromPath = wrd.cget + wrd.cFile + wrd.cName + wrd.cFrom + wrd.cPath; // getFileNameFromPath
export const cgetFileExtension = wrd.cget + wrd.cFile + wrd.cExtension; // getFileExtension
export const cremoveDotFromFileExtension = wrd.cremove + wrd.cDot + wrd.cFrom + wrd.cFile + wrd.cExtension; // removeDotFromFileExtension
export const cremoveFileExtensionFromFileName = wrd.cremove + wrd.cFile + wrd.cExtension + wrd.cFrom + wrd.cFileName; // removeFileExtensionFromFileName
export const cascertainMatchingFilenames = wrd.cascertain + wrd.cMatching + wrd.cFilenames; // ascertainMatchingFilenames
export const csupportedFileFormatsAre = wrd.csupported + wrd.cFile + wrd.cFormats + wrd.cAre; // supportedFileFormatsAre
export const cremoveXnumberOfFoldersFromEndOfPath = wrd.cremove + bas.cX + wrd.cnumber + wrd.cOf + wrd.cFolders + wrd.cFrom + wrd.cEnd + wrd.cOf + wrd.cPath; // removeXnumberOfFoldersFromEndOfPath
export const cgetFirstTopLevelFolderFromPath = wrd.cget + num.cFirst + wrd.cTop + wrd.cLevel + wrd.cFolder + wrd.cFrom + wrd.cPath; // getFirstTopLevelFolderFromPath

// ***********************************************
// WordStringParsing rules in order
// ***********************************************
export const cisStringCamelCase = wrd.cis + wrd.cString + wrd.cCamel + wrd.cCase; // isStringCamelCase
export const cmapWordToCamelCaseWord = wrd.cmap + wrd.cWord + wrd.cTo + wrd.cCamel + wrd.cCase + wrd.cWord; // mapWordToCamelCaseWord
export const csimplifyAndConsolidateString = wrd.csimplify + wrd.cAnd + wrd.cConsolidate + wrd.cString; // simplifyAndConsolidateString
export const ccompareSimplifiedAndConsolidatedStrings = wrd.ccompare + wrd.cSimplified + wrd.cAnd + wrd.cConsolidated + wrd.cStrings; // compareSimplifiedAndConsolidatedStrings
export const ccountCamelCaseWords = wrd.ccount + wrd.cCamel + wrd.cCase + wrd.cWords; // countCamelCaseWords
export const cdoesStringContainAcronym = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cAcronym; // doesStringContainAcronym
export const cdetermineWordDelimiter = wrd.cdetermine + wrd.cWord + wrd.cDelimiter; // determineWordDelimiter
export const ccountDelimiterInString = wrd.ccount + wrd.cDelimiter + wrd.cIn + wrd.cString; // countDelimiterInString
export const cgetWordCountInString = wrd.cget + wrd.cWord + wrd.cCount + wrd.cIn + wrd.cString; // getWordCountInString
export const cisStringList = wrd.cis + wrd.cString + wrd.cList; // isStringList
export const caggregateNumericalDifferenceBetweenTwoStrings = wrd.caggregate + wrd.cNumerical + wrd.cDifference + wrd.cBetween + num.cTwo + wrd.cStrings; // aggregateNumericalDifferenceBetweenTwoStrings

// ***********************************************************************
// END StringParsing category
// ***********************************************************************

// ***********************************************
// characterGeneration rules in order
// ***********************************************
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateMixedCaseLetterOrSpecialCharacter
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateUpperCaseLetterOrSpecialCharacter
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateLowerCaseLetterOrSpecialCharacter
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cMixed + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cUpper + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cLower + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateMixedCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter; // randomlyGenerateMixedCaseAlphaNumericCharacter
export const crandomlyGenerateUpperCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter; // randomlyGenerateUpperCaseAlphaNumericCharacter
export const crandomlyGenerateLowerCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter; // randomlyGenerateLowerCaseAlphaNumericCharacter
export const crandomlyGenerateNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cNumeric + wrd.cCharacter; // randomlyGenerateNumericCharacter
export const crandomlyGenerateSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateSpecialCharacter
export const crandomlyGenerateNumberInRange = wrd.crandomly + wrd.cGenerate + wrd.cNumber + wrd.cIn + wrd.cRange; // randomlyGenerateNumberInRange
export const crandomlyGenerateBooleanValue = wrd.crandomly + wrd.cGenerate + wrd.cBoolean + wrd.cValue; // randomlyGenerateBooleanValue
export const crandomlyGenerateMixedCaseAlphabeticCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cAlphabetic + wrd.cCharacter; // randomlyGenerateMixedCaseAlphabeticCharacter
export const crandomlyGenerateLowerCaseLetter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cLetter; // randomlyGenerateLowerCaseLetter
export const crandomlyGenerateUpperCaseLetter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cLetter; // randomlyGenerateUpperCaseLetter
export const cconvertNumberToUpperCaseLetter = wrd.cconvert + wrd.cNumber + wrd.cTo + wrd.cUpper + wrd.cCase + wrd.cLetter; // convertNumberToUpperCaseLetter
export const cconvertNumberToLowerCaseLetter = wrd.cconvert + wrd.cNumber + wrd.cTo + wrd.cLower + wrd.cCase + wrd.cLetter; // convertNumberToLowerCaseLetter

// ***********************************************
// fileOperations rules in order
// ***********************************************
export const cgetXmlData = wrd.cget + gen.cXml + wrd.cData; // getXmlData
export const cgetCsvData = wrd.cget + gen.cCsv + wrd.cData; // getCsvData
export const cgetJsonData = wrd.cget + gen.cJson + wrd.cData; // getJsonData
export const cwriteJsonData = wrd.cwrite + gen.cJson + wrd.cData; // writeJsonData
export const cloadAsciiFileFromPath = wrd.cload + gen.cAscii + wrd.cFile + wrd.cFrom + wrd.cPath; // loadAsciiFileFromPath
export const creadDirectoryContents = wrd.cread + wrd.cDirectory + wrd.cContents; // readDirectoryContents
export const cscanDirectoryContents = wrd.cscan + wrd.cDirectory + wrd.cContents; // scanDirectoryContents
export const cgetDirectoryList = wrd.cget + wrd.cDirectory + wrd.cList; // getDirectoryList
export const creadDirectorySynchronously = wrd.cread + wrd.cDirectory + wrd.cSynchronously; // readDirectorySynchronously
export const ccopyAllFilesAndFoldersFromFolderToFolder = wrd.ccopy + wrd.cAll + wrd.cFiles + wrd.cAnd + wrd.cFolders + wrd.cFrom + wrd.cFolder + wrd.cTo + wrd.cFolder; // copyAllFilesAndFoldersFromFolderToFolder
export const cbuildReleasePackage = wrd.cbuild + wrd.cRelease + wrd.cPackage; // buildReleasePackage
export const ccreateZipArchive = wrd.ccreate + gen.cZip + wrd.cArchive; // createZipArchive
export const ccleanRootPath = wrd.cclean + wrd.cRoot + wrd.cPath; // cleanRootPath
export const ccopyFileSync = wrd.ccopy + wrd.cFile + wrd.cSync; // copyFileSync
export const ccopyFolderRecursiveSync = wrd.ccopy + wrd.cFolder + wrd.cRecursive + wrd.cSync; // copyFolderRecursiveSync
export const cdeleteFile = wrd.cdelete + wrd.cFile; // deleteFile
export const cappendMessageToFile = wrd.cappend + wrd.cMessage + wrd.cTo + wrd.cFile; // appendMessageToFile

// ***********************************************
// language Parsing rules in order
// ***********************************************
export const clanguageToAlphabet = wrd.clanguage + wrd.cTo + wrd.cAlphabet; // languageToAlphabet

// ***********************************************
// lexicalAnalyzer rules in order
// ***********************************************
export const cparseBusinessRuleArgument = wrd.cparse + wrd.cBusiness + wrd.cRule + wrd.cArgument; // parseBusinessRuleArgument
export const canalyzeArgument = wrd.canalyze + wrd.cArgument; // analyzeArgument
export const canalyzeForRegularExpression = wrd.canalyze + wrd.cFor + wrd.cRegular + wrd.cExpression; // analyzeForRegularExpression
export const cparseArgumentAsRegularExpression = wrd.cparse + wrd.cArgument + wrd.cAs + wrd.cRegular + wrd.cExpression; // parseArgumentAsRegularExpression
export const cparseArgumentAsArray = wrd.cparse + wrd.cArgument + wrd.cAs + wrd.cArray; // parseArgumentAsArray
export const cremoveStringLiteralTagsFromArray = wrd.cremove + wrd.cString + wrd.cLiteral + wrd.cTags + wrd.cFrom + wrd.cArray; // removeStringLiteralTagsFromArray

// ***********************************************
// mathOperations rules in order
// ***********************************************
export const chex2rgbConversion = gen.chex + num.c2 + gen.crgb + wrd.cConversion; // hex2rgbConversion
export const cisOdd = wrd.cis + wrd.cOdd; // isOdd
export const cisEven = wrd.cis + wrd.cEven; // isEven

// ***********************************************
// promptOperations rules in order
// ***********************************************
export const cprompt = phn.cpro + phn.cmpt; // prompt
export const cpromptRaw = cprompt + wrd.cRaw; // promptRaw

// ***********************************************
// ruleParsing rules in order
// ***********************************************
export const cdoAllRulesExist = wrd.cdo + wrd.cAll + wrd.cRules + wrd.cExist; // doAllRulesExist
export const cdoesRuleExist = wrd.cdoes + wrd.cRule + wrd.cExist; // doesRuleExist
export const cgetRule = wrd.cget + wrd.cRule; // getRule
export const cprocessRulesInternal = wrd.cprocess + wrd.cRules + wrd.cInternal; // processRulesInternal

// ***********************************************
// stringGeneration rules in order
// ***********************************************
export const cgenerateRandomMixedCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength; // generateRandomMixedCaseTextByLength
export const cgenerateRandomUpperCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength; // generateRandomUpperCaseTextByLength
export const cgenerateRandomLowerCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength; // generateRandomLowerCaseTextByLength
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomMixedCaseTextWithSpecialCharactersByLength
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomUpperCaseTextWithSpecialCharactersByLength
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomLowerCaseTextWithSpecialCharactersByLength
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomMixedCaseAlphaNumericCodeByLength
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomUpperCaseAlphaNumericCodeByLength
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomLowerCaseAlphaNumericCodeByLength
export const cgenerateRandomNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomNumericCodeByLength
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomSpecialCharacterCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cSpecial + wrd.cCharacter + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomSpecialCharacterCodeByLength
export const cgenerateValidEmail = wrd.cgenerate + wrd.cValid + wrd.cEmail; // generateValidEmail
export const cgenerateInvalidEmail = wrd.cgenerate + wrd.cInvalid + wrd.cEmail; // generateInvalidEmail
export const cgenerateValidEmailWithSpecificSuffixAndDomainName = wrd.cgenerate + wrd.cValid + wrd.cEmail + wrd.cWith + wrd.cSpecific + wrd.cSuffix + wrd.cAnd + wrd.cDomain + wrd.cName; // generateValidEmailWithSpecificSuffixAndDomainName
export const cgenerateRandomValidEmail = wrd.cgenerate + wrd.cRandom + wrd.cValid + wrd.cEmail; // generateRandomValidEmail
export const cgenerateInvalidEmailWithSpecificSuffixAndDomainName = wrd.cgenerate + wrd.cInvalid + wrd.cEmail + wrd.cWith + wrd.cSpecific + wrd.cSuffix + wrd.cAnd + wrd.cDomain + wrd.cName; // generateInvalidEmailWithSpecificSuffixAndDomainName
export const cgenerateRandomInvalidEmail = wrd.cgenerate + wrd.cRandom + wrd.cInvalid + wrd.cEmail; // generateRandomInvalidEmail
export const cgenerateRandomBrightColor = wrd.cgenerate + wrd.cRandom + wrd.cBright + wrd.cColor; // generateRandomBrightColor
export const cgenerateRandomDarkColor = wrd.cgenerate + wrd.cRandom + wrd.cDark + wrd.cColor; // generateRandomDarkColor
export const cgenerateRandomColor = wrd.cgenerate + wrd.cRandom + wrd.cColor; // generateRandomColor

// ***********************************************
// StringParsingUtiities rules in order
// ***********************************************
export const cparseSystemRootPath = wrd.cparse + wrd.cSystem + wrd.cRoot + wrd.cPath; // parseSystemRootPath
export const cparseSystemRootPathApplicationName = cparseSystemRootPath + wrd.cApplication + wrd.cName; // parseSystemRootPathApplicationName
export const cstringToDataType = wrd.cstring + wrd.cTo + wrd.cData + wrd.cType; // stringToDataType
export const cstringToBoolean = wrd.cstring + wrd.cTo + wrd.cBoolean; // stringToBoolean
export const cdetermineObjectDataType = wrd.cdetermine + wrd.cObject + wrd.cData + wrd.cType; // determineObjectDataType
export const cisBoolean = wrd.cis + wrd.cBoolean; // isBoolean
export const cisInteger = wrd.cis + wrd.cInteger; // isInteger
export const cisFloat = wrd.cis + wrd.cFloat; // isFloat
export const cisString = wrd.cis + wrd.cString; // isString
export const creplaceDoublePercentWithMessage = wrd.creplace + wrd.cDouble + wrd.cPercent + wrd.cWith + wrd.cMessage; // replaceDoublePercentWithMessage
export const cutilitiesReplaceCharacterWithCharacter = wrd.cutilities + wrd.cReplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter; // utilitiesReplaceCharacterWithCharacter

// ***********************************************
// timeComputation rules in order
// ***********************************************
export const cgetNowMoment = wrd.cget + wrd.cNow + wrd.cMoment; // getNowMoment
export const ccomputeDeltaTime = wrd.ccompute + wrd.cDelta + wrd.cTime; // computeDeltaTime
export const creformatDeltaTime = wrd.creformat + wrd.cDelta + wrd.cTime; // reformatDeltaTime
export const csleep = wrd.csleep; // sleep
