package com.yupi.yudada.controller;

import cn.hutool.core.io.FileUtil;
import com.yupi.yudada.common.BaseResponse;
import com.yupi.yudada.common.ErrorCode;
import com.yupi.yudada.common.ResultUtils;
import com.yupi.yudada.constant.FileConstant;
import com.yupi.yudada.exception.BusinessException;
import com.yupi.yudada.exception.ThrowUtils;
import com.yupi.yudada.manager.CosManager;
import com.yupi.yudada.mapper.UserAnswerMapper;
import com.yupi.yudada.model.dto.file.UploadFileRequest;
import com.yupi.yudada.model.dto.statistic.AppAnswerCountDTO;
import com.yupi.yudada.model.dto.statistic.AppAnswerResultCountDTO;
import com.yupi.yudada.model.entity.User;
import com.yupi.yudada.model.enums.FileUploadBizEnum;
import com.yupi.yudada.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.Arrays;
import java.util.List;

/**
 * App 统计分析接口
 *
 * @author <a href="https://github.com/liyupi">程序员鱼皮</a>
 * @from <a href="https://yupi.icu">编程导航知识星球</a>
 */
@RestController
@RequestMapping("/app/statistic")
@Slf4j
public class AppStatisticController {

    @Resource
    private UserAnswerMapper userAnswerMapper;

    /**
     * 热门应用及回答数统计（top 10）
     *
     * @return
     */
    @GetMapping("/answer_count")
    public BaseResponse<List<AppAnswerCountDTO>> getAppAnswerCount() {
        return ResultUtils.success(userAnswerMapper.doAppAnswerCount());
    }

    /**
     * 某应用回答结果分布统计
     *
     * @param appId
     * @return
     */
    @GetMapping("/answer_result_count")
    public BaseResponse<List<AppAnswerResultCountDTO>> getAppAnswerResultCount(Long appId) {
        ThrowUtils.throwIf(appId == null || appId <= 0, ErrorCode.PARAMS_ERROR);
        return ResultUtils.success(userAnswerMapper.doAppAnswerResultCount(appId));
    }
}
