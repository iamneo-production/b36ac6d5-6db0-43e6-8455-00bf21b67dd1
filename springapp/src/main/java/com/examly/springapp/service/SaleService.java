package main.java.com.examly.springapp.service;

import com.examly.springapp.Exception.ResourceNotFoundException;
import main.java.com.examly.springapp.model.Sale;

import java.util.List;


public interface SaleService {
    
    List<Sale> getAllSale();

    Sale getSaleById(Long saleId) throws ResourceNotFoundException;

    Sale createSale(Sale sale);

    Sale updateSale(Long saleId, Sale saleDetails) throws ResourceNotFoundException;

    void deleteSale(Long saleId) throws ResourceNotFoundException;
}
