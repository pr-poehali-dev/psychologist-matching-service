import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { PsychologistResult } from './types';

interface ResultsScreenProps {
  results: PsychologistResult[];
  topMatches: PsychologistResult[];
  onRestart: () => void;
}

const getCompatibilityLevel = (percentage: number) => {
  if (percentage >= 60) return { label: 'Максимальная совместимость', color: 'bg-green-500' };
  if (percentage >= 40) return { label: 'Хорошая совместимость', color: 'bg-yellow-500' };
  return { label: 'Низкая совместимость', color: 'bg-gray-400' };
};

export const ResultsScreen = ({ results, topMatches, onRestart }: ResultsScreenProps) => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
          <Icon name="CheckCircle" size={40} className="text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Результаты теста</h1>
        <p className="text-lg text-muted-foreground">
          Вот психологи, с которыми тебе будет комфортно работать
        </p>
      </div>

      {topMatches.length > 0 && (
        <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Star" size={24} className="text-primary" />
              Твои лучшие совпадения
            </CardTitle>
            <CardDescription>
              Эти психологи максимально соответствуют твоему стилю общения
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topMatches.map((result, idx) => {
              const compat = getCompatibilityLevel(result.percentage);
              return (
                <div key={result.name} className="bg-card rounded-lg p-5 border hover:shadow-md transition-all">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="relative w-20 h-20 rounded-full border-2 border-primary/20 overflow-hidden bg-muted flex-shrink-0">
                      <img 
                        src={result.image} 
                        alt={result.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-muted-foreground">
                        {result.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          {idx === 0 && <Icon name="Trophy" size={20} className="text-yellow-500" />}
                          <h3 className="text-xl font-semibold">{result.name}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">{result.percentage}%</div>
                          <div className="text-xs text-muted-foreground">совместимость</div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mb-2">{result.approach}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{result.description}</p>
                  <div className="flex items-center gap-3">
                    <Progress value={result.percentage} className="flex-1 h-2" />
                    <Badge className={compat.color}>{compat.label}</Badge>
                  </div>
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline mt-3 text-sm"
                  >
                    Узнать больше
                    <Icon name="ExternalLink" size={14} />
                  </a>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Все результаты</CardTitle>
          <CardDescription>Полный список психологов с процентом совместимости</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {results.map((result) => (
              <AccordionItem key={result.name} value={result.name}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={result.image} 
                          alt={result.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-muted-foreground">
                          {result.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <span className="font-semibold">{result.name}</span>
                      <Badge variant="outline">{result.approach}</Badge>
                    </div>
                    <span className="text-primary font-semibold">{result.percentage}%</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 rounded-full border-2 border-primary/10 overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={result.image} 
                          alt={result.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-muted-foreground">
                          {result.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-1">{result.description}</p>
                    </div>
                    <Progress value={result.percentage} className="h-2" />
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                    >
                      Подробнее на Wikipedia
                      <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button size="lg" onClick={onRestart} variant="outline">
          <Icon name="RotateCcw" size={20} className="mr-2" />
          Пройти заново
        </Button>
      </div>
    </div>
  );
};
