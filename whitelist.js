const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzorM6ialp3uB49lJtfz6Og--MQKBcFjdemTOqZpAEJYT305ucUSgqwka-fd_qKsA69lQ/exec";

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


