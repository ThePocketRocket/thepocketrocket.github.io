function activeButton() {
    var submitButton = document.querySelector('#continueButton')
    if(document.getElementById('user').value != "" && document.getElementById('password').value != "") {
        submitButton.style.backgroundColor = '#D13639'
        submitButton.style.cursor = 'pointer'

        submitButton.addEventListener('mouseover', function() {
            submitButton.style.backgroundColor = '#ce292c'
        })
        
        submitButton.addEventListener('mouseout', function() {
            submitButton.style.backgroundColor = '#D13639'
        })
    } else {
        submitButton.style.backgroundColor = '#EDEDED'
        submitButton.style.cursor = 'default'
    }
}

