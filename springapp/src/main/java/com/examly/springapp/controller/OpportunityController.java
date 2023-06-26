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
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Opportunity;
import com.examly.springapp.service.OpportunityService;

@RestController
public class OpportunityController {
	
		@Autowired
		private OpportunityService opportunityService;
	 	

	    @GetMapping("/opportunities")
	    public List < Opportunity > getAllOpportunities() {
	        return opportunityService.getAllOpportunities();
	    }
	    
	    
	    @PostMapping("/opportunities")
	    public Opportunity createOpportunity( @RequestBody Opportunity opportunity) {
	        return opportunityService.createOpportunity(opportunity);
	    }
	    
	    @PutMapping("/opportunities/{id}")
	    public ResponseEntity < Opportunity > updateOpportunity(@PathVariable(value = "id") Long oppoId,
	         @RequestBody Opportunity opportunitiesDetails) throws ResourceNotFoundException {
	    	Opportunity opportunity = opportunityService.findById(oppoId)
	            .orElseThrow(() -> new ResourceNotFoundException("Opportunity not found for this id :: " + oppoId));
	    	
	    	opportunity.setName(opportunitiesDetails.getName());
	    	opportunity.setStatus(opportunitiesDetails.getStatus());
	    	opportunity.setValue(opportunitiesDetails.getValue());
	    	opportunity.setCloseDate(opportunitiesDetails.getCloseDate());
	    	opportunity.setNotes(opportunitiesDetails.getNotes());
	        final Opportunity updatedOpportunity = opportunityService.updateOpportunity(opportunity);
	        return ResponseEntity.ok(updatedOpportunity);
	    }

	    @DeleteMapping("/opportunities/{id}")
	    public Map < String, Boolean > deleteOpportunity(@PathVariable(value = "id") Long oppoId)
	    throws ResourceNotFoundException {
	    	Opportunity opportunity = opportunityService.findById(oppoId)
	            .orElseThrow(() -> new ResourceNotFoundException("Opportunity not found for this id :: " + oppoId));

	    	opportunityService.deleteOpportunity(opportunity);
	        Map < String, Boolean > response = new HashMap < > ();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}