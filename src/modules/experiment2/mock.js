export const mock = [
  {
    params: {
      trialNumber: 0,
      setSize: 6,
      trialType: 'ipipip',
      presentation: [
        {
          cellId: 17,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 27,
          cellType: 'FILLED',
        },
        {
          cellId: 28,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 9,
          cellType: 'FILLED',
        },
        {
          cellId: 29,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 6,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        8: {
          cellId: 8,
          cellType: 'INQUIRY',
        },
        9: {
          cellId: 9,
          cellType: 'FILLED',
        },
        17: {
          cellId: 17,
          cellType: 'FILLED',
        },
        27: {
          cellId: 27,
          cellType: 'FILLED',
        },
        28: {
          cellId: 28,
          cellType: 'FILLED',
        },
        29: {
          cellId: 29,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 1,
        j: 2,
      },
      inquiryCellType: 'P',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'LEFT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 2591,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: true,
    },
  },
  {
    params: {
      trialNumber: 0,
      setSize: 6,
      trialType: 'ipipip',
      presentation: [
        {
          cellId: 17,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 27,
          cellType: 'FILLED',
        },
        {
          cellId: 28,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 9,
          cellType: 'FILLED',
        },
        {
          cellId: 29,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 6,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        8: {
          cellId: 8,
          cellType: 'INQUIRY',
        },
        9: {
          cellId: 9,
          cellType: 'FILLED',
        },
        17: {
          cellId: 17,
          cellType: 'FILLED',
        },
        27: {
          cellId: 27,
          cellType: 'FILLED',
        },
        28: {
          cellId: 28,
          cellType: 'FILLED',
        },
        29: {
          cellId: 29,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 1,
        j: 2,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'LEFT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 2591,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: false,
    },
  },
]

export const mockPerceptual = [
  {
    trialNumber: 1,
    params: {
      setSize: 6,
      presentation: [
        {
          cellId: 18,
          cellType: 'FILLED',
        },
        {
          cellId: 30,
          cellType: 'FILLED',
        },
        {
          cellId: 13,
          cellType: 'FILLED',
        },
        {
          cellId: 14,
          cellType: 'FILLED',
        },
        {
          cellId: 16,
          cellType: 'FILLED',
        },
        {
          cellId: 23,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        18: {
          cellType: 'FILLED',
        },
        23: {
          cellType: 'FILLED',
        },
        32: {
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 5,
        j: 2,
      },
      recallType: 'DIFFERENT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      recognitionConfiguration: 'PARTIAL',
      isLeft: true,
      gridLocation: 'LEFT',
    },
    results: {
      responseTime: 1649,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 2,
    params: {
      setSize: 6,
      presentation: [
        {
          cellId: 15,
          cellType: 'FILLED',
        },
        {
          cellId: 29,
          cellType: 'FILLED',
        },
        {
          cellId: 27,
          cellType: 'FILLED',
        },
        {
          cellId: 23,
          cellType: 'FILLED',
        },
        {
          cellId: 11,
          cellType: 'FILLED',
        },
        {
          cellId: 24,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        3: {
          cellType: 'INQUIRY',
        },
        11: {
          cellType: 'FILLED',
        },
        23: {
          cellType: 'FILLED',
        },
        24: {
          cellType: 'FILLED',
        },
        27: {
          cellType: 'FILLED',
        },
        29: {
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 0,
        j: 3,
      },
      recallType: 'DIFFERENT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      recognitionConfiguration: 'WHOLE',
      isLeft: false,
      gridLocation: 'RIGHT',
    },
    results: {
      responseTime: 1448,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 3,
    params: {
      setSize: 6,
      presentation: [
        {
          cellId: 2,
          cellType: 'FILLED',
        },
        {
          cellId: 29,
          cellType: 'FILLED',
        },
        {
          cellId: 18,
          cellType: 'FILLED',
        },
        {
          cellId: 16,
          cellType: 'FILLED',
        },
        {
          cellId: 22,
          cellType: 'FILLED',
        },
        {
          cellId: 34,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        2: {
          cellType: 'FILLED',
        },
        16: {
          cellType: 'FILLED',
        },
        18: {
          cellType: 'FILLED',
        },
        22: {
          cellType: 'FILLED',
        },
        29: {
          cellType: 'FILLED',
        },
        32: {
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 5,
        j: 2,
      },
      recallType: 'DIFFERENT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      recognitionConfiguration: 'WHOLE',
      isLeft: true,
      gridLocation: 'LEFT',
    },
    results: {
      responseTime: 1178,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 4,
    params: {
      setSize: 6,
      presentation: [
        {
          cellId: 8,
          cellType: 'FILLED',
        },
        {
          cellId: 22,
          cellType: 'FILLED',
        },
        {
          cellId: 12,
          cellType: 'FILLED',
        },
        {
          cellId: 21,
          cellType: 'FILLED',
        },
        {
          cellId: 2,
          cellType: 'FILLED',
        },
        {
          cellId: 5,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        2: {
          cellType: 'INQUIRY',
        },
        8: {
          cellType: 'FILLED',
        },
        21: {
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 0,
        j: 2,
      },
      recallType: 'SAME',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      recognitionConfiguration: 'PARTIAL',
      isLeft: false,
      gridLocation: 'RIGHT',
    },
    results: {
      responseTime: 1311,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 5,
    params: {
      setSize: 6,
      presentation: [
        {
          cellId: 33,
          cellType: 'FILLED',
        },
        {
          cellId: 23,
          cellType: 'FILLED',
        },
        {
          cellId: 26,
          cellType: 'FILLED',
        },
        {
          cellId: 13,
          cellType: 'FILLED',
        },
        {
          cellId: 10,
          cellType: 'FILLED',
        },
        {
          cellId: 17,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        13: {
          cellType: 'FILLED',
        },
        17: {
          cellType: 'FILLED',
        },
        23: {
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 3,
        j: 5,
      },
      recallType: 'SAME',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      recognitionConfiguration: 'PARTIAL',
      isLeft: false,
      gridLocation: 'RIGHT',
    },
    results: {
      responseTime: 1006,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 6,
    params: {
      setSize: 6,
      presentation: [
        {
          cellId: 22,
          cellType: 'FILLED',
        },
        {
          cellId: 34,
          cellType: 'FILLED',
        },
        {
          cellId: 3,
          cellType: 'FILLED',
        },
        {
          cellId: 21,
          cellType: 'FILLED',
        },
        {
          cellId: 14,
          cellType: 'FILLED',
        },
        {
          cellId: 11,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        9: {
          cellType: 'INQUIRY',
        },
        14: {
          cellType: 'FILLED',
        },
        34: {
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 1,
        j: 3,
      },
      recallType: 'DIFFERENT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      recognitionConfiguration: 'PARTIAL',
      isLeft: true,
      gridLocation: 'LEFT',
    },
    results: {
      responseTime: 407,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 7,
    params: {
      setSize: 6,
      presentation: [
        {
          cellId: 22,
          cellType: 'FILLED',
        },
        {
          cellId: 26,
          cellType: 'FILLED',
        },
        {
          cellId: 25,
          cellType: 'FILLED',
        },
        {
          cellId: 28,
          cellType: 'FILLED',
        },
        {
          cellId: 14,
          cellType: 'FILLED',
        },
        {
          cellId: 1,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        1: {
          cellType: 'FILLED',
        },
        14: {
          cellType: 'FILLED',
        },
        22: {
          cellType: 'FILLED',
        },
        25: {
          cellType: 'FILLED',
        },
        26: {
          cellType: 'INQUIRY',
        },
        28: {
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 4,
        j: 2,
      },
      recallType: 'SAME',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      recognitionConfiguration: 'WHOLE',
      isLeft: true,
      gridLocation: 'LEFT',
    },
    results: {
      responseTime: 574,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 8,
    params: {
      setSize: 6,
      presentation: [
        {
          cellId: 7,
          cellType: 'FILLED',
        },
        {
          cellId: 30,
          cellType: 'FILLED',
        },
        {
          cellId: 1,
          cellType: 'FILLED',
        },
        {
          cellId: 24,
          cellType: 'FILLED',
        },
        {
          cellId: 18,
          cellType: 'FILLED',
        },
        {
          cellId: 26,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        1: {
          cellType: 'FILLED',
        },
        7: {
          cellType: 'FILLED',
        },
        18: {
          cellType: 'INQUIRY',
        },
        24: {
          cellType: 'FILLED',
        },
        26: {
          cellType: 'FILLED',
        },
        30: {
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 3,
        j: 0,
      },
      recallType: 'SAME',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      recognitionConfiguration: 'WHOLE',
      isLeft: false,
      gridLocation: 'RIGHT',
    },
    results: {
      responseTime: 698,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: true,
    },
  },
]

export const mockMixed = [
  {
    trialNumber: 1,
    params: {
      setSize: 6,
      trialType: 'iiippp',
      presentation: [
        {
          cellId: 5,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 22,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 4,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 31,
          cellType: 'FILLED',
        },
        {
          cellId: 2,
          cellType: 'FILLED',
        },
        {
          cellId: 28,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        2: {
          cellId: 2,
          cellType: 'FILLED',
        },
        4: {
          cellId: 4,
          cellType: 'FILLED',
        },
        5: {
          cellId: 5,
          cellType: 'FILLED',
        },
        19: {
          cellId: 19,
          cellType: 'INQUIRY',
        },
        22: {
          cellId: 22,
          cellType: 'FILLED',
        },
        28: {
          cellId: 28,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 3,
        j: 1,
      },
      inquiryCellType: 'P',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'LEFT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 389,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 2,
    params: {
      setSize: 6,
      trialType: 'pipipi',
      presentation: [
        {
          cellId: 26,
          cellType: 'FILLED',
        },
        {
          cellId: 14,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 8,
          cellType: 'FILLED',
        },
        {
          cellId: 15,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 18,
          cellType: 'FILLED',
        },
        {
          cellId: 27,
          cellType: 'IMAGINARY',
        },
      ],
      recognition: {
        14: {
          cellId: 14,
          cellType: 'FILLED',
        },
        15: {
          cellId: 15,
          cellType: 'FILLED',
        },
        27: {
          cellId: 27,
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 4,
        j: 3,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'PARTIAL',
      gridLocation: 'LEFT',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'SAME',
    },
    results: {
      responseTime: 463,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 3,
    params: {
      setSize: 6,
      trialType: 'ipipip',
      presentation: [
        {
          cellId: 27,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 6,
          cellType: 'FILLED',
        },
        {
          cellId: 3,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 33,
          cellType: 'FILLED',
        },
        {
          cellId: 17,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 20,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        3: {
          cellId: 3,
          cellType: 'INQUIRY',
        },
        6: {
          cellId: 6,
          cellType: 'FILLED',
        },
        17: {
          cellId: 17,
          cellType: 'FILLED',
        },
        20: {
          cellId: 20,
          cellType: 'FILLED',
        },
        27: {
          cellId: 27,
          cellType: 'FILLED',
        },
        33: {
          cellId: 33,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 0,
        j: 3,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'LEFT',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'SAME',
    },
    results: {
      responseTime: 345,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 4,
    params: {
      setSize: 4,
      trialType: 'pipi',
      presentation: [
        {
          cellId: 2,
          cellType: 'FILLED',
        },
        {
          cellId: 19,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 0,
          cellType: 'FILLED',
        },
        {
          cellId: 4,
          cellType: 'IMAGINARY',
        },
      ],
      recognition: {
        16: {
          cellId: 16,
          cellType: 'INQUIRY',
        },
        19: {
          cellId: 19,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 2,
        j: 4,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'PARTIAL',
      gridLocation: 'RIGHT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: false,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 191,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 5,
    params: {
      setSize: 6,
      trialType: 'pipipi',
      presentation: [
        {
          cellId: 10,
          cellType: 'FILLED',
        },
        {
          cellId: 31,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 19,
          cellType: 'FILLED',
        },
        {
          cellId: 8,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 15,
          cellType: 'FILLED',
        },
        {
          cellId: 28,
          cellType: 'IMAGINARY',
        },
      ],
      recognition: {
        7: {
          cellId: 7,
          cellType: 'INQUIRY',
        },
        15: {
          cellId: 15,
          cellType: 'FILLED',
        },
        28: {
          cellId: 28,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 1,
        j: 1,
      },
      inquiryCellType: 'P',
      recognitionConfiguration: 'PARTIAL',
      gridLocation: 'RIGHT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: false,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 1651,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 6,
    params: {
      setSize: 4,
      trialType: 'pipi',
      presentation: [
        {
          cellId: 34,
          cellType: 'FILLED',
        },
        {
          cellId: 20,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 13,
          cellType: 'FILLED',
        },
        {
          cellId: 12,
          cellType: 'IMAGINARY',
        },
      ],
      recognition: {
        8: {
          cellId: 8,
          cellType: 'INQUIRY',
        },
        12: {
          cellId: 12,
          cellType: 'FILLED',
        },
        13: {
          cellId: 13,
          cellType: 'FILLED',
        },
        34: {
          cellId: 34,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 1,
        j: 2,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'LEFT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 1351,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 7,
    params: {
      setSize: 4,
      trialType: 'ppii',
      presentation: [
        {
          cellId: 20,
          cellType: 'FILLED',
        },
        {
          cellId: 21,
          cellType: 'FILLED',
        },
        {
          cellId: 11,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 24,
          cellType: 'IMAGINARY',
        },
      ],
      recognition: {
        11: {
          cellId: 11,
          cellType: 'FILLED',
        },
        20: {
          cellId: 20,
          cellType: 'FILLED',
        },
        21: {
          cellId: 21,
          cellType: 'INQUIRY',
        },
        24: {
          cellId: 24,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 3,
        j: 3,
      },
      inquiryCellType: 'P',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'RIGHT',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      isLeft: false,
      recallType: 'SAME',
    },
    results: {
      responseTime: 1556,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 8,
    params: {
      setSize: 4,
      trialType: 'ppii',
      presentation: [
        {
          cellId: 6,
          cellType: 'FILLED',
        },
        {
          cellId: 35,
          cellType: 'FILLED',
        },
        {
          cellId: 25,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 19,
          cellType: 'IMAGINARY',
        },
      ],
      recognition: {
        19: {
          cellId: 19,
          cellType: 'FILLED',
        },
        25: {
          cellId: 25,
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 4,
        j: 1,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'PARTIAL',
      gridLocation: 'LEFT',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'SAME',
    },
    results: {
      responseTime: 3000,
      userAnswer: 'NO_ANSWER',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 9,
    params: {
      setSize: 6,
      trialType: 'pppiii',
      presentation: [
        {
          cellId: 32,
          cellType: 'FILLED',
        },
        {
          cellId: 18,
          cellType: 'FILLED',
        },
        {
          cellId: 13,
          cellType: 'FILLED',
        },
        {
          cellId: 11,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 27,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 14,
          cellType: 'IMAGINARY',
        },
      ],
      recognition: {
        11: {
          cellId: 11,
          cellType: 'FILLED',
        },
        13: {
          cellId: 13,
          cellType: 'FILLED',
        },
        14: {
          cellId: 14,
          cellType: 'FILLED',
        },
        20: {
          cellId: 20,
          cellType: 'INQUIRY',
        },
        27: {
          cellId: 27,
          cellType: 'FILLED',
        },
        32: {
          cellId: 32,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 3,
        j: 2,
      },
      inquiryCellType: 'P',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'RIGHT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: false,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 560,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 10,
    params: {
      setSize: 4,
      trialType: 'iipp',
      presentation: [
        {
          cellId: 11,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 12,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 28,
          cellType: 'FILLED',
        },
        {
          cellId: 34,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        11: {
          cellId: 11,
          cellType: 'FILLED',
        },
        12: {
          cellId: 12,
          cellType: 'FILLED',
        },
        28: {
          cellId: 28,
          cellType: 'FILLED',
        },
        32: {
          cellId: 32,
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 5,
        j: 2,
      },
      inquiryCellType: 'P',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'RIGHT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: false,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 389,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 11,
    params: {
      setSize: 6,
      trialType: 'iiippp',
      presentation: [
        {
          cellId: 29,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 23,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 5,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 6,
          cellType: 'FILLED',
        },
        {
          cellId: 33,
          cellType: 'FILLED',
        },
        {
          cellId: 24,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        5: {
          cellId: 5,
          cellType: 'FILLED',
        },
        6: {
          cellId: 6,
          cellType: 'FILLED',
        },
        24: {
          cellId: 24,
          cellType: 'FILLED',
        },
        29: {
          cellId: 29,
          cellType: 'FILLED',
        },
        33: {
          cellId: 33,
          cellType: 'FILLED',
        },
        35: {
          cellId: 35,
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 5,
        j: 5,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'LEFT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 1074,
      userAnswer: 'ArrowLeft',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 12,
    params: {
      setSize: 4,
      trialType: 'iipp',
      presentation: [
        {
          cellId: 9,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 26,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 14,
          cellType: 'FILLED',
        },
        {
          cellId: 23,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        14: {
          cellId: 14,
          cellType: 'INQUIRY',
        },
        23: {
          cellId: 23,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 2,
        j: 2,
      },
      inquiryCellType: 'P',
      recognitionConfiguration: 'PARTIAL',
      gridLocation: 'LEFT',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'SAME',
    },
    results: {
      responseTime: 3000,
      userAnswer: 'NO_ANSWER',
      isAnswerCorrect: false,
    },
  },
  {
    trialNumber: 13,
    params: {
      setSize: 6,
      trialType: 'pppiii',
      presentation: [
        {
          cellId: 4,
          cellType: 'FILLED',
        },
        {
          cellId: 20,
          cellType: 'FILLED',
        },
        {
          cellId: 9,
          cellType: 'FILLED',
        },
        {
          cellId: 32,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 17,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 7,
          cellType: 'IMAGINARY',
        },
      ],
      recognition: {
        9: {
          cellId: 9,
          cellType: 'FILLED',
        },
        17: {
          cellId: 17,
          cellType: 'INQUIRY',
        },
        20: {
          cellId: 20,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 2,
        j: 5,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'PARTIAL',
      gridLocation: 'LEFT',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'SAME',
    },
    results: {
      responseTime: 346,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 14,
    params: {
      setSize: 4,
      trialType: 'ipip',
      presentation: [
        {
          cellId: 21,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 19,
          cellType: 'FILLED',
        },
        {
          cellId: 23,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 20,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        21: {
          cellId: 21,
          cellType: 'FILLED',
        },
        23: {
          cellId: 23,
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 3,
        j: 5,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'PARTIAL',
      gridLocation: 'RIGHT',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      isLeft: false,
      recallType: 'SAME',
    },
    results: {
      responseTime: 656,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 15,
    params: {
      setSize: 4,
      trialType: 'ipip',
      presentation: [
        {
          cellId: 13,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 17,
          cellType: 'FILLED',
        },
        {
          cellId: 15,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 22,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        13: {
          cellId: 13,
          cellType: 'INQUIRY',
        },
        15: {
          cellId: 15,
          cellType: 'FILLED',
        },
        17: {
          cellId: 17,
          cellType: 'FILLED',
        },
        22: {
          cellId: 22,
          cellType: 'FILLED',
        },
      },
      inquiryCell: {
        i: 2,
        j: 1,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'WHOLE',
      gridLocation: 'LEFT',
      isInquiryCorrect: true,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'SAME',
    },
    results: {
      responseTime: 445,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: true,
    },
  },
  {
    trialNumber: 16,
    params: {
      setSize: 6,
      trialType: 'ipipip',
      presentation: [
        {
          cellId: 22,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 12,
          cellType: 'FILLED',
        },
        {
          cellId: 20,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 5,
          cellType: 'FILLED',
        },
        {
          cellId: 19,
          cellType: 'IMAGINARY',
        },
        {
          cellId: 0,
          cellType: 'FILLED',
        },
      ],
      recognition: {
        0: {
          cellId: 0,
          cellType: 'FILLED',
        },
        5: {
          cellId: 5,
          cellType: 'FILLED',
        },
        18: {
          cellId: 18,
          cellType: 'INQUIRY',
        },
      },
      inquiryCell: {
        i: 3,
        j: 0,
      },
      inquiryCellType: 'I',
      recognitionConfiguration: 'PARTIAL',
      gridLocation: 'LEFT',
      isInquiryCorrect: false,
      recognitionType: 'ONE_SHOT',
      isLeft: true,
      recallType: 'DIFFERENT',
    },
    results: {
      responseTime: 1267,
      userAnswer: 'ArrowRight',
      isAnswerCorrect: false,
    },
  },
]
