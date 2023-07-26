package com.examly.springapp.service;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Task;

import java.util.List;


public interface TaskService {

    List<Task> getAllTasks();

    Task getTaskById(Long taskId) throws ResourceNotFoundException;

    Task createTask(Task task);

    Task updateTask(Long taskId, Task taskDetails) throws ResourceNotFoundException;

    void deleteTask(Long taskId) throws ResourceNotFoundException;

    void deleteAllTasks();

    long getTotalTasksCount();
}
