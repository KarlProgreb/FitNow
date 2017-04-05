export class App {
    
 configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia Application FitNow';
     
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' , title: "Home page",   nav: true },
      { route: 'reg',  name: 'reg',      moduleId: 'reg/reg', title: "Registration",   nav: true },
      { route: 'log',  name: 'log',      moduleId: 'log/log', title: "Login",   nav: true },
      { route: 'goal',  name: 'goal',      moduleId: 'goal/goal', title: "Goal",   nav: true },
      { route: 'previous',  name: 'previous',      moduleId: 'previous/previous', title: "Previous",   nav: true },
    ]);
  }
    
}