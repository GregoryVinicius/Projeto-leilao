package com.leilao.back.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/index")
public class index {
    @GetMapping
    public String index() {
        return "Hello World Spring";
    }

    @PostMapping
    public String save() {
        return "Sucesso";
    }
}