package com.example.model;
import java.util.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "lead")
public class Lead {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    long id;
	
	@Column(name = "Name")
	String name;
	
	@Column(name = "Email")
	String email;
	
	@Column(name = "Phone")
	long phone;
	
	@Column(name = "Source")
	String source;
	
	@Column(name = "Status")
	String status;
	
	@Column(name = "Notes")
	String notes;
	
	public Lead() {
		
	}
	
	public Lead(String name, String email, long phone, String source, String status, String notes) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.source = source;
		this.status = status;
		this.notes = notes;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
}