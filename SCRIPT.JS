
let input = document.getElementById('inputBox');//Finds an HTML element using its ID.
let buttons = document.querySelectorAll('button');//selects all HTML elements matching the given CSS selector.

let string = "";

let arr = Array.from(buttons);//Now arr contains all your buttons as a normal array.

arr.forEach(button => {

    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {

            try {//Attempts to execute the code.
                string = eval(string);
                input.value = string;
            } 
            catch {//- Handles an exception if one occurs.
                input.value = "Error";
                string = "";
            }

        }

        else if (e.target.innerHTML == 'AC') {

            string = "";
            input.value = string;

        }

        else if (e.target.innerHTML == 'DEL') {

            string = string.substring(0, string.length - 1);
            input.value = string;

        }

        else {

            string += e.target.innerHTML;
            input.value = string;

        }

    });

});
