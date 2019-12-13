
$(function () {

    WTF.init({
        heading: [
            "You should watch..."
        ],
        response: [
            "We watched this one. Next!",
            "Gimme another.",
            "Let's go again.",
            "More Christmas please"
        ],
        template: [
            "<p id='title'>@movie</p> <p id='signoff'>@signoff</p>"
        ],
        movie: [
            "The Santa Clause",
            "The Polar Express",
            "Klaus",
            "Muppets Christmas Carol",
            "Home Alone",
            "The Grinch",
            "Elf",
            "Christmas with the Coopers",
            "Love Actually",
            "A Charlie Brown Christmas",
            "Scrooged",
            "The Christmas Prince",
            "The Christmas Switch"
        ],
        signoff: [
            "Merry fucking Christmas",
            "and a partridge in a pear tree",
            "Ya filthy animal",
            "You better watch out. You better not cry.",
            "You cotton-headed ninny-muggins.",
            "Santa's coming.",
            "No, Die Hard is not on the list",
            "Hope you're using recyclable paper. Or else.",
            "Maybe Christmas doesn't come from a store. Maybe Christmas, perhaps, means a little bit more.",
            "Help me... I'm feeling.",
            "A lot of these movies seem a little problematic now, don't they?"
        ]
    })

    // Populate using an object literal

    // WTF.init({

    //     heading: [
    //         "It's a fucking",
    //         "Check this shit out, a fucking"
    //     ],
    //     response: [
    //         "Already fucking seen one",
    //         "Give me a-fucking-nother one",
    //         "Don't really give a fuck"
    //     ],
    //     template: [
    //         "Big @color @animal",
    //         "Silly @animal with @color fur"
    //     ],
    //     animal: [
    //         "dog",
    //         "cat",
    //         "rabbit"
    //     ],
    //     color: [
    //         "red",
    //         "blue",
    //         "green",
    //         "yellow"
    //     ]
    // });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init('0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc');

});