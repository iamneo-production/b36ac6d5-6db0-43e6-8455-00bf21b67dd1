package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.Customer;

public interface CustomerService {
	
    
    public List < Customer > getAllCustomers() ;
   
   
    public Customer createCustomer(Customer customer) ;
    
    
    public  Customer updateCustomer(Customer customer);
      
   
    public void deleteCustomer(Customer customer);
    
    public Optional<Customer> findById(Long custId);
    
    	

}