angular.module('app').factory('taskService',
    function ($http) {

        return {
            addTask: addTask,
            getTasks: getTasks,
            getTaskByIndex: getTaskByIndex,
            updateTaskByIndex: updateTaskByIndex,
			removeTaskByIndex: removeTaskByIndex
        };

        function extractResponse(response) {
            return response.data;
        }
        
        function addTask(task) {
            return $http.post('/task', task);
        }
        function getTasks() {
            return $http.get('/task').then(extractResponse);
        }
        function getTaskByIndex(index) {
            return $http.get('/task/' + index).then(extractResponse);
        }
        function updateTaskByIndex(index, task) {
            return $http.put('/task/' + index, task);
        }
        function removeTaskByIndex(index) {
            return $http.post('/task/remove/' + index).then(extractResponse);
        }



    });