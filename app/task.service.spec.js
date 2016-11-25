describe('Task Service', function(){

	var sut, 
		mockTasks, 
		mockTask, 
		Task,
		Tasks, 
		mockUpdateTask, 
		mockAddTask, 
		mockRemoveTask,
		httpBackEnd;
	
	beforeEach(function(){
		module('app');

		mockUpdateTask = false;
		mockAddTask = false;
		mockRemoveTask = false;

		Task = {name: 'Task', description: 'TaskDescription'}

 		Tasks = [
            {name: 'Task1', description: 'TaskDescription1'},
            {name: 'Task2', description: 'TaskDescription2'}
        ];

		inject(function(_taskService_, _$httpBackend_){
			sut = _taskService_,
			httpBackend = _$httpBackend_ 
		})		
	})	

	//  to verify that no additional requests
	afterEach(function(){
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
 	});	

	it('should return Tasks array (GET)', function(){
		// httpBackend.expectGET('/task').respond(Tasks)
		httpBackend.when('GET',"/task").respond(200, Tasks);
	    sut.getTasks().then(function(tasks) {
            mockTasks = tasks;
        });
        httpBackend.flush();
	    expect(mockTasks[1].name).toEqual('Task2')		
	})		

    it('should get task name by index', function(){
        httpBackend.expectGET('/task/1').respond(Task)
        sut.getTaskByIndex(1).then(function(task) {
            mockTask = task;
        });
        httpBackend.flush();
        expect(mockTask.name).toEqual('Task')      
    })

	it('should update Task by index (PUT)', function(){
		httpBackend.when('PUT', '/task/1', Task).respond(200);
	    sut.updateTaskByIndex(1, Task).then(function(){
	    	mockUpdateTask = true	
	    })
        httpBackend.flush();
	    expect(mockUpdateTask).toBeTruthy()		
	})	

	it('should add Task (POST)', function(){
		httpBackend.when('POST', '/task', Task).respond(200);
	    sut.addTask(Task).then(function(){
	    	mockAddTask = true		
	    })
        httpBackend.flush();
		expect(mockAddTask).toBeTruthy()			
	})	
	
	it('should remove Task', function(){
		httpBackend.when('POST',"/task/remove/1").respond(200);
	    sut.removeTaskByIndex(1).then(function() {
			mockRemoveTask = true
        });
        httpBackend.flush();
		expect(mockRemoveTask).toBeTruthy()
	})	


})