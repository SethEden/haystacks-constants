/**
 * @file command.constants.validation.js
 * @module command.constants.validation
 * @description Contains all validations for system command constants.
 * @requires module:command.constants
 * @date 2022/03/20
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as cmd from '../constants/command.constants.js';

/**
 * @function commandConstantsValidation
 * @description Initializes the command constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @DATE 2022/03/20
 */
export const commandConstantsValidation = [
  // ***********************************************
  // Advanced commands in order
  // ***********************************************
  {Name: 'ccommandSequencer', Actual: cmd.ccommandSequencer, Expected: 'commandSequencer'},
  {Name: 'cbusinessRule', Actual: cmd.cbusinessRule, Expected: 'businessRule'},
  {Name: 'ccommandGenerator', Actual: cmd.ccommandGenerator, Expected: 'commandGenerator'},
  {Name: 'ccommandAliasGenerator', Actual: cmd.ccommandAliasGenerator, Expected: 'commandAliasGenerator'},

  // ***********************************************
  // Auxiliary commands in order
  // ***********************************************
  {Name: 'cconvertColors', Actual: cmd.cconvertColors, Expected: 'convertColors'},

  // ***********************************************
  // Configuration commands in order
  // ***********************************************
  {Name: 'csaveConfiguration', Actual: cmd.csaveConfiguration, Expected: 'saveConfiguration'},
  {Name: 'cchangeConfigurationSetting', Actual: cmd.cchangeConfigurationSetting, Expected: 'changeConfigurationSetting'},
  {Name: 'clistConfigurationThemes', Actual: cmd.clistConfigurationThemes, Expected: 'listConfigurationThemes'},
  {Name: 'cchangeDebugConfigurationTheme', Actual: cmd.cchangeDebugConfigurationTheme, Expected: 'changeDebugConfigurationTheme'},

  // ***********************************************
  // Constant commands in order
  // ***********************************************
  {Name: 'cconstantsGenerator', Actual: cmd.cconstantsGenerator, Expected: 'constantsGenerator'},
  {Name: 'cconstantsGeneratorList', Actual: cmd.cconstantsGeneratorList, Expected: 'constantsGeneratorList'},
  {Name: 'cconstantsPatternRecognizer', Actual: cmd.cconstantsPatternRecognizer, Expected: 'constantsPatternRecognizer'},
  {Name: 'cevaluateConstant', Actual: cmd.cevaluateConstant, Expected: 'evaluateConstant'},

  // ***********************************************
  // Data Directorate commands in order
  // ***********************************************
  {Name: 'cprintDataHive', Actual: cmd.cprintDataHive, Expected: 'printDataHive'},
  {Name: 'cprintDataHiveAttributes', Actual: cmd.cprintDataHiveAttributes, Expected: 'printDataHiveAttributes'},
  {Name: 'cclearDataStorage', Actual: cmd.cclearDataStorage, Expected: 'clearDataStorage'},
  {Name: 'cchangeSetting', Actual: cmd.cchangeSetting, Expected: 'changeSetting'},

  // ***********************************************
  // Integration Test commands in order
  // ***********************************************
  {Name: 'cvalidateConstants', Actual: cmd.cvalidateConstants, Expected: 'validateConstants'},
  {Name: 'cvalidateCommandAliases', Actual: cmd.cvalidateCommandAliases, Expected: 'validateCommandAliases'},
  {Name: 'cvalidateWorkflows', Actual: cmd.cvalidateWorkflows, Expected: 'validateWorkflows'},

  // ***********************************************
  // Performance Metric commands in order
  // ***********************************************
  {Name: 'cbusinessRulesMetrics', Actual: cmd.cbusinessRulesMetrics, Expected: 'businessRulesMetrics'},
  {Name: 'ccommandMetrics', Actual: cmd.ccommandMetrics, Expected: 'commandMetrics'},

  // ***********************************************
  // System commands in order
  // ***********************************************
  {Name: 'cechoCommand', Actual: cmd.cechoCommand, Expected: 'echoCommand'},
  {Name: 'cEchoCommand', Actual: cmd.cEchoCommand, Expected: 'EchoCommand'},
  {Name: 'cclearScreen', Actual: cmd.cclearScreen, Expected: 'clearScreen'},
  {Name: 'cworkflowHelp', Actual: cmd.cworkflowHelp, Expected: 'workflowHelp'},

  // ********************************
  // System defined workflows
  // ********************************
  {Name: 'cStartupWorkflow', Actual: cmd.cStartupWorkflow, Expected: 'Workflow startup'},
  {Name: 'cFrameworkDetailsWorkflow', Actual: cmd.cFrameworkDetailsWorkflow, Expected: 'Workflow frameworkDetails'}
];
