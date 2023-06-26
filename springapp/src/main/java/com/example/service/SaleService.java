package com.example.service;

import java.util.List;
import java.util.Optional;

import com.example.model.Sale;

public interface SaleService {
	
    
    public List < Sale > getAllSales() ;
   
   
    public Sale createSale(Sale opportunity) ;
    
    
    public  Sale updateSale(Sale opportunity);
      
   
    public void deleteSale(Sale opportunity);
    
    public Optional<Sale> findById(Long oppoId);
}