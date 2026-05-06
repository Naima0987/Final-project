const form = document.getElementById("donation-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let shelter = document.getElementById("shelter").value;
        let type = document.getElementById("type").value;
        let amount = document.getElementById("amount").value;
        let message = document.getElementById("message");

        if (shelter === "" || type === "" || amount === "") {
            message.textContent = "Please fill all fields!";
            message.style.color = "red";
            return;
        }

        let donations = JSON.parse(localStorage.getItem("donations")) || [];

        donations.push({ shelter, type, amount });

        localStorage.setItem("donations", JSON.stringify(donations));

message.textContent = "Donation saved successfully! 🎉";

setTimeout(() => {
  message.textContent = "";
}, 3000);        message.style.color = "green";

        form.reset();
    });
}

const shelterList = document.getElementById("shelter-list");

if (shelterList) {
    let donations = JSON.parse(localStorage.getItem("donations")) || [];

    donations.forEach(d => {
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${d.shelter}</h3>
            <p>Type: ${d.type}</p>
            <p>Amount: ${d.amount}</p>
        `;

        shelterList.appendChild(card);
    });
}