<div align="center">

<h1>班级网站项目：致青春 - 23数对一班（单页面版）</h1>

<p>
  <a href="README.md">English</a> |
  <a href="README.zh-CN.md">简体中文</a>
</p>

</div>

> -DM-CBT1-2023-
> 单页面班级网站 GitHub 仓库，适用于四川省成都市青苏职业中专学校2023级数字媒体对口升学一班

<img src="image/other-image/background.jpg" alt="项目背景图片" title="项目背景">

## 项目简介

本项目为四川省成都市青苏职业中专学校 **2023级数字媒体对口升学一班** 的单页面班级网站。网站采用单页面应用（SPA）设计，所有主要内容集成在单个HTML文件中，通过平滑滚动和导航实现页面切换。网站旨在记录班级成长历程、展示班级风采，为班级成员提供一个共享回忆的数字空间。

## 项目结构

```
-DM-CBT1-2023-_Class_Website_SPA/
│
|                           # HTML页面文件
├── index.html              # 自动跳转页面
├── main.html               # 单页面主网站（包含所有主要内容）
├── about.html              # 关于我们页面（独立页面）
│
|                           # 样式与脚本
├── main.css                # 主样式表
├── main.js                 # JavaScript功能文件（包含智能导航、倒计时等）
│
├── image/                  # 图片资源
│   ├── other-image/        # 通用图片资源
│   ├── student-image/      # 学生照片（格式：stuimg##.jpg）
│   └── teacher-image/      # 老师照片
│
├── LICENSE                 # MIT 许可证
│
├── README.md               # 项目说明文档（英文）
└── README.zh-CN.md         # 项目说明文档（中文）
```

## 功能特性

### 单页面设计
- **单页面应用架构**：所有主要内容集成在单个HTML文件中
- **平滑滚动导航**：通过锚点链接实现平滑滚动到指定部分
- **无刷新页面切换**：提供类似原生应用的用户体验

### 智能导航系统
- **滚动响应导航栏**：向下滚动时自动隐藏，向上滚动时显示
- **悬停显示功能**：鼠标悬停时显示导航栏
- **智能背景透明度**：随滚动位置调整导航栏透明度
- **顶部悬停区域**：顶部预留悬停区域以便随时呼出导航栏

### 交互功能
- **实时高考倒计时**：目标日期：2026年6月7日
- **动态时间显示**：实时显示当前日期和时间
- **智能导航高亮**：根据滚动位置自动高亮当前部分
- **页面间导航同步**：main.html和about.html间导航状态同步

### 内容模块
1. **首页** - 班级欢迎语、高考倒计时、班级特色展示
2. **班级介绍** - 班级历史与发展历程
3. **班级成员** - 现任教师、前教师、班干部、同学信息
4. **班级活动** - 活动时间线（开发中）
5. **班级相册** - 照片展示（开发中）
6. **关于我们** - 独立页面，包含网站制作说明与资源下载

## 技术实现

- **前端技术**：HTML5、CSS3、JavaScript (ES6)
- **架构设计**：单页面应用（SPA）
- **布局方式**：Flexbox、CSS Grid
- **交互效果**：原生JavaScript实现（无第三方库依赖）
- **响应式设计**：完全响应式，适配所有设备
- **性能优化**：本地资源加载，优化加载速度

## 安装与使用

### 本地运行
1. 下载项目文件至本地
2. 确保文件结构完整
3. 在浏览器中打开 `index.html` 或 `main.html`

### 文件部署
1. 保持现有文件结构
2. 上传至支持静态文件的Web服务器
3. 通过服务器地址访问

### 图片资源管理
- 学生照片存放于 `image/student-image/`，命名格式：`stuimg##.jpg`
- 老师照片存放于 `image/teacher-image/`，命名格式：`teacherimg##.jpg`
  - 现任命名格式：`teacherimgn##.jpg`
  - 前命名格式：`teacherimgb##.jpg`
- 通用图片存放于 `image/other-image/`

## 配置与自定义

### 修改班级信息
编辑 `main.html` 文件中的对应部分：
- 首页内容 - 修改欢迎语和班级特色
- 班级介绍 - 更新班级历史信息
- 班级成员 - 修改教师和同学信息
- 班级活动 - 添加活动时间线内容
- 班级相册 - 设置照片展示

编辑 `about.html` 文件：
- 关于我们内容 - 修改制作者的话和班级理念

### 样式调整
编辑 `main.css` 文件：
- 主色调变量：`#128afa`（蔚蓝档案标志蓝）
- 导航栏样式：调整高度、背景、动画效果
- 响应式断点：`@media` 查询调整断点
- 组件样式：修改卡片、倒计时、时间线等样式

### JavaScript功能
编辑 `main.js` 文件：
- 导航栏行为：调整隐藏/显示逻辑
- 倒计时设置：修改目标日期和时间
- 滚动检测：调整滚动阈值和动画速度

## 单页面特性详解

### 导航系统
- **main.html**：使用锚点链接（#home, #about等）实现单页面内导航
- **about.html**：独立页面，但与main.html共享导航栏状态
- **跨页面导航**：从about.html返回main.html时能正确跳转到对应部分

### 滚动行为
- 智能检测滚动方向
- 向下滚动隐藏导航栏以最大化内容区域
- 向上滚动显示导航栏以便导航
- 鼠标悬停时立即显示导航栏

### 状态管理
- 当前部分高亮状态随滚动自动更新
- 页面间导航状态同步
- 导航栏显示状态记忆

## 注意事项

### 资源使用
- 项目中使用的部分背景图片来源于网络，如需正式部署请确保使用合规资源或替换为原创内容
- 学生与老师照片涉及隐私，公开部署前请获得相关授权
- 现在已经使用的资源：
  - `image/other-image/站娘破拆.gif` - 来自`https://kivo.wiki/`
  - `image/other-image/aboutus-background.jpg` - 来自`https://kivo.wiki/`
  - `image\other-image\background.jpg` - 来自`https://kivo.wiki/`
  - `image\other-image\P_施工中表情包.png` - 来自`https://kivo.wiki/`
  - `image\other-image\sd_model.gif` - 来自`https://kivo.wiki/`
  - `image\other-image\to-youth.png` - 来自`https://kivo.wiki/`
  - `image\studen-image\stuimg00.jpg` - 来自`https://www.51yuansu.com/sc/sscnfbxhtd.html`
  - `image\teacher-image\bkfnb-w7mlq.jpg` - 来自`https://mp.weixin.qq.com/s`
  - `image\teacher-image\teherimg01.jpg` - 来自`https://www.51yuansu.com/sc/sscnfbxhtd.html`

### 浏览器兼容性
- 支持现代浏览器（Chrome 60+、Firefox 55+、Safari 11+、Edge 79+）
- 单页面滚动功能在旧版浏览器中可能受限
- JavaScript功能需浏览器支持ES6特性

### 性能考虑
- 单页面设计减少HTTP请求
- 所有CSS和JavaScript文件合并为单个文件
- 图片资源按需加载
- 响应式设计确保移动设备性能

### 项目状态
- 部分页面（活动、相册）处于开发中状态，使用施工中占位符
- 班级成员信息需根据实际情况完善
- 单页面导航已完全实现并测试

## 学校信息

本项目为 **四川省成都市青苏职业中专学校** 2023级数字媒体对口升学一班的学生作品，主要用于班级内部交流与纪念。单页面设计旨在提供更流畅的用户体验和更现代化的网站架构。

## 许可证说明

本项目采用 MIT 许可证 - 详情请见 [LICENSE](LICENSE) 文件。

---

**心心向善 · 事事尚美**