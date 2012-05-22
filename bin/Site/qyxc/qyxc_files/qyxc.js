// Created by iWeb 2.0.3 local-build-20080704

function createMediaStream_id3()
{return IWCreateMediaCollection("http://www.hefumuye.cn/Site/qyxc/qyxc_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://www.hefumuye.cn/Site/qyxc',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget7'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://www.hefumuye.cn/Site/qyxc',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(205,154),new IWSize(205,40),new IWSize(246,209),27,27,0,new IWSize(60,49)),new IWPhotoFrame([IWCreateImage('qyxc_files/spiralboook_ul.png'),IWCreateImage('qyxc_files/spiralboook_top.png'),IWCreateImage('qyxc_files/spiralboook_ur.png'),IWCreateImage('qyxc_files/spiralboook_right.png'),IWCreateImage('qyxc_files/spiralboook_lr.png'),IWCreateImage('qyxc_files/spiralboook_bottom.png'),IWCreateImage('qyxc_files/spiralboook_ll.png'),IWCreateImage('qyxc_files/spiralboook_left.png')],null,1,0.533333,0.000000,10.000000,0.000000,19.000000,62.000000,49.000000,48.000000,72.000000,20.000000,1.000000,20.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget7',null,'widget8',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,67),url:'qyxc_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'qyxc_files/stroke_1.png'},{rect:new IWRect(1,-1,232,2),url:'qyxc_files/stroke_2.png'},{rect:new IWRect(233,-1,2,2),url:'qyxc_files/stroke_3.png'},{rect:new IWRect(233,1,2,67),url:'qyxc_files/stroke_4.png'},{rect:new IWRect(233,68,2,3),url:'qyxc_files/stroke_5.png'},{rect:new IWRect(1,68,232,3),url:'qyxc_files/stroke_6.png'},{rect:new IWRect(-1,68,2,3),url:'qyxc_files/stroke_7.png'}],new IWSize(234,70))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('qyxc_files/qyxcMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id3()}
function onPageUnload()
{Widget.onunload();}
