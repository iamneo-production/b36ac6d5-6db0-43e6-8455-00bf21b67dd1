package com.virtusa.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.virtusa.model.Opportunity;
import com.virtusa.repository.OpportunityRepository;
import com.virtusa.service.OpportunityService;

@Service
public class OpportunityServiceImpl implements OpportunityService{
	
	@Autowired
    private OpportunityRepository opportunityRepository;

	@Override
	public List<Opportunity> getAllOpportunities() {
			return opportunityRepository.findAll();
	}

	@Override
	public Opportunity createOpportunity(Opportunity opportunity) {
		return opportunityRepository.save(opportunity);
	}

	@Override
	public Opportunity updateOpportunity(Opportunity opportunity) {
		return opportunityRepository.save(opportunity);
	}

	@Override
	public void deleteOpportunity(Opportunity opportunity) {
		opportunityRepository.delete(opportunity);
	}

	@Override
	public Optional<Opportunity> findById(Long oppoId) {
		return opportunityRepository.findById(oppoId);
	}

	
}