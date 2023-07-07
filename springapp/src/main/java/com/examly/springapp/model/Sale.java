package main.java.com.examly.springapp.model;

import javax.annotation.processing.Generated;
import javax.persistence.*;
import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import com.examly.springapp.model.Customer;
import com.examly.springapp.model.Opportunity;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Sale")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne
    private Customer customer;
    
    @ManyToOne
    private Opportunity opportunity;

    private double amount;
    private LocalDate date;
    private String notes;
}
