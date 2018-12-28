const gameWidth = window.innerWidth;
const gameHeight = window.innerHeight;

const font = "Courier";

class StartMenu extends Phaser.Scene {
	constructor () 
	{
		super({key: "StartMenu", active: true});
	}
	
	create() 
	{
		let graphics = this.add.graphics();
		graphics.fillStyle(0x008080, 1);
		graphics.fillRect(0, 0, game.config.width, game.config.height);
		
		
		this.createMenuText();
		this.createCreateGameText();
		this.createJoinGameText();
	}
	
	createMenuText()
	{
		var menuText = this.add.text(game.config.width*.5, game.config.height*.1, "Super Smash", {font: "96px " + font, fill: "#000000"});		
		menuText.setOrigin(.5);
	}
	
	createCreateGameText()
	{
		var createGameText = this.add.text(game.config.width*.5, game.config.height*.5, "Create Game", {font: "96px " + font, fill: "#000000"}).setInteractive();
		createGameText.setOrigin(.5);
		
		createGameText.on("pointerover", function (event){
			createGameText.setColor("#FFFFFF");
		});
		
		createGameText.on("pointerout", function (event){
			createGameText.setColor("#000000");
		});
		
		createGameText.on("pointerdown", function (event){
			game.scene.pause("StartMenu");
			game.scene.resume("CreateLobby");
			game.scene.bringToTop("CreateLobby");
		});
	}
	
	createJoinGameText()
	{
		var joinGameText = this.add.text(game.config.width*.5, game.config.height*.65, "Join Game", {font: "96px " + font, fill: "#000000"}).setInteractive();
		joinGameText.setOrigin(.5);
		
		joinGameText.on("pointerover", function (event){
			joinGameText.setColor("#FFFFFF");
		});
		
		joinGameText.on("pointerout", function (event){
			joinGameText.setColor("#000000");
		});
		
		joinGameText.on("pointerdown", function (event){
			console.log("start");
		});
	}
}

class CreateLobby extends Phaser.Scene {
	constructor () 
	{
		super({key: "CreateLobby", active: true});
	}
	
	create () 
	{
		let graphics = this.add.graphics();
		graphics.fillStyle(0x008080, 1);
		graphics.fillRect(0, 0, game.config.width, game.config.height);
		this.createRoomNumberText();
		this.createBackText();
		
	}
	
	
	
	createRoomNumberText()
	{
		socket.emit("getRoomNumber")
		var roomNumberText = this.add.text(game.config.width*.5, game.config.height*.1, "Room Number", {font: "96px " + font, fill: "#000000"});		
		roomNumberText.setOrigin(.5);
		socket.emit("getRoomNumber")
	}
	
	createBackText()
	{
		var backText = this.add.text(game.config.width*.5, game.config.height*.9, "Back", {font: "96px " + font, fill: "#000000"}).setInteractive();
		backText.setOrigin(.5);
		
		backText.on("pointerover", function (event){
			backText.setColor("#FFFFFF");
		});
		
		backText.on("pointerout", function (event){
			backText.setColor("#000000");
		});
		
		backText.on("pointerdown", function (event){
			game.scene.pause("CreateLobby");
			game.scene.resume("StartMenu");
			game.scene.bringToTop("StartMenu");
		});
	}
}

let config = {
	type: Phaser.AUTO,
	width: gameWidth,
	height: gameHeight,
	backgroundColor: "#392542",
	parent: "phaser-example",
	scene: [CreateLobby, StartMenu]
};

let game = new Phaser.Game(config);
