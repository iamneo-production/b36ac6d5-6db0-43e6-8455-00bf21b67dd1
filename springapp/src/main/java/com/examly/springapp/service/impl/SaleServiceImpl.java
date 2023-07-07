package main.java.com.examly.springapp.service.impl;

import com.examly.springapp.Exception.ResourceNotFoundException;


import main.java.com.examly.springapp.model.Sale;
import main.java.com.examly.springapp.service.SaleService;
import main.java.com.examly.springapp.repository.SaleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class SaleServiceImpl implements SaleService{
    
    @Autowired
    private SaleRepository salerepo;

    @Override
    public List<Sale> getAllSale(){
        return salerepo.findAll();
    }

    @Override
    public Sale getSaleById(Long saleId) throws ResourceNotFoundException{
        Optional<Sale> sale = salerepo.findById(saleId);
        if(sale.isPresent()){
            return sale.get();
        }
        else{
            throw new ResourceNotFoundException("Sale with ID: " + saleId +" not Found !!");
        }
    }

    @Override
    public Sale createSale(Sale sale){
        return salerepo.save(sale);
    }

    @Override
    public Sale updateSale(Long saleId, Sale saleDetails) throws ResourceNotFoundException{
        Sale saleToupdate = getSaleById(saleId);
        saleToupdate.setName(saleDetails.getName());
        saleToupdate.setCustomer(saleDetails.getCustomer());
        saleToupdate.setOpportunity(saleDetails.getOpportunity());
        saleToupdate.setAmount(saleDetails.getAmount());
        saleToupdate.setDate(saleDetails.getDate());
        saleToupdate.setNotes(saleDetails.getNotes());
        return salerepo.save(saleToupdate);
    }

    @Override
    public void deleteSale(Long saleId) throws ResourceNotFoundException{
        Sale sale = getSaleById(saleId);
        salerepo.delete(sale);
    }

}
