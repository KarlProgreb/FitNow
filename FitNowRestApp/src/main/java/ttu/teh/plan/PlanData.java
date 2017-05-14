package ttu.teh.plan;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PlanData {
	int sex;
	int age;
	double weight;
	double height;
}