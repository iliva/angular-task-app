angular.module('app').controller('HomeController',
    function (taskService) {
        var vm = this;

		vm.toggleActive = toggleActive;
		vm.remove = remove;
		vm.activeButtons = ['all', 'active', 'unactive'];
		vm.showActive = vm.activeButtons[0];
		vm.activeFilter = activeFilter;
		
        taskService.getTasks().then(function(tasks) { 
			vm.tasks = tasks; 
		});

		function toggleActive(index, task){
			task.active = !task.active;
            taskService.updateTaskByIndex(index, task)
		}
		
		function remove(index){
			if(confirm('Are you sure?')) 
				taskService.removeTaskByIndex(index).then(function(tasks) {
					vm.tasks = tasks;
				});				
		}
		
		function activeFilter(tasks){
			switch(vm.showActive){
				case 'all': return tasks; break;
				case 'active': return tasks.active; break;
				case 'unactive': return !tasks.active; break;
			}
		}
						

		
        
    });