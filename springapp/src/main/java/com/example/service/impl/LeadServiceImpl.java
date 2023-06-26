package com.virtusa.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.virtusa.model.Lead;
import com.virtusa.repository.LeadRepository;
import com.virtusa.service.LeadService;

@Service
public class LeadServiceImpl implements LeadService{
	
	@Autowired
    private LeadRepository leadRepository;

	@Override
	public List<Lead> getAllLead() {
		return leadRepository.findAll();
	}

	@Override
	public Lead createLead(Lead lead) {
		return leadRepository.save(lead);
	}

	@Override
	public Lead updateLead(Lead lead) {
		return leadRepository.save(lead);

	}

	@Override
	public void deleteLead(Lead lead) {
		leadRepository.delete(lead);
		
	}

	@Override
	public Optional<Lead> findById(Long leadId) {
		return leadRepository.findById(leadId);
	}

}