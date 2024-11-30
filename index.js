const btn = document.querySelector("button");
const textArea = document.querySelector("textarea");
const randomQuestion = document.querySelector(".random-question");

const part2 = document.querySelector(".part2");
const result = document.querySelector(".result");
// console.log(btn);


const randomTexts = [
    "Learning JavaScript improves your skills daily.",
    "Asynchronous programming can be quite challenging.",
    "Event-driven systems make applications interactive.",
    "Promises in JavaScript simplify async workflows.",
    "Node.js allows building scalable web servers easily.",
    "Debugging requires patience and sharp problem-solving.",
    "Frontend development focuses on user experiences.",
    "Backend programming manages application logic securely.",
    "Reacts virtual DOM optimizes rendering performance.",
    "Clean code practices lead to maintainable software.",
    "Cloud computing has transformed modern technology.",
    "Algorithms help in solving problems efficiently.",
    "Version control systems track project changes easily.",
    "Design patterns provide reusable solutions to problems.",
    "Open-source projects drive innovation in the tech world.",
    "Cross-platform development simplifies app compatibility.",
    "Error handling ensures applications run reliably.",
    "Encryption protects sensitive data during transmission.",
    "Regular expressions are powerful for text parsing tasks.",
    "Collaborating in teams fosters better software quality.",
    "Debugging can sometimes feel like solving puzzles.",
    "Networking protocols ensure reliable data transfers.",
    "Mobile-first design improves user experience on devices.",
    "Build and deployment pipelines speed up development.",
    "Hackathons encourage creativity and team collaboration.",
    "Browser compatibility testing avoids display issues.",
    "Virtual DOM concepts enhance modern web frameworks.",
    "Server responses must be fast for user satisfaction.",
    "Artificial intelligence is revolutionizing industries.",
    "Interview preparation builds confidence for job success.",
    "Binary search is a fundamental search algorithm.",
    "Coding every day builds confidence and expertise.",
    "Happy coding moments lead to joyful breakthroughs.",
    "APIs enable seamless integration between systems.",
    "Writing secure code prevents unauthorized access risks.",
    "Debugging tools make problem-solving much simpler.",
    "JavaScript’s flexibility makes it a popular language.",
    "Build scalable systems for handling high traffic loads.",
    "Algorithms and data structures form the coding core.",
    "Web security practices ensure user data safety online.",
    "String manipulation is common in web development.",
    "Tech meetups are a great way to learn and network.",
    "Regular practice helps master complex programming concepts.",
    "Encryption is vital for secure online communication.",
    "Hackathons are perfect for solving real-world challenges.",
    "Stay curious and explore advanced coding techniques.",
    "API design must focus on developer-friendly experiences.",
    "React components simplify building modular user interfaces.",
    "Frontend and backend synergy creates seamless workflows."
];


function check(userText, machinetext) {
    userText = userText.toLowerCase();
    machinetext = machinetext.toLowerCase();

    let i = 0;


    while (i < userText.length && i < machinetext.length) {

        if (userText[i] !== machinetext[i]) {
            return false;
        }

        i++;
    }

    return true;
}

function generateIndex() {
    return Math.floor(Math.random() * randomTexts.length);
}

let lastToggleTime = null;
btn.addEventListener("click", (e) => {

    // if(e.target.textContent === "Play Again"){
    //     e.target.texContent = "start";
    //     result.classList.add("hide");


    // }

    // let  a = startTimer();
    const currentTime = new Date();
    if (e.target.textContent === "Refresh Me") {
        window.location.reload();
        return;
    }
    if (e.target.textContent === "start") {
        textArea.removeAttribute("disabled");
        part2.textContent = randomTexts[generateIndex()];
        randomQuestion.classList.remove("hide");
        e.target.textContent = "done";

        // result.classList.remove("hide");
    } else {

        const data = textArea.value;

        const res = check(data, part2.textContent);



        if (!data) {
            alert("First enter the given text ....");
            return;
        }
        randomQuestion.classList.add("hide");
        e.target.textContent = "start";
        // textArea.removeAttribute("disabled");
        textArea.setAttribute("disabled", 'true');
        textArea.value = "";








        // console.log(a);
        let timeDifference;
        if (lastToggleTime) {
            timeDifference = Math.round((currentTime - lastToggleTime) / 1000); // Difference in milliseconds

        }
        if (res) {

            let totalWords = data.split(" ").length;
            result.innerHTML = `<h2 class = "result">Hey , you took <span class = "green" style="font-size : 2.5rem;font-weight : 800;">${timeDifference}</span> seconds to complete the sentence , It shows that you can write ${Math.round((60 * totalWords)/timeDifference)} words per minute 👍</h2>`;
            result.classList.toggle("hide");
        } else {
            result.innerHTML = `<h2>Did not Match 😠 , you wasted <span class = "green" style="font-size : 2.5rem;font-weight : 800;">${timeDifference} seconds</span> .</h2>`;
            result.classList.toggle("hide");
        }


        e.target.textContent = "Refresh Me";
    }
    lastToggleTime = currentTime;
});



// console.log(new Date().getSeconds());

