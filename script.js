// Define um objeto com as traduções para cada idioma
const translations = {
    "pt-BR": {
      "title": "Políticas de Privacidade",
      "introduction_title": "Introdução",
      "introduction_description": "O nosso aplicativo é comprometido em proteger a privacidade e a segurança dos dados dos nossos usuários. Esta política de privacidade descreve como coletamos, usamos e protegemos os dados dos nossos usuários.",
      "data_collection_title": "Coleta de Dados",
      "data_collection_description": "O aplicativo utiliza o banco de dados local.\nTodos os dados ficam registrados em seu aparelho.\nNós não coletamos dados de nossos usuários.\nNós protegemos os dados dos nossos usuários com medidas de segurança adequadas.\n",
      "contact_title": "Contato",
      "contact_description": "Se você tiver alguma dúvida ou preocupação sobre esta política de privacidade, por favor entre em contato conosco em mhbrufatto@me.com.",
      "last_update_title": "Última Atualização ",
      "last_update_description": "Esta política de privacidade foi atualizada em 12 de Outubro de 2025.",
      "copywrite": "&copy; 2025 Mantra Tech. Todos os direitos reservados.",
    },
  };
  
  // Define um objeto que mapeia os IDs dos elementos de texto no HTML para as traduções
  const textElements = {
      "title": document.getElementById("title"),
      "introduction_title": document.getElementById("introduction_title"),
      "introduction_description":  document.getElementById("introduction_description"),
      "data_collection_title": document.getElementById("data_collection_title"),
      "data_collection_description": document.getElementById("data_collection_description"),
      "contact_title": document.getElementById("contact_title"),
      "contact_description": document.getElementById("contact_description"),
      "last_update_title": document.getElementById("last_update_title"),
      "last_update_description": document.getElementById("last_update_description"),
  };
  
  // Função para alterar o idioma da página
  function changeLanguage(lang) {
    Object.keys(textElements).forEach((key) => {
      textElements[key].innerText = translations[lang][key];
    });

    // Atualiza as opções do select
    const options = document.getElementById('lang-select').options;
    for (let i = 0; i < options.length; i++) {
      options[i].text = translations[lang]['language_select']['options'][i];
    }
  }

  // Inicializa a página com o idioma inglês como padrão
  changeLanguage('pt-BR');
  
  // Adiciona um evento de mudança ao seletor de idioma
  document.getElementById('lang-select').addEventListener('change', function() {
    const selectedLang = this.value;
    changeLanguage(selectedLang);
  });
  