# Bitblog Mono Pixel (Hugo Theme)

黑白像素风格的Hugo Paper

## 特性

- 月亮相位（基础版）：会根据当前日期自动切换 `新月 / 上弦月 / 满月 / 下弦月`
- 文章列表、文章详情、About 页保持 Paper 风格的简洁阅读布局

<img width="3129" height="2108" alt="image" src="https://github.com/user-attachments/assets/f28a8b5b-78e0-49d4-8dab-e4f59be31836" />

<img width="2853" height="1630" alt="image" src="https://github.com/user-attachments/assets/2f9a493b-d8ed-4e56-818a-9cc891b34e0f" />

<img width="2688" height="1835" alt="image" src="https://github.com/user-attachments/assets/d526e650-251b-47ee-ba83-6c6179b5d69e" />

## 使用

将本仓库作为主题放到你的 Hugo 站点 `themes/bitblog-theme` 下，然后在站点配置里：

```toml
theme = "bitblog-theme"
```

## 示例站点

仓库自带 `exampleSite/`：

```bash
mv exampleSite your_path
cp -R bitblog-theme exampleSite/themes/bitblog-theme
hugo server -s exampleSite -t bitblog-theme
```

