package com.imedia.challenge.service;

import com.imedia.challenge.model.Category;
import com.imedia.challenge.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(String id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException( String.format("Cannot find Category with id: %s", id)));
    }

    public void addCategory(Category category) {
        categoryRepository.insert(category);
    }

    public void updateCategory(Category category) {
        Category savedCategory = categoryRepository.findById(category.getId())
                .orElseThrow(() -> new RuntimeException( String.format("Cannot find Category by id: %s", category.getId())));

        // Update data
        savedCategory.setName(category.getName());
        savedCategory.setDesc(category.getDesc());
        savedCategory.setParent(category.getParent());
        savedCategory.setIcon(category.getIcon());

        categoryRepository.save(savedCategory);
    }

    public void deleteCategoryById(String id) {
        categoryRepository.deleteById(id);
    }

    public List<String> getCategoryTreeById(String id) {
        List<String> categoriesTreeNames = new ArrayList<>(Collections.emptyList());

        List<String> categoriesTreeIds = new ArrayList<>(Collections.singletonList(id));
        boolean isChildCategory = true;
        do {
            String currentCategoryId = categoriesTreeIds.get(categoriesTreeIds.size() - 1);
            Optional<Category> currentCategory = categoryRepository.findById(currentCategoryId);
            if (currentCategory.isPresent() && currentCategory.get().getParent() != null) {
                categoriesTreeIds.add(currentCategory.get().getParent());
                categoriesTreeNames.add(currentCategory.get().getName());
            } else isChildCategory = false;
        } while (isChildCategory);

        return categoriesTreeNames;
    }
}
