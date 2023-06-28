package com.examly.springapp.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Other fields and methods

    // Getter and setter methods for id field
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}