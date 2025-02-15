import { useState } from "react";

const tituloModal = "Cuidados Imediatos e Gerais"

export default function Modal02() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      {/* Botão para abrir o modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="btnCardCuidados"
      >
        Ver mais sobre
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex  items-center justify-center bgBlur">
          <div className="bg-gradient-to-r from-[#1F2937] to-[#2a3a50] py-6 rounded-2xl shadow-lg w-[90%] h-[90%] overflow-y-scroll text-center justify-items-center space-y-4">

            <div className="border-b-[1px] border-gray-700 flex flex-col-reverse items-center">

            <h2 className="text-3xl text-orange-200 font-semibold mb-2 py-2 ">{tituloModal}</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 w-20 py-2 bg-gray-800 text-white rounded-md"
            >
              Fechar
            </button>
            </div>

            <img className="w-[90%] h-80 rounded-lg border-[1px] border-orange-200" src="https://abdominoplastia.vercel.app/img/pacienteDeitado.jpg" alt="" />



            <p className="text-gray-600 mb-4">Este é um modal com React e Tailwind CSS.</p>

            
            {/* Botão para fechar */}
            
          </div>
        </div>
      )}
    </div>
  );
}
