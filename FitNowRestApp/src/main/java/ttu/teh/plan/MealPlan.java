package ttu.teh.plan;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;
import ttu.teh.user.User;

@Entity
@Getter
@Setter
public class MealPlan {
	@Id
	@GeneratedValue
	long id;
	int calories;
	@OneToOne()
	User user;
}
