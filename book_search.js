/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 

function index(scannedTextObj) {
    let index = {};

    scannedTextObj.forEach(book => {
        book.Content.forEach(content => {
            const words = content.Text.match(/[\w-]+/g);
            words.forEach(word => {
                if (!index[word]) {
                    index[word] = [];
                }
                index[word].push({
                    ISBN: book.ISBN,
                    Page: content.Page,
                    Line: content.Line
                });
            });
        });
    });

    return index;
}

 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Negative result for a non-existent term test. */
const test3result = findSearchTermInBooks("Weston", twentyLeaguesIn);
const negativeOutput = { SearchTerm: "Weston", Results: [] };

if (JSON.stringify(negativeOutput) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", negativeOutput);
    console.log("Received:", test3result);
}

/** Case-sensitive test. */
const test4result = findSearchTermInBooks("The", twentyLeaguesIn);
const caseSensitiveOutput = { SearchTerm: "The", Results: [] };

if (JSON.stringify(caseSensitiveOutput) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", caseSensitiveOutput);
    console.log("Received:", test4result);
}

/** Special Character search terms test. */
const test5result = findSearchTermInBooks(";)", twentyLeaguesIn);
const specialCharacterOutput = { SearchTerm: ";)", Results: [] };

if (JSON.stringify(specialCharacterOutput) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", specialCharacterOutput);
    console.log("Received:", test5result);
}

/** User does not include search term test. */
const test6result = findSearchTermInBooks("", twentyLeaguesIn);
const userEmptySearch = { SearchTerm: "", Results: [] };

if (JSON.stringify(userEmptySearch) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", userEmptySearch);
    console.log("Received:", test6result);
}

/** Index test. */
const indexResult = index(twentyLeaguesIn);
const indexOutput = [
    {
        "ISBN": "9780000528531",
        "Page": 31,
        "Line": 8
    }
];

if (JSON.stringify(indexOutput) === JSON.stringify(indexResult["now"])) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", indexOutput);
    console.log("Received:", indexResult["now"]);
}

/** Index test for my name a non-existent word. */

const indexResult2 = index(twentyLeaguesIn);
if (!indexResult2["Weston"] || indexResult2["Weston"].length === 0) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", "undefined");
    console.log("Received:", indexResult2["Weston"]);
}