"use client";

import { useState } from "react";
import Button from "@ui/Button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function FormContact({ handleBack, onSubmit }) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    aceptaComunicaciones: false,
    aceptaPolitica: false,
  });

  const [errors, setErrors] = useState({});

  /* -----------------------------
     VALIDACIÓN
  ------------------------------ */
  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!form.email.trim()) newErrors.email = "El email es obligatorio.";

    // telefono puede ser null → no usar trim()
    if (!form.telefono) newErrors.telefono = "El teléfono es obligatorio.";

    if (!form.aceptaComunicaciones)
      newErrors.aceptaComunicaciones = "Debes aceptar este campo.";

    if (!form.aceptaPolitica)
      newErrors.aceptaPolitica = "Debes aceptar este campo.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* -----------------------------
     CONTROL DE INPUTS
  ------------------------------ */
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  /* -----------------------------
     SUBMIT
  ------------------------------ */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (onSubmit) onSubmit(form);
  };

  /* -----------------------------
     RENDER
  ------------------------------ */
  return (
    <form
      className="space-y-6 max-w-md mx-auto w-full"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* ----------- NOMBRE ----------- */}
      <div className="relative">
        <input
          type="text"
          id="nombre"
          placeholder=" "
          value={form.nombre}
          onChange={handleChange}
          className={`w-full p-4 bg-transparent border ${
            errors.nombre ? "border-red-500" : "border-gray-400"
          } text-white rounded-lg peer focus:border-white transition-all outline-none`}
        />

        <label
          htmlFor="nombre"
          className={`
            absolute left-4 text-gray-300 transition-all pointer-events-none
            ${
              form.nombre
                ? "top-1 text-sm text-white"
                : "top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
            }
          `}
        >
          Nombre *
        </label>

        {errors.nombre && (
          <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
        )}
      </div>

      {/* ----------- EMAIL ----------- */}
      <div className="relative">
        <input
          type="email"
          id="email"
          placeholder=" "
          value={form.email}
          onChange={handleChange}
          className={`w-full p-4 bg-transparent border ${
            errors.email ? "border-red-500" : "border-gray-400"
          } text-white rounded-lg peer focus:border-white transition-all outline-none`}
        />

        <label
          htmlFor="email"
          className={`
            absolute left-4 text-gray-300 transition-all pointer-events-none
            ${
              form.email
                ? "top-1 text-sm text-white"
                : "top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
            }
          `}
        >
          Email *
        </label>

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* ----------- TELÉFONO ----------- */}
      <div className="relative">
       

        <div
          className={`mt-6 flex items-center bg-transparent border ${
            errors.telefono ? "border-red-500" : "border-gray-400"
          } rounded-lg px-3 py-[2px]`}
        >
          <PhoneInput
            defaultCountry="CO"
            placeholder="Número de teléfono"
            value={form.telefono}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, telefono: value }))
            }
            international
            countryCallingCodeEditable={false}
            className="text-white w-full PhoneInput"
          />
        </div>

        {errors.telefono && (
          <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
        )}
      </div>

      {/* ----------- MENSAJE ----------- */}
      <div className="relative">
        <textarea
          id="mensaje"
          rows="4"
          placeholder=" "
          value={form.mensaje}
          onChange={handleChange}
          className="w-full p-4 bg-transparent border border-gray-400 text-white rounded-lg peer focus:border-white transition-all outline-none"
        ></textarea>

        <label
          htmlFor="mensaje"
          className={`
            absolute left-4 text-gray-300 transition-all pointer-events-none
            ${
              form.mensaje
                ? "top-1 text-sm text-white"
                : "top-4 peer-focus:top-1 peer-focus:text-sm peer-focus:text-white"
            }
          `}
        >
          Cuéntanos tu idea
        </label>
      </div>

      {/* ----------- CHECKBOXES ----------- */}
      <div className="space-y-3 text-left">
        {/* Checkbox 1 */}
        <label
          htmlFor="aceptaComunicaciones"
          className="flex items-start gap-3 cursor-pointer"
        >
          <input
            type="checkbox"
            id="aceptaComunicaciones"
            checked={form.aceptaComunicaciones}
            onChange={handleChange}
            className="h-5 w-5 accent-white cursor-pointer"
          />
          <span className="text-sm text-gray-300 leading-tight">
            Acepto recibir comunicaciones por correo electrónico de Contact
            Center Grupo y de Posting. *
          </span>
        </label>
        {errors.aceptaComunicaciones && (
          <p className="text-red-500 text-sm">{errors.aceptaComunicaciones}</p>
        )}

        {/* Checkbox 2 */}
        <label
          htmlFor="aceptaPolitica"
          className="flex items-start gap-3 cursor-pointer"
        >
          <input
            type="checkbox"
            id="aceptaPolitica"
            checked={form.aceptaPolitica}
            onChange={handleChange}
            className="h-5 w-5 accent-white cursor-pointer"
          />
          <span className="text-sm text-gray-300 leading-tight">
            Estoy de acuerdo con que Contact Center Grupo almacene y procese mis
            datos personales de acuerdo a la{" "}
            <a
              href="https://www.ccgrupo.com.co/politica-de-privacidad/"
              target="_blank"
              className="underline"
            >
              política de tratamiento de datos
            </a>
            . *
          </span>
        </label>
        {errors.aceptaPolitica && (
          <p className="text-red-500 text-sm">{errors.aceptaPolitica}</p>
        )}
      </div>

      {/* ----------- BOTONES ----------- */}
      <div className="mt-8 flex justify-center gap-4">
        <Button size="md" variant="primary" type="submit">
          Enviar
        </Button>

        <Button size="md" variant="dark" onClick={handleBack} type="button">
          Volver
        </Button>
      </div>
    </form>
  );
}
