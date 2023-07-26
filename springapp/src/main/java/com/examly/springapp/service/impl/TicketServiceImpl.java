package com.examly.springapp.service.impl;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Ticket;
import com.examly.springapp.repository.TicketRepository;
import com.examly.springapp.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Ticket getTicketById(Long ticketId) throws ResourceNotFoundException {
        Optional<Ticket> ticket = ticketRepository.findById(ticketId);
        if (ticket.isPresent()) {
            return ticket.get();
        } else {
            throw new ResourceNotFoundException("Ticket not found with ID: " + ticketId);
        }
    }

    @Override
    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public Ticket updateTicket(Long ticketId, Ticket ticketDetails) throws ResourceNotFoundException {
        Ticket ticket = getTicketById(ticketId);
        ticket.setCustomer(ticketDetails.getCustomer());
        ticket.setSubject(ticketDetails.getSubject());
        ticket.setDescription(ticketDetails.getDescription());
        ticket.setStatus(ticketDetails.getStatus());
        ticket.setAssignedTo(ticketDetails.getAssignedTo());
        ticket.setCreatedAt(ticketDetails.getCreatedAt());
        ticket.setUpdatedAt(ticketDetails.getUpdatedAt());
        return ticketRepository.save(ticket);
    }

    @Override
    public void deleteTicket(Long ticketId) throws ResourceNotFoundException {
        Ticket ticket = getTicketById(ticketId);
        ticketRepository.delete(ticket);
    }
<<<<<<< HEAD

    @Override
    public long getTotalTicketsCount() {
        return ticketRepository.count();
    }
=======
>>>>>>> 12b8c64d86025c7f46edb92879398829c69ee108
}
