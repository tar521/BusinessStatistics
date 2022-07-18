package com.cognixia.jump.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("api")
@Tag(name = "user", description = "API for user actions")
public class UserController {

}
