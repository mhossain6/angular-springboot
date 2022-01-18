package com.example.demo.web.controller;

import com.example.demo.web.models.Bar;
import com.example.demo.web.models.Foo;
import com.example.demo.web.service.HelloWorldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/helloworld")
@CrossOrigin("*")
public class HelloWorldController {

    @Autowired
    HelloWorldService helloWorldService;


    @GetMapping(value = "/foo")
    public List<Foo> findAllFoos() {
        return helloWorldService.findAllFoos();
    }

    @GetMapping(value = "/foo/{id}")
    public Foo findFooById(@PathVariable("id") Long id) {
        return helloWorldService.findFooById(id);
    }


    @GetMapping(value = "/bar")
    public List<Bar> findAllBars() {
        return helloWorldService.findAllBars();
    }

    @GetMapping(value = "/bar/{id}")
    public Bar findBarById(@PathVariable("id") Long id) {
        return helloWorldService.findBarById(id);
    }

}
