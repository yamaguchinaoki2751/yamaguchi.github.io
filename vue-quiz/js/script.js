const vm = new Vue({
  el: "#app",
  data: {
    questions: [
      {
        question: "マスクメロンの「マスク」とはどんな意味？",
        selections: [
          {
            choice: "偽物",
            correct: false,
          },
          {
            choice: "仮面",
            correct: false,
          },
          {
            choice: "香り",
            correct: true,
          },
        ],
      },
      {
        question: "オセロの発祥地は？",
        selections: [
          {
            choice: "アメリカ",
            correct: false,
          },
          {
            choice: "ギリシャ",
            correct: false,
          },
          {
            choice: "日本",
            correct: true,
          },
        ],
      },
      {
        question: "十二支が、数を12と決められるもととなったのは？",
        selections: [
          {
            choice: "木星の動き",
            correct: true,
          },
          {
            choice: "半日が12時間であること",
            correct: false,
          },
          {
            choice: "縁起が良いとされる数字の組み合わせ",
            correct: false,
          },
        ],
      },
      {
        question: "湯たんぽの表面が波打っている理由は？",
        selections: [
          {
            choice: "器具が壊れるのを防止するため",
            correct: true,
          },
          {
            choice: "火傷防止のため",
            correct: false,
          },
          {
            choice: "肌触りをよくするため",
            correct: false,
          },
        ],
      },
      {
        question: "焼き鳥の砂肝は、どの部分？",
        selections: [
          {
            choice: "肝臓",
            correct: false,
          },
          {
            choice: "胃",
            correct: true,
          },
          {
            choice: "すい臓",
            correct: false,
          },
        ],
      },
    ],
    answerExistList: [],
    count: 0,
  },
  computed: {
    fullScore: function () {
      return this.questions.length * 20;
    },
  },
  methods: {
    getJudgeText(questionIndex) {
      const question = this.questions[questionIndex];
      const answerExist = this.answerExistList[questionIndex];
      const selection = question.selections[answerExist];
      return selection.correct ? "正解" : "不正解";
    },
    clickSelection(questionIndex, selectIndex) {
      if (this.answerExistList[questionIndex]) {
        return;
      }
      const clickedQuestion = this.questions[questionIndex]; //クリックした質問
      const clickedSelection = clickedQuestion.selections[selectIndex]; //クリックした選択肢
      const getClickedCorrect = clickedSelection.correct; //クリックした選択肢の解答
      this.$set(this.answerExistList, questionIndex, selectIndex + "");
      if (getClickedCorrect) {
        this.count += 10;
      } else {
        this.count += 0;
      }
    },
  },
});
