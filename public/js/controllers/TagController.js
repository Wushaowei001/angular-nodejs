angular
	.module('TagController', [])
	.controller('TagController', function($scope, $routeParams, Tag, Notification) {
		$scope.getList = function() {
			Tag.getList().then(function(tags) {
				$scope.tags = tags;
			});

			$scope.orderProp = 'id';
		}


		$scope.create = function() {

			Tag.post($scope.form).then(function(response) {
				console.log(response);
				$scope.form = {};
			}, function(err) {
				console.log(err);
			});
		}

		$scope.findEdit = function() {
			Tag.one($routeParams.id).get().then(function(data) {
				$scope.formData = data;
			});
		}

		$scope.update = function() {
			var data = {
				name: $scope.formData.name,
				slug: $scope.formData.slug,
				format: 'json'
			};

			Tag.one($routeParams.id).put(data).then(function(response) {
				Notification.primary({
					message: response.message
				});
			}, function(err) {
				$scope.errors = err.data.errors;
			});
		}


		$scope.remove = function(tag) {

			tag.remove().then(function(response) {
				var index = $scope.tags.indexOf(tag);
				$scope.tags.splice(index, 1);

				Notification({
					title: response.title,
					message: response.message
				});

			}, function(err) {
				Notification.error({
					message: 'An error occurred'
				});
			});
		}
	});