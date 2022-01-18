package com.example.demo.web.models;

import lombok.Data;

@Data
public class Bar {
    private Long id;
    private String name;
    public Bar(){}
    public Bar(Long id, String name){
        this.id = id;
        this.name = name;
    }
}
