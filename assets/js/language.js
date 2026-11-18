document.addEventListener('DOMContentLoaded', function() {
    
    // Dicionário de traduções (PT / EN) para o Portfólio de Amizaelrs
    const translations = {
        "pt": {
            // Navegação
            "nav_about": "Sobre Mim",
            "nav_journey": "Trajetória",
            "nav_portfolio": "Portfólio",
            "nav_contact": "Contato",
            
            // Hero
            "hero_subtitle": "Desenvolvedor de Software | Automação, Fullstack & IA Generativa",
            "hero_btn": "Ver Portfólio",
            "hero_cv_text": "Baixar Currículo",
            
            // Sobre Mim
            "about_title": "Sobre Mim",
            "about_p1": "Sou estudante de <strong>Ciência da Computação (8º período)</strong> e atuo como estagiário de desenvolvimento de software na <strong>SMTI de Porto Velho</strong>, sendo o desenvolvedor principal do Sistema de Solicitação de Sinalização de Trânsito integrado ao <strong>PVH+</strong>.",
            "about_p2": "Tenho sólida experiência prática em desenvolvimento fullstack (<strong>PHP, Laravel, React, TypeScript, Node.js</strong>), além da criação de ferramentas desktop e automações voltadas para <strong>inteligência artificial generativa</strong> e engenharia de contexto (<strong>Gemini, OpenAI e CrewAI</strong>).",
            "about_p3": "Busco atuar com engenharia de software, automação e IA generativa no desenvolvimento de soluções escaláveis, seguras e com alto impacto.",
            
            // Categorias de Habilidades
            "skills_dev_title": "Desenvolvimento Fullstack & Web",
            "skills_ai_title": "IA Generativa & Automação",
            "skills_infra_title": "Dados, Infraestrutura & Ferramentas",

            // Trajetória
            "journey_title": "Minha Trajetória",
            "journey_subtitle": "Experiência profissional, formação acadêmica e proficiência linguística que constroem minha atuação técnica.",
            
            // SMTI
            "journey_smti_type": "Experiência Profissional",
            "journey_smti_company": "Superintendência Municipal de TI (SMTI) — Porto Velho",
            "journey_smti_role": "Estagiário em Desenvolvimento de Software (Setor DESIS)",
            "journey_smti_period": "Mai 2026 — Atual",
            "journey_smti_desc1": "Atuação como desenvolvedor principal do Sistema de Solicitação de Sinalização de Trânsito para a Prefeitura de Porto Velho, integrado à plataforma municipal PVH+.",
            "journey_smti_desc2": "Construção do back-end e regras de negócio em PHP e Laravel para abertura, acompanhamento e gestão de protocolos urbanos.",
            "journey_smti_desc3": "Modelagem de banco de dados relacional e implementação de interfaces responsivas para cidadãos e gestores.",

            // Educação
            "journey_estacio_type": "Graduação",
            "journey_estacio_title": "Centro Universitário Estácio",
            "journey_estacio_course": "Bacharelado em Ciência da Computação",
            "journey_estacio_period": "Cursando 8º Período (Previsão: Jul/2027)",
            "journey_estacio_desc": "Formação superior sólida com foco em fundamentos da computação, engenharia de software, estrutura de dados, algoritmos e sistemas distribuídos.",

            // Idiomas (Devolvido à Trajetória)
            "journey_lang_type": "Idiomas",
            "journey_lang_title": "Comunicação & Idiomas",
            "journey_lang_sub": "Proficiência Linguística",
            "journey_lang_period": "Proficiência",
            "journey_lang_desc": "<strong>Português:</strong> Nativo.<br><strong>Inglês:</strong> Intermediário para leitura técnica; Básico para compreensão e conversação.",

            // Portfólio Geral
            "portfolio_title": "Meu Portfólio",
            "portfolio_subtitle": "Projeto em destaque aplicando conceitos de Desktop, Automação e IA Generativa:",
            
            // Dev Automation Kit
            "proj_dak_title": "Dev Automation Kit",
            "proj_dak_role": "Co-criador e Desenvolvedor",
            "proj_dak_desc": "Aplicação desktop multiplataforma (Windows e Linux) para preparação de repositórios voltados a LLMs (Gemini e OpenAI). Separação estrutural por papéis técnicos, otimização de tokens e diagnóstico local via AST e validação de .env.",

            // Tags
            "tag_ai": "Integração IA",
            "tag_ast": "AST & Tokens",

            // Botões Projetos
            "btn_download": "Baixar Projeto",
            "btn_view_project": "Ver Projeto",
            "btn_github_full": "Ver GitHub Completo",

            // CTA Final
            "cta_github_title": "Gostou do que viu?",
            "cta_github_text": "Este portfólio reúne os principais destaques. No meu perfil do GitHub você encontra outros códigos-fonte, estudos de caso e contribuições open source.",

            // Contato
            "contact_title": "Contato",
            "contact_subtitle": "Vamos conversar sobre tecnologia, automação, IA ou oportunidades de trabalho.",
            "channels_title": "Canais Diretos",
            "channels_desc": "Entre em contato diretamente comigo via WhatsApp, E-mail ou LinkedIn.",
            "channel_whatsapp": "Meu WhatsApp",
            "channel_email": "Meu E-mail",
            "channel_linkedin": "Meu LinkedIn",
            
            // Formulário
            "form_title": "Deixe um Recado",
            "form_name": "Nome",
            "form_email": "E-mail",
            "form_msg": "Mensagem",
            "form_btn": "Enviar Mensagem",
            "footer_copy": "&copy; 2026 Amizael Reis Silva. Todos os direitos reservados."
        },
        "en": {
            // Navigation
            "nav_about": "About Me",
            "nav_journey": "Journey",
            "nav_portfolio": "Portfolio",
            "nav_contact": "Contact",
            
            // Hero
            "hero_subtitle": "Software Developer | Automation, Fullstack & Generative AI",
            "hero_btn": "View Portfolio",
            "hero_cv_text": "Download CV",
            
            // About
            "about_title": "About Me",
            "about_p1": "I am a <strong>Computer Science student (8th semester)</strong> and software development intern at <strong>SMTI Porto Velho</strong>, working as the lead developer for the Traffic Signage Request System integrated into <strong>PVH+</strong>.",
            "about_p2": "I possess solid hands-on experience in fullstack development (<strong>PHP, Laravel, React, TypeScript, Node.js</strong>), as well as building desktop tools and automations for <strong>generative artificial intelligence</strong> and context engineering (<strong>Gemini, OpenAI, CrewAI</strong>).",
            "about_p3": "I focus on software engineering, automation, and generative AI to deliver scalable, secure, and high-impact solutions.",
            
            // Skill Categories
            "skills_dev_title": "Fullstack & Web Development",
            "skills_ai_title": "Generative AI & Automation",
            "skills_infra_title": "Data, Infrastructure & Tools",

            // Journey
            "journey_title": "My Journey",
            "journey_subtitle": "Professional experience, academic background, and language proficiency that shape my engineering work.",
            
            // SMTI
            "journey_smti_type": "Professional Experience",
            "journey_smti_company": "Municipal Information Technology Superintendency (SMTI) — Porto Velho",
            "journey_smti_role": "Software Development Intern (DESIS Department)",
            "journey_smti_period": "May 2026 — Present",
            "journey_smti_desc1": "Lead developer of the Traffic Signage Request System for the Porto Velho Municipality, integrated with the PVH+ platform.",
            "journey_smti_desc2": "Architected the backend and business rules in PHP and Laravel for urban protocols creation, tracking, and management.",
            "journey_smti_desc3": "Relational database modeling and responsive interface implementation for citizens and municipal managers.",

            // Education
            "journey_estacio_type": "Bachelor's Degree",
            "journey_estacio_title": "Centro Universitário Estácio",
            "journey_estacio_course": "Bachelor of Science in Computer Science",
            "journey_estacio_period": "8th Semester (Expected: Jul/2027)",
            "journey_estacio_desc": "Solid higher education with a focus on computer science fundamentals, software engineering, data structures, algorithms, and distributed systems.",

            // Languages (Restored to Journey)
            "journey_lang_type": "Languages",
            "journey_lang_title": "Communication & Languages",
            "journey_lang_sub": "Language Proficiency",
            "journey_lang_period": "Proficiency",
            "journey_lang_desc": "<strong>Portuguese:</strong> Native.<br><strong>English:</strong> Intermediate for technical reading; Basic for comprehension and conversation.",

            // Portfolio General
            "portfolio_title": "My Portfolio",
            "portfolio_subtitle": "Featured project applying Desktop, Automation, and Generative AI concepts:",
            
            // Dev Automation Kit
            "proj_dak_title": "Dev Automation Kit",
            "proj_dak_role": "Co-creator & Developer",
            "proj_dak_desc": "Cross-platform desktop application (Windows and Linux) for code repository preparation tailored to LLMs (Gemini and OpenAI). Structural separation by technical roles, token optimization, and local AST diagnostics with .env validation.",

            // Tags
            "tag_ai": "AI Integration",
            "tag_ast": "AST & Tokens",

            // Buttons Projects
            "btn_download": "Download Project",
            "btn_view_project": "View Project",
            "btn_github_full": "View Full GitHub",

            // CTA Final
            "cta_github_title": "Liked what you saw?",
            "cta_github_text": "This portfolio gathers my main highlights. On my GitHub profile, you can explore additional source code, case studies, and open source contributions.",

            // Contact
            "contact_title": "Contact",
            "contact_subtitle": "Let's talk about technology, automation, AI, or job opportunities.",
            "channels_title": "Direct Channels",
            "channels_desc": "Reach out directly via WhatsApp, Email, or LinkedIn.",
            "channel_whatsapp": "My WhatsApp",
            "channel_email": "My E-mail",
            "channel_linkedin": "My LinkedIn",
            
            // Form
            "form_title": "Send a Message",
            "form_name": "Name",
            "form_email": "E-mail",
            "form_msg": "Message",
            "form_btn": "Send Message",
            "footer_copy": "&copy; 2026 Amizael Reis Silva. All rights reserved."
        }
    };

    const langSwitch = document.getElementById('language-switch');
    const langThumb = document.getElementById('lang-thumb');
    let currentLang = localStorage.getItem('site_lang') || 'pt';

    function updateLanguage(lang) {
        if (langSwitch && langThumb) {
            if (lang === 'en') {
                langSwitch.classList.add('active-en');
                langThumb.innerText = 'EN';
                langSwitch.setAttribute('aria-label', 'Idioma atual: Inglês. Clique para alternar para Português');
            } else {
                langSwitch.classList.remove('active-en');
                langThumb.innerText = 'PT';
                langSwitch.setAttribute('aria-label', 'Idioma atual: Português. Clique para alternar para Inglês');
            }
        }
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('site_lang', lang);
        currentLang = lang;
    }

    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage(newLang);
        });

        langSwitch.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const newLang = currentLang === 'pt' ? 'en' : 'pt';
                updateLanguage(newLang);
            }
        });
        
        updateLanguage(currentLang);
    }
});
