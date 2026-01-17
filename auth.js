// 🔴 HIER DEINE FIREBASE DATEN EINTRAGEN
const firebaseConfig = {
    apiKey: "AIzaSyCFDmf52lSO8Hp6yfRZ7bsF3TrObEi1BEE",
    authDomain: "the-last-port-scum.firebaseapp.com",
    projectId: "the-last-port-scum",
    appId: "1:981480944999:web:7828f6a90f6ffe19b6abc2"
};

// Firebase starten
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// LOGIN
function login() {
    const email = emailValue();
    const password = passwordValue();

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // ✅ NACH LOGIN WEITERLEITEN
            window.location.href = "whitelist.html";
        })
        .catch(error => {
            showMessage(error.message);
        });
}

// REGISTRIERUNG
function register() {
    const email = emailValue();
    const password = passwordValue();

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            showMessage("Registrierung erfolgreich");
        })
        .catch(error => {
            showMessage(error.message);
        });
}

// PASSWORT VERGESSEN
function resetPassword() {
    const email = emailValue();

    if (!email) {
        showMessage("Bitte E-Mail eingeben");
        return;
    }

    auth.sendPasswordResetEmail(email)
        .then(() => {
            showMessage("Passwort-Reset E-Mail wurde gesendet");
        })
        .catch(error => {
            showMessage(error.message);
        });
}

// HILFSFUNKTIONEN
function emailValue() {
    return document.getElementById("email").value;
}

function passwordValue() {
    return document.getElementById("password").value;
}

function showMessage(text) {
    document.getElementById("message").innerText = text;
}
