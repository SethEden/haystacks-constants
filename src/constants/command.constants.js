/**
 * @file command.constants.js
 * @module command.constants
 * @description Contains many re-usable command constants
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2022/02/04
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as biz from './business.constants.js';
import * as wrd from './word.constants.js';

// ***********************************************
// Advanced commands in order
// ***********************************************
export const ccommandSequencer = wrd.ccommand + wrd.cSequencer; // commandSequencer
export const cbusinessRule = wrd.cbusiness + wrd.cRule; // businessRule
export const ccommandGenerator = wrd.ccommand + wrd.cGenerator; // commandGenerator
export const ccommandAliasGenerator = wrd.ccommand + wrd.cAlias + wrd.cGenerator; // commandAliasGenerator

// ***********************************************
// Auxiliary commands in order
// ***********************************************
export const cconvertColors = wrd.cconvert + wrd.cColors; // convertColors

// ***********************************************
// Configuration commands in order
// ***********************************************
export const csaveConfiguration = wrd.csave + wrd.cConfiguration; // saveConfiguration
export const cchangeConfigurationSetting = wrd.cchange + wrd.cConfiguration + wrd.cSetting; // changeConfigurationSetting
export const clistConfigurationThemes = wrd.clist + wrd.cConfiguration + wrd.cThemes; // listConfigurationThemes
export const cchangeDebugConfigurationTheme = wrd.cchange + wrd.cDebug + wrd.cConfiguration + wrd.cTheme; // changeDebugConfigurationTheme

// ***********************************************
// Constant commands in order
// ***********************************************
export const cconstantsGenerator = wrd.cconstants + wrd.cGenerator; // constantsGenerator
export const cconstantsGeneratorList = cconstantsGenerator + wrd.cList; // constantsGeneratorList
export const cconstantsPatternRecognizer = wrd.cconstants + wrd.cPattern + wrd.cRecognizer; // constantsPatternRecognizer
export const cevaluateConstant = wrd.cevaluate + wrd.cConstant; // evaluateConstant

// ***********************************************
// Data Directorate commands in order
// ***********************************************
export const cprintDataHive = wrd.cprint + wrd.cData + wrd.cHive; // printDataHive
export const cprintDataHiveAttributes = cprintDataHive + wrd.cAttributes; // printDataHiveAttributes
export const cclearDataStorage = wrd.cclear + wrd.cData + wrd.cStorage; // clearDataStorage
export const cchangeSetting = wrd.cchange + wrd.cSetting; // changeSetting

// ***********************************************
// Integration Test commands in order
// ***********************************************
export const cvalidateConstants = wrd.cvalidate + wrd.cConstants; // validateConstants
export const cvalidateCommandAliases = wrd.cvalidate + wrd.cCommand + wrd.cAliases; // validateCommandAliases
export const cvalidateWorkflows = wrd.cvalidate + wrd.cWorkflows; // validateWorkflows

// ***********************************************
// Performance Metric commands in order
// ***********************************************
export const cbusinessRulesMetrics = wrd.cbusiness + wrd.cRules + wrd.cMetrics; // businessRulesMetrics
export const ccommandMetrics = wrd.ccommand + wrd.cMetrics; // commandMetrics

// ***********************************************
// Plugin commands in order
// ***********************************************
export const clistAllLoadedPlugins = wrd.clist + wrd.cAll + wrd.cLoaded + wrd.cPlugins; // listAllLoadedPlugins
export const clistAllPluginsInRegistry = wrd.clist + wrd.cAll + wrd.cPlugins + wrd.cIn + wrd.cRegistry; // listAllPluginsInRegistry
export const clistAllPluginsInRegistryPath = wrd.clist + wrd.cAll + wrd.cPlugins + wrd.cIn + wrd.cRegistry + wrd.cPath; // listAllPluginsInRegistryPath
export const ccountPluginsInRegistry = wrd.ccount + wrd.cPlugins + wrd.cIn + wrd.cRegistry; // countPluginsInRegistry
export const ccountPluginsInRegistryPath = wrd.ccount + wrd.cPlugins + wrd.cIn + wrd.cRegistry + wrd.cPath; // countPluginsInRegistryPath
export const cregisterPlugin = wrd.cregister + wrd.cPlugin; // registerPlugin
export const cunregisterPlugin = wrd.cunregister + wrd.cPlugin; // unregisterPlugin
export const cunregisterPlugins = wrd.cunregister + wrd.cPlugins; // unregisterPlugins
export const csyncPluginRegistryWithPath = wrd.csync + wrd.cPlugin + wrd.cRegistry + wrd.cWith + wrd.cPath; // syncPluginRegistryWithPath
export const clistPluginsRegistryPath = wrd.clist + wrd.cPlugins + wrd.cRegistry + wrd.cPath; // listPluginsRegistryPath
export const cunregisterAllPlugins = wrd.cunregister + wrd.cAll + wrd.cPlugins; // unregisterAllPlugins
export const csavePluginRegistryToDisk = wrd.csave + wrd.cPlugin + wrd.cRegistry + wrd.cTo + wrd.cDisk; // savePluginRegistryToDisk
export const cloadPlugin = wrd.cload + wrd.cPlugin; // loadPlugin
export const cloadPlugins = wrd.cload + wrd.cPlugins; // loadPlugins
export const cloadPluginsFromRegistry = wrd.cload + wrd.cPlugins + wrd.cFrom + wrd.cRegistry; // loadPluginsFromRegistry
export const cunloadPlugin = wrd.cunload + wrd.cPlugin; // unloadPlugin
export const cunloadPlugins = wrd.cunload + wrd.cPlugins; // unloadPlugins
export const cunloadAllPlugins = wrd.cunload + wrd.cAll + wrd.cPlugins; // unloadAllPlugins

// ***********************************************
// System commands in order
// ***********************************************
export const cechoCommand = biz.cecho + wrd.cCommand; // echoCommand
export const cEchoCommand = biz.cEcho + wrd.cCommand; // EchoCommand
export const cclearScreen = wrd.cclear + wrd.cScreen; // clearScreen
export const cworkflowHelp = wrd.cworkflow + wrd.cHelp; // workflowHelp

// ********************************
// System defined workflows
// ********************************
export const cStartupWorkflow = wrd.cWorkflow + bas.cSpace + wrd.cstartup; // Workflow startup
export const cFrameworkDetailsWorkflow = wrd.cWorkflow + bas.cSpace + wrd.cframework + wrd.cDetails; // Workflow frameworkDetails
