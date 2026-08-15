import React, { useEffect, useRef, useState } from "react";
import { FaStop, FaVolumeUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Botao from "./Botao";

export default function BotaoAudioguia({
  audio,
  children = "Audioguia",
  ariaLabel = "Audioguia, clique para escutar sobre o conteudo da página",
  className = "",
  positionClassName = "absolute bottom-4 right-4",
  ...rest
}) {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const mountedRef = useRef(false);

  const resolveAudioPath = (audioPath) => {
    if (!audioPath) return "";
    if (audioPath.startsWith("/")) return audioPath;
    if (audioPath.startsWith("audios/")) return `/${audioPath}`;
    return `/audios/${audioPath}`;
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (mountedRef.current) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
      stopAudio();
    };
  }, []);

  useEffect(() => {
    stopAudio();
  }, [location.pathname]);

  useEffect(() => {
    if (!audio) return;

    const src = resolveAudioPath(audio);
    const currentAudio = new Audio(src);
    currentAudio.preload = "auto";
    currentAudio.onended = () => {
      if (mountedRef.current) {
        setIsPlaying(false);
      }
    };

    audioRef.current = currentAudio;

    return () => {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    };
  }, [audio]);

  const handleClick = async () => {
    if (!audio) return;

    if (isPlaying && audioRef.current) {
      stopAudio();
      return;
    }

    const audioUrl = resolveAudioPath(audio);

    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.preload = "auto";
      audioRef.current.onended = () => {
        if (mountedRef.current) {
          setIsPlaying(false);
        }
      };
    }

    const currentAudio = audioRef.current;

    if (currentAudio.src !== window.location.origin + audioUrl) {
      currentAudio.src = audioUrl;
    }

    try {
      await currentAudio.play();
      if (mountedRef.current) {
        setIsPlaying(true);
      }
    } catch (error) {
      stopAudio();
    }
  };

  const buttonLabel = isPlaying ? "Parar audioguia" : ariaLabel;

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
            isPlaying ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        <FaStop
          size={14}
          className={`absolute transition-all duration-300 ease-in-out ${
            isPlaying
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
      <span>{children}</span>
    </Botao>
  );
}
