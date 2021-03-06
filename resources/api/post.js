var models = require('../../models');
var slugify = require('slug');

exports.index = function(req, res) {
	models.Post.findAll({
		limit: 15,
		include: [{
			model: models.User,
			where: {
				user_id: Sequelize.col('users.id')
			}
		}]
	}).then(function(data) {
		res.json(data);
	});
};

exports.new = function(req, res) {
	res.send('new forum');
};

exports.create = function(req, res) {

	models.User.findOne({
		where: {
			token: req.token
		}
	}).then(function(user) {
		res.json(user);
		/*
		var data = {
			name: req.body.name,
			slug: slugify(req.body.name, {
				lower: true
			}),
			content: req.body.content,
			description: req.body.description,
			user_id: user.id
		};
		models.Post.create(data).then(function(post) {
			res.json(post);
		});
*/
	});


};

exports.show = function(req, res) {
	models.Post.findById(req.params.post).then(function(item) {
		res.json(item);
	});
};

exports.edit = function(req, res) {

};

exports.update = function(req, res) {
	models.Post.findById(req.params.post).then(function(post) {
		post.name = req.param('name');
		post.slug = req.param('slug');
		post.save().then(function(post) {
			res.status(200).json({
				message: 'Update success'
			});
		});
	});
};

exports.destroy = function(req, res) {
	models.Post.findById(req.params.post).then(function(item) {
		item.destroy().then(function(post) {

			res.status(200).json({
				message: 'Destroy success'
			});
		});
	});
};