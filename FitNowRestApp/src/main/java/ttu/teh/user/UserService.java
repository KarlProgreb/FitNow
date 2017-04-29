package ttu.teh.user;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	User addUser(User user) {
		// here you can do some validations etc before saving the user
		return userRepository.save(user);
	}

	List<User> getAllUsers() {
		return userRepository.findAll();
	}

	User getUserById(long userId) {
		return userRepository.findOne(userId);
	}

	public User getMealPlan(User user) {
		// TODO Auto-generated method stub
		return null;
	}
	public int getNumber() {
		return 3;
	}
}
