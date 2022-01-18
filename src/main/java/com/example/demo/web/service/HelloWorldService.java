package com.example.demo.web.service;

import com.example.demo.web.models.Bar;
import com.example.demo.web.models.Foo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class HelloWorldService {
    List<Bar> bars = new ArrayList<>();
    List<Foo> foos = new ArrayList<>();

    public HelloWorldService() {

        bars.add(new Bar( 1L, "bar1"));
        bars.add(new Bar( 2L, "bar2"));

        foos.add(new Foo( 1L, "foo1"));
        foos.add(new Foo( 2L, "foo2"));

    }

    public List<Bar> findAllBars() {
        return bars;
    }

    public List<Foo> findAllFoos() {
        return foos;
    }

    public Bar findBarById(Long id) {
        List<Bar> found = bars.stream().filter(bar -> {
                    boolean b = bar.getId().compareTo(id) == 0;
                    return b;

                })
                .collect(Collectors.toList());
        if (found != null) {
            return found.get(0);
        }
        return null;
    }

    public Foo findFooById(Long id) {


        List<Foo> found = foos.stream().filter(foo -> {
                    boolean b = foo.getId().compareTo(id) == 0;
                    return b;
                })
                .collect(Collectors.toList());
        if (found != null) {
            return found.get(0);
        }
        return null;
    }
}
