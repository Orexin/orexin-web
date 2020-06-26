$(document).ready(function(){
    $('.submit').click(function(event){
        event.preventDefault()
        console.log('button clicked')
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        statusElm.empty()

        if(email.Length > 5 && email.includes('@') && email.includes('.'))
        {
            statusElm.append('<div>Email is Valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div>Email is not Valid</div>')
        }

        if(subject.Length >= 2)
        {
            statusElm.append('<div>Subject is Valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div>Subject is not Valid</div>')
        }

        if(message.Length >= 20)
        {
            statusElm.append('<div>Message is Valid</div>')
        }
        else
        {
            event.preventDefault()
            statusElm.append('<div>Message is not Valid</div>')
        }
    })
})