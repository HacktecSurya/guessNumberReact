import { useState } from "react";

let random = Math.floor(Math.random() * 21);
console.log(random);

function App() {
    const [result, setResult] = useState(" Please Enter Your Guess To Start 😉...");
    const [choice, setChoice] = useState(5);
    // let Bool = false
    let newResult;
    let newChoice;
    function SetChoice(choices) {
        setChoice(choices);
        setResult("Please Enter Your Guess To Start 😉...");
    }

    function Condition(guess) {
        newChoice = choice;
        if (newChoice >= 1) {
            if (guess > 20 || guess < 1) {
                newChoice -= 1;
                newResult = "Invalid Guess. Please Enter 0 To 20 !";
            } else if (guess == random) {
                newResult = "🤩 Congratulations 🥳 You Found the secret Number ";
            } else if (guess > random) {
                newChoice -= 1;
                newResult = "Your Guess is Bigger 😯..";
            } else if (guess < random) {
                newChoice -= 1;
                newResult = "Your guess Is Smaller 🫣..";
            } else {
                newResult = "Invalid Guess 🧐. Please Enter 0 To 20 !";
            }
        } else {
            newResult = "Your Choice is Over 🤫. Try Again!";
        }
        setChoice(newChoice);
        setResult(newResult);
    }

    return (

        <div className="usInput">
            <h2>GUESS MY NUMBER</h2>
            <h2 className="result">{result}</h2>
            <form>
                <h3 className="choise">Choices left : {choice}</h3>
                <h1>Enter Number Between <br />0 to 20</h1><br />
                <input type="number" id="resulte"></input>
            </form>

            <div class="buttonContainer">
                <button className="restartButton" onClick={() => SetChoice(Number(5))}>Restart</button>
                <button className="submitButton" onClick={() => Condition(Number(document.getElementById('resulte').value))}>Check</button>
            </div>

        </div>
    );
}

export default App;