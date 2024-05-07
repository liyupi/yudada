import {View, Image} from "@tarojs/components";
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import headerBg from "../../assets/headerBg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import {getBestQuestionResult} from "../../utils/bizUtils";
import questions from "../../data/questions.json";
import questionResults from "../../data/question_results.json";
import "./index.scss";

/**
 * 测试结果页面
 * @author <a href="https://github.com/liyupi">程序员鱼皮</a>
 * @from <a href="https://www.code-nav.cn">编程导航学习圈</a>
 */
export default () => {
  // 获取答案
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    });
  }
  // 获取测试结果
  const result = getBestQuestionResult(answerList, questions, questionResults);

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image className="headerBg" src={headerBg}/>
      <GlobalFooter/>
    </View>
  );
};
