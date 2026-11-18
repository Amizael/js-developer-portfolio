/**
 * Helper API para leitura de profile.json
 * Utiliza o arquivo local relativo como fonte principal com fallback online.
 */
async function fetchProfileData() {
    try {
        const response = await fetch('./data/profile.json');
        if (response.ok) {
            return await response.json();
        }
    } catch (e) {
        console.warn('Falha ao carregar ./data/profile.json localmente, tentando fonte remota...', e);
    }

    try {
        const url = 'https://raw.githubusercontent.com/Amizael/js-developer-portfolio/refs/heads/main/data/profile.json';
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.error('Erro ao obter dados do perfil:', err);
        return null;
    }
}
