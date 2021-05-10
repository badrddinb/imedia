package com.imedia.challenge.service;

import com.imedia.challenge.model.Product;
import com.imedia.challenge.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getAllProductsByCategoryId(String categoryId) {
        return productRepository.findAllByCategoryId(categoryId);
    }

    public Product getProductById(String id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException( String.format("Cannot find Product with id: %s", id)));
    }

    public void addProduct(Product product) {
        productRepository.insert(product);
    }

    public void updateProduct(Product product) {
        Product savedProduct = productRepository.findById(product.getId())
                .orElseThrow(() -> new RuntimeException( String.format("Cannot find Product by id: %s", product.getId())));

        // Update data
        savedProduct.setName(product.getName());
        savedProduct.setDesc(product.getDesc());
        savedProduct.setPrices(product.getPrices());
        savedProduct.setCategoryId(product.getCategoryId());
        savedProduct.setImage(product.getImage());

        productRepository.save(savedProduct);
    }

    public void deleteProductById(String id) {
        productRepository.deleteById(id);
    }
}
