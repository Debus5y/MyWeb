# 如何部署您的个人网站

由于我无法直接访问您的云服务账户（如 Vercel, Netlify, GitHub 等），我无法为您直接完成部署。但我为您整理了最简单、最推荐的几种部署方式。

## 方式一：使用 Vercel（推荐，最简单）

Vercel 是部署 Next.js/React/Vite 项目的首选平台，完全免费且速度极快。

1.  **准备代码**：
    *   确保您的项目在本地可以正常运行（已验证）。
    *   建议将代码上传到 GitHub（如果您还没有 GitHub 仓库，可以在 GitHub 上新建一个，然后按页面提示推送代码）。

2.  **一键部署**：
    *   访问 [Vercel 官网](https://vercel.com) 并注册/登录（推荐直接用 GitHub 登录）。
    *   点击 **"Add New..."** -> **"Project"**。
    *   在 "Import Git Repository" 中选择您刚刚上传的 GitHub 仓库。
    *   Vercel 会自动识别这是一个 Vite 项目。直接点击 **"Deploy"**。
    *   等待约 1 分钟，部署完成后，Vercel 会给您一个永久的免费域名（如 `your-name.vercel.app`），您可以直接分享给任何人。

## 方式二：使用 Netlify（拖拽部署，无需 Git）

如果您不想使用 GitHub，可以使用 Netlify 的拖拽功能。

1.  **构建项目**：
    *   在终端中运行 `npm run build`。
    *   这会在项目根目录下生成一个 `dist` 文件夹。

2.  **拖拽上传**：
    *   访问 [Netlify Drop](https://app.netlify.com/drop)。
    *   将项目中的 `dist` 文件夹直接拖拽到网页上的虚线框内。
    *   等待上传完成，Netlify 会即时生成一个随机域名的网站。
    *   您可以随后在设置中修改域名。

## 方式三：使用 GitHub Pages

如果您希望部署到 GitHub Pages：

1.  在 `vite.config.ts` 中设置 `base` 路径（通常是 `/仓库名/`）。
2.  将代码推送到 GitHub。
3.  在 GitHub 仓库的 Settings -> Pages 中选择部署源为 `gh-pages` 分支（需要配置 GitHub Actions 或手动部署）。
    *   *注：这种方式配置相对繁琐，不如 Vercel 方便。*

---

**建议**：
对于个人作品集网站，**方式一（Vercel）** 是最稳定、专业的选择，且支持自动更新（每次您 push 代码到 GitHub，网站会自动更新）。
