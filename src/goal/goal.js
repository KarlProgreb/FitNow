export class goal {
    
        userData = {}
    
    getMealPlan() {
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users/getMeal', {
            'method': "GET",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
            console.log("Server saatis: " + data.firstName);
      });
        
         console.log("Meetod töötab!")
    }

}