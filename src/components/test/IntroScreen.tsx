import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface IntroScreenProps {
  onStartTest: () => void;
}

export const IntroScreen = ({ onStartTest }: IntroScreenProps) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
          <Icon name="Heart" size={40} className="text-primary" />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Какой психолог тебе подходит?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Пройди тест и узнай, с каким из великих психологов тебе было бы комфортнее всего работать
        </p>
      </div>

      <Card className="mb-8 border-2 hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Info" size={24} className="text-primary" />
            Как это работает?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold">1</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Ответь на 10 вопросов</h4>
              <p className="text-muted-foreground">Выбери варианты, которые ближе всего к твоему стилю общения</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold">2</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Получи результаты</h4>
              <p className="text-muted-foreground">Узнай процент совместимости с каждым психологом</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold">3</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Изучи рекомендации</h4>
              <p className="text-muted-foreground">Познакомься с подходами психологов, которые тебе подходят</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button size="lg" onClick={onStartTest} className="text-lg px-8 py-6 hover:scale-105 transition-transform">
          Начать тест
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};
