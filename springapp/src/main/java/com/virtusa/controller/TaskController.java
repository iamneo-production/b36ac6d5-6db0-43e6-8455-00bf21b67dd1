package com.virtusa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.virtusa.Exception.ResourceNotFoundException;
import com.virtusa.model.Task;
import com.virtusa.service.TaskService;

@RestController
public class TaskController {
	
		@Autowired
		private TaskService taskService;
	 	

	    @GetMapping("/tasks")
	    public List < Task > getAllTasks() {
	        return taskService.getAllTasks();
	    }
	    
	    
	    @PostMapping("/tasks")
	    public Task createTask( @RequestBody Task task) {
	        return taskService.createTask(task);
	    }
	    
	    @PutMapping("/tasks/{id}")
	    public ResponseEntity < Task > updateTask(@PathVariable(value = "id") Long taskId,
	         @RequestBody Task tasksDetails) throws ResourceNotFoundException {
	    	Task task = taskService.findById(taskId)
	            .orElseThrow(() -> new ResourceNotFoundException("Task not found for this id :: " + taskId));

	    	task.setName(tasksDetails.getName());
	    	task.setDescription(tasksDetails.getDescription());
	    	task.setAssignedTo(tasksDetails.getAssignedTo());
	    	task.setDueDate(tasksDetails.getDueDate());
	    	task.setCompletedAt(tasksDetails.getCompletedAt());
	    	task.setCreatedAt(tasksDetails.getCreatedAt());
	    	task.setUpdatedAt(tasksDetails.getUpdatedAt());
	        final Task updatedTask = taskService.updateTask(task);
	        return ResponseEntity.ok(updatedTask);
	    }

	    @DeleteMapping("/tasks/{id}")
	    public Map < String, Boolean > deleteTask(@PathVariable(value = "id") Long taskId)
	    throws ResourceNotFoundException {
	    	Task task = taskService.findById(taskId)
	            .orElseThrow(() -> new ResourceNotFoundException("Task not found for this id :: " + taskId));

	    	taskService.deleteTask(task);
	        Map < String, Boolean > response = new HashMap < > ();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}