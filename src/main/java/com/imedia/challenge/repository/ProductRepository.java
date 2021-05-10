package com.imedia.challenge.repository;

import com.imedia.challenge.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

    @Query("{ categoryId: ?0 }")
    List<Product> findAllByCategoryId(String categoryId);
}
