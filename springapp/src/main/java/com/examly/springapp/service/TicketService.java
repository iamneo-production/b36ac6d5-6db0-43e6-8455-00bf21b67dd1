package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.Ticket;

public interface TicketService {
	
    
    public List < Ticket > getAllTickets() ;
   
   
    public Ticket createTicket(Ticket ticket) ;
    
    
    public  Ticket updateTicket(Ticket ticket);
      
   
    public void deleteTicket(Ticket ticket);
    
    public Optional<Ticket> findById(Long ticketId);
}