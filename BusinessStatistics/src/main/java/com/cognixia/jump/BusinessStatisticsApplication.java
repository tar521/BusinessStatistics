package com.cognixia.jump;

import java.util.Arrays;
import java.util.Collections;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

//@EnableResourceServer
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

//	 @Bean
//	    public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        CorsConfiguration config = new CorsConfiguration();
//	        config.setAllowCredentials(true);
//	        config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
//	        config.setAllowedMethods(Collections.singletonList("*"));
//	        config.setAllowedHeaders(Collections.singletonList("*"));
//	        source.registerCorsConfiguration("/**", config);
//	        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(source));
//	        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
//	        return bean;
//	    }
}
