import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Question } from './types';

interface TestScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (psychologists: string[]) => void;
}

export const TestScreen = ({ question, currentIndex, totalQuestions, onAnswer }: TestScreenProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-muted-foreground">
            Вопрос {currentIndex + 1} из {totalQuestions}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round(((currentIndex) / totalQuestions) * 100)}%
          </span>
        </div>
        <Progress value={(currentIndex / totalQuestions) * 100} className="h-2" />
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl leading-relaxed">
            {question.text}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, idx) => (
            <Button
              key={idx}
              variant="outline"
              className="w-full text-left h-auto py-4 px-5 justify-start hover:bg-primary/10 hover:border-primary transition-all duration-200"
              onClick={() => onAnswer(option.psychologists)}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">{String.fromCharCode(65 + idx)}</span>
                </div>
                <span className="text-base">{option.label}</span>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
