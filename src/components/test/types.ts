export interface Psychologist {
  name: string;
  description: string;
  approach: string;
  link: string;
  image: string;
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    psychologists: string[];
  }[];
}

export interface PsychologistResult extends Psychologist {
  score: number;
  percentage: number;
}
