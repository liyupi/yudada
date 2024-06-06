<template>
  <div id="answerResultPage">
    <a-card>
      <a-row style="margin-bottom: 16px">
        <a-col flex="auto" class="content-wrapper">
          <h2>{{ data.resultName }}</h2>
          <p>结果描述：{{ data.resultDesc }}</p>
          <p>结果 id：{{ data.resultId }}</p>
          <p>结果得分：{{ data.resultScore }}</p>
          <p>我的答案：{{ data.choices }}</p>
          <p>应用 id：{{ data.appId }}</p>
          <p>应用类型：{{ APP_TYPE_MAP[data.appType] }}</p>
          <p>评分策略：{{ APP_SCORING_STRATEGY_MAP[data.scoringStrategy] }}</p>
          <p>
            <a-space>
              答题人：
              <div :style="{ display: 'flex', alignItems: 'center' }">
                <a-avatar
                  :size="24"
                  :image-url="data.user?.userAvatar"
                  :style="{ marginRight: '8px' }"
                />
                <a-typography-text
                  >{{ data.user?.userName ?? "无名" }}
                </a-typography-text>
              </div>
            </a-space>
          </p>
          <p>
            答题时间：{{ dayjs(data.createTime).format("YYYY-MM-DD HH:mm:ss") }}
          </p>
          <a-space size="medium">
            <a-button type="primary" :href="`/answer/do/${data.appId}`"
              >去答题
            </a-button>
          </a-space>
        </a-col>
        <a-col flex="320px">
          <a-image width="100%" :src="data.resultPicture" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect, withDefaults } from "vue";
import API from "@/api";
import { getUserAnswerVoByIdUsingGet } from "@/api/userAnswerController";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { dayjs } from "@arco-design/web-vue/es/_utils/date";
import { APP_SCORING_STRATEGY_MAP, APP_TYPE_MAP } from "../../constant/app";

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => {
    return "";
  },
});

const router = useRouter();

const data = ref<API.UserAnswerVO>({});

/**
 * 加载数据
 */
const loadData = async () => {
  if (!props.id) {
    return;
  }
  const res = await getUserAnswerVoByIdUsingGet({
    id: props.id as any,
  });
  if (res.data.code === 0) {
    data.value = res.data.data as any;
  } else {
    message.error("获取数据失败，" + res.data.message);
  }
};

/**
 * 监听 searchParams 变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData();
});
</script>

<style scoped>
#answerResultPage {
}

#answerResultPage .content-wrapper > * {
  margin-bottom: 24px;
}
</style>