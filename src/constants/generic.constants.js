/**
 * @file generic.constants.js
 * @module generic-constants
 * @description Contains many generic constants.
 * Also included are other generic constants like string numbers like "one", "two", "three".
 * Also included are spellings of Greek letters, military codes/standards, units of measurement, units of time, etc...
 * @requires module:basic.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';

export const cDotDot = bas.cDot + bas.cDot; // ..
export const cDotDotForwardSlash = cDotDot + bas.cForwardSlash; // ../

// Boolean strings
export const cTrue = bas.cT + phn.crue; // True
export const cFalse = bas.cF + phn.calse; // False
export const ctrue = bas.ct + phn.crue; // true
export const cfalse = bas.cf + phn.calse; // false
export const cTRUE = bas.cTR + bas.cUE; // TRUE
export const cFALSE = bas.cFA + bas.cLS + bas.cE; // FALSE
export const con = bas.con; // on
export const cOn = bas.cOn; // On
export const cOff = bas.cO + bas.cff; // Off
export const coff = bas.co + bas.cff; // off
export const cOFF = bas.cOF + bas.cF; // OFF
export const cyes = bas.cy + bas.ces; // yes
export const cnot = bas.cno + bas.ct; // not
export const cYes = bas.cY + bas.ces; // Yes
export const cNot = bas.cNo + bas.ct; // Not
export const cYES = bas.cYE + bas.cS; // YES
export const cNOT = 'NOT'; // bas.c_NO + bas.cT; // NOTE cNOT is some how a reserved word that is a variable.
export const cnotok = cnot + bas.cok; // notok
export const cnotOk = cnot + bas.cOk; // notOk
export const cnotOK = cnot + bas.cOK; // notOK
export const cNotok = cNot + bas.cok; // Notok
export const cNotOk = cNot + bas.cOk; // NotOk
export const cNotOK = cNot + bas.cOK; // NotOK
export const cNOTok = 'NOTok'; // c_NOT = bas.cok;
export const cNOTOk = 'NOTOk'; // c_NOT = bas.cOk;
export const cNOTOK = 'NOTOK'; // c_NOT + bas.cOK;
export const cnotEql = cnot + phn.cEql; // notEql
export const cnoteql = cnot + phn.ceql; // noteql
export const cNotEql = cNot + phn.cEql; // NotEql
export const cNoteql = cNot + phn.ceql; // Noteql
export const cmax = phn.cmax; // max
export const cMax = phn.cMax; // Max
export const cmin = phn.cmin; // min
export const cMin = phn.cMin; // Min

// Test Status
export const cPass = bas.cPa + bas.css; // Pass
export const cWarning = bas.cWa + bas.crn + bas.cin + bas.cg; // Warning
export const cFail = bas.cFa + bas.cil; // Fail

// Directions
export const cDown = bas.cDo + bas.cwn; // Down
export const cLeft = bas.cLe + bas.cft; // Left
export const cRight = bas.cRi + bas.cgh + bas.ct; // Right

// Alphabets
export const cLowerCaseEnglishAlphabet = bas.cab + bas.ccd + bas.cef + bas.cgh + bas.cij + bas.ckl + bas.cmn + bas.cop + bas.cqr + bas.cst + bas.cuv + bas.cwx + bas.cyz; // abcdefghijklmnopqrstuvwxyz
export const cUpperCaseEnglishAlphabet = bas.cAB + bas.cCD + bas.cEF + bas.cGH + bas.cIJ + bas.cKL + bas.cMN + bas.cOP + bas.cQR + bas.cST + bas.cUV + bas.cWX + bas.cYZ; // ABCDEFGHIJKLMNOPQRSTUVWXYZ
export const cAllNumbers = num.c0 + num.c1 + num.c2 + num.c3 + num.c4 + num.c5 + num.c6 + num.c7 + num.c8 + num.c9; // 0123456789
export const cMostSpecialCharacters = bas.cExclamation + bas.cAt + bas.cHash + bas.cDollar + bas.cPercent + bas.cCarrot + bas.cAndPersand + bas.cStar + bas.cOpenParenthesis + bas.cCloseParenthesis + bas.cUnderscore + bas.cPlus +
bas.cOpenCurlyBrace + bas.cCloseCurlyBrace + bas.cPipe + bas.cColon + bas.cDoubleQuote + bas.cLessThan + bas.cGreaterThan + bas.cQuestion + bas.cDot + bas.cComa + bas.cTilde; // !@#$%^&*()_+{}|:"<>?.,~

// File Extensions
export const ctmp = bas.ctm + bas.cp; // tmp
export const cTmp = bas.cTm + bas.cp; // Tmp
export const cTMP = bas.cTM + bas.cP; // TMP
export const cexe = bas.cex + bas.ce; // exe
export const cExe = bas.cEx + bas.ce; // Exe
export const cEXE = bas.cEX + bas.cE; // EXE
export const cdoc = bas.cdo + bas.cc; // doc
export const cDoc = bas.cDo + bas.cc; // Doc
export const cDOC = bas.cDO + bas.cC; // DOC
export const ccom = bas.cco + bas.cm; // com
export const cCom = bas.cCo + bas.cm; // Com
export const cCOM = bas.cCO + bas.cM; // COM
export const czip = bas.cz + bas.cip; // zip
export const cZip = bas.cZ + bas.cip; // Zip
export const cZIP = bas.cZ + bas.cIP; // ZIP
export const ctxt = bas.ct + bas.cxt; // txt
export const cTxt = bas.cT + bas.cxt; // Txt
export const cTXT = bas.cT + bas.cXT; // TXT
export const ccsv = bas.ccs + bas.cv; // csv
export const cCsv = bas.cCs + bas.cv; // Csv
export const cCSV = bas.cCS + bas.cV; // CSV
export const cxml = bas.cxm + bas.cl; // xml
export const cXml = bas.cXm + bas.cl; // Xml
export const cXML = bas.cXM + bas.cL; // XML
export const clog = bas.clo + bas.cg; // log
export const cLog = bas.cLo + bas.cg; // Log
export const cLOG = bas.cLO + bas.cG; // LOG
export const cjs = bas.cjs; // js
export const cJs = bas.cJs; // Js
export const cJS = bas.cJS; // JS
export const cjson = bas.cjs + bas.con; // json
export const cJson = bas.cJs + bas.con; // Json
export const cJSON = bas.cJS + bas.cON; // JSON
export const cenv = bas.cen + bas.cv; // env
export const cEnv = bas.cEn + bas.cv; // Env
export const cENV = bas.cEN + bas.cV; // ENV
export const curl = bas.cur + bas.cl; // url
export const cUrl = bas.cUr + bas.cl; // Url
export const cURL = bas.cUR + bas.cL; // URL
export const curi = bas.cur + bas.ci; // uri
export const cUri = bas.cUr + bas.ci; // Uri
export const cURI = bas.cUR + bas.cI; // URI
export const csh = bas.csh; // sh
export const cSh = bas.cSh; // Sh
export const cSH = bas.cSH; // SH
export const cps1 = bas.cps + num.c1; // ps1
export const cPs1 = bas.cPs + num.c1; // Ps1
export const cPS1 = bas.cPS + num.c1; // PS1
export const cbat = bas.cba + bas.ct; // bat
export const cBat = bas.cBa + bas.ct; // Bat
export const cBAT = bas.cBA + bas.cT; // BAT

export const cDotexe = bas.cDot + cexe; // .exe
export const cDotExe = bas.cDot + cExe; // .Exe
export const cDotEXE = bas.cDot + cEXE; // .EXE
export const cDotcsv = bas.cDot + ccsv; // .csv
export const cDotCsv = bas.cDot + cCsv; // .Csv
export const cDotCSV = bas.cDot + cCSV; // .CSV
export const cDotCom = bas.cDot + cCom; // .Com
export const cDotzip = bas.cDot + czip; // .zip
export const cDotZip = bas.cDot + cZip; // .Zip
export const cDotZIP = bas.cDot + cZIP; // .ZIP
export const cDottxt = bas.cDot + ctxt; // .txt
export const cDotTxt = bas.cDot + cTxt; // .Txt
export const cDotTXT = bas.cDot + cTXT; // .TXT
export const cDotxml = bas.cDot + cxml; // .xml
export const cDotXml = bas.cDot + cXml; // .Xml
export const cDotXML = bas.cDot + cXML; // .XML
export const cDotlog = bas.cDot + clog; // .log
export const cDotLog = bas.cDot + cLog; // .Log
export const cDotLOG = bas.cDot + cLOG; // .LOG
export const cDotjs = bas.cDot + cjs; // .js
export const cDotJs = bas.cDot + cJs; // .Js
export const cDotJS = bas.cDot + cJS; // .JS
export const cDotjson = bas.cDot + cjson; // .json
export const cDotJson = bas.cDot + cJson; // .Json
export const cDotJSON = bas.cDot + cJSON; // .JSON
export const cDotenv = bas.cDot + cenv; // .env
export const cDotEnv = bas.cDot + cEnv; // .Env
export const cDotENV = bas.cDot + cENV; // .ENV
export const cDotsh = bas.cDot + csh; // sh
export const cDotSh = bas.cDot + cSh; // Sh
export const cDotSH = bas.cDot + cSH; // SH
export const cDotps1 = bas.cDot + cps1; // ps1
export const cDotPs1 = bas.cDot + cPs1; // Ps1
export const cDotPS1 = bas.cDot + cPS1; // PS1
export const cDotbat = bas.cDot + cbat; // bat
export const cDotBat = bas.cDot + cBat; // Bat
export const cDotBAT = bas.cDot + cBAT; // BAT
export const cascii = bas.cas + bas.cci + bas.ci; // ascii
export const cAscii = bas.cAs + bas.cci + bas.ci; // Ascii

// Time Formatting
export const cYYYY = bas.cYY + bas.cYY; // YYYY
export const cSSS = bas.cSS + bas.cS; // SSS
export const cYYYYMMDD = cYYYY + bas.cMM + bas.cDD; // YYYYMMDD
export const cHHmmss = bas.cHH + bas.cmm + bas.css; // HHmmss
export const cHHmmss_SSS = cHHmmss + bas.cDash + cSSS; // HHmmss-SSS
export const cYYYYMMDD_HHmmss  = cYYYYMMDD + bas.cDash + cHHmmss; // YYYYMMDD-HHmmss
export const cYYYYMMDD_HHmmss_SSS = cYYYYMMDD_HHmmss + bas.cDash + cSSS; // YYYYMMDD-HHmmss-SSS
export const cYYYY_MM_DD_HH_mm_ss_SSS = cYYYY + bas.cColon + bas.cMM + bas.cColon + bas.cDD + bas.cDash + bas.cHH + bas.cColon + bas.cmm + bas.cColon + bas.css + bas.cColon + cSSS; // YYYY:MM:DD-HH:mm:ss:SSS

// Operating Systems
export const cwin32 = phn.cwin + num.c32; // win32
export const cdarwin = phn.cdar + phn.cwin; // darwin
export const clinux = phn.clin + bas.cux; // linux

// Naval & Military Codes
export const cAlfa = bas.cAl + bas.cfa; //  Alfa
export const cBravo = bas.cBr + bas.cav + bas.co; // Bravo
export const cCharlie = bas.cCh + bas.car + bas.cli + bas.ce; // Charlie
export const cDelta = bas.cDe + bas.clt + bas.ca; // Delta
export const cEcho = bas.cEc + bas.cho; // Echo
export const cFoxtrot = bas.cFo + bas.cxt + bas.cro + bas.ct; // Foxtrot
export const cGolf = bas.cGo + bas.clf; // Golf
export const cHotel = bas.cHo + bas.cte + bas.cl; // Hotel
export const cIndia = bas.cIn + bas.cdi + bas.ca; // India
export const cJuliett = bas.cJu + bas.cli + bas.cet + bas.ct; // Juliett
export const cKilo = bas.cKi + bas.clo; // Kilo
export const cLima = bas.cLi + bas.cma; // Lima
export const cMike = bas.cMi + bas.cke; // Mike
export const cNovember = bas.cNo + bas.cv + phn.cemb + bas.cer;  // November
export const cOscar = bas.cOs + bas.cca + bas.cr; // Oscar
export const cPapa = bas.cPa + bas.cpa; // Papa
export const cQuebec = bas.cQu + bas.ceb + bas.cec; // Quebec
export const cRomeo = bas.cRo + bas.cme + bas.co; // Romeo
export const cSierra = bas.cSi + bas.cer + bas.cra; // Sierra
export const cTango = bas.cTa + bas.cng + bas.co; // Tango
export const cUniform = bas.cUn + bas.cif + bas.cor + bas.cm; // Uniform
export const cVictor = bas.cVi + phn.cctor; // Victor
export const cWhiskey = bas.cWh + bas.cis + bas.cke + bas.cy; // Whiskey
export const cXray = bas.cXr + bas.cay; // Xray
export const cYankee = bas.cYa + bas.cnk + bas.cee; // Yankee
export const cZulu = bas.cZu + bas.clu; // Zulu

export const cAlpha = bas.cAl + bas.cph + bas.ca; // Alpha
export const cBeta = bas.cBe + bas.cta; // Beta
export const cGamma = bas.cGa + bas.cmm + bas.ca; // Gamma
export const cEpsilon = bas.cEp + bas.csi + bas.clo + bas.cn; // Epsilon
export const cDigamma = bas.cDi + bas.cga + bas.cmm + bas.ca; // Digamma
export const cZeta = bas.cZe + bas.cta; // Zeta
export const ceta = bas.cet + bas.ca; // eta
export const cEta = bas.cEt + bas.ca; // Eta
export const cTheta = bas.cTh + bas.cet + bas.ca; // Theta
export const cIota = bas.cIo + bas.cta; // Iota
export const cKappa = bas.cKa + bas.cpp + bas.ca; // Kappa
export const cLambda = bas.cLa + bas.cmb + bas.cda; // Lambda
export const cMu = bas.cMu; // Mu
export const cNu = bas.cNu; // Nu
export const cXi = bas.cXi; // Xi
export const cOmicron = bas.cOm + bas.cic + bas.cro + bas.cn; // Omicron
export const cPi = bas.cPi; // Pi
export const cSan = bas.cSa + bas.cn; // San
export const cKoppa = bas.cKo + bas.cpp + bas.ca; // Koppa
export const cRho = bas.cRh + bas.co; // Rho
export const cSigma = bas.cSi + bas.cgm + bas.ca; // Sigma
export const cTau = bas.cTa + bas.cu; // Tau
export const cUpsilon = bas.cUp + bas.csi + bas.clo + bas.cn; // Upsilon
export const cPhi = bas.cPh + bas.ci; // Phi
export const cChi = bas.cCh + bas.ci; // Chi
export const cPsi = bas.cPs + bas.ci; // Psi
export const cOmega = bas.cOm + bas.ceg + bas.ca; // Omega

// Months Of The Year
export const cJanuary = bas.cJa + bas.cn + phn.cuary; // January
export const cFebuary = bas.cFe + bas.cb + phn.cuary; // Febuary
export const cMarch = bas.cMa + bas.crc + bas.ch; // March
export const cApril = bas.cAp + bas.cri + bas.cl; // April
export const cMay = bas.cMa + bas.cy; // May
export const cJune = bas.cJu + bas.cne; // June
export const cJuly = bas.cJu + bas.cly; // July
export const cAugust = bas.cAu + bas.cgu + bas.cst; // August
export const cSeptember = bas.cSe + bas.cpt + phn.cemb + bas.cer; // September
export const cOctober = bas.cOc + bas.cto + bas.cb + bas.cer; // October
// cNovember = bas.cNo + bas.cv + bas.cemb + bas.cer; // November
export const cDecember = bas.cDe + bas.cc + phn.cemb + bas.cer; // December

// Constants Abbreviations
export const cbas = bas.cba + bas.cs; // bas
export const cbiz = bas.cbi + bas.cz; // biz
export const cclr = phn.cclr; // clr
export const cdos = bas.cdo + bas.cs; // dos
export const cDos = bas.cDo + bas.cs; // Dos
export const cDOS = bas.cDO + bas.cS; // DOS
export const ccmd = bas.ccm + bas.cd; // cmd
export const cCmd = bas.cCm + bas.cd; // Cmd
export const cCMD = bas.cCM + bas.cD; // CMD
export const ccfg = bas.ccf + bas.cg; // cfg
export const ccon = bas.cco + bas.cn; // con
export const cctr = phn.cctr; // ctr
export const cCtr = bas.cCt + bas.cr; // Ctr
export const cCTR = bas.cCT + bas.cR; // CTR
export const celm = bas.cel + bas.cm; // elm
export const cfnc = bas.cfn + bas.cc; // fnc
export const cgen = phn.cgen; // gen
export const ciso = phn.ciso; // iso
export const cknt = bas.ckn + bas.ct; // knt
export const clng = bas.cln + bas.cg; // lng
export const cmsg = bas.cms + bas.cg; // msg
export const cnum = phn.cnum; // num
export const cphn = bas.cph + bas.cn; // phn
export const cshp = phn.cshp; // shp
export const csys = bas.csy + bas.cs; // sys
export const cSys = bas.cSy + bas.cs; // Sys
export const cunt = phn.cunt; // unt
export const cwrd = bas.cwr + bas.cd; // wrd
export const capc = bas.cap + bas.cc; // apc
export const callSysCV = bas.cal + bas.cl + cSys + bas.cCV; // allSysCV

// Networking
export const cEADDRINUSE = bas.cEA + bas.cDD + bas.cRI + bas.cNU + bas.cSE; // EADDRINUSE
export const cECONNRESET = bas.cEC + bas.cON + bas.cNR + bas.cES + bas.cET; // ECONNRESET
export const cENOENT = bas.cEN + bas.cOE + bas.cNT; // ENOENT
export const cEACCES = bas.cEA + bas.cCC + bas.cES; // EACCES

// Encryption
export const caes = bas.cae + bas.cs; // aes
export const cAes = bas.cAe + bas.cs; // Aes
export const cAES = bas.cAE + bas.cS; // AES
export const cdes = bas.cde + bas.cs; // des
export const cDes = bas.cDe + bas.cs; // Des
export const cDES = bas.cDE + bas.cS; // DES
export const crsa = bas.crs + bas.ca; // rsa
export const cRsa = bas.cRs + bas.ca; // Rsa
export const cRSA = bas.cRS + bas.cA; // RSA
export const caes128 = caes + num.c128; // aes128
export const cAes128 = cAes + num.c128; // Aes128
export const cAES128 = cAES + num.c128; // AES128
export const caes192 = caes + num.c192; // aes192
export const cAes192 = cAes + num.c192; // Aes192
export const cAES192 = cAES + num.c192; // AES192
export const caes256 = caes + num.c256; // aes256
export const cAes256 = cAes + num.c256; // Aes256
export const cAES256 = cAES + num.c256; // AES256
export const caes_128 = caes + bas.cDash + num.c128; // aes-128
export const cAes_128 = cAes + bas.cDash + num.c128; // Aes-128
export const cAES_128 = cAES + bas.cDash + num.c128; // AES-128
export const caes_192 = caes + bas.cDash + num.c192; // aes-192
export const cAes_192 = cAes + bas.cDash + num.c192; // Aes-192
export const cAES_192 = cAES + bas.cDash + num.c192; // AES-192
export const caes_256 = caes + bas.cDash + num.c256; // aes-256
export const cAes_256 = cAes + bas.cDash + num.c256; // Aes-256
export const cAES_256 = cAES + bas.cDash + num.c256; // AES-256
export const ccbc = bas.ccb + bas.cc; // cbc
export const cCbc = bas.cCb + bas.cc; // Cbc
export const cCBC = bas.cCB + bas.cC; // CBC
export const cgcm = bas.cgc + bas.cm; // gcm
export const cGcm = bas.cGc + bas.cm; // Gcm
export const cGCM = bas.cGC + bas.cM; // GCM
export const cede = bas.ced + bas.ce; // ede
export const cEde = bas.cEd + bas.ce; // Ede
export const cEDE = bas.cED + bas.cE; // EDE
export const cede3 = cede + num.c3; // ede3
export const cEde3 = cEde + num.c3; // Ede3
export const cEDE3 = cEDE + num.c3; // EDE3
export const coaep = bas.coa + bas.cep; // oaep
export const cOaep = bas.cOa + bas.cep; // Oaep
export const cOAEP = bas.cOA + bas.cEP; // OAEP
export const cpbk = bas.cpb + bas.ck; // pbk
export const cPbk = bas.cPb + bas.ck; // Pbk
export const cPBK = bas.cPB + bas.cK; // PBK
export const csha = bas.csh + bas.ca; // sha
export const cSha = bas.cSh + bas.ca; // Sha
export const cSHA = bas.cSH + bas.cA; // SHA
// DSA (Digital Signature Algorithm)
export const cdsa = bas.cds + bas.ca; // dsa
export const cDsa = bas.cDs + bas.ca; // Dsa
export const cDSA = bas.cDS + bas.cA; // DSA

// Encryption Algorithms
export const caes_128_ctr = caes_128 + bas.cDash + cctr; // aes-128-ctr
export const cAes_128_Ctr = cAes_128 + bas.cDash + cCtr; // Aes-128-Ctr
export const cAES_128_CTR = cAES_128 + bas.cDash + cCTR; // AES-128-CTR
export const caes_192_ctr = caes_192 + bas.cDash + cctr; // aes-192-ctr
export const cAes_192_Ctr = cAes_192 + bas.cDash + cCtr; // Aes-192-Ctr
export const cAES_192_CTR = cAES_192 + bas.cDash + cCTR; // AES-192-CTR
export const caes_256_ctr = caes_256 + bas.cDash + cctr; // aes-256-ctr
export const cAes_256_Ctr = cAes_256 + bas.cDash + cCtr; // Aes-256-Ctr
export const cAES_256_CTR = cAES_256 + bas.cDash + cCTR; // AES-256-CTR
export const caes_128_cbc = caes_128 + bas.cDash + ccbc; // aes-128-cbc
export const cAes_128_Cbc = cAes_128 + bas.cDash + cCbc; // Aes-128-Cbc
export const cAES_128_CBC = cAES_128 + bas.cDash + cCBC; // AES-128-CBC
export const caes_192_cbc = caes_192 + bas.cDash + ccbc; // aes-192-cbc
export const cAes_192_Cbc = cAes_192 + bas.cDash + cCbc; // Aes-192-Cbc
export const cAES_192_CBC = cAES_192 + bas.cDash + cCBC; // AES-192-CBC
export const caes_256_cbc = caes_256 + bas.cDash + ccbc; // aes-256-cbc
export const cAes_256_Cbc = cAes_256 + bas.cDash + cCbc; // Aes-256-Cbc
export const cAES_256_CBC = cAES_256 + bas.cDash + cCBC; // AES-256-CBC
export const caes_128_gcm = caes_128 + bas.cDash + cgcm; // aes-128-gcm
export const cAes_128_Gcm = cAes_128 + bas.cDash + cGcm; // Aes-128-Gcm
export const cAES_128_GCM = cAES_128 + bas.cDash + cGCM; // AES-128-GCM
export const caes_192_gcm = caes_192 + bas.cDash + cgcm; // aes-192-gcm
export const cAes_192_Gcm = cAes_192 + bas.cDash + cGcm; // Aes-192-Gcm
export const cAES_192_GCM = cAES_192 + bas.cDash + cGCM; // AES-192-GCM
export const caes_256_gcm = caes_256 + bas.cDash + cgcm; // aes-256-gcm
export const cAes_256_Gcm = cAes_256 + bas.cDash + cGcm; // Aes-256-Gcm
export const cAES_256_GCM = cAES_256 + bas.cDash + cGCM; // AES-256-GCM

// DES Algorithms
export const cdes_cbc = cdes + bas.cDash + ccbc; // des-cbc
export const cDes_Cbc = cDes + bas.cDash + cCbc; // Des-Cbc
export const cDES_cbc = cDES + bas.cDash + cCBC; // DES-CBC
export const cdes_ede3 = cdes + bas.cDash + cede3; // des-ede3
export const cDes_Ede3 = cDes + bas.cDash + cEde3; // Des-Ede3
export const cDES_EDE3 = cDES + bas.cDash + cEDE3; // DES-EDE3
export const cdes_ede3_cbc = cdes + bas.cDash + cede3 + bas.cDash + ccbc; // des-ede3-cbc
export const cDes_Ede3_Cbc = cDes + bas.cDash + cEde3 + bas.cDash + cCbc; // Des-Ede3-Cbc
export const cDES_EDE3_CBC = cDES + bas.cDash + cEDE3 + bas.cDash + cCBC; // DES-EDE3-CBC

// RC4 Algorithms
export const crc4 = bas.crc + num.c4; // rc4
export const cRc4 = bas.cRc + num.c4; // Rc4
export const cRC4 = bas.cRC + num.c4; // RC4
export const crc4_40 = crc4 + bas.cDash + num.c40; // rc4-40
export const cRc4_40 = cRc4 + bas.cDash + num.c40; // Rc4-40
export const cRC4_40 = cRC4 + bas.cDash + num.c40; // RC4-40

// Blowfish Algorithms
export const cbf = bas.cbf; // bf
export const cBf = bas.cBf; // Bf
export const cBF = bas.cBF; // BF
export const cbf_cbc = cbf + bas.cDash + ccbc; // bf-cbc
export const cBf_Cbc = cBf + bas.cDash + cCbc; // Bf-Cbc
export const cBF_CBC = cBF + bas.cDash + cCBC; // BF-CBC

// RSA Algorithms
export const crsa_oaep = crsa + bas.cDash + coaep; // rsa-oaep
export const cRsa_oaep = cRsa + bas.cDash + cOaep; // Rsa-Oaep
export const cRSA_OAEP = cRSA + bas.cDash + cOAEP; // RSA-OAEP

// RSA with Key Sizes
export const crsa_1024 = crsa + bas.cDash + num.c102 + num.c4; // rsa-1024
export const cRsa_1024 = cRsa + bas.cDash + num.c102 + num.c4; // Rsa-1024
export const cRSA_1024 = cRSA + bas.cDash + num.c102 + num.c4; // RSA-1024
export const crsa_2048 = crsa + bas.cDash + num.c204 + num.c8; // rsa-2048
export const cRsa_2048 = cRsa + bas.cDash + num.c204 + num.c8; // Rsa-2048
export const cRSA_2048 = cRSA + bas.cDash + num.c204 + num.c8; // RSA-2048
export const crsa_4096 = crsa + bas.cDash + num.c409 + num.c6; // rsa-4096
export const cRsa_4096 = cRsa + bas.cDash + num.c409 + num.c6; // Rsa-4096
export const cRSA_4096 = cRSA + bas.cDash + num.c409 + num.c6; // RSA-4096

// RSAES-OAEP
export const crsaes_oaep = crsa + bas.ces + bas.cDash + coaep; // rsaes-oaep
export const cRsaes_Oaep = cRsa + bas.ces + bas.cDash + cOaep; // Rsaes-Oaep
export const cRSAES_OAEP = cRSA + bas.cES + bas.cDash + cOAEP; // RSAES-OAEP

// ECDSA (Elliptic Curve Digital Signature Algorithm)
export const cecdsa = bas.cec + cdsa; // ecdsa
export const cEcdsa = bas.cEc + cdsa; // Ecdsa
export const cECDSA = bas.cEC + cDSA; // ECDSA

// DH (Diffie-Hellman)
export const cdh = bas.cdh; // dh
export const cDh = bas.cDh; // Dh
export const cDH = bas.cDH; // DH

// ECDH (Elliptic Curve Diffie-Hellman)
export const cecdh = bas.cec + bas.cdh; // ecdh
export const cEcdh = bas.cEc + bas.cdh; // Ecdh
export const cECDH = bas.cEC + bas.cDH; // ECDH

// MD5 (Message Digest 5)
export const cmd5 = bas.cmd + num.c5; // md5
export const cMd5 = bas.cMd + num.c5; // Md5
export const cMD5 = bas.cMD + num.c5; // MD5

// SHA-1 (Secure Hash Algorithm 1)
export const csha_1 = csha + bas.cDash + num.c1; // sha-1
export const cSha_1 = cSha + bas.cDash + num.c1; // Sha-1
export const cSHA_1 = cSHA + bas.cDash + num.c1; // SHA-1
export const csha256 = csha + num.c256; // Sha256
export const cSha256 = cSha + num.c256; // Sha256
export const cSHA256 = cSHA + num.c256; // Sha256

// SHA3-256 (Secure Hash Algorithm 3, 256-bit)
export const csha3_256 = csha + num.c3 + bas.cDash + num.c256; // sha3-256
export const cSha3_256 = cSha + num.c3 + bas.cDash + num.c256; // Sha3-256
export const cSHA3_256 = cSHA + num.c3 + bas.cDash + num.c256; // SHA3-256

// SHA3-512 (Secure Hash Algorithm 3, 512-bit)
export const csha3_512 = csha + num.c3 + bas.cDash + num.c512; // sha3-512
export const cSha3_512 = cSha + num.c3 + bas.cDash + num.c512; // Sha3-512
export const cSHA3_512 = cSHA + num.c3 + bas.cDash + num.c512; // SHA3-512

// PBKDF2 (Password-Based Key Derivation Function 2)
export const cpbkdf2 = cpbk + bas.cdf + num.c2; // pbkdf2
export const cPbkdf2 = cPbk + bas.cdf + num.c2; // Pbkdf2
export const cPBKDF2 = cPBK + bas.cDF + num.c2; // PBKDF2

// Miscelanious
export const cUTF8 = bas.cUT + bas.cF + num.c8; // UTF8
export const crgb = bas.crg + bas.cb; // rgb
export const cRGB = bas.cRG + bas.cB; // RGB
export const ccmyk = bas.ccm + bas.cyk; // cmyk
export const cCMYK = bas.cCM + bas.cYK; // CMYK
export const cconst = phn.ccon + bas.cst; // const
export const cConst = phn.cCon + bas.cst; // Const
export const cASAP = bas.cAS + bas.cAP; // ASAP
export const capp = bas.cap + bas.cp; // app
export const cApp = bas.cAp + bas.cp; // App
export const cAPP = bas.cAP + bas.cP; // APP
export const cplg = bas.cpl + bas.cg; // plg
export const cPlg = bas.cPl + bas.cg; // Plg
export const cPLG = bas.cPL + bas.cG; // PLG
export const carg = bas.car + bas.cg; // arg
export const cArg = bas.cAr + bas.cg; // Arg
export const cargs = bas.ca + phn.crgs; // args
export const cArgs = bas.cA + phn.crgs; // Args
export const chex = bas.che + bas.cx; // hex
export const cHex = bas.cHe + bas.cx; // Hex
export const cregEx = phn.creg + bas.cEx; // regEx
export const cRegEx = phn.cReg + bas.cEx; // RegEx
export const cregExp = cregEx + bas.cp; // regExp
export const cRegExp = cRegEx + bas.cp; // RegExp
export const cbin = bas.cbi + bas.cn; // bin
export const cBin = bas.cBi + bas.cn; // Bin
export const cBIN = bas.cBI + bas.cN; // BIN
export const cinit = phn.cini + bas.ct; // init
export const cInit = phn.cIni + bas.ct; // Init
export const cwpm = bas.cwp + bas.cm; // wpm
export const cWpm = bas.cWp + bas.cm; // Wpm
export const cWPM = bas.cWP + bas.cM; // WPM
export const capi = bas.cap + bas.ci; // api
export const cApi = bas.cAp + bas.ci; // Api
export const cAPI = bas.cAP + bas.cI; // API
export const ceagain = bas.cea + bas.cga + bas.cin; // eagain
export const cEAGAIN = bas.cEA + bas.cGA + bas.cIN; // EAGAIN
export const csigint = bas.csi + bas.cgi + bas.cnt; // sigint
export const cSIGINT = bas.cSI + bas.cGI + bas.cNT; // SIGINT // Used to capture the CTRL+C key-combo
export const cCTRLC = bas.cBackSlash + bas.cu + num.c00 + num.c0 + num.c3; // \u0003 // CTRL+C key-combo
export const cESC_Key = bas.cBackSlash + bas.cu + num.c00 + num.c1 + bas.cb; // \u001b // ESC key ASCII code
export const cesc = bas.ces + bas.cc; // esc
export const cESC = bas.cES + bas.cC; // ESC
export const cctrl = bas.cct + bas.crl; // ctrl
export const cCTRL = bas.cCT + bas.cRL; // CTRL
export const calt = bas.cal + bas.ct; // alt
export const cALT = bas.cAL + bas.cT; // ALT
export const cshift = bas.csh + bas.cif + bas.ct; // shift
export const cSHIFT = bas.cSH + bas.cIF + bas.cT; // SHIFT
export const ctab = bas.cta + bas.cb; // tab
export const cTAB = bas.cTA + bas.cB; // TAB
export const center = bas.cen + bas.cte + bas.cr; // enter
export const cENTER = bas.cEN + bas.cTE + bas.cR; // ENTER
export const cspace = bas.csp + bas.cac + bas.ce; // space
export const cSPACE = bas.cSP + bas.cAC + bas.cE; // SPACE
export const cbackspace = bas.cba + bas.cck + cspace; // backspace
export const cBACKSPACE = bas.cBA + bas.cCK + cSPACE; // BACKSPACE
export const cCroot = bas.cC + bas.cColon + bas.cForwardSlash; // C:/
export const cCrootBackSlash = bas.cC + bas.cColon + bas.cBackSlash; // C:\
export const cipc = bas.cip + bas.cc; // ipc - Inter-Process Communication
export const cIPC = bas.cIP + bas.cC; // IPC - Inter-Process Communication
export const cusr = bas.cus + bas.cr; // usr
export const cUsr = bas.cUs + bas.cr; // Usr
export const cUSR = bas.cUS + bas.cR; // USR
export const cobj = bas.cob + bas.cj; // obj
export const cObj = bas.cOb + bas.cj; // Obj
export const cOBJ = bas.cOB + bas.cJ; // OBJ