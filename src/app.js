export class App {
    
 configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia Application FitNow';
     
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' , title: "Home page",   nav: true },
      { route: 'mealplan',  name: 'mealplan',      moduleId: 'mealplan/mealplan', title: "Mealplan",   nav: true },
    ]);
  }
    
}