package com.cognixia.jump.controller;

import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.cognixia.jump.filter.JwtRequestFilter;
import com.cognixia.jump.model.Sales;
import com.cognixia.jump.model.User;
import com.cognixia.jump.repository.SalesRepository;
import com.cognixia.jump.service.MyUserDetails;
import com.cognixia.jump.service.MyUserDetailsService;
import com.cognixia.jump.service.SalesService;
import com.cognixia.jump.util.JwtUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(value = SalesController.class, includeFilters = {
		@ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = JwtUtil.class) })
public class SalesControllerTest {

	private static final String STARTING_URI = "http://localhost:8080/api";

	@Autowired
	private MockMvc mvc;

	@MockBean
	private MyUserDetailsService myUserDetailsService;

	@MockBean
	private SalesRepository repo;
	
	@Autowired
	private SalesService service;

	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private JwtRequestFilter filter;
	
	@Test
	public void testgetSales() throws Exception {
		String uri = STARTING_URI + "/sales";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
	
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetUserById() throws Exception {
		String uri = STARTING_URI + "/sales/{id}";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesByDept() throws Exception {
		String uri = STARTING_URI + "/sales/dept";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesByDeptId() throws Exception {
		String uri = STARTING_URI + "/sales/dept/{id}";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesByYear() throws Exception {
		String uri = STARTING_URI + "/sales/year/{year}";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesTotalByYear() throws Exception {
		String uri = STARTING_URI + "/sales/year/sum/{year}";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesByYearMonth() throws Exception {
		String uri = STARTING_URI + "/sales/month";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesByDeptByYear() throws Exception {
		String uri = STARTING_URI + "/sales/dept/year";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesByDeptByYearMonth() throws Exception {
		String uri = STARTING_URI + "/sales/dept/month";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesByUser() throws Exception {
		String uri = STARTING_URI + "/sales/user";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testgetSalesByUserId() throws Exception {
		String uri = STARTING_URI + "/sales/user/{id}";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		List<Sales> allSales = new ArrayList<Sales>();
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		Sales sale2 = new Sales(2, 30000, LocalDateTime.now(), true);
		Sales sale3 = new Sales(3, 40000, LocalDateTime.now(), true);
		allSales.add(sale1);
		allSales.add(sale2);
		allSales.add(sale3);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testcreateSale() throws Exception {
		String uri = STARTING_URI + "/sales";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testupdateSale() throws Exception {
		String uri = STARTING_URI + "/sales";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testdeleteSale() throws Exception {
		String uri = STARTING_URI + "/sales";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	@Test
	public void testdeleteSaleById() throws Exception {
		String uri = STARTING_URI + "/sales/{id}";
		User admin = new User(1, "admin", "pass123", "admin jones", "test address", "admin@me.com", User.Role.ROLE_ADMIN, true);
		
		Sales sale1 = new Sales(1, 20000, LocalDateTime.now(), true);
		
		UserDetails dummy = new MyUserDetails(admin);
		String jwtToken = jwtUtil.generateTokens(dummy);
		RequestBuilder request = MockMvcRequestBuilders.get(uri).header("Authorization", "Bearer " + jwtToken);
		
		when(myUserDetailsService.loadUserByUsername("admin")).thenReturn(dummy);
	}
	
	
	public static String asJsonString(final Object obj) {
		
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (JsonProcessingException e) {
			throw new RuntimeException();
		}
		
	}
}
