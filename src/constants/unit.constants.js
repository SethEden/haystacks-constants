/**
 * @file unit.constants.js
 * @module unit-constants
 * @description Contains many unit & unit conversion constants.
 * Also included are units of measurement, units of time, etc...
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @author Seth Hollingsead
 * @date 2020/07/21
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as phn from './phonic.constants.js';

// Units of Measure
export const cfemto = bas.cfe + bas.cmt + bas.co; // femto
export const cFemto = bas.cFe + bas.cmt + bas.co; // Femto
export const cFEMTO = bas.cFE + bas.cMT + bas.cO; // FEMTO
export const cpico = bas.cpi + bas.cco; // pico
export const cPico = bas.cPi + bas.cco; // Pico
export const cPICO = bas.cPI + bas.cCO; // PICO
export const cnano = bas.cna + bas.cno; // nano
export const cNano = bas.cNa + bas.cno; // Nano
export const cNANO = bas.cNA + bas.cNO; // NANO
export const cmicro = bas.cm + bas.ci + bas.ccr + bas.co; // micro
export const cMicro = bas.cMi + bas.ccr + bas.co; // Micro
export const cMICRO = bas.cMI + bas.cCR + bas.cO; // MICRO
export const cmill = bas.cm + bas.ci + bas.cll; // mill
export const cMill = bas.cMi + bas.cll; // Mill
export const cMILL = bas.cMI + bas.cLL; // MILL
export const cmilli = cmill + bas.ci; // milli
export const cMilli = cMill + bas.ci; // Milli
export const cMILLI = cMILL + bas.cI; // MILLI

// Units of Time
export const csecond = bas.cse + phn.ccond; // second
export const cSecond = bas.cSe + phn.ccond; // Second
export const cSECOND = bas.cSE + phn.cCOND; // SECOND
export const cseconds = csecond + bas.cs; // seconds
export const cSeconds = cSecond + bas.cs; // Seconds
export const cSECONDS = cSECOND + bas.cS; // SECONDS
export const cminute = bas.cm + bas.ci + bas.cnu + bas.cte; // minute
export const cMinute = bas.cMi + bas.cnu + bas.cte; // Minute
export const cMINUTE = bas.cMI + bas.cNU + bas.cTE; // MINUTE
export const cminutes = cminute + bas.cs; // minutes
export const cMinutes = cMinute + bas.cs; // Minutes
export const cMINUTES = cMINUTE + bas.cS; // MINUTES
export const chour = bas.cho + bas.cur; // hour
export const cHour = bas.cHo + bas.cur; // Hour
export const cHOUR = bas.cHO + bas.cUR; // HOUR
export const chours = chour + bas.cs; // hours
export const cHours = cHour + bas.cs; // Hours
export const cHOURS = cHOUR + bas.cS; // HOURS
export const cday = bas.cda + bas.cy; // day
export const cDay = bas.cDa + bas.cy; // Day
export const cDAY = bas.cDA + bas.cY; // DAY
export const cdays = cday + bas.cs; // days
export const cDays = cDay + bas.cs; // Days
export const cDAYS = cDAY + bas.cS; // DAYS
export const cweek = bas.cw + bas.cee + bas.ck; // week
export const cWeek = bas.cW + bas.cee + bas.ck; // Week
export const cWEEK = bas.cW + bas.cEE + bas.cK; // WEEK
export const cweeks = cweek + bas.cs; // weeks
export const cWeeks = cWeek + bas.cs; // Weeks
export const cWEEKS = cWEEK + bas.cS; // WEEKS
export const cmonth = bas.cmo + bas.cn + bas.cth; // month
export const cMonth = bas.cMo + bas.cn + bas.cth; // Month
export const cMONTH = bas.cMO + bas.cN + bas.cTH; // MONTH
export const cmonths = cmonth + bas.cs; // months
export const cMonths = cMonth + bas.cs; // Months
export const cMONTHS = cMONTH + bas.cS; // MONTHS
export const cyear = bas.cye + bas.car; // year
export const cYear = bas.cYe + bas.car; // Year
export const cYEAR = bas.cYE + bas.cAR; // YEAR
export const cyears = cyear + bas.cs; // years
export const cYears = cYear + bas.cs; // Years
export const cYEARS = cYEAR + bas.cS; // YEARS
export const cdecade = bas.cde + bas.cca + bas.cde; // decade
export const cDecade = bas.cDe + bas.cca + bas.cde; // Decade
export const cDECADE = bas.cDE + bas.cCA + bas.cDE; // DECADE
export const cdecades = cdecade + bas.cs; // decades
export const cDecades = cDecade + bas.cs; // Decades
export const cDECADES = cDECADE + bas.cS; // DECADES
export const ccent = bas.cc + phn.cent; // cent
export const cCent = bas.cC + phn.cent; // Cent
export const cCENT = bas.cC + phn.cENT; // CENT
export const ccentur = ccent + bas.cur; // centur
export const cCentur = cCent + bas.cur; // Centur
export const cCENTUR = cCENT + bas.cUR; // CENTUR
export const ccentury = ccentur + bas.cy; // century
export const cCentury = cCentur + bas.cy; // Century
export const cCENTURY = cCENTUR + bas.cY; // CENTURY
export const ccenturies = ccentur + phn.cies; // centuries
export const cCenturies = cCentur + phn.cies; // Centuries
export const cCENTURIES = cCENTUR + phn.cIES; // CENTURIES
export const cmillennium = cmill + bas.cen + bas.cni + bas.cum; // millennium
export const cMillennium = cMill + bas.cen + bas.cni + bas.cum; // Millennium // Millennium Falcon ;-)
export const cMILLENNIUM = cMILL + bas.cEN + bas.cNI + bas.cUM; // MILLENNIUM // Millennium Falcon ;-)
export const cmillenniums = cmillennium + bas.cs; // millenniums
export const cMillenniums = cMillennium + bas.cs; // Millenniums
export const cMILLENNIUMS = cMILLENNIUM + bas.cS; // MILLENNIUMS
export const cnanosecond = cnano + csecond; // nanosecond
export const cnanoSecond = cnano + cSecond; // nanoSecond
export const cNanoSecond = cNano + cSecond; // NanoSecond
export const cNANOSECOND = cNANO + cSECOND; // NANOSECOND
export const cnanoseconds = cnano + cseconds; // nanoseconds
export const cnanoSeconds = cnano + cSeconds; // nanoSeconds
export const cNanoSeconds = cNano + cSeconds; // NanoSeconds
export const cNANOSECONDS = cNANO + cSECONDS; // NANOSECONDS
export const cmicrosecond = cmicro + csecond; // microsecond
export const cmicroSecond = cmicro + cSecond; // microSecond
export const cMicroSecond = cMicro + cSecond; // MicroSecond
export const cMICROSECOND = cMICRO + cSECOND; // MICROSECOND
export const cmicroseconds = cmicro + cseconds; // microseconds
export const cmicroSeconds = cmicro + cSeconds; // microSeconds
export const cMicroSeconds = cMicro + cSeconds; // MicroSeconds
export const cMICROSECONDS = cMICRO + cSECONDS; // MICROSECONDS
export const cmillisecond = cmilli + csecond; // millisecond
export const cmilliSecond = cmilli + cSecond; // milliSecond
export const cMilliSecond = cMilli + cSecond; // MilliSecond
export const cMILLISECOND = cMILLI + cSECOND; // MILLISECOND
export const cmilliseconds = cmilli + cseconds; // milliseconds
export const cmilliSeconds = cmilli + cSeconds; // milliSeconds
export const cMilliSeconds = cMilli + cSeconds; // MilliSeconds
export const cMILLISECONDS = cMILLI + cSECONDS; // MILLISECONDS
export const cpicosecond = cpico + csecond; // picosecond
export const cpicoSecond = cpico + cSecond; // picoSecond
export const cPicoSecond = cPico + cSecond; // PicoSecond
export const cPICOSECOND = cPICO + cSECOND; // PICOSECOND
export const cpicoseconds = cpico + cseconds; // picoseconds
export const cpicoSeconds = cpico + cSeconds; // picoSeconds
export const cPicoSeconds = cPico + cSeconds; // PicoSeconds
export const cPICOSECONDS = cPICO + cSECONDS; // PICOSECONDS
export const cfemtosecond = cfemto + csecond; // femtosecond
export const cfemtoSecond = cfemto + cSecond; // femtoSecond
export const cFemtoSecond = cFemto + cSecond; // FemtoSecond
export const cFEMTOSECOND = cFEMTO + cSECOND; // FEMTOSECOND
export const cfemtoseconds = cfemto + cseconds; // femtoseconds
export const cfemtoSeconds = cfemto + cSeconds; // femtoSeconds
export const cFemtoSeconds = cFemto + cSeconds; // FemtoSeconds
export const cFEMTOSECONDS = cFEMTO + cSECONDS; // FEMTOSECONDS

// Unit Conversions
// Miles to Km
// Celcius to Ferinheight
// Liters to Gallons
