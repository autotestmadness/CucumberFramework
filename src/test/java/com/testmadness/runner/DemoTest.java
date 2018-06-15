package com.testmadness.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber"}, 
features = "src/test/resources/", glue = {"com.testmadness.stepdefinition", "com.testmadness.hooks"}, tags = "@TC001")
public class DemoTest {
	

}
