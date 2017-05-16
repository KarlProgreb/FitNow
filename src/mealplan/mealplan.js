import {HttpClient, json} from 'aurelia-fetch-client'

export class mealplan {
    
calories = {}
userMeal = {}

    calculate() {
        let client = new HttpClient();
        
    console.log("Andmed on: " + this.sex + " " + this.age + " " + this.weight + " " + this.height + "  " + this.goal)
    
       if (this.sex == 0) {
           
           if (this.goal == 0) {
                this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161) * 0.85
                console.log("Calories: " + this.calories)
                
           } else if (this.goal == 1) {
               this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161) * 1
               console.log("Calories: " + this.calories)
               
           } else {
               this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161) * 1.25
               console.log("Calories: " + this.calories)
           }
    
      } else {
          
          if (this.goal == 0) {
                this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5) * 0.85
                console.log("Calories: " + this.calories)
                
           } else if (this.goal == 1) {
               this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5) * 1.1
               console.log("Calories: " + this.calories)
               
           } else {
               this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5) * 1.6
               console.log("Calories: " + this.calories)
            }
        } 
            
        
        if (this.calories < 1500) {
            client.fetch('http://localhost:8080/plans/1')
                 .then(response => response.json())
                 .then(plans => this.userMeal = plans)

        } else if (this.calories < 1700) {
            client.fetch('http://localhost:8080/plans/2')
                .then(response => response.json())
                .then(plans => this.userMeal = plans)

        } else if (this.calories < 2000) {
            client.fetch('http://localhost:8080/plans/3')
                .then(response => response.json())
                .then(plans => this.userMeal = plans)

        } else if (this.calories < 2300) {
            client.fetch('http://localhost:8080/plans/4')
                .then(response => response.json())
                .then(plans => this.userMeal = plans)

        } else if (this.calories < 2600) {
            client.fetch('http://localhost:8080/plans/5')
                .then(response => response.json())
                .then(plans => this.userMeal = plans)
            
        } else if (this.calories < 2900) {
            client.fetch('http://localhost:8080/plans/6')
                .then(response => response.json())
                .then(plans => this.userMeal = plans)
            
        } else if (this.calories < 3100) {
            client.fetch('http://localhost:8080/plans/7')
                .then(response => response.json())
                .then(plans => this.userMeal = plans)
            
        } else if (this.calories < 3400) {
            client.fetch('http://localhost:8080/plans/8')
                .then(response => response.json())
                .then(plans => this.userMeal = plans)
            
        } else if (this.calories < 99999) {
            client.fetch('http://localhost:8080/plans/9')
                .then(response => response.json())
                .then(plans => this.userMeal = plans)
            
        } 
        
        document.getElementById("show").innerHTML = JSON.stringify(this.userMeal)
        console.log("Saadeti: " + JSON.stringify(this.userMeal));
    }
}
