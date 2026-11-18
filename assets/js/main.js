document.addEventListener('DOMContentLoaded', function() {

    // Gerenciador de Tema (Dark / Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    let savedTheme = 'dark';
    try {
        const urlParams = new URLSearchParams(window.location.search);
        savedTheme = urlParams.get('theme') || localStorage.getItem('theme') || 'dark';
    } catch (e) {
        savedTheme = 'dark';
    }

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggleBtn) {
            themeToggleBtn.setAttribute('title', 'Mudar para tema escuro');
        }
    } else {
        document.body.classList.remove('light-mode');
        if (themeToggleBtn) {
            themeToggleBtn.setAttribute('title', 'Mudar para tema claro');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            try {
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
            } catch (err) {}
            themeToggleBtn.setAttribute('title', isLight ? 'Mudar para tema escuro' : 'Mudar para tema claro');
        });
    }

    // Configuração do Menu Mobile
    const menuToggleButton = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('.menu-principal');
    const menuLinks = document.querySelectorAll('.menu-principal a');

    if (menuToggleButton && menuPrincipal) {
        // Abrir/Fechar menu
        menuToggleButton.addEventListener('click', function() {
            menuPrincipal.classList.toggle('menu-open');
            menuToggleButton.classList.toggle('active');
        });

        // Fechar menu ao clicar no link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuPrincipal.classList.remove('menu-open');
                menuToggleButton.classList.remove('active');
            });
        });
    }

    // Scroll Spy (Navegação Ativa Inteligente)
    const navLinks = document.querySelectorAll('.menu-principal a[href^="#"]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        const linkedSections = Array.from(navLinks)
            .map(link => {
                const id = link.getAttribute('href').replace('#', '');
                const section = document.getElementById(id);
                return section ? { id, top: section.offsetTop - 150 } : null;
            })
            .filter(item => item)
            .sort((a, b) => a.top - b.top);
        
        if (!linkedSections.length) return;

        let activeSectionId = linkedSections[0].id;

        linkedSections.forEach(section => {
            if (scrollY >= section.top) {
                activeSectionId = section.id;
            }
        });

        navLinks.forEach(a => a.classList.remove('active'));

        const menuLink = document.querySelector('.menu-principal a[href="#' + activeSectionId + '"]');
        if (menuLink) menuLink.classList.add('active');
    }

    window.addEventListener('scroll', scrollActive);
    scrollActive();

    // Modal de Mensagens
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalStatus = document.getElementById('modal-status');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseButton = document.getElementById('modal-close');
    let autoCloseTimer;

    function showModal(message, type = 'success') {
        if (!modalStatus || !modalBackdrop) {
            alert(message);
            return;
        }

        clearTimeout(autoCloseTimer);
        modalMessage.textContent = message;
        
        modalStatus.classList.remove('success', 'error');
        modalStatus.classList.add(type);

        modalBackdrop.classList.add('show');
        modalStatus.classList.add('show');

        autoCloseTimer = setTimeout(hideModal, 4500);
    }

    function hideModal() {
        clearTimeout(autoCloseTimer);
        if (modalBackdrop && modalStatus) {
            modalBackdrop.classList.remove('show');
            modalStatus.classList.remove('show');
        }
    }

    if (modalCloseButton) modalCloseButton.addEventListener('click', hideModal); 
    if (modalBackdrop) modalBackdrop.addEventListener('click', hideModal); 

    // Formulário de Contato
    const contactForm = document.getElementById('form-contato');
    
    if (contactForm) {
        const submitButton = contactForm.querySelector('.submit-button');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nomeInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const mensagemInput = document.getElementById('message');

            const nome = nomeInput ? nomeInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const mensagem = mensagemInput ? mensagemInput.value.trim() : '';

            if (nome === '' || email === '' || mensagem === '') {
                showModal('Por favor, preencha todos os campos!', 'error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showModal('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            const actionUrl = contactForm.getAttribute('action');

            // Se houver um endpoint configurado (ex: Formspree com ID válido)
            if (actionUrl && actionUrl.includes('formspree.io/f/') && !actionUrl.includes('SEU_ID')) {
                const formData = new FormData(contactForm);

                fetch(actionUrl, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(async response => {
                    if (response.ok) {
                        showModal(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.`, 'success');
                        contactForm.reset();
                    } else {
                        const data = await response.json().catch(() => null);
                        if (data && data.errors && data.errors.length > 0) {
                            const errorMsg = data.errors.map(err => err.message).join(', ');
                            showModal(`Erro: ${errorMsg}`, 'error');
                        } else {
                            abrirClienteEmail(nome, email, mensagem);
                        }
                    }
                })
                .catch(() => {
                    abrirClienteEmail(nome, email, mensagem);
                })
                .finally(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                });
            } else {
                abrirClienteEmail(nome, email, mensagem);
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }

    function abrirClienteEmail(nome, email, mensagem) {
        const assunto = encodeURIComponent(`Contato pelo Portfólio - ${nome}`);
        const corpo = encodeURIComponent(`Olá Amizael,\n\n${mensagem}\n\n---\nRemetente: ${nome}\nE-mail para resposta: ${email}`);
        const mailtoLink = `mailto:sr.amizael@gmail.com?subject=${assunto}&body=${corpo}`;
        
        window.location.href = mailtoLink;
        showModal(`Obrigado, ${nome}! O seu aplicativo de e-mail foi aberto com os dados preenchidos para envio direto a sr.amizael@gmail.com`, 'success');
        if (contactForm) contactForm.reset();
    }
});
