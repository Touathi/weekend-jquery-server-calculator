$(document).ready(onReady)

function onReady() {
    console.log('The page is ready to run');
    $('#addBtn').on('click', addBtn)
    $('#subtractBtn').on('click', subtractBtn)
    $('#multiplyBtn').on('click', multiplyBtn)
    $('#divideBtn').on('click', divideBtn)
    $('#equalBtn').on('click', Sendcalculation)
    $('#clearBtn').on('click', clearAll)
    getCalculations()

    
}

let operator = $(this).text()
let Num1 = $('#leftNum').val()
let Num2 = $('#rightNum').val()



// MAKE BTN FUNCTIONS //

// Add btn function
// works great
function addBtn(event) {
    operator = '+'
    event.preventDefault()
    console.log(`test addBtn function`);
    // add class to addBtn and remove class from other Btns
    $('#addBtn').addClass('select')
    $('#subtractBtn').removeClass('select')
    $('#multiplyBtn').removeClass('select')
    $('#divideBtn').removeClass('select')
    // Turn Btn disable for addBtn
    $('#addBtn').prop('disabled', true)
    $('#subtractBtn').prop('disabled', false)
    $('#multiplyBtn').prop('disabled', false)
    $('#divideBtn').prop('disabled', false)
    console.log(operator);

}

// Subtraction btn function
// works great
function subtractBtn() {
    operator = '-'
    event.preventDefault() 
    console.log(`test subtractBtn`);
     // add class to subtractBtn and remove class from other Btns
    $('#subtractBtn').addClass('select')
    $('#addBtn').removeClass('select')
    $('#multiplyBtn').removeClass('select')
    $('#divideBtn').removeClass('select')
    // Turn Btn disable for subtractBtn
    $('#addBtn').prop('disabled', false)
    $('#subtractBtn').prop('disabled', true)
    $('#multiplyBtn').prop('disabled', false)
    $('#divideBtn').prop('disabled', false)
    console.log(operator);
    
}

// Multiply btn function
// works great
function multiplyBtn() {
    operator = '*'
    event.preventDefault() 
    console.log(`test multiplyBtn`);
     // add class to multiplyBtn and remove class from other Btns
    $('#multiplyBtn').addClass('select')
    $('#subtractBtn').removeClass('select')
    $('#addBtn').removeClass('select')
    $('#divideBtn').removeClass('select')
    // Turn Btn disable for multiplyBtn
    $('#multiplyBtn').prop('disabled', true)
    $('#subtractBtn').prop('disabled', false)
    $('#addBtn').prop('disabled', false)
    $('#divideBtn').prop('disabled', false)
    console.log(operator);
}

// Division btn function
// works great
function divideBtn(event) {
    operator = '/'
    event.preventDefault() 
    console.log(`test divideBtn`);
     // add class to divideBtn and remove class from other Btns
    $('#divideBtn').addClass('select')
    $('#subtractBtn').removeClass('select')
    $('#multiplyBtn').removeClass('select')
    $('#addBtn').removeClass('select')
    // Turn Btn disable for divideBtn
    $('#divideBtn').prop('disabled', true)
    $('#subtractBtn').prop('disabled', false)
    $('#multiplyBtn').prop('disabled', false)
    $('#addBtn').prop('disabled', false)
    console.log(operator);
}



// Clear btn function
// works great
function clearAll(event) {
    event.preventDefault()
    console.log(`Test clear All`);

    // remove class from all Btns
    $('#addBtn').removeClass('select')
    $('#subtractBtn').removeClass('select')
    $('#multiplyBtn').removeClass('select')
    $('#divideBtn').removeClass('select')

    // turn disable property off
    $('#divideBtn').prop('disabled', false)
    $('#subtractBtn').prop('disabled', false)
    $('#multiplyBtn').prop('disabled', false)
    $('#addBtn').prop('disabled', false)

    // Clear input values
    $('#leftNum').val('')
    $('#rightNum').val('')
}

// ------------------------------EQUAL BTN function --------------
function Sendcalculation(event) {
    event.preventDefault()
    let Num1 = $('#leftNum').val()
    let Num2 = $('#rightNum').val()

    

    
    console.log(`test Send calculations to server`);

    // // RUN A $.ajax POST ------------------------
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: {
            Num1: Num1,
            operator: operator,
            Num2: Num2,
        }
    }).then (function (respond) {
        // GET inside .then(function) -----------------------
        console.log(respond);
        getCalculations();
    }).catch(function (error) {
        alert('Errors with sending calculations to server!')
        console.log('Request Failed : ', error);
    })
  



    // Clear input values
    $('#leftNum').val('')
    $('#rightNum').val('')

    // remove class from all Btns
    $('#addBtn').removeClass('select')
    $('#subtractBtn').removeClass('select')
    $('#multiplyBtn').removeClass('select')
    $('#divideBtn').removeClass('select')

    // turn disable property off
    $('#divideBtn').prop('disabled', false)
    $('#subtractBtn').prop('disabled', false)
    $('#multiplyBtn').prop('disabled', false)
    $('#addBtn').prop('disabled', false)

    console.log(`${Num1} ${operator} ${Num2} `);
}
// END OF BTN FUNCTIONS -------------- Don't Touch Above , ALL WORKS GREAT



// .AJAX GET ------------------------ GET HERE
// Get calculations from server
function getCalculations() {
    $.ajax({
        medthod: 'GET',
        url: '/calculation'
    }).then (function (respond) {
        console.log(respond);
        render(respond)
    })
   
}

function render(respond) {
    // empty list
    $('#historyList').empty()
    // append updated list to the history list
    for (let calculation of respond) {
        console.log(calculation);
    
    $('#outcome').text(calculation.sum)

    $('#historyList').append(`
       

        <ul>
            <li> ${calculation.string} </li>
        </ul>
    `)

    }
}
console.log('Page has finished loading');