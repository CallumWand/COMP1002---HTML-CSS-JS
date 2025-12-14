(function () {
  const form = document.getElementById("feedbackForm");
  const submitMessage = document.getElementById("submitMessage");

  if (!form || !submitMessage) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitMessage.style.display = "block";
    form.reset();
  });
})();