(function () {
    angular
        .module('app', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<home></home>'
                })
                .when('/create', {
                    template: '<task-create></task-create>'
                })
                .when('/update/:id', {
                    template: '<task-edit></task-edit>'
                });
        });
}());