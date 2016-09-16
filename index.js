'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Unofficial Google Facts';

/**
 * Array containing country facts.
 */
var FACTS = [
    "Every day, 16% of the searches that occur are ones that Google has never seen before.",
    "In 1999, the founders of Google actually tried to sell it to Excite for just US$1 million. Excite turned them down.",
    "Google was originally called 'Backrub'.",
    "If you search for 'askew' in Google, the content will tilt slightly to the right.",
    "Google has found GPA's and test scores to be 'worthless as criteria for hiring'; they have teams where 14% of their employees haven't gone to college.",
    "The first Google Doodle was dedicated to the Burning Man festival attended by Google founders in 1998.",
    "When a Google employee dies, their spouses receive half pay from the company for 10 years and their children US$1,000 per month until they turn 19.",
    "Google intends to scan all known existing 129 million unique books before 2020.",
    "Google hired a camel to create the Street View of a desert.",
    "The I'm feeling lucky button costs Google US$110 million per year, as it bypasses all ads.",
    "Google earns US$20 billion a year from advertising, more than the primetime revenues of CBS, NBC, ABC, and FOX combined.",
    "Every minute, 2 million searches are performed on Google.",
    "Because Gmail first launched on April 1st of 2004, many people thought it was an April Fools' Day prank.",
    "On April Fool's day of 2007, Google sent an e-mail out to its employees warning that a python was loose in the facilities. It wasn't a joke.",
    "Google's first tweet ever was I'm feeling lucky written in binary code.",
    "Google's First Computer Storage Was Made From LEGO.",
    "Google is developing a computer so smart it can program itself.",
    "Google got its name by accident. The founders misspelled 'googol', which refers to the number 1 followed by 100 zeroes.",
    "Google prefers dogs to cats. Their official code of conduct specifically states they are a dog company.",
    "On August 16, 2013, Google went down for 5 minutes and in that time, the global Internet traffic dropped by 40%.",
    "Google has a version of their site translated into the language of the Klingons, from Star Trek.",
    "Google has been acquiring 2 companies per month since 2010.",
    "The domain GoogleSucks.com is owned by Google.",
    "A single Google search requires more computing power than it took to send Apollo 11 to the Moon.",
    "Google was offering US$20 million to any private team that can land on the moon by New Year's Eve of 2016.",
    "Google Maps calculates traffic by tracking how fast Android devices are moving on the road.",
    "If you search for 'atari breakout' in Google Images, you can play the game.",
    "Google.com/Mars offers visible imagery view, infrared and elevation views of the planet Mars.",
    "Google.com/Weddings is a little known free service to plan your wedding.",
    "The total size of Google Earth's database is over 20 Petabytes.",
    "In 2013, Google founded Calico, an anti-aging company designed to ultimately 'cure' death.",
    "When Gmail was introduced by Google with an unbelievable 1GB free storage in 2004, Hotmail only offered 2MB.",
    "Google Translate generates its answers by trawling through decades of comparative human translated works, such as UN documents and Harry Potter novels.",
    "Google takes over 200 factors into account to deliver the best results for any query in a fraction of a second.",
    "In 2014, about 89% of Google's US$66 billion in revenue came from advertising.",
    "Steve Jobs once called Google to tell them the yellow gradient in the second 'O' of their logo wasn't quite right.",
    "Iran's largest airport had a Star of David embedded into its roof for 30 years until it was discovered through Google Earth.",
    "In 2010, Nicaragua accidentally invaded Costa Rica because of a mistake in Google Maps.",
    "Facebook's first annual Hacker Cup coding challenge was won by a programmer at Google. He showed up at Facebook headquarters to collect his prize wearing his Google employee badge.",
    "Google Maps' Streetview includes 360-degree views of the Mount Everest base camp.",
    "You can see underwater sea life, coral reefs and wrecks using Google Maps.",
    "The woman who rented her garage to Larry Page and Sergey Brin in 1998 when they were creating Google later became the CEO of YouTube .",
    "Google owns many domains to cover mistypes such as: Gooogle, Gogle, Googel, and even 466453",
    "Google bought YouTube for US$1.65 billion in stocks just 18 months after YouTube's creation.",
    "YouTube is the second largest search engine, right after Google. It's bigger than Bing, Yahoo!, and Ask combined.",
    "Google handles over 2 trillion searches per year. That's about 270 searches per person on Earth.",
    "Some interns at Google earn up to US$90,000.",
    "The dots in Gmail addresses don't make any difference . An email sent to hom.er.j.sim.ps.on@gmail.com still goes to homerjsimpson@gmail.com.",
    "You can visit the Grand Canyon using Google Street View.",
    "Google's internet services run on 2 billion lines of code. That's 5000 times as many lines as the original Space Shuttle.",
    "Go to Google Maps and click on the satellite view and zoom out as much as possible. You can see an amazing view of earth with real time shadows. You can see real time clouds if you zoom in twice.",
    "Google has a pet T-rex, named Stan, which lives at their California headquarters. Founders bought it to remind the employees to not let Google go extinct",
    "Google HQ rents goats from California Grazing to mow their lawns and fields. The employees think that it’s a lot cuter to watch goats do the mowing than lawn mowers",
    "Stanford still owns the patent to Google's algorithm - PageRank."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random country fact from the country facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your Google fact, " + randomFact + ". Would you like another fact about the search giant?";

        this.emit(':askWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a google fact, or, you can say stop... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Ok, bah-bye!!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Until next time, Goodbye!');
    }
};