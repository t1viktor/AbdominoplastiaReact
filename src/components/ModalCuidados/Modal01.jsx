import { useState, useEffect } from "react";

const tituloModal = "Cuidados Imediatos e Gerais";

export default function Modal01() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Bloqueia o scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Libera o scroll
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Garante que o scroll é liberado ao desmontar
    };
  }, [isOpen]);

  return (
    <div className="flex justify-center items-center">
      {/* Botão para abrir o modal */}
      <button onClick={() => setIsOpen(true)} className="btnCardCuidados">
        Ver mais sobre
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bgBlur">
          <div className="bg-gradient-to-r from-[#1F2937] to-[#2a3a50] py-6 rounded-2xl shadow-lg w-[50%] h-[95%] overflow-y-scroll text-center justify-items-center space-y-4 max-md:w-[80%] max-md:h-[80%]">
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex justify-between max-md:flex-col-reverse items-center">
              <h2 className="text-3xl text-orange-200 font-semibold mb-2 py-2 max-md:text-xl">
                {tituloModal}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 w-20 py-2 cursor-pointer duration-300 hover:bg-gray-900 hover:text-orange-200 bg-gray-800 text-white rounded-md max-md:text-sm"
              >
                Fechar
              </button>
            </div>

            <img
              className="w-[90%] h-90 rounded-lg border-[1px] border-orange-200 max-md:h-50"
              src="https://abdominoplastia.vercel.app/img/pacienteDeitado.jpg"
              alt=""
            />

            <p className="text-gray-300 mb-4">
              Após a abdominoplastia, o corpo precisa de um período de
              recuperação para se ajustar e cicatrizar. Siga as orientações
              abaixo para proteger a área operada e reduzir o risco de
              complicações:
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
