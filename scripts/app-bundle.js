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

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/index', title: "Home page", nav: true }, { route: 'goal', name: 'goal', moduleId: 'goal/goal', title: "Goal", nav: true }, { route: 'mealplan', name: 'mealplan', moduleId: 'mealplan/mealplan', title: "Mealplan", nav: true }]);
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
define('mealplan/calculator',[], function () {
  "use strict";

  $(document).ready(function () {
    $("#calcbutton").on("click", function (event) {

      var age = $("#age").val();
      var weight = $("#weight").val();
      var height = $("#height").val();
      var parent = document.getElementById("response");
      var gender = $('input[name=radioName]:checked', '#userform').val();
      submitOK = "true";

      if (isNaN(age) || age < 15 || age > 85) {
        alert("Age between 15 and 85");
        submitOK = "false";
      }
      if (submitOK == "false") {
        return false;
      }

      if (gender == 1) {
        var male = 10 * weight + 6.25 * height - 5 * age + 5;
        parent.innerHTML = "Calories per day: " + 1 * male + "<br>";
      } else {
        var female = 10 * weight + 6.25 * height - 5 * age - 161;
        parent.innerHTML = "Calories per day: " + 1 * female + "<br>";
      }
    });
  });
});
define('mealplan/mealplan',["exports", "aurelia-fetch-client"], function (exports, _aureliaFetchClient) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.mealplan = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var mealplan = exports.mealplan = function () {
        function mealplan() {
            _classCallCheck(this, mealplan);

            this.calories = {};
            this.userMeal = {};
        }

        mealplan.prototype.calculate = function calculate() {
            var _this = this;

            var client = new _aureliaFetchClient.HttpClient();

            console.log("Andmed on: " + this.sex + " " + this.age + " " + this.weight + " " + this.height + "  " + this.goal);

            if (this.sex == 0) {

                if (this.goal == 0) {
                    this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161) * 0.85;
                    console.log("Calories: " + this.calories);
                } else if (this.goal == 1) {
                    this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161) * 1;
                    console.log("Calories: " + this.calories);
                } else {
                    this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161) * 1.25;
                    console.log("Calories: " + this.calories);
                }
            } else {

                if (this.goal == 0) {
                    this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5) * 0.85;
                    console.log("Calories: " + this.calories);
                } else if (this.goal == 1) {
                    this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5) * 1.1;
                    console.log("Calories: " + this.calories);
                } else {
                    this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5) * 1.6;
                    console.log("Calories: " + this.calories);
                }
            }

            if (this.calories < 1500) {
                client.fetch('http://localhost:8080/plans/1').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            } else if (this.calories < 1700) {
                client.fetch('http://localhost:8080/plans/2').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            } else if (this.calories < 2000) {
                client.fetch('http://localhost:8080/plans/3').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            } else if (this.calories < 2300) {
                client.fetch('http://localhost:8080/plans/4').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            } else if (this.calories < 2600) {
                client.fetch('http://localhost:8080/plans/5').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            } else if (this.calories < 2900) {
                client.fetch('http://localhost:8080/plans/6').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            } else if (this.calories < 3100) {
                client.fetch('http://localhost:8080/plans/7').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            } else if (this.calories < 3400) {
                client.fetch('http://localhost:8080/plans/8').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            } else if (this.calories < 99999) {
                client.fetch('http://localhost:8080/plans/9').then(function (response) {
                    return response.json();
                }).then(function (plans) {
                    return _this.userMeal = plans;
                });
            }

            document.getElementById("show").innerHTML = JSON.stringify(this.userMeal);
            console.log("Saadeti: " + JSON.stringify(this.userMeal));
        };

        return mealplan;
    }();
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n<require from=\"navbar.html\"></require>\n<navbar router.bind=\"router\"></navbar>\n<router-view></router-view>\n</template>"; });
define('text!navbar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n    <div style=\"text-align: center;\">\n    <p>\n    <a repeat.for=\"item of router.navigation\" href.bind=\"item.href\">${item.title}</a>\n    </p>\n    </div>\n</template>"; });
define('text!home/index.html', ['module'], function(module) { module.exports = "<template>\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>FitNow</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\n</head>\n    \n<body>\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\n\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Please log in or register your new account: </p> <br>\n    \n<div style=\"text-align: center; \">\n<a style=\"text-align: center\" href=\"#/log\" class=\"button\">Log in</a> <br><br>\n<a style=\"text-align: center\" href=\"#/reg\" class=\"button\">Register</a> <br><br>\n</div>\n\n</body>\n</html>\n\n</template>"; });
define('text!goal/goal.html', ['module'], function(module) { module.exports = "<template>\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>FitNow</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\n</head>\n    \n<body>\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\n\n<br>\n    \n<p style=\"color:gray; font-family:Palatino; text-align: center;\">To download your new workout schedule, please select your main fitness goal: </p>\n<div style=\"text-align: center;\">\n    \n  <a style=\"text-align: center;\" href=\"Weight.txt\" download=\"Weight\">Lose Weight</a>\n\n  <a style=\"text-align: center;\" href=\"Muscle.txt\" download=\"Muscle\">Build Muscle</a>\n    \n  <a style=\"text-align: center;\" href=\"Endurance.txt\" download=\"Endurance\">Improve Endurance</a>\n    \n</div> \n\n</body>\n</html>\n\n</template>"; });
define('text!log/log.html', ['module'], function(module) { module.exports = "<template>\n    \n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>FitNow</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\n</head>\n    \n<body>\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\n\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Please enter your log in details: </p> <br>\n    \n    <form style=\"text-align: center;\" id=\"logform\" submit.delegate=\"logIn()\">\n    <div><label for=\"email\">E-mail: </label><input id=\"email\" type=\"text\" name=\"email\"></div><br>\n    <div><label for=\"password\">Password: </label><input id=\"password\" type=\"text\" name=\"password\"></div><br>\n    <input type=\"submit\" id=\"Log in\">\n    </form>\n    \n</body>\n</html>\n    \n</template>"; });
define('text!mealplan/mealplan.html', ['module'], function(module) { module.exports = "<template>\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>FitNow</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\n\n</head>\n    \n<body>\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\n\n<br>\n\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Please enter your details to generate your personal meal plan: </p>\n    \n<div style=\"text-align: center;\">\n    \n        <form id=\"userform\"> \n            <div>Gender:</div>\n            <div>Female <input id=\"sex\" type=\"range\" name=\"sex\" min=\"0\" max=\"1\" value.bind=\"sex\"> Male</div> <br>\n            <div>Goal:</div>\n            <div>↓Endurance↓</div>\n            <div>Lose Weight <input id=\"goal\" type=\"range\" name=\"goal\" min=\"0\" max=\"2\" value.bind=\"goal\"> Build muscle</div>\n            <div>Age: <input id=\"age\" type=\"number\" name=\"age\" min=\"15\" max=\"65\" value.bind=\"age\"></div>\n            <div>Weight (kg): <input id=\"weight\" type=\"number\" name=\"weight\" value.bind=\"weight\"></div>\n            <div>Height (cm): <input id=\"height\" type=\"number\" name=\"height\" value.bind=\"height\"></div>\n            <button type=\"click\" click.delegate=\"calculate()\">Generate!</button>\n        </form>\n        \n</div> \n    \n    <h4 style=\"color:black; font-family:Palatino; text-align: center;\">Your personal mealplan: </h4>\n    <p id=\"show\"></p>\n\n</body>\n</html>\n</template>"; });
define('text!previous/previous.html', ['module'], function(module) { module.exports = "<template>\n    \n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>FitNow</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\n    <script src=\"https://code.jquery.com/jquery-2.2.3.min.js\"></script>\n</head>\n    \n<body>\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\n\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Here are your previous workout schedules and meal plans: </p> <br>\n    \n    \n    \n<br><br><br>\n\n<div style=\"text-align: center;\">\n    <a style=\"text-align: center;\" href=\"#/goal\" class=\"button\">Back</a>\n    </div>\n    \n</body>\n</html>\n    \n</template>"; });
define('text!reg/reg.html', ['module'], function(module) { module.exports = "<template>\n    \n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>FitNow</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"FitNowCSS.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>\n    <script type=\"text/javascript\">\n    </script>\n    \n</head>\n    \n<body>\n<h1 style=\"color:#DF7401; font-family:verdana; text-align: center;\">FitNow</h1>\n<p style=\"color:#DF8801; font-family:Palatino; text-align: center;\">Simplified fitness schedules, meal plans, tips and much more!</p>\n\n<p style=\"color:gray; font-family:Palatino; text-align: center;\">Please enter your registration details: </p> <br>\n    \n    <form style=\"text-align: center;\" id=\"regform\" submit.delegate=\"addUser()\">\n    <div><label for=\"firstName\">First name: </label><input id=\"firstName\" type=\"text\" name=\"firstName\" value.bind=\"userData.firstName\"></div><br>\n    <div><label for=\"lastName\">Last name: </label><input id=\"lastName\" type=\"text\" name=\"lastName\" value.bind=\"userData.lastName\"></div><br>\n    <div><label for=\"eMail\">E-mail: </label><input id=\"email\" type=\"text\" name=\"email\" value.bind=\"userData.email\"></div><br>\n    <input type=\"submit\" id=\"Register\">\n    </form>\n    \n    <p id=\"databox\"></p>\n    \n</body>\n</html>\n    \n</template>"; });
//# sourceMappingURL=app-bundle.js.map