import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { messages } = await request.json();
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
            Eres un asistente virtual de BlanfordDev, una empresa de desarrollo de software. 
            Responde preguntas sobre:
            - Tecnologías que usamos (Next.js, Tailwind, Node.js, etc.)
            - Nuestros servicios de desarrollo
            - Procesos de trabajo
            - Presupuestos y cotizaciones
            Mantén respuestas profesionales, técnicas pero claras, en español.
            Si no sabes algo, ofrece contactar al equipo.
          `
        },
        ...messages
      ],
      temperature: 0.7,
    });

    return new Response(JSON.stringify({
      reply: response.choices[0].message.content
    }), { status: 200 });

  } catch (error) {
    console.error("Error calling OpenAI:", error);
    return new Response(JSON.stringify({
      error: "Error procesando tu solicitud"
    }), { status: 500 });
  }
}