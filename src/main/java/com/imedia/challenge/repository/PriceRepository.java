package com.imedia.challenge.repository;

import com.imedia.challenge.model.Price;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PriceRepository extends MongoRepository<Price, String> {}
