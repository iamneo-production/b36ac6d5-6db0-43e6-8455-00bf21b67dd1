package com.examly.springapp.service;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Opportunity;


import java.util.List;


public interface OpportunityService {

    List<Opportunity> getAllOpportunities();

    Opportunity getOpportunityById(Long opportunityId) throws ResourceNotFoundException;

    Opportunity createOpportunity(Opportunity opportunity);

    Opportunity updateOpportunity(Long opportunityId, Opportunity opportunityDetails) throws ResourceNotFoundException;

    void deleteOpportunity(Long opportunityId) throws ResourceNotFoundException;

    long getTotalOpportunitiesCount();
    
}
