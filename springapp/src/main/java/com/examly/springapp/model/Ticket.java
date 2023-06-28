package com.examly.springapp.model;
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
	private long id;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
	private Customer customer;
	
	@Column(name = "ticket_subject")
	private String subject;
	
	@Column(name = "ticket_description")
	private String description;
	
	@Column(name = "ticket_status")
	private String status;
	
	@Column(name = "ticket_assigned_to")
	private String assignedTo;
	
	@Column(name = "ticket_created_at")
	private LocalDateTime createdAt;
	
	@Column(name = "ticket_updated_at")
	private LocalDateTime updatedAt;
	
	public Ticket() {
		super();
	}
	public Ticket(Customer customer, String subject, String description, String status, String assignedTo, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.customer = customer;
        this.subject = subject;
        this.description = description;
        this.status = status;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}
}