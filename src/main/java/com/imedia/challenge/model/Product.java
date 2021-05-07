package com.imedia.challenge.model;

import com.sun.istack.internal.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.net.URL;

@Document
public class Product {

    @Id
    private Long id;

    @Field(name = "name")
    @NotNull
    private String name;

    @Field(name = "desc")
    @NotNull
    private String desc;

    @Field(name = "priceId")
    @NotNull
    private Long priceId;

    @Field(name = "categoryId")
    @NotNull
    private Long categoryId;

    @Field(name = "image")
    @NotNull
    private URL image;

    public Product(Long id, String name, String desc, Long priceId, Long categoryId, URL image) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.priceId = priceId;
        this.categoryId = categoryId;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Long getPriceId() {
        return priceId;
    }

    public void setPriceId(Long priceId) {
        this.priceId = priceId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public URL getImage() {
        return image;
    }

    public void setImage(URL image) {
        this.image = image;
    }
}
