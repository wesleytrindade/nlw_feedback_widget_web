import { ArrowLeft, Icon } from "phosphor-react";
import { CloseButton } from "../CloseButton";

interface WidgetFormHeaderProps {
  title?: string;
  image?: string;
  step: number;
  handleRestartFeedback?: () => void;
}
export function WidgetFormHeader({
  title,
  image,
  step,
  handleRestartFeedback
}: WidgetFormHeaderProps) {
  return (
    <header>
      {step === 1 && (
        <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={handleRestartFeedback}>
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
      )}
      <span className="text-xl leading-6 flex items-center gap-2">
        {image && <img src={image} alt={title} />}
        {title && title}
      </span>
      <CloseButton />
    </header>
  );
}
