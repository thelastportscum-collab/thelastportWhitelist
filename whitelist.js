const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzhc1Y-8i1xIAiqNq25yD7Uqo9A5_9kMOwaUHpVzZolyDfPXcVIwC7EHUudIbCZaLTi1A/exec";

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

