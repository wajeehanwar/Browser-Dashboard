/**
 *
 * A responsive Google search page clone that has been converted into a
 * minimalist and personalized browser dashboard.
 *
 * Features:
 *     Multiple locally stored user profiles for privacy.
 *         Create multiple user profiles.
 *         Validation for all user fields being filled.
 *         Validation preventing the creation of duplicate user profiles.
 *         View active profile.
 *         View all created user profiles.
 *         Set active user profile.
 *         Remove user profiles.
 *         Remove all locally stored users.
 *     Display personalized greeting based on local time of day.
 *     Perform Google search queries.
 *     Display personalized message.
 *         Display rendomized motivational quotes
 *         Display country-based holiday wishes.
 *         Display birthday wish.
 *
 *
 * @summary A responsive Google search page clone that has been converted into
 *          a minimalist and personalized browser dashboard
 * @author Wajeeh Anwar
 *
 * Created at     : 2020-01-11
 */


// User - Class Object
class User {
  constructor(id, firstName, lastName, country, dobDay, dobMonth) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.dobDay = dobDay;
    this.dobMonth = dobMonth;
  }
}

// Set user list.
// Get previously stored users.
let users = JSON.parse(localStorage.getItem('user-list'));

// Set default user.
if (users === null) {
  users = new Array();
  users.push(new User(users.length, "", "", "USA", 0, 0));
}

// Set Current User.
let currentUser = users[0];

// Get previously set active user.
const currentUserID = JSON.parse(localStorage.getItem('active-user'));
if (currentUserID != null) {
  currentUser = users[currentUserID];
}

// Set custom greeting.
const name = currentUser.firstName;
const greetingPrefaces = ["Morning", "Afternoon", "Evening", "Night"];
let currentGreetingPreface = "";

// Get current date and time.
const today = new Date();
const currentHour = today.getHours();
let currentDay = today.getDate();
let currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

// Set appropriate greeting preface.
if (currentHour >= 6 && currentHour < 12) {
  currentGreetingPreface = greetingPrefaces[0];
} else if (currentHour >= 12 && currentHour < 18) {
  currentGreetingPreface = greetingPrefaces[1];
} else if (currentHour >= 18 && currentHour < 22) {
  currentGreetingPreface = greetingPrefaces[2];
} else {
  currentGreetingPreface = greetingPrefaces[3];
}

// Set personalized greeting.
const welcome = document.querySelector(".welcome");
welcome.innerText = `Good ${currentGreetingPreface} ${name}!`;

// Add Google search element.
const searchForm = document.querySelector("#search-form");
const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector(".search-button");
searchBar.focus();
searchForm.addEventListener('submit', onSubmit);

// Forward search request to Google.
function onSubmit(event) {
  event.preventDefault();
  const searchForward = `http://www.google.com/search?q=${searchBar.value}`;
  window.location = searchForward;
}

//Set custom message.
const message = document.querySelector(".message");
const birthDay = currentUser.dobDay;
const birthMonth = currentUser.dobMonth;
const USA = [
  [1, 1, "New Year's Day"],
  [1, 20, "Martin Luther King Jr. Day"],
  [2, 14, "Valentine's Day"],
  [2, 17, "Presidents' Day"],
  [3, 3, "Super Tuesday"],
  [3, 17, "St. Patrick's Day"],
  [4, 12, "Easter"],
  [4, 13, "Easter"],
  [4, 15, "Tax Day"],
  [5, 5, "Cinco de Mayo"],
  [5, 10, "Mother's Day"],
  [5, 25, "Memorial Day"],
  [6, 21, "Father's Day"],
  [7, 3, "Independence Day"],
  [7, 4, "Independence Day"],
  [9, 7, "Labor Day"],
  [10, 12, "Columbus Day"],
  [10, 31, "Halloween"],
  [11, 3, "Election Day"],
  [11, 11, "Veterans Day"],
  [11, 26, "Thanksgiving Day"],
  [11, 27, "Black"],
  [12, 24, "Christmas Eve"],
  [12, 25, "Christmas Day"],
  [12, 31, "New Year's Eve"]
];
const China = [
  [1, 1, "New Year's Day"],
  [1, 19, "Special Working Day"],
  [1, 24, "Spring Festival Eve"],
  [1, 25, "Chinese New Year"],
  [1, 26, "Spring Festival Golden Week"],
  [1, 27, "Spring Festival Golden Week"],
  [1, 28, "Spring Festival Golden Week"],
  [1, 29, "Spring Festival Golden Week"],
  [1, 30, "Spring Festival Golden Week"],
  [2, 1, "Special Working Day"],
  [2, 8, "Lantern Festival"],
  [2, 24, "Zhonghe Festival"],
  [3, 8, "International Women's Day"],
  [3, 12, "Arbor Day"],
  [4, 4, "Qing Ming Jie"],
  [4, 5, "Qing Ming Jie"],
  [4, 6, "Qing Ming Jie"],
  [4, 26, "Special Working Day"],
  [5, 1, "Labour Day"],
  [5, 2, "Labour Day"],
  [5, 3, "Labour Day"],
  [5, 4, "Labour Day"],
  [5, 4, "Youth Day"],
  [5, 5, "Labour Day"],
  [5, 9, "Special Working Day"],
  [6, 1, "Children's Day"],
  [6, 25, "Dragon Boat Festival"],
  [6, 26, "Dragon Boat Festival"],
  [6, 27, "Dragon Boat Festival"],
  [6, 28, "Special Working Day"],
  [8, 1, "Army Day"],
  [8, 25, "Chinese Valentine's Day"],
  [9, 2, "Spirit Festival"],
  [9, 10, "Teachers' Day"],
  [9, 27, "Special Working Day"],
  [10, 1, "National Day"],
  [10, 1, "Mid-Autumn Festival"],
  [10, 2, "National Day Golden Week"],
  [10, 3, "National Day Golden Week"],
  [10, 4, "National Day Golden Week"],
  [10, 5, "National Day Golden Week"],
  [10, 6, "National Day Golden Week"],
  [10, 7, "National Day Golden Week"],
  [10, 8, "National Day Golden Week"],
  [10, 10, "Special Working Day"],
  [10, 25, "Double Ninth Festival"],
  [12, 25, "Christmas Day"]
];
const inspirationalQuotes = [
  ["Tough times don’t last. Tough people do. – Robert H. Schuller"],
  ["Keep going. Everything you need will come to you at the perfect time."],
  ["You have to be at your strongest when you’re feeling at your weakest."],
  ["Never give up. Great things take time. Be patient."],
  ["It does not matter how slowly you go as long as you do not stop. – Confucius"],
  ["You have to be at your strongest when you’re feeling at your weakest."],
  ["Courage is one step ahead of fear. – Coleman Young"],
  ["If you feel like giving up, just look back on how far you are already."],
  ["Look in the mirror. That’s your competition."],
  ["Focus on your goal. Don’t look in any direction but ahead."],
  ["Everything you’ve ever wanted is on the other side of fear. — George Addair"],
  ["Pain is temporary. Quitting lasts forever. – Lance Armstrong"],
  ["The pain you feel today will be the strength you feel tomorrow. – Unknown"],
  ["We must embrace pain and burn it as fuel for our journey. – Kenji Miyazawa"],
  ["A problem is a chance for you to do your best. – Duke Ellington"],
  ["Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed. – Bob Riley"],
  ["Remember it’s just a bad day, not a bad life."],
  ["Whatever is worrying you right now, forget about it. Take a deep breath, stay positive and know that things will get better. – Unknown"],
  ["It’s not about perfect. It’s about effort. – Jillian Michaels"],
  ["Believe you can and you’re halfway there. – Theodore Roosevelt"],
  ["Challenges are what make life interesting. Overcoming them is what makes them meaningful."],
  ["You are so much more than what you are going through. – John Tew"],
  ["Passion first and everything will fall into place. – Holly Holm"],
  ["You don’t gain anything from stressing. Remember that."],
  ["You have to be at your strongest when you’re feeling at your weakest."],
  ["Difficult roads always lead to beautiful destinations. – Zig Ziglar"],
  ["Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out. – Unknown"],
  ["Success is what happens after you have survived all of your disappointments."],
  ["Goals may give focus, but dreams give power. – John Maxwell"],
  ["Don’t wish it were easier. Wish you were better. ― Jim Rohn"],
  ["Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change."],
  ["Hustle until you no longer have to introduce yourself."],
  ["Success is what happens after you have survived all of your disappointments."],
  ["You don’t always get what you wish for. But you always get what you work for."],
  ["You don’t find will power, you create it."],
  ["Once you choose hope, anything’s possible. – Christopher Reeve"],
  ["Push yourself because no one else is going to do it."],
  ["You cannot fail at being yourself. – Wayne Dyer"],
  ["Don’t wait for opportunity. Create it."],
  ["You are the only one who can limit your greatness. – Unknown"],
  ["The first and greatest victory is to conquer self. – Plato"],
  ["Results happen over time, not overnight. Work hard, stay consistent, and be patient."],
  ["With confidence you have won before you have started. – Marcus Garvey"],
  ["Success is what comes after you stop making excuses. – Luis Galarza"],
  ["You don’t want to look back and know you could have done better."],
  ["The moment you doubt whether you can fly, you cease for ever to be able to do it. – J.M. Barrie"],
  ["Be so good they can’t ignore you. – Steve Martin"],
  ["You will never always be motivated. You have to learn to be disciplined."],
  ["Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. – Norman Vincent Peale"],
  ["When you know what you want, and want it bad enough, you’ll find a way to get it. – Jim Rohn"],
  ["The best way to gain self-confidence is to do what you are afraid to do. – Swati Sharma"],
  ["Motivation is what gets you started. Habit is what keeps you going. – Jim Rohn"],
  ["Never stop trying. Never stop believing. Never give up. Your day will come. – Unknown"],
  ["Results happen over time, not overnight. Work hard, stay consistent, and be patient. – Unknown"],
  ["Our greatest glory is not in never falling, but in rising every time we fall. — Confucius"],
  ["Success is what happens after you have survived all of your disappointments. – Unknown"],
  ["Don’t try to be perfect. Just try to be better than you were yesterday. – Unknown"],
  ["Start where you are. Use what you have. Do what you can. – Arthur Ashe"],
  ["Don’t stop until you’re proud."],
  ["Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi"],
  ["I’m not telling you it is going to be easy, I’m telling you it’s going to be worth it. – Art Williams"],
  ["If you want it, you’ll find a way. If you don’t, you’ll find an excuse."],
  ["Perseverance is the hard work you do after you get tired of doing the hard work you already did. – Newt Gingrich"],
  ["It is during our darkest moments that we must focus to see the light. — Aristotle Onassis"],
  ["Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi"],
  ["We may encounter many defeats but we must not be defeated. – Maya Angelou"],
  ["Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t. – Rikki Rogers"],
  ["He who is not courageous enough to take risks will accomplish nothing in life. – Muhammad Ali"],
  ["We don’t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity. – Barbara De Angelis"],
  ["When you fear your struggles, your struggles consume you. When you face your struggles, you overcome them."],
  ["I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. – Nelson Mandela"],
  ["Keep going. Everything you need will come to you at the perfect time."],
  ["Set a goal so big that you can’t achieve it until you grow into the person who can. – Unknown"],
  ["All our dreams can come true, if we have the courage to pursue them. – Walt Disney"],
  ["The path to success is to take massive, determined action. – Tony Robbins"],
  ["The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson"],
  ["If you get tired, learn to rest, not quit."],
  ["Pessimism leads to weakness, optimism to power. – William James"],
  ["If it doesn’t challenge you, it won’t change you."],
  ["The struggle you’re in today is developing the strength you need for tomorrow. – Unknown"],
  ["Life is 10% what happens to you and 90% how you react to it. – Charles R. Swindoll"],
  ["Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. ― Roy T. Bennett"],
  ["Strength is the product of struggle. You must do what others don’t to achieve what others wont. – Henry Rollins"],
  ["Don’t think about what might go wrong. Think about what might go right. – Unknown"],
  ["Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end. – Roy T. Bennett"],
  ["You have to fight through some bad days to earn the best days of your life. – Unknown"],
  ["Make the most of yourself….for that is all there is of you. – Ralph Waldo Emerson"],
  ["It takes courage to grow up and become who you really are. – E.E. Cummings"],
  ["Every next level of your life will demand a different version of you. – Unknown"],
  ["Don’t let your fear decide your future. – Shalane Flanagan"],
  ["Do something today that your future self will thank you for."],
  ["You were put on this Earth to achieve your greatest self, to live out your purpose, and to do it courageously. – Steve Maraboli"],
  ["The future belongs to those who believe in the beauty of their dreams. – Franklin D. Roosevelt"],
  ["Don’t downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny. – John Assaraf"],
  ["Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ― Roy T. Bennett"],
  ["Choosing to be positive and having a grateful attitude is going to determine how you’re going to live your life. – Joel Osteen"],
  ["If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. – Wayne Dyer"],
  ["Life is a process. We are a process. The universe is a process. – Anne Wilson Schaef"],
  ["Life shrinks or expands in proportion to one’s courage. – Anaïs Nin"]
];

//  Check for public holiday. Use map of holidays by country.
let userCountry = USA;
switch (currentUser.country) {
  case "China":
    userCountry = China;
    break;
  default:
    userCountry = USA;
}
let isHoliday = false;
let holidayName = "";
for (let i = 0; i < userCountry.length; i++) {
  if (currentDay == userCountry[i][1] && currentMonth == userCountry[i][0]) {
    isHoliday = true;
    holidayName = userCountry[i][2];
  }
}
// Check user birthday.
if (currentDay == birthDay && currentMonth == birthMonth) {
  message.innerText = "Happy Birthday!";
} else if (isHoliday) {
  message.innerText = `Happy ${holidayName}!`;
} else {
  // set a random inspirational quote.
  currentQuote = inspirationalQuotes[Math.floor(Math.random() * (inspirationalQuotes.length - 1))];
  message.innerText = currentQuote;
}





// Settings Window
var settingsWindow = document.getElementById("settings-window");
var settingsButton = document.getElementById("settings-button");
var closeSettings = document.getElementsByClassName("close-settings")[0];
// Reveal settings window.
settingsButton.onclick = function() {
  settingsWindow.style.display = "block";
}
// Hide Settings window.
closeSettings.onclick = function() {
  settingsWindow.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == settingsWindow) {
    settingsWindow.style.display = "none";
  }
}

// Display current user
const current_user = document.querySelector(".current-user");
current_user.innerText = `${currentUser.firstName} ${currentUser.lastName}`;

// Display current user label if defined
const currentUserLabel = document.querySelector("#current-user-label");
if (users.length > 1) {
  const h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode("Active User"));
  currentUserLabel.appendChild(h3);
}

// Display any additional users with label.
const additionalUsersLabel = document.querySelector("#additional-users-label");
if (users.length > 2) {
  const h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode("Additional Users"));
  additionalUsersLabel.appendChild(h3);
}

// Display saved users in settings
const userList = document.querySelector(".user-list");
for (let i = 1; i < users.length; i++) {
  if (currentUser.firstName != users[i].firstName || currentUser.lastName != users[i].lastName) {
    const li = document.createElement("li");
    li.setAttribute("class", "additional-user");
    li.appendChild(document.createTextNode(`${users[i].firstName} ${users[i].lastName}`));
    userList.appendChild(li);

    // Add activate user button.
    const makeCurrentUser = document.createElement("input");
    makeCurrentUser.setAttribute("type", "button");
    makeCurrentUser.setAttribute("value", "Activate");
    makeCurrentUser.setAttribute("id", "set-current-user-button");
    makeCurrentUser.setAttribute("onclick", `setCurrentUser(${i});`);
    li.appendChild(makeCurrentUser);

    // Add remove user button.
    const removeUser = document.createElement("input");
    removeUser.setAttribute("type", "button");
    removeUser.setAttribute("value", "Delete");
    removeUser.setAttribute("id", "remove-user-button");
    removeUser.setAttribute("onclick", `removeUser(${i});`);
    li.appendChild(removeUser);
  }
}

// Set active User.
function setCurrentUser(index) {
  activeUser = index;
  localStorage.setItem('active-user', JSON.stringify(activeUser));
  location.reload();
}

// Remove user from user-list
function removeUser(index) {
  activeUser = currentUserID;
  users.splice(index, 1);
  if (activeUser > index) {
    localStorage.setItem('active-user', JSON.stringify(activeUser - 1));
  }
  localStorage.setItem('user-list', JSON.stringify(users));
  location.reload();
}

// New user window.
// Reveal new user window.
const newUserWindow = document.getElementById("new-user-window");
const newUserButton = document.getElementById("new-user-button");
newUserButton.onclick = function() {
  newUserWindow.style.display = "block";
}

// Add new user.
const nuForm = document.querySelector("#new-user-form");
const nuFirstName = document.querySelector("#nu-first-name");
const nuLastName = document.querySelector("#nu-last-name");
const nuCountry = document.querySelector("#nu-country");
const nuDOBDay = document.querySelector("#nu-dob-day");
const nuDOBMonth = document.querySelector("#nu-dob-month");
const nuSaveButton = document.querySelector(".nu-save-button");

// Set birth day options.
for (var i = 1; i < 32; i++) {
  const optionDay = document.createElement("option");
  optionDay.setAttribute("value", `${i}`);
  optionDay.appendChild(document.createTextNode(`${i}`));
  nuDOBDay.appendChild(optionDay);
}

// Set birth month options.
const month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (var i = 1; i < 13; i++) {
  const optionMonth = document.createElement("option");
  optionMonth.setAttribute("value", `${i}`);
  optionMonth.appendChild(document.createTextNode(`${month[i-1]}`));
  nuDOBMonth.appendChild(optionMonth);
}
nuForm.addEventListener('submit', addNewUser);

// Add new user to local storage.
function addNewUser(event) {
  event.preventDefault();
  //check if user exists.
  let userExists = false;
  for (let i = 0; i < users.length; i++) {
    if (nuFirstName.value === users[i].firstName && nuLastName.value === users[i].lastName) {
      userExists = true;
    }
  }

  if (userExists) {
    const nuError = document.querySelector("#nu-error");
    nuError.setAttribute("class", "nu-error");
    if (nuFirstName.value === "" || nuLastName.value === "") {
      nuError.appendChild(document.createTextNode("Oops! You forgot to fill something!"));
      setTimeout(() => nuError.remove(), 3000);
    } else {
      nuError.appendChild(document.createTextNode("You already exist!"));
      setTimeout(() => nuError.remove(), 3000);
    }
  } else {
    users.push(new User(users.length, nuFirstName.value, nuLastName.value, nuCountry.value, nuDOBDay.value, nuDOBMonth.value));
    activeUser = users.length - 1;
    localStorage.setItem('active-user', JSON.stringify(activeUser));
    localStorage.setItem('user-list', JSON.stringify(users));
    location.reload();
    newUserWindow.style.display = "none";
  }
}

// Clear saved users.
const resetUsersButton = document.querySelector("#reset-users-button");
resetUsersButton.onclick = function() {
  localStorage.clear();
  location.reload();
}
