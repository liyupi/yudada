import Taro, { useLaunch } from "@tarojs/taro";
import { PropsWithChildren } from "react";
import "taro-ui/dist/style/index.scss"; // 引入组件样式 - 方式一
import "./app.scss";

function App({ children }: PropsWithChildren) {
  useLaunch(async () => {
    const res = await Taro.login();
    console.log(res);
    // todo 拿到 res.code 后，调用后端登录
  });

  return children;
}

export default App;
