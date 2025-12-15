"use client";
import { useState } from "react";

export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new URLSearchParams({ email });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!response.ok) {
        console.log("Newsletter response not ok:", response);
      }

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (e) {
      console.error("Newsletter error:", e);

      setStatus("error");
    }
  };

  return { email, setEmail, status, handleSubmit };
}
