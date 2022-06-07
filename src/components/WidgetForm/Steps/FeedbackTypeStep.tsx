import { feedBackTypes, FeedBackType } from "..";
import { CloseButton } from "../../CloseButton";
import { WidgetFormHeader } from "../WidgetFormHeader";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedBackType) => void;
}
export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <WidgetFormHeader title="Digite o seu feedback" step={0}/>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedBackTypes).map(([key, data]) => {
          return (
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              onClick={() => {
                onFeedbackTypeChanged(key as FeedBackType);
              }}
              key={key}
            >
              <img src={data.image.source} alt={data.image.alt} />
              <span>{data.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
