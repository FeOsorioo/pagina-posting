export async function POST(req) {
  try {
    const bodyText = await req.text();                
    const params = new URLSearchParams(bodyText);    
    const email = params.get("email");               

    if (!email) {
      return new Response(JSON.stringify({ error: "Email requerido" }), {
        status: 400,
      });
    }

    const formData = new URLSearchParams();
    formData.append("email", email);

    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbz1hJm79Gx3w7IgzGJ5DroMp_uzlW9K4GWtD0M6K5RQq_4yUueyUnaKyRO9Thgoxyav/exec";

    const response = await fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Error al enviar a Google Script" }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("ERROR en API newsletter:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500 }
    );
  }
}
