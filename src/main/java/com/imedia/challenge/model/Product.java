package com.imedia.challenge.model;

import com.sun.istack.internal.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.net.URL;
import java.util.UUID;

@Document
public class Product {

    @Id
    private String id;

    @Field(name = "name")
    @NotNull
    private String name;

    @Field(name = "desc")
    @NotNull
    private String desc;

    @Field(name = "prices")
    @NotNull
    private float[] prices;

    @Field(name = "currencies")
    @NotNull
    private String[] currencies;

    @Field(name = "categoryId")
    @NotNull
    private UUID categoryId;

    @Field(name = "image")
    @NotNull
    private URL image;

    public Product(String id, String name, String desc, float[] prices, String[] currencies, UUID categoryId, URL image) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.prices = prices;
        this.currencies = currencies;
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

    public float[] getPrices() {
        return prices;
    }

    public void setPrices(float[] prices) {
        this.prices = prices;
    }

    public String[] getCurrencies() {
        return currencies;
    }

    public void setCurrencies(String[] currencies) {
        this.currencies = currencies;
    }

    public UUID getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(UUID categoryId) {
        this.categoryId = categoryId;
    }

    public URL getImage() {
        return image;
    }

    public void setImage(URL image) {
        this.image = image;
    }
}
