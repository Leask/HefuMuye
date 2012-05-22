// Created by iWeb 2.0.3 local-build-20080704

function createMediaStream_id3()
{return IWCreatePhotocast("http://www.hefumuye.cn/Site/qyxc/Pages/Sub-Factory_files/rss.xml",true,true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://www.hefumuye.cn/Site/qyxc/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://www.hefumuye.cn/Site/qyxc/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(5,new IWSize(122,122),new IWSize(122,30),new IWSize(146,167),27,27,0,new IWSize(12,12)),new IWPhotoFrame([IWCreateImage('Sub-Factory_files/Modern_C_TL.png'),IWCreateImage('Sub-Factory_files/Modern_S_T.png'),IWCreateImage('Sub-Factory_files/Modern_C_TR.png'),IWCreateImage('Sub-Factory_files/Modern_S_R.png'),IWCreateImage('Sub-Factory_files/Modern_C_BR.png'),IWCreateImage('Sub-Factory_files/Modern_S_B.png'),IWCreateImage('Sub-Factory_files/Modern_C_BL.png'),IWCreateImage('Sub-Factory_files/Modern_S_L.png')],null,2,0.300000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,67),url:'Sub-Factory_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Sub-Factory_files/stroke_1.png'},{rect:new IWRect(1,-1,232,2),url:'Sub-Factory_files/stroke_2.png'},{rect:new IWRect(233,-1,2,2),url:'Sub-Factory_files/stroke_3.png'},{rect:new IWRect(233,1,2,67),url:'Sub-Factory_files/stroke_4.png'},{rect:new IWRect(233,68,2,3),url:'Sub-Factory_files/stroke_5.png'},{rect:new IWRect(1,68,232,3),url:'Sub-Factory_files/stroke_6.png'},{rect:new IWRect(-1,68,2,3),url:'Sub-Factory_files/stroke_7.png'}],new IWSize(234,70)),shadow_0:new IWShadow({blurRadius:3,offset:new IWPoint(0.7071,0.7071),color:'#62a431',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Sub-Factory_files/Sub-FactoryMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id3()}
function onPageUnload()
{Widget.onunload();}
