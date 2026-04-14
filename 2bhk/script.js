(function(){
    var script = {
 "paddingTop": 0,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "children": [
  "this.MainViewer"
 ],
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "contentOpaque": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "width": "100%",
 "scrollBarMargin": 2,
 "scripts": {
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; }
 },
 "downloadEnabled": false,
 "minWidth": 20,
 "borderSize": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "height": "100%",
 "propagateClick": false,
 "paddingRight": 0,
 "start": "this.init()",
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "definitions": [{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -110.54,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -63.63,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E37E984_8D66_1F47_41CD_124D3418D147",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -114.56,
  "pitch": 1.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 78.88,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CE64B27_8D66_1341_41D5_CA8E9BBC7E7E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -27.22,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E6138DB_8D66_1EC0_419C_36BD15AAE862",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -153.75,
  "pitch": 1.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -39.83,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EF549F9_8D66_1EC1_41D3_2D8313497013",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "BEDROOM02_Level01",
 "id": "panorama_83C9D297_88E2_D125_419B_85DAC18B5C55",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9CF912F9_88E3_D6EA_41D2_F00EF68CBCDC",
  "this.overlay_9AAD3042_8921_F11F_41D1_BF015480346F"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A",
   "yaw": -148.99,
   "backwardYaw": 34.43,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C",
   "yaw": -134.53,
   "backwardYaw": 115.62,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_84695B9B_88E6_772D_41DB_46C422469E7D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -145.55,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F09E7A8_8D66_1340_41D3_17336B2FBFF6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 30.26,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EDB3A21_8D66_1D41_41C0_89EFCEBE041F",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "LIVING_POINT01_LEVEL04",
 "id": "panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_94757AF6_8923_D6E7_41DC_CE92C158FA7E",
  "this.overlay_94227EA8_8922_516A_41D9_D1C267A41B9A",
  "this.overlay_94E15E62_8922_D11F_41D7_4CA8BE4850B0",
  "this.overlay_94F7F112_8921_F33F_41C4_69123B2B1E6D",
  "this.overlay_9DA4225B_8D62_2DC1_41E1_66A2187DFF2C"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4",
   "yaw": 152.78,
   "backwardYaw": 29.93,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_85975DC8_88E2_732B_41D8_B631DD586C13",
   "yaw": -101.37,
   "backwardYaw": -142.32,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_85E77103_88E1_D31D_41D2_8FC99A55460D",
   "yaw": -91.33,
   "backwardYaw": 9.18,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8",
   "yaw": -66.84,
   "backwardYaw": 140.8,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_824648BF_88E2_F165_41CD_047057173D19",
   "yaw": 116.37,
   "backwardYaw": -135.79,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "hfovMax": 140,
 "label": "LIVING_POINT01_LEVEL03",
 "id": "panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_91FFEFA9_8922_2F6D_41D4_10A0C82CF878",
  "this.overlay_91661946_8923_F327_41C8_07850008C557",
  "this.overlay_90AD7947_8922_D325_418F_903C80BA75D8",
  "this.overlay_902034FA_8927_D2EF_41DC_C613C5A8DE0E",
  "this.overlay_82B633C2_8D62_12C3_41C8_8A371CE6B974"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3",
   "yaw": 152.78,
   "backwardYaw": 31.69,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_8246517E_88E2_F3E7_41DE_F647F604E287",
   "yaw": 116.58,
   "backwardYaw": -136.04,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_85A01E8B_88E2_512D_41DB_302E7788D42C",
   "yaw": -101.12,
   "backwardYaw": -144.33,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2",
   "yaw": -90.95,
   "backwardYaw": 10.18,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_827140BC_88E2_316B_41DD_F0D1AC94B841",
   "yaw": -66.21,
   "backwardYaw": 139.29,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 35.67,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FA25853_8D66_1DC0_41E0_3CB9CDEC1297",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "KITCHE_2bhk",
 "id": "panorama_85975DC8_88E2_732B_41D8_B631DD586C13",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_97F684EF_8926_32E6_41A8_E150A5729F01"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C",
   "yaw": -142.32,
   "backwardYaw": -101.37,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "hfovMax": 140,
 "label": "bedroom01 _level 01",
 "id": "panorama_821AC157_88E2_D325_41CB_AF916890672B",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_99A65FAA_88E6_6F6F_41AD_0D934063B52D"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C",
   "yaw": 140.17,
   "backwardYaw": -68.46,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -21.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F3BC796_8D66_1340_41D9_ED45C80C2888",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "BEDROOM02_Level03",
 "id": "panorama_8246517E_88E2_F3E7_41DE_F647F604E287",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9286AB49_8922_572D_41D0_9F4D718C0F92",
  "this.overlay_928AD625_8923_F165_41DC_92548794145E"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4",
   "yaw": -136.04,
   "backwardYaw": 116.58,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411",
   "yaw": -149.61,
   "backwardYaw": 35.05,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8355E567_88E6_53E5_41AE_C472759F9153_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "bedroom01 _level 04",
 "id": "panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_969E0547_8926_5325_41D9_0201DABDBB7B"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C",
   "yaw": 140.8,
   "backwardYaw": -66.84,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 89.05,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E41791D_8D66_1F41_41DF_6959554B1441",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "2bhk_toilet_master",
 "id": "panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_A9A21821_8922_511D_41D0_6C4134D1628C"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_824648BF_88E2_F165_41CD_047057173D19",
   "yaw": 35.3,
   "backwardYaw": -149.24,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_85975DC8_88E2_732B_41D8_B631DD586C13_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -169.82,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FB2A871_8D66_1DC1_41C5_60A6E2A0D98F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 53.76,
  "pitch": 0.25
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 55.27,
  "pitch": 1.26
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_824648BF_88E2_F165_41CD_047057173D19_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -27.22,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F67D735_8D66_1341_4191_A1BD7728C476",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -144.95,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EB8AA4B_8D66_1DC1_41D6_ECE444B88017",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 111.54,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C86D70B_8D66_1340_41D4_AD6BEDB71A9D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 113.16,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CFC0B38_8D66_134F_41D3_4FF6BF11DD21",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -169.32,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FEF77CF_8D66_12C1_41C7_5BDAF60D595C",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_8355E567_88E6_53E5_41AE_C472759F9153",
   "camera": "this.panorama_8355E567_88E6_53E5_41AE_C472759F9153_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C",
   "camera": "this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6",
   "camera": "this.panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6",
   "camera": "this.panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_821AC157_88E2_D325_41CB_AF916890672B",
   "camera": "this.panorama_821AC157_88E2_D325_41CB_AF916890672B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A",
   "camera": "this.panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_83C9D297_88E2_D125_419B_85DAC18B5C55",
   "camera": "this.panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575",
   "camera": "this.panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7",
   "camera": "this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_85C23300_88E6_571B_41CB_310F22C0B61F",
   "camera": "this.panorama_85C23300_88E6_571B_41CB_310F22C0B61F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52",
   "camera": "this.panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF",
   "camera": "this.panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9",
   "camera": "this.panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_84695B9B_88E6_772D_41DB_46C422469E7D",
   "camera": "this.panorama_84695B9B_88E6_772D_41DB_46C422469E7D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3",
   "camera": "this.panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4",
   "camera": "this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_85A01E8B_88E2_512D_41DB_302E7788D42C",
   "camera": "this.panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2",
   "camera": "this.panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_827140BC_88E2_316B_41DD_F0D1AC94B841",
   "camera": "this.panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8246517E_88E2_F3E7_41DE_F647F604E287",
   "camera": "this.panorama_8246517E_88E2_F3E7_41DE_F647F604E287_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411",
   "camera": "this.panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4",
   "camera": "this.panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C",
   "camera": "this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_85975DC8_88E2_732B_41D8_B631DD586C13",
   "camera": "this.panorama_85975DC8_88E2_732B_41D8_B631DD586C13_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_85E77103_88E1_D31D_41D2_8FC99A55460D",
   "camera": "this.panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8",
   "camera": "this.panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_824648BF_88E2_F165_41CD_047057173D19",
   "camera": "this.panorama_824648BF_88E2_F165_41CD_047057173D19_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 79.64,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CA3C6E8_8D66_12CF_41BC_AE0FE240D5BB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 46.48,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FFF77E3_8D66_12C0_41DF_5BB22C2C6195",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "2bhk_toilet_master",
 "id": "panorama_84695B9B_88E6_772D_41DB_46C422469E7D",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9EB0CED3_8921_F13D_41B6_0097B822B8D6"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9",
   "yaw": 35.68,
   "backwardYaw": -149.74,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "2bhk_toilet_master",
 "id": "panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9A101A04_88E2_311B_41BF_0FDCE837B703"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_83C9D297_88E2_D125_419B_85DAC18B5C55",
   "yaw": 34.43,
   "backwardYaw": -148.99,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 113.79,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C97F722_8D66_1340_41B0_5A5605775831",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 36.55,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F1987BB_8D66_1341_41D2_FDF9F309A3FA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -40.71,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F807895_8D66_1D40_41D5_FD6449586274",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -53.01,
  "pitch": -1.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 30.76,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E56A942_8D66_1FC3_41C5_33BE4C7E56FE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -115.06,
  "pitch": -6.53
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "living_2nd_point_ level03",
 "id": "panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9E93AD0C_893E_332B_41DA_7DF57DF69897"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4",
   "yaw": 31.69,
   "backwardYaw": 152.78,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -63.42,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EA8AA34_8D66_1D40_41C4_D76345B8DFA3",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "BEDROOM02_Level04",
 "id": "panorama_824648BF_88E2_F165_41CD_047057173D19",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_A9F28981_8926_531D_41DF_E31C52559706",
  "this.overlay_A808E44D_8922_5125_41BF_B2672B95E794"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3",
   "yaw": -149.24,
   "backwardYaw": 35.3,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C",
   "yaw": -135.79,
   "backwardYaw": 116.37,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -169.57,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EE5A9E3_8D66_1EC1_41C5_F130769EBEBF",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 43.96,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FAD7830_8D66_1D40_41DE_CD59BA922015",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -117.57,
  "pitch": -4.02
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 90.43,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F75B749_8D66_13C1_41D2_C0AD8F2D4157",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -170.82,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_99695A8F_8D66_1D41_41B8_0AC1F65DA8DD",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 45.47,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E07C9A9_8D66_1F41_41BA_EB58362F0D70",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -52.76,
  "pitch": 0.75
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -116.06,
  "pitch": 0.25
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "living_2nd_point_ level01",
 "id": "panorama_8355E567_88E6_53E5_41AE_C472759F9153",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_86CB2125_88EE_5365_41DE_23ED06E0DE67"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C",
   "yaw": 31.83,
   "backwardYaw": 158.3,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "2bhk_toilet_master",
 "id": "panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_92EE5F70_8922_EFFB_41BC_39E3177080F2"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_8246517E_88E2_F3E7_41DE_F647F604E287",
   "yaw": 35.05,
   "backwardYaw": -149.61,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "bedroom01 _level 02",
 "id": "panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9FF7BDF1_8926_D2FD_41DE_134CEEDCDFF9"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -64.38,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F5BB76E_8D66_13C0_41B5_24C0988E4876",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -39.2,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CEC7AFD_8D66_12BD_41C9_AE9990AAA730",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 30.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E7178F9_8D66_1EC1_41C4_C0C62CC5B98B",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "2bhk_toilet_common",
 "id": "panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_90A984BD_8921_D165_41D9_3CED09F96BDB"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4",
   "yaw": 10.18,
   "backwardYaw": -90.95,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "hfovMax": 140,
 "label": "2bhk_toilet_common",
 "id": "panorama_85E77103_88E1_D31D_41D2_8FC99A55460D",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_977577E4_8927_DF1B_41D3_19605C64DCF9"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C",
   "yaw": 9.18,
   "backwardYaw": -91.33,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "hfovMax": 140,
 "label": "living_2nd_point_ level04",
 "id": "panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_92EE59F4_892E_52E4_41D9_FC186BFAA42D"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C",
   "yaw": 29.93,
   "backwardYaw": 152.78,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "hfovMax": 140,
 "label": "living_2nd_point_ level02",
 "id": "panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9D215958_892E_532B_41D8_176C9BAD6C02"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7",
   "yaw": 34.45,
   "backwardYaw": 153.78,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "hfovMax": 140,
 "label": "2bhk_toilet_common",
 "id": "panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9988F439_88E6_F16D_41BF_77A51245913C"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C",
   "yaw": 10.43,
   "backwardYaw": -89.57,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -52.25,
  "pitch": -0.25
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "BEDROOM02_Level02",
 "id": "panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_91564039_8926_316D_41AD_DBACC2A191FA",
  "this.overlay_9FFB0272_8926_31FF_41BD_8AE6294068FE"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7",
   "yaw": -133.52,
   "backwardYaw": 115.34,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_84695B9B_88E6_772D_41DB_46C422469E7D",
   "yaw": -149.74,
   "backwardYaw": 35.68,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 89.42,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CC9A6AA_8D66_1543_41D2_92C704C83957",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_85C23300_88E6_571B_41CB_310F22C0B61F_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -148.31,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FDCF809_8D66_1D41_41B6_87441EBD6A4C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 31.01,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F9388B9_8D66_1D41_41BF_2C9C413B57B0",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "bedroom01 _level 03",
 "id": "panorama_827140BC_88E2_316B_41DD_F0D1AC94B841",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_93D8A2BB_8922_716D_41D3_7076269AB915"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4",
   "yaw": 139.29,
   "backwardYaw": -66.21,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 55.27,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "LIVING_POINT01_LEVEL01",
 "id": "panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_98A4C852_88E2_F13F_41DE_FD3BF5938B18",
  "this.overlay_98E52AA9_88E2_516D_41DE_D78E08C39678",
  "this.overlay_9814CC9B_88E2_F12E_41CA_E4792D1972B4",
  "this.overlay_9A5634BF_8921_D165_41D2_F60A0F1292EA",
  "this.overlay_80E0DE5C_8D66_15C7_41D2_DEEF8D1FF39B"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_83C9D297_88E2_D125_419B_85DAC18B5C55",
   "yaw": 115.62,
   "backwardYaw": -134.53,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6",
   "yaw": -100.36,
   "backwardYaw": -138.8,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6",
   "yaw": -89.57,
   "backwardYaw": 10.43,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_821AC157_88E2_D325_41CB_AF916890672B",
   "yaw": -68.46,
   "backwardYaw": 140.17,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_8355E567_88E6_53E5_41AE_C472759F9153",
   "yaw": 158.3,
   "backwardYaw": 31.83,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 44.21,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CE81B14_8D66_1347_41D7_A8C31EFCF1E5",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 78.63,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FCC87F7_8D66_12C1_41E1_382F4737DA10",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "2bhk_toilet_common",
 "id": "panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9FBADA94_8926_313B_41B6_4DA248AE2925"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7",
   "yaw": 10.68,
   "backwardYaw": -90.58,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -148.17,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9ECB2A0B_8D66_1D41_41DC_B25987A7ECA4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -145.57,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F4A275A_8D66_13C3_41E1_3B5E0CA832F2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_camera",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "KITCHE_2bhk",
 "id": "panorama_85C23300_88E6_571B_41CB_310F22C0B61F",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9C51A415_8922_7125_41A2_7BF895D2275B"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7",
   "yaw": -143.45,
   "backwardYaw": -100.36,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -26.22,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CF82697_8D66_1541_41D2_F4D39D1FC04A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 37.68,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E998A7A_8D66_1DC3_41D3_D6DAA82D6FA7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -64.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CDC46C0_8D66_153F_41DB_4379CAC36295",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -150.07,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E883A69_8D66_1DC1_41DA_F94E92B07835",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 41.2,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E1549CE_8D66_1EC3_41C4_1330A62818CE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -52.51,
  "pitch": 2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_821AC157_88E2_D325_41CB_AF916890672B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 88.67,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CB0E6FB_8D66_12C1_41D7_C2E19A98F51C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -144.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E26A95F_8D66_1FC1_41D3_E1C4C6C4F8DB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 79.64,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F2BF783_8D66_1341_41D4_8C3468C182AD",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "KITCHE_2bhk",
 "id": "panorama_85A01E8B_88E2_512D_41DB_302E7788D42C",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9353B239_8926_D16D_41C2_11C02EC0D27B"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4",
   "yaw": -144.33,
   "backwardYaw": -101.12,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "hfovMax": 140,
 "label": "KITCHE_2bhk",
 "id": "panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9ABC2900_88E1_D31A_41DA_1B8C81FF1752"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C",
   "yaw": -138.8,
   "backwardYaw": -100.36,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": 53.51,
  "pitch": -0.25
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8246517E_88E2_F3E7_41DE_F647F604E287_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -144.32,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CAD06D2_8D66_12C3_41DB_6D9C9D0DCC76",
 "class": "PanoramaCamera"
},
{
 "hfovMax": 140,
 "label": "LIVING_POINT01_LEVEL02",
 "id": "panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_t.jpg",
 "partial": false,
 "overlays": [
  "this.overlay_9D9494A7_892E_F165_41D6_E96FB39951A7",
  "this.overlay_9C010B4D_8922_5725_41E0_92509F7105D3",
  "this.overlay_9C4FDEDA_8922_712F_41DA_42F16AA7341B",
  "this.overlay_9CD5E883_8922_D11D_41BD_BC9C0BBD7355",
  "this.overlay_82369706_8D6E_1343_41DC_FDB3ECB37A66"
 ],
 "hfov": 360,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "hfovMin": "135%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575",
   "yaw": 153.78,
   "backwardYaw": 34.45,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_85C23300_88E6_571B_41CB_310F22C0B61F",
   "yaw": -100.36,
   "backwardYaw": -143.45,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52",
   "yaw": -90.58,
   "backwardYaw": 10.68,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9",
   "yaw": 115.34,
   "backwardYaw": -133.52,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_827140BC_88E2_316B_41DD_F0D1AC94B841",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180
},
{
 "initialPosition": {
  "hfov": 140,
  "class": "PanoramaCameraPosition",
  "yaw": -111.54,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 295,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 32.5,
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_camera",
 "class": "PanoramaCamera"
},
{
 "playbackBarOpacity": 1,
 "id": "MainViewer",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "width": "100%",
 "progressBorderSize": 0,
 "minHeight": 50,
 "toolTipBorderSize": 1,
 "transitionMode": "blending",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "toolTipPaddingLeft": 6,
 "borderSize": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "height": "100%",
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipFontColor": "#606060"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C, this.camera_9F5BB76E_8D66_13C0_41B5_24C0988E4876); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9EC0FC28_88DE_316B_41D6_D382851B9739",
   "pitch": -24.56,
   "yaw": -134.53,
   "hfov": 6.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9CF912F9_88E3_D6EA_41D2_F00EF68CBCDC",
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -134.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.56
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A, this.camera_9F4A275A_8D66_13C3_41E1_3B5E0CA832F2); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0_HS_1_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07,
   "yaw": -148.99
  }
 ],
 "id": "overlay_9AAD3042_8921_F11F_41D1_BF015480346F",
 "maps": [
  {
   "hfov": 10.25,
   "yaw": -148.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85E77103_88E1_D31D_41D2_8FC99A55460D, this.camera_99695A8F_8D66_1D41_41B8_0AC1F65DA8DD); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_0_0.png",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.56,
   "yaw": -91.33
  }
 ],
 "id": "overlay_94757AF6_8923_D6E7_41DC_CE92C158FA7E",
 "maps": [
  {
   "hfov": 9.51,
   "yaw": -91.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.56
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85975DC8_88E2_732B_41D8_B631DD586C13, this.camera_9E998A7A_8D66_1DC3_41D3_D6DAA82D6FA7); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86746E64_8B81_2BAF_419E_E21A4CB8CEF4",
   "pitch": -13.5,
   "yaw": -101.37,
   "hfov": 7.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_94227EA8_8922_516A_41D9_D1C267A41B9A",
 "maps": [
  {
   "hfov": 7.33,
   "yaw": -101.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.5
  }
 ],
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8, this.camera_9CEC7AFD_8D66_12BD_41C9_AE9990AAA730); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_2_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.21,
   "yaw": -66.84
  }
 ],
 "id": "overlay_94E15E62_8922_D11F_41D7_4CA8BE4850B0",
 "maps": [
  {
   "hfov": 9.22,
   "yaw": -66.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.21
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4, this.camera_9E883A69_8D66_1DC1_41DA_F94E92B07835); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8675CE64_8B81_2BAF_41DD_18FD3949C8E8",
   "pitch": -37.71,
   "yaw": 152.78,
   "hfov": 10.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94F7F112_8921_F33F_41C4_69123B2B1E6D",
 "maps": [
  {
   "hfov": 10.99,
   "yaw": 152.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.71
  }
 ],
 "data": {
  "label": "Circle 01a"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_824648BF_88E2_F165_41CD_047057173D19, this.camera_9CE81B14_8D66_1347_41D7_A8C31EFCF1E5); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_4_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95,
   "yaw": 116.37
  }
 ],
 "id": "overlay_9DA4225B_8D62_2DC1_41E1_66A2187DFF2C",
 "maps": [
  {
   "hfov": 10.24,
   "yaw": 116.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85A01E8B_88E2_512D_41DB_302E7788D42C, this.camera_9FA25853_8D66_1DC0_41E0_3CB9CDEC1297); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8679AE64_8B81_2BAF_41B2_F70259E46628",
   "pitch": -3.96,
   "yaw": -101.12,
   "hfov": 7.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_91FFEFA9_8922_2F6D_41D4_10A0C82CF878",
 "maps": [
  {
   "hfov": 7.52,
   "yaw": -101.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96
  }
 ],
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2, this.camera_9FB2A871_8D66_1DC1_41C5_60A6E2A0D98F); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_1_0.png",
      "width": 160,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.7,
   "yaw": -90.95
  }
 ],
 "id": "overlay_91661946_8923_F327_41C8_07850008C557",
 "maps": [
  {
   "hfov": 8.24,
   "yaw": -90.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.7
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_827140BC_88E2_316B_41DD_F0D1AC94B841, this.camera_9F807895_8D66_1D40_41D5_FD6449586274); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_2_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82,
   "yaw": -66.21
  }
 ],
 "id": "overlay_90AD7947_8922_D325_418F_903C80BA75D8",
 "maps": [
  {
   "hfov": 8.99,
   "yaw": -66.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3, this.camera_9FDCF809_8D66_1D41_41B6_87441EBD6A4C); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86796E64_8B81_2BAF_41D8_D853DA9AB978",
   "pitch": -35.7,
   "yaw": 152.78,
   "hfov": 11.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_902034FA_8927_D2EF_41DC_C613C5A8DE0E",
 "maps": [
  {
   "hfov": 11.28,
   "yaw": 152.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.7
  }
 ],
 "data": {
  "label": "Circle 01a"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8246517E_88E2_F3E7_41DE_F647F604E287, this.camera_9FAD7830_8D66_1D40_41DE_CD59BA922015); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_4_0.png",
      "width": 248,
      "class": "ImageResourceLevel",
      "height": 226
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.34,
   "yaw": 116.58
  }
 ],
 "id": "overlay_82B633C2_8D62_12C3_41C8_8A371CE6B974",
 "maps": [
  {
   "hfov": 12.71,
   "yaw": 116.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.34
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C, this.camera_9FCC87F7_8D66_12C1_41E1_382F4737DA10); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86751E64_8B81_2BAF_41B7_33430CCF08BD",
   "pitch": -25.69,
   "yaw": -142.32,
   "hfov": 10.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_97F684EF_8926_32E6_41A8_E150A5729F01",
 "maps": [
  {
   "hfov": 10.41,
   "yaw": -142.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.69
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C, this.camera_9C86D70B_8D66_1340_41D4_AD6BEDB71A9D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_1_HS_0_0.png",
      "width": 190,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.95,
   "yaw": 140.17
  }
 ],
 "id": "overlay_99A65FAA_88E6_6F6F_41AD_0D934063B52D",
 "maps": [
  {
   "hfov": 9.75,
   "yaw": 140.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_821AC157_88E2_D325_41CB_AF916890672B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.95
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4, this.camera_9EA8AA34_8D66_1D40_41C4_D76345B8DFA3); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_867BAE64_8B81_2BAF_41D9_123CE89681E7",
   "pitch": -26.82,
   "yaw": -136.04,
   "hfov": 6.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9286AB49_8922_572D_41D0_9F4D718C0F92",
 "maps": [
  {
   "hfov": 6.73,
   "yaw": -136.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.82
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411, this.camera_9EB8AA4B_8D66_1DC1_41D6_ECE444B88017); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0_HS_1_0.png",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.7,
   "yaw": -149.61
  }
 ],
 "id": "overlay_928AD625_8923_F165_41DC_92548794145E",
 "maps": [
  {
   "hfov": 9.99,
   "yaw": -149.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.7
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C, this.camera_9CFC0B38_8D66_134F_41D3_4FF6BF11DD21); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0_HS_0_0.png",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2,
   "yaw": 140.8
  }
 ],
 "id": "overlay_969E0547_8926_5325_41D9_0201DABDBB7B",
 "maps": [
  {
   "hfov": 9.5,
   "yaw": 140.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_82715805_88E2_311A_41A4_6A9E62B5FEC8_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_824648BF_88E2_F165_41CD_047057173D19, this.camera_9E56A942_8D66_1FC3_41C5_33BE4C7E56FE); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0_HS_0_0.png",
      "width": 201,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95,
   "yaw": 35.3
  }
 ],
 "id": "overlay_A9A21821_8922_511D_41D0_6C4134D1628C",
 "maps": [
  {
   "hfov": 12.07,
   "yaw": 35.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9, this.camera_9EDB3A21_8D66_1D41_41C0_89EFCEBE041F); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0_HS_0_0.png",
      "width": 238,
      "class": "ImageResourceLevel",
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.81,
   "yaw": 35.68
  }
 ],
 "id": "overlay_9EB0CED3_8921_F13D_41B6_0097B822B8D6",
 "maps": [
  {
   "hfov": 14.33,
   "yaw": 35.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_84695B9B_88E6_772D_41DB_46C422469E7D_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.81
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83C9D297_88E2_D125_419B_85DAC18B5C55, this.camera_9F9388B9_8D66_1D41_41BF_2C9C413B57B0); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_1_HS_0_0.png",
      "width": 238,
      "class": "ImageResourceLevel",
      "height": 234
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.71,
   "yaw": 34.43
  }
 ],
 "id": "overlay_9A101A04_88E2_311B_41BF_0FDCE837B703",
 "maps": [
  {
   "hfov": 14.32,
   "yaw": 34.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_827EFDA9_88E2_736D_41DF_D047D4A0664A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.71
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4, this.camera_9E6138DB_8D66_1EC0_419C_36BD15AAE862); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8678FE64_8B81_2BAF_41E0_5EF029B99DB7",
   "pitch": -37.71,
   "yaw": 31.69,
   "hfov": 10.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E93AD0C_893E_332B_41DA_7DF57DF69897",
 "maps": [
  {
   "hfov": 10.99,
   "yaw": 31.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.71
  }
 ],
 "data": {
  "label": "Circle 01a"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C, this.camera_9E37E984_8D66_1F47_41CD_124D3418D147); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86761E64_8B81_2BAF_41AC_0394E5599F2F",
   "pitch": -28.83,
   "yaw": -135.79,
   "hfov": 8.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A9F28981_8926_531D_41DF_E31C52559706",
 "maps": [
  {
   "hfov": 8.36,
   "yaw": -135.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.83
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8477476E_88E1_DFE6_41C0_5721E39FE5E3, this.camera_9E26A95F_8D66_1FC1_41D3_E1C4C6C4F8DB); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0_HS_1_0.png",
      "width": 190,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33,
   "yaw": -149.24
  }
 ],
 "id": "overlay_A808E44D_8922_5125_41BF_B2672B95E794",
 "maps": [
  {
   "hfov": 9.73,
   "yaw": -149.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.33
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C, this.camera_9F3BC796_8D66_1340_41D9_ED45C80C2888); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9EC49C20_88DE_311B_41CE_8FBCEBD31B32",
   "pitch": -33.6,
   "yaw": 31.83,
   "hfov": 14.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_86CB2125_88EE_5365_41DE_23ED06E0DE67",
 "maps": [
  {
   "hfov": 14.74,
   "yaw": 31.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.6
  }
 ],
 "data": {
  "label": "Circle 02b"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8246517E_88E2_F3E7_41DE_F647F604E287, this.camera_9E7178F9_8D66_1EC1_41C4_C0C62CC5B98B); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.2,
   "yaw": 35.05
  }
 ],
 "id": "overlay_92EE5F70_8922_EFFB_41BC_39E3177080F2",
 "maps": [
  {
   "hfov": 14.08,
   "yaw": 35.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_847BB7A3_88E3_FF1D_41D2_C7C7A6EF6411_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.2
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0_HS_0_0.png",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.44,
   "yaw": 140.04
  }
 ],
 "id": "overlay_9FF7BDF1_8926_D2FD_41DE_134CEEDCDFF9",
 "maps": [
  {
   "hfov": 10.02,
   "yaw": 140.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_82720909_88E2_D32D_41D3_E6A1DE0979CF_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.44
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4, this.camera_9E41791D_8D66_1F41_41DF_6959554B1441); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0_HS_0_0.png",
      "width": 243,
      "class": "ImageResourceLevel",
      "height": 209
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.46,
   "yaw": 10.18
  }
 ],
 "id": "overlay_90A984BD_8921_D165_41D9_3CED09F96BDB",
 "maps": [
  {
   "hfov": 14.56,
   "yaw": 10.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_85BA20FE_88E3_F2E6_41CC_E3DFA6B709B2_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.46
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C, this.camera_9CB0E6FB_8D66_12C1_41D7_C2E19A98F51C); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.09,
   "yaw": 9.18
  }
 ],
 "id": "overlay_977577E4_8927_DF1B_41D3_19605C64DCF9",
 "maps": [
  {
   "hfov": 14.06,
   "yaw": 9.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_85E77103_88E1_D31D_41D2_8FC99A55460D_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.09
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C, this.camera_9F67D735_8D66_1341_4191_A1BD7728C476); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_867B7E64_8B81_2BAF_41D3_0CEA08F4B2BE",
   "pitch": -36.7,
   "yaw": 29.93,
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_92EE59F4_892E_52E4_41D9_FC186BFAA42D",
 "maps": [
  {
   "hfov": 11.13,
   "yaw": 29.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.7
  }
 ],
 "data": {
  "label": "Circle 01a"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7, this.camera_9CF82697_8D66_1541_41D2_F4D39D1FC04A); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_867DCE5D_8B81_2B99_41D5_37AAF12F4B85",
   "pitch": -37.96,
   "yaw": 34.45,
   "hfov": 10.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D215958_892E_532B_41D8_176C9BAD6C02",
 "maps": [
  {
   "hfov": 10.95,
   "yaw": 34.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.96
  }
 ],
 "data": {
  "label": "Circle 01a"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C, this.camera_9F75B749_8D66_13C1_41D2_C0AD8F2D4157); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_1_HS_0_0.png",
      "width": 226,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.45,
   "yaw": 10.43
  }
 ],
 "id": "overlay_9988F439_88E6_F16D_41BF_77A51245913C",
 "maps": [
  {
   "hfov": 13.58,
   "yaw": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.45
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7, this.camera_9CDC46C0_8D66_153F_41DB_4379CAC36295); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_867F0E64_8B81_2BAF_41A7_C58B1AE07DF9",
   "pitch": -27.07,
   "yaw": -133.52,
   "hfov": 8.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_91564039_8926_316D_41AD_DBACC2A191FA",
 "maps": [
  {
   "hfov": 8.05,
   "yaw": -133.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.07
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84695B9B_88E6_772D_41DB_46C422469E7D, this.camera_9CAD06D2_8D66_12C3_41DB_6D9C9D0DCC76); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0_HS_1_0.png",
      "width": 209,
      "class": "ImageResourceLevel",
      "height": 214
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.96,
   "yaw": -149.74
  }
 ],
 "id": "overlay_9FFB0272_8926_31FF_41BD_8AE6294068FE",
 "maps": [
  {
   "hfov": 10.72,
   "yaw": -149.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.96
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4, this.camera_9C97F722_8D66_1340_41B0_5A5605775831); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0_HS_0_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 190
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.81,
   "yaw": 139.29
  }
 ],
 "id": "overlay_93D8A2BB_8922_716D_41D3_7076269AB915",
 "maps": [
  {
   "hfov": 9.02,
   "yaw": 139.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_827140BC_88E2_316B_41DD_F0D1AC94B841_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.81
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6, this.camera_9E1549CE_8D66_1EC3_41C4_1330A62818CE); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9EC2FC27_88DE_3165_41A5_68A6BD085F68",
   "pitch": -1.7,
   "yaw": -100.36,
   "hfov": 7.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_98A4C852_88E2_F13F_41DE_FD3BF5938B18",
 "maps": [
  {
   "hfov": 7.53,
   "yaw": -100.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7
  }
 ],
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83C70709_88E2_7F2D_41C5_08FA64A8CFE6, this.camera_9EE5A9E3_8D66_1EC1_41C5_F130769EBEBF); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_1_HS_1_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.68,
   "yaw": -89.57
  }
 ],
 "id": "overlay_98E52AA9_88E2_516D_41DE_D78E08C39678",
 "maps": [
  {
   "hfov": 9.02,
   "yaw": -89.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.68
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_821AC157_88E2_D325_41CB_AF916890672B, this.camera_9EF549F9_8D66_1EC1_41D3_2D8313497013); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9EC37C27_88DE_3165_41C9_39331EA0D886",
   "pitch": -3.2,
   "yaw": -68.46,
   "hfov": 7.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9814CC9B_88E2_F12E_41CA_E4792D1972B4",
 "maps": [
  {
   "hfov": 7.52,
   "yaw": -68.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2
  }
 ],
 "data": {
  "label": "Arrow 01 Right"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8355E567_88E6_53E5_41AE_C472759F9153, this.camera_9ECB2A0B_8D66_1D41_41DC_B25987A7ECA4); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_86637E5D_8B81_2B99_41DA_505ED77DF5B0",
   "pitch": -42.73,
   "yaw": 158.3,
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A5634BF_8921_D165_41D2_F60A0F1292EA",
 "maps": [
  {
   "hfov": 10.2,
   "yaw": 158.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -42.73
  }
 ],
 "data": {
  "label": "Circle 01a"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83C9D297_88E2_D125_419B_85DAC18B5C55, this.camera_9E07C9A9_8D66_1F41_41BA_EB58362F0D70); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0_HS_4_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.75,
   "yaw": 115.62
  }
 ],
 "id": "overlay_80E0DE5C_8D66_15C7_41D2_DEEF8D1FF39B",
 "maps": [
  {
   "hfov": 10.24,
   "yaw": 115.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.75
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7, this.camera_9CC9A6AA_8D66_1543_41D2_92C704C83957); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0_HS_0_0.png",
      "width": 226,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.33,
   "yaw": 10.68
  }
 ],
 "id": "overlay_9FBADA94_8926_313B_41B6_4DA248AE2925",
 "maps": [
  {
   "hfov": 13.57,
   "yaw": 10.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.33
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7, this.camera_9CA3C6E8_8D66_12CF_41BC_AE0FE240D5BB); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_867E5E64_8B81_2BAF_41CC_4F5F40568922",
   "pitch": -26.69,
   "yaw": -143.45,
   "hfov": 10.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9C51A415_8922_7125_41A2_7BF895D2275B",
 "maps": [
  {
   "hfov": 10.1,
   "yaw": -143.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.69
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4, this.camera_9CE64B27_8D66_1341_41D5_CA8E9BBC7E7E); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_867A9E64_8B81_2BAF_41CD_8FBE37786CC5",
   "pitch": -29.83,
   "yaw": -144.33,
   "hfov": 6.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9353B239_8926_D16D_41C2_11C02EC0D27B",
 "maps": [
  {
   "hfov": 6.54,
   "yaw": -144.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.83
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C, this.camera_9F2BF783_8D66_1341_41D4_8C3468C182AD); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9EC33C27_88DE_3165_41BD_2BAE803F5150",
   "pitch": -12.5,
   "yaw": -138.8,
   "hfov": 7.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9ABC2900_88E1_D31A_41DA_1B8C81FF1752",
 "maps": [
  {
   "hfov": 7.36,
   "yaw": -138.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.5
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575, this.camera_9F09E7A8_8D66_1340_41D3_17336B2FBFF6); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_867D7E5D_8B81_2B99_41DE_4E3960FC3B6E",
   "pitch": -36.45,
   "yaw": 153.78,
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D9494A7_892E_F165_41D6_E96FB39951A7",
 "maps": [
  {
   "hfov": 11.17,
   "yaw": 153.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.45
  }
 ],
 "data": {
  "label": "Circle 01a"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_845A152E_88E6_7367_41BA_37CBCF3B5E52, this.camera_9FEF77CF_8D66_12C1_41C7_5BDAF60D595C); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_1_0.png",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.56,
   "yaw": -90.58
  }
 ],
 "id": "overlay_9C010B4D_8922_5725_41E0_92509F7105D3",
 "maps": [
  {
   "hfov": 9.51,
   "yaw": -90.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.56
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_2_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.57,
   "yaw": -65.58
  }
 ],
 "id": "overlay_9C4FDEDA_8922_712F_41DA_42F16AA7341B",
 "maps": [
  {
   "hfov": 7.74,
   "yaw": -65.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.57
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_85C23300_88E6_571B_41CB_310F22C0B61F, this.camera_9F1987BB_8D66_1341_41D2_FDF9F309A3FA); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_867E3E64_8B81_2BAF_41D1_7E5B4EE78356",
   "pitch": -4.71,
   "yaw": -100.36,
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9CD5E883_8922_D11D_41BD_BC9C0BBD7355",
 "maps": [
  {
   "hfov": 7.51,
   "yaw": -100.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71
  }
 ],
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9, this.camera_9FFF77E3_8D66_12C0_41DF_5BB22C2C6195); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_4_0.png",
      "width": 264,
      "class": "ImageResourceLevel",
      "height": 237
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.79,
   "yaw": 115.34
  }
 ],
 "id": "overlay_82369706_8D6E_1343_41DC_FDB3ECB37A66",
 "maps": [
  {
   "hfov": 13.54,
   "yaw": 115.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.79
  }
 ],
 "data": {
  "label": "Image"
 }
},
{
 "id": "AnimatedImageResource_9EC0FC28_88DE_316B_41D6_D382851B9739",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_83C9D297_88E2_D125_419B_85DAC18B5C55_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_86746E64_8B81_2BAF_419E_E21A4CB8CEF4",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_8675CE64_8B81_2BAF_41DD_18FD3949C8E8",
 "frameCount": 20,
 "colCount": 4,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_829FB07D_88E2_31E5_41B5_FE12C9C3605C_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "id": "AnimatedImageResource_8679AE64_8B81_2BAF_41B2_F70259E46628",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_86796E64_8B81_2BAF_41D8_D853DA9AB978",
 "frameCount": 20,
 "colCount": 4,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_829F5939_88E1_D36A_41DB_03BAD7C3D9E4_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "id": "AnimatedImageResource_86751E64_8B81_2BAF_41B7_33430CCF08BD",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_85975DC8_88E2_732B_41D8_B631DD586C13_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_867BAE64_8B81_2BAF_41D9_123CE89681E7",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8246517E_88E2_F3E7_41DE_F647F604E287_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_8678FE64_8B81_2BAF_41E0_5EF029B99DB7",
 "frameCount": 20,
 "colCount": 4,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_827AA412_88E6_713F_41D8_F7FBB9F727B3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "id": "AnimatedImageResource_86761E64_8B81_2BAF_41AC_0394E5599F2F",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_824648BF_88E2_F165_41CD_047057173D19_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_9EC49C20_88DE_311B_41CE_8FBCEBD31B32",
 "frameCount": 24,
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8355E567_88E6_53E5_41AE_C472759F9153_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "id": "AnimatedImageResource_867B7E64_8B81_2BAF_41D3_0CEA08F4B2BE",
 "frameCount": 20,
 "colCount": 4,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_827A9B38_88E6_776B_41A3_64B255E2D8E4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "id": "AnimatedImageResource_867DCE5D_8B81_2B99_41D5_37AAF12F4B85",
 "frameCount": 20,
 "colCount": 4,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8279DCD0_88E6_513B_41DB_FE703CAC0575_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "id": "AnimatedImageResource_867F0E64_8B81_2BAF_41A7_C58B1AE07DF9",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_8240CA39_88E2_D16A_41E0_343B0D80E2B9_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_9EC2FC27_88DE_3165_41A5_68A6BD085F68",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_9EC37C27_88DE_3165_41C9_39331EA0D886",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_1_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_86637E5D_8B81_2B99_41DA_505ED77DF5B0",
 "frameCount": 20,
 "colCount": 4,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_835484D1_88E1_F13A_41DE_CCC23C7ACA4C_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "id": "AnimatedImageResource_867E5E64_8B81_2BAF_41CC_4F5F40568922",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_85C23300_88E6_571B_41CB_310F22C0B61F_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_867A9E64_8B81_2BAF_41CD_8FBE37786CC5",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_85A01E8B_88E2_512D_41DB_302E7788D42C_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_9EC33C27_88DE_3165_41BD_2BAE803F5150",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_83FA6C96_88E2_7127_41C6_F2158F633FD6_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "id": "AnimatedImageResource_867D7E5D_8B81_2B99_41DE_4E3960FC3B6E",
 "frameCount": 20,
 "colCount": 4,
 "rowCount": 5,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "id": "AnimatedImageResource_867E3E64_8B81_2BAF_41D1_7E5B4EE78356",
 "frameCount": 9,
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_828FC1FE_88E1_D2E7_41D7_B694D86E9FE7_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
}],
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "mouseWheelEnabled": true,
 "gap": 10,
 "data": {
  "name": "Player486"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
