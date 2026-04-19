const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

function displayResults(items) {
    resultsList.innerHTML = '';
    
  // Dans displayResults(items), remplacez la boucle par ceci :
  items.forEach(item => {
      const li = document.createElement('li');
      li.className = "result-item"; // On ajoute une classe pour le CSS

      const link = document.createElement('a');
      link.href = item.url;
      link.target = "_blank";
      link.textContent = item.title;

      li.appendChild(link);

      if (item.tags) {
          const tagSpan = document.createElement('span');
          tagSpan.className = 'item-tags';
          tagSpan.textContent = item.tags;
          li.appendChild(tagSpan);
      }

      link.addEventListener('click', () => {
          addToHistory(item.title, item.url);
      });

      resultsList.appendChild(li);
  });
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    // Fonction réutilisable pour filtrer les données
    const getFilteredData = (term) => {
      const lowerTerm = term.toLowerCase().trim();
      if (lowerTerm.length <= 1) return [];
      
      return data.filter(item => 
        item.title.toLowerCase().includes(lowerTerm) || 
        (item.tags && item.tags.toLowerCase().includes(lowerTerm))
      );
    };

    // Gestion de la touche "Entrée"
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const filtered = getFilteredData(searchInput.value);

        if (filtered.length === 1) {
          window.open(filtered[0].url, '_blank');
          addToHistory(item.title, item.url);
        } else if (filtered.length > 1) {
          alert('Plusieurs résultats correspondent à votre recherche. Veuillez affiner votre saisie.');
        } else {
          // Recherche sur internet si aucun résultat local n'est trouvé
          if(searchInput.value.substring(0, 2) === '+y') {
            window.location.href = `https://www.youtube.com/results?search_query=${searchInput.value.substring(2)}`;
            addToHistory(`${searchInput.value.substring(2)} on Youtube`, window.location.href);
          } else {
            if(searchInput.value.substring(0, 2) === '+g') {
              searchInput.value = searchInput.value.substring(2);
            }
            window.location.href = `https://www.google.com/search?q=${searchInput.value}`;
            addToHistory(`${searchInput.value} on Google`, window.location.href);
          }
        }
      }
      if(e.key === 'Delete' || e.key === 'Escape') {
        searchInput.value = '';
        resultsList.innerHTML = '';
      }
      // Nettoyer l'historique avec F4
      if(e.key === 'F4') {
        searchInput.value = '';
        resultsList.innerHTML = '';
        clearHistory();
      }

    });

    // Gestion de l'affichage en temps réel
    searchInput.addEventListener('input', () => {
      const filtered = getFilteredData(searchInput.value);
      displayResults(filtered);
    });
  })
  .catch(error => console.error("Erreur de chargement :", error));