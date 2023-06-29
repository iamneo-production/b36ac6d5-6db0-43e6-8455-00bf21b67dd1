package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String source;
    private String status;
    private String notes;

    // constructors

    public Lead() {
    }

    public Lead(String name, String email, String phone, String source, String status, String notes) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.source = source;
        this.status = status;
        this.notes = notes;
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

    // toString, equals, and hashCode

    @Override
    public String toString() {
        return "Lead{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", source='" + source + '\'' +
                ", status='" + status + '\'' +
                ", notes='" + notes + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Lead lead = (Lead) o;

        if (!id.equals(lead.id)) return false;
        if (!name.equals(lead.name)) return false;
        if (!email.equals(lead.email)) return false;
        if (!phone.equals(lead.phone)) return false;
        if (!source.equals(lead.source)) return false;
        if (!status.equals(lead.status)) return false;
        return notes.equals(lead.notes);
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + name.hashCode();
        result = 31 * result + email.hashCode();
        result = 31 * result + phone.hashCode();
        result = 31 * result + source.hashCode();
        result = 31 * result + status.hashCode();
        result = 31 * result + notes.hashCode();
        return result;
    }
}
