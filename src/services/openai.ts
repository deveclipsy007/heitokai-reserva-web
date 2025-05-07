
// Configuração para se comunicar com a API da OpenAI
import { toast } from "sonner";

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

// Texto de contextualização sobre o site
const systemPrompt = `
Você é um assistente virtual para o Condomínio Reserva Rio Uru, um empreendimento de alto padrão localizado às margens do Rio Uru.

Informações sobre o empreendimento:
- Condomínio de alto padrão com áreas de até 800m²
- Localizado às margens do Rio Uru
- Oferece exclusividade, contato com a natureza e sofisticação para famílias
- Desenvolvido pela empresa Heitokai
- Possui infraestrutura completa de lazer e segurança
- Terrenos amplos e bem planejados para construção de casas personalizadas
- Acesso privilegiado ao rio e áreas verdes preservadas
- Localizado em região de fácil acesso e próximo a serviços essenciais

Seu objetivo é ser cordial, prestativo e fornecer informações precisas sobre o empreendimento para potenciais compradores e investidores. Se não souber alguma informação específica, explique que pode encaminhar a dúvida para a equipe de vendas.

Responda sempre em português do Brasil, com tom amigável mas profissional.
`;

export const sendMessageToOpenAI = async (messages: Message[]): Promise<string> => {
  try {
    // Preparar o histórico de mensagens, incluindo o system prompt
    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1000,
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro na API da OpenAI:", errorData);
      throw new Error(errorData.error?.message || 'Erro ao comunicar com a OpenAI');
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
    
  } catch (error: any) {
    console.error("Erro na chamada para OpenAI:", error);
    toast.error("Erro ao conectar com o assistente virtual");
    return "Desculpe, houve um problema na comunicação. Por favor, tente novamente em alguns instantes.";
  }
};
