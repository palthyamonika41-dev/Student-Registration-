<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>
    One-Day Islamic Training Workshop Registration Form
  </title>

  <link
    rel="stylesheet"
    href="style.css"
  >

</head>


<body>


  <div class="container">


    <!-- HEADING -->

    <h1>
      One-Day Islamic Training Workshop<br>
      Registration Form
    </h1>


    <form id="registrationForm">


      <!-- STUDENT NAME -->

      <div class="form-row">

        <label for="studentName">
          Student Name
        </label>

        <input
          type="text"
          id="studentName"
          required
          autocomplete="off"
          placeholder="Enter student name"
        >

      </div>


      <!-- STUDENT MOBILE -->

      <div class="form-row">

        <label for="studentMobile">
          Student Mobile Number
        </label>

        <input
          type="tel"
          id="studentMobile"
          maxlength="10"
          inputmode="numeric"
          required
          autocomplete="off"
          placeholder="Enter 10-digit mobile number"
        >

      </div>


      <!-- QUALIFICATION -->

      <div class="form-row">

        <label for="qualification">
          Qualification
        </label>

        <select
          id="qualification"
          required
        >

          <option value="">
            Select Qualification
          </option>

          <option value="School">
            School
          </option>

          <option value="College">
            College
          </option>

        </select>

      </div>


      <!-- COLLEGE QUALIFICATION -->

      <div
        class="form-row"
        id="collegeQualificationRow"
        style="display: none;"
      >

        <label for="collegeQualification">
          College Qualification
        </label>

        <select
          id="collegeQualification"
        >

          <option value="">
            Select Qualification
          </option>

          <option value="Inter">
            Inter
          </option>

          <option value="Degree">
            Degree
          </option>

          <option value="Diploma">
            Diploma
          </option>

          <option value="Engineering">
            Engineering
          </option>
          
          <option value="Pharmacy">
           Pharmacy
            </option>

          <option value="PG / Above">
            PG / Above
          </option>

        </select>

      </div>


      <!-- MOTHER NAME -->

      <div class="form-row">

        <label for="motherName">
          Mother Name
        </label>

        <input
          type="text"
          id="motherName"
          required
          autocomplete="off"
          placeholder="Enter mother name"
        >

      </div>


      <!-- FATHER NAME -->

      <div class="form-row">

        <label for="fatherName">
          Father Name
        </label>

        <input
          type="text"
          id="fatherName"
          required
          autocomplete="off"
          placeholder="Enter father name"
        >

      </div>


      <!-- PARENT MOBILE -->

      <div class="form-row">

        <label for="parentMobile">
          Parent Mobile Number
        </label>

        <input
          type="tel"
          id="parentMobile"
          maxlength="10"
          inputmode="numeric"
          required
          autocomplete="off"
          placeholder="Enter 10-digit mobile number"
        >

      </div>


      


      <!-- VILLAGE -->

      <div class="form-row">

        <label for="village">
          Village
        </label>

        <input
          type="text"
          id="village"
          required
          autocomplete="off"
          placeholder="Enter village"
        >

      </div>


      <!-- CONSTITUENCY -->

      <div class="form-row">

        <label for="constituency">
          Constituency
        </label>

        <select
          id="constituency"
          required
        >

          <option value="">
            Select Constituency
          </option>

          <option value="Kodad">
            Kodad
          </option>

          <option value="Huzurnagar">
            Huzurnagar
          </option>

          <option value="Jaggayyapeta">
            Jaggayyapeta
          </option>

        </select>

      </div>


      <!-- QURAN READING QUESTION -->

      <div class="question-section">

        <label class="question-label">
          Can you see and read Qur'an in Arabic?
        </label>


        <div class="radio-group">


          <label class="radio-option">

            <input
              type="radio"
              name="quranReading"
              value="Yes"
              required
            >

            <span>
              Yes
            </span>

          </label>


          <label class="radio-option">

            <input
              type="radio"
              name="quranReading"
              value="No"
            >

            <span>
              No
            </span>

          </label>


        </div>

      </div>


      <!-- QURAN SURAS -->

      <div class="form-row">

        <label for="quranSuras">
          How many Quran Suras can you remember by heart?
        </label>


        <select
          id="quranSuras"
          required
        >

          <option value="">
            Select Answer
          </option>

          <option value="Upto 10">
            Upto 10
          </option>

          <option value="Between 11 to 30">
            Between 11 to 30
          </option>

          <option value="Between 31 to 114">
            Between 31 to 114
          </option>

        </select>

      </div>


      <!-- SUBMIT -->

      <button
        type="submit"
        id="submitBtn"
      >
        SUBMIT
      </button>


    </form>

  </div>


  <!-- POPUP -->

  <div
    id="popup"
    class="popup-overlay"
  >

    <div class="popup">


      <div
        id="popupIcon"
        class="popup-icon"
      >
        ✓
      </div>


      <h2 id="popupTitle">
        Registration Successful
      </h2>


      <p id="popupMessage"></p>


      <p id="registrationId"></p>


      <button
        type="button"
        onclick="closePopup()"
      >
        OK
      </button>


    </div>

  </div>


  <script src="script.js"></script>


</body>

</html>
