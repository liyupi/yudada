import {View, Image} from "@tarojs/components";
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import headerBg from "../../assets/headerBg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import "./index.scss";

/**
 * 主页
 * @author <a href="https://github.com/liyupi">程序员鱼皮</a>
 * @from <a href="https://www.code-nav.cn">编程导航学习圈</a>
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI 性格测试</View>
      <View className="at-article__h2 subTitle">
        只需 2 分钟，就能非常准确地描述出你是谁，以及你的性格特点
      </View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/doQuestion/index",
          });
        }}
      >
        开始测试
      </AtButton>
      <Image className="headerBg" src={headerBg}/>
      <GlobalFooter/>
    </View>
  );
};
