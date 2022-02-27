package com.example.demo.web.models;

import lombok.Data;

import java.util.Date;

@Data
public class User {
    Integer id;
    String username;
    String password;
    String firstName;
    String lastName;
    String token;

    public User() {

        this.id = 1;
        this.username = "Admin";
        this.password = "*******";
        this.firstName = "John";
        this.lastName = "Doe";
        this.token = "t"+ (new Date()).toString();
    }
}
