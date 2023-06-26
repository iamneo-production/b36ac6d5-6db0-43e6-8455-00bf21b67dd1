package com.virtusa.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.virtusa.model.Task;
import com.virtusa.repository.TaskRepository;
import com.virtusa.service.TaskService;

@Service
public class TaskServiceImpl implements TaskService{
	
	@Autowired
    private TaskRepository taskRepository;

	@Override
	public List<Task> getAllTasks() {
			return taskRepository.findAll();
	}

	@Override
	public Task createTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public Task updateTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public void deleteTask(Task task) {
		taskRepository.delete(task);
	}

	@Override
	public Optional<Task> findById(Long taskId) {
		return taskRepository.findById(taskId);
	}	
}