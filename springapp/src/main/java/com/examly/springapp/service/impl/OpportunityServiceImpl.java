package com.examly.springapp.service.impl;


import com.examly.springapp.Exception.ResourceNotFoundException;

import com.examly.springapp.model.Opportunity;
import com.examly.springapp.repository.OpportunityRepository;
import com.examly.springapp.service.OpportunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OpportunityServiceImpl implements OpportunityService {

    @Autowired
    private OpportunityRepository opportunityRepository;

    @Override
    public List<Opportunity> getAllOpportunities() {
        return opportunityRepository.findAll();
    }

    @Override
    public Opportunity getOpportunityById(Long opportunityId) throws ResourceNotFoundException {
        Optional<Opportunity> opportunity = opportunityRepository.findById(opportunityId);
        if (opportunity.isPresent()) {
            return opportunity.get();
        } else {
            throw new ResourceNotFoundException("Opportunity not found with ID: " + opportunityId);
        }
    }

    @Override
    public Opportunity createOpportunity(Opportunity opportunity) {
        return opportunityRepository.save(opportunity);
    }

    @Override
    public Opportunity updateOpportunity(Long opportunityId, Opportunity opportunityDetails) throws ResourceNotFoundException {
        Opportunity opportunity = getOpportunityById(opportunityId);
        opportunity.setName(opportunityDetails.getName());
        opportunity.setCustomer(opportunityDetails.getCustomer());
        opportunity.setStatus(opportunityDetails.getStatus());
        opportunity.setValue(opportunityDetails.getValue());
        opportunity.setCloseDate(opportunityDetails.getCloseDate());
        opportunity.setNotes(opportunityDetails.getNotes());
        return opportunityRepository.save(opportunity);
    }

    @Override
    public void deleteOpportunity(Long opportunityId) throws ResourceNotFoundException {
        Opportunity opportunity = getOpportunityById(opportunityId);
        opportunityRepository.delete(opportunity);
    }

    @Override
    public long getTotalOpportunitiesCount() {
        return opportunityRepository.count();
    }
}
