import {HttpClient, json} from 'aurelia-fetch-client'

export class mealplan {
    
    planData = {}
    planList = []
    
    activate() {
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/plans')
    .then(response => response.json())
    .then(plans => this.planList = plans);
    }
    
    getMealPlan() {
        let client = new HttpClient();
    client.fetch('http://localhost:8080/plans/', {
        'method': "GET",
        'body': json(planData)
    })
    
    .then(response => response.json())
    .then(data => {
        console.log("Height is: " + data.weight);
  });
    }
}