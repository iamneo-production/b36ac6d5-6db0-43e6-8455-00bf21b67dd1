package com.examly.springapp.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Task;
import com.examly.springapp.repository.TaskRepository;
import com.examly.springapp.service.TaskService;

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