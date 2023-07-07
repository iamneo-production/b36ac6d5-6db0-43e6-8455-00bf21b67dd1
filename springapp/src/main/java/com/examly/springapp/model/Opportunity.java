package com.examly.springapp.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Opportunity")
public class Opportunity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    private Customer customer;

    private String status;
    private double value;
    private LocalDate closeDate;
    private String notes;

    public Opportunity() {
    }

    public Opportunity(Long id,String name, Customer customer, String status, double value,
                       LocalDate closeDate, String notes) {
        this.id=id;                
        this.name = name;
        this.customer = customer;
        this.status = status;
        this.value = value;
        this.closeDate = closeDate;
        this.notes = notes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public LocalDate getCloseDate() {
        return closeDate;
    }

    public void setCloseDate(LocalDate closeDate) {
        this.closeDate = closeDate;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
