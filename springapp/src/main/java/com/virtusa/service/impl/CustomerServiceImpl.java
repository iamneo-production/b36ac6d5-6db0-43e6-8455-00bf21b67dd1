package com.virtusa.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.virtusa.model.Customer;
import com.virtusa.repository.CustomerRepository;
import com.virtusa.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
    private CustomerRepository customerRepository;

	@Override
	public List<Customer> getAllCustomers() {
			return customerRepository.findAll();
	}

	@Override
	public Customer createCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public void deleteCustomer(Customer customer) {
		 customerRepository.delete(customer);
	}

	@Override
	public Optional<Customer> findById(Long custId) {
		return customerRepository.findById(custId);
	}

	
}