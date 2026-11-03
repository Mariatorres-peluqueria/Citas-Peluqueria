// Service worker mínimo: solo existe para que el navegador permita
// "instalar" la web como app. No guarda nada offline — cada visita
// pide los datos reales a Supabase, que es lo que necesita esta web.
self.addEventListener("fetch", () => {});
