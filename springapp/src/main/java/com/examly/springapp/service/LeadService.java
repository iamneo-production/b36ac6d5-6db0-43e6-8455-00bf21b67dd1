package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.Lead;

public interface LeadService {
	public List < Lead > getAllLead() ;
	   
	   
    public Lead createLead(Lead lead) ;
    
    
    public  Lead updateLead(Lead lead);
      
   
    public void deleteLead(Lead lead);
    
    public Optional<Lead> findById(Long leadId);

}