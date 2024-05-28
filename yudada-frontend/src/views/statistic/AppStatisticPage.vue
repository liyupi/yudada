<template>
  <div id="appStatisticPage">
    <h2>热门应用统计</h2>
    <v-chart :option="appAnswerCountOptions" style="height: 300px" />
    <h2>应用结果统计</h2>
    <div class="search-bar">
      <a-input-search
        :style="{ width: '320px' }"
        placeholder="输入 appId"
        button-text="搜索"
        size="large"
        search-button
        @search="(value) => loadAppAnswerResultCountData(value)"
      />
    </div>
    <div style="margin-bottom: 16px" />
    <v-chart :option="appAnswerResultCountOptions" style="height: 300px" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import API from "@/api";
import message from "@arco-design/web-vue/es/message";
import {
  getAppAnswerCountUsingGet,
  getAppAnswerResultCountUsingGet,
} from "@/api/appStatisticController";
import VChart from "vue-echarts";
import "echarts";

const appAnswerCountList = ref<API.AppAnswerCountDTO[]>([]);
const appAnswerResultCountList = ref<API.AppAnswerResultCountDTO[]>([]);

/**
 * 加载数据
 */
const loadAppAnswerCountData = async () => {
  const res = await getAppAnswerCountUsingGet();
  if (res.data.code === 0) {
    appAnswerCountList.value = res.data.data || [];
  } else {
    message.error("获取数据失败，" + res.data.message);
  }
};

// 统计选项
const appAnswerCountOptions = computed(() => {
  return {
    xAxis: {
      type: "category",
      data: appAnswerCountList.value.map((item) => item.appId),
      name: "应用 id",
    },
    yAxis: {
      type: "value",
      name: "用户答案数",
    },
    series: [
      {
        data: appAnswerCountList.value.map((item) => item.answerCount),
        type: "bar",
      },
    ],
  };
});

/**
 * 加载数据
 */
const loadAppAnswerResultCountData = async (appId: string) => {
  if (!appId) {
    return;
  }
  const res = await getAppAnswerResultCountUsingGet({
    appId: appId as any,
  });
  if (res.data.code === 0) {
    appAnswerResultCountList.value = res.data.data || [];
  } else {
    message.error("获取数据失败，" + res.data.message);
  }
};

// 统计选项
const appAnswerResultCountOptions = computed(() => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "应用答案结果分布",
        type: "pie",
        radius: "50%",
        data: appAnswerResultCountList.value.map((item) => {
          return { value: item.resultCount, name: item.resultName };
        }),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
});

/**
 * 参数改变时触发数据的重新加载
 */
watchEffect(() => {
  loadAppAnswerCountData();
});

/**
 * 参数改变时触发数据的重新加载
 */
watchEffect(() => {
  loadAppAnswerResultCountData("");
});
</script>

<style scoped></style>
