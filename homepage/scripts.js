// Script by Ben's Experience on Youtube
// https://bensexperience.com/how-to-add-greetings-based-on-time-in-hostinger-website-builder/

function getGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting = "";

  if (hours >= 5 && hours < 12) {
      greeting = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
      greeting = "Good Afternoon";
  } else if (hours >= 17 && hours < 21) {
      greeting = "Good Evening";
  } else {
      greeting = "Sweet Dreams";
  }

  return greeting;
}

// Display the greeting in the HTML
document.getElementById("greetingMessage").innerHTML = `<span>${getGreeting()}</span>`;

