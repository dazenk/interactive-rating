const lista = document.querySelectorAll(".list");
const btnSubmit = document.querySelector(".btn-submit");
const contPrincipal = document.querySelector(".container");
const contRating = document.querySelector(".container-rating");
const cal = document.querySelector(".calification");

lista.forEach(li => {
    li.addEventListener("click", (e) => {
        const id = e.target.innerText;
        btnSubmit.addEventListener("click", () => {
            contPrincipal.style.display = "none";
            contRating.style.display = "flex";
            cal.innerText = id;
        })
    })
})

