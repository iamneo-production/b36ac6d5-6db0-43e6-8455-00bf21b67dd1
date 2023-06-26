package com.virtusa.model;

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
@Table(name = "sale")
public class Sale {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	
	@Column(name = "sale_name")
	String name;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
	Customer customer;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "opportunity_id")
	Opportunity opportunity;
	
	@Column(name = "sale_amount")
	String amount;
	
	@Column(name = "sale_date")
	String date;
	
	@Column(name = "sale_notes")
	String notes;
	
	public Sale() {
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
	
	public Opportunity getOpportunity() {
		return opportunity;
	}

	public void setOpportunity(Opportunity opportunity) {
		this.opportunity = opportunity;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

}