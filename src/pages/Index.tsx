import { useState } from 'react';
import { IntroScreen } from '@/components/test/IntroScreen';
import { TestScreen } from '@/components/test/TestScreen';
import { ResultsScreen } from '@/components/test/ResultsScreen';
import { psychologists, questions } from '@/components/test/data';

const Index = () => {
  const [stage, setStage] = useState<'intro' | 'test' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleAnswer = (psychs: string[]) => {
    const newScores = { ...scores };
    psychs.forEach(psych => {
      newScores[psych] = (newScores[psych] || 0) + 1;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStage('results');
    }
  };

  const startTest = () => {
    setStage('test');
    setCurrentQuestion(0);
    setScores({});
  };

  const restartTest = () => {
    setStage('intro');
    setCurrentQuestion(0);
    setScores({});
  };

  const getResults = () => {
    return psychologists.map(psych => ({
      ...psych,
      score: scores[psych.name] || 0,
      percentage: Math.round(((scores[psych.name] || 0) / 10) * 100)
    }))
    .sort((a, b) => b.score - a.score);
  };

  const results = getResults();
  const topMatches = results.filter(r => r.percentage >= 40);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <div className="container max-w-4xl py-12 px-4">
        {stage === 'intro' && (
          <IntroScreen onStartTest={startTest} />
        )}

        {stage === 'test' && (
          <TestScreen
            question={questions[currentQuestion]}
            currentIndex={currentQuestion}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {stage === 'results' && (
          <ResultsScreen
            results={results}
            topMatches={topMatches}
            onRestart={restartTest}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
