package com.virtusa.controller;

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
import com.virtusa.Exception.ResourceNotFoundException;
import com.virtusa.model.Ticket;
import com.virtusa.service.TicketService;

@RestController
public class TicketController {
	
		@Autowired
		private TicketService ticketService;
	 	

	    @GetMapping("/tickets")
	    public List < Ticket > getAllTickets() {
	        return ticketService.getAllTickets();
	    }
	    
	    
	    @PostMapping("/tickets")
	    public Ticket createTicket( @RequestBody Ticket ticket) {
	        return ticketService.createTicket(ticket);
	    }
	    
	    @PutMapping("/tickets/{id}")
	    public ResponseEntity < Ticket > updateTicket(@PathVariable(value = "id") Long ticketId,
	         @RequestBody Ticket ticketsDetails) throws ResourceNotFoundException {
	    	Ticket ticket = ticketService.findById(ticketId)
	            .orElseThrow(() -> new ResourceNotFoundException("Ticket not found for this id :: " + ticketId));

	    	ticket.setSubject(ticketsDetails.getSubject());
	    	ticket.setDescription(ticketsDetails.getDescription());
	    	ticket.setStatus(ticketsDetails.getStatus());
	    	ticket.setAssignedTo(ticketsDetails.getAssignedTo());
	    	ticket.setCreatedAt(ticketsDetails.getCreatedAt());
	    	ticket.setUpdatedAt(ticketsDetails.getUpdatedAt());
	        final Ticket updatedTicket = ticketService.updateTicket(ticket);
	        return ResponseEntity.ok(updatedTicket);
	    }

	    @DeleteMapping("/tickets/{id}")
	    public Map < String, Boolean > deleteTicket(@PathVariable(value = "id") Long ticketId)
	    throws ResourceNotFoundException {
	    	Ticket ticket = ticketService.findById(ticketId)
	            .orElseThrow(() -> new ResourceNotFoundException("Ticket not found for this id :: " + ticketId));

	    	ticketService.deleteTicket(ticket);
	        Map < String, Boolean > response = new HashMap < > ();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}