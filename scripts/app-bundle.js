define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'Aurelia Application FitNow';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index', title: "Home page", nav: true }, { route: 'reg', name: 'reg', moduleId: 'reg/reg', title: "Registration", nav: true }, { route: 'log', name: 'log', moduleId: 'log/log', title: "Login", nav: true }, { route: 'goal', name: 'goal', moduleId: 'goal/goal', title: "Goal", nav: true }, { route: 'previous', name: 'previous', moduleId: 'previous/previous', title: "Previous", nav: true }]);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true,
    host: "http://localhost:8080"
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('goal/goal',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var goal = exports.goal = function goal() {
    _classCallCheck(this, goal);
  };
});
define('home/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);
  };
});
define('log/log',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var log = exports.log = function log() {
    _classCallCheck(this, log);
  };
});
define('previous/previous',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var previous = exports.previous = function previous() {
    _classCallCheck(this, previous);
  };
});
define('reg/reg',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.reg = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var reg = exports.reg = function () {
        function reg() {
            _classCallCheck(this, reg);

            this.userData = {};
        }

        reg.prototype.addUser = function addUser() {
            var client = new _aureliaFetchClient.HttpClient();

            client.fetch('http://localhost:8080/users/add', {
                'method': "POST",
                'body': (0, _aureliaFetchClient.json)(this.userData)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log("Server saatis: " + data.firstName);
            });

            console.log("Meetod töötab!");
        };

        return reg;
    }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n<require from=\"navbar.html\"></require>\r\n<navbar router.bind=\"router\"></navbar>\r\n<router-view></router-view>\r\n</template>"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\r\n    <div style=\"text-align: center;\">\r\n    <p>\r\n    <a repeat.for=\"item of router.navigation\" href.bind=\"item.href\">${item.title}</a>\r\n    </p>\r\n    </div>\r\n</template>"; });
define('text!goal/goal.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>FitNow</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\r\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\r\n</head>\r\n    \r\n<body>\r\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\r\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\r\n\r\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">To browse your previously generated fitness plans, click \"Browse\": </p>\r\n<div style=\"text-align: center;\">\r\n    <a style=\"text-align: center;\" href=\"#/previous\" class=\"button\">Browse</a>\r\n    </div>\r\n<br>\r\n    \r\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">To generate a brand new fitness plan, please select your main fitness goal: </p>\r\n    \r\n<form style=\"text-align: center;\">\r\n  <input type=\"radio\" name=\"goal\" value=\"LoseWeight\"> Lose weight<br>\r\n  <input type=\"radio\" name=\"goal\" value=\"BuildMuscle\"> Build muscle<br>\r\n  <input type=\"radio\" name=\"goal\" value=\"ImproveEndurance\"> Improve endurance  \r\n</form> \r\n    \r\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Please enter your details to calculate your personal fitness schedules: </p>\r\n    \r\n<div style=\"text-align: center;\">\r\n    \r\n        <form id=\"SexForm\">\r\n            Gender:\r\n                <input type=\"radio\" name=\"radioName\" value=\"1\">Male \r\n                <input type=\"radio\" name=\"radioName\" value=\"2\">Female\r\n        </form> \r\n        <br>\r\n        <div>Age: <input id=\"age\" type=\"text\" name=\"fname\"></div>\r\n        <div>Weight (kg): <input id=\"weight\" type=\"text\" name=\"fname\"></div>\r\n        <div>Height (cm): <input id=\"height\" type=\"text\" name=\"fname\"></div>\r\n        <button type=\"button\" id=\"calcbutton\">Generate!</button>\r\n\r\n        <div id=\"response\">\r\n    </div>\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n\r\n</template>"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>FitNow</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\r\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\r\n</head>\r\n    \r\n<body>\r\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\r\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\r\n\r\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Please log in or register your new account: </p> <br>\r\n    \r\n<div style=\"text-align: center; \">\r\n<a style=\"text-align: center\" href=\"#/log\" class=\"button\">Log in</a> <br><br>\r\n<a style=\"text-align: center\" href=\"#/reg\" class=\"button\">Register</a> <br><br>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n\r\n</template>"; });
define('text!log/log.html', ['module'], function(module) { module.exports = "<template>\r\n    \r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>FitNow</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\r\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\r\n</head>\r\n    \r\n<body>\r\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\r\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\r\n\r\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Please enter your log in details: </p> <br>\r\n    \r\n    <form style=\"text-align: center;\" id=\"logform\" submit.delegate=\"logIn()\">\r\n    <div><label for=\"email\">E-mail: </label><input id=\"email\" type=\"text\" name=\"email\"></div><br>\r\n    <div><label for=\"password\">Password: </label><input id=\"password\" type=\"text\" name=\"password\"></div><br>\r\n    <input type=\"submit\" id=\"Log in\">\r\n    </form>\r\n    \r\n</body>\r\n</html>\r\n    \r\n</template>"; });
define('text!previous/previous.html', ['module'], function(module) { module.exports = "<template>\r\n    \r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>FitNow</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\r\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\r\n</head>\r\n    \r\n<body>\r\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\r\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\r\n\r\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Here are your previous workout schedules and meal plans: </p> <br>\r\n    \r\n    \r\n    \r\n<br><br><br>\r\n\r\n<div style=\"text-align: center;\">\r\n    <a style=\"text-align: center;\" href=\"#/goal\" class=\"button\">Back</a>\r\n    </div>\r\n    \r\n</body>\r\n</html>\r\n    \r\n</template>"; });
define('text!reg/reg.html', ['module'], function(module) { module.exports = "<template>\r\n    \r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <title>FitNow</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>\r\n    <script type=\"text/javascript\">\r\n    </script>\r\n    \r\n</head>\r\n    \r\n<body>\r\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\r\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\r\n\r\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Please enter your registration details: </p> <br>\r\n    \r\n    <form style=\"text-align: center;\" id=\"regform\" submit.delegate=\"addUser()\">\r\n    <div><label for=\"firstName\">First name: </label><input id=\"firstName\" type=\"text\" name=\"firstName\" value.bind=\"userData.firstName\"></div><br>\r\n    <div><label for=\"lastName\">Last name: </label><input id=\"lastName\" type=\"text\" name=\"lastName\" value.bind=\"userData.lastName\"></div><br>\r\n    <div><label for=\"eMail\">E-mail: </label><input id=\"email\" type=\"text\" name=\"email\" value.bind=\"userData.email\"></div><br>\r\n    <input type=\"submit\" id=\"Register\">\r\n    </form>\r\n    \r\n    <p id=\"databox\"></p>\r\n    \r\n</body>\r\n</html>\r\n    \r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map