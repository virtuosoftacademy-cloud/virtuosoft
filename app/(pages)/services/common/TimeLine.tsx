import StepWidget from "@/components/common/StepWidget";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type TitlePart = string | { text: string; bold?: boolean };

export interface TimeLineStep {
  title: string;
  description: string;
}

export interface BusinessOutcome {
  point: string;
}

interface TimeLineProps {
  titleParts: TitlePart[];
  timeLineItems: TimeLineStep[];
  businessOutComes: BusinessOutcome[];
  btnText?: string;
}

export default function TimeLine(timeLine: TimeLineProps) {
  const { titleParts, timeLineItems, businessOutComes, btnText } = timeLine
  return (
    <StepWidget
      heading={
        <div className="whitespace-pre-line">
          {titleParts.map((part, i) =>
            typeof part === 'string' ? (
              part
            ) : (
              <span key={i} className={part.bold ? "font-bold" : ""}>
                {" "} {part.text} {" "}
              </span>
            )
          )}
        </div>
      }
      button={
        <Button asChild>
          <Link href="/">
            {btnText || "Build What’s Next"}
          </Link>
        </Button>
      }
      steps={timeLineItems}
      outComes={businessOutComes}
    />
  );
}
