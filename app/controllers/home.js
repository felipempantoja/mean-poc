module.exports = function() {
    var controller = {};
    controller.index = function(req, res) {
		res.json({nome: 'felipe'});
	};
	return controller;
}
