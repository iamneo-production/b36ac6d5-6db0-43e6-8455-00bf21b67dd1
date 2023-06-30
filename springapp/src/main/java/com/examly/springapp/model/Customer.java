package com.examly.springapp.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String address;

    @ElementCollection
    private List<String> communicationHistory;

    @ElementCollection
    private List<String> purchaseHistory;

    // constructors, getters, and setters

    public Customer() {
    }

    public Customer(String name, String email, String phone, String address,
                    List<String> communicationHistory, List<String> purchaseHistory) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.communicationHistory = communicationHistory;
        this.purchaseHistory = purchaseHistory;
    }

    // getters and setters

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

    public List<String> getCommunicationHistory() {
        return communicationHistory;
    }

    public void setCommunicationHistory(List<String> communicationHistory) {
        this.communicationHistory = communicationHistory;
    }

    public List<String> getPurchaseHistory() {
        return purchaseHistory;
    }

    public void setPurchaseHistory(List<String> purchaseHistory) {
        this.purchaseHistory = purchaseHistory;
    }

    // toString, equals, hashCode

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", communicationHistory=" + communicationHistory +
                ", purchaseHistory=" + purchaseHistory +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Customer customer = (Customer) o;

        if (!id.equals(customer.id)) return false;
        if (!name.equals(customer.name)) return false;
        if (!email.equals(customer.email)) return false;
        if (!phone.equals(customer.phone)) return false;
        if (!address.equals(customer.address)) return false;
        if (!communicationHistory.equals(customer.communicationHistory)) return false;
        return purchaseHistory.equals(customer.purchaseHistory);
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + name.hashCode();
        result = 31 * result + email.hashCode();
        result = 31 * result + phone.hashCode();
        result = 31 * result + address.hashCode();
        result = 31 * result + communicationHistory.hashCode();
        result = 31 * result + purchaseHistory.hashCode();
        return result;
    }
}