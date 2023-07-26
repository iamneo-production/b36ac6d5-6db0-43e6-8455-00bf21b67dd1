package com.examly.springapp.service.impl;
import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Task;
import com.examly.springapp.repository.TaskRepository;
import com.examly.springapp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public Task getTaskById(Long taskId) throws ResourceNotFoundException {
        Optional<Task> task = taskRepository.findById(taskId);
        if (task.isPresent()) {
            return task.get();
        } else {
            throw new ResourceNotFoundException("Task not found with ID: " + taskId);
        }
    }

    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Task updateTask(Long taskId, Task taskDetails) throws ResourceNotFoundException {
        Task task = getTaskById(taskId);
        task.setName(taskDetails.getName());
        task.setDescription(taskDetails.getDescription());
        task.setAssignedTo(taskDetails.getAssignedTo());
        task.setDueDate(taskDetails.getDueDate());
        task.setCompletedAt(taskDetails.getCompletedAt());
        task.setCreatedAt(taskDetails.getCreatedAt());
        task.setUpdatedAt(taskDetails.getUpdatedAt());
        return taskRepository.save(task);
    }

    @Override
    public void deleteTask(Long taskId) throws ResourceNotFoundException {
        Task task = getTaskById(taskId);
        taskRepository.delete(task);
    }

    @Override
    public void deleteAllTasks() {
        taskRepository.deleteAll();
    }

    @Override
    public long getTotalTasksCount() {
        return taskRepository.count();
    }
}
