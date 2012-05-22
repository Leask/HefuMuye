// Created by iWeb 2.0.3 local-build-20080704

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,67),url:'CONT_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'CONT_files/stroke_1.png'},{rect:new IWRect(1,-1,232,2),url:'CONT_files/stroke_2.png'},{rect:new IWRect(233,-1,2,2),url:'CONT_files/stroke_3.png'},{rect:new IWRect(233,1,2,67),url:'CONT_files/stroke_4.png'},{rect:new IWRect(233,68,2,3),url:'CONT_files/stroke_5.png'},{rect:new IWRect(1,68,232,3),url:'CONT_files/stroke_6.png'},{rect:new IWRect(-1,68,2,3),url:'CONT_files/stroke_7.png'}],new IWSize(234,70))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('CONT_files/CONTMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
