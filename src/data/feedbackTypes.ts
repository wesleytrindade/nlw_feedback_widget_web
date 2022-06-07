import bugImageUrl from "../assets/Bug.svg"
import ideaImageUrl from "../assets/Idea.svg";
import thoughtImageUrl from "../assets/Thought.svg";

export const feedBackTypes = {
    BUG: {
      title: "Problema",
      image: {
        source: bugImageUrl,
        alt: "Imagem de um inseto",
      },
    },
    IDEA: {
      title: "Ideia",
      image: {
        source: ideaImageUrl,
        alt: "Imagem de uma lampada",
      },
    },
    OTHER: {
      title: "Outro",
      image: {
        source: thoughtImageUrl,
        alt: "Imagem de um balão de pensamento",
      },
    },
  };