package com.cognixia.jump;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

@SpringBootApplication
@SecurityScheme(name = "v3/api-docs", scheme = "basic", type = SecuritySchemeType.HTTP, in = SecuritySchemeIn.HEADER)
@OpenAPIDefinition(
		info = @Info( title="Final Project", version="1.0",
				description = "API yet to be described.",
				contact = @Contact(name = "Group 2", email = "notreal@email.com",
									url = "mywebpage.com")))
public class BusinessStatisticsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusinessStatisticsApplication.class, args);
	}

}
