package com.cognixia.jump.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {

	public static enum Role {
		ROLE_USER, ROLE_HEAD, ROLE_ADMIN   // roles should start with capital ROLE_ and be completely capital letters
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank
	@Column(unique = true, nullable = false)
	private String username;
	
	@NotBlank
	@Column(nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Role role;
	
	@Column(columnDefinition = "boolean default true")
	private boolean enabled; // is user enabled? Are they currently able to use this account
	
	
	@OneToMany(mappedBy = "user")
	private List<Sales> sales;
	
	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department dept;
	
//	@OneToMany(mappedBy = "user") //, cascade = CascadeType.ALL)
//	@JsonIgnore
//	private List<Cart> cartItems;
	
	
	public List<Sales> getSales() {
		return sales;
	}

	public void setSales(List<Sales> sales) {
		this.sales = sales;
	}

	public Department getDept() {
		return dept;
	}

	public void setDept(Department dept) {
		this.dept = dept;
	}

	public User() {
		
	}

	public User(Integer id, String username, @NotBlank String password, Role role, boolean enabled) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.enabled = enabled;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", role=" + role + ", enabled="
				+ enabled + "]";
	}
	
}












