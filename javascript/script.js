console.log("Script loaded successfully!");
// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("businessInfoBtn");
    const info = document.getElementById("businessInfo");

    button.addEventListener("click", function () {
        info.innerHTML =
            "SAVELESS Store is open Monday to Saturday from 9:00 AM to 6:00 PM and closed on Sundays.";
    });

});
// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("enquiryForm");
    const amount = document.getElementById("amount");
    const installments = document.getElementById("installments");
    const installmentResult = document.getElementById("installmentResult");
    const formMessage = document.getElementById("formMessage");

    // Calculate installment amount
    function calculateInstallment() {
        const totalAmount = parseFloat(amount.value);
        const numberOfInstallments = parseInt(installments.value);

        if (
            !isNaN(totalAmount) &&
            !isNaN(numberOfInstallments) &&
            numberOfInstallments > 0
        ) {
            const payment = totalAmount / numberOfInstallments;
            installmentResult.textContent =
                `Monthly Installment: R${payment.toFixed(2)}`;
        } else {
            installmentResult.textContent = "";
        }
    }

    amount.addEventListener("input", calculateInstallment);
    installments.addEventListener("input", calculateInstallment);

    // Form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Lay-by agreement submitted successfully!";
        formMessage.style.color = "green";

        form.reset();
        installmentResult.textContent = "";
    });

    // Back to Top button
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
const images = document.querySelectorAll(".images img");

images.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("pop");
    });
});
console.log("EmailJS script loaded successfully!");
emailjs.init("vHMkOHp9iPN9zUcbb");

const form = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_jfeftg8",
        "template_6k4js4e",
        form
    )
    .then(() => {
        formMessage.textContent = "Enquiry submitted successfully!";
        form.reset();
    })
    .catch((error) => {
        formMessage.textContent = "Failed to send enquiry.";
        console.error(error);
    });
});