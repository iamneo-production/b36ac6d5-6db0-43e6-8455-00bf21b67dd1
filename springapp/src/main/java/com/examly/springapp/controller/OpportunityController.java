package com.examly.springapp.controller;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Opportunity;
import com.examly.springapp.service.OpportunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/opportunities")
@CrossOrigin()
public class OpportunityController {

    @Autowired
    private OpportunityService opportunityService;

    @GetMapping
    public List<Opportunity> getAllOpportunities() {
        return opportunityService.getAllOpportunities();
    }

    @PostMapping
    public ResponseEntity<Boolean> createOpportunity(@RequestBody Opportunity opportunity) {
        Opportunity createdOpportunity = opportunityService.createOpportunity(opportunity);
        boolean isSuccess = createdOpportunity != null;
        return ResponseEntity.ok(isSuccess);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Opportunity> getOpportunityById(@PathVariable(value = "id") Long opportunityId)
            throws ResourceNotFoundException {
        Opportunity opportunity = opportunityService.getOpportunityById(opportunityId);
        return ResponseEntity.ok().body(opportunity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Opportunity> updateOpportunity(
            @PathVariable(value = "id") Long opportunityId,
            @RequestBody Opportunity opportunityDetails) throws ResourceNotFoundException {
        Opportunity updatedOpportunity = opportunityService.updateOpportunity(opportunityId, opportunityDetails);
        return ResponseEntity.ok(updatedOpportunity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteOpportunity(@PathVariable(value = "id") Long opportunityId)
            throws ResourceNotFoundException {
        opportunityService.deleteOpportunity(opportunityId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
