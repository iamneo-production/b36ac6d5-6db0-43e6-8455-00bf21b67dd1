package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name = "communication")
public class Communication {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  // Other communication fields

  @ManyToOne
  @JoinColumn(name = "customer_id") // The name of the foreign key column in the communication table
  private Customer customer;

  // Constructors, getters, and setters

}

