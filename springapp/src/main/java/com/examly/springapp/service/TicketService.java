package com.examly.springapp.service;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Ticket;

import java.util.List;

public interface TicketService {

    List<Ticket> getAllTickets();

    Ticket getTicketById(Long ticketId) throws ResourceNotFoundException;

    Ticket createTicket(Ticket ticket);

    Ticket updateTicket(Long ticketId, Ticket ticketDetails) throws ResourceNotFoundException;

    void deleteTicket(Long ticketId) throws ResourceNotFoundException;
}
