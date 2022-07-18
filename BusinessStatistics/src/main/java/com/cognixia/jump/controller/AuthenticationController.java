package com.cognixia.jump.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.AuthenticationRequest;
import com.cognixia.jump.model.AuthenticationResponse;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.UserRepository;
import com.cognixia.jump.util.JwtUtil;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping
@Tag(name = "authenticator", description = "API to authenticate or create a user")
public class AuthenticationController {

	@Autowired
	UserRepository repo;

	@Autowired
	JwtUtil jwtUtil;

	@Autowired
	UserDetailsService userDetailsService;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	PasswordEncoder encoder;

	@Operation(summary = "Get a JWT Token for an inputed user.", description = "Gets a JWT Token for an inputed user to use the allowed api methods.")
	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest request) throws Exception {

		// try to catch the exception for bad credentials, just so we can set our own
		// message when this doesn't work
		try {
			// make sure we have a valid user by checking their username and password
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

		} catch (BadCredentialsException e) {
			// provide our own message on why login didn't work
			throw new Exception("Incorrect username or password");
		}

		// as long as no exception was thrown, user is valid

		// load in the user details for that user
		final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());

		// generate the token for that user
		final String jwt = jwtUtil.generateTokens(userDetails);

		// return the token
		return ResponseEntity.status(201).body(new AuthenticationResponse(jwt));
	}

	@Operation(summary = "Create a user.", description = "Creates a user in the database. Their password is encrypted before it is saved. Only users can be created this way.")
	// ONLY ABLE TO MAKE USERS - NO ADMINS
	@PostMapping("/register")
	public ResponseEntity<?> createUser(@Valid @RequestBody User user) {

		user.setId(null);
		user.setRole(User.Role.ROLE_USER);

		// encode the password before it gets saved to the db, if not password will be
		// stored
		// as plain text and cause issues
		// security won't encode our password for us when we do our POST, so we do it
		// here on this line
		user.setPassword(encoder.encode(user.getPassword()));

		User created = repo.save(user);

		return ResponseEntity.status(201).body(created);

	}
}
