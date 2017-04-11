package ttu.teh.plan;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;
import ttu.teh.user.User;

@Entity
@Getter
@Setter
public class WorkoutPlan {
	@Id
	@GeneratedValue
	long id;
	String color;
	@ManyToOne
	User user;
}
