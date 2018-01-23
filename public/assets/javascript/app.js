
'use strict';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCd82G0GmE5RQ1irfs_qrMSn8NrnPuObgA",
    authDomain: "proportfolio-ebc4f.firebaseapp.com",
    databaseURL: "https://proportfolio-ebc4f.firebaseio.com",
    projectId: "proportfolio-ebc4f",
    storageBucket: "",
    messagingSenderId: "228038674104"
  };
  firebase.initializeApp(config);
  
$(function() {

  console.log("jQuery is loaded in the app! Yaaaa!!!");

  const social_links = {
    twitter: 'https://twitter.com/CoodyMac',
    facebook: 'https://www.facebook.com/jacolby.green',
    linkedin: 'https://www.linkedin.com/in/jacolby-green-308b701b'
  };

  $('footer button').on("click", (e) => {
    e.preventDefault();
    let clickedbutton = $(e.target);
    let socialDestination = clickedbutton.attr('id');

    switch(socialDestination) {
      case "twitter":
       window.location.href = social_links.twitter;
       break;
      case "facebook":
        window.location.href = social_links.facebook;
        break;
      case "linkedin":
        window.location.href = social_links.linkedin
        break;
    };
  });
});
