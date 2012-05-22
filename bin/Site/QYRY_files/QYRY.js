// Created by iWeb 2.0.3 local-build-20080704

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,166),url:'QYRY_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'QYRY_files/stroke_1.png'},{rect:new IWRect(1,-1,257,2),url:'QYRY_files/stroke_2.png'},{rect:new IWRect(258,-1,3,2),url:'QYRY_files/stroke_3.png'},{rect:new IWRect(258,1,3,166),url:'QYRY_files/stroke_4.png'},{rect:new IWRect(258,167,3,2),url:'QYRY_files/stroke_5.png'},{rect:new IWRect(1,167,257,2),url:'QYRY_files/stroke_6.png'},{rect:new IWRect(-1,167,2,2),url:'QYRY_files/stroke_7.png'}],new IWSize(259,168)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('QYRY_files/QYRYMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
