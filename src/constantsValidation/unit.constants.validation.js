/**
 * @file unit.constants.validation.js
 * @module unit.constants.validation
 * @description Contains all validations for unit & unit conversion constants.
 * Also included are validations for units of measurement, units of time, etc...
 * @requires module:unit.constants
 * @author Seth Hollingsead
 * @date 2022/03/21
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as unt from '../constants/unit.constants.js';

/**
 * @function unitConstantsValidation
 * @description Initializes the unit constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/21
 */
export const unitConstantsValidation = [
  // Units of Measure
  {Name: 'cfemto', Actual: unt.cfemto, Expected: 'femto'},
  {Name: 'cFemto', Actual: unt.cFemto, Expected: 'Femto'},
  {Name: 'cpico', Actual: unt.cpico, Expected: 'pico'},
  {Name: 'cPico', Actual: unt.cPico, Expected: 'Pico'},
  {Name: 'cnano', Actual: unt.cnano, Expected: 'nano'},
  {Name: 'cNano', Actual: unt.cNano, Expected: 'Nano'},
  {Name: 'cmicro', Actual: unt.cmicro, Expected: 'micro'},
  {Name: 'cMicro', Actual: unt.cMicro, Expected: 'Micro'},
  {Name: 'cmill', Actual: unt.cmill, Expected: 'mill'},
  {Name: 'cMill', Actual: unt.cMill, Expected: 'Mill'},
  {Name: 'cmilli', Actual: unt.cmilli, Expected: 'milli'},
  {Name: 'cMilli', Actual: unt.cMilli, Expected: 'Milli'},
  

  // Units of Time
  {Name: 'csecond', Actual: unt.csecond, Expected: 'second'},
  {Name: 'cSecond', Actual: unt.cSecond, Expected: 'Second'},
  {Name: 'cseconds', Actual: unt.cseconds, Expected: 'seconds'},
  {Name: 'cSeconds', Actual: unt.cSeconds, Expected: 'Seconds'},
  {Name: 'cminute', Actual: unt.cminute, Expected: 'minute'},
  {Name: 'cMinute', Actual: unt.cMinute, Expected: 'Minute'},
  {Name: 'cminutes', Actual: unt.cminutes, Expected: 'minutes'},
  {Name: 'cMinutes', Actual: unt.cMinutes, Expected: 'Minutes'},
  {Name: 'chour', Actual: unt.chour, Expected: 'hour'},
  {Name: 'cHour', Actual: unt.cHour, Expected: 'Hour'},
  {Name: 'chours', Actual: unt.chours, Expected: 'hours'},
  {Name: 'cHours', Actual: unt.cHours, Expected: 'Hours'},
  {Name: 'cday', Actual: unt.cday, Expected: 'day'},
  {Name: 'cDay', Actual: unt.cDay, Expected: 'Day'},
  {Name: 'cdays', Actual: unt.cdays, Expected: 'days'},
  {Name: 'cDays', Actual: unt.cDays, Expected: 'Days'},
  {Name: 'cweek', Actual: unt.cweek, Expected: 'week'},
  {Name: 'cWeek', Actual: unt.cWeek, Expected: 'Week'},
  {Name: 'cweeks', Actual: unt.cweeks, Expected: 'weeks'},
  {Name: 'cWeeks', Actual: unt.cWeeks, Expected: 'Weeks'},
  {Name: 'cmonth', Actual: unt.cmonth, Expected: 'month'},
  {Name: 'cMonth', Actual: unt.cMonth, Expected: 'Month'},
  {Name: 'cmonths', Actual: unt.cmonths, Expected: 'months'},
  {Name: 'cMonths', Actual: unt.cMonths, Expected: 'Months'},
  {Name: 'cyear', Actual: unt.cyear, Expected: 'year'},
  {Name: 'cYear', Actual: unt.cYear, Expected: 'Year'},
  {Name: 'cyears', Actual: unt.cyears, Expected: 'years'},
  {Name: 'cYears', Actual: unt.cYears, Expected: 'Years'},
  {Name: 'cdecade', Actual: unt.cdecade, Expected: 'decade'},
  {Name: 'cDecade', Actual: unt.cDecade, Expected: 'Decade'},
  {Name: 'cdecades', Actual: unt.cdecades, Expected: 'decades'},
  {Name: 'cDecades', Actual: unt.cDecades, Expected: 'Decades'},
  {Name: 'ccent', Actual: unt.ccent, Expected: 'cent'},
  {Name: 'cCent', Actual: unt.cCent, Expected: 'Cent'},
  {Name: 'ccentur', Actual: unt.ccentur, Expected: 'centur'},
  {Name: 'cCentur', Actual: unt.cCentur, Expected: 'Centur'},
  {Name: 'ccentury', Actual: unt.ccentury, Expected: 'century'},
  {Name: 'cCentury', Actual: unt.cCentury, Expected: 'Century'},
  {Name: 'ccenturies', Actual: unt.ccenturies, Expected: 'centuries'},
  {Name: 'cCenturies', Actual: unt.cCenturies, Expected: 'Centuries'},
  {Name: 'cmillennium', Actual: unt.cmillennium, Expected: 'millennium'},
  {Name: 'cMillennium', Actual: unt.cMillennium, Expected: 'Millennium'},
  {Name: 'cmillenniums', Actual: unt.cmillenniums, Expected: 'millenniums'},
  {Name: 'cMillenniums', Actual: unt.cMillenniums, Expected: 'Millenniums'},
  {Name: 'cnanosecond', Actual: unt.cnanosecond, Expected: 'nanosecond'},
  {Name: 'cnanoSecond', Actual: unt.cnanoSecond, Expected: 'nanoSecond'},
  {Name: 'cNanoSecond', Actual: unt.cNanoSecond, Expected: 'NanoSecond'},
  {Name: 'cnanoseconds', Actual: unt.cnanoseconds, Expected: 'nanoseconds'},
  {Name: 'cnanoSeconds', Actual: unt.cnanoSeconds, Expected: 'nanoSeconds'},
  {Name: 'cNanoSeconds', Actual: unt.cNanoSeconds, Expected: 'NanoSeconds'},
  {Name: 'cmicrosecond', Actual: unt.cmicrosecond, Expected: 'microsecond'},
  {Name: 'cmicroSecond', Actual: unt.cmicroSecond, Expected: 'microSecond'},
  {Name: 'cMicroSecond', Actual: unt.cMicroSecond, Expected: 'MicroSecond'},
  {Name: 'cmicroseconds', Actual: unt.cmicroseconds, Expected: 'microseconds'},
  {Name: 'cmicroSeconds', Actual: unt.cmicroSeconds, Expected: 'microSeconds'},
  {Name: 'cMicroSeconds', Actual: unt.cMicroSeconds, Expected: 'MicroSeconds'},
  {Name: 'cmillisecond', Actual: unt.cmillisecond, Expected: 'millisecond'},
  {Name: 'cmilliSecond', Actual: unt.cmilliSecond, Expected: 'milliSecond'},
  {Name: 'cMilliSecond', Actual: unt.cMilliSecond, Expected: 'MilliSecond'},
  {Name: 'cmilliseconds', Actual: unt.cmilliseconds, Expected: 'milliseconds'},
  {Name: 'cmilliSeconds', Actual: unt.cmilliSeconds, Expected: 'milliSeconds'},
  {Name: 'cMilliSeconds', Actual: unt.cMilliSeconds, Expected: 'MilliSeconds'},
  {Name: 'cpicosecond', Actual: unt.cpicosecond, Expected: 'picosecond'},
  {Name: 'cpicoSecond', Actual: unt.cpicoSecond, Expected: 'picoSecond'},
  {Name: 'cPicoSecond', Actual: unt.cPicoSecond, Expected: 'PicoSecond'},
  {Name: 'cpicoseconds', Actual: unt.cpicoseconds, Expected: 'picoseconds'},
  {Name: 'cpicoSeconds', Actual: unt.cpicoSeconds, Expected: 'picoSeconds'},
  {Name: 'cPicoSeconds', Actual: unt.cPicoSeconds, Expected: 'PicoSeconds'},
  {Name: 'cfemtosecond', Actual: unt.cfemtosecond, Expected: 'femtosecond'},
  {Name: 'cfemtoSecond', Actual: unt.cfemtoSecond, Expected: 'femtoSecond'},
  {Name: 'cFemtoSecond', Actual: unt.cFemtoSecond, Expected: 'FemtoSecond'},
  {Name: 'cfemtoseconds', Actual: unt.cfemtoseconds, Expected: 'femtoseconds'},
  {Name: 'cfemtoSeconds', Actual: unt.cfemtoSeconds, Expected: 'femtoSeconds'},
  {Name: 'cFemtoSeconds', Actual: unt.cFemtoSeconds, Expected: 'FemtoSeconds'}

  // Unit Conversions
  // Miles to Km
  // Celcius to Ferinheight
  // Liters to Gallons
];
