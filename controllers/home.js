module.exports = function (app) {
	var HomeController = {

		web: {
			index: function (req, res) {
				
				res.render('index',{status : ''});

			}
		},
		util: {

		}

	};

	return HomeController;
};