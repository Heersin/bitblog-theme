# Bitblog Mono Pixel (Hugo Theme)

一个参考 Paper Theme 信息架构，但视觉为 **黑白复古像素风** 的 Hugo 主题。

## 特性

- 首页大改：上半部分夜空、月亮，下半部分海面与地平线分隔
- 月亮相位（基础版）：会根据当前日期自动切换 `新月 / 上弦月 / 满月 / 下弦月`
- 文章列表、文章详情、About 页保持 Paper 风格的简洁阅读布局
- 全局统一黑白像素化风格（边框、字体、层次）

<img width="3129" height="2108" alt="image" src="https://github.com/user-attachments/assets/f28a8b5b-78e0-49d4-8dab-e4f59be31836" />


## 使用

将本仓库作为主题放到你的 Hugo 站点 `themes/bitblog-theme` 下，然后在站点配置里：

```toml
theme = "bitblog-theme"
```

## 示例站点

仓库自带 `exampleSite/`：

```bash
hugo server -s exampleSite -t bitblog-theme
```

## 在 GitHub 仓库模式安装 Hugo（推荐）

仓库已提供 CI 工作流：`.github/workflows/hugo-check.yml`，会在 `push / pull_request` 时自动安装 Hugo Extended 并执行构建检查。

如需手动配置，可使用：

```yaml
- uses: peaceiris/actions-hugo@v3
  with:
    hugo-version: '0.124.1'
    extended: true
- run: hugo -s exampleSite --themesDir ..
```

## 首页参数

```toml
[params.home]
  title = "Night Log"
  intro = "你的 introduction"
  moonLabel = "月亮"
  seaLabel = "海洋"
  feedTitle = "Recent Entries"
```
