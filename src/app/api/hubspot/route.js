export async function POST(req) {
  try {
    // 1. Leer el body enviado desde el frontend
    const body = await req.json();

    const {
      nombre,
      email,
      telefono,
      mensaje,
      aceptaComunicaciones,
      aceptaPolitica,
      flowAnswers = {},
    } = body;

    // 2. Imprimir TODO lo que llega
    console.log("📩 Datos recibidos en API HubSpot:");
    console.log({
      nombre,
      email,
      telefono,
      mensaje,
      aceptaComunicaciones,
      aceptaPolitica,
      flowAnswers,
    });

    const flowText = Object.entries(flowAnswers)
      .map(([step, answer]) => `Paso ${step}: ${answer}`)
      .join("\n");

    // Texto final que irá a HubSpot
    const mensajeFinal = `${mensaje}\n\n--- Respuestas del flujo ---\n${flowText}`;

    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
      },
      body: JSON.stringify({
        properties: {
          email: email,
          firstname: nombre,
          phone: telefono,
          servicio: body.servicio,
          hubspot_owner_id: "83531397",
          hs_lead_status: "NEW",
          unidad_de_negocio: "Posting",
          canal_de_llegada: "Página web",
          mensaje: mensajeFinal,
          he_leido_y_acepto_la_politica_de_tratamiento_de_datos_personales: aceptaPolitica ? "true" : "false",
        },
      }),
    });
    let contactId = null;

    // --- 2. Si se creó correctamente ---
    if (response.ok) {
      const data = await response.json();
      contactId = data.id;
      return new Response(
        JSON.stringify({ success: true, contactId }),
        { status: 200 }
      );
    }

    // --- 3. Si el contacto ya existe (CONFLICT 409) ---
    if (response.status === 409) {
      const errorText = await response.text();

      // Extraemos el ID del texto: "Existing ID: 176754219064"
      const match = errorText.match(/Existing ID: (\d+)/);

      if (match) {
        contactId = match[1];
        return new Response(
          JSON.stringify({ success: true, contactId }),
          { status: 200 }
        );
      }
    }

    // --- 4. Cualquier otro error ---
    const genericError = await response.text();
    return new Response(
      JSON.stringify({ success: false, error: genericError }),
      { status: 500 }
    );
  } catch (error) {
    console.error("Error interno HubSpot:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();

    const { contactId, properties } = body;

    if (!contactId) {
      return new Response(
        JSON.stringify({ success: false, error: "Falta el contactId" }),
        { status: 400 }
      );
    }

    // Validación rápida de propiedades
    if (!properties || typeof properties !== "object") {
      return new Response(
        JSON.stringify({ success: false, error: "Las propiedades no son válidas" }),
        { status: 400 }
      );
    }

    console.log("🔧 Actualizando contacto:", contactId, properties);

    const hubspotRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
        },
        body: JSON.stringify({ properties }),
      }
    );

    const result = await hubspotRes.json();

    if (!hubspotRes.ok) {
      console.error("❌ Error PATCH HubSpot:", result);
      return new Response(
        JSON.stringify({ success: false, error: result }),
        { status: hubspotRes.status }
      );
    }

    console.log("✔ Contacto actualizado:", result);

    return new Response(
      JSON.stringify({ success: true, result }),
      { status: 200 }
    );
  } catch (err) {
    console.error("🔥 Error interno en PATCH:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
