import React, { useState } from "react";

const ImpressumModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-cyan-400 hover:underline"
      >
        Imprint
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-[90%] max-w-lg max-h-[80%] overflow-y-auto">

            <button 
              onClick={() => setIsOpen(false)} 
              className="float-right text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center text-white mb-4">Impressum</h2>
            
            <p className="text-white"><strong>Inhalte gemäß §5 DDG</strong></p>
            <p className="text-gray-400">Alexander Panske</p>
            <p className="text-gray-400">
              c/o IP-Management #4076<br />
              Ludwig-Erhard-Str. 18<br />
              20459 Hamburg
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">Kontaktdaten:</h3>
            <p className="text-gray-400">
              E-Mail: <a href="mailto:alexander.panske@yahoo.com" className="text-cyan-400">alexander.panske@yahoo.com</a>
            </p>
            <p className="text-gray-400">
              Telefon: <a href="tel:+4917672796953" className="text-cyan-400">+49 176 72796953</a>
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">Redaktionell verantwortlich:</h3>
            <p className="text-gray-400">Alexander Panske</p>

            <h3 className="text-lg font-semibold text-white mt-4">EU-Streitschlichtung:</h3>
            <p className="text-gray-400">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <br />
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-cyan-400">
                ec.europa.eu/consumers/odr/
              </a>
            </p>

            <p className="text-gray-500 mt-4 text-sm"><em>Quelle: Impressum-Privatschutz</em></p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImpressumModal;