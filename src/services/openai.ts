
// This file contains the integration with OpenAI API
import { supabase } from "@/integrations/supabase/client";

/**
 * Sends messages to OpenAI through the Supabase Edge Function and returns the response
 */
export const sendMessageToOpenAI = async (
  messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>,
  sessionId?: string
) => {
  try {
    // Call the Supabase Edge Function instead of directly accessing OpenAI
    const { data, error } = await supabase.functions.invoke('openai', {
      body: { 
        messages,
        sessionId 
      },
    });

    if (error) {
      console.error('Error calling OpenAI edge function:', error);
      throw new Error(error.message);
    }

    return data?.content || "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde ou entre em contato através do formulário.";
  } catch (error) {
    console.error('Error in OpenAI request:', error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde ou entre em contato através do formulário.";
  }
};
