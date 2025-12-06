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
      const response = await fetch("https://formspree.io/f/xgvwgoel", {
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
    <div className="grid items-center md:flex md:flex-col">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center md:items-start"
      >
        <span className="flex w-full items-start justify-start font-barlow-medium text-3xl text-brand-dark">
          <span className="mr-2 rounded-3xl border border-brand-dark bg-brand-roxo px-[10px] py-[3px] font-barlow-semibold text-2xl text-white">
            01
          </span>
          <h2>Selecione uma data</h2>
        </span>
        <label
          htmlFor="date"
          className="mb-[-13px] mt-4 font-barlow-medium text-brand-dark"
        >
          Data da visita
        </label>
        <input
          type="text"
          id="date"
          className="my-4 cursor-pointer rounded-[5px] border-[2.5px] border-brand-dark text-center font-barlow text-xl text-gray-900"
          placeholder="Abrir calendário"
          required
        />
        <h2 className="font-barlow-medium text-lg text-brand-dark">
          Selecione um horário
        </h2>
        <div className="mb-[60px] mt-2 grid w-[300px] grid-cols-2 rounded-3xl bg-brand-roxo px-[10px] py-[15px] sm:w-[450px] md:w-[670px] md:px-[20px] md:py-[35px]">
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
                  ? "mx-1 my-2 w-[130px] rounded-2xl bg-brand-laranja px-2 py-2 font-barlow text-xl text-white transition-colors duration-300 sm:w-[200px] md:w-[300px] md:py-3 md:text-2xl"
                  : "mx-1 my-2 w-[130px] rounded-2xl bg-white px-2 py-2 font-barlow text-xl transition-colors duration-300 sm:w-[200px] md:w-[300px] md:py-3 md:text-2xl"
              }
              onClick={() => handleTimeClick(time)}
              aria-pressed={selectedTime === time}
              aria-label={`Selecionar horário ${time}`}
            >
              {time}
            </button>
          ))}
        </div>

        <span className="flex w-full items-start justify-start font-barlow-medium text-3xl text-brand-dark">
          <span className="mr-2 rounded-3xl border border-brand-dark bg-brand-roxo px-[9px] py-[3px] font-barlow-semibold text-2xl text-white">
            02
          </span>
          <h2>Identifique-se</h2>
        </span>

        <div className="grid items-center justify-center gap-4">
          <label
            htmlFor="nome"
            className="mb-[-13px] mt-4 font-barlow-medium text-brand-dark"
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
            className="text-md w-[200px] rounded-3xl py-1.5 pl-4 font-barlow md:w-[280px]"
          />
          <label
            htmlFor="telefone"
            className="mb-[-13px] mt-1 font-barlow-medium text-brand-dark"
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
            className="text-md w-[200px] rounded-3xl py-1.5 pl-4 font-barlow md:w-[280px]"
            pattern="[0-9()\-\s]{10,20}"
            maxLength={20}
            inputMode="text"
          />
          <label
            htmlFor="email"
            className="mb-[-13px] mt-1 font-barlow-medium text-brand-dark"
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
            className="text-md w-[200px] rounded-3xl py-1.5 pl-4 font-barlow md:w-[280px]"
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            title="Digite um e-mail válido (deve conter @ e .)"
          />
          <label
            htmlFor="motivo"
            className="mb-[-13px] mt-1 font-barlow-medium text-brand-dark"
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
            className="text-md w-[280px] resize-none rounded-3xl px-4 py-1.5 font-barlow md:w-[470px]"
          />
        </div>

        <span className="px-auto mt-8 flex items-center">
          <button
            className="mr-10 cursor-pointer rounded-3xl bg-brand-laranja px-7 py-4 font-barlow-medium text-2xl text-white hover:bg-brand-orange disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-400"
            type="submit"
            disabled={!submitEnabled}
          >
            Confirmar agendamento
          </button>
          <p className="w-[50%] font-barlow-italic text-brand-laranja md:w-[280px]">
            *Após agendar a visita entraremos em contato para a confirmação do
            agendamento próximo à data da sua visita!
          </p>
        </span>
      </form>

      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          navigate("/");
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
          <h1 className="text-center font-barlow-bold text-3xl">
            Visita em análise para aprovação
          </h1>
          <p className="mb-[-10px] mt-[-15px] text-center font-barlow text-lg">
            ATENÇÃO: Em até 24 horas você receberá uma mensagem de confirmação
            do agendamento em seu e-mail.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default FormularioVisita;
