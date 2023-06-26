package com.examly.springapp.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Customer;
import com.examly.springapp.service.CustomerService;

@RestController
public class CustomerController {
	
		@Autowired
		private CustomerService customerService;
	 	

	    @GetMapping("/customers")
	    public List < Customer > getAllCustomers() {
	        return customerService.getAllCustomers();
	    }
	    
	    
	    @PostMapping("/customers")
	    public Customer createCustomer( @RequestBody Customer customer) {
	        return customerService.createCustomer(customer);
	    }
	    
	    @PutMapping("/customers/{id}")
	    public ResponseEntity < Customer > updateCustomer(@PathVariable(value = "id") Long custId,
	         @RequestBody Customer customersDetails) throws ResourceNotFoundException {
	    	Customer customer = customerService.findById(custId)
	            .orElseThrow(() -> new ResourceNotFoundException("Customer not found for this id :: " + custId));

	    	customer.setName(customersDetails.getName());
	    	customer.setEmail(customersDetails.getEmail());
	    	customer.setPhone(customersDetails.getPhone());
	    	customer.setAddress(customersDetails.getAddress());
	    	customer.setCommunicationHistory(customersDetails.getCommunicationHistory());
	    	customer.setPurchaseHistory(customersDetails.getPurchaseHistory());
	        final Customer updatedCustomer = customerService.updateCustomer(customer);
	        return ResponseEntity.ok(updatedCustomer);
	    }

	    @DeleteMapping("/customers/{id}")
	    public Map < String, Boolean > deleteCustomer(@PathVariable(value = "id") Long custId)
	    throws ResourceNotFoundException {
	    	Customer customer = customerService.findById(custId)
	            .orElseThrow(() -> new ResourceNotFoundException("Customer not found for this id :: " + custId));

	    	customerService.deleteCustomer(customer);
	        Map < String, Boolean > response = new HashMap < > ();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}