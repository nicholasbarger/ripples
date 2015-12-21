use ripples;

// list all ripples
db.ripples.find();

// list all instances of ripples
db.rippleInstances.find();

// list all templates
db.templates.find();

// insert ripples
db.ripples.insert({
	"id": "a3451ac3-3742-41c7-a865-0b025e22f63b",
	"display": "Say Hello",
	"code": "cb({ greeting: 'Hello' });",
	"description": "Writes Hello to the console.",
	"ripples": [{
		"id": "35e9f4c1-677d-4fc7-bfe7-97252c479d26",
		"version": "1"	
	}],
	"sampleInput": null,
	"sampleOutput": null,
	"version": "1"
});

db.ripples.insert({
	"id": "35e9f4c1-677d-4fc7-bfe7-97252c479d26",
	"display": "Say Hello Ripple",
	"code": "console.log(input.greeting + ' Ripple'); cb();",
	"description": "Writes Ripple to the console.",
	"ripples": [],
	"sampleInput": null,
	"sampleOutput": null,
	"version": "1"
});

// delete ripple by id
db.ripples.remove({ id: "a3451ac3-3742-41c7-a865-0b025e22f63b" });

// insert ripple instance
db.instances.insert({
	"id": "",
	"end": "Thu Dec 17 2015 22:26:02 GMT-0600 (CST)",
	"input": null,
	"rippleId": "a3451ac3-3742-41c7-a865-0b025e22f63b",
	"originalInstanceId": null,
	"output": null,
	"start": "Thu Dec 17 2015 22:25:41 GMT-0600 (CST)",
	"version": "1"
});
