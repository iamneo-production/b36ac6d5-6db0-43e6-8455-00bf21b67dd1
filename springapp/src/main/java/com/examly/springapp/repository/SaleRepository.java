package main.java.com.examly.springapp.repository;

import main.java.com.examly.springapp.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long>{
    
}
