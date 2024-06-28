// Question # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

// Answer # 1

// Define the fetchGreeting function
 function fetchGreeting() {
    // Create a new Promise that resolves after a 2-second delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hey! Its me Ayesha Faisal");
      }, 4000); // 2000 milliseconds = 2 seconds
    });
  }
  fetchGreeting().then((message) =>{
    console.log(message);
  });



  // Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.


//Answer # 2 

function simulateTask (){
  console.log("Task Started..........")
}

setTimeout(()=>{
  console.log("Task Completed....")
}
,1000) 

simulateTask()


// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

//Answer # 3

function fetchData (){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000); 
  });
}
fetchData().then((message) =>{
  console.log(message);
});


// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch


//Answer # 4


function fetchWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data Fetched Successfully!");
      } else {
        reject("Data Fetch Failed!");
      }
    }, 1000);
  });
}

// Using the function and handling rejection with .catch
fetchWithError()
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  });

  // Question # 5

  // Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.


// ANSWER # 5


// Function to execute fetchData and processData sequentially

function processData (data?:unknown ){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data in process........");
    }, 1000); 
  });
}
processData().then((message) =>{
  console.log(message);
});


function executeSequentially() {
  fetchData()
    .then(data => {
      console.log(data); // Log the result of fetchData
      return processData(data);
    })
    .then(result => {
      console.log(result); // Log the result of processData
    })
    .catch(error => {
      console.error("Error:", error); // Handle any errors
    });
}

// Execute the function
executeSequentially();

