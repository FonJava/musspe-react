import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import mammoth from "mammoth";
import "leaflet/dist/leaflet.css";

// Dados dos perfis de solo
const perfisDeSolo = [
  {
    nome: "Itambé",
    coords: [-7.42278, -35.18167],
    arquivo: "perfis/ItambeAVA.docx",
  },
  {
    nome: "Goiana",
    coords: [-7.625, -34.95933],
    arquivo: "perfis/GoianaAA.docx",
  },
  {
    nome: "Goiana",
    coords: [-7.625, -34.95833],
    arquivo: "perfis/GoianaEH.docx",
  },
  {
    nome: "Moreno",
    coords: [-8.02833, -34.86167],
    arquivo: "perfis/MorenoAVA.docx",
  },
  {
    nome: "Nazaré da Mata",
    coords: [-7.74222, -35.23444],
    arquivo: "perfis/NazaredaMataCA.docx",
  },
  {
    nome: "Rio Formoso",
    coords: [-8.64417, -35.15417],
    arquivo: "perfis/RioFormosoLA.docx",
  },
  {
    nome: "Cabo",
    coords: [-8.3, -34.98333],
    arquivo: "perfis/CaboNV.docx",
  },
  {
    nome: "Camutanga",
    coords: [-7.42139, -35.27306],
    arquivo: "perfis/camutangaAV.docx",
  },
  {
    nome: "Goiana",
    coords: [-7.625, -34.95733],
    arquivo: "perfis/GoianaPA.docx",
  },
  {
    nome: "Aliança",
    coords: [-7.60556, -35.14528],
    arquivo: "perfis/AliancaAM.docx",
  },
  {
    nome: "Ipojuca",
    coords: [-8.46028, -35.08],
    arquivo: "perfis/IpojucaOH.docx",
  },
  {
    nome: "Ipojuca",
    coords: [-8.42278, -35.02056],
    arquivo: "perfis/IpojucaGH.docx",
  },
  {
    nome: "São Caetano",
    coords: [-8.36167, -36.17389],
    arquivo: "perfis/SaoCaetanoNR.docx",
  },
  {
    nome: "São Caetano",
    coords: [-8.35778, -36.17222],
    arquivo: "perfis/SaoCaetanoPH.docx",
  },
  {
    nome: "Cachoeirinha",
    coords: [-8.45722, -36.21306],
    arquivo: "perfis/CachoeirinhaPH.docx",
  },
  {
    nome: "Rio das Almas",
    coords: [-8.1725, -35.90972],
    arquivo: "perfis/RiodasAlmasAV.docx",
  },
  {
    nome: "Caruaru",
    coords: [-8.23167, -35.92083],
    arquivo: "perfis/CaruaruNR.docx",
  },
  {
    nome: "Vertentes",
    coords: [-7.87972, -35.92167],
    arquivo: "perfis/VertentesAA.docx",
  },
  {
    nome: "Jataúba",
    coords: [-7.97306, -36.51722],
    arquivo: "perfis/JataubaPN.docx",
  },
  {
    nome: "Caruaru",
    coords: [-8.23861, -36.17444],
    arquivo: "perfis/CaruaruLVA.docx",
  },
  {
    nome: "Jupi",
    coords: [-8.7125, -36.41667],
    arquivo: "perfis/JupiAVA.docx",
  },
  {
    nome: "Garanhuns",
    coords: [-9.05, -36.48333],
    arquivo: "perfis/GaranhunsAA.docx",
  },
  {
    nome: "Caruaru",
    coords: [-8.07222, -36.05611],
    arquivo: "perfis/CaruaruNL.docx",
  },
  {
    nome: "Petrolina",
    coords: [-9.06278, -40.30722],
    arquivo: "perfis/PetrolinaAA.docx",
  },
  {
    nome: "Petrolina",
    coords: [-9.04167, -40.25194],
    arquivo: "perfis/PetrolinaPN.docx",
  },
  {
    nome: "Petrolina",
    coords: [-9.35361, -40.47694],
    arquivo: "perfis/PetrolinaNQ.docx",
  },
  {
    nome: "Ibimirim Sálico",
    coords: [-8.53194, -37.69444],
    arquivo: "perfis/IbimirimSalico.docx",
  },
  {
    nome: "Ibimirim Salino",
    coords: [-8.56056, -37.66944],
    arquivo: "perfis/IbimirimSalino.docx",
  },
  {
    nome: "Ibimirim",
    coords: [-8.54333, -37.72111],
    arquivo: "perfis/IbimirimNQ.docx",
  },
  {
    nome: "Cabrobó",
    coords: [-8.50278, -39.3275],
    arquivo: "perfis/CabroboLC.docx",
  },
  {
    nome: "Trindade",
    coords: [-7.82306, -40.31028],
    arquivo: "perfis/TrindadeLA.docx",
  },
  {
    nome: "Santa Cruz da Baixa Verde",
    coords: [-7.82806, -38.15083],
    arquivo: "perfis/SantaCruzdaBaixaVerdeCH.docx",
  },
  {
    nome: "Bodocó",
    coords: [-7.62889, -40.05722],
    arquivo: "perfis/BodocoVH.docx",
  },
  {
    nome: "Santa Cruz da Venerada",
    coords: [-8.32639, -40.28222],
    arquivo: "perfis/SantaCruzdaVeneradaAA.docx",
  },
  {
    nome: "Verdejante",
    coords: [-8.01583, -38.89306],
    arquivo: "perfis/VerdejanteNL.docx",
  },
];

// Ícone personalizado
const customIcon = L.divIcon({
  className: "custom-icon-mapa",
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 34" fill="#471a24">
     <path d="M12 2C7.03 2 3 6.03 3 11c0 4.63 5.07 11.77 8.52 17.57.67 1.11 2.3 1.11 2.96 0C15.93 22.77 21 15.63 21 11c0-4.97-4.03-9-9-9z"/>
     <circle cx="12" cy="11" r="5" fill="#FFDCD2"/>
   </svg>`,
  iconSize: [24, 34],
  iconAnchor: [12, 34],
  popupAnchor: [0, -34],
});

// Componente para limitar o mapa ao estado de Pernambuco
const MapBounds = () => {
  const map = useMap();

  useEffect(() => {
    // Define os limites para Pernambuco
    const bounds = [
      [-9.5, -42.0],
      [-6.0, -32.0],
    ];

    // Limita a área do mapa ao estado de Pernambuco
    map.setMaxBounds(bounds);

    const handleDrag = () => {
      map.panInsideBounds(bounds, { animate: true });
    };

    map.on("drag", handleDrag);

    return () => {
      map.off("drag", handleDrag);
    };
  }, [map]);

  return null;
};

const MapaInterativo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentProfile, setCurrentProfile] = useState("");

  // Coordenadas centradas em Pernambuco (mais à esquerda)
  const position = [-8.0476, -37.4];

  // Função para carregar arquivos DOCX
  const carregarDocx = async (arquivo, nome) => {
    setLoading(true);
    setCurrentProfile(nome);
    try {
      const response = await fetch(arquivo);
      const arrayBuffer = await response.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setModalContent(result.value);
      setModalOpen(true);
    } catch (error) {
      console.error("Erro ao carregar o documento:", error);
      setModalContent("<p>Erro ao carregar o documento. Tente novamente.</p>");
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkerClick = (arquivo, nome) => {
    console.log(`Clicando no marcador: ${nome}, arquivo: ${arquivo}`);
    carregarDocx(arquivo, nome);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
    setCurrentProfile("");
  };

  // Bloquear scroll quando modal estiver aberto
  useEffect(() => {
    if (modalOpen) {
      // Bloquear scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restaurar scroll
      document.body.style.overflow = "unset";
    }

    // Cleanup - restaurar scroll quando componente for desmontado
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  // Fechar modal com tecla Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [modalOpen]);

  return (
    <>
      <div
        className="w-[95%] h-[500px] rounded-lg border-4 border-brand-roxo overflow-hidden mx-auto"
        style={{ minHeight: "500px", maxWidth: "95%" }}
      >
        <MapContainer
          center={position}
          zoom={7.45}
          minZoom={5}
          scrollWheelZoom={true}
          className="w-full h-full"
          style={{ height: "100%", width: "100%" }}
        >
          <MapBounds />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {perfisDeSolo.map((ponto, index) => (
            <Marker
              key={index}
              position={ponto.coords}
              icon={customIcon}
              eventHandlers={{
                click: () => handleMarkerClick(ponto.arquivo, ponto.nome),
              }}
            />
          ))}
        </MapContainer>
      </div>

      {/* Modal */}
      {modalOpen && (
        <>
          {/* Modal Content */}
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 modal-content bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {currentProfile
                    ? `Perfil de Solo - ${currentProfile}`
                    : "Perfil de Solo"}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                  aria-label="Fechar modal"
                >
                  ×
                </button>
              </div>
              <div className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]">
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-roxo"></div>
                    <span className="ml-2">Carregando documento...</span>
                  </div>
                ) : (
                  <div
                    className="prose max-w-none space-y-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: modalContent }}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MapaInterativo;
