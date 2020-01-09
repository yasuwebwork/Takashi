

module.exports = function(robot) {
  //robot.send({}, "Hello! World!");
	robot.respond(/hi/i, function(msg) {
    msg.send('Hi');
		console.log(msg);
  });
};