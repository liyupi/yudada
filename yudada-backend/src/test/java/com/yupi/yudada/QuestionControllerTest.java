package com.yupi.yudada;

import com.yupi.yudada.controller.QuestionController;
import com.yupi.yudada.model.dto.question.AiGenerateQuestionRequest;
import org.checkerframework.checker.units.qual.A;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

@SpringBootTest
public class QuestionControllerTest {

    @Resource
    private QuestionController questionController;

    @Test
    void aiGenerateQuestionSSETest() throws InterruptedException {
        // 模拟调用
        AiGenerateQuestionRequest aiGenerateQuestionRequest = new AiGenerateQuestionRequest();
        aiGenerateQuestionRequest.setAppId(3L);
        aiGenerateQuestionRequest.setQuestionNumber(10);
        aiGenerateQuestionRequest.setOptionNumber(2);

        // 模拟普通用户
        questionController.aiGenerateQuestionSSETest(aiGenerateQuestionRequest, false);
        // 模拟普通用户
        questionController.aiGenerateQuestionSSETest(aiGenerateQuestionRequest, false);
        // 模拟会员用户
        questionController.aiGenerateQuestionSSETest(aiGenerateQuestionRequest, true);

        // 模拟主线程一直启动
        Thread.sleep(1000000L);
    }
}
