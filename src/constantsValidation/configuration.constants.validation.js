/**
 * @file configuration.constants.validation.js
 * @module configuration.constants.validation
 * @description Contains all validations for configuration constants.
 * @requires module:configuration.constants
 * @date 2022/03/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as cfg from '../constants/configuration.constants.js';

/**
 * @function configurationConstantsValidation
 * @description Initializes the configuration constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/20
 */
export const configurationConstantsValidation = [
  // Configuration Settings
  {Name: 'crootPath', Actual: cfg.crootPath, Expected: 'rootPath'},
  {Name: 'cRootPath', Actual: cfg.cRootPath, Expected: 'RootPath'},
  {Name: 'cappRootPath', Actual: cfg.cappRootPath, Expected: 'appRootPath'},
  {Name: 'cclientRootPath', Actual: cfg.cclientRootPath, Expected: 'clientRootPath'},
  {Name: 'cframeworkRootPath', Actual: cfg.cframeworkRootPath, Expected: 'frameworkRootPath'},
  {Name: 'cpluginRootPath', Actual: cfg.cpluginRootPath, Expected: 'pluginRootPath'},
  {Name: 'cappConfigResourcesPath', Actual: cfg.cappConfigResourcesPath, Expected: 'appConfigResourcesPath'},
  {Name: 'cframeworkResourcesPath', Actual: cfg.cframeworkResourcesPath, Expected: 'frameworkResourcesPath'},
  {Name: 'cpluginResourcesPath', Actual: cfg.cpluginResourcesPath, Expected: 'pluginResourcesPath'},
  {Name: 'cpluginReleaseResourcesPath', Actual: cfg.cpluginReleaseResourcesPath, Expected: 'pluginReleaseResourcesPath'},
  {Name: 'cframeworkConstantsPath', Actual: cfg.cframeworkConstantsPath, Expected: 'frameworkConstantsPath'},
  {Name: 'cclientConstantsPath', Actual: cfg.cclientConstantsPath, Expected: 'clientConstantsPath'},
  {Name: 'capplicationConstantsPath', Actual: cfg.capplicationConstantsPath, Expected: 'applicationConstantsPath'},
  {Name: 'cFrameworkContext', Actual: cfg.cFrameworkContext, Expected: 'FrameworkContext'},
  {Name: 'cframeworkContextObject', Actual: cfg.cframeworkContextObject, Expected: 'frameworkContextObject'},
  {Name: 'chaystacksContextObject', Actual: cfg.chaystacksContextObject, Expected: 'haystacksContextObject'},
  {Name: 'cclientMetaDataPath', Actual: cfg.cclientMetaDataPath, Expected: 'clientMetaDataPath'},
  {Name: 'cclientCommandAliasesPath', Actual: cfg.cclientCommandAliasesPath, Expected: 'clientCommandAliasesPath'},
  {Name: 'cclientRegisteredPlugins', Actual: cfg.cclientRegisteredPlugins, Expected: 'clientRegisteredPlugins'},
  {Name: 'cclientWorkflowsPath', Actual: cfg.cclientWorkflowsPath, Expected: 'clientWorkflowsPath'},
  {Name: 'cframeworkFullMetaDataPath', Actual: cfg.cframeworkFullMetaDataPath, Expected: 'frameworkFullMetaDataPath'},
  {Name: 'cpluginFullMetaDataPath', Actual: cfg.cpluginFullMetaDataPath, Expected: 'pluginFullMetaDataPath'},
  {Name: 'cappConfigPath', Actual: cfg.cappConfigPath, Expected: 'appConfigPath'},
  {Name: 'cpluginConfigPath', Actual: cfg.cpluginConfigPath, Expected: 'pluginConfigPath'},
  {Name: 'cframeworkConfigPath', Actual: cfg.cframeworkConfigPath, Expected: 'frameworkConfigPath'},
  {Name: 'cframeworkThemesPath', Actual: cfg.cframeworkThemesPath, Expected: 'frameworkThemesPath'},
  {Name: 'cclientThemesPath', Actual: cfg.cclientThemesPath, Expected: 'clientThemesPath'},
  {Name: 'cappConfigFiles', Actual: cfg.cappConfigFiles, Expected: 'appConfigFiles'},
  {Name: 'cframeworkConfigFiles', Actual: cfg.cframeworkConfigFiles, Expected: 'frameworkConfigFiles'},
  {Name: 'cthemeConfigFiles', Actual: cfg.cthemeConfigFiles, Expected: 'themeConfigFiles'},
  {Name: 'cpluginConfigFiles', Actual: cfg.cpluginConfigFiles, Expected: 'pluginConfigFiles'},
  {Name: 'cappConfigReferencePath', Actual: cfg.cappConfigReferencePath, Expected: 'appConfigReferencePath'},
  {Name: 'cpluginConfigReferencePath', Actual: cfg.cpluginConfigReferencePath, Expected: 'pluginConfigReferencePath'},
  {Name: 'cframeworkCommandAliasesPath', Actual: cfg.cframeworkCommandAliasesPath, Expected: 'frameworkCommandAliasesPath'},
  {Name: 'cpluginCommandAliasesPath', Actual: cfg.cpluginCommandAliasesPath, Expected: 'pluginCommandAliasesPath'},
  {Name: 'cframeworkWorkflowsPath', Actual: cfg.cframeworkWorkflowsPath, Expected: 'frameworkWorkflowsPath'},
  {Name: 'cpluginWorkflowsPath', Actual: cfg.cpluginWorkflowsPath, Expected: 'pluginWorkflowsPath'},
  {Name: 'cpluginThemesPath', Actual: cfg.cpluginThemesPath, Expected: 'pluginThemesPath'},
  {Name: 'cdebugSetting', Actual: cfg.cdebugSetting, Expected: 'debugSetting'},
  {Name: 'cdebugSettings', Actual: cfg.cdebugSettings, Expected: 'debugSettings'},
  {Name: 'cdebugFiles', Actual: cfg.cdebugFiles, Expected: 'debugFiles'},
  {Name: 'cdebugFunctions', Actual: cfg.cdebugFunctions, Expected: 'debugFunctions'},
  {Name: 'cfigletFont', Actual: cfg.cfigletFont, Expected: 'figletFont'},
  {Name: 'cincludeDateTimeStampInLogFiles', Actual: cfg.cincludeDateTimeStampInLogFiles, Expected: 'includeDateTimeStampInLogFiles'},
  {Name: 'cLogFilePathAndName', Actual: cfg.cLogFilePathAndName, Expected: 'LogFilePathAndName'},
  {Name: 'cDataLogFilePathAndName', Actual: cfg.cDataLogFilePathAndName, Expected: 'DataLogFilePathAndName'},
  {Name: 'cExecutionJournalFilePathAndName', Actual: cfg.cExecutionJournalFilePathAndName, Expected: 'ExecutionJournalFilePathAndName'},
  {Name: 'cResultsLogFilePathAndName', Actual: cfg.cResultsLogFilePathAndName, Expected: 'ResultsLogFilePathAndName'},
  {Name: 'cTestDataPath', Actual: cfg.cTestDataPath, Expected: 'TestDataPath'},
  {Name: 'cconsoleLogEnabled', Actual: cfg.cconsoleLogEnabled, Expected: 'consoleLogEnabled'},
  {Name: 'clogFileEnabled', Actual: cfg.clogFileEnabled, Expected: 'logFileEnabled'},
  {Name: 'cdateTimeStamp', Actual: cfg.cdateTimeStamp, Expected: 'dateTimeStamp'},
  {Name: 'cdateStamp', Actual: cfg.cdateStamp, Expected: 'dateStamp'},
  {Name: 'ctimeStamp', Actual: cfg.ctimeStamp, Expected: 'timeStamp'},
  {Name: 'clogFileName', Actual: cfg.clogFileName, Expected: 'logFileName'},
  {Name: 'cIncludeDateTimeStampInLogFiles', Actual: cfg.cIncludeDateTimeStampInLogFiles, Expected: 'IncludeDateTimeStampInLogFiles'},
  {Name: 'cenableColorizedConsoleLogs', Actual: cfg.cenableColorizedConsoleLogs, Expected: 'enableColorizedConsoleLogs'},
  {Name: 'cprimaryCommandDelimiter', Actual: cfg.cprimaryCommandDelimiter, Expected: 'primaryCommandDelimiter'},
  {Name: 'csecondaryCommandDelimiter', Actual: cfg.csecondaryCommandDelimiter, Expected: 'secondaryCommandDelimiter'},
  {Name: 'ctertiaryCommandDelimiter', Actual: cfg.ctertiaryCommandDelimiter, Expected: 'tertiaryCommandDelimiter'},
  {Name: 'cconfigurationInitialized', Actual: cfg.cconfigurationInitialized, Expected: 'configurationInitialized'},
  {Name: 'cenableBusinessRuleOutput', Actual: cfg.cenableBusinessRuleOutput, Expected: 'enableBusinessRuleOutput'},
  {Name: 'cenableBusinessRulePerformanceMetrics', Actual: cfg.cenableBusinessRulePerformanceMetrics, Expected: 'enableBusinessRulePerformanceMetrics'},
  {Name: 'cbusinessRulesNamesPerformanceTrackingStack', Actual: cfg.cbusinessRulesNamesPerformanceTrackingStack, Expected: 'businessRulesNamesPerformanceTrackingStack'},
  {Name: 'cbusinessRulesPerformanceTrackingStack', Actual: cfg.cbusinessRulesPerformanceTrackingStack, Expected: 'businessRulesPerformanceTrackingStack'},
  {Name: 'cbusinessRulesPerformanceAnalysisStack', Actual: cfg.cbusinessRulesPerformanceAnalysisStack, Expected: 'businessRulesPerformanceAnalysisStack'},
  {Name: 'cenableCommandPerformanceMetrics', Actual: cfg.cenableCommandPerformanceMetrics, Expected: 'enableCommandPerformanceMetrics'},
  {Name: 'ccommandNamesPerformanceTrackingStack', Actual: cfg.ccommandNamesPerformanceTrackingStack, Expected: 'commandNamesPerformanceTrackingStack'},
  {Name: 'ccommandsPerformanceTrackingStack', Actual: cfg.ccommandsPerformanceTrackingStack, Expected: 'commandsPerformanceTrackingStack'},
  {Name: 'ccommandsPerformanceAnalysisStack', Actual: cfg.ccommandsPerformanceAnalysisStack, Expected: 'commandsPerformanceAnalysisStack'},
  {Name: 'cclearBusinessRulesPerformanceDataAfterAnalysis', Actual: cfg.cclearBusinessRulesPerformanceDataAfterAnalysis, Expected: 'clearBusinessRulesPerformanceDataAfterAnalysis'},
  {Name: 'cclearCommandPerformanceDataAfterAnalysis', Actual: cfg.cclearCommandPerformanceDataAfterAnalysis, Expected: 'clearCommandPerformanceDataAfterAnalysis'},
  {Name: 'cprintDataHiveToLogFile', Actual: cfg.cprintDataHiveToLogFile, Expected: 'printDataHiveToLogFile'},
  {Name: 'cenablePluginLoader', Actual: cfg.cenablePluginLoader, Expected: 'enablePluginLoader'},
  {Name: 'cenableConstantsValidation', Actual: cfg.cenableConstantsValidation, Expected: 'enableConstantsValidation'},
  {Name: 'cframeworkConstantsValidationData', Actual: cfg.cframeworkConstantsValidationData, Expected: 'frameworkConstantsValidationData'},
  {Name: 'capplicationConstantsValidationData', Actual: cfg.capplicationConstantsValidationData, Expected: 'applicationConstantsValidationData'},
  {Name: 'cdisplayIndividualConstantsValidationPassMessages', Actual: cfg.cdisplayIndividualConstantsValidationPassMessages, Expected: 'displayIndividualConstantsValidationPassMessages'},
  {Name: 'cdisplayIndividualCosntantsValidationFailMessages', Actual: cfg.cdisplayIndividualCosntantsValidationFailMessages, Expected: 'displayIndividualConstantsValidationFailMessages'},
  {Name: 'cdisplaySummaryConstantsValidationPassMessages', Actual: cfg.cdisplaySummaryConstantsValidationPassMessages, Expected: 'displaySummaryConstantsValidationPassMessages'},
  {Name: 'cdisplaySummaryConstantsValidationFailMessages', Actual: cfg.cdisplaySummaryConstantsValidationFailMessages, Expected: 'displaySummaryConstantsValidationFailMessages'},
  {Name: 'cpassAllConstantsValidation', Actual: cfg.cpassAllConstantsValidation, Expected: 'passAllConstantsValidation'},
  {Name: 'cpassedAllCommandAliasesDuplicateChecks', Actual: cfg.cpassedAllCommandAliasesDuplicateChecks, Expected: 'passedAllCommandAliasesDuplicateChecks'},
  {Name: 'cpassedAllWorkflowDuplicateChecks', Actual: cfg.cpassedAllWorkflowDuplicateChecks, Expected: 'passedAllWorkflowDuplicateChecks'},
  {Name: 'creleaseCompleted', Actual: cfg.creleaseCompleted, Expected: 'releaseCompleted'},
  {Name: 'cpluginRegistry', Actual: cfg.cpluginRegistry, Expected: 'pluginRegistry'},
  {Name: 'cpluginRegistryPath', Actual: cfg.cpluginRegistryPath, Expected: 'pluginRegistryPath'},
  {Name: 'cpluginsRootPath', Actual: cfg.cpluginsRootPath, Expected: 'pluginsRootPath'},
  {Name: 'csynchronizePluginRegistryWithPluginFolder', Actual: cfg.csynchronizePluginRegistryWithPluginFolder, Expected: 'synchronizePluginRegistryWithPluginFolder'},
  {Name: 'clogUserEnteredCommands', Actual: cfg.clogUserEnteredCommands, Expected: 'logUserEnteredCommands'},
  {Name: 'clogAllCommands', Actual: cfg.clogAllCommands, Expected: 'logAllCommands'},
  {Name: 'cenableUserCommandsLogClearing', Actual: cfg.cenableUserCommandsLogClearing, Expected: 'enableUserCommandsLogClearing'},
  {Name: 'cenableAllCommandsLogClearing', Actual: cfg.cenableAllCommandsLogClearing, Expected: 'enableAllCommandsLogClearing'},
  {Name: 'csilentDeleteFailure', Actual: cfg.csilentDeleteFailure, Expected: 'silentDeleteFailure'},

  // Test Time Tracking
  {Name: 'cBeginDateTimeStamp', Actual: cfg.cBeginDateTimeStamp, Expected: 'BeginDateTimeStamp'},
  {Name: 'cEndDateTimeStamp', Actual: cfg.cEndDateTimeStamp, Expected: 'EndDateTimeStamp'},

  {Name: 'cBusinessRulePerformanceTrackingStack', Actual: cfg.cBusinessRulePerformanceTrackingStack, Expected: 'BusinessRulePerformanceTrackingStack'},
  {Name: 'cBusinessRuleNamesPerformanceTrackingStack', Actual: cfg.cBusinessRuleNamesPerformanceTrackingStack, Expected: 'BusinessRuleNamesPerformanceTrackingStack'}
];
