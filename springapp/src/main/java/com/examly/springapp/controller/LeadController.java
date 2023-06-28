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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Lead;
import com.examly.springapp.service.LeadService;

@RestController
public class LeadController {
	
		@Autowired
		private LeadService leadService;
	 	

	    @GetMapping("/leads")
	    public List < Lead > getAllLeads() {
	        return leadService.getAllLead();
	    }
	    
	    
	    @PostMapping("/leads")
	    public Lead createLead( @RequestBody Lead lead) {
	        return leadService.createLead(lead);
	    }
	    
	    @PutMapping("/leads/{id}")
	    public ResponseEntity < Lead > updateLead(@PathVariable(value = "id") Long leadId,
	         @RequestBody Lead leadsDetails) throws ResourceNotFoundException {
	    	Lead lead = leadService.findById(leadId)
	            .orElseThrow(() -> new ResourceNotFoundException("Lead not found for this id :: " + leadId));

	    	lead.setName(leadsDetails.getName());
	    	lead.setEmail(leadsDetails.getEmail());
	    	lead.setPhone(leadsDetails.getPhone());
	    	lead.setSource(leadsDetails.getSource());
	    	lead.setStatus(leadsDetails.getStatus());
	    	lead.setNotes(leadsDetails.getNotes());
	    	final Lead updatedLead = leadService.updateLead(lead);
	        return ResponseEntity.ok(updatedLead);
	    }

	    @DeleteMapping("/leads/{id}")
	    public Map < String, Boolean > deleteLead(@PathVariable(value = "id") Long leadId)
	    throws ResourceNotFoundException {
	    	Lead lead = leadService.findById(leadId)
	            .orElseThrow(() -> new ResourceNotFoundException("Lead not found for this id :: " + leadId));

	    	leadService.deleteLead(lead);
	        Map < String, Boolean > response = new HashMap < > ();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}