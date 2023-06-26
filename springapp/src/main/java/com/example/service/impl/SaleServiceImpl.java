package com.virtusa.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.virtusa.model.Sale;
import com.virtusa.repository.SaleRepository;
import com.virtusa.service.SaleService;

@Service
public class SaleServiceImpl implements SaleService{
	
	@Autowired
    private SaleRepository saleRepository;

	@Override
	public List<Sale> getAllSales() {
			return saleRepository.findAll();
	}

	@Override
	public Sale createSale(Sale sale) {
		return saleRepository.save(sale);
	}

	@Override
	public Sale updateSale(Sale sale) {
		return saleRepository.save(sale);
	}

	@Override
	public void deleteSale(Sale sale) {
		saleRepository.delete(sale);
	}

	@Override
	public Optional<Sale> findById(Long saleId) {
		return saleRepository.findById(saleId);
	}
}