package ttu.teh.plan;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Plan {
	@Id
	@GeneratedValue
	long id;
	int calories;
	String content;
}