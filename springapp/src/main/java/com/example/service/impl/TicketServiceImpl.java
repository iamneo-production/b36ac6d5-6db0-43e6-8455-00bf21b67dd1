package com.example.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Ticket;
import com.example.repository.TicketRepository;
import com.example.service.TicketService;

@Service
public class TicketServiceImpl implements TicketService{
	
	@Autowired
    private TicketRepository ticketRepository;

	@Override
	public List<Ticket> getAllTickets() {
			return ticketRepository.findAll();
	}

	@Override
	public Ticket createTicket(Ticket ticket) {
		return ticketRepository.save(ticket);
	}

	@Override
	public Ticket updateTicket(Ticket ticket) {
		return ticketRepository.save(ticket);
	}

	@Override
	public void deleteTicket(Ticket ticket) {
		ticketRepository.delete(ticket);
	}

	@Override
	public Optional<Ticket> findById(Long ticketId) {
		return ticketRepository.findById(ticketId);
	}	
}