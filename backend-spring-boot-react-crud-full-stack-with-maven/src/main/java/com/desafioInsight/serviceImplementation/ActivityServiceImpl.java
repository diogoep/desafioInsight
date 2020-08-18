package com.desafioInsight.serviceImplementation;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafioInsight.model.Activity;
import com.desafioInsight.model.User;
import com.desafioInsight.repository.ActivityRepository;
import com.desafioInsight.repository.UserRepository;
import com.desafioInsight.service.ActivityService;

@Service
public class ActivityServiceImpl implements ActivityService{

	@Autowired
	private ActivityRepository activityRepository;
	  
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> findUsersActivity(Integer id) {
		Activity activity = activityRepository.getOne(id);
		return activity.getUsers();
	}

	@Override
	public Activity addUser(Integer id, Integer userId) {
		Activity activity = activityRepository.getOne(id);
		User user = userRepository.getOne(userId);
		activity.addUser(user);
		return activityRepository.save(activity);
	}
	
	@Override
	public Activity removeUser(Integer id, Integer userId) {
		Activity activity = activityRepository.getOne(id);
		User user = userRepository.getOne(userId);
		activity.removeUser(user);
		return activityRepository.save(activity);
	}
	
	@Override
	public List<User> findUsersNotOnActivity(Integer id) {
		Activity activity = activityRepository.getOne(id);
		List<User> users = userRepository.findAll();
		List<User> usersReturned = new ArrayList<User>();
		for(User user : users) {
			if(!(activity.getUsers().contains(user))) {
				usersReturned.add(user);
			}
		}
		return usersReturned;
	}
	
	@Override
	public List<Activity> findAll() {
		return activityRepository.findAll();
	}

	@Override
	public Activity save(Activity activity) {
		return activityRepository.save(activity);
	}
	
	@Override
	public Activity save(Integer id, Activity activity) {
		User user = userRepository.getOne(id);
		activity.addUser(user);
		return activityRepository.save(activity);
	}

	@Override
	public void deleteById(Integer id) {
		activityRepository.deleteById(id);
	}

	@Override
	public Activity findById(Integer id) {
		return activityRepository.getOne(id);
	}

	
	
}