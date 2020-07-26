$(document).ready(()=>{
    $('#form').submit((e)=>{
        e.preventDefault();
        $.ajax({
            url : '/',
            type : 'post',
            contentType : 'application/json',
            data : JSON.stringify($('#form').serializeArray()),
            success : (respose)=>{
                console.log('Successfully got Response');
                console.log(response);
            }
        })
    })
});