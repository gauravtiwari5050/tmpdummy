// configure our routes
app.config(function($routeProvider) {
    $routeProvider
    	// route for the home page
        .when('/', {
            templateUrl : '/templates/login.html',
            controller  : 'LoginController'
        })
        .otherwise({
            redirectTo: '/error'
      	});
});


