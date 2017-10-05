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
                   }
                 });
        
                 event.preventDefault(); // avoid to execute the actual submit of the form.

        
        });

       
    

});