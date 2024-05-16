<template>
  <div id="addScoringResultPage">
    <h2 style="margin-bottom: 32px">设置评分</h2>
    <a-form
      :model="form"
      :style="{ width: '480px' }"
      label-align="left"
      auto-label-width
      @submit="handleSubmit"
    >
      <a-form-item label="应用 id">
        {{ appId }}
      </a-form-item>
      <a-form-item v-if="updateId" label="修改评分 id">
        {{ updateId }}
      </a-form-item>
      <a-form-item field="resultName" label="结果名称">
        <a-input v-model="form.resultName" placeholder="请输入结果名称" />
      </a-form-item>
      <a-form-item field="resultDesc" label="结果描述">
        <a-input v-model="form.resultDesc" placeholder="请输入结果描述" />
      </a-form-item>
      <a-form-item field="resultPicture" label="结果图标">
        <a-input
          v-model="form.resultPicture"
          placeholder="请输入结果图标地址"
        />
      </a-form-item>
      <a-form-item field="resultProp" label="结果集">
        <a-input-tag
          v-model="form.resultProp"
          :style="{ width: '320px' }"
          placeholder="请输出结果集，按回车确认"
          allow-clear
        />
      </a-form-item>
      <a-form-item field="resultScoreRange" label="结果得分范围">
        <a-input-number
          v-model="form.resultScoreRange"
          placeholder="请输入结果得分范围"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 120px">
          提交
        </a-button>
      </a-form-item>
    </a-form>
    <h2 style="margin-bottom: 32px">评分管理</h2>
    <ScoringResultTable :appId="appId" :doUpdate="doUpdate" ref="tableRef" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, withDefaults } from "vue";
import API from "@/api";
import { useRouter } from "vue-router";
import ScoringResultTable from "@/views/add/components/ScoringResultTable.vue";
import {
  addScoringResultUsingPost,
  editScoringResultUsingPost,
} from "@/api/scoringResultController";
import message from "@arco-design/web-vue/es/message";

interface Props {
  appId: string;
}

const props = withDefaults(defineProps<Props>(), {
  appId: () => {
    return "";
  },
});

const router = useRouter();
const tableRef = ref();

// 表单参数
const form = ref({
  resultDesc: "",
  resultName: "",
  resultPicture: "",
} as API.ScoringResultAddRequest);

const updateId = ref<any>();

const doUpdate = (scoringResult: API.ScoringResultVO) => {
  updateId.value = scoringResult.id;
  form.value = scoringResult;
};

/**
 * 提交
 */
const handleSubmit = async () => {
  if (!props.appId) {
    return;
  }
  let res: any;
  // 如果是修改
  if (updateId.value) {
    res = await editScoringResultUsingPost({
      id: updateId.value as any,
      ...form.value,
    });
  } else {
    // 创建
    res = await addScoringResultUsingPost({
      appId: props.appId as any,
      ...form.value,
    });
  }
  if (res.data.code === 0) {
    message.success("操作成功");
  } else {
    message.error("操作失败，" + res.data.message);
  }
  if (tableRef.value) {
    tableRef.value.loadData();
    updateId.value = undefined;
  }
};
</script>
