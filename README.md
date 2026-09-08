# Borui Yan · 闫博睿

个人学术主页，包含科研、行业经历、项目、教育背景和联系方式。

视觉参考：[JingXu’s site](https://xj.editlife.cn/) 的双栏学术主页布局。使用原生 HTML、CSS 和 JavaScript，适用于现有 GitHub Pages 仓库，无需安装依赖或构建。

- `index.html`：个人资料、正文、链接和搜索引擎元数据。
- `style.css`：排版、移动端布局、系统深色模式与打印样式。
- `script.js`：当前章节导航、返回顶部入口与页脚年份。
- `images/bird.jpg`：现有头像。

本地预览（在仓库目录运行）：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

打开 [本地主页](http://127.0.0.1:4173/)。正文与页内链接在关闭 JavaScript 时仍然可用。
