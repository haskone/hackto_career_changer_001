export const initialNodes1 = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Software Development Engineer 1",
      content:
        ["Read this first", "https://maze.co/blog/ui-vs-ux"],
      done: true,
    },
    position: { x: 250, y: 1 },
    className: "light",
  },
  {
    id: "20",
    type: "checkboxNode",
    data: {
      label: "Design basics: Minimal Quiz",
      done: false,
      comments: [
        {
          authorUrl: '#',
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
          createdAt: new Date(),
          fullName: 'Lihuén Martin [Mentor]',
          text: 'Are these quizzes synced with the database?',
        },
        {
          authorUrl: '#',
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
          createdAt: new Date(),
          fullName: 'Dene Ketill [Mentor]',
          text: 'Also, we need to add preparation material here',
        },
      ]
    },
    position: { x: 270, y: 210 },
    className: "light",
  },
  {
    id: "2",
    data: {
      label: "Learn basics of frames and platform-specific styles",
      done: false,
      content:
        ["For ios", "https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/"],
    },
    position: { x: 550, y: 20 },
    className: "light",
  },
  {
    id: "3",
    data: {
      label: "Have a portfolio with 100+ works",
      done: false,
      comments: [
        {
          authorUrl: '#',
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
          createdAt: new Date(),
          fullName: 'Lihuén Martin [Mentor]',
          text: 'Which platform to use?',
        },
      ]
    },
    position: { x: 550, y: 210 },
    className: "light",
  },
  {
    id: "4",
    data: {
      label: "Design review process in the company",
      done: false,
      comments: [
        {
          authorUrl: '#',
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922561.png',
          createdAt: new Date(),
          fullName: 'Alexandra Shahrzad [Mentor]',
          text: 'Lol, didnt know we have any',
        }
      ]
    },
    position: { x: 650, y: 310 },
    className: "light",
  },
  {
    id: "41",
    data: {
      label: "Intership at 123 department",
      done: false,
      content:
        ["Link to a special weekend-crash-course", "https://very.internal.link"],
    },
    position: { x: 550, y: 410 },
    className: "light",
  },
  {
    id: "42",
    data: {
      label: "Crash-course in Beb's lab in Montreal",
      done: false,
      content:
        ["Annother link to a special weekend-crash-course", "https://very.internal.link"],
    },
    position: { x: 750, y: 510 },
    className: "light",
  },
  {
    id: "50",
    type: "checkboxNode",
    data: {
      label: "UX/UI: Final Coding Quiz",
      done: false,
      comments: [
        {
          authorUrl: '#',
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922561.png',
          createdAt: new Date(),
          fullName: 'Alexandra Shahrzad [Mentor]',
          text: 'This one can be retaken a few times maybe? Looks really hard',
        }
      ]
    },
    position: { x: 200, y: 600 },
    className: "light",
  },
  {
    id: "5",
    data: { label: "UX/UI Developer", done: false },
    position: { x: 400, y: 800 },
    className: "light",
  },
];

export const initialEdges1 = [
  {
    id: "e1-20",
    source: "1",
    target: "20",
    animated: true,
    label: "Very first quiz",
  },
  {
    id: "e20-1",
    source: "20",
    target: "2",
    animated: true,
    label: "Especially critical for ios",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    label: "Most of developers dont focus on it, but for us it's crucial",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    label: "Most newbies are scared",
  },
  {
    id: "e4-41",
    source: "4",
    target: "41",
    animated: true,
    label: "This is the most obvious path",
  },
  {
    id: "e4-42",
    source: "4",
    target: "42",
    animated: true,
    label: "Much harder, but much faster",
  },
  {
    id: "e41-50",
    source: "41",
    target: "50",
    animated: true,
    label: "So you can start right away",
  },
  {
    id: "e42-50",
    source: "42",
    target: "50",
    animated: false,
    label: "TODO: add a node to explain some internal policies",
  },
  {
    id: "e50-5",
    source: "50",
    target: "5",
    animated: false,
    label: "By someone from dev department, contact in the chat",
  },
];

export const initialNodes2 = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Software Dev",
      content:
        ["Read this first", "https://www.coursera.org/articles/software-developer"],
      done: true,
    },
    position: { x: 250, y: 1 },
    className: "light",
  },
  {
    id: "20",
    type: "checkboxNode",
    data: {
      label: "Management Theory: Minimal Quiz",
      done: true,
      comments: [
        {
          authorUrl: '#',
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
          createdAt: new Date(),
          fullName: 'Dene Ketill [Mentor]',
          text: 'Need to add more information here',
        },
        {
          authorUrl: '#',
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/2922/2922561.png',
          createdAt: new Date(),
          fullName: 'Alexandra Shahrzad [Mentor]',
          text: 'Yeah, that links that I sent you in slack last week',
        }
      ]
    },
    position: { x: 270, y: 160 },
    className: "light",
  },
  {
    id: "2",
    data: { label: "Community relationships workshop", done: false },
    position: { x: 550, y: 300 },
    className: "light",
  },
  {
    id: "3",
    data: { label: "Metrics and analyticsL how to inner guide", done: false },
    position: { x: 350, y: 400 },
    className: "light",
  },
  {
    id: "4",
    data: { label: "Maturity, and good judgment? It's a skill too", done: false },
    position: { x: 550, y: 500 },
    className: "light",
  },
  {
    id: "5",
    type: "checkboxNode",
    data: { label: "Mid interview, need to show progress or go to the prev step", done: false },
    position: { x: 350, y: 600 },
    className: "light",
  },
  {
    id: "6",
    data: { label: "Fast-paced environment weekend: extremely pressured", done: false },
    position: { x: 350, y: 700 },
    className: "light",
  },
  {
    id: "7",
    type: "checkboxNode",
    data: { label: "Final quiz", done: false },
    position: { x: 550, y: 800 },
    className: "light",
  },
  {
    id: "8",
    data: { label: "Project Manager Intern", done: false },
    position: { x: 250, y: 900 },
    className: "light",
  },
];

export const initialEdges2 = [
  {
    id: "e1-20",
    source: "1",
    target: "20",
    animated: true,
    label: "Very first quiz",
  },
  {
    id: "e20-1",
    source: "20",
    target: "2",
    animated: true,
    label: "See more people like you, also",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    label: "",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    label: "",
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    label: "",
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
    label: "",
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    animated: true,
    label: "",
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
    animated: true,
    label: "",
  },
];