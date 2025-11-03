import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Psychologist {
  name: string;
  description: string;
  approach: string;
  link: string;
  image: string;
}

const psychologists: Psychologist[] = [
  {
    name: 'Карл Роджерс',
    description: 'Гуманистический психолог, развил клиент-центрированное консультирование. Фокус на эмпатии, принятии и поддержке.',
    approach: 'Эмпатия и принятие',
    link: 'https://ru.wikipedia.org/wiki/Роджерс,_Карл',
    image: 'https://upload.wikimedia.org/wikipedia/en/2/25/Carl_Ransom_Rogers.jpg'
  },
  {
    name: 'Ирвин Ялом',
    description: 'Экзистенциальный психотерапевт, работает с глубокими вопросами смысла жизни и групповой динамикой.',
    approach: 'Экзистенциальная терапия',
    link: 'https://ru.wikipedia.org/wiki/Ялом,_Ирвин',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Irvin_Yalom_2013_%28cropped%29.jpg/440px-Irvin_Yalom_2013_%28cropped%29.jpg'
  },
  {
    name: 'Карен Хорни',
    description: 'Психоаналитик и гуманист, фокус на тревоге, межличностных отношениях и внутренней свободе.',
    approach: 'Неопсихоанализ',
    link: 'https://ru.wikipedia.org/wiki/Хорни,_Карен',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Karen_Horney_1938.jpg/440px-Karen_Horney_1938.jpg'
  },
  {
    name: 'Альберт Эллис',
    description: 'Создатель рационально-эмоциональной терапии, работает с убеждениями и логикой клиента.',
    approach: 'Рационально-эмоциональная терапия',
    link: 'https://ru.wikipedia.org/wiki/Эллис,_Альберт',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Albert_Ellis_%281913-2007%29.jpg/440px-Albert_Ellis_%281913-2007%29.jpg'
  },
  {
    name: 'Аарон Бек',
    description: 'Основатель когнитивной терапии, помогает выявлять и корректировать негативные автоматические мысли.',
    approach: 'Когнитивная терапия',
    link: 'https://ru.wikipedia.org/wiki/Бек,_Аарон',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Aaron_Beck_2016.jpg/440px-Aaron_Beck_2016.jpg'
  },
  {
    name: 'Эрик Берн',
    description: 'Создатель транзактного анализа, помогает понять роли и сценарии межличностного поведения.',
    approach: 'Транзактный анализ',
    link: 'https://ru.wikipedia.org/wiki/Берн,_Эрик',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Eric_Berne_1969.jpg'
  },
  {
    name: 'Виктор Франкл',
    description: 'Основатель логотерапии, помогает клиентам находить смысл и цель в жизни.',
    approach: 'Логотерапия',
    link: 'https://ru.wikipedia.org/wiki/Франкл,_Виктор',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Viktor_Frankl2.jpg/440px-Viktor_Frankl2.jpg'
  },
  {
    name: 'Карл Юнг',
    description: 'Основатель аналитической психологии, работает с архетипами, бессознательным и символами.',
    approach: 'Аналитическая психология',
    link: 'https://ru.wikipedia.org/wiki/Юнг,_Карл_Густав',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Carl_Jung_signature.jpg/440px-Carl_Jung_signature.jpg'
  },
  {
    name: 'Милтон Эриксон',
    description: 'Психиатр и гипнотерапевт, использует метафоры и творческий подход для работы с бессознательным.',
    approach: 'Эриксоновский гипноз',
    link: 'https://ru.wikipedia.org/wiki/Эриксон,_Милтон',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/86/Milton_H._Erickson.jpg'
  },
  {
    name: 'Фриц Перлз',
    description: 'Основатель гештальт-терапии, работает с осознанностью, эмоциями и телесными ощущениями.',
    approach: 'Гештальт-терапия',
    link: 'https://ru.wikipedia.org/wiki/Перлз,_Фриц',
    image: 'https://upload.wikimedia.org/wikipedia/en/8/89/Fritz_perls.jpg'
  }
];

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    psychologists: string[];
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Как ты предпочитаешь, чтобы психолог начинал с тобой работу?',
    options: [
      { label: 'Спокойно слушал, давал возможность самому разобраться', psychologists: ['Карл Роджерс', 'Ирвин Ялом'] },
      { label: 'Задавал чёткие вопросы, помогал структурировать мысли', psychologists: ['Аарон Бек', 'Альберт Эллис'] },
      { label: 'Давал метафоры или истории, через которые сам начинаешь видеть решение', psychologists: ['Милтон Эриксон', 'Карл Юнг'] },
      { label: 'Помогал почувствовать эмоции и вдохновлял на действия', psychologists: ['Фриц Перлз', 'Виктор Франкл', 'Карен Хорни', 'Эрик Берн'] }
    ]
  },
  {
    id: 2,
    text: 'Что тебе важнее всего в разговоре с психологом?',
    options: [
      { label: 'Эмпатия и принятие', psychologists: ['Карл Роджерс', 'Карен Хорни'] },
      { label: 'Логика, ясность, конкретные аргументы', psychologists: ['Альберт Эллис', 'Аарон Бек', 'Эрик Берн'] },
      { label: 'Осознание смысла и философский взгляд', psychologists: ['Виктор Франкл', 'Карл Юнг'] },
      { label: 'Живой контакт и активное вовлечение', psychologists: ['Фриц Перлз', 'Милтон Эриксон', 'Ирвин Ялом'] }
    ]
  },
  {
    id: 3,
    text: 'Если ты запутался в ситуации, что поможет больше всего?',
    options: [
      { label: 'Разбор убеждений и логических ошибок', psychologists: ['Альберт Эллис', 'Аарон Бек'] },
      { label: 'Эмпатичное внимание и отражение чувств', psychologists: ['Карл Роджерс', 'Ирвин Ялом', 'Карен Хорни'] },
      { label: 'Истории и метафоры, которые помогают увидеть решение', psychologists: ['Милтон Эриксон', 'Карл Юнг'] },
      { label: 'Вопросы о смысле и ценностях', psychologists: ['Виктор Франкл', 'Фриц Перлз', 'Эрик Берн'] }
    ]
  },
  {
    id: 4,
    text: 'Какой стиль общения тебе ближе?',
    options: [
      { label: 'Тёплый, поддерживающий', psychologists: ['Карл Роджерс', 'Ирвин Ялом'] },
      { label: 'Интеллектуальный, аналитический', psychologists: ['Аарон Бек', 'Альберт Эллис', 'Эрик Берн'] },
      { label: 'Философский, глубокий', psychologists: ['Виктор Франкл', 'Карл Юнг'] },
      { label: 'Творческий, активный, живой', psychologists: ['Милтон Эриксон', 'Фриц Перлз', 'Карен Хорни'] }
    ]
  },
  {
    id: 5,
    text: 'Чего ты ожидаешь от консультации?',
    options: [
      { label: 'Понимания себя и своих эмоций', psychologists: ['Карл Роджерс', 'Карен Хорни'] },
      { label: 'Чётких рекомендаций и алгоритмов', psychologists: ['Альберт Эллис', 'Аарон Бек'] },
      { label: 'Осознания смысла, вдохновения', psychologists: ['Виктор Франкл', 'Карл Юнг', 'Эрик Берн'] },
      { label: 'Активного вовлечения и работы с телом/эмоциями', psychologists: ['Фриц Перлз', 'Милтон Эриксон', 'Ирвин Ялом'] }
    ]
  },
  {
    id: 6,
    text: 'Как относишься к провокации или конфронтации психолога?',
    options: [
      { label: 'Люблю мягкие вопросы, без давления', psychologists: ['Карл Роджерс', 'Ирвин Ялом', 'Карен Хорни'] },
      { label: 'Предпочитаю прямую работу с убеждениями', psychologists: ['Альберт Эллис', 'Аарон Бек', 'Эрик Берн'] },
      { label: 'Провокация через метафоры и истории', psychologists: ['Милтон Эриксон', 'Карл Юнг'] },
      { label: 'Прямое отражение эмоций, даже если это жёстко', psychologists: ['Фриц Перлз', 'Виктор Франкл'] }
    ]
  },
  {
    id: 7,
    text: 'Что для тебя показатель хорошего психолога?',
    options: [
      { label: 'Эмпатия и принятие', psychologists: ['Карл Роджерс', 'Ирвин Ялом', 'Карен Хорни'] },
      { label: 'Помощь в логическом анализе и мышлении', psychologists: ['Альберт Эллис', 'Аарон Бек', 'Эрик Берн'] },
      { label: 'Глубина и философский взгляд', psychologists: ['Виктор Франкл', 'Карл Юнг'] },
      { label: 'Прямое действие и вовлечённость', psychologists: ['Милтон Эриксон', 'Фриц Перлз'] }
    ]
  },
  {
    id: 8,
    text: 'Какую обратную связь ты предпочитаешь?',
    options: [
      { label: 'Эмпатичную и поддерживающую', psychologists: ['Карл Роджерс', 'Карен Хорни'] },
      { label: 'Конкретную, по сути', psychologists: ['Альберт Эллис', 'Аарон Бек', 'Эрик Берн'] },
      { label: 'Метафорическую, через истории', psychologists: ['Милтон Эриксон', 'Карл Юнг'] },
      { label: 'Прямую, но мягко корректирующую', psychologists: ['Фриц Перлз', 'Виктор Франкл', 'Ирвин Ялом'] }
    ]
  },
  {
    id: 9,
    text: 'Какой тип энергии психолога тебе ближе?',
    options: [
      { label: 'Спокойная, принимающая', psychologists: ['Карл Роджерс', 'Ирвин Ялом'] },
      { label: 'Активная, структурированная', psychologists: ['Альберт Эллис', 'Аарон Бек', 'Эрик Берн'] },
      { label: 'Творческая, вдохновляющая', psychologists: ['Милтон Эриксон', 'Карл Юнг'] },
      { label: 'Живая, энергичная, вовлекающая', psychologists: ['Фриц Перлз', 'Виктор Франкл', 'Карен Хорни'] }
    ]
  },
  {
    id: 10,
    text: 'Если бы психолог был героем фильма, кто бы это был?',
    options: [
      { label: 'Мудрый наставник, который слушает', psychologists: ['Карл Роджерс', 'Ирвин Ялом', 'Карен Хорни'] },
      { label: 'Тренер, который учит мыслить', psychologists: ['Альберт Эллис', 'Аарон Бек', 'Эрик Берн'] },
      { label: 'Философ, раскрывающий смысл жизни', psychologists: ['Виктор Франкл', 'Карл Юнг'] },
      { label: 'Рассказывающий истории и вовлекающий в действия', psychologists: ['Милтон Эриксон', 'Фриц Перлз'] }
    ]
  }
];

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

  const getCompatibilityLevel = (percentage: number) => {
    if (percentage >= 60) return { label: 'Максимальная совместимость', color: 'bg-green-500' };
    if (percentage >= 40) return { label: 'Хорошая совместимость', color: 'bg-yellow-500' };
    return { label: 'Низкая совместимость', color: 'bg-gray-400' };
  };

  const topMatches = getResults().filter(r => r.percentage >= 40);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <div className="container max-w-4xl py-12 px-4">
        {stage === 'intro' && (
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
              <Button size="lg" onClick={startTest} className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Начать тест
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {stage === 'test' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Вопрос {currentQuestion + 1} из {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round(((currentQuestion) / questions.length) * 100)}%
                </span>
              </div>
              <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl leading-relaxed">
                  {questions[currentQuestion].text}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {questions[currentQuestion].options.map((option, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="w-full text-left h-auto py-4 px-5 justify-start hover:bg-primary/10 hover:border-primary transition-all duration-200"
                    onClick={() => handleAnswer(option.psychologists)}
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
        )}

        {stage === 'results' && (
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
                          <Avatar className="w-20 h-20 border-2 border-primary/20">
                            <AvatarImage src={result.image} alt={result.name} />
                            <AvatarFallback>{result.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
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
                  {getResults().map((result) => (
                    <AccordionItem key={result.name} value={result.name}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center justify-between w-full pr-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={result.image} alt={result.name} />
                              <AvatarFallback>{result.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="font-semibold">{result.name}</span>
                            <Badge variant="outline">{result.approach}</Badge>
                          </div>
                          <span className="text-primary font-semibold">{result.percentage}%</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 space-y-3">
                          <div className="flex items-start gap-4">
                            <Avatar className="w-16 h-16 border-2 border-primary/10">
                              <AvatarImage src={result.image} alt={result.name} />
                              <AvatarFallback>{result.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
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
              <Button size="lg" onClick={restartTest} variant="outline">
                <Icon name="RotateCcw" size={20} className="mr-2" />
                Пройти заново
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;