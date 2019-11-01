$(document).ready(function(){
  $("#button").click(function () {

    var date = new Date();

    var fullName = $("#fullName").val();
    var major = $("#major").val();
    var startYear = $("#startYear").val();
    var startYearInt = parseInt(startYear);

    if ((fullName == "") || (major == "") || (startYear == "")){
      alert('Please ensure the student\'s full name, major and start year values have been entered.');
    } else if (startYearInt < 2000){
    alert("startYear is less than 2000"); 
    }  else{
    $("#div").append("<p>" + date.getHours() + ":" + date.getMinutes() + " - " + fullName + ", " + major + ", " + startYear + "</p>");
    fullName=$("#fullName").val("");
    major=$("#major").val("");
    startYear=$("#startYear").val("");
    }

     
       
    

  }); 
  });