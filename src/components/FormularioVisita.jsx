import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import flatpickr from "flatpickr";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import "flatpickr/dist/flatpickr.min.css";
import imagemModal from "/imagens/modal-sucesso.png";

const FormularioVisita = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    motivo: "",
  });
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    flatpickr("#date", {
      locale: Portuguese,
      dateFormat: "d/m/Y",
      minDate: "today",
      disable: [
        function (date) {
          return [0, 3, 5, 6].includes(date.getDay());
        },
      ],
      onChange: function (selectedDates, dateStr) {
        setSelectedDate(dateStr);
      },
    });
  }, []);

  useEffect(() => {
    setSubmitEnabled(selectedDate && selectedTime);
  }, [selectedDate, selectedTime]);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("Data da visita", selectedDate);
    payload.append("Horário", selectedTime);
    payload.append("Nome do responsável", formData.nome);
    payload.append("Número para contato", formData.telefone);
    payload.append("E-mail para contato", formData.email);
    payload.append("Motivo da visita", formData.motivo);

    try {
      const response = await fetch("https://formspree.io/f/mgvlakdg", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setModalOpen(true);
      } else {
        alert("Houve um erro no envio do formulário. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <div className="grid md:flex md:flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center md:items-start"
      >
        <span className="font-barlow-medium text-brand-dark text-3xl flex items-start justify-start w-full">
          <span className="mr-2 border rounded-3xl border-brand-dark bg-brand-roxo text-white text-2xl py-[3px] px-[10px] font-barlow-semibold">
            01
          </span>
          <h2>Selecione uma data</h2>
        </span>
        <label
          htmlFor="date"
          className="font-barlow-medium text-brand-dark mt-4 mb-[-13px]"
        >
          Data da visita
        </label>
        <input
          type="text"
          id="date"
          className="border-brand-dark border-[2.5px] rounded-[5px] font-barlow text-xl text-gray-900 text-center my-4 cursor-pointer"
          placeholder="Abrir calendário"
          required
        />
        <h2 className="font-barlow-medium text-brand-dark text-lg">
          Selecione um horário
        </h2>
        <div className="grid grid-cols-2 bg-brand-roxo py-[15px] md:py-[35px] px-[10px] md:px-[20px] rounded-3xl mt-2 w-[300px] sm:w-[450px] md:w-[670px] mb-[60px]">
          {[
            "13h às 14h30",
            "14h30 às 16h",
            "13h30 às 15h",
            "15h às 16h30",
            "14h às 15h30",
            "15h30 às 17h",
          ].map((time) => (
            <button
              key={time}
              type="button"
              className={
                selectedTime === time
                  ? "font-barlow text-xl md:text-2xl  bg-brand-laranja px-2 w-[130px] sm:w-[200px] md:w-[300px] rounded-2xl my-2 py-2 md:py-3 mx-1 text-white transition-colors duration-300"
                  : "font-barlow text-xl md:text-2xl bg-white px-2 w-[130px] sm:w-[200px] md:w-[300px] rounded-2xl my-2 py-2 md:py-3 mx-1 transition-colors duration-300"
              }
              onClick={() => handleTimeClick(time)}
              aria-pressed={selectedTime === time}
              aria-label={`Selecionar horário ${time}`}
            >
              {time}
            </button>
          ))}
        </div>

        <span className="font-barlow-medium text-brand-dark text-3xl flex items-start justify-start w-full">
          <span className="mr-2 border rounded-3xl border-brand-dark bg-brand-roxo text-white text-2xl py-[3px] px-[9px] font-barlow-semibold">
            02
          </span>
          <h2>Identifique-se</h2>
        </span>

        <div className="grid gap-4 justify-center items-center">
          <label
            htmlFor="nome"
            className="font-barlow-medium text-brand-dark mt-4 mb-[-13px]"
          >
            Nome do responsável
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome e sobrenome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-[200px] md:w-[280px] rounded-3xl py-1.5 pl-4 text-md font-barlow"
          />
          <label
            htmlFor="telefone"
            className="font-barlow-medium text-brand-dark mt-1 mb-[-13px]"
          >
            Número para contato
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(xx) xxxxx-xxxx"
            value={formData.telefone}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9()\-\s]/g, "");
              setFormData((prev) => ({ ...prev, telefone: val }));
            }}
            required
            className="w-[200px] md:w-[280px] rounded-3xl py-1.5 pl-4 text-md font-barlow"
            pattern="[0-9()\-\s]{10,20}"
            maxLength={20}
            inputMode="text"
          />
          <label
            htmlFor="email"
            className="font-barlow-medium text-brand-dark mt-1 mb-[-13px]"
          >
            E-mail para contato
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="latossolo@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-[200px] md:w-[280px] rounded-3xl py-1.5 pl-4 text-md font-barlow"
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            title="Digite um e-mail válido (deve conter @ e .)"
          />
          <label
            htmlFor="motivo"
            className="font-barlow-medium text-brand-dark mt-1 mb-[-13px]"
          >
            Motivo da visita
          </label>
          <textarea
            id="motivo"
            name="motivo"
            placeholder="Especifique a instituição e quantidade de alunos caso instituição de ensino. Exemplos: 'Sou professor da escola X e venho visitar com minha turma de 20 alunos' ou 'Venho fazer uma visita individual para conhecer o espaço!'"
            rows={6}
            value={formData.motivo}
            onChange={handleChange}
            required
            className="w-[280px] md:w-[470px] rounded-3xl py-1.5 px-4 text-md font-barlow resize-none"
          />
        </div>

        <span className="flex px-auto mt-8 items-center">
          <button
            className="hover:bg-brand-orange bg-brand-laranja font-barlow-medium text-white cursor-pointer text-2xl rounded-3xl py-4 px-7 mr-10 disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={!submitEnabled}
          >
            Confirmar agendamento
          </button>
          <p className="font-barlow-italic text-brand-laranja w-[50%] md:w-[280px]">
            *Após agendar a visita entraremos em contato para a confirmação do
            agendamento próximo à data da sua visita!
          </p>
        </span>
      </form>

      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          navigate("/musspe-react/");
        }}
        title=""
        larguraModal="w-[90%] md:w-[600px]"
        textoBotao="Voltar para a página inicial"
      >
        <div className="flex flex-col items-center gap-4 text-[#E9B80E]">
          <img
            src={imagemModal}
            alt="Imagem de sucesso"
            className="mt-[-50px] w-[200px]"
          />
          <h1 className="font-barlow-bold text-3xl text-center">
            Visita em análise para aprovação
          </h1>
          <p className="mt-[-15px] font-barlow text-center text-lg mb-[-10px]">
            ATENÇÃO: Em até 24 horas você receberá uma mensagem de confirmação
            do agendamento em seu e-mail.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default FormularioVisita;
