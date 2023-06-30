package com.examly.springapp.model;
import javax.persistence.*;

@Entity
public class Lead {

    @Id
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String source;
    private String status;
    private String notes;

    // Constructors, getters, and setters

    public Lead() {
    }

    public Lead(Long id, String name, String email, String phone, String source, String status, String notes) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.source = source;
        this.status = status;
        this.notes = notes;
    }

    // Getters and setters

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

        if (id != null ? !id.equals(lead.id) : lead.id != null) return false;
        if (name != null ? !name.equals(lead.name) : lead.name != null) return false;
        if (email != null ? !email.equals(lead.email) : lead.email != null) return false;
        if (phone != null ? !phone.equals(lead.phone) : lead.phone != null) return false;
        if (source != null ? !source.equals(lead.source) : lead.source != null) return false;
        if (status != null ? !status.equals(lead.status) : lead.status != null) return false;
        return notes != null ? notes.equals(lead.notes) : lead.notes == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (phone != null ? phone.hashCode() : 0);
        result = 31 * result + (source != null ? source.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (notes != null ? notes.hashCode() : 0);
        return result;
    }
}