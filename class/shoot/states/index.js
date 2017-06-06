//import Phaser from "phaser";
import Boot from "./boot";
import Preload from "./preload";
import Menu from "./menu";
import Play from "./play";

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "...");
game.state.add("Boot", Boot);
game.state.add("Preload", Preload);
game.state.add("Menu", Menu);
game.state.add("Play", Play);
game.state.start("Boot");

