package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.Task;

public interface TaskService {
	
    
    public List < Task > getAllTasks() ;
   
   
    public Task createTask(Task task) ;
    
    
    public  Task updateTask(Task task);
      
   
    public void deleteTask(Task task);
    
    public Optional<Task> findById(Long taskId);
}