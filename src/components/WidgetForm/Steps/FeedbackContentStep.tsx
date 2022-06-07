import { Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedBackType, feedBackTypes } from "..";
import { ScreenShotButton } from "../ScreenShotButton";
import { WidgetFormHeader } from "../WidgetFormHeader";

interface FeedbackContentStepProps {
  feedbackType: FeedBackType;
  handleRestartFeedback: () => void;
  onFeedbackSent: ()=> void;
}
export function FeedbackContentStep({
  feedbackType,
  handleRestartFeedback,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackText, setFeedbackText] = useState("");

  function handleSubmit(e: FormEvent){
    e.preventDefault()
    console.log({screenshot,feedbackText})
    onFeedbackSent()
  }
  const feedbackTypeInfo = feedBackTypes[feedbackType];
  return (
    <>
      <WidgetFormHeader
        title={feedbackTypeInfo.title}
        image={feedbackTypeInfo.image.source}
        step={1}
        handleRestartFeedback={handleRestartFeedback}
      />

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo"
          value={feedbackText}
          onChange={(e)=> setFeedbackText(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShotButton screenshot={screenshot} onScreenshotTook = {setScreenshot} />
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled = {feedbackText.trim().length === 0}
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
