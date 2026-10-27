let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
        let showCalculation = document.querySelector('.p-1');
        showCalculation.innerHTML = `${calculation}`;

        function updateCalculation(number) {
            console.log(number);
            console.log(calculation);


            if (number === '=') {
                calculation = eval(calculation);
                console.log(calculation);
            } else if (number === 'Backspace') {
                calculation = calculation.slice(0, -1);
            }

            else {
                calculation += `${number}`;
                console.log(calculation);
            }

            showCalculation.innerHTML = `${calculation}`;
            localStorage.setItem('calculation', JSON.stringify(calculation));
        }

        function cheakKey(event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                updateCalculation('=');
            } else if (event.key === '1') {
                updateCalculation(1)
            }
            else if (event.key === '2') {
                updateCalculation(2)
            }
            else if (event.key === '3') {
                updateCalculation(3)
            }
            else if (event.key === '4') {
                updateCalculation(4)
            }
            else if (event.key === '5') {
                updateCalculation(5)
            }
            else if (event.key === '6') {
                updateCalculation(6)
            }
            else if (event.key === '7') {
                updateCalculation(7)
            }
            else if (event.key === '8') {
                updateCalculation(8)
            }
            else if (event.key === '9') {
                updateCalculation(9)
            }
            else if (event.key === '0') {
                updateCalculation(0)
            }
            else if (event.key === '+') {
                updateCalculation(' + ')
            }
            else if (event.key === '-') {
                updateCalculation(' - ')
            }
            else if (event.key === '*') {
                updateCalculation(' * ')
            }
            else if (event.key === '/') {
                updateCalculation(' / ')
            } else if (event.key === 'Backspace') {
                updateCalculation('Backspace')
            }
        }