import React, { useEffect, useRef, useState } from "react";
import { FaStop, FaVolumeUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Botao from "./Botao";

function speak(text, lang = "pt-BR", onEnd) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 2;
  utterance.pitch = 1;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;

  window.speechSynthesis.speak(utterance);
}

function collectReadableText(node) {
  if (!node) {
    return "";
  }

  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || "";
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  if (node.hasAttribute?.("data-audioguia-ignore")) {
    return "";
  }

  let text = "";
  node.childNodes.forEach((child) => {
    text += `${collectReadableText(child)} `;
  });

  return text;
}

function normalizeText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function BotaoAudioguia({
  audioguiaTexto = "",
  audioguiaSecoes = [],
  ariaLabel = "Audioguia, clique para escutar a página",
  positionClassName = "absolute bottom-4 right-4",
  className = "",
  children = "Audioguia",
  lang = "pt-BR",
  ...rest
}) {
  const location = useLocation();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }

    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopSpeech = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    if (isMountedRef.current) {
      setIsSpeaking(false);
    }
  };

  const handleClick = () => {
    if (isSpeaking) {
      stopSpeech();
      return;
    }

    const parts = [normalizeText(audioguiaTexto)];

    audioguiaSecoes.forEach((secao) => {
      const sectionText = collectReadableText(secao?.ref?.current);
      const prefix = normalizeText(secao?.prefixo);
      const sufixo = normalizeText(secao?.sufixo);

      if (sectionText) {
        parts.push([prefix, sectionText, sufixo].filter(Boolean).join(" "));
      }
    });

    const textToRead = parts
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    if (!textToRead) {
      return;
    }

    setIsSpeaking(true);
    speak(textToRead, lang, () => {
      if (isMountedRef.current) {
        setIsSpeaking(false);
      }
    });
  };

  const buttonLabel = isSpeaking ? "Parar audioguia" : ariaLabel;

  return (
    <Botao
      onClick={handleClick}
      ariaLabel={buttonLabel}
      className={`flex items-center gap-2 px-4 py-2 text-[20px] ${positionClassName} ${className}`}
      data-audioguia-ignore="true"
      {...rest}
    >
      <span className="relative flex h-[18px] w-[18px] items-center justify-center">
        <FaVolumeUp
          size={18}
          className={`absolute transition-all duration-300 ease-in-out ${
            isSpeaking ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        <FaStop
          size={14}
          className={`absolute transition-all duration-300 ease-in-out ${
            isSpeaking
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
      <span>{children}</span>
    </Botao>
  );
}
