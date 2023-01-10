      //QUESTION NO 2 RESUME MAKING


var resume=
  {
   "Personal Details" : "",
    "Name": "vivek",
    "Email id": "vivek4413@gmail.com",
   
    "location" : "",
     "Address" :"maruvathur",
      "city" : "Thiruvarur",
      "state" : "Tamil nadu",
  }
  for (var i in resume) {
    console.log (i,resume[i]);
  }
  var resume2 = {
    "Career Objective" :"",
    
           "Summery" :  "Looking for a challenging role in a reputable organization to utilize my technical, database skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector",
  

  }
    for (var k in resume2) {
    console.log(k);
  }

    console.log(resume2.Summery);

    var r3 = {

    "work Experience" : "",
       "Company Name" :"Ford India Pvt ltd",
       "Department" : "TCF",
       "Position" : "Associate",
       "Period" : "May 2015 to Sep 2022",

       "Education" :"",
         "Institution" : "govertment college",
         "study type" : "Diploma",
         "Area" : "Electrical and Electronics",
         "year" : "2010",
         "percentage" : "91"
    }
    for (var i in r3) {
        console.log (i,r3[i]);
    }

    var r4 = {
    
        "Skills" : "",
        "Skill" :"web development",
        "keywords" : "",
        
       "HTML" : "",
       "CSS" :"",
       "JAVASCRIPT" : "",
       "Languages"  :"",
       "English" : "",
       "Tamil" :"",
      }
  for (var i in r4) {
    console.log (i,r4[i]);
 };

//OUTPUT FOR QUESTION 1
 //Personal Details 
// Name vivek
// Email id vivek4413@gmail.com
// location 
// Address maruvathur
// city Thiruvarur
// state Tamil nadu
// Career Objective
// Summery
// Looking for a challenging role in a reputable organization to utilize my technical, database skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector
// work Experience 
// Company Name Ford India Pvt ltd
//Department TCF
// Position Associate
// Period May 2015 to Sep 2022
//Education 
//Institution govertment college
// study type Diploma
// Area Electrical and Electronics
// year 2010
//percentage 91
//Skills 
// Skill web development
// keywords 
//HTML 
// CSS 
// JAVASCRIPT 
// Languages 
// English 
// Tamil 




       //QUESTION NO 1 

      //FOR IN LOOP

 var a=[
    {
      "userId": "1",
      "id": "1",
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      
    },
    {
      "userId": "1",
      "id": "2",
      "title": "qui est esse",
      
    },
    {
      "userId": "1",
      "id": "3",
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    }];
    
    for(var i in a) {
      console.log(a[i].userId,a[i].id,a[i].title);
    }

    //OUTPUT
   // 1 1 sunt aut facere repellat provident occaecati excepturi optio reprehenderit
  //  1 2 qui est esse
   // 1 3 ea molestias quasi exercitationem repellat qui ipsa sit aut


  // FOR LOOP
   var a=[
    {
      "userId": "1",
      "id": "1",
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      
    },
    {
      "userId": "1",
      "id": "2",
      "title": "qui est esse",
      
    },
    {
      "userId": "1",
      "id": "3",
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    }];
    for(var i=0;i<a.length;i++) {
        console.log(a[i].userId,a[i].id,a[i].title);
      }
    
   //OUTPUT
   // 1 1 sunt aut facere repellat provident occaecati excepturi optio reprehenderit
  //  1 2 qui est esse
   // 1 3 ea molestias quasi exercitationem repellat qui ipsa sit aut
