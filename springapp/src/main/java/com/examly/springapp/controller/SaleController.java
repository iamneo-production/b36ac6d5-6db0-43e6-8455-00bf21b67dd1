package com.examly.springapp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.model.Sale;
import com.examly.springapp.service.SaleService;

@RestController
public class SaleController {
	
		@Autowired
		private SaleService saleService;
	 	

	    @GetMapping("/sales")
	    public List < Sale > getAllSales() {
	        return saleService.getAllSales();
	    }
	    
	    
	    @PostMapping("/sales")
	    public Sale createSale( @RequestBody Sale sale) {
	        return saleService.createSale(sale);
	    }
	    
	    @PutMapping("/sales/{id}")
	    public ResponseEntity < Sale > updateSale(@PathVariable(value = "id") Long saleId,
	         @RequestBody Sale salesDetails) throws ResourceNotFoundException {
	    	Sale sale = saleService.findById(saleId)
	            .orElseThrow(() -> new ResourceNotFoundException("Sale not found for this id :: " + saleId));

	    	sale.setName(salesDetails.getName());
	    	sale.setAmount(salesDetails.getAmount());
	    	sale.setDate(salesDetails.getDate());
	    	sale.setNotes(salesDetails.getNotes());
	        final Sale updatedSale = saleService.updateSale(sale);
	        return ResponseEntity.ok(updatedSale);
	    }

	    @DeleteMapping("/sales/{id}")
	    public Map < String, Boolean > deleteSale(@PathVariable(value = "id") Long saleId)
	    throws ResourceNotFoundException {
	    	Sale sale = saleService.findById(saleId)
	            .orElseThrow(() -> new ResourceNotFoundException("Sale not found for this id :: " + saleId));

	    	saleService.deleteSale(sale);
	        Map < String, Boolean > response = new HashMap < > ();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}