$(document).ready(onReady)

function onReady() {
    console.log('The page is ready to run');
    $('#addBtn').on('click', addBtn)
    $('#subtractBtn').on('click', subtractBtn)
    $('#multiplyBtn').on('click', multiplyBtn)
    $('#divideBtn').on('click', divideBtn)
    $('#equalBtn').on('click', equalBtn)
    $('#clearBtn').on('click', clearBtn)
}
// Make function to all Btns
function addBtn(event) {
    event.preventDefault()
    console.log(`test addBtn function`);
    $('#addBtn').addClass('grayout')
    $('#subtractBtn').removeClass('grayout')
    $('#multiplyBtn').removeClass('grayout')
    $('#divideBtn').removeClass('grayout')
    $('#addBtn').prop('disabled', true)
    $('#subtractBtn').prop('disabled', false)
    $('#multiplyBtn').prop('disabled', false)
    $('#divideBtn').prop('disabled', false)


}
function subtractBtn(event) {
    event.preventDefault()
    console.log(`test subtractBtn`);
    $('#subtractBtn').addClass('grayout')
    $('#addBtn').removeClass('grayout')
    $('#multiplyBtn').removeClass('grayout')
    $('#divideBtn').removeClass('grayout')
    $('#addBtn').prop('disabled', false)
    $('#subtractBtn').prop('disabled', true)
    $('#multiplyBtn').prop('disabled', false)
    $('#divideBtn').prop('disabled', false)

    
}

function multiplyBtn(event) {
    event.preventDefault()
    console.log(`test multiplyBtn`);
    $('#multiplyBtn').addClass('grayout')
    $('#subtractBtn').removeClass('grayout')
    $('#addBtn').removeClass('grayout')
    $('#divideBtn').removeClass('grayout')
    $('#multiplyBtn').prop('disabled', true)
    $('#subtractBtn').prop('disabled', false)
    $('#addBtn').prop('disabled', false)
    $('#divideBtn').prop('disabled', false)
}

function divideBtn(event) {
    event.preventDefault()
    console.log(`test divideBtn`);
    $('#divideBtn').addClass('grayout')
    $('#subtractBtn').removeClass('grayout')
    $('#multiplyBtn').removeClass('grayout')
    $('#addBtn').removeClass('grayout')
    $('#divideBtn').prop('disabled', true)
    $('#subtractBtn').prop('disabled', false)
    $('#multiplyBtn').prop('disabled', false)
    $('#addBtn').prop('disabled', false)
}

function equalBtn(event) {
    event.preventDefault()
    console.log(`test equalBtn`);
    
}

function clearBtn(event) {
    event.preventDefault()
    console.log(`test clearBtn`);
    $('#addBtn').removeClass('grayout')
    $('#subtractBtn').removeClass('grayout')
    $('#multiplyBtn').removeClass('grayout')
    $('#divideBtn').removeClass('grayout')
    $('#divideBtn').prop('disabled', false)
    $('#subtractBtn').prop('disabled', false)
    $('#multiplyBtn').prop('disabled', false)
    $('#addBtn').prop('disabled', false)
}



console.log('Page has finished loading');