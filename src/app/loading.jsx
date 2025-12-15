export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
      role="status"
      aria-label="Cargando contenido"
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-pink-600 border-t-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
