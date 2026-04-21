export type BookRecord = {
  id: number;
  name: string;
  publisher: string;
};

export type ClassBookGroup = {
  label: string;
  books: BookRecord[];
};

export const classBookGroups: ClassBookGroup[] = [
  {
    label: "Pre-Nursery",
    books: [
      { id: 1, name: "Alphabet", publisher: "Kids World" },
      { id: 2, name: "Aao Hindi Sikhe", publisher: "Kids World" },
      { id: 3, name: "Activity Book", publisher: "Kids World" },
      { id: 4, name: "Pihu Rhyme n Balgeet", publisher: "Kids World" },
      { id: 5, name: "Coloring Book", publisher: "Kids World" },
      { id: 6, name: "Numbers", publisher: "Kids World" },
      { id: 7, name: "Picture World", publisher: "Kids World" }
    ]
  },
  {
    label: "Nursery",
    books: [{ id: 1, name: "My Nursery Bag", publisher: "Vivid Pub." }]
  },
  {
    label: "KG-1",
    books: [{ id: 1, name: "My L-KG Bag", publisher: "Vivid Pub." }]
  },
  {
    label: "KG-2",
    books: [{ id: 1, name: "My UKG Bag", publisher: "Vivid Pub." }]
  },
  {
    label: "Class 1",
    books: [
      { id: 1, name: "Palash Hindi-I", publisher: "Vivid Pub." },
      { id: 2, name: "Snowflake English-I", publisher: "Vivid Pub." },
      { id: 3, name: "Enhancer Maths-I", publisher: "Vivid Pub." },
      {
        id: 4,
        name: "Ecology (Things Around Us) EVS-I",
        publisher: "Vivid Pub."
      },
      { id: 5, name: "Quiz Whiz GK-I", publisher: "Vivid Pub." },
      { id: 6, name: "It's Talk Time Conversation-I", publisher: "Ivana Pub." },
      { id: 7, name: "Cursive Writing-I", publisher: "Jpen Pub." },
      { id: 8, name: "Sketcho Drawing Book-I", publisher: "Jpen Pub." }
    ]
  },
  {
    label: "Class 2",
    books: [
      { id: 1, name: "Palash Hindi-II", publisher: "Vivid Pub." },
      { id: 2, name: "Snowflake English-II", publisher: "Vivid Pub." },
      { id: 3, name: "Enhancer Maths-II", publisher: "Vivid Pub." },
      {
        id: 4,
        name: "Ecology (Things Around Us) EVS-II",
        publisher: "Vivid Pub."
      },
      { id: 5, name: "Quiz Whiz GK-II", publisher: "Vivid Pub." },
      { id: 6, name: "It's Talk Time Conversation-II", publisher: "Ivana Pub." },
      { id: 7, name: "Cursive Writing-II", publisher: "Jpen Pub." },
      { id: 8, name: "Sketcho Drawing Book-II", publisher: "Jpen Pub." }
    ]
  },
  {
    label: "Class 3",
    books: [
      { id: 1, name: "Palash Hindi-III", publisher: "Vivid Pub." },
      { id: 2, name: "Snowflake English-III", publisher: "Vivid Pub." },
      { id: 3, name: "Enhancer Maths-III", publisher: "Vivid Pub." },
      {
        id: 4,
        name: "Ecology (Things Around Us) EVS-III",
        publisher: "Vivid Pub."
      },
      { id: 5, name: "Quiz Whiz GK-III", publisher: "Vivid Pub." },
      { id: 6, name: "It's Talk Time Conversation-III", publisher: "Ivana Pub." },
      { id: 7, name: "Cursive Writing-III", publisher: "Jpen Pub." },
      { id: 8, name: "Sketcho Drawing Book-III", publisher: "Jpen Pub." }
    ]
  },
  {
    label: "Class 4",
    books: [
      { id: 1, name: "Palash Hindi-IV", publisher: "Vivid Pub." },
      { id: 2, name: "Snowflake English-IV", publisher: "Vivid Pub." },
      { id: 3, name: "Enhancer Maths-IV", publisher: "Vivid Pub." },
      {
        id: 4,
        name: "Ecology (Things Around Us) EVS-IV",
        publisher: "Vivid Pub."
      },
      { id: 5, name: "Quiz Whiz GK-IV", publisher: "Vivid Pub." },
      { id: 6, name: "It's Talk Time Conversation-IV", publisher: "Ivana Pub." },
      { id: 7, name: "Cursive Writing-IV", publisher: "Jpen Pub." },
      { id: 8, name: "Sketcho Drawing Book-IV", publisher: "Jpen Pub." }
    ]
  },
  {
    label: "Class 5",
    books: [
      { id: 1, name: "Knowledge Waves-V", publisher: "Vivid Pub." },
      { id: 2, name: "Conversation Part-V", publisher: "Ivana Pub." },
      { id: 3, name: "Cursive Writing-V", publisher: "Jpen Pub." },
      { id: 4, name: "Drawing Book-V", publisher: "Jpen Pub." }
    ]
  },
  {
    label: "Class 6",
    books: [
      { id: 1, name: "Palash Hindi-VI", publisher: "Vivid Pub." },
      { id: 2, name: "Snowflake English-VI", publisher: "Vivid Pub." },
      { id: 3, name: "Enhancer Maths-VI", publisher: "Vivid Pub." },
      { id: 4, name: "Science-VI", publisher: "Vivid Pub." },
      { id: 5, name: "Social Studies-VI", publisher: "Vivid Pub." },
      { id: 6, name: "Knowledge Waves-VI", publisher: "Vivid Pub." },
      { id: 7, name: "Sanskrit-VI", publisher: "Jpen Pub." }
    ]
  },
  {
    label: "Class 7",
    books: [
      { id: 1, name: "Palash Hindi-VII", publisher: "Vivid Pub." },
      { id: 2, name: "Snowflake English-VII", publisher: "Vivid Pub." },
      { id: 3, name: "Enhancer Maths-VII", publisher: "Vivid Pub." },
      { id: 4, name: "Science-VII", publisher: "Vivid Pub." },
      { id: 5, name: "Social Studies-VII", publisher: "Vivid Pub." },
      { id: 6, name: "Knowledge Waves-VII", publisher: "Vivid Pub." },
      { id: 7, name: "Sanskrit-VII", publisher: "Jpen Pub." }
    ]
  },
  {
    label: "Class 8",
    books: [
      { id: 1, name: "Knowledge Waves-VIII", publisher: "Vivid Pub." },
      { id: 2, name: "English Grammar-VIII", publisher: "Vivid Pub." },
      { id: 3, name: "Hindi Vyakran-VIII", publisher: "Vivid Pub." }
    ]
  }
];
