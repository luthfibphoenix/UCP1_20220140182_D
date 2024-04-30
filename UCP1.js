function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  
    document.getElementById('greeting').textContent = greeting;
  }
  
  function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    document.getElementById('currentDateTime').textContent = dateTimeString;
  }
  
  updateGreeting();
  updateDateTime();
  setInterval(updateGreeting, 60000); 
  setInterval(updateDateTime, 1000); 
  