const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzba0yitpPdT35ojbgg-DaHcWHJeWNwuOf19Kp2XEZhzJEVAnyFk0AbEPsgHX8X5aU-og/exec";

function sendWhitelist() {
    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            icname: document.getElementById("icname").value,
            discord: document.getElementById("discord").value,
            steamid: document.getElementById("steamid").value
        })
    });

    document.getElementById("message").innerText =
        "Whitelist-Antrag gesendet ✔";
}
