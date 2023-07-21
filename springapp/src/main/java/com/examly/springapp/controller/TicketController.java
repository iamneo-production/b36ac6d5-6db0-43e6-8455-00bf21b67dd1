package com.examly.springapp.controller;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Ticket;
import com.examly.springapp.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ticket")
@CrossOrigin()
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @PostMapping
    public ResponseEntity<Boolean> createTicket(@RequestBody Ticket ticket) {
        Ticket createdTicket = ticketService.createTicket(ticket);
        boolean isSuccess = createdTicket != null;
        return ResponseEntity.ok(isSuccess);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable(value = "id") Long ticketId)
            throws ResourceNotFoundException {
        Ticket ticket = ticketService.getTicketById(ticketId);
        return ResponseEntity.ok().body(ticket);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ticket> updateTicket(
            @PathVariable(value = "id") Long ticketId,
            @RequestBody Ticket ticketDetails) throws ResourceNotFoundException {
        Ticket updatedTicket = ticketService.updateTicket(ticketId, ticketDetails);
        return ResponseEntity.ok(updatedTicket);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTicket(@PathVariable(value = "id") Long ticketId)
            throws ResourceNotFoundException {
        ticketService.deleteTicket(ticketId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
