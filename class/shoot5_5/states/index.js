//import Phaser from "phaser";
import Boot from "./boot";
import Preload from "./preload";
import Menu from "./menu";
import Play from "./play";

var gameBestWidth = 800;
var gameBestHeight = 600;

/*
var gameBestRatio = gameBestWidth / gameBestHeight;
// Get viewport ratio.
var viewport_w = window.innerWidth;
var viewport_h = window.innerHeight;
var viewportRatio = viewport_w / viewport_h;
var content = document.getElementById("content");
if(gameBestRatio > viewportRatio){
    // take viewport height as base value
    content.style.width  = viewport_w + "px";
    content.style.height = (viewport_w / gameBestRatio) + "px";
} else if(gameBestRatio < viewportRatio){
    // take viewport width as base value
    content.style.height = viewport_h + "px";
    content.style.width  = (viewport_h * gameBestRatio) + "px";
} 
*/
//-----------------------------------------------------------

/*
var game;
var flage;
goPC();
function goPC(){
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	flage = true;

	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0){ 
			flage = false;
			break; 
		}
	}
  return flage;
}
if(flage){
  game = new Phaser.Game(800,592,Phaser.AUTO,'content');
}else{
  game = new Phaser.Game(Math.floor(window.innerWidth/16)*16,Math.floor(window.innerHeight/16)*16,Phaser.AUTO,'content');
}
*/
//----------------------------------------------------------------

/*
isLandscape, 
onOrientationChange()
screenOrientation
setResizeCallback()
setUserScale()
*/

//var gameBestRatio = gameBestWidth / gameBestHeight;
/*
var viewport_w = window.innerWidth;
var viewport_h = window.innerHeight;
var viewportRatio = viewport_w / viewport_h;

var content = document.getElementById("content");

if(gameBestRatio > viewportRatio){
    // take viewport height as base value
    content.style.width  = viewport_w + "px";
    content.style.height = (viewport_w / gameBestRatio) + "px";
} else if(gameBestRatio < viewportRatio){
    // take viewport width as base value
    content.style.height = viewport_h + "px";
    content.style.width  = (viewport_h * gameBestRatio) + "px";
} 
*/
//-------------------------------------------------------
//document.getElementById('content').style.width = document.body.clientWidth + 'px';
//document.getElementById('content').style.height = document.body.clientHeight + 'px';
var gameBestRatio = document.body.clientWidth/document.body.clientHeight;
if(gameBestRatio<1){
	gameBestRatio = 1/gameBestRatio;
}
gameBestWidth = gameBestHeight*gameBestRatio;
var game = new Phaser.Game(gameBestWidth, gameBestHeight, Phaser.CANVAS , "content");
game.state.add("Boot", Boot);
game.state.add("Preload", Preload);
game.state.add("Menu", Menu);
game.state.add("Play", Play);
game.state.start("Boot");

/*
game.scale.onOrientationChange.add(resizeCallback, game.scale);
resizeCallback = function(){
	if(game.scale.isLandscape){
		console.log("resizeCallback2, is Landscape");
		//setUserScale()
	}
}
*/


