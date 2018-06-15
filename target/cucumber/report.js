$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC001_FindFlights.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: seji.john@testmadness.com"
    }
  ],
  "line": 3,
  "name": "Verify user is able to select  a flight and continue",
  "description": "",
  "id": "verify-user-is-able-to-select--a-flight-and-continue",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@TC001"
    }
  ]
});
formatter.before({
  "duration": 1756855230,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User is able to view Flight Finder page",
  "description": "",
  "id": "verify-user-is-able-to-select--a-flight-and-continue;user-is-able-to-view-flight-finder-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "a user lands into \"http://newtours.demoaut.com/mercurywelcome.php\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "a user clicks username and enter \"demo\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "a user clicks password and enter \"demo\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "a user is able to veriy \"Flight Finder\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/mercurywelcome.php",
      "offset": 19
    }
  ],
  "location": "Home_Step.a_user_lands_into_website(String)"
});
formatter.result({
  "duration": 6420367801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo",
      "offset": 34
    }
  ],
  "location": "Home_Step.a_user_clicks_username_and_enter_as_username(String)"
});
formatter.result({
  "duration": 1056423848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo",
      "offset": 34
    }
  ],
  "location": "Home_Step.a_user_clicks_password_and_enter_as_password(String)"
});
formatter.result({
  "duration": 712596258,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step.a_user_click_login_button()"
});
formatter.result({
  "duration": 5475205463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flight Finder",
      "offset": 25
    }
  ],
  "location": "FlightFinder_Step.a_user_is_able_to_veriy_page(String)"
});
formatter.result({
  "duration": 604325889,
  "status": "passed"
});
formatter.after({
  "duration": 345804447,
  "status": "passed"
});
formatter.before({
  "duration": 1104851742,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User is able to select a flight and continue",
  "description": "",
  "id": "verify-user-is-able-to-select--a-flight-and-continue;user-is-able-to-select-a-flight-and-continue",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "a user lands into \"http://newtours.demoaut.com/mercurywelcome.php\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "a user clicks username and enter \"demo\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a user clicks password and enter \"demo\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "a user click login button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "a user is able to veriy \"Flight Finder\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "a user able to enter required details in Flight Finder page and click Continue",
  "rows": [
    {
      "cells": [
        "Type",
        "One Way"
      ],
      "line": 19
    },
    {
      "cells": [
        "Passengers",
        "2"
      ],
      "line": 20
    },
    {
      "cells": [
        "Departing From",
        "London"
      ],
      "line": 21
    },
    {
      "cells": [
        "Month",
        "June"
      ],
      "line": 22
    },
    {
      "cells": [
        "Day",
        "10"
      ],
      "line": 23
    },
    {
      "cells": [
        "Service Class",
        "Business Class"
      ],
      "line": 24
    },
    {
      "cells": [
        "Airline",
        "Unified Airlines"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "a user is able to veriy \"Select Flight\" page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/mercurywelcome.php",
      "offset": 19
    }
  ],
  "location": "Home_Step.a_user_lands_into_website(String)"
});
formatter.result({
  "duration": 298673286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo",
      "offset": 34
    }
  ],
  "location": "Home_Step.a_user_clicks_username_and_enter_as_username(String)"
});
formatter.result({
  "duration": 931045348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo",
      "offset": 34
    }
  ],
  "location": "Home_Step.a_user_clicks_password_and_enter_as_password(String)"
});
formatter.result({
  "duration": 716891984,
  "status": "passed"
});
formatter.match({
  "location": "Home_Step.a_user_click_login_button()"
});
formatter.result({
  "duration": 3388023467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flight Finder",
      "offset": 25
    }
  ],
  "location": "FlightFinder_Step.a_user_is_able_to_veriy_page(String)"
});
formatter.result({
  "duration": 602360335,
  "status": "passed"
});
formatter.match({
  "location": "FlightFinder_Step.a_user_able_to_enter_required_details_in_Flight_Finder_page_and_click_Continue(String,String\u003e)"
});
formatter.result({
  "duration": 1980705838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select Flight",
      "offset": 25
    }
  ],
  "location": "FlightFinder_Step.a_user_is_able_to_veriy_page(String)"
});
formatter.result({
  "duration": 530840265,
  "status": "passed"
});
formatter.after({
  "duration": 197654483,
  "status": "passed"
});
});