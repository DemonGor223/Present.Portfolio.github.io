const { MongoClient } = require('mongodb');
// O puedes usar otro servicio de base de datos como Supabase, Firebase, etc.

exports.handler = async function(event, context) {
  // Solo permitir solicitudes POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Metodo no permitido" };
  }

  try {
    // Parsear los datos del formulario
    const data = JSON.parse(event.body);
    
    // Validar los datos
    if (!data.content || !data.author) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Cntenido y Autor son Obligatorios." })
      };
    }
    
    // Conectar a la base de datos (ejemplo con MongoDB)
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const database = client.db('portfolio');
    const testimonials = database.collection('testimonials');
    
    // Guardar el testimonio
    const result = await testimonials.insertOne({
      content: data.content,
      author: data.author,
      role: data.role || '',
      company: data.company || '',
      email: data.email || '',
      approved: false, // Por defecto no aprobado hasta que lo revises
      createdAt: new Date()
    });
    
    await client.close();
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Testimonio Subido con éxito.",
        id: result.insertedId
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error al subir el Testimonio.", error: error.toString() })
    };
  }
};