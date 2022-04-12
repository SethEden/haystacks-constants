/**
 * @file main.js
 * @module main
 * @description Contains all public facing interfaces for the constants and constants validation.
 * @requires module:basic.constants
 * @requires module:business.constants
 * @requires module:configuration.constants
 * @requires module:country.constants
 * @requires module:function.constants
 * @requires module:generic.constants
 * @requires module:language.constants
 * @requires module:message.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:system.constants
 * @requires module:unit.constants
 * @requires module:word.constants
 * @requires module:basic.constants.validation
 * @requires module:business.constants.validation
 * @requires module:configuration.constants.validation
 * @requires module:country.constants.validation
 * @requires module:function.constants.validation
 * @requires module:generic.constants.validation
 * @requires module:language.constants.validation
 * @requires module:message.constants.validation
 * @requires module:numeric.constants.validation
 * @requires module:phonic.constants.validation
 * @requires module:system.constants.validation
 * @requires module:unit.constants.validation
 * @requires module:word.constants.validation
 * @author Seth Hollingsead
 * @date 2022/04/11
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './constants/basic.constants.js';
import * as biz from './constants/business.constants.js';
import * as cmd from './constants/command.constants.js';
import * as cfg from './constants/configuration.constants.js';
import * as ctr from './constants/country.constants.js';
import * as fnc from './constants/function.constants.js';
import * as gen from './constants/generic.constants.js';
import * as lng from './constants/language.constants.js';
import * as msg from './constants/message.constants.js';
import * as num from './constants/numeric.constants.js';
import * as phn from './constants/phonic.constants.js';
import * as sys from './constants/system.constants.js';
import * as unt from './constants/unit.constants.js';
import * as wrd from './constants/word.constants.js';
import * as bas_cv from './constantsValidation/basic.constants.validation.js';
import * as biz_cv from './constantsValidation/business.constants.validation.js';
import * as cmd_cv from './constantsValidation/command.constants.validation.js';
import * as cfg_cv from './constantsValidation/configuration.constants.validation.js';
import * as ctr_cv from './constantsValidation/country.constants.validation.js';
import * as fnc_cv from './constantsValidation/function.constants.validation.js';
import * as gen_cv from './constantsValidation/generic.constants.validation.js';
import * as lng_cv from './constantsValidation/language.constants.validation.js';
import * as msg_cv from './constantsValidation/message.constants.validation.js';
import * as num_cv from './constantsValidation/numeric.constants.validation.js';
import * as phn_cv from './constantsValidation/phonic.constants.validation.js';
import * as sys_cv from './constantsValidation/system.constants.validation.js';
import * as unt_cv from './constantsValidation/unit.constants.validation.js';
import * as wrd_cv from './constantsValidation/word.constants.validation.js';

export default {
  [gen.cbas]: bas,
  [gen.cbiz]: biz,
  [gen.ccmd]: cmd,
  [gen.ccfg]: cfg,
  [gen.cctr]: ctr,
  [gen.cfnc]: fnc,
  [gen.cgen]: gen,
  [gen.clng]: lng,
  [gen.cmsg]: msg,
  [gen.cnum]: num,
  [gen.cphn]: phn,
  [gen.csys]: sys,
  [gen.cunt]: unt,
  [gen.cwrd]: wrd,
  [gen.bas + bas.cUnderscore + bas.ccv]: bas_cv,
  [gen.biz + bas.cUnderscore + bas.ccv]: biz_cv,
  [gen.cmd + bas.cUnderscore + bas.ccv]: cmd_cv,
  [gen.cfg + bas.cUnderscore + bas.ccv]: cfg_cv,
  [gen.ctr + bas.cUnderscore + bas.ccv]: ctr_cv,
  [gen.fnc + bas.cUnderscore + bas.ccv]: fnc_cv,
  [gen.gen + bas.cUnderscore + bas.ccv]: gen_cv,
  [gen.lng + bas.cUnderscore + bas.ccv]: lng_cv,
  [gen.msg + bas.cUnderscore + bas.ccv]: msg_cv,
  [gen.num + bas.cUnderscore + bas.ccv]: num_cv,
  [gen.phn + bas.cUnderscore + bas.ccv]: phn_cv,
  [gen.sys + bas.cUnderscore + bas.ccv]: sys_cv,
  [gen.unt + bas.cUnderscore + bas.ccv]: unt_cv,
  [gen.wrd + bas.cUnderscore + bas.ccv]: wrd_cv
};
