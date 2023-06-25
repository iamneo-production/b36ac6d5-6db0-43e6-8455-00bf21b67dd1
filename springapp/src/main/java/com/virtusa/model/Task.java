package com.virtusa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "task")
public class Task {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	
	@Column(name = "task_name")
	String name;
	
	@Column(name = "task_description")
	String description;
	
	@Column(name = "task_assigned_to")
	String assignedTo;
	
	@Column(name = "task_due_date")
	String dueDate;
	
	@Column(name = "task_completed_at")
	String completedAt;
	
	@Column(name = "task_created_at")
	String createdAt;
	
	@Column(name = "task_updated_at")
	String updatedAt;
	
	public Task() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAssignedTo() {
		return assignedTo;
	}

	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}
	
	public String getCompletedAt() {
		return completed_at;
	}

	public void setCompletedAt(String completedAt) {
		this.completedAt = completedAt;
	}
	
	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
	
	public String getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(String updatedAt) {
		this.updatedAt = updatedAt;
	}
}