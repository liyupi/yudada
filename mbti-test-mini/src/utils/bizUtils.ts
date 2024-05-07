/**
 * 获取最佳题目评分结果
 * @param answerList
 * @param questions
 * @param question_results
 */

export function getBestQuestionResult(answerList, questions, question_results) {
  // 初始化一个对象，用于存储每个选项的计数
  const optionCount = {};

  // 用户选择 A, B, C
  // 对应 result：I, I, J
  // optionCount[I] = 2; optionCount[J] = 1

  // 遍历题目列表
  for (const question of questions) {
    // 遍历答案列表
    for (const answer of answerList) {
      // 遍历题目中的选项
      for (const option of question.options) {
        // 如果答案和选项的key匹配
        if (option.key === answer) {
          // 获取选项的result属性
          const result = option.result;

          // 如果result属性不在optionCount中，初始化为0
          if (!optionCount[result]) {
            optionCount[result] = 0;
          }

          // 在optionCount中增加计数
          optionCount[result]++;
        }
      }
    }
  }

  // 初始化最高分数和最高分数对应的评分结果
  let maxScore = 0;
  let maxScoreResult = question_results[0];

  // 遍历评分结果列表
  for (const result of question_results) {
    // 计算当前评分结果的分数
    const score = result.resultProp.reduce((count, prop) => {
      return count + (optionCount[prop] || 0);
    }, 0);

    // 如果分数高于当前最高分数，更新最高分数和最高分数对应的评分结果
    if (score > maxScore) {
      maxScore = score;
      maxScoreResult = result;
    }
  }

  // 返回最高分数和最高分数对应的评分结果
  return maxScoreResult;
}

// 示例数据
const answerList = ["B","B","B","A"];
const questions = [
  {
    title: "你通常更喜欢",
    options: [
      {
        result: "I",
        value: "独自工作",
        key: "A",
      },
      {
        result: "E",
        value: "与他人合作",
        key: "B",
      },
    ],
  },
  {
    options: [
      {
        result: "S",
        value: "喜欢有结构和常规",
        key: "A",
      },
      {
        result: "N",
        value: "喜欢自由和灵活性",
        key: "B",
      },
    ],
    title: "对于日常安排",
  },
  {
    options: [
      {
        result: "P",
        value: "首先考虑可能性",
        key: "A",
      },
      {
        result: "J",
        value: "首先考虑后果",
        key: "B",
      },
    ],
    title: "当遇到问题时",
  },
  {
    options: [
      {
        result: "T",
        value: "时间是一种宝贵的资源",
        key: "A",
      },
      {
        result: "F",
        value: "时间是相对灵活的概念",
        key: "B",
      },
    ],
    title: "你如何看待时间",
  },
];
const question_results = [
  {
    resultProp: ["I", "S", "T", "J"],
    resultDesc: "忠诚可靠，被公认为务实，注重细节。",
    resultPicture: "icon_url_istj",
    resultName: "ISTJ（物流师）",
  },
  {
    resultProp: ["I", "S", "F", "J"],
    resultDesc: "善良贴心，以同情心和责任为特点。",
    resultPicture: "icon_url_isfj",
    resultName: "ISFJ（守护者）",
  },
];

console.log(getBestQuestionResult(answerList, questions, question_results));
