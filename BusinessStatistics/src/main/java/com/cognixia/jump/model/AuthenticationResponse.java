package com.cognixia.jump.model;

// response object for when /authenticate POST request is called and returns the jwt created
public class AuthenticationResponse {
	
	private String jwt;
	
	public AuthenticationResponse(String jwt) {
		this.jwt = jwt;
	}

	public String getJwt() {
		return jwt;
	}

}
