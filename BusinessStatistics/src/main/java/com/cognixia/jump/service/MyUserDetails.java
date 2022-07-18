package com.cognixia.jump.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.cognixia.jump.model.User;

// class used by security to hold all the necessary user details/information needed to do authentication & authorization
public class MyUserDetails implements UserDetails {

	private static final long serialVersionUID = 1L;

	private String username;
	private String password;
	private boolean enabled;
	private List<GrantedAuthority> authorities;
	
	
	public MyUserDetails(User user) {
		
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.enabled = user.isEnabled();
		
		// Granted Authority = permissions/grants a user has to access resources or perform operations
		// GA given based on your role as a user
		this.authorities = Arrays.asList( new SimpleGrantedAuthority( user.getRole().name() ) ); // name() -> method from enum that returns a string repr.
		
	}
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	// if you are not storing information on your user table on whether the user account is expired or lock or has expired credentials,
	// just return true for all these values
	// Note: if they return false, will reject users from accessing APIs
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return enabled;
	}

}
