package com.imedia.challenge.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.net.URL;

@Document
public class Product {

    @Id
    private String id;

    @Field(name = "name")
    private String name;

    @Field(name = "desc")
    private String desc;

    @Field(name = "prices")
    private String[] prices;

    @Field(name = "categoryId")
    private String categoryId;

    @Field(name = "image")
    private URL image;

    public Product(String id, String name, String desc, String[] prices, String categoryId, URL image) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.prices = prices;
        this.categoryId = categoryId;
        this.image = image;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String[] getPrices() {
        return prices;
    }

    public void setPrices(String[] prices) {
        this.prices = prices;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

    public URL getImage() {
        return image;
    }

    public void setImage(URL image) {
        this.image = image;
    }
}
