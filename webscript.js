$(document).ready(function(){

    // Form sumbitted
    $("#myForm").submit(function(event){
        

        var url = ""; // the script where you handle the form input.
       

            $.ajax({
                   type: "POST",
                   url: url,
                   data: $("#myForm").serialize(), // serializes the form's elements.
                   success: function(data)
                   {
                       alert(data); // show response from the python server.
                       
                        //succsfull connection
                        if(data == 'success'){
                            alert('data is success');
                            window.location.replace("http://localhost/myMainApp.html");
                        }
                        //bad connection 
                        else if(data == 'failed'){
                            alert('Worng Username Password');
                            $('#loginpop').show()
                            $('#username').val('');
                            $('#pwd').val('');
                            
                        }
                        //db is not connectig
                        else{
                            alert('all is bad');
                        }
                            
                    }
                 });
                 event.preventDefault(); // avoid to execute the actual submit of the form.
        
                 

        
        });

       
    

});