package com.ms1.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ms1")
public class MS1Controller {

  @GetMapping("/")
  public String test() {
    return "ms1";
  }
}