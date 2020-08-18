package com.desafioInsight.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.desafioInsight.model.User;
import com.desafioInsight.service.UserService;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

 /* static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
  }
  */
  @Autowired
	private UserService userService;

  
  @Override
	public UserDetails loadUserByUsername(String username) {
		User user = userService.findByEmail(username);

		if (user == null) {
			throw new UsernameNotFoundException("Usuário e/ou senha inválidos");
		} else {
			return user;
		}
	}
  /*
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }
*/
}


