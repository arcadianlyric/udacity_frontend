/* Global Variables */
const generate = document.getElementById('generate')
// const fetch = require("node-fetch");
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?'
const apiKey = '3afdae9526dcc9561a1b9c171a9dadb8';
let city = 524901

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get data
const getData = async (url = '', zip)=>{
    const res = await fetch(url + "id=" + zip + "&appid=" + apiKey)
    try {
      const data = await res.json();
      console.log(data)
      return data;
    }catch(error){
      console.log("error", error);
    }
  }

// post data
const postData = async (url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
      try {
        const newData = await response.json();
        return newData
      }catch(error) {
      console.log("error", error);
      }
  }


function performAction(e){
    const zip =  document.getElementById('zip').value;
    const feeling =  document.getElementById('feelings').value;
    // if(zip == ""){
    //     zip = city
    // }
    console.log(zip)
    getData(baseURL, zip)
    .then(function(data){
        console.log(data);
        postData('/add', {date:newDate, temperature:data.main.temp, user_response:feeling});
        })
    .then(function(){
        updateUI()
    })
}

const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        const mostRecentEntry = allData.length-1;
        document.getElementById('date').innerHTML = allData[mostRecentEntry].date;
        document.getElementById('temp').innerHTML = allData[mostRecentEntry].temperature;
        document.getElementById('content').innerHTML = allData[mostRecentEntry].user_response;
    }catch(error){
        console.log("error", error);
    }
}

generate.addEventListener('click', function(){
    performAction();
});