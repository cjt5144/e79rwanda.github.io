var yearIdx = 1,
    circleIdx = 1,
    yearLength = 5,
    countryLength = 5,
    fadeSpacing = 500,
    fadeSpacingDiv2 = fadeSpacing / 2.0;
    idYear = "year",
    idCountry = "cxCountry";

$(document).ready(function() {
    // Set the display of blocks and country circles to none
    $("[id^=" + idYear + "]").css("opacity", 0);
    $("[id^=" + idCountry + "]").css("opacity", 0);

    // Create TEST data
    data = {};

    // Run animation with TEST
    runTimelineMap(data);
});

/*
data must be in the form:
[
    {"country":"cxCountry1","year":1992, "left":100, "returned":1}
]
*/
function runTimelineMap(data) {
    var animationPlayer = null,
        animationPlayer1 = null,
        objectsInYear = null,
        indicatorYear = null,
        countryIdForYear = null;
        anim11 = {opacity:1.0}
        anim12 = {opacity:0.0}
        animOptions1 = {

        }
        anim2 = [{opacity:0.0},{opacity:1.0},{opacity:0.0}]
        animOptions2 = {duration:fadeSpacingDiv2,
                        easing: "linear"
                    }

    circleIdx = 1;
    twoCircleIdx = 2;
    asdfjIdx = 1;

    for (var i = 1; i < yearLength + 1; i++) {
        objectsInYear = $("[id^=" + idYear + String(i) + "]");
        for (var j = 0; j < objectsInYear.length; j++) {
            indicatorYear = objectsInYear[j];
            countryIdForYear = $("[id^=" + idCountry + String(j + 1) + "]");

            // console.log(indicatorYear, countryIdForYear);

            animationPlayer = $(indicatorYear).delay(fadeSpacing * circleIdx).animate({opacity:1.0}, fadeSpacingDiv2, asjf);

            function asjf() {
                countryIdForYear = $("[id^=" + idCountry + String(asdfjIdx) + "]");
                // console.log("asdj", countryIdForYear)
                $(countryIdForYear).animate(anim11, fadeSpacingDiv2/2).animate(anim12, fadeSpacingDiv2/2);
                asdfjIdx++;
                if(asdfjIdx > objectsInYear.length) {
                    asdfjIdx = 1;
                }
            }

            circleIdx++;
            twoCircleIdx += 2;
        }        
    }
}
