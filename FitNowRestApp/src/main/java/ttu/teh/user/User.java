package ttu.teh.user;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;
import ttu.teh.plan.MealPlan;

@Entity
@Getter
@Setter
public class User {
	@Id
	@GeneratedValue
	long id;
	String firstName;
	String lastName;
	String eMail;
	
	@OneToOne(mappedBy="user",  // välja nimi MealPlan klassis
			cascade=CascadeType.ALL)
	MealPlan mealplan;
}
