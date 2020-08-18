package com.desafioInsight.service;

import java.util.List;

import com.desafioInsight.model.Activity;
import com.desafioInsight.model.User;

public interface ActivityService {
	Activity removeUser(Integer id, Integer userId);
	
	Activity addUser(Integer id, Integer userId);
	
	List<User> findUsersActivity(Integer id);
	
	List<User> findUsersNotOnActivity(Integer id);
	
	List<Activity> findAll();

	Activity save(Activity Activity);
	
	Activity save(Integer id, Activity Activity);
	
	void deleteById(Integer id);
	
	Activity findById(Integer id);
}