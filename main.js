// Initialize EmailJS with your user ID
emailjs.init("Z-Hc8MBkJw47ijVD8");

// Function to send email when the form is submitted
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the user input from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Use EmailJS to send the email
  emailjs
    .send("service_lrjjc55", "template_r2fh64h", {
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(
      function (response) {
        console.log("Email sent successfully", response);
        // You can add code here to show a success message to the user

        // Clear the form inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      },
      function (error) {
        console.error("Email send failed", error);
        // You can add code here to show an error message to the user
      }
    );
});

//scroll to top function
document.addEventListener("DOMContentLoaded", function () {
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  });

  scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
});

