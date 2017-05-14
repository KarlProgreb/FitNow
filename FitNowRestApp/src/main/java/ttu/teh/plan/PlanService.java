package ttu.teh.plan;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PlanService {
	
	private PlanRepository planRepository;

	public PlanService(PlanRepository planRepository) {
		this.planRepository = planRepository;
	}

	Plan addPlan(Plan plan) {
		// here you can do some validations etc before saving the user
		return planRepository.save(plan);
	}

	List<Plan> getAllPlans() {
		return planRepository.findAll();
	}

	Plan getPlanById(long planId) {
		return planRepository.findOne(planId);
	}
}
