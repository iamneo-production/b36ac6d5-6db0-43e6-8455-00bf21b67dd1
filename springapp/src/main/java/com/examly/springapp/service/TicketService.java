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
<<<<<<< HEAD

    long getTotalTicketsCount();
=======
>>>>>>> 12b8c64d86025c7f46edb92879398829c69ee108
}
