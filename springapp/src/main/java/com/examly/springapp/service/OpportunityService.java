package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.Opportunity;

public interface OpportunityService {
	
    
    public List < Opportunity > getAllOpportunities() ;
   
   
    public Opportunity createOpportunity(Opportunity opportunity) ;
    
    
    public  Opportunity updateOpportunity(Opportunity opportunity);
      
   
    public void deleteOpportunity(Opportunity opportunity);
    
    public Optional<Opportunity> findById(Long oppoId);
}