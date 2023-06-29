package com.examly.springapp.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Ticket;
import com.examly.springapp.repository.TicketRepository;
import com.examly.springapp.service.TicketService;

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