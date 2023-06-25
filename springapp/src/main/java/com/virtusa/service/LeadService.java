package com.virtusa.service;

import java.util.List;
import java.util.Optional;

import com.virtusa.model.Lead;

public interface LeadService {
	public List < Lead > getAllLead() ;
	   
	   
    public Lead createLead(Lead lead) ;
    
    
    public  Lead updateLead(Lead lead);
      
   
    public void deleteLead(Lead lead);
    
    public Optional<Lead> findById(Long leadId);

}