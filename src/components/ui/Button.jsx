/**
 * @fileoverview Componente `Button`
 *
 * Botón reutilizable con variantes, tamaños y soporte para enlaces (`Link`).
 * Puede funcionar como `<button>` o como enlace si recibe `href`.
 * Soporta íconos, loading, disabled y estilos configurables con TailwindCSS.
 *
 * @module Button
 */

/**
 * `Button`
 *
 * Botón estilizado configurable con:
 * - variantes (`variant`)
 * - tamaños (`size`)
 * - comportamiento como enlace (`href`)
 * - íconos (left / right)
 * - estado de carga (`loading`)
 *
 * Ejemplo:
 * ```jsx
 * <Button variant="primary" size="lg">Empezar</Button>
 *
 * <Button href="/contacto" variant="secondary">
 *   Contáctanos
 * </Button>
 * ```
 */
"use client";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

/** Combina clases CSS */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Variantes visuales */
const stylesByVariant = {
  primary: "bg-pink-600 text-white hover:bg-pink-500 shadow-lg hover:shadow-xl",
  secondary:
    "bg-white text-pink-600 border border-pink-200 hover:border-pink-300 shadow hover:shadow-md",
  ghost: "bg-transparent text-pink-600 hover:bg-pink-50",
  dark: "bg-black text-white border border-white hover:bg-white hover:text-black hover:border-black",
  blue: "bg-[#0093c6] text-white border border-white hover:bg-white hover:text-black hover:border-black",
  white:
    "bg-white text-black border border-black hover:bg-black hover:text-white hover:border-black",
};

/** Tamaños */
const stylesBySize = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-4 py-2",
  md: "text-lg px-5 py-3",
  lg: "text-lg px-6 py-4",
};

/** Estilo base */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 active:scale-[0.98]";

const Button = forwardRef(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = true,
    width = "w-full sm:w-auto sm:min-w-[220px]",
    loading = false,
    leftIcon,
    rightIcon,
    className,
    children,
    href,
    target,
    rel,
    ...rest
  } = props;

  const disabledClasses = "disabled:opacity-60 disabled:cursor-not-allowed";
  const cls = cn(
    "cursor-pointer",
    base,
    stylesByVariant[variant],
    stylesBySize[size],
    width,
    disabledClasses,
    className
  );

  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {leftIcon}
      <span className="whitespace-nowrap">{children}</span>
      {rightIcon}
    </>
  );

  /** Si tiene `href`, renderiza como <Link> */
  if (href) {
    return (
      <Link
        href={href}
        ref={ref}
        className={cls}
        target={target}
        rel={target === "_blank" ? rel ?? "noopener noreferrer" : rel}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  /** Si no tiene href, es un <button> */
  return (
    <button ref={ref} className={cls} disabled={props.disabled || loading} {...rest}>
      {content}
    </button>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "ghost", "dark", "white"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
