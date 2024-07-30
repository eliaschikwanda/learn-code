package com.jphanos.FirstSpring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Specialized version you can also use Controller which combines controller and Response Body
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }
}
