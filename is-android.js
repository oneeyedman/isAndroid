'use strict';
var userAgent = navigator.userAgent || navigator.vendor || window.opera;

function isAndroid() {
  return userAgent.match( /Android/i ); 
}

device.innerHTML = isAndroid() ? "Soy un Android" : "Soy otro dispositivo"

deviceBoolean.innerHTML = isAndroid() ? 'True':'False';
navigatorInfo.innerHTML = userAgent;
