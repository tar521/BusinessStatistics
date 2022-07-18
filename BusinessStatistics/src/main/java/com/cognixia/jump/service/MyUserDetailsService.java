package com.cognixia.jump.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Optional<User> userFound = repo.findByUsername(username);
		
		// if user not found, throw custom exception provided by spring security
		if(userFound.isEmpty()) {
			throw new UsernameNotFoundException(username);
		}
		
		// as long as the user is found, create the user details object and pass along necessary info so spring security
		// can do authorization and authentication
		return new MyUserDetails( userFound.get() );
	}

}
