module.exports = function() {
    var controller = {};
	controller.index = function(req, res) {
		//res.render('index', {nome: 'Express'});
		res.json({nome: 'felipe'});
	};
	return controller;
}
