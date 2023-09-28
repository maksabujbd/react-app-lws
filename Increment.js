const domContainer = document.querySelector("#root");

// const myElement = React.createElement(
//     "div", null, [
//         React.createElement("p", null, "Inner p tag 1"),
//         React.createElement("p", null, "Inner p tag 2")
//     ]
// );

// const myNewElement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increment +</button>
//         </div>
//     </div>
// );


const Increment = () => {
    // const reactState = React.useState(0);
    // console.log(reactState);


    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h1 id="display">{counter}</h1>
            <div>
                <button id="button" onClick={() => setCounter(counter + 1)}>Increment +</button>
            </div>
        </div>
    );
}
ReactDOM.render(
    <div className="container">
        <Increment/>
        <Increment/>
        <Increment/>
    </div>, domContainer);

// let number = 0;
// const display = document.querySelector("#display");
// const button = document.querySelector("#button");
//
// button.addEventListener("click", () => {
//     number++;
//     display.textContent = number.toString();
// })


// let p = document.createElement("p");
// p.innerHTML = "Hello text";
// domContainer.appendChild(p);