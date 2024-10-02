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
  {Name: 'cFEMTO', Actual: unt.cFEMTO, Expected: 'FEMTO'},
  {Name: 'cpico', Actual: unt.cpico, Expected: 'pico'},
  {Name: 'cPico', Actual: unt.cPico, Expected: 'Pico'},
  {Name: 'cPICO', Actual: unt.cPICO, Expected: 'PICO'},
  {Name: 'cnano', Actual: unt.cnano, Expected: 'nano'},
  {Name: 'cNano', Actual: unt.cNano, Expected: 'Nano'},
  {Name: 'cNANO', Actual: unt.cNANO, Expected: 'NANO'},
  {Name: 'cmicro', Actual: unt.cmicro, Expected: 'micro'},
  {Name: 'cMicro', Actual: unt.cMicro, Expected: 'Micro'},
  {Name: 'cMICRO', Actual: unt.cMICRO, Expected: 'MICRO'},
  {Name: 'cmill', Actual: unt.cmill, Expected: 'mill'},
  {Name: 'cMill', Actual: unt.cMill, Expected: 'Mill'},
  {Name: 'cMILL', Actual: unt.cMILL, Expected: 'MILL'},
  {Name: 'cmilli', Actual: unt.cmilli, Expected: 'milli'},
  {Name: 'cMilli', Actual: unt.cMilli, Expected: 'Milli'},
  {Name: 'cMILLI', Actual: unt.cMILLI, Expected: 'MILLI'},

  // Units of Time
  {Name: 'csecond', Actual: unt.csecond, Expected: 'second'},
  {Name: 'cSecond', Actual: unt.cSecond, Expected: 'Second'},
  {Name: 'cSECOND', Actual: unt.cSECOND, Expected: 'SECOND'},
  {Name: 'cseconds', Actual: unt.cseconds, Expected: 'seconds'},
  {Name: 'cSeconds', Actual: unt.cSeconds, Expected: 'Seconds'},
  {Name: 'cSECONDS', Actual: unt.cSECONDS, Expected: 'SECONDS'},
  {Name: 'cminute', Actual: unt.cminute, Expected: 'minute'},
  {Name: 'cMinute', Actual: unt.cMinute, Expected: 'Minute'},
  {Name: 'cMINUTE', Actual: unt.cMINUTE, Expected: 'MINUTE'},
  {Name: 'cminutes', Actual: unt.cminutes, Expected: 'minutes'},
  {Name: 'cMinutes', Actual: unt.cMinutes, Expected: 'Minutes'},
  {Name: 'cMINUTES', Actual: unt.cMINUTES, Expected: 'MINUTES'},
  {Name: 'chour', Actual: unt.chour, Expected: 'hour'},
  {Name: 'cHour', Actual: unt.cHour, Expected: 'Hour'},
  {Name: 'cHOUR', Actual: unt.cHOUR, Expected: 'HOUR'},
  {Name: 'chours', Actual: unt.chours, Expected: 'hours'},
  {Name: 'cHours', Actual: unt.cHours, Expected: 'Hours'},
  {Name: 'cHOURS', Actual: unt.cHOURS, Expected: 'HOURS'},
  {Name: 'cday', Actual: unt.cday, Expected: 'day'},
  {Name: 'cDay', Actual: unt.cDay, Expected: 'Day'},
  {Name: 'cDAY', Actual: unt.cDAY, Expected: 'DAY'},
  {Name: 'cdays', Actual: unt.cdays, Expected: 'days'},
  {Name: 'cDays', Actual: unt.cDays, Expected: 'Days'},
  {Name: 'cDAYS', Actual: unt.cDAYS, Expected: 'DAYS'},
  {Name: 'cweek', Actual: unt.cweek, Expected: 'week'},
  {Name: 'cWeek', Actual: unt.cWeek, Expected: 'Week'},
  {Name: 'cWEEK', Actual: unt.cWEEK, Expected: 'WEEK'},
  {Name: 'cweeks', Actual: unt.cweeks, Expected: 'weeks'},
  {Name: 'cWeeks', Actual: unt.cWeeks, Expected: 'Weeks'},
  {Name: 'cWEEKS', Actual: unt.cWEEKS, Expected: 'WEEKS'},
  {Name: 'cmonth', Actual: unt.cmonth, Expected: 'month'},
  {Name: 'cMonth', Actual: unt.cMonth, Expected: 'Month'},
  {Name: 'cMONTH', Actual: unt.cMONTH, Expected: 'MONTH'},
  {Name: 'cmonths', Actual: unt.cmonths, Expected: 'months'},
  {Name: 'cMonths', Actual: unt.cMonths, Expected: 'Months'},
  {Name: 'cMONTHS', Actual: unt.cMONTHS, Expected: 'MONTHS'},
  {Name: 'cyear', Actual: unt.cyear, Expected: 'year'},
  {Name: 'cYear', Actual: unt.cYear, Expected: 'Year'},
  {Name: 'cYEAR', Actual: unt.cYEAR, Expected: 'YEAR'},
  {Name: 'cyears', Actual: unt.cyears, Expected: 'years'},
  {Name: 'cYears', Actual: unt.cYears, Expected: 'Years'},
  {Name: 'cYEARS', Actual: unt.cYEARS, Expected: 'YEARS'},
  {Name: 'cdecade', Actual: unt.cdecade, Expected: 'decade'},
  {Name: 'cDecade', Actual: unt.cDecade, Expected: 'Decade'},
  {Name: 'cDECADE', Actual: unt.cDECADE, Expected: 'DECADE'},
  {Name: 'cdecades', Actual: unt.cdecades, Expected: 'decades'},
  {Name: 'cDecades', Actual: unt.cDecades, Expected: 'Decades'},
  {Name: 'cDECADES', Actual: unt.cDECADES, Expected: 'DECADES'},
  {Name: 'ccent', Actual: unt.ccent, Expected: 'cent'},
  {Name: 'cCent', Actual: unt.cCent, Expected: 'Cent'},
  {Name: 'cCENT', Actual: unt.cCENT, Expected: 'CENT'},
  {Name: 'ccentur', Actual: unt.ccentur, Expected: 'centur'},
  {Name: 'cCentur', Actual: unt.cCentur, Expected: 'Centur'},
  {Name: 'cCENTUR', Actual: unt.cCENTUR, Expected: 'CENTUR'},
  {Name: 'ccentury', Actual: unt.ccentury, Expected: 'century'},
  {Name: 'cCentury', Actual: unt.cCentury, Expected: 'Century'},
  {Name: 'cCENTURY', Actual: unt.cCENTURY, Expected: 'CENTURY'},
  {Name: 'ccenturies', Actual: unt.ccenturies, Expected: 'centuries'},
  {Name: 'cCenturies', Actual: unt.cCenturies, Expected: 'Centuries'},
  {Name: 'cCENTURIES', Actual: unt.cCENTURIES, Expected: 'CENTURIES'},
  {Name: 'cmillennium', Actual: unt.cmillennium, Expected: 'millennium'},
  {Name: 'cMillennium', Actual: unt.cMillennium, Expected: 'Millennium'},
  {Name: 'cMILLENNIUM', Actual: unt.cMILLENNIUM, Expected: 'MILLENNIUM'},
  {Name: 'cmillenniums', Actual: unt.cmillenniums, Expected: 'millenniums'},
  {Name: 'cMillenniums', Actual: unt.cMillenniums, Expected: 'Millenniums'},
  {Name: 'cMILLENNIUMS', Actual: unt.cMILLENNIUMS, Expected: 'MILLENNIUMS'},
  {Name: 'cnanosecond', Actual: unt.cnanosecond, Expected: 'nanosecond'},
  {Name: 'cnanoSecond', Actual: unt.cnanoSecond, Expected: 'nanoSecond'},
  {Name: 'cNanoSecond', Actual: unt.cNanoSecond, Expected: 'NanoSecond'},
  {Name: 'cNANOSECOND', Actual: unt.cNANOSECOND, Expected: 'NANOSECOND'},
  {Name: 'cnanoseconds', Actual: unt.cnanoseconds, Expected: 'nanoseconds'},
  {Name: 'cnanoSeconds', Actual: unt.cnanoSeconds, Expected: 'nanoSeconds'},
  {Name: 'cNanoSeconds', Actual: unt.cNanoSeconds, Expected: 'NanoSeconds'},
  {Name: 'cNANOSECONDS', Actual: unt.cNANOSECONDS, Expected: 'NANOSECONDS'},
  {Name: 'cmicrosecond', Actual: unt.cmicrosecond, Expected: 'microsecond'},
  {Name: 'cmicroSecond', Actual: unt.cmicroSecond, Expected: 'microSecond'},
  {Name: 'cMicroSecond', Actual: unt.cMicroSecond, Expected: 'MicroSecond'},
  {Name: 'cMICROSECOND', Actual: unt.cMICROSECOND, Expected: 'MICROSECOND'},
  {Name: 'cmicroseconds', Actual: unt.cmicroseconds, Expected: 'microseconds'},
  {Name: 'cmicroSeconds', Actual: unt.cmicroSeconds, Expected: 'microSeconds'},
  {Name: 'cMicroSeconds', Actual: unt.cMicroSeconds, Expected: 'MicroSeconds'},
  {Name: 'cMICROSECONDS', Actual: unt.cMICROSECONDS, Expected: 'MICROSECONDS'},
  {Name: 'cmillisecond', Actual: unt.cmillisecond, Expected: 'millisecond'},
  {Name: 'cmilliSecond', Actual: unt.cmilliSecond, Expected: 'milliSecond'},
  {Name: 'cMilliSecond', Actual: unt.cMilliSecond, Expected: 'MilliSecond'},
  {Name: 'cMILLISECOND', Actual: unt.cMILLISECOND, Expected: 'MILLISECOND'},
  {Name: 'cmilliseconds', Actual: unt.cmilliseconds, Expected: 'milliseconds'},
  {Name: 'cmilliSeconds', Actual: unt.cmilliSeconds, Expected: 'milliSeconds'},
  {Name: 'cMilliSeconds', Actual: unt.cMilliSeconds, Expected: 'MilliSeconds'},
  {Name: 'cMILLISECONDS', Actual: unt.cMILLISECONDS, Expected: 'MILLISECONDS'},
  {Name: 'cpicosecond', Actual: unt.cpicosecond, Expected: 'picosecond'},
  {Name: 'cpicoSecond', Actual: unt.cpicoSecond, Expected: 'picoSecond'},
  {Name: 'cPicoSecond', Actual: unt.cPicoSecond, Expected: 'PicoSecond'},
  {Name: 'cPICOSECOND', Actual: unt.cPICOSECOND, Expected: 'PICOSECOND'},
  {Name: 'cpicoseconds', Actual: unt.cpicoseconds, Expected: 'picoseconds'},
  {Name: 'cpicoSeconds', Actual: unt.cpicoSeconds, Expected: 'picoSeconds'},
  {Name: 'cPicoSeconds', Actual: unt.cPicoSeconds, Expected: 'PicoSeconds'},
  {Name: 'cPICOSECONDS', Actual: unt.cPICOSECONDS, Expected: 'PICOSECONDS'},
  {Name: 'cfemtosecond', Actual: unt.cfemtosecond, Expected: 'femtosecond'},
  {Name: 'cfemtoSecond', Actual: unt.cfemtoSecond, Expected: 'femtoSecond'},
  {Name: 'cFemtoSecond', Actual: unt.cFemtoSecond, Expected: 'FemtoSecond'},
  {Name: 'cFEMTOSECOND', Actual: unt.cFEMTOSECOND, Expected: 'FEMTOSECOND'},
  {Name: 'cfemtoseconds', Actual: unt.cfemtoseconds, Expected: 'femtoseconds'},
  {Name: 'cfemtoSeconds', Actual: unt.cfemtoSeconds, Expected: 'femtoSeconds'},
  {Name: 'cFemtoSeconds', Actual: unt.cFemtoSeconds, Expected: 'FemtoSeconds'},
  {Name: 'cFEMTOSECONDS', Actual: unt.cFEMTOSECONDS, Expected: 'FEMTOSECONDS'}

  // Unit Conversions
  // Miles to Km
  // Celcius to Ferinheight
  // Liters to Gallons
];
