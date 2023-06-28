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
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "customer_id")
	private long id;

	@Column(name = "customer_name" )
	private String name;

	@Column(name = "customer_email")
	private String email;

	@Column(name = "customer_phone")
	private String phone;

	@Column(name = "customer_address")
	String address;

    @Column(name= "communicationHistory")
    private List<Communication> communicationHistory= new ArrayList<>();

    @Column(name= "purchaseHistory")
    private List<Purchase> purchaseHistory= new ArrayList<>();

	public Customer() {
		super();
	}
	public Customer(long id, String name, String email, String phone, String address, List<Communication> communicationHistory, List<Purchase> purchaseHistory) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.communicationHistory = communicationHistory;
		this.purchaseHistory = purchaseHistory;
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