import {HttpClient, json} from 'aurelia-fetch-client'

export class reg {
    
    userData = {}
    
    addUser() {
        let client = new HttpClient();
        
        client.fetch('http://localhost:8080/users/add', {
            'method': "POST",
            'body': json(this.userData)
        })
            .then(response => response.json())
            .then(data => {
            console.log("Server saatis: " + data.firstName);
      });
        
         console.log("Meetod töötab!")
    }
}