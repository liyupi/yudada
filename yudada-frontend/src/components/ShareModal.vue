<template>
  <a-modal v-model:visible="visible" :footer="false" @cancel="closeModal">
    <template #title>
      {{ title }}
    </template>
    <h4 style="margin-top: 0">复制分享链接</h4>
    <a-typography-paragraph copyable>{{ link }}</a-typography-paragraph>
    <h4>手机扫码查看</h4>
    <img :src="codeImg" />
  </a-modal>
</template>

<script setup lang="ts">
import { defineExpose, defineProps, ref, withDefaults } from "vue";
// @ts-ignore
import QRCode from "qrcode";
import message from "@arco-design/web-vue/es/message";

/**
 * 定义组件属性类型
 */
interface Props {
  // 分享链接
  link: string;
  // 弹窗标题
  title: string;
}

/**
 * 给组件指定初始值
 */
const props = withDefaults(defineProps<Props>(), {
  link: () => "https://laoyujianli.com/share/yupi",
  title: () => "分享",
});

// 要展示的图片
const codeImg = ref();

// 是否可见
const visible = ref(false);

// 打开弹窗
const openModal = () => {
  visible.value = true;
};

// 暴露函数给父组件
defineExpose({
  openModal,
});

// 关闭弹窗
const closeModal = () => {
  visible.value = false;
};

// 二维码生成
QRCode.toDataURL(props.link)
  .then((url: any) => {
    codeImg.value = url;
  })
  .catch((err: any) => {
    console.error(err);
    message.error("生成二维码失败，" + err.message);
  });
</script>

<style scoped></style>