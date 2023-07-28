package com.examly.springapp.service;
import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Sale;

import java.util.List;

public interface SaleService {

    List<Sale> getAllSales();

    Sale getSaleById(Long saleId) throws ResourceNotFoundException;

    Sale createSale(Sale sale);

    Sale updateSale(Long saleId, Sale saleDetails) throws ResourceNotFoundException;

    void deleteSale(Long saleId) throws ResourceNotFoundException;

    long getTotalSalesCount();
}
