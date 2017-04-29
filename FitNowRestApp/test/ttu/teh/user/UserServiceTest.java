package ttu.teh.user;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class UserServiceTest {
	private UserService userService;
	
	@Before
	public void setup () {
		this.userService = new UserService(null);
		
	}

	@Test
	public void testIfNumberIsThree() {
		assertEquals(3, userService.getNumber());
	}

}
