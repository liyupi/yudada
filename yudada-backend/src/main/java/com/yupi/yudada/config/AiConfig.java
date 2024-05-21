package com.yupi.yudada.config;

import com.zhipu.oapi.ClientV4;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "ai")
@Data
public class AiConfig {

    /**
     * apiKey，需要从开放平台获取
     */

    private String apiKey;

    @Bean
    public ClientV4 getClientV4() {
        return new ClientV4.Builder(apiKey).build();
    }
}
