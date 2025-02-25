var express = require("express");

var app = express();


app.use(express.json())

app.post("/", (req, res) => {

var key="AIzaSyBzGqgnxcKP9NiZHDXeEWH-ptUQiHCvHXY"

    // URL of the API
const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key='+key;

// Prepare the data
const data = {
  contents: [
    {
      parts: [
        { text: req.body.msg }
      ]
    }
  ]
};

// Perform the fetch request
fetch(url, {
  method: 'POST', // HTTP method
  headers: {
    'Content-Type': 'application/json', // Specify the content type
  },
  body: JSON.stringify(data), // Convert the data object to a JSON string
})
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    console.log('Success:', data); 
    
    
    res.send({
        data:data
    })
    // Handle the response data
  })
  .catch((error) => {
    console.error('Error:', error); // Handle any errors
  });



});

app.get("/",async (req,res)=>{

    var data = await fetch("https://fakestoreapi.com/products");
    var data_json= await data.json()


    res.send({
        query:req.query,
        code:200,
        msg:"successfully sent",
        
    })


})


app.get("/:id",(req,res)=>{


    res.send({
        data:req.params,
        query:req.query,
        body:req.body
    })

})


app.listen(4000,()=>{


    console.log("hi server started");
    
})

