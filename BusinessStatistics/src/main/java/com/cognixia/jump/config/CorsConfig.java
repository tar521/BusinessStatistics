package com.cognixia.jump.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


// for running locally only
@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		
		registry.addMapping("/**")
				.allowedOrigins("*")
				.allowedHeaders("*");
				//.allowedMethods("GET", "PUT", "POST", "HEAD", "DELETE", "OPTIONS");
		
	}

}