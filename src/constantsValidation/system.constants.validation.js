/**
 * @file system.constants.validation.js
 * @module system.constants.validation
 * @description Contaisn validations for system defined acronyms, many of them derived from the basic.constants.
 * Also included are validations for system defined words, codes user interface objects, etc...
 * @requires module:system.constants
 * @author Seth Hollingsead
 * @date 2022/03/21
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as sys from '../constants/system.constants.js';

/**
 * @function systemConstantsValidation
 * @description Initializes the system constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/21
 */
export const systemConstantsValidation = [
  // Miscelaneious
  {Name: 'cENV', Actual: sys.cENV, Expected: 'ENV'},
  {Name: 'cLOG', Actual: sys.cLOG, Expected: 'LOG'},
  {Name: 'cENVIRONMENT', Actual: sys.cENVIRONMENT, Expected: 'ENVIRONMENT'},
  {Name: 'cITERATION', Actual: sys.cITERATION, Expected: 'ITERATION'},
  {Name: 'cSTYLE', Actual: sys.cSTYLE, Expected: 'STYLE'},

  // Compound System Words
  {Name: 'cunderline', Actual: sys.cunderline, Expected: 'underline'},
  {Name: 'cUnderline', Actual: sys.cUnderline, Expected: 'Underline'},
  {Name: 'cwithText', Actual: sys.cwithText, Expected: 'withText'},
  {Name: 'cWithText', Actual: sys.cWithText, Expected: 'WithText'},
  {Name: 'cDebugTest', Actual: sys.cDebugTest, Expected: 'DebugTest'},
  {Name: 'cDebugPage', Actual: sys.cDebugPage, Expected: 'DebugPage'},
  {Name: 'cDebugTestExhaustive', Actual: sys.cDebugTestExhaustive, Expected: 'DebugTestExhaustive'},
  {Name: 'cDebugForceMessageToLogFile', Actual: sys.cDebugForceMessageToLogFile, Expected: 'DebugForceMessageToLogFile'},
  {Name: 'cDebugTestData', Actual: sys.cDebugTestData, Expected: 'DebugTestData'},
  {Name: 'cDebugPageScripts', Actual: sys.cDebugPageScripts, Expected: 'DebugPageScripts'},
  {Name: 'cDebugPageData', Actual: sys.cDebugPageData, Expected: 'DebugPageData'},
  {Name: 'cDebugKeywords', Actual: sys.cDebugKeywords, Expected: 'DebugKeywords'},
  {Name: 'cLogBrowserActions', Actual: sys.cLogBrowserActions, Expected: 'LogBrowserActions'},
  {Name: 'cJournalBrowserActions', Actual: sys.cJournalBrowserActions, Expected: 'JournalBrowserActions'},
  {Name: 'cDebugBrowserActions', Actual: sys.cDebugBrowserActions, Expected: 'DebugBrowserActions'},
  {Name: 'cDebugSelectors', Actual: sys.cDebugSelectors, Expected: 'DebugSelectors'},
  {Name: 'cTestAutomation', Actual: sys.cTestAutomation, Expected: 'TestAutomation'},
  {Name: 'cNumberOfRows', Actual: sys.cNumberOfRows, Expected: 'NumberOfRows'},
  {Name: 'cMasterRowNumber', Actual: sys.cMasterRowNumber, Expected: 'MasterRowNumber'},
  {Name: 'cEnvironmentRow', Actual: sys.cEnvironmentRow, Expected: 'EnvironmentRow'},
  {Name: 'cEnvironmentRowNumber', Actual: sys.cEnvironmentRowNumber, Expected: 'EnvironmentRowNumber'},
  {Name: 'cPageScript', Actual: sys.cPageScript, Expected: 'PageScript'},
  {Name: 'cIntermediatePath', Actual: sys.cIntermediatePath, Expected: 'IntermediatePath'},
  {Name: 'cTimeStamp', Actual: sys.cTimeStamp, Expected: 'TimeStamp'},
  {Name: 'cPageScriptTimeStamp', Actual: sys.cPageScriptTimeStamp, Expected: 'PageScriptTimeStamp'},
  {Name: 'cdateTimeStamp', Actual: sys.cdateTimeStamp, Expected: 'dateTimeStamp'},
  {Name: 'cDateTimeStamp', Actual: sys.cDateTimeStamp, Expected: 'DateTimeStamp'},
  {Name: 'cScriptDateStamp', Actual: sys.cScriptDateStamp, Expected: 'ScriptDateStamp'},
  {Name: 'cScriptTimeStamp', Actual: sys.cScriptTimeStamp, Expected: 'ScriptTimeStamp'},
  {Name: 'cKeywordTimeStamp', Actual: sys.cKeywordTimeStamp, Expected: 'KeywordTimeStamp'},
  {Name: 'cTestTimeStamp', Actual: sys.cTestTimeStamp, Expected: 'TestTimeStamp'},
  {Name: 'cScriptDateTimeStamp', Actual: sys.cScriptDateTimeStamp, Expected: 'ScriptDateTimeStamp'},
  {Name: 'cBeginScriptTimeStamp', Actual: sys.cBeginScriptTimeStamp, Expected: 'BeginScriptTimeStamp'},
  {Name: 'cEndScriptTimeStamp', Actual: sys.cEndScriptTimeStamp, Expected: 'EndScriptTimeStamp'},
  {Name: 'cBeginTestTimeStamp', Actual: sys.cBeginTestTimeStamp, Expected: 'BeginTestTimeStamp'},
  {Name: 'cEndTestTimeStamp', Actual: sys.cEndTestTimeStamp, Expected: 'EndTestTimeStamp'},
  {Name: 'cBeginPageScriptTimeStamp', Actual: sys.cBeginPageScriptTimeStamp, Expected: 'BeginPageScriptTimeStamp'},
  {Name: 'cEndPageScriptTimeStamp', Actual: sys.cEndPageScriptTimeStamp, Expected: 'EndPageScriptTimeStamp'},
  {Name: 'cBeginKeywordTimeStamp', Actual: sys.cBeginKeywordTimeStamp, Expected: 'BeginKeywordTimeStamp'},
  {Name: 'cEndKeywordTimeStamp', Actual: sys.cEndKeywordTimeStamp, Expected: 'EndKeywordTimeStamp'},
  {Name: 'cRuntime', Actual: sys.cRuntime, Expected: 'Runtime'},
  {Name: 'cRunTime', Actual: sys.cRunTime, Expected: 'RunTime'},
  {Name: 'cBrowserName', Actual: sys.cBrowserName, Expected: 'BrowserName'},
  {Name: 'cHostName', Actual: sys.cHostName, Expected: 'HostName'},
  {Name: 'cTestRunID', Actual: sys.cTestRunID, Expected: 'TestRunID'},
  {Name: 'cfilesLists', Actual: sys.cfilesLists, Expected: 'filesLists'},
  {Name: 'cFileTypes', Actual: sys.cFileTypes, Expected: 'FileTypes'},
  {Name: 'cfilename', Actual: sys.cfilename, Expected: 'filename'},
  {Name: 'cFilename', Actual: sys.cFilename, Expected: 'Filename'},
  {Name: 'cFileName', Actual: sys.cFileName, Expected: 'FileName'},
  {Name: 'cfilenames', Actual: sys.cfilenames, Expected: 'filenames'},
  {Name: 'cFilenames', Actual: sys.cFilenames, Expected: 'Filenames'},
  {Name: 'cFileNames', Actual: sys.cFileNames, Expected: 'FileNames'},
  {Name: 'cPreValidateFileName', Actual: sys.cPreValidateFileName, Expected: 'PreValidateFileName'},
  {Name: 'cAsyncSingular', Actual: sys.cAsyncSingular, Expected: 'AsyncSingular'},
  {Name: 'cSyncSingular', Actual: sys.cSyncSingular, Expected: 'SyncSingular'},
  {Name: 'cParallelMultiUnified', Actual: sys.cParallelMultiUnified, Expected: 'ParallelMultiUnified'},
  {Name: 'cAllowableCharacters', Actual: sys.cAllowableCharacters, Expected: 'AllowableCharacters'},
  {Name: 'cSpecialCharacters', Actual: sys.cSpecialCharacters, Expected: 'SpecialCharacters'},
  {Name: 'cTimeoutOverride', Actual: sys.cTimeoutOverride, Expected: 'TimeoutOverride'},
  {Name: 'cDwellTime', Actual: sys.cDwellTime, Expected: 'DwellTime'},
  {Name: 'cFileCounter', Actual: sys.cFileCounter, Expected: 'FileCounter'},
  {Name: 'cDeltaT', Actual: sys.cDeltaT, Expected: 'DeltaT'},
  {Name: 'cvisibilityCheck', Actual: sys.cvisibilityCheck, Expected: 'visibilityCheck'},
  {Name: 'cVisibilityCheck', Actual: sys.cVisibilityCheck, Expected: 'VisibilityCheck'},
  {Name: 'cOperatingSystem', Actual: sys.cOperatingSystem, Expected: 'OperatingSystem'},
  {Name: 'cinnerText', Actual: sys.cinnerText, Expected: 'innerText'},
  {Name: 'cInnerText', Actual: sys.cInnerText, Expected: 'InnerText'},
  {Name: 'cinnerHTML', Actual: sys.cinnerHTML, Expected: 'innerHTML'},
  {Name: 'cInnerHTML', Actual: sys.cInnerHTML, Expected: 'InnerHTML'},
  {Name: 'cTestData', Actual: sys.cTestData, Expected: 'TestData'},
  {Name: 'cProcessingTimeout', Actual: sys.cProcessingTimeout, Expected: 'ProcessingTimeout'},
  {Name: 'cIngestionCompleteDwellTime', Actual: sys.cIngestionCompleteDwellTime, Expected: 'IngestionCompleteDwellTime'},
  {Name: 'cRowNumber', Actual: sys.cRowNumber, Expected: 'RowNumber'},
  {Name: 'cUsername', Actual: sys.cUsername, Expected: 'Username'},
  {Name: 'cPassword', Actual: sys.cPassword, Expected: 'Password'},
  {Name: 'cProjectName', Actual: sys.cProjectName, Expected: 'ProjectName'},
  {Name: 'cProjectDescription', Actual: sys.cProjectDescription, Expected: 'ProjectDescription'},
  {Name: 'cTestDataFileName', Actual: sys.cTestDataFileName, Expected: 'TestDataFileName'},
  {Name: 'cShareEmail', Actual: sys.cShareEmail, Expected: 'ShareEmail'},
  {Name: 'cAccessLevel', Actual: sys.cAccessLevel, Expected: 'AccessLevel'},
  {Name: 'cFileNumber', Actual: sys.cFileNumber, Expected: 'FileNumber'},
  {Name: 'cConfigurationName', Actual: sys.cConfigurationName, Expected: 'ConfigurationName'},
  {Name: 'cConfigurationElement', Actual: sys.cConfigurationElement, Expected: 'ConfigurationElement'},
  {Name: 'cConfigurationElements', Actual: sys.cConfigurationElements, Expected: 'ConfigurationElements'},
  {Name: 'cVersionControl', Actual: sys.cVersionControl, Expected: 'VersionControl'},
  {Name: 'cScriptRunTime', Actual: sys.cScriptRunTime, Expected: 'ScriptRunTime'},
  {Name: 'cTestRunTime', Actual: sys.cTestRunTime, Expected: 'TestRunTime'},
  {Name: 'ctypeText', Actual: sys.ctypeText, Expected: 'typeText'},
  {Name: 'cTypeText', Actual: sys.cTypeText, Expected: 'TypeText'},
  {Name: 'cAbreviatedSelectors', Actual: sys.cAbreviatedSelectors, Expected: 'AbreviatedSelectors'},
  {Name: 'cAbreviatedSelectorsInLogs', Actual: sys.cAbreviatedSelectorsInLogs, Expected: 'AbreviatedSelectorsInLogs'},
  {Name: 'cselectorTimeout', Actual: sys.cselectorTimeout, Expected: 'selectorTimeout'},
  {Name: 'cchildElementCount', Actual: sys.cchildElementCount, Expected: 'childElementCount'},
  {Name: 'cUnderscore', Actual: sys.cUnderscore, Expected: 'Underscore'},
  {Name: 'cTestBureau', Actual: sys.cTestBureau, Expected: 'TestBureau'},
  {Name: 'caddWithText', Actual: sys.caddWithText, Expected: 'addWithText'},
  {Name: 'caddTimeout', Actual: sys.caddTimeout, Expected: 'addTimeout'},
  {Name: 'caddParent', Actual: sys.caddParent, Expected: 'addParent'},
  {Name: 'caddFindValue', Actual: sys.caddFindValue, Expected: 'addFindValue'},
  {Name: 'caddNth', Actual: sys.caddNth, Expected: 'addNth'},
  {Name: 'caddSibling', Actual: sys.caddSibling, Expected: 'addSibling'},
  {Name: 'caddFilter', Actual: sys.caddFilter, Expected: 'addFilter'},
  {Name: 'cgenerateRandom', Actual: sys.cgenerateRandom, Expected: 'generateRandom'},
  {Name: 'crandomlyGenerate', Actual: sys.crandomlyGenerate, Expected: 'randomlyGenerate'},
  {Name: 'cMixedCase', Actual: sys.cMixedCase, Expected: 'MixedCase'},
  {Name: 'cUpperCase', Actual: sys.cUpperCase, Expected: 'UpperCase'},
  {Name: 'cLowerCase', Actual: sys.cLowerCase, Expected: 'LowerCase'},
  {Name: 'cByLength', Actual: sys.cByLength, Expected: 'ByLength'},
  {Name: 'cSpecialCharacter', Actual: sys.cSpecialCharacter, Expected: 'SpecialCharacter'},
  {Name: 'cWithSpecialCharacters', Actual: sys.cWithSpecialCharacters, Expected: 'WithSpecialCharacters'},
  {Name: 'cTextByLength', Actual: sys.cTextByLength, Expected: 'TextByLength'},
  {Name: 'cTextWithSpecialCharacters', Actual: sys.cTextWithSpecialCharacters, Expected: 'TextWithSpecialCharacters'},
  {Name: 'cTextWithSpecialCharactersByLength', Actual: sys.cTextWithSpecialCharactersByLength, Expected: 'TextWithSpecialCharactersByLength'},
  {Name: 'cAlphaNumeric', Actual: sys.cAlphaNumeric, Expected: 'AlphaNumeric'},
  {Name: 'cAlphaNumericCode', Actual: sys.cAlphaNumericCode, Expected: 'AlphaNumericCode'},
  {Name: 'cAlphaNumericCodeByLength', Actual: sys.cAlphaNumericCodeByLength, Expected: 'AlphaNumericCodeByLength'},
  {Name: 'cNumericCode', Actual: sys.cNumericCode, Expected: 'NumericCode'},
  {Name: 'cNumericCodeByLength', Actual: sys.cNumericCodeByLength, Expected: 'NumericCodeByLength'},
  {Name: 'cAlphaNumericCodeWithSpecialCharacters', Actual: sys.cAlphaNumericCodeWithSpecialCharacters, Expected: 'AlphaNumericCodeWithSpecialCharacters'},
  {Name: 'cAlphaNumericCodeWithSpecialCharactersByLength', Actual: sys.cAlphaNumericCodeWithSpecialCharactersByLength, Expected: 'AlphaNumericCodeWithSpecialCharactersByLength'},
  {Name: 'cSpecialCharacterCodeByLength', Actual: sys.cSpecialCharacterCodeByLength, Expected: 'SpecialCharacterCodeByLength'},
  {Name: 'cvalidEmail', Actual: sys.cvalidEmail, Expected: 'validEmail'},
  {Name: 'cValidEmail', Actual: sys.cValidEmail, Expected: 'ValidEmail'},
  {Name: 'cInvalidEmail', Actual: sys.cInvalidEmail, Expected: 'InvalidEmail'},
  {Name: 'cgenerateValidEmail', Actual: sys.cgenerateValidEmail, Expected: 'generateValidEmail'},
  {Name: 'cgenerateInvalidEmail', Actual: sys.cgenerateInvalidEmail, Expected: 'generateInvalidEmail'},
  {Name: 'cRandomValidEmail', Actual: sys.cRandomValidEmail, Expected: 'RandomValidEmail'},
  {Name: 'cRandomInvalidEmail', Actual: sys.cRandomInvalidEmail, Expected: 'RandomInvalidEmail'},
  {Name: 'cLetterOr', Actual: sys.cLetterOr, Expected: 'LetterOr'},
  {Name: 'cLetterOrSpecialCharacter', Actual: sys.cLetterOrSpecialCharacter, Expected: 'LetterOrSpecialCharacter'},
  {Name: 'cLetterOrNumberOrSpecialCharacter', Actual: sys.cLetterOrNumberOrSpecialCharacter, Expected: 'LetterOrNumberOrSpecialCharacter'},
  {Name: 'cAlphaNumericCharacter', Actual: sys.cAlphaNumericCharacter, Expected: 'AlphaNumericCharacter'},
  {Name: 'cSuffixAndDomain', Actual: sys.cSuffixAndDomain, Expected: 'SuffixAndDomain'},
  {Name: 'cWithSpecificSuffixAndDomainName', Actual: sys.cWithSpecificSuffixAndDomainName, Expected: 'WithSpecificSuffixAndDomainName'},
  {Name: 'cNumericCharacter', Actual: sys.cNumericCharacter, Expected: 'NumericCharacter'},
  {Name: 'cNumberInRange', Actual: sys.cNumberInRange, Expected: 'NumberInRange'},
  {Name: 'cBooleanValue', Actual: sys.cBooleanValue, Expected: 'BooleanValue'},
  {Name: 'cAlphabeticCharacter', Actual: sys.cAlphabeticCharacter, Expected: 'AlphabeticCharacter'},
  {Name: 'cCarriageReturn', Actual: sys.cCarriageReturn, Expected: 'CarriageReturn'},
  {Name: 'cDashboardLogs', Actual: sys.cDashboardLogs, Expected: 'DashboardLogs'},
  {Name: 'cVideoLogs', Actual: sys.cVideoLogs, Expected: 'VideoLogs'},
  {Name: 'cForwardSlash', Actual: sys.cForwardSlash, Expected: 'ForwardSlash'},
  {Name: 'cBackSlash', Actual: sys.cBackSlash, Expected: 'BackSlash'},
  {Name: 'cPage_Keywords', Actual: sys.cPage_Keywords, Expected: 'Page_Keywords'},
  {Name: 'cnavigateTo', Actual: sys.cnavigateTo, Expected: 'navigateTo'},
  {Name: 'cNavigateTo', Actual: sys.cNavigateTo, Expected: 'NavigateTo'},
  {Name: 'cBrowserRefresh', Actual: sys.cBrowserRefresh, Expected: 'BrowserRefresh'},
  {Name: 'cSpaceIsColonSpace', Actual: sys.cSpaceIsColonSpace, Expected: ' is: '},
  {Name: 'cdeployApplication', Actual: sys.cdeployApplication, Expected: 'deployApplication'},
  {Name: 'cdeployMetaData', Actual: sys.cdeployMetaData, Expected: 'deployMetaData'},
  {Name: 'creleaseApplication', Actual: sys.creleaseApplication, Expected: 'releaseApplication'},
  {Name: 'cbackground', Actual: sys.cbackground, Expected: 'background'},
  {Name: 'cBackground', Actual: sys.cBackground, Expected: 'Background'},
  {Name: 'cConfiguration_Colors', Actual: sys.cConfiguration_Colors, Expected: 'Configuration_Colors'},
  {Name: 'cColorData', Actual: sys.cColorData, Expected: 'ColorData'},
  {Name: 'cColorName', Actual: sys.cColorName, Expected: 'ColorName'},
  {Name: 'cbusinessRule', Actual: sys.cbusinessRule, Expected: 'businessRule'},
  {Name: 'cBusinessRule', Actual: sys.cBusinessRule, Expected: 'BusinessRule'},
  {Name: 'cbusinessRules', Actual: sys.cbusinessRules, Expected: 'businessRules'},
  {Name: 'cBusinessRules', Actual: sys.cBusinessRules, Expected: 'BusinessRules'},
  {Name: 'ccommandsBlob', Actual: sys.ccommandsBlob, Expected: 'commandsBlob'},
  {Name: 'cCommandsBlob', Actual: sys.cCommandsBlob, Expected: 'CommandsBlob'},
  {Name: 'crulesLibrary', Actual: sys.crulesLibrary, Expected: 'rulesLibrary'},
  {Name: 'cframework', Actual: sys.cframework, Expected: 'framework'},
  {Name: 'cFramework', Actual: sys.cFramework, Expected: 'Framework'},
  {Name: 'cCommandsAliases', Actual: sys.cCommandsAliases, Expected: 'CommandsAliases'},
  {Name: 'cCommandWorkflows', Actual: sys.cCommandWorkflows, Expected: 'CommandWorkflows'},
  {Name: 'cPluginWorkflows', Actual: sys.cPluginWorkflows, Expected: 'PluginWorkflows'},
  {Name: 'cStandardDeviation', Actual: sys.cStandardDeviation, Expected: 'StandardDeviation'},
  {Name: 'cHexValue', Actual: sys.cHexValue, Expected: 'HexValue'},
  {Name: 'cexportconst', Actual: sys.cexportconst, Expected: 'export const'},
  {Name: 'csmuggleSomething', Actual: sys.csmuggleSomething, Expected: 'smuggle something'},
  {Name: 'cDataStorage', Actual: sys.cDataStorage, Expected: 'DataStorage'},
  {Name: 'cSource1', Actual: sys.cSource1, Expected: 'Source1'},
  {Name: 'cSource2', Actual: sys.cSource2, Expected: 'Source2'},
  {Name: 'cbigInteger', Actual: sys.cbigInteger, Expected: 'bigInteger'},
  {Name: 'cnumberOfCharactersToGenerate', Actual: sys.cnumberOfCharactersToGenerate, Expected: 'numberOfCharactersToGenerate'},
  {Name: 'cgenerateSpecialCharacters', Actual: sys.cgenerateSpecialCharacters, Expected: 'generateSpecialCharacters'},
  {Name: 'callowableSpecialCharacters', Actual: sys.callowableSpecialCharacters, Expected: 'allowableSpecialCharacters'},
  {Name: 'cspecifiedSuffixAndDomain', Actual: sys.cspecifiedSuffixAndDomain, Expected: 'specifiedSuffixAndDomain'},
  {Name: 'cfailureMode', Actual: sys.cfailureMode, Expected: 'failureMode'},
  {Name: 'cWithoutThe', Actual: sys.cWithoutThe, Expected: 'Without the'},
  {Name: 'cwasCompleted', Actual: sys.cwasCompleted, Expected: 'was completed'},
  {Name: 'cGenerateA', Actual: sys.cGenerateA, Expected: 'Generate a'},
  {Name: 'cprogramLoop', Actual: sys.cprogramLoop, Expected: 'program loop'},
  {Name: 'candPrefix', Actual: sys.candPrefix, Expected: 'and prefix'},
  {Name: 'candSuffix', Actual: sys.candSuffix, Expected: 'and suffix'},
  {Name: 'cdomainSpaceName', Actual: sys.cdomainSpaceName, Expected: 'domain name'},
  {Name: 'candSpaceDomainSpaceName', Actual: sys.candSpaceDomainSpaceName, Expected: 'and domain name'},
  {Name: 'ccurrentMasterStringArrayElement', Actual: sys.ccurrentMasterStringArrayElement, Expected: 'currentMasterStringArrayElement'},
  {Name: 'cLehmerCodeArray', Actual: sys.cLehmerCodeArray, Expected: 'LehmerCodeArray'},
  {Name: 'creturnData', Actual: sys.creturnData, Expected: 'returnData'},
  {Name: 'cCamelCase', Actual: sys.cCamelCase, Expected: 'CamelCase'},

  // Logging Styles Constants
  {Name: 'cModuleFontStyle', Actual: sys.cModuleFontStyle, Expected: 'ModuleFontStyle'},
  {Name: 'cFunctionFontStyle', Actual: sys.cFunctionFontStyle, Expected: 'FunctionFontStyle'},
  {Name: 'cMessageFontStyle', Actual: sys.cMessageFontStyle, Expected: 'MessageFontStyle'},
  {Name: 'cDataFontStyle', Actual: sys.cDataFontStyle, Expected: 'DataFontStyle'},
  {Name: 'cModuleFontColor', Actual: sys.cModuleFontColor, Expected: 'ModuleFontColor'},
  {Name: 'cFunctionFontColor', Actual: sys.cFunctionFontColor, Expected: 'FunctionFontColor'},
  {Name: 'cMessageFontColor', Actual: sys.cMessageFontColor, Expected: 'MessageFontColor'},
  {Name: 'cDataFontColor', Actual: sys.cDataFontColor, Expected: 'DataFontColor'},
  {Name: 'cModuleFontBackgroundColor', Actual: sys.cModuleFontBackgroundColor, Expected: 'ModuleFontBackgroundColor'},
  {Name: 'cFunctionFontBackgroundColor', Actual: sys.cFunctionFontBackgroundColor, Expected: 'FunctionFontBackgroundColor'},
  {Name: 'cMessageFontBackgroundColor', Actual: sys.cMessageFontBackgroundColor, Expected: 'MessageFontBackgroundColor'},
  {Name: 'cDataFontBackgroundColor', Actual: sys.cDataFontBackgroundColor, Expected: 'DataFontBackgroundColor'},

  // File Types
  {Name: 'cCatia', Actual: sys.cCatia, Expected: 'Catia'},
  {Name: 'cDocument', Actual: sys.cDocument, Expected: 'Document'},
  {Name: 'cDocuments', Actual: sys.cDocuments, Expected: 'Documents'},
  {Name: 'cDraft', Actual: sys.cDraft, Expected: 'Draft'},
  {Name: 'cDWG', Actual: sys.cDWG, Expected: 'DWG'},
  {Name: 'cHoops', Actual: sys.cHoops, Expected: 'Hoops'},
  {Name: 'cHOOPS', Actual: sys.cHOOPS, Expected: 'HOOPS'},
  {Name: 'cImage', Actual: sys.cImage, Expected: 'Image'},
  {Name: 'cImages', Actual: sys.cImages, Expected: 'Images'},
  {Name: 'cInventor', Actual: sys.cInventor, Expected: 'Inventor'},
  {Name: 'cNeutral', Actual: sys.cNeutral, Expected: 'Neutral'},
  {Name: 'cNX', Actual: sys.cNX, Expected: 'NX'},
  {Name: 'cParasolid', Actual: sys.cParasolid, Expected: 'Parasolid'},
  {Name: 'cProE', Actual: sys.cProE, Expected: 'ProE'},
  {Name: 'cRhino', Actual: sys.cRhino, Expected: 'Rhino'},
  {Name: 'cSolidEdge', Actual: sys.cSolidEdge, Expected: 'SolidEdge'},
  {Name: 'cSolidWorks', Actual: sys.cSolidWorks, Expected: 'SolidWorks'},
  {Name: 'cvrml', Actual: sys.cvrml, Expected: 'vrml'},
  {Name: 'cVrml', Actual: sys.cVrml, Expected: 'Vrml'},
  {Name: 'cVRML', Actual: sys.cVRML, Expected: 'VRML'},

  // UI Element Types
  {Name: 'cButton', Actual: sys.cButton, Expected: 'Button'},

  // Environment Variables
  {Name: 'cQA', Actual: sys.cQA, Expected: 'QA'},
  {Name: 'cdev', Actual: sys.cdev, Expected: 'dev'},
  {Name: 'cDEV', Actual: sys.cDEV, Expected: 'DEV'},
  {Name: 'cProd', Actual: sys.cProd, Expected: 'Prod'},
  {Name: 'cPROD', Actual: sys.cPROD, Expected: 'PROD'},
  {Name: 'cPre', Actual: sys.cPre, Expected: 'Pre'},
  {Name: 'cPRE', Actual: sys.cPRE, Expected: 'PRE'},
  {Name: 'cPreProd', Actual: sys.cPreProd, Expected: 'PreProd'},
  {Name: 'cPREPROD', Actual: sys.cPREPROD, Expected: 'PREPROD'},

  // Key Combinations
  {Name: 'cctrl_a', Actual: sys.cctrl_a, Expected: 'ctrl+a'},
  {Name: 'cctrl_b', Actual: sys.cctrl_b, Expected: 'ctrl+b'},
  {Name: 'cctrl_c', Actual: sys.cctrl_c, Expected: 'ctrl+c'},
  {Name: 'cctrl_d', Actual: sys.cctrl_d, Expected: 'ctrl+d'},
  {Name: 'cctrl_e', Actual: sys.cctrl_e, Expected: 'ctrl+e'},
  {Name: 'cctrl_f', Actual: sys.cctrl_f, Expected: 'ctrl+f'},
  {Name: 'cctrl_g', Actual: sys.cctrl_g, Expected: 'ctrl+g'},
  {Name: 'cctrl_h', Actual: sys.cctrl_h, Expected: 'ctrl+h'},
  {Name: 'cctrl_i', Actual: sys.cctrl_i, Expected: 'ctrl+i'},
  {Name: 'cctrl_j', Actual: sys.cctrl_j, Expected: 'ctrl+j'},
  {Name: 'cctrl_k', Actual: sys.cctrl_k, Expected: 'ctrl+k'},
  {Name: 'cctrl_l', Actual: sys.cctrl_l, Expected: 'ctrl+l'},
  {Name: 'cctrl_m', Actual: sys.cctrl_m, Expected: 'ctrl+m'},
  {Name: 'cctrl_n', Actual: sys.cctrl_n, Expected: 'ctrl+n'},
  {Name: 'cctrl_o', Actual: sys.cctrl_o, Expected: 'ctrl+o'},
  {Name: 'cctrl_p', Actual: sys.cctrl_p, Expected: 'ctrl+p'},
  {Name: 'cctrl_q', Actual: sys.cctrl_q, Expected: 'ctrl+q'},
  {Name: 'cctrl_r', Actual: sys.cctrl_r, Expected: 'ctrl+r'},
  {Name: 'cctrl_s', Actual: sys.cctrl_s, Expected: 'ctrl+s'},
  {Name: 'cctrl_t', Actual: sys.cctrl_t, Expected: 'ctrl+t'},
  {Name: 'cctrl_u', Actual: sys.cctrl_u, Expected: 'ctrl+u'},
  {Name: 'cctrl_v', Actual: sys.cctrl_v, Expected: 'ctrl+v'},
  {Name: 'cctrl_w', Actual: sys.cctrl_w, Expected: 'ctrl+w'},
  {Name: 'cctrl_x', Actual: sys.cctrl_x, Expected: 'ctrl+x'},
  {Name: 'cctrl_y', Actual: sys.cctrl_y, Expected: 'ctrl+y'},
  {Name: 'cctrl_z', Actual: sys.cctrl_z, Expected: 'ctrl+z'},

  // System Terms
  {Name: 'csystemConfigFileName', Actual: sys.csystemConfigFileName, Expected: 'framework.system.json'},
  {Name: 'capplicationConfigFileName', Actual: sys.capplicationConfigFileName, Expected: 'application.system.json'},
  {Name: 'cpluginConfigFileName', Actual: sys.cpluginConfigFileName, Expected: 'plugin.system.json'},
  {Name: 'cappConfigPath', Actual: sys.cappConfigPath, Expected: 'appConfigPath'},
  {Name: 'cframeworkConfigPath', Actual: sys.cframeworkConfigPath, Expected: 'frameworkConfigPath'},
  {Name: 'cpluginConfigPath', Actual: sys.cpluginConfigPath, Expected: 'pluginConfigPath'},
  {Name: 'cthemeConfigPath', Actual: sys.cthemeConfigPath, Expected: 'themeConfigPath'},
  {Name: 'cApplicationName', Actual: sys.cApplicationName, Expected: 'ApplicationName'},
  {Name: 'cApplicationRootPath', Actual: sys.cApplicationRootPath, Expected: 'ApplicationRootPath'},
  {Name: 'cApplicationCleanedRootPath', Actual: sys.cApplicationCleanedRootPath, Expected: 'ApplicationCleanedRootPath'},
  {Name: 'cConfigurationPath', Actual: sys.cConfigurationPath, Expected: 'ConfigurationPath'},
  {Name: 'cApplicationVersionNumber', Actual: sys.cApplicationVersionNumber, Expected: 'ApplicationVersionNumber'},
  {Name: 'cApplicationDescription', Actual: sys.cApplicationDescription, Expected: 'ApplicationDescription'},
  {Name: 'cDataPath', Actual: sys.cDataPath, Expected: 'DataPath'},
  {Name: 'cCtempPath', Actual: sys.cCtempPath, Expected: 'c:/temp/'},
  {Name: 'cPageDataPath', Actual: sys.cPageDataPath, Expected: 'PageDataPath'},
  {Name: 'cWorkflowDataPath', Actual: sys.cWorkflowDataPath, Expected: 'WorkflowDataPath'},
  {Name: 'cKeywordsDataPath', Actual: sys.cKeywordsDataPath, Expected: 'KeywordsDataPath'},
  {Name: 'cLocatorsDataPath', Actual: sys.cLocatorsDataPath, Expected: 'LocatorsDataPath'},
  {Name: 'cClientConstantsPath', Actual: sys.cClientConstantsPath, Expected: 'ClientConstantsPath'},
  {Name: 'cSystemConstantsPath', Actual: sys.cSystemConstantsPath, Expected: 'SystemConstantsPath'},
  {Name: 'cSystemConstantsPathActual', Actual: sys.cSystemConstantsPathActual, Expected: 'src/constants/'},
  {Name: 'cclientBusinessRules', Actual: sys.cclientBusinessRules, Expected: 'clientBusinessRules'},
  {Name: 'cclientCommands', Actual: sys.cclientCommands, Expected: 'clientCommands'},
  {Name: 'cpluginBusinessRules', Actual: sys.cpluginBusinessRules, Expected: 'pluginBusinessRules'},
  {Name: 'cpluginCommands', Actual: sys.cpluginCommands, Expected: 'pluginCommands'},
  {Name: 'cclientRulesLibrary', Actual: sys.cclientRulesLibrary, Expected: 'clientRulesLibrary'},
  {Name: 'cCommandQueue', Actual: sys.cCommandQueue, Expected: 'CommandQueue'},
  {Name: 'cConstantsValidation', Actual: sys.cConstantsValidation, Expected: 'ConstantsValidation'},
  {Name: 'cConstantsValidationData', Actual: sys.cConstantsValidationData, Expected: 'ConstantsValidationData'},
  {Name: 'cpluginConstantsValidationData', Actual: sys.cpluginConstantsValidationData, Expected: 'pluginConstantsValidationData'},
  {Name: 'cConstantsShortNames', Actual: sys.cConstantsShortNames, Expected: 'ConstantsShortNames'},
  {Name: 'cConstantsFileNames', Actual: sys.cConstantsFileNames, Expected: 'ConstantsFileNames'},
  {Name: 'cConstantsPrefix', Actual: sys.cConstantsPrefix, Expected: 'ConstantsPrefix'},
  {Name: 'cConstantsFilePaths', Actual: sys.cConstantsFilePaths, Expected: 'ConstantsFilePaths'},
  {Name: 'cConstantsPhase1ValidationMessages', Actual: sys.cConstantsPhase1ValidationMessages, Expected: 'ConstantsPhase1ValidationMessages'},
  {Name: 'cConstantsPhase2ValidationMessages', Actual: sys.cConstantsPhase2ValidationMessages, Expected: 'ConstantsPhase2ValidationMessages'},
  {Name: 'cBasicConstantsValidation', Actual: sys.cBasicConstantsValidation, Expected: 'BasicConstantsValidation'},
  {Name: 'cBusinessConstantsValidation', Actual: sys.cBusinessConstantsValidation, Expected: 'BusinessConstantsValidation'},
  {Name: 'cColorConstantsValidation', Actual: sys.cColorConstantsValidation, Expected: 'ColorConstantsValidation'},
  {Name: 'cCommandConstantsValidation', Actual: sys.cCommandConstantsValidation, Expected: 'CommandConstantsValidation'},
  {Name: 'cConfigurationConstantsValidation', Actual: sys.cConfigurationConstantsValidation, Expected: 'ConfigurationConstantsValidation'},
  {Name: 'cCountryConstantsValidation', Actual: sys.cCountryConstantsValidation, Expected: 'CountryConstantsValidation'},
  {Name: 'cElementConstantsValidation', Actual: sys.cElementConstantsValidation, Expected: 'ElementConstantsValidation'},
  {Name: 'cFunctionConstantsValidation', Actual: sys.cFunctionConstantsValidation, Expected: 'FunctionConstantsValidation'},
  {Name: 'cGenericConstantsValidation', Actual: sys.cGenericConstantsValidation, Expected: 'GenericConstantsValidation'},
  {Name: 'cIsotopeConstantsValidation', Actual: sys.cIsotopeConstantsValidation, Expected: 'IsotopeConstantsValidation'},
  {Name: 'cKnotConstantsValidation', Actual: sys.cKnotConstantsValidation, Expected: 'KnotConstantsValidation'},
  {Name: 'cLanguageConstantsValidation', Actual: sys.cLanguageConstantsValidation, Expected: 'LanguageConstantsValidation'},
  {Name: 'cMessageConstantsValidation', Actual: sys.cMessageConstantsValidation, Expected: 'MessageConstantsValidation'},
  {Name: 'cNumericConstantsValidation', Actual: sys.cNumericConstantsValidation, Expected: 'NumericConstantsValidation'},
  {Name: 'cPhonicConstantsValidation', Actual: sys.cPhonicConstantsValidation, Expected: 'PhonicConstantsValidation'},
  {Name: 'cShapeConstantsValidation', Actual: sys.cShapeConstantsValidation, Expected: 'ShapeConstantsValidation'},
  {Name: 'cSystemConstantsValidation', Actual: sys.cSystemConstantsValidation, Expected: 'SystemConstantsValidation'},
  {Name: 'cUnitConstantsValidation', Actual: sys.cUnitConstantsValidation, Expected: 'UnitConstantsValidation'},
  {Name: 'cWordConstantsValidation', Actual: sys.cWordConstantsValidation, Expected: 'WordConstantsValidation'},
  {Name: 'cpluginBusinessConstantsValidation', Actual: sys.cpluginBusinessConstantsValidation, Expected: 'pluginBusinessConstantsValidation'},
  {Name: 'cpluginCommandConstantsValidation', Actual: sys.cpluginCommandConstantsValidation, Expected: 'pluginCommandConstantsValidation'},
  {Name: 'cpluginConstantsValidation', Actual: sys.cpluginConstantsValidation, Expected: 'pluginConstantsValidation'},
  {Name: 'cpluginMessageConstantsValidation', Actual: sys.cpluginMessageConstantsValidation, Expected: 'pluginMessageConstantsValidation'},
  {Name: 'cpluginSystemConstantsValidation', Actual: sys.cpluginSystemConstantsValidation, Expected: 'pluginSystemConstantsValidation'},
  {Name: 'cBinaryRootPath', Actual: sys.cBinaryRootPath, Expected: 'BinaryRootPath'},
  {Name: 'cBinaryReleasePath', Actual: sys.cBinaryReleasePath, Expected: 'BinaryReleasePath'},
  {Name: 'cdevtty', Actual: sys.cdevtty, Expected: '/dev/tty'},
  {Name: 'cpackageDotJson', Actual: sys.cpackageDotJson, Expected: 'package.json'},
  {Name: 'cpluginsDotJson', Actual: sys.cpluginsDotJson, Expected: 'plugins.json'},
  {Name: 'cDoubleDotForwardSlash', Actual: sys.cDoubleDotForwardSlash, Expected: '../'},
  {Name: 'cpluginsLoaded', Actual: sys.cpluginsLoaded, Expected: 'pluginsLoaded'},
  {Name: 'cUserEnteredCommandLog', Actual: sys.cUserEnteredCommandLog, Expected: 'UserEnteredCommandLog'},
  {Name: 'cSystemCommandLog', Actual: sys.cSystemCommandLog, Expected: 'SystemCommandLog'},
  {Name: 'ccommandPrompt', Actual: sys.ccommandPrompt, Expected: 'commandPrompt'},

  // Constants Filenames
  {Name: 'cbasic_constants_js', Actual: sys.cbasic_constants_js, Expected: 'basic.constants.js'},
  {Name: 'cbusiness_constants_js', Actual: sys.cbusiness_constants_js, Expected: 'business.constants.js'},
  {Name: 'ccolor_constants_js', Actual: sys.ccolor_constants_js, Expected: 'color.constants.js'},
  {Name: 'ccommand_constants_js', Actual: sys.ccommand_constants_js, Expected: 'command.constants.js'},
  {Name: 'cconfiguration_constants_js', Actual: sys.cconfiguration_constants_js, Expected: 'configuration.constants.js'},
  {Name: 'cconstant_constants_js', Actual: sys.cconstant_constants_js, Expected: 'constant.constants.js'},
  {Name: 'ccountry_constants_js', Actual: sys.ccountry_constants_js, Expected: 'country.constants.js'},
  {Name: 'celement_constants_js', Actual: sys.celement_constants_js, Expected: 'element.constants.js'},
  {Name: 'cfunction_constants_js', Actual: sys.cfunction_constants_js, Expected: 'function.constants.js'},
  {Name: 'cgeneric_constants_js', Actual: sys.cgeneric_constants_js, Expected: 'generic.constants.js'},
  {Name: 'cisotope_constants_js', Actual: sys.cisotope_constants_js, Expected: 'isotope.constants.js'},
  {Name: 'cknot_constants_js', Actual: sys.cknot_constants_js, Expected: 'knot.constants.js'},
  {Name: 'clanguage_constants_js', Actual: sys.clanguage_constants_js, Expected: 'language.constants.js'},
  {Name: 'cmessage_constants_js', Actual: sys.cmessage_constants_js, Expected: 'message.constants.js'},
  {Name: 'cnumeric_constants_js', Actual: sys.cnumeric_constants_js, Expected: 'numeric.constants.js'},
  {Name: 'cphonic_constants_js', Actual: sys.cphonic_constants_js, Expected: 'phonic.constants.js'},
  {Name: 'cshape_constants_js', Actual: sys.cshape_constants_js, Expected: 'shape.constants.js'},
  {Name: 'csystem_constants_js', Actual: sys.csystem_constants_js, Expected: 'system.constants.js'},
  {Name: 'cunit_constants_js', Actual: sys.cunit_constants_js, Expected: 'unit.constants.js'},
  {Name: 'cword_constants_js', Actual: sys.cword_constants_js, Expected: 'word.constants.js'},

  // System Paths
  {Name: 'cActualFrameworkName', Actual: sys.cActualFrameworkName, Expected: 'haystacks'},
  {Name: 'cFrameworkName', Actual: sys.cFrameworkName, Expected: 'FrameworkName'},
  {Name: 'cFrameworkVersionNumber', Actual: sys.cFrameworkVersionNumber, Expected: 'FrameworkVersionNumber'},
  {Name: 'cFrameworkDescription', Actual: sys.cFrameworkDescription, Expected: 'FrameworkDescription'},
  {Name: 'cmetaDatadotJson', Actual: sys.cmetaDatadotJson, Expected: 'metaData.json'},
  {Name: 'cFrameworkDevelopRootPath', Actual: sys.cFrameworkDevelopRootPath, Expected: 'src//'},
  {Name: 'cFrameworkProductionRootPath', Actual: sys.cFrameworkProductionRootPath, Expected: 'bin//'},
  {Name: 'cframeworkConstantsPath', Actual: sys.cframeworkConstantsPath, Expected: 'constants//'},
  {Name: 'cframeworkResourcesPath', Actual: sys.cframeworkResourcesPath, Expected: 'resources//'},
  {Name: 'cframeworkResourcesConfigurationPath', Actual: sys.cframeworkResourcesConfigurationPath, Expected: 'resources//configuration//'},
  {Name: 'cframeworkThemesPath', Actual: sys.cframeworkThemesPath, Expected: 'resources//themes//'},
  {Name: 'cframeworkResourcesCommandAliasesPath', Actual: sys.cframeworkResourcesCommandAliasesPath, Expected: 'resources//commands//'},
  {Name: 'cframeworkResourcesWorkflowsPath', Actual: sys.cframeworkResourcesWorkflowsPath, Expected: 'resources//workflows//'}
];
