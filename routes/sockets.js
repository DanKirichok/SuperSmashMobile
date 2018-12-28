var socketio = require("socket.io");

function generateRoomCode(){
	var code = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	for (var i = 0; i < 5; i++) {
		code += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	
	return code;
}

var activeRooms = [];

module.exports.listen = function(app) {
	io = socketio.listen(app);
	
	io.on("connection", function(socket){
		console.log(generateRoomCode());
		socket.join()
	});
	
	io.on("create")
}
