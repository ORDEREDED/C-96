var firebaseConfig = {
    apiKey: "AIzaSyBEca8LSQVDDCtbWuTnMIV7R_avkmqErnw",
    authDomain: "kuitter-3df98.firebaseapp.com",
    databaseURL: "https://kuitter-3df98-default-rtdb.firebaseio.com",
    projectId: "kuitter-3df98",
    storageBucket: "kuitter-3df98.appspot.com",
    messagingSenderId: "1058729284444",
    appId: "1:1058729284444:web:7f86f53ceca476f284a799"
  };
    firebase.initializeApp(firebaseConfig);
    //YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }