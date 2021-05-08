package com.imedia.challenge.controller;

import com.imedia.challenge.model.Price;
import com.imedia.challenge.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*") // Unsecure: Used only for local development
@RestController
@RequestMapping("/api/prices")
public class PriceController {

    private final PriceService priceService;

    @Autowired
    public PriceController(PriceService priceService) {
        this.priceService = priceService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Price>> getAllPrices() {
        return ResponseEntity.ok(priceService.getAllPrices());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Price> getPriceById(@PathVariable Long id) {
        return ResponseEntity.ok(priceService.getPriceById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<Exception> addPrice(@Validated @RequestBody Price price) {
        priceService.addPrice(price);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Exception> updatePrice(@Validated @RequestBody Price price) {
        priceService.updatePrice(price);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Exception> deletePriceById(@PathVariable Long id) {
        priceService.deletePriceById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
