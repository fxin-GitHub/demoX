//import Phaser from "phaser";
import Boot from "./boot";
import Preload from "./preload";
import Menu from "./menu";
import Play from "./play";

var gameBestWidth = 800;
var gameBestHeight = 450;
var gameBestRatio = gameBestWidth / gameBestHeight;

// Get viewport ratio.
var viewport_w = window.innerWidth;
var viewport_h = window.innerHeight - 10;
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

var game = new Phaser.Game(gameBestWidth, gameBestHeight, Phaser.CANVAS , "content");
game.state.add("Boot", Boot);
game.state.add("Preload", Preload);
game.state.add("Menu", Menu);
game.state.add("Play", Play);
game.state.start("Boot");




