
// This file contains the integration with OpenAI API

/**
 * Sends messages to OpenAI and returns the response
 */
export const sendMessageToOpenAI = async (messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>) => {
  try {
    // Get the API key from environment variables
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    
    if (!apiKey) {
      throw new Error("API key not found. Please add VITE_OPENAI_API_KEY to your .env file");
    }

    // Add system message with context about the condominium
    const conversationWithContext = [
      { 
        role: 'system', 
        content: `Você é um assistente para o Condomínio Reserva Rio Uru. Forneça informações sobre o empreendimento, 
        localização, características, vantagens de investimento, sobre a empresa e contatos. 
        Seja cordial e profissional, respondendo em português do Brasil.
        
        Informações importantes:
        - O Reserva Rio Uru é um condomínio fechado de alto padrão.
        - Está localizado próximo ao Rio Uru, oferecendo contato com a natureza.
        - Possui infraestrutura completa de lazer e segurança.
        - É um excelente investimento com valorização prevista na região.
        - Desenvolvido pela empresa 4B Empreendimentos, conhecida por qualidade e confiabilidade.
        - Para mais informações, os interessados podem entrar em contato através do formulário no site.
        
        Quando não souber a resposta, sugira que a pessoa entre em contato pelo formulário.`
      },
      ...messages
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: conversationWithContext,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get response from OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error in OpenAI request:', error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde ou entre em contato através do formulário.";
  }
};
