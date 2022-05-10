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
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/11
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './constants/basic.constants.js';
import * as biz from './constants/business.constants.js';
import * as clr from './constants/color.constants.js';
import * as cmd from './constants/command.constants.js';
import * as cfg from './constants/configuration.constants.js';
import * as ctr from './constants/country.constants.js';
import * as elm from './constants/element.constants.js';
import * as fnc from './constants/function.constants.js';
import * as gen from './constants/generic.constants.js';
import * as iso from './constants/isotope.constants.js';
import * as knt from './constants/knot.constants.js';
import * as lng from './constants/language.constants.js';
import * as msg from './constants/message.constants.js';
import * as num from './constants/numeric.constants.js';
import * as phn from './constants/phonic.constants.js';
import * as sys from './constants/system.constants.js';
import * as unt from './constants/unit.constants.js';
import * as wrd from './constants/word.constants.js';
import * as bas_cv from './constantsValidation/basic.constants.validation.js';
import * as biz_cv from './constantsValidation/business.constants.validation.js';
import * as clr_cv from './constantsValidation/color.constants.validation.js';
import * as cmd_cv from './constantsValidation/command.constants.validation.js';
import * as cfg_cv from './constantsValidation/configuration.constants.validation.js';
import * as ctr_cv from './constantsValidation/country.constants.validation.js';
import * as elm_cv from './constantsValidation/element.constants.validation.js';
import * as fnc_cv from './constantsValidation/function.constants.validation.js';
import * as gen_cv from './constantsValidation/generic.constants.validation.js';
import * as iso_cv from './constantsValidation/isotope.constants.validation.js';
import * as knt_cv from './constantsValidation/knot.constants.validation.js';
import * as lng_cv from './constantsValidation/language.constants.validation.js';
import * as msg_cv from './constantsValidation/message.constants.validation.js';
import * as num_cv from './constantsValidation/numeric.constants.validation.js';
import * as phn_cv from './constantsValidation/phonic.constants.validation.js';
import * as sys_cv from './constantsValidation/system.constants.validation.js';
import * as unt_cv from './constantsValidation/unit.constants.validation.js';
import * as wrd_cv from './constantsValidation/word.constants.validation.js';

// External imports
import url from 'url';
import path from 'path';

const constantsPath = url.fileURLToPath(path.dirname(import.meta.url)) + bas.cForwardSlash + wrd.cconstants + bas.cForwardSlash;

export default {
  constantsPath,
  bas,
  biz,
  clr,
  cmd,
  cfg,
  ctr,
  elm,
  fnc,
  gen,
  iso,
  knt,
  lng,
  msg,
  num,
  phn,
  sys,
  unt,
  wrd,
  bas_cv,
  biz_cv,
  clr_cv,
  cmd_cv,
  cfg_cv,
  ctr_cv,
  elm_cv,
  fnc_cv,
  gen_cv,
  iso_cv,
  knt_cv,
  lng_cv,
  msg_cv,
  num_cv,
  phn_cv,
  sys_cv,
  unt_cv,
  wrd_cv
};
