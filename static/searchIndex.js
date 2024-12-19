document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const redirectMap = {
        'colecció': 'figures/coleccio.html',
        'coleccio': 'figures/coleccio.html',
        'galeria': 'figures/galeria.html',
        'galería': 'figures/galeria.html',
        'galeria': 'figures/galeria.html',
        'galería': 'figures/galeria.html',
        'privacitat': 'contacte/politica.html',
        'optimus': 'figures/optimus_prime.html',
        'optimus prime': 'figures/optimus_prime.html',
        'contacte': 'contacte/contacte.html',
        'optimus primal': 'figures/optimus_primal.html',
        'primal': 'figures/optimus_primal.html',
        'galvatron': 'figures/galvatron.html',
        'shockwave': 'figures/shockwave.html',
        'inici': 'index.html',
        'index': 'index.html',
        'tarn': 'figures/tarn.html',
        'politica': 'contacte/politica.html'
    };

    if (redirectMap[searchTerm]) {
        window.location.href = redirectMap[searchTerm];
    } else {
        alert('No s’ha trobat cap pàgina per al terme de cerca.');
    }
});
