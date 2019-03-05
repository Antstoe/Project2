$(document).ready(function () {
    // define variables
    var survey = [
        {
            question: "What type of effect are you looking for?",
            answers: ["Energetic", "Invigorating", "Euphoric", "Calming", "Heady", "Sedating"],
            image: ""
        },
        {
            question: "What type of wine do you prefer?",
            answers: ["Sparkling", "White", "Rosé", "Red", "Dessert"],
            image: "",
        },
        {
            question: "sweetness",
            answers: ["Dry", "Semi-dry", "Semi-sweet", "Sweet", "Very Sweet"],
            image: "",
        },
        {
            question: "acidity",
            answers: ["Low acidic", "Semi-acidic", "Acidic"],
            image: "",
        },
        {
            question: "body",
            answers: ["Light", "Medium", "Full"],
            image: "",
        },
        {
            question: "Which flavor do you prefer?",
            answers: ["Citrusy", "Fruity", "Earthy", "Spicy", "Coffee", "Vanilla", "Herbal"],
            image: ""
        }
    ];

    var count = 0;              // index of survey question
    var userInput;              // user input
    var userInputArr = [];      // array of user inputs

    // display survey questions
    function displaySurvey() {
        // display question
        $("#question").html(survey[count].question);

        // display answers
        for (var i = 0; i < survey[count].answers.length; i++) {
            var p = $("<p>");
            var button = $("<button>");
            button.addClass("answerOption");
            button.text(survey[count].answers[i]);
            button.attr("data-value", survey[count].answers[i]);
            p.append(button);
            $("#answers").append(p);
        }

        // answer button on click event
        $(".answerOption").on("click", function () {
            var userInput = $(this).attr("data-value");
            console.log(userInput);

            // push to array
            userInputArr.push(userInput);
            console.log(userInputArr);

            // check if end of survey
            if (count === survey.length - 1) {
                console.log("End of survey");

                // send AJAX post
                $.post("/api/survey", userInputArr)
                    .then(function(data) {
                        // get results
                        console.log("Post user inputs.");
                    });
            }
            else {
                count++;

                // clear questions/answers/image
                $("#question").empty();
                $("#answers").empty();
                $("#image").empty();
                
                // display next survey question
                displaySurvey();
            }
        });
    }

    displaySurvey();
});