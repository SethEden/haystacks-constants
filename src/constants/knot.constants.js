/**
 * @file knot.constants.js
 * @module knot.constants
 * @description Contains names of knots as defined constants.
 * @requires module:basic.constants
 * @requires module:country.constants
 * @requires module:generic.constants
 * @requires module:language.constants
 * @requires module:numeric.constants
 * @requires module:phonic.constants
 * @requires module:word.constants
 * @author Seth Hollingsead
 * @date 2022/04/14
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as bas from './basic.constants.js';
import * as ctr from './country.constants.js';
import * as gen from './generic.constants.js';
import * as lng from './language.constants.js';
import * as num from './numeric.constants.js';
import * as phn from './phonic.constants.js';
import * as wrd from './word.constants.js';

// Knots
export const cAdjustableGripHitch = wrd.cAdjustable + wrd.cGrip + wrd.cHitch; // AdjustableGripHitch
export const cAdjustableSling = wrd.cAdjustable + wrd.cSling; // AdjustableSling
export const cAlbrightKnot = bas.cAl + bas.cbr + phn.cight + wrd.cKnot; // AlbrightKnot
export const cAlpineButterflyBend = wrd.cAlpine + wrd.cButterfly + wrd.cBend; // AlpineButterflyBend
export const cAplineButterflyLoop = wrd.cApline + wrd.cButterfly + wrd.cLoop; // AplineButterflyLoop
export const cAnchorHitch = wrd.cAnchor + wrd.cHitch; // AnchorHitch
export const cArborKnot = bas.cAr + bas.cbo + bas.cr + wrd.cKnot; // ArborKnot
export const cAshleyBend = wrd.cAsh + bas.cle + bas.cyB + wrd.cend; // AshleyBend
export const cAshleyStopper = wrd.cAsh + bas.cle + bas.cy + wrd.cStopper; // AshleyStopper
export const cAustralianBraidKnot = ctr.cAustralia + bas.cn + wrd.cBraid + wrd.cKnot; // AustralianBraidKnot
export const cBackSplice = wrd.cBack + wrd.cSplice; // BackSplice
export const cBarrelHitch = wrd.cBarrel + wrd.cHitch; // BarrelHitch
export const cBasketHitch = wrd.cBasket + wrd.cHitch; // BasketHitch
export const cBeerKnot = wrd.cBeer + wrd.cKnot; // BeerKnot
export const cBiminiTwistKnot = wrd.cBimini + wrd.cTwist+ wrd.cKnot; // BiminiTwistKnot
export const cBlakesHitch = bas.cBl + phn.cake + bas.cs + wrd.cHitch; // BlakesHitch
export const cBloodKnot = wrd.cBlood + wrd.cKnot; // BloodKnot
export const cBoomHitch = wrd.cBoom + wrd.cHitch; // BoomHitch
export const cBottleSling = wrd.cBottle + wrd.cSling; // BottleSling
export const cBowTie = wrd.cBow + wrd.cTie; // BowTie
export const cBowlineKnot = wrd.cBow + wrd.cline + wrd.cKnot; // BowlineKnot
export const cBowlineOnABight = wrd.cBow + wrd.cline + bas.cOn + bas.cAB + phn.cight; // BowlineOnABight
export const cBrummelSplice = wrd.cBrummel + wrd.cSplice; // BrummelSplice
export const cBrummelSpliceDemo = wrd.cBrummel + wrd.cSplice + wrd.cDemo; // BrummelSpliceDemo
export const cBuntlineHitch = wrd.cBuntline + wrd.cHitch; // BuntlineHitch
export const cButchersKnot = wrd.cButchers + wrd.cKnot; // ButchersKnot
export const cCarrickBend = wrd.cCarrick + wrd.cBend; // CarrickBend
export const cCarrickBendMat = wrd.cCarrick + wrd.cBend + wrd.cMat; // CarrickBendMat
export const cCelticKnot = wrd.cCeltic + wrd.cKnot; // CelticKnot
export const cChainSinnet = wrd.cChain + wrd.cSinnet; // ChainSinnet
export const cChainSplice = wrd.cChain + wrd.cSplice; // ChainSplice
export const cCleatHitch = bas.cCl + phn.ceat + wrd.cHitch; // CleatHitch
export const cDockLine = wrd.cDock + wrd.cLine; // DockLine
export const cHalyard = bas.cHa + bas.cl + wrd.cyard; // Halyard
export const cCloveHitch = wrd.cClove + wrd.cHitch; // CloveHitch
export const cHitches = wrd.cHitch + bas.ces; // Hitches
export const cLoops = wrd.cLoops; // Loops
export const cRopeEnd = wrd.cRope + wrd.cEnd; // RopeEnd
export const cCobraKnot = wrd.cCobra + wrd.cKnot; // CobraKnot
export const cCoilAttachedRope = wrd.cCoil + wrd.cAttached + wrd.cRope; // CoilAttachedRope
export const cCoilUnattachedRope = wrd.cCoil + wrd.cUnattached + wrd.cRope; // CoilUnattachedRope
export const cCommonWipping = wrd.cCommon + wrd.cWipping; // CommonWipping
export const cConstrictor = wrd.cConstrictor; // Constrictor
export const cConstrictorSlide = wrd.cConstrictor + wrd.cSlide; // ConstrictorSlide
export const cSlide = wrd.cSlide; // Slide
export const cHoward = wrd.cHow + phn.card; // Howard
export const cConstrictorHoward = wrd.cConstrictor + cHoward; // ConstrictorHoward
export const cConstrictorEnd = wrd.cConstrictor + wrd.cEnd; // ConstrictorEnd
export const cEnd = wrd.cEnd; // End
export const cConstrictorFolding = wrd.cConstrictor + wrd.cFolding; // ConstrictorFolding
export const cFolding = wrd.cFolding; // Folding
export const cConstrictorRopeEnd = wrd.cConstrictor + wrd.cRope + wrd.cEnd; // ConstrictorRopeEnd
export const cConstrictorTwist = wrd.cConstrictor + wrd.cTwist; // ConstrictorTwist
export const cTwist = wrd.cTwist; // Twist
export const cCowHitch = wrd.cCow + wrd.cHitch; // CowHitch
export const cCowHitchEnds = wrd.cCow + wrd.cHitch + wrd.cEnds; // CowHitchEnds
export const cChowHitchLoops = wrd.cChow + wrd.cHitch + wrd.cLoops; // ChowHitchLoops
export const cCrownKnot = wrd.cCrown + wrd.cKnot; // CrownKnot
export const cCrownSinnet = wrd.cCrown + wrd.cSinnet; // CrownSinnet
export const cCurtainTieBack = wrd.cCurtain + wrd.cTie + wrd.cBack; // CurtainTieBack
export const cDavyKnot = bas.cDa + bas.cvy + wrd.cKnot; // DavyKnot
export const cDistelHitch = bas.cDi + phn.cste + bas.cl + wrd.cHitch; // DistelHitch
export const cDoubleAlpineButterfly = wrd.cDouble + wrd.cAlpine + wrd.cButterfly; // DoubleAlpineButterfly
export const cDoubleDavyKnot = wrd.cDouble + bas.cDa + bas.cvy + wrd.cKnot; // DoubleDavyKnot
export const cDoubleDragonLoop = wrd.cDouble + wrd.cDragon + wrd.cLoop; // DoubleDragonLoop
export const cDoubleFishermans = wrd.cDouble + wrd.cFishermans; // DoubleFishermans
export const cDoubleMatthewWalker = wrd.cDouble + wrd.cMat + wrd.cthe + bas.cwW + bas.cal + bas.cke + bas.cr; // DoubleMatthewWalker
export const cDoubleOverhandStopper = wrd.cDouble + wrd.cOver + wrd.chand + wrd.cStopper; // DoubleOverhandStopper
export const cDoubleTurtleKnot = wrd.cDouble + wrd.cTurtle + wrd.cKnot; // DoubleTurtleKnot
export const cDropperLoopKnot = bas.cDr + phn.copper + wrd.cLoop + wrd.cKnot; // DropperLoopKnot
export const cEggLoopKnot = wrd.cEgg + wrd.cLoop + wrd.cKnot; // EggLoopKnot
export const cEstarStopperKnot = bas.cEs + phn.ctar + wrd.cStopper + wrd.cKnot; // EstarStopperKnot
export const cEyeSplice = wrd.cEye + wrd.cSplice; // EyeSplice
export const cFarmersLoopKnot = wrd.cFarmers + wrd.cLoop + wrd.cKnot; // FarmersLoopKnot
export const cFarrimondHitch = wrd.cFar + bas.cri + phn.cmond + wrd.cHitch; // FarrimondHitch

export const cFgKnot = bas.cFg + wrd.cKnot; // FgKnot
export const cFiadorKnot = bas.cFi + phn.cador + wrd.cKnot; // FiadorKnot
export const cFigure8Bend = wrd.cFigure8 + wrd.cBend; // Figure8Bend
export const cFigure8DirectionLoop = wrd.cFigure8 + wrd.cDirection + wrd.cLoop; // Figure8DirectionLoop
export const cFigure8DoubleLoop = wrd.cFigure8 + wrd.cDouble + wrd.cLoop; // Figure8DoubleLoop
export const cFigure8Flake = wrd.cFigure8 + wrd.cFlake; // Figure8Flake
export const cFigure8FollowLoop = wrd.cFigure8 + wrd.cFollow + wrd.cLoop; // Figure8FollowLoop
export const cFigure8Loop = wrd.cFigure8 + wrd.cLoop; // Figure8Loop
export const cFigure9Loop = wrd.cFigure + num.c9 + wrd.cLoop; // Figure9Loop
export const cFlatOverhandBend = wrd.cFlat + wrd.cOverhand + wrd.cBend; // FlatOverhandBend
export const cFlemishFlakeCoil = wrd.cFlemish + wrd.cFlake + wrd.cCoil; // FlemishFlakeCoil
export const c4StrandSinnet = num.c4 + wrd.cStrand + wrd.cSinnet; // 4StrandSinnet
export const c4StrandSquareSinnet = num.c4 + wrd.cStrand + wrd.cSquare + wrd.cSinnet; // 4StrandSquareSinnet
export const cFourInHandNeckTie = num.cFour + bas.cIn + wrd.cHand + wrd.cNeck + wrd.cTie; // FourInHandNeckTie
export const cFrenchSinnetOne = lng.cFrench + wrd.cSinnet + num.cOne; // FrenchSinnetOne
export const cFrenchSinnetTwo = lng.cFrench + wrd.cSinnet + num.cTwo; // FrenchSinnetTwo
export const cGirthHitch = wrd.cGirth + wrd.cHitch; // GirthHitch
export const cGnatHitch = wrd.cGnat + wrd.cHitch; // GnatHitch
export const cGrogSlidingSplice = wrd.cGrog + wrd.cSliding + wrd.cSplice; // GrogSlidingSplice
export const cGrogSling = wrd.cGrog + wrd.cSling; // GrogSling
export const cHalfHitch = wrd.cHalf + wrd.cHitch; // HalfHitch
export const cHalfKnot = wrd.cHalf + wrd.cKnot; // HalfKnot
export const cHalfWindsorNecktie = wrd.cHalf + wrd.cWindsor + wrd.cNecktie; // HalfWindsorNecktie
export const cHalterHitch = wrd.cHalter + wrd.cHitch; // HalterHitch
export const cHalyardHitch = bas.cHa + bas.cly + phn.card + wrd.cHitch; // HalyardHitch
export const cHandcuffKnot = wrd.cHandcuff + wrd.cKnot; // HandcuffKnot
export const cHastyHarness = wrd.cHasty + wrd.cHarness; // HastyHarness
export const cHeavingLineKnot = wrd.cHeaving + wrd.cLine + wrd.cKnot; // HeavingLineKnot
export const cHighwaymansHitch = wrd.cHighwaymans + wrd.cHitch; // HighwaymansHitch
export const cHondaKnot = bas.cHo + phn.cnda + wrd.cKnot; // HondaKnot
export const cHuntersBend = wrd.cHunters + wrd.cBend; // HuntersBend
export const cIcicleHitchEnd = wrd.cIcicle + wrd.cHitch + wrd.cEnd; // IcicleHitchEnd
export const cIcicleHitchLoop = wrd.cIcicle + wrd.cHitch + wrd.cLoop; // IcicleHitchLoop
export const cImproveClinchKnot = wrd.cImprove + wrd.cClinch + wrd.cKnot; // ImproveClinchKnot
export const cKlemheistKnot = bas.cKl + bas.cem + bas.che + phn.cist + wrd.cKnot; // KlemheistKnot
export const cLanyardKnot = wrd.cLanyard + wrd.cKnot; // LanyardKnot
export const cLashingDiagonal = wrd.cLashing + wrd.cDiagonal; // LashingDiagonal
export const cLashingRound = wrd.cLashing + wrd.cRound; // LashingRound
export const cLashingSheer = wrd.cLashing + bas.cSh + bas.cee + bas.cr; // LashingSheer
export const cLashingSquare = wrd.cLashing + wrd.cSquare; // LashingSquare
export const cLashingTripod = wrd.cLashing + wrd.cTripod; // LashingTripod
export const cLigatureInstrument = wrd.cLigature + wrd.cInstrument; // LigatureInstrument
export const cLigatureOneHand = wrd.cLigature + num.cOne + wrd.cHand; // LigatureOneHand
export const cLigatureTwoHands = wrd.cLigature + num.cTwo + wrd.cHands; // LigatureTwoHands
export const cLightermansHitch = wrd.cLightermans + wrd.cHitch; // LightermansHitch
export const cLongBurySplice = wrd.cLong + wrd.cBury + wrd.cSplice; // LongBurySplice
export const cManagerHitch = wrd.cManager + wrd.cHitch; // ManagerHitch
export const cMarlinSpikeHitch = wrd.cMarlin + wrd.cSpike + wrd.cHitch; // MarlinSpikeHitch
export const cMastheadKnotMat = wrd.cMasthead + wrd.cKnot + wrd.cMat; // MastheadKnotMat
export const cMcdonaldBrummel = bas.cMc + phn.cdon + phn.cald + wrd.cBrummel; // McdonaldBrummel
export const cMidshipmansHitch = wrd.cMidshipmans + wrd.cHitch; // MidshipmansHitch
export const cMillersKnot = wrd.cMiller + bas.csK + gen.cnot; // MillersKnot
export const cMonkeysFistKnot = wrd.cMonkeys + wrd.cFist + wrd.cKnot; // MonkeysFistKnot
export const cMooringsHitch = wrd.cMoorings + wrd.cHitch; // MooringsHitch
export const cMunterMuleCombo = wrd.cMunter + wrd.cMule + wrd.cCombo; // MunterMuleCombo
export const cNailKnot = wrd.cNail + wrd.cKnot; // NailKnot
export const cNonSlipMonoKnot = phn.cNon + wrd.cSlip + wrd.cMono + wrd.cKnot; // NonSlipMonoKnot
export const cNooseKnot = wrd.cNoose + wrd.cKnot; // NooseKnot
export const cOceanPlaitMat = wrd.cOcean + wrd.cPlait + wrd.cMat; // OceanPlaitMat
export const cOneHandedBowline = num.cOne + wrd.cHanded + wrd.cBow + wrd.cline; // OneHandedBowline
export const cOrvisKnot = bas.cOr + bas.cvi + bas.csK + gen.cnot; // OrvisKnot
export const cOverhandKnot = wrd.cOverhand + wrd.cKnot; // OverhandKnot
export const cPackageTyingKnot = wrd.cPackage + wrd.cTying + wrd.cKnot; // PackageTyingKnot
export const cPalomarKnot = wrd.cPal + bas.com + bas.car + wrd.cKnot; // PalomarKnot
export const cPerfectionLoop = wrd.cPerfection + wrd.cLoop; // PerfectionLoop
export const cPileHitch = wrd.cPile + wrd.cHitch; // PileHitch
export const cPoachersKnot = wrd.cPoachers + wrd.cKnot; // PoachersKnot
export const cPrattNecktie = bas.cPr + bas.cat + bas.ct + wrd.cNecktie; // PrattNecktie
export const cPrusikKnot = wrd.cPrusik + wrd.cKnot; // PrusikKnot
export const cPurcellPrusikKnot = wrd.cPurcell + wrd.cPrusik + wrd.cKnot; // PurcellPrusikKnot
export const cQuickHitch = wrd.cQuick + wrd.cHitch; // QuickHitch

export const cRadiumReleaseHitch = bas.cRa + phn.cdium + wrd.cRelease + wrd.cHitch; // RadiumReleaseHitch
export const cRapalaKnot = bas.cRa + wrd.cpal + bas.caK + gen.cnot; // RapalaKnot
export const cRatTailStopperKnot = wrd.cRatTail + wrd.cStopper + wrd.cKnot; // RatTailStopperKnot
export const cRingHitch = wrd.cRing + wrd.cHitch; // RingHitch
export const cRollingHitch = wrd.cRolling + wrd.cHitch; // RollingHitch
export const cRoundTurnHitches = wrd.cRound + wrd.cTurn + wrd.cHitches; // RoundTurnHitches
export const cRunningBowline = wrd.cRunning + wrd.cBowline; // RunningBowline
export const cSailmakersWhipping = wrd.cSail + wrd.cmakers + wrd.cWhipping; // SailmakersWhipping
export const cSanDiegoJamKnot = gen.cSan + bas.cDi + bas.ceg + bas.coJ + bas.cam + wrd.cKnot; // SanDiegoJamKnot
export const cSheepShank = wrd.cSheep + wrd.cShank; // SheepShank
export const cSheetBend = wrd.cSheet + wrd.cBend; // SheetBend
export const cShoelaceBow = wrd.cShoelace + wrd.cBow; // ShoelaceBow
export const cShoelaceBowFieggen = wrd.cShoelace + wrd.cBow + bas.cFi + bas.ceg + gen.cgen; // ShoelaceBowFieggen
export const cShoelaceBowSurgeon = wrd.cShoelace + wrd.cBow + wrd.cSurgeon; // ShoelaceBowSurgeon
export const cShortSplice = wrd.cShort + wrd.cSplice; // ShortSplice
export const cSiberianHitch = bas.cSi + phn.cber + phn.cian + wrd.cHitch; // SiberianHitch
export const cSingleRopeBraid = wrd.cSingle + wrd.cRope + wrd.cBraid; // SingleRopeBraid
export const cSlidingDoubleFishermans = wrd.cSliding + wrd.cDouble + wrd.cFishermans; // SlidingDoubleFishermans
export const cSlimBeautyKnot = wrd.cSlim + wrd.cBeauty + wrd.cKnot; // SlimBeautyKnot
export const cSlipKnot = wrd.cSlip + wrd.cKnot; // SlipKnot
export const cSnellKnot = bas.cSn + phn.cell + wrd.cKnot; // SnellKnot
export const cSoftShackle = wrd.cSoft + wrd.cShackle; // SoftShackle
export const cSoftShackleEdwards = wrd.cSoft + wrd.cShackle + bas.cEd + phn.cward + bas.cs; // SoftShackleEdwards
export const cSoftShackleStronger = wrd.cSoft + wrd.cShackle + bas.cSt + phn.cron + phn.cger; // SoftShackleStronger
export const cSpanishBowline = lng.cSpanish + wrd.cBowline; // SpanishBowline
export const cSquareKnot = wrd.cSquare + wrd.cKnot; // SquareKnot
export const cStevedoreStopper = bas.cSt + bas.cev + bas.ced + phn.core + wrd.cStopper; // StevedoreStopper
export const cStopperLoop = wrd.cStopper + wrd.cLoop; // StopperLoop
export const cStrangleKnotEnd = wrd.cStrangle + wrd.cKnot + wrd.cEnd; // StrangleKnotEnd
export const cStrangleKnotOverhand = wrd.cStrangle + wrd.cKnot + wrd.cOverhand; // StrangleKnotOverhand
export const cSuperMunterHitch = wrd.cSuper + wrd.cMunter + wrd.cHitch; // SuperMunterHitch
export const cSurgeonsJoinKnot = wrd.cSurgeons + bas.cJo + bas.cin + wrd.cKnot; // SurgeonsJoinKnot
export const cSurgeonsLoopKnot = wrd.cSurgeons + wrd.cLoop + wrd.cKnot; // SurgeonsLoopKnot
export const cSurgicalSlipTie = wrd.cSurgical + wrd.cSlip + wrd.cTie; // SurgicalSlipTie
export const cSurgicalTieInsturmental = wrd.cSurgical + wrd.cTie + wrd.cInsturmental; // SurgicalTieInsturmental
export const cSurgicalTieOneHand = wrd.cSurgical + wrd.cTie + num.cOne + wrd.cHand; // SurgicalTieOneHand
export const cSurgicalTieTwoHands = wrd.cSurgical + wrd.cTie + num.cTwo + wrd.cHands; // SurgicalTieTwoHands
export const cTensionlessHitch = wrd.cTensionless + wrd.cHitch; // TensionlessHitch
export const c3StrandBraid = num.c3 + wrd.cStrand + wrd.cBraid; // 3StrandBraid
export const c3StrandBraidAlternate = num.c3 + wrd.cStrand + wrd.cBraid + wrd.cAlternate; // 3StrandBraidAlternate
export const cTimberHitch = wrd.cTimber + wrd.cHitch; // TimberHitch
export const cTreeSwing = wrd.cTree + wrd.cSwing; // TreeSwing
export const cTrileneKnot = phn.cTri + bas.cle + bas.cne + wrd.cKnot; // TrileneKnot
export const cTruckersHitch = wrd.cTruckers + wrd.cHitch; // TruckersHitch
export const cTruckersHitchQuick = wrd.cTruckers + wrd.cHitch + wrd.cQuick; // TruckersHitchQuick
export const cTumbleHitch = wrd.cTumble + wrd.cHitch; // TumbleHitch
export const cTurksHead = bas.cTu + bas.crk + bas.csH + phn.cead; // TurksHead
export const cTwoHalfHitches = num.cTwo + wrd.cHalf + wrd.cHitches; // TwoHalfHitches
export const cUnderwritersKnot = wrd.cUnder + wrd.cwrite + bas.crs + wrd.cKnot; // UnderwritersKnot
export const cUniKNot = phn.cUni + bas.cKN + bas.cot; // UniKNot
export const cWallCrownKnot = wrd.cWall + wrd.cCrown + wrd.cKnot; // WallCrownKnot
export const cWallKnot = wrd.cWall + wrd.cKnot; // WallKnot
export const cWaterBowline = wrd.cWater + wrd.cBowline; // WaterBowline
export const cWaterKnot = wrd.cWater + wrd.cKnot; // WaterKnot
export const cWestCountryWipping = wrd.cWest + wrd.cCountry + wrd.cWipping; // WestCountryWipping
export const cWhoopieSling = wrd.cWhoopie + wrd.cSling; // WhoopieSling
export const cWindsorNecktie = wrd.cWindsor + wrd.cNecktie; // WindsorNecktie
export const cZeppelinBend = bas.cZe + bas.cpp + bas.cel + bas.cin + wrd.cBend; // ZeppelinBend
