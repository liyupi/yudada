interface QuestionOption<T extends string = string> {
  result: T;
  value: string;
  key: T;
}

interface Question<T extends string = string> {
  title: string;
  options: QuestionOption<T>[];
}
