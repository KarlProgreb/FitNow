package Plan;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;
import User.User;

@Entity
@Getter
@Setter
public class MealPlan {
	@Id
	@GeneratedValue
	long id;
	String color;
	@ManyToOne
	User user;
}