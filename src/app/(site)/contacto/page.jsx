"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Button from "@ui/Button";

import bg1 from "@/assets/background/bg2.webp";
import bg2 from "@/assets/background/bg6.webp";

import { flow } from "@data/contacto";
import FormContact from "@components/forms/FormContact";

import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(SplitText);

export default function Contacto() {

  /* ------------------------
   * 🔥 LOADING STATE
   * ------------------------ */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un pequeño delay para mostrar el loader (puedes ajustarlo)
    const timer = setTimeout(() => setLoading(false), 900);

    return () => clearTimeout(timer);
  }, []);


  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [skip, setSkip] = useState(false);
  const router = useRouter();

  const current = useMemo(
    () => flow.find((f) => f.step === String(step)),
    [step]
  );

  const isFormStep = current?.options === "forms";

  /* 🔥 GSAP TITLES ANIMATION */
  useEffect(() => {
    if (typeof window === "undefined" || loading) return;

    const ctx = gsap.context(() => {
      const chunks = gsap.utils.toArray(".js-animate-me");

      chunks.forEach((el) => {
        const split = new SplitText(el, {
          type: "words",
          wordsClass: "word",
        });

        gsap.from(split.words, {
          autoAlpha: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.06,
          ease: "power2.out",
        });
      });
    });

    return () => ctx.revert();
  }, [step, skip, loading]);


  /* 🔥 FLUJO DE PREGUNTAS */
  const handleSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [current.step]: option,
    }));

    setTimeout(() => setStep((s) => s + 1), 350);
  };

  const handleBack = () => {
    if (step === 1) {
      setAnswers({});
      setSkip(false);
      setStep(1); 
      return;
    }

    setStep((s) => s - 1);
  };


  const handleSkip = () => setSkip(true);

  /* 🔥 ENVÍO FINAL */
  const handleFinalSubmit = async (formData) => {

    const payload = { ...formData, flowAnswers: answers };

    const res = await fetch("/api/hubspot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      router.push(`/gracias/${data.contactId}`);
    }

    setStep((s) => s + 1);
  };


  /* 🔥 ANIMACIONES FRAMER */
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
  };


  /* ============================================================
   *  🔥 LOADER FULL-SCREEN ANIMADO
   * ============================================================ */
  if (loading) {
    return (
      <motion.div
        className="w-full h-screen flex flex-col items-center justify-center bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
        />
        <p className="mt-6 text-lg tracking-wide opacity-80">
          Cargando...
        </p>
      </motion.div>
    );
  }


  /* ============================================================
   *  🔥 CONTENIDO PRINCIPAL
   * ============================================================ */
  return (
    <section className="relative bg-black min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">

      {/* Decoraciones */}
      <Image
        src={bg1}
        alt="Decoración izquierda"
        width={600}
        height={600}
        className="absolute top-[30%] left-0 max-w-[40%] opacity-90 pointer-events-none"
      />

      <Image
        src={bg2}
        alt="Decoración derecha"
        width={600}
        height={600}
        className="absolute bottom-0 right-0 max-w-[40%] opacity-90 pointer-events-none"
      />

      {/* CONTENIDO */}
      <section className="relative z-10 w-full max-w-5xl px-5 sm:px-8 py-16 text-center">
        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {step === 1 && !skip && (
            <motion.div
              key="step-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="js-animate-me md:text-4xl text-xl font-semibold my-6 leading-tight">
                Si tú crees en ti mismo, nosotros también.
                <br />
                Dinos ¿cómo te ayudamos a cumplir tus sueños?
              </h1>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 w-full"
              >
                {current.options.map((opt, i) => (
                  <motion.div key={i} variants={containerVariants}>
                    <div
                      onClick={() => handleSelect(opt)}
                      className="
                        px-6 py-3 rounded-full border border-white text-white
                        cursor-pointer text-sm md:text-base font-semibold
                        hover:bg-white/10 transition-all duration-300
                        whitespace-normal
                      "
                    >
                      {opt}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <Button size="md" variant="primary" onClick={handleSkip}>
                Omitir
              </Button>
            </motion.div>
          )}

          {/* STEP 2 - 4 */}
          {step > 1 && step <= 3 && !isFormStep && !skip && (
            <motion.div
              key={`question-${step}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="js-animate-me md:text-3xl text-xl mb-8 font-semibold">
                {current.question}
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 w-full"
              >
                {current.options.map((opt, i) => (
                  <motion.div key={i} variants={containerVariants}>
                    <div
                      onClick={() => handleSelect(opt)}
                      className="
                        px-6 py-3 rounded-full border border-white text-white
                        cursor-pointer text-sm md:text-base font-semibold
                        hover:bg-white/10 transition-all duration-300
                        whitespace-normal
                      "
                    >
                      {opt}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8 flex justify-center gap-4">
                <Button size="md" variant="primary" onClick={handleSkip}>
                  Omitir
                </Button>
                <Button size="md" variant="dark" onClick={handleBack}>
                  Volver
                </Button>
              </div>
            </motion.div>
          )}

          {/* FORM FINAL */}
          {isFormStep && !skip && (
            <motion.div
              key="form-step"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="js-animate-me text-2xl sm:text-3xl mt-6 mb-10 font-semibold">
                Tus datos de contacto
              </h3>

              <FormContact handleBack={handleBack} onSubmit={handleFinalSubmit} />
            </motion.div>
          )}

          {/* SKIP → FORM DIRECTO */}
          {skip && (
            <motion.div
              key="skip-form"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="js-animate-me text-3xl font-semibold mb-6">
                No necesitas tenerlo todo resuelto.<br />
                Solo cuéntanos qué sueñas construir y lo pensamos juntos.              </h2>

              <FormContact handleBack={handleBack} onSubmit={handleFinalSubmit} />
            </motion.div>
          )}

        </AnimatePresence>
      </section>
    </section>
  );
}
