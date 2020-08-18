package com.desafioInsight.service;

import java.util.List;

import com.desafioInsight.model.User;

public interface UserService {
	User findByEmail(String email);
	List<User> findAll();

	User save(User user);
	
	void deleteById(Integer id);
	
	User findById(Integer id);
}