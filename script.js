const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxAkQQ2XKJS-oFbJEOhw_dCvh5XZ1LhAu9nDJM0OwXCfVnLnWq3j7h_8b_MGroHuBQz0A/exec";


const form =
  document.getElementById(
    "registrationForm"
  );


const studentName =
  document.getElementById(
    "studentName"
  );


const studentMobile =
  document.getElementById(
    "studentMobile"
  );


const qualification =
  document.getElementById(
    "qualification"
  );


const collegeQualificationRow =
  document.getElementById(
    "collegeQualificationRow"
  );


const collegeQualification =
  document.getElementById(
    "collegeQualification"
  );


const motherName =
  document.getElementById(
    "motherName"
  );


const fatherName =
  document.getElementById(
    "fatherName"
  );


const parentMobile =
  document.getElementById(
    "parentMobile"
  );


const village =
  document.getElementById(
    "village"
  );


const constituency =
  document.getElementById(
    "constituency"
  );


const quranSuras =
  document.getElementById(
    "quranSuras"
  );


const submitBtn =
  document.getElementById(
    "submitBtn"
  );


/* NAME CAPITALIZATION */

function capitalizeName(value) {

  return value
    .toLowerCase()
    .replace(
      /\b\w/g,
      function(letter) {

        return letter.toUpperCase();

      }
    );

}


/* STUDENT NAME */

studentName.addEventListener(
  "input",
  function() {

    this.value =
      capitalizeName(
        this.value
      );

  }
);


/* MOTHER NAME */

motherName.addEventListener(
  "input",
  function() {

    this.value =
      capitalizeName(
        this.value
      );

  }
);


/* FATHER NAME */

fatherName.addEventListener(
  "input",
  function() {

    this.value =
      capitalizeName(
        this.value
      );

  }
);


/* STUDENT MOBILE */

studentMobile.addEventListener(
  "input",
  function() {

    this.value =
      this.value
        .replace(/\D/g, "")
        .substring(0, 10);

  }
);


/* PARENT MOBILE */

parentMobile.addEventListener(
  "input",
  function() {

    this.value =
      this.value
        .replace(/\D/g, "")
        .substring(0, 10);

  }
);


/* QUALIFICATION DEPENDENT DROPDOWN */

qualification.addEventListener(
  "change",
  function() {

    if (
      this.value === "College"
    ) {

      collegeQualificationRow.style.display =
        "flex";

      collegeQualification.required =
        true;

    }

    else {

      collegeQualificationRow.style.display =
        "none";

      collegeQualification.required =
        false;

      collegeQualification.value =
        "";

    }

  }
);


/* VALIDATE MOBILE */

function validMobile(number) {

  return /^[6-9][0-9]{9}$/.test(
    number
  );

}


/* SUBMIT FORM */

form.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();


    const selectedQuranReading =
      document.querySelector(
        'input[name="quranReading"]:checked'
      );


    if (
      !validMobile(
        studentMobile.value.trim()
      )
    ) {

      showError(
        "Please enter a valid student mobile number."
      );

      return;

    }


    if (
      !validMobile(
        parentMobile.value.trim()
      )
    ) {

      showError(
        "Please enter a valid parent mobile number."
      );

      return;

    }


    if (
      !selectedQuranReading
    ) {

      showError(
        "Please select Yes or No for Qur'an reading."
      );

      return;

    }


    if (
      qualification.value === "College" &&
      !collegeQualification.value
    ) {

      showError(
        "Please select College Qualification."
      );

      return;

    }


    const data = {

      studentName:
        capitalizeName(
          studentName.value.trim()
        ),


      studentMobile:
        studentMobile.value.trim(),


      qualification:
        qualification.value,


      collegeQualification:
        collegeQualification.value,


      motherName:
        capitalizeName(
          motherName.value.trim()
        ),


      fatherName:
        capitalizeName(
          fatherName.value.trim()
        ),


      parentMobile:
        parentMobile.value.trim(),


      village:
        village.value.trim(),


      constituency:
        constituency.value,


      quranReading:
        selectedQuranReading.value,


      quranSuras:
        quranSuras.value

    };


    submitBtn.disabled =
      true;

    submitBtn.textContent =
      "SUBMITTING...";


    const callbackName =
      "registrationCallback_" +
      Date.now();


    window[callbackName] =
      function(result) {


        submitBtn.disabled =
          false;

        submitBtn.textContent =
          "SUBMIT";


        if (
          result.success
        ) {

          showSuccess(
            result.message,
            result.registrationId
          );


          form.reset();


          collegeQualificationRow.style.display =
            "none";

          collegeQualification.required =
            false;

        }


        else if (
          result.duplicate
        ) {

          showDuplicate(
            result.message
          );

        }


        else {

          showError(
            result.message ||
            "Registration failed."
          );

        }


        delete window[
          callbackName
        ];


        const oldScript =
          document.getElementById(
            callbackName
          );


        if (oldScript) {

          oldScript.remove();

        }

      };


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

        collegeQualification:
          data.collegeQualification,

        motherName:
          data.motherName,

        fatherName:
          data.fatherName,

        parentMobile:
          data.parentMobile,

        village:
          data.village,

        constituency:
          data.constituency,

        quranReading:
          data.quranReading,

        quranSuras:
          data.quranSuras

      });


    const script =
      document.createElement(
        "script"
      );


    script.id =
      callbackName;


    script.src =
      WEB_APP_URL +
      "?" +
      params.toString();


    script.onerror =
      function() {

        submitBtn.disabled =
          false;

        submitBtn.textContent =
          "SUBMIT";


        showError(
          "Unable to connect to registration server."
        );


        delete window[
          callbackName
        ];


        script.remove();

      };


    document.body.appendChild(
      script
    );

  }
);


/* SUCCESS POPUP */

function showSuccess(
  message,
  registrationId
) {

  document.getElementById(
    "popupIcon"
  ).textContent =
    "✓";


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
  ).classList.add(
    "show"
  );

}


/* DUPLICATE POPUP */

function showDuplicate(
  message
) {

  document.getElementById(
    "popupIcon"
  ).textContent =
    "!";


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
  ).classList.add(
    "show"
  );

}


/* ERROR POPUP */

function showError(
  message
) {

  document.getElementById(
    "popupIcon"
  ).textContent =
    "!";


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
  ).classList.add(
    "show"
  );

}


/* CLOSE POPUP */

function closePopup() {

  document.getElementById(
    "popup"
  ).classList.remove(
    "show"
  );

}
