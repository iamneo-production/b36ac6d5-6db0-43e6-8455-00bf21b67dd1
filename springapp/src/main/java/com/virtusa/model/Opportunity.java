package com.virtusa.model;
import java.util.*;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "opportunity")
public class Opportunity {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "opportunity_id")
	long id;
	
	@Column(name = "opportunity_name")
	String name;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
	Customer customer;
	
	@Column(name = "opportunity_status")
	String status;
	
	@Column(name = "opportunity_value")
	String value;
	
	@Column(name = "opportunity_close_date")
	String close_date;
	
	@Column(name = "opportunity_notes")
	String notes;
	
	public Opportunity() {
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

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getClose_date() {
		return close_date;
	}

	public void setClose_date(String close_date) {
		this.close_date = close_date;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
}