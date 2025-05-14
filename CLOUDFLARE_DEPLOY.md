# 将项目部署到Cloudflare Pages

本指南将帮助你将Next.js项目部署到Cloudflare Pages。

## 准备工作

1. 确保已经在GitHub上创建了仓库并推送了代码。
2. 确保你有一个Cloudflare账户。

## 部署步骤

### 1. 登录Cloudflare Dashboard

访问[Cloudflare Dashboard](https://dash.cloudflare.com/)并登录你的账户。

### 2. 创建新的Pages项目

1. 在左侧导航栏中，点击"Pages"。
2. 点击"创建项目"按钮。
3. 选择"连接到Git"选项。
4. 选择包含你项目的GitHub仓库。

### 3. 配置构建设置

在构建设置页面，输入以下信息：

- **项目名称**：`nari-labs`（或你希望的名称）
- **生产分支**：`main`（或者你的主分支名称）
- **构建命令**：`npm run build:no-lint`（跳过ESLint检查）
- **构建输出目录**：`out`
- **根目录**：（保持空白）

### 4. 环境变量

Cloudflare Pages需要Node.js 20.9.0或更高版本才能与我们的依赖兼容，添加以下环境变量：

- `NODE_VERSION` = `20.9.0`
- `NEXT_DISABLE_ESLINT` = `1`

### 5. 高级设置（可选）

在"高级设置"部分，可以设置以下内容：

- **Node.js版本**：选择最新的LTS版本（例如20.x）

### 6. 部署

点击"保存并部署"按钮开始部署过程。

## 自定义域名（可选）

1. 在项目的Cloudflare Pages控制台中，点击"自定义域"。
2. 点击"设置自定义域"。
3. 输入你的域名并遵循说明完成设置。

## 持续部署

Cloudflare Pages会自动设置持续部署：

- 当你推送更改到主分支时，它会自动部署到生产环境。
- 当你创建Pull Request时，它会部署预览环境。

## 本地测试

在本地构建项目以确保一切正常：

```bash
npm run build:no-lint
```

## 故障排除

如果在部署过程中遇到问题：

### ESLint/TypeScript错误

如果遇到ESLint或TypeScript错误导致构建失败：

1. 确保使用了`build:no-lint`命令而不是`build`命令
2. 确保在环境变量中设置了`NEXT_DISABLE_ESLINT=1`
3. 确保`next.config.ts`中包含以下配置：
   ```typescript
   eslint: {
     ignoreDuringBuilds: true,
   },
   typescript: {
     ignoreBuildErrors: true,
   },
   ```

### Node.js版本问题

如果遇到Node.js版本不兼容错误：

1. 在环境变量中设置`NODE_VERSION=20.9.0`或更高版本
2. 在项目根目录添加`.nvmrc`和`.node-version`文件，内容为所需的Node.js版本

### 其他常见问题

1. 检查构建日志以获取错误详情。
2. 确保`next.config.ts`中的配置正确。
3. 确保`package.json`中的所有依赖项都已正确安装。
4. 检查`_redirects`和`_headers`文件是否格式正确。

## 更多资源

- [Cloudflare Pages文档](https://developers.cloudflare.com/pages/)
- [Next.js静态导出文档](https://nextjs.org/docs/advanced-features/static-html-export) 