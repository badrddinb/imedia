package com.imedia.challenge.model;

import com.sun.istack.internal.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.net.URL;

@Document
public class Category {

    @Id
    private String id;

    @Field(name = "name")
    @NotNull
    private String name;

    @Field(name = "desc")
    @NotNull
    private String desc;

    @Field(name = "parent")
    private String parent;

    @Field(name = "icon")
    @NotNull
    private URL icon;

    public Category(String id, String name, String desc, String parent, URL icon) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.parent = parent;
        this.icon = icon;
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

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    public URL getIcon() {
        return icon;
    }

    public void setIcon(URL icon) {
        this.icon = icon;
    }
}
