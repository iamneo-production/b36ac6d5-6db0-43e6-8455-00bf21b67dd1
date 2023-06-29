package com.examly.springapp.model;
import javax.persistence.*;
import com.examly.springapp.model.Communication;
import com.examly.springapp.model.Purchase;
import java.util.List;
import java.util.ArrayList;

@Entity
@Table(name = "customer")
public class Customer {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "name")
  private String name;

  @Column(name = "email")
  private String email;

  @Column(name = "phone")
  private String phone;

  @Column(name = "address")
  private String address;

  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn(name = "communicationId")
  private List<Communication> communicationHistory= new ArrayList<>();

  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn(name = "purchaseId")
  private List<Purchase> purchaseHistory= new ArrayList<>();

  // Constructors

  public Customer() {
  }

  public Customer(Long id, String name, String email, String phone, String address,List<Communication> communicationHistory, List<Purchase> purchaseHistory) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.communicationHistory = communicationHistory;
    this.purchaseHistory = purchaseHistory;
  }

  // Getters and Setters

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

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public List<Communication> getCommunicationHistory() {
    return communicationHistory;
  }

  public void setCommunicationHistory(List<Communication> communicationHistory) {
    this.communicationHistory = communicationHistory;
  }

  public List<Purchase> getPurchaseHistory() {
    return purchaseHistory;
  }

  public void setPurchaseHistory(List<Purchase> purchaseHistory) {
    this.purchaseHistory = purchaseHistory;
  }
}
