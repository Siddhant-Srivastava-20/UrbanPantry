let faqs = document.querySelectorAll(".faq-item");
faqs.forEach(faq => {
    let question = faq.querySelector("h2");
    let answer = faq.querySelector("p");
    answer.style.display = "none";
    question.addEventListener("click", function () {
        if (answer.style.display === "none") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }
    });
});
