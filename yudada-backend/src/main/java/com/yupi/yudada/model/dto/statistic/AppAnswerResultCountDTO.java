package com.yupi.yudada.model.dto.statistic;

import lombok.Data;

/**
 * App 答案结果统计
 */
@Data
public class AppAnswerResultCountDTO {
    // 结果名称
    private String resultName;
    // 对应个数
    private String resultCount;
}