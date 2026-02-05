// wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("code-form");
    const codeInput = document.getElementById("code");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // stops page refresh

        const code = codeInput.value.trim();

        // the correct code (change this to whatever you want)
        const correctCode = "Babycake";

        if (code === correctCode) {
            // redirect to intro.html (make sure it exists)
            window.location.href = "pages/intro.html";
        } else {
            alert("Wrong code, try again!");
            codeInput.value = ""; // clear input
            codeInput.focus();    // focus back on input
        }
    });
});
