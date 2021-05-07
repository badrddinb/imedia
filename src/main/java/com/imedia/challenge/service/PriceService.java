package com.imedia.challenge.service;

import com.imedia.challenge.model.Price;
import com.imedia.challenge.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class PriceService {

    private PriceRepository priceRepository;

    @Autowired
    public PriceService(PriceRepository priceRepository) {
        this.priceRepository = priceRepository;
    }

    public List<Price> getAllPrices() {
        return priceRepository.findAll();
    }

    public Optional<Price> getPriceById(Long id) {
        return priceRepository.findById(id.toString());
    }

    public void addPrice(Price price) {
        priceRepository.insert(price);
    }

    public void updatePrice(Price price) {
        Price savedPrice = priceRepository.findById(price.getId().toString())
                .orElseThrow(() -> new RuntimeException( String.format("Cannot find Product by id: %s", price.getId().toString())));

        // Update data
        savedPrice.setPrice(price.getPrice());
        savedPrice.setCurrency(price.getCurrency());

        priceRepository.save(savedPrice);
    }

    public void deletePriceById(Long id) {
        priceRepository.deleteById(id.toString());
    }
}
