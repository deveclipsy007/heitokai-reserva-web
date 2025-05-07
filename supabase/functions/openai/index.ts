
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Configuration, OpenAIApi } from "https://esm.sh/openai@3.2.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const openaiApiKey = Deno.env.get("OPENAI_API_KEY");
if (!openaiApiKey) {
  throw new Error("OPENAI_API_KEY environment variable is not set");
}

const configuration = new Configuration({ apiKey: openaiApiKey });
const openai = new OpenAIApi(configuration);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      throw new Error("Messages array is required");
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

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: conversationWithContext,
      temperature: 0.7,
    });

    const responseData = completion.data.choices[0].message;
    
    return new Response(JSON.stringify(responseData), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in OpenAI function:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to process request",
        content: "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde ou entre em contato através do formulário.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
