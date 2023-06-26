package com.example.model;
import java.util.*;
import javax.persistence.CascadeType;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tickets")
public class Ticket {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	long id;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
	Customer customer;
	
	@Column(name = "ticket_subject")
	String subject;
	
	@Column(name = "ticket_description")
	String description;
	
	@Column(name = "ticket_status")
	String status;
	
	@Column(name = "ticket_assigned_to")
	String assignedTo;
	
	@Column(name = "ticket_created_at")
	String createdAt;
	
	@Column(name = "ticket_updated_at")
	String updatedAt;
	
	public Ticket() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAssignedTo() {
		return assignedTo;
	}

	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
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