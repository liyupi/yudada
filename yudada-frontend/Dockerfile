# 第一个阶段：构建阶段，使用 Node.js 16 的 Alpine 镜像作为基础镜像，并命名为 build-stage
FROM node:16-alpine as build-stage

# 设置工作目录为 /app
WORKDIR /app

# 将项目源代码（包括 package.json）复制到工作目录
COPY . .

# 设置 npm registry 地址为国内源
RUN npm config set registry https://registry.npmmirror.com

# 使用 npm 安装项目依赖
RUN npm install --force

# 运行构建命令
RUN npm run build

# 第二个阶段：运行 Nginx 提供 web 服务
FROM nginx:1.22.1 as server-stage

USER root

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]