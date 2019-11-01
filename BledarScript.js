$("form").submit(function () {
    event.preventDefault();

    var date = new Date();
    var form = $("form");

    var fullName = $('#fullName')[0].value;
    var major = $('#major')[0].value;
    var startYear = $('#startYear')[0].value;

    if ((fullName == "") || (major == "") || (startYear == "")) 
      window.alert('Please ensure the student\'s full name, major and start year values have been entered.');
    else if (startYear < 2000)
      window.alert("startYear is less than 2000"); 
    
    else
   
      $("div").append("<p>" + date.getHours() + ':' + date.getMinutes() + ' - ' + fullName + ', ' + major + ', ' + startYear + "</p>");
     fullName=$("#fullName").val("");
      major=$("#major").val("");
     startYear=$("#startYear").val("");
     
      
     
       
    

   
  });
