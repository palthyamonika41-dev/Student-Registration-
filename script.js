const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbz9tSjSczNyHA0KxyYDiXnGPKx_nUvs9y-AIRek4YaJTqlN2vNapyOJMt_Hi2EefqQAnw/exec";


const form =
  document.getElementById("registrationForm");

const studentName =
  document.getElementById("studentName");

const studentMobile =
  document.getElementById("studentMobile");

const qualification =
  document.getElementById("qualification");

const fatherName =
  document.getElementById("fatherName");

const fatherMobile =
  document.getElementById("fatherMobile");

const village =
  document.getElementById("village");

const mandal =
  document.getElementById("mandal");

const submitBtn =
  document.getElementById("submitBtn");



/* NAME CAPITALIZATION */

function capitalizeName(value) {

  return value
    .toLowerCase()
    .replace(/\b\w/g, function(letter) {
      return letter.toUpperCase();
    });

}


/* STUDENT NAME */

studentName.addEventListener("input", function() {

  this.value =
    capitalizeName(this.value);

});


/* FATHER NAME */

fatherName.addEventListener("input", function() {

  this.value =
    capitalizeName(this.value);

});


/* STUDENT MOBILE */

studentMobile.addEventListener("input", function() {

  this.value =
    this.value
      .replace(/\D/g, "")
      .substring(0, 10);

});


/* FATHER MOBILE */

fatherMobile.addEventListener("input", function() {

  this.value =
    this.value
      .replace(/\D/g, "")
      .substring(0, 10);

});



/* MOBILE VALIDATION */

function validMobile(number) {

  return /^[6-9][0-9]{9}$/.test(number);

}



/* FORM SUBMIT */

form.addEventListener("submit", function(event) {

  event.preventDefault();


  const data = {

    studentName:
      capitalizeName(
        studentName.value.trim()
      ),

    studentMobile:
      studentMobile.value.trim(),

    qualification:
      qualification.value.trim(),

    fatherName:
      capitalizeName(
        fatherName.value.trim()
      ),

    fatherMobile:
      fatherMobile.value.trim(),

    village:
      village.value.trim(),

    mandal:
      mandal.value

  };


  /* STUDENT MOBILE CHECK */

  if (!validMobile(data.studentMobile)) {

    showError(
      "Please enter a valid student mobile number."
    );

    return;
  }


  /* FATHER MOBILE CHECK */

  if (!validMobile(data.fatherMobile)) {

    showError(
      "Please enter a valid father mobile number."
    );

    return;
  }


  /* MANDAL CHECK */

  if (!data.mandal) {

    showError(
      "Please select Mandal."
    );

    return;
  }


  /* SUBMIT BUTTON */

  submitBtn.disabled = true;

  submitBtn.textContent =
    "SUBMITTING...";


  /*
    JSONP CALLBACK
  */

  const callbackName =
    "registrationCallback_" +
    Date.now();


  window[callbackName] =
    function(result) {


      /* ENABLE BUTTON */

      submitBtn.disabled = false;

      submitBtn.textContent =
        "SUBMIT";


      /* SUCCESS */

      if (result.success) {

        showSuccess(
          result.message,
          result.registrationId
        );


        form.reset();

      }


      /* DUPLICATE */

      else if (result.duplicate) {

        showDuplicate(
          result.message
        );

      }


      /* ERROR */

      else {

        showError(
          result.message ||
          "Registration failed."
        );

      }


      /* CLEANUP */

      delete window[callbackName];


      const oldScript =
        document.getElementById(
          callbackName
        );


      if (oldScript) {
        oldScript.remove();
      }

    };


  /*
    SEND DATA TO GOOGLE APPS SCRIPT
  */

  const params =
    new URLSearchParams({

      callback:
        callbackName,

      studentName:
        data.studentName,

      studentMobile:
        data.studentMobile,

      qualification:
        data.qualification,

      fatherName:
        data.fatherName,

      fatherMobile:
        data.fatherMobile,

      village:
        data.village,

      mandal:
        data.mandal

    });


  /*
    CREATE SCRIPT TAG
  */

  const script =
    document.createElement("script");


  script.id =
    callbackName;


  script.src =
    WEB_APP_URL +
    "?" +
    params.toString();


  /*
    CONNECTION ERROR
  */

  script.onerror =
    function() {

      submitBtn.disabled =
        false;

      submitBtn.textContent =
        "SUBMIT";


      showError(
        "Unable to connect to registration server."
      );


      delete window[callbackName];

      script.remove();

    };


  document.body.appendChild(script);

});



/* SUCCESS POPUP */

function showSuccess(
  message,
  registrationId
) {

  document.getElementById(
    "popupIcon"
  ).textContent = "✓";


  document.getElementById(
    "popupIcon"
  ).style.background =
    "#28a745";


  document.getElementById(
    "popupTitle"
  ).textContent =
    "Registration Successful";


  document.getElementById(
    "popupMessage"
  ).textContent =
    message;


  document.getElementById(
    "registrationId"
  ).textContent =
    "Registration ID : " +
    registrationId;


  document.getElementById(
    "popup"
  ).classList.add("show");

}



/* DUPLICATE POPUP */

function showDuplicate(message) {

  document.getElementById(
    "popupIcon"
  ).textContent = "!";


  document.getElementById(
    "popupIcon"
  ).style.background =
    "#dc3545";


  document.getElementById(
    "popupTitle"
  ).textContent =
    "Already Registered";


  document.getElementById(
    "popupMessage"
  ).textContent =
    message;


  document.getElementById(
    "registrationId"
  ).textContent =
    "";


  document.getElementById(
    "popup"
  ).classList.add("show");

}



/* ERROR POPUP */

function showError(message) {

  document.getElementById(
    "popupIcon"
  ).textContent = "!";


  document.getElementById(
    "popupIcon"
  ).style.background =
    "#dc3545";


  document.getElementById(
    "popupTitle"
  ).textContent =
    "Error";


  document.getElementById(
    "popupMessage"
  ).textContent =
    message;


  document.getElementById(
    "registrationId"
  ).textContent =
    "";


  document.getElementById(
    "popup"
  ).classList.add("show");

}



/* CLOSE POPUP */

function closePopup() {

  document.getElementById(
    "popup"
  ).classList.remove("show");

}