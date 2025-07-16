import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full min-h-[270px] bg-brand-dark font-barlow text-brand-bege text-[16px] pb-8">
      <div className=" max-w-[560px] mx-auto">
        <div className="grid grid-cols-2 gap-y-6 justify-items-center sm:flex sm:justify-between mx-auto py-12">
          <div className="flex flex-col">
            <h2 className="font-barlow-bold text-[20px] pb-2">Páginas</h2>
            <Link to="/musspe-react/" className="hover:underline">
              Início
            </Link>
            <Link to="/musspe-react/" className="hover:underline">
              Noticias
            </Link>
            <Link to="/musspe-react/" className="hover:underline">
              Acervo
            </Link>
            <Link to="/musspe-react/" className="hover:underline">
              Jogos
            </Link>
            <Link to="/musspe-react/" className="hover:underline">
              Colaboradores
            </Link>
            <Link to="/musspe-react/" className="hover:underline">
              Agende uma visita
            </Link>
          </div>
          <div className="flex flex-col">
            <h2 className="font-barlow-bold text-[20px] pb-2">Endereço</h2>
            <p className="font-barlow-italic max-w-[133px]">
              Rua Dom Manoel de Medeiros, s/n, Dois Irmãos, Prédio Professor
              Mateus Rosas Ribeiro - UFRPE
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="font-barlow-bold text-[20px] pb-2">Contatos</h2>
            <p>
              (81) 9 9604 - 3576
              <br /> musspe@ufrpe.br
              <br /> @museudesolospe
            </p>
          </div>
          <div className="flex flex-col space-y-2 mt-2">
            <a
              href="https://www.instagram.com/museudesolospe/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.youtube.com/@museudesolospe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@museudesolospe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="https://www.facebook.com/museudesolospe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-bege hover:text-brand-laranja transition-colors duration-200"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
        <div className="pt-6 text-end mx-14 sm:mx-0 sm:pt-0">
          <p className="font-barlow-medium-italic text-[15px]">
            Design por Tiago Finizola, implementação por Anthony Guerra e
            Gabriel Leão, e ilustrações por Laura Lins.
          </p>
          <p className="font-barlow-italic text-[13px]">
            © 2025 Museu de Solos de Pernambuco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
