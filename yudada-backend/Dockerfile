# Docker 镜像构建
# @author <a href="https://github.com/liyupi">程序员鱼皮</a>
# @from <a href="https://yupi.icu">编程导航知识星球</a>
# 选择基础镜像
FROM maven:3.8.1-jdk-8-slim as builder

# 解决容器时期与真实时间相差 8 小时的问题
RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo Asia/Shanghai > /etc/timezone

# 复制代码到容器内
WORKDIR /app
COPY pom.xml .
COPY src ./src

# 打包构建
RUN mvn package -DskipTests

# 容器启动时运行 jar 包
CMD ["java","-jar","/app/target/yudada-backend-0.0.1-SNAPSHOT.jar","--spring.profiles.active=prod"]