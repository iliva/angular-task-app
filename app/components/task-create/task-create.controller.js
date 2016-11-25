angular.module('app').controller('TaskCreateController',
    function ($window, taskService) {
        var vm = this;

        vm.create = create;

        vm.task = {
            name: '',
            description: '',
			active: true
        };

        function create() {
            taskService.addTask(vm.task).then(function () {
                $window.history.back();
            });
        }
    });