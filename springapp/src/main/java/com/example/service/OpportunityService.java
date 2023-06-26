package com.example.service;

import java.util.List;
import java.util.Optional;

import com.example.model.Opportunity;

public interface OpportunityService {
	
    
    public List < Opportunity > getAllOpportunities() ;
   
   
    public Opportunity createOpportunity(Opportunity opportunity) ;
    
    
    public  Opportunity updateOpportunity(Opportunity opportunity);
      
   
    public void deleteOpportunity(Opportunity opportunity);
    
    public Optional<Opportunity> findById(Long oppoId);
}