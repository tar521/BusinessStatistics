package com.cognixia.jump.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.cognixia.jump.filter.JwtRequestFilter;
import com.cognixia.jump.service.MyUserDetailsService;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//	@Autowired
//	private MyUserDetailsService userDetailsService;
	
	@Autowired
	private JwtRequestFilter jwtRequestFilter;
	
	@Override
	protected void configure( AuthenticationManagerBuilder auth ) throws Exception {
		
//		auth.inMemoryAuthentication()
//			.withUser("admin")
//			.password(passwordEncoder().encode("password123"))
//			.authorities("ADMIN");
//		// security will only find the one built-in user within the service
//		auth.userDetailsService( userDetailsService );
	}
	
	@Override
	protected void configure( HttpSecurity http) throws Exception {
		
		// http://localhost:8080/authenticate --> sent user credentials to create JWT

		http.csrf().disable()
			.authorizeRequests()
			.antMatchers("/v3/api-docs/**").permitAll()
			.antMatchers("/swagger-ui*/**").permitAll()
			.antMatchers("/register").permitAll()
			.antMatchers("/authenticate").permitAll() // anyone can create token if they're a user
			
			.anyRequest().authenticated() // any other API in this project need to be authenticated (token or user info)
			.and().sessionManagement()
			.sessionCreationPolicy( SessionCreationPolicy.STATELESS ); // tell spring security to NOT CREATE SESSIONS, want to be stateless b/c JWTs

		
		
		// make sure jwt filter checked before any other filter, especially befor the filter that checks for a correct username & password
		
		http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		
		return super.authenticationManagerBean();
	}
}
