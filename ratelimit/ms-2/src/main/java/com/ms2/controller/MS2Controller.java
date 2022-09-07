package com.ms2.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ms2")
public class MS2Controller {

  @GetMapping("/")
  public String test() {
    return "ms2";
  }
}