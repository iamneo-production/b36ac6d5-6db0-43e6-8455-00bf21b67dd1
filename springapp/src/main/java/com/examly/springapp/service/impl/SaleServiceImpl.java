package com.examly.springapp.service.impl;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Sale;
import com.examly.springapp.repository.SaleRepository;
import com.examly.springapp.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SaleServiceImpl implements SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Override
    public List<Sale> getAllSales() {
        return saleRepository.findAll();
    }

    @Override
    public Sale getSaleById(Long saleId) throws ResourceNotFoundException {
        Optional<Sale> sale = saleRepository.findById(saleId);
        if (sale.isPresent()) {
            return sale.get();
        } else {
            throw new ResourceNotFoundException("Sale not found with ID: " + saleId);
        }
    }

    @Override
    public Sale createSale(Sale sale) {
        return saleRepository.save(sale);
    }

    @Override
    public Sale updateSale(Long saleId, Sale saleDetails) throws ResourceNotFoundException {
        Sale sale = getSaleById(saleId);
        sale.setName(saleDetails.getName());
        sale.setCustomer(saleDetails.getCustomer());
        sale.setOpportunity(saleDetails.getOpportunity());
        sale.setAmount(saleDetails.getAmount());
        sale.setDate(saleDetails.getDate());
        sale.setNotes(saleDetails.getNotes());
        return saleRepository.save(sale);
    }

    @Override
    public void deleteSale(Long saleId) throws ResourceNotFoundException {
        Sale sale = getSaleById(saleId);
        saleRepository.delete(sale);
    }
}
