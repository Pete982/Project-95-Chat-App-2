

const firebaseConfig = {
    apiKey: "AIzaSyDpdxNtYXOFUVkYCxEkw58KiomkKiRyoWw",
    authDomain: "project-94-chat-app-part-two.firebaseapp.com",
    databaseURL: "https://project-94-chat-app-part-two-default-rtdb.firebaseio.com",
    projectId: "project-94-chat-app-part-two",
    storageBucket: "project-94-chat-app-part-two.appspot.com",
    messagingSenderId: "339642275670",
    appId: "1:339642275670:web:d03a03ea812513fdf628f7",
    measurementId: "G-VTG6LLP4DT"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("Username");
 document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

 function addRoom() {
      addRoom() = document.getElementById("addRoom").value;
      
      localStorage.setItem("addRoom", addRoom);
 } 

 function logOut(){
  localStorage.removeItem("roomname");

   localStorage.removeItem("username",user_name);
 
    window.location = "First_Page.html";
 }
 
    function createItem() {
        localStorage.setItem('addUser()', 'value');
        }
        createItem() // Creates a item named 'nameOfItem' and stores a value of 'value'
        ​
        function getValue() {
        return localStorage;
        } // Gets the value of 'nameOfItem' and returns it.

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

 //End code
 });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomname", Room_names);
    window.location="Page_Three.js";

}
