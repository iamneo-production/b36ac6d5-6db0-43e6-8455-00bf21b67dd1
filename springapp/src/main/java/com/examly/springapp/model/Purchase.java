package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name = "purchase")
public class Purchase {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  // Define your purchase fields

  // Constructors, getters, and setters

}
