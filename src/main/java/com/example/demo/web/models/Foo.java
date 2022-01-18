package com.example.demo.web.models;

import lombok.Data;

@Data
public class Foo {
    private Long id;
    private String name;
    public Foo(){}
    public Foo(Long id, String name){
        this.id = id;
        this.name = name;
    }
}
