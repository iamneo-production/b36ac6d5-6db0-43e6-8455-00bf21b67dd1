package main.java.com.examly.springapp.controller;

import com.examly.springapp.Exception.ResourceNotFoundException;


import main.java.com.examly.springapp.model.Sale;
import main.java.com.examly.springapp.service.SaleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/sale")
@CrossOrigin
public class SaleController {
    
    @Autowired
    private SaleService saleService;

    @GetMapping
    public List<Sale> getAllSales(){
        return saleService.getAllSale();
    }

    @PostMapping("")
    public ResponseEntity<Boolean> createSales(@RequestBody Sale sale){
        Sale createdSale = saleService.createSale(sale);
        Boolean isSuccess = createdSale != null;
        return ResponseEntity.ok(isSuccess);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sale> getSalesById(@PathVariable(value = "id") Long saleId ) throws ResourceNotFoundException{
        Sale sale1 = saleService.getSaleById(saleId);
        return ResponseEntity.ok().body(sale1);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sale> updateSales(
        @PathVariable(value = "id") Long saleId,
        @RequestBody Sale saleDetails) throws ResourceNotFoundException{

            Sale updatedSale = saleService.updateSale(saleId, saleDetails);
            return ResponseEntity.ok(updatedSale);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSale(@PathVariable(value = "id") Long saleId)
            throws ResourceNotFoundException {
        saleService.deleteSale(saleId);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
