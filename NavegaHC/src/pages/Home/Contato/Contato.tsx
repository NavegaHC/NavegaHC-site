import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    nomeCompleto: "",
    numTel: "",
    email: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ nomeCompleto: "", numTel: "", email: "" });
  };

  return (
      <main id="contato" className="flex-1 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Entre em contato conosco</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nomeCompleto" className="block font-medium">
                Nome Completo:
              </label>
              <input
                type="text"
                name="nomeCompleto"
                id="nomeCompleto"
                value={form.nomeCompleto}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="numTel" className="block font-medium">
                Número (Telefone):
              </label>
              <input
                type="text"
                name="numTel"
                id="numTel"
                value={form.numTel}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded px-3 py-2"
              />
            </div>
            
            <div className="flex gap-4 justify-center mt-4">
              <a href="https://www.instagram.com/redelucymontoro/" target="_blank">
                <img src="/public/img/instagram.png" alt="Instagram" className="h-8 w-8" />
              </a>
              <a href="https://web.facebook.com/redelucymontoro?_rdc=1&_rdr#" target="_blank">
                <img src="/public/img/facebook.png" alt="Facebook" className="h-8 w-8" />
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#09a870] text-white font-bold py-2 rounded hover:bg-green-700"
            >
              Enviar
            </button>
          </form>

          {success && (
            <div className="mt-4 text-center text-green-600 font-bold">
              ✅ Lembrete criado com sucesso!
            </div>
          )}
        </div>
      </main>
  );
}
