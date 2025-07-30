import CalculateIcon from "@mui/icons-material/Calculate";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ScienceIcon from "@mui/icons-material/Science";
import PaletteIcon from "@mui/icons-material/Palette";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MemoryIcon from "@mui/icons-material/Memory";

import BarChartIcon from "@mui/icons-material/BarChart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FunctionsIcon from "@mui/icons-material/Functions";
import PublicIcon from "@mui/icons-material/Public";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PsychologyIcon from "@mui/icons-material/Psychology";
export const quizCategories = [
  {
    id: 1,
    name: "Math",
    quizzes: 21,
    icon: CalculateIcon,
  },
  {
    id: 2,
    name: "Sports",
    quizzes: 18,
    icon: SportsSoccerIcon,
  },
  {
    id: 3,
    name: "Music",
    quizzes: 15,
    icon: MusicNoteIcon,
  },
  {
    id: 4,
    name: "Science",
    quizzes: 12,
    icon: ScienceIcon,
  },
  {
    id: 5,
    name: "Art",
    quizzes: 18,
    icon: PaletteIcon,
  },
  {
    id: 6,
    name: "Travel",
    quizzes: 14,
    icon: TravelExploreIcon,
  },
  {
    id: 7,
    name: "History",
    quizzes: 7,
    icon: HistoryEduIcon,
  },
  {
    id: 8,
    name: "Tech",
    quizzes: 8,
    icon: MemoryIcon,
  },
];

export const quizList = [
  {
    id: 1,
    title: "Olympic Games History",
    category: "Sport",
    quizzesCount: 12,
    icon: SportsSoccerIcon,
    description:
      "Explore the fascinating history and memorable moments of the Olympic Games.",
    questions: [
      {
        id: 1,
        question: "When were the first modern Olympic Games held?",
        description:
          "Learn about the origin and timeline of the Olympic Games.",
      },
      {
        id: 2,
        question: "Which city has hosted the Olympics the most times?",
        description: "Test your knowledge about Olympic host cities.",
      },
    ],
  },
  {
    id: 2,
    title: "Classic Novels",
    category: "Literature",
    quizzesCount: 15,
    icon: BarChartIcon,
    description:
      "Test your knowledge on world-famous classic novels and their authors.",
    questions: [
      {
        id: 1,
        question: "Who wrote 'Crime and Punishment'?",
        description: "Explore famous classic authors and their works.",
      },
      {
        id: 2,
        question: "In which novel does 'Jay Gatsby' appear?",
        description: "Identify characters and the novels they belong to.",
      },
    ],
  },
  {
    id: 3,
    title: "Tech Innovations",
    category: "Techno",
    quizzesCount: 12,
    icon: MemoryIcon,
    description:
      "Dive into the biggest tech breakthroughs and modern innovations.",
    questions: [
      {
        id: 1,
        question: "Who invented the World Wide Web?",
        description: "Discover key figures in technology development.",
      },
      {
        id: 2,
        question: "What is Moore's Law?",
        description: "Understand growth trends in computer hardware.",
      },
    ],
  },
  {
    id: 4,
    title: "Biology Brain Teasers",
    category: "Science",
    quizzesCount: 12,
    icon: PsychologyIcon,
    description:
      "Challenge your understanding of biological systems and concepts.",
    questions: [
      {
        id: 1,
        question: "What part of the cell is known as the powerhouse?",
        description: "Test your cell biology knowledge.",
      },
      {
        id: 2,
        question: "Which system controls body hormones?",
        description: "Explore human systems and their roles.",
      },
    ],
  },
  {
    id: 5,
    title: "Ancient Civilizations",
    category: "History",
    quizzesCount: 12,
    icon: HistoryEduIcon,
    description:
      "Discover the cultures, inventions, and leaders of ancient civilizations.",
    questions: [
      {
        id: 1,
        question: "Which river was central to Ancient Egyptian civilization?",
        description: "Identify geography's role in early civilizations.",
      },
      {
        id: 2,
        question: "Who was the ruler of the Maurya Empire during its peak?",
        description: "Learn about influential ancient rulers.",
      },
    ],
  },
  {
    id: 6,
    title: "Statistics Math Quiz",
    category: "Math",
    quizzesCount: 12,
    icon: QueryStatsIcon,
    description:
      "Solve real-world problems with statistics, probability, and data analysis.",
    questions: [
      {
        id: 1,
        question: "What is the mean of the numbers: 2, 4, 6, 8?",
        description: "Practice calculating averages in data sets.",
      },
      {
        id: 2,
        question: "What does the standard deviation represent?",
        description: "Understand spread and variability in data.",
      },
    ],
  },
  {
    id: 7,
    title: "Football Team Quiz",
    category: "Sport",
    quizzesCount: 12,
    icon: SportsSoccerIcon,
    description:
      "Show off your football team knowledge from leagues around the world.",
    questions: [
      {
        id: 1,
        question: "Which team has won the most UEFA Champions League titles?",
        description: "Test your knowledge of European football.",
      },
      {
        id: 2,
        question: "Who is the all-time top scorer for FC Barcelona?",
        description: "Identify legendary players and their stats.",
      },
    ],
  },
  {
    id: 8,
    title: "Biology Basics",
    category: "Science",
    quizzesCount: 12,
    icon: ScienceIcon,
    description:
      "Understand the core principles of life, cells, and organisms.",
    questions: [
      {
        id: 1,
        question: "What is the basic unit of life?",
        description: "Reinforce foundational biology concepts.",
      },
      {
        id: 2,
        question: "What is the function of DNA?",
        description: "Explore genetic material and its purpose.",
      },
    ],
  },
  {
    id: 9,
    title: "Galaxies and Nebulas",
    category: "Science",
    quizzesCount: 12,
    icon: FunctionsIcon,
    description:
      "Explore the wonders of galaxies, stars, and cosmic phenomena.",
    questions: [
      {
        id: 1,
        question: "What galaxy is Earth located in?",
        description: "Discover our position in the universe.",
      },
      {
        id: 2,
        question: "What are nebulas made of?",
        description: "Understand the birthplaces of stars.",
      },
    ],
  },
  {
    id: 10,
    title: "Evolution Exploration",
    category: "Science",
    quizzesCount: 12,
    icon: PublicIcon,
    description:
      "Trace the journey of evolution from single cells to complex species.",
    questions: [
      {
        id: 1,
        question: "Who proposed the theory of natural selection?",
        description: "Explore key concepts of evolutionary biology.",
      },
      {
        id: 2,
        question: "What is a common ancestor?",
        description: "Learn about species connections through evolution.",
      },
    ],
  },
  {
    id: 11,
    title: "Chemical Reactions",
    category: "Science",
    quizzesCount: 12,
    icon: ScienceIcon,
    description:
      "Understand how elements combine and react in chemical processes.",
    questions: [
      {
        id: 1,
        question: "What is the product of HCl and NaOH reaction?",
        description: "Examine acid-base chemical reactions.",
      },
      {
        id: 2,
        question: "What is a catalyst?",
        description: "Understand how reactions speed up or slow down.",
      },
    ],
  },
  {
    id: 12,
    title: "Football Team Quiz",
    category: "Sport",
    quizzesCount: 12,
    icon: AutoStoriesIcon,
    description:
      "Test yourself on football players, team history, and championships.",
    questions: [
      {
        id: 1,
        question: "Which country won the 2018 FIFA World Cup?",
        description: "Recall recent international football events.",
      },
      {
        id: 2,
        question: "Who is the all-time leading scorer in World Cup history?",
        description: "Test your knowledge of football legends.",
      },
    ],
  },
];

export const PerformanceData = [
  { id: 0, value: 70, label: "Music", color: "#6C4CF1" },
  { id: 1, value: 17, label: "Sports", color: "#FF8CA3" },
  { id: 2, value: 13, label: "Math", color: "#CBDCFF" },
];
