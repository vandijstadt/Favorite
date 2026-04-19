const historiqueList = document.getElementById('historique');
const MAX_HISTORY = 5; // Nombre maximum d'éléments à afficher

// --- FONCTION POUR AFFICHER L'HISTORIQUE ---
function displayHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    if (history.length === 0) {
        historiqueList.innerHTML += '<li>Aucun historique</li>';
        return;
    }

    history.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        historiqueList.appendChild(li);
    });
}

// --- FONCTION POUR AJOUTER À L'HISTORIQUE ---
function addToHistory(title, url) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Éviter les doublons : on retire l'élément s'il existe déjà
    history = history.filter(item => item.url !== url);

    // Ajouter au début (le plus récent)
    history.unshift({ title, url });

    // Limiter la taille
    if (history.length > MAX_HISTORY) {
        history.pop();
    }

    localStorage.setItem('searchHistory', JSON.stringify(history));
    displayHistory(); // Rafraîchir l'affichage
}

function clearHistory() {
    localStorage.removeItem('searchHistory');
    historiqueList.innerHTML = '<li>Aucun historique</li>';
}

// Charger l'historique au démarrage
document.addEventListener('DOMContentLoaded', displayHistory);
