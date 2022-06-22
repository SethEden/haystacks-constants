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
