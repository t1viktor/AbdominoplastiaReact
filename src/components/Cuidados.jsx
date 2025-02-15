import Modal01 from "./ModalCuidados/Modal01";
import Modal02 from "./ModalCuidados/Modal02";

const tittleCard01Cuidados = "Cuidados Imediatos";
const li01Card01Cuidados = "Repouso adequado nas primeiras semanas";
const li02Card01Cuidados = "Movimentação suave e progressiva";
const li03Card01Cuidados = "Acompanhamento da cicatrização";

const tittleCard02Cuidados = "Alimentação";
const li01Card02Cuidados = "Dieta rica em proteínas";
const li02Card02Cuidados = "Hidratação adequada";
const li03Card02Cuidados = "Suplementação conforme orientação";

const tittleCard03Cuidados = "Cuidados com a cicatriz";
const li01Card03Cuidados = "Limpeza diária com água e sabão neutro";
const li02Card03Cuidados = "Uso de pomadas cicatrizantes";
const li03Card03Cuidados = "Evitar exposição solar";

const tittleCard04Cuidados = "Atividades físicas";
const li01Card04Cuidados = "Retorno gradual às atividades";
const li02Card04Cuidados = "Evitar esforços excessivos";
const li03Card04Cuidados = "Orientação de um profissional";

const tittleCard05Cuidados = "Consultas de acompanhamento";
const li01Card05Cuidados = "Avaliação periódica do cirurgião";
const li02Card05Cuidados = "Exames de rotina conforme orientação";
const li03Card05Cuidados = "Esclarecimento de dúvidas";

const tittleCard06Cuidados = "Cuidados prolongados";
const li01Card06Cuidados = "Manutenção da saúde e bem-estar";
const li02Card06Cuidados = "Acompanhamento médico regular";
const li03Card06Cuidados = "Adoção de hábitos saudáveis";

const tittleCard07Cuidados = "Cuidados com a saúde mental";
const li01Card07Cuidados = "Apoio emocional e psicológico";
const li02Card07Cuidados = "Manutenção da autoestima";
const li03Card07Cuidados = "Busca por equilíbrio e qualidade de vida";

export default function Cuidados() { 

    return(
        <div id="cuidados" className="min-h-[200vh] bg-gradient-to-r from-zinc-800 to-zinc-900 py-12">

            <h1 className="text-5xl max-md:text-4xl text-center text-white">Cuidados Essenciais</h1>

            <div className="grid grid-cols-3 p-12 max-md:grid-cols-1 gap-4 justify-items-center">

              <div className="cardCuidados">
                <img className="imgCardCuidados" src="https://abdominoplastia.vercel.app/img/pacienteDeitado.jpg" alt="" />
                <h2 className="tituloCardCuidados">{tittleCard01Cuidados}</h2>

                <ul className="ulCardCuidados">
                    <li className="liCardCuidados">{li01Card01Cuidados}</li>
                    <li className="liCardCuidados">{li02Card01Cuidados}</li>
                    <li className="liCardCuidados">{li03Card01Cuidados}</li>
                </ul>
              <Modal01 />
              </div>

              <div className="cardCuidados">
                <img className="imgCardCuidados" src="" alt="" />
                <h2 className="tituloCardCuidados">{tittleCard02Cuidados}</h2>

                <ul className="ulCardCuidados">
                    <li className="liCardCuidados">{li01Card02Cuidados}</li>
                    <li className="liCardCuidados">{li02Card02Cuidados}</li>
                    <li className="liCardCuidados">{li03Card02Cuidados}</li>
                </ul>
              <Modal02 />
              </div>

              <div className="cardCuidados">
                <img className="imgCardCuidados" src="" alt="" />
                <h2 className="tituloCardCuidados">{tittleCard03Cuidados}</h2>

                <ul className="ulCardCuidados">
                    <li className="liCardCuidados">{li01Card03Cuidados}</li>
                    <li className="liCardCuidados">{li02Card03Cuidados}</li>
                    <li className="liCardCuidados">{li03Card03Cuidados}</li>
                </ul>
              <button className="btnCardCuidados">Ver mais sobre</button>
              </div>

              <div className="cardCuidados">
                <img className="imgCardCuidados" src="" alt="" />
                <h2 className="tituloCardCuidados">{tittleCard04Cuidados}</h2>

                <ul className="ulCardCuidados">
                    <li className="liCardCuidados">{li01Card04Cuidados}</li>
                    <li className="liCardCuidados">{li02Card04Cuidados}</li>
                    <li className="liCardCuidados">{li03Card04Cuidados}</li>
                </ul>
              <button className="btnCardCuidados">Ver mais sobre</button>
              </div>

              <div className="cardCuidados">
                <img className="imgCardCuidados" src="" alt="" />
                <h2 className="tituloCardCuidados">{tittleCard05Cuidados}</h2>

                <ul className="ulCardCuidados">
                    <li className="liCardCuidados">{li01Card05Cuidados}</li>
                    <li className="liCardCuidados">{li02Card05Cuidados}</li>
                    <li className="liCardCuidados">{li03Card05Cuidados}</li>
                </ul>
              <button className="btnCardCuidados">Ver mais sobre</button>
              </div>

              <div className="cardCuidados">
                <img className="imgCardCuidados" src="" alt="" />
                <h2 className="tituloCardCuidados">{tittleCard06Cuidados}</h2>

                <ul className="ulCardCuidados">
                    <li className="liCardCuidados">{li01Card06Cuidados}</li>
                    <li className="liCardCuidados">{li02Card06Cuidados}</li>
                    <li className="liCardCuidados">{li03Card06Cuidados}</li>
                </ul>
              <button className="btnCardCuidados">Ver mais sobre</button>
              </div>

              <div className="cardCuidados">
                <img className="imgCardCuidados" src="" alt="" />
                <h2 className="tituloCardCuidados">{tittleCard07Cuidados}</h2>

                <ul className="ulCardCuidados">
                    <li className="liCardCuidados">{li01Card07Cuidados}</li>
                    <li className="liCardCuidados">{li02Card07Cuidados}</li>
                    <li className="liCardCuidados">{li03Card07Cuidados}</li>
                </ul>
              <button className="btnCardCuidados">Ver mais sobre</button>
              </div>

              

            </div>

        </div>
    )
}