package com.jphanos.FirstSpring;

import org.springframework.web.bind.annotation.*;

@RestController // Specialized version you can also use Controller which combines controller and Response Body
public class HelloController { 

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    // @RequestBody annotations used to pass in the request body.
    @PostMapping("/hello")
    public String helloPost(@RequestBody String name) {
        return "Hello " + name + "!";
    }
}
