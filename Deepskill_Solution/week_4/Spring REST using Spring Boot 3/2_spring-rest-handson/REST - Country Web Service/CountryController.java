package com.cognizant.spring_learn.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.spring_learn.model.Country;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() {
        System.out.println("Start of getCountryIndia()");
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        Country country = (Country) context.getBean("country");
        return country;
    }
}
