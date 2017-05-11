package ttu.teh.plan;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlanController {
	
	private PlanService planService;

	public PlanController(PlanService planService) {
		this.planService = planService;
	}
	
	/*
	@RequestMapping(value="/plans/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Plan addPlan(@RequestBody Plan plan) {
		return planService.addPlan(plan);
	}
	*/
	
	/*
	@RequestMapping(value="/plans/getMeal", method=RequestMethod.GET,
			consumes = "application/json")
	public Plan getMealPlan(@RequestBody Plan plan) {
		return planService.getMealPlan(plan);
	}
	*/
	
	@RequestMapping(value="/plans", method=RequestMethod.GET)
	public List<Plan> getAllPlans() {
		return planService.getAllPlans();
	}
	
	@RequestMapping(value = "/plans/{id}", method=RequestMethod.GET)
	public Plan getPlan(@PathVariable("id") long planId) {
		return planService.getPlanById(planId);
	}
}