# 班级网站项目：致青春 - 23数对一班

> -DM-CBT1-2023-
> Class Website GitHub Repository for Class 1 of Digital Media College Preparatory Program, Grade 2023, Qingsu Vocational Secondary School, Chengdu, Sichuan Province

<div align="center">

<h1>项目名称</h1>

<p>
  <a href="README.md">English</a> |
  <a href="README.zh-CN.md">简体中文</a> 
</p>

</div>

## 项目简介

本项目为四川省成都市青苏职业中专学校 **2023级数字媒体对口升学一班** 的班级网站。网站旨在记录班级成长历程、展示班级风采，为班级成员提供一个共享回忆的数字空间。

## 项目结构

```
-DM-CBT1-2023-_Class_Website/
│
├── HTML页面文件/
│   ├── index.html          # 自动跳转页面
│   ├── main.html           # 网站首页
│   ├── profile.html        # 班级介绍页面
│   ├── members.html        # 班级成员页面
│   ├── activities.html     # 班级活动页面
│   ├── photo-album.html    # 班级相册页面
│   └── about.html          # 关于我们页面
│
├── 样式与脚本/
│   ├── main.css            # 主样式表
│   └── main.js             # JavaScript功能文件
│
├── 图片资源/
│   └── image/
│       ├── other-image/    # 通用图片资源
│       ├── student-image/  # 学生照片（格式：stuimg##.jpg）
│       └── teacher-image/  # 老师照片
│
└── README.md               # 项目说明文档
```

## 功能特性

### 页面设计
- 响应式布局，适配多种设备屏幕
- 动态导航栏，随滚动智能显示/隐藏
- 统一的设计风格与配色方案

### 交互功能
- 实时高考倒计时（目标日期：2026年6月7日）
- 动态时间显示
- 平滑滚动与页面跳转
- 智能导航栏交互

### 内容模块
1. **首页** - 班级欢迎语、高考倒计时、班级特色展示
2. **班级介绍** - 班级历史与发展历程
3. **班级成员** - 老师、班干部、同学信息
4. **班级活动** - 活动时间线（开发中）
5. **班级相册** - 照片展示（开发中）
6. **关于我们** - 网站制作说明与资源下载

## 技术实现

- **前端技术**：HTML5、CSS3、JavaScript (ES6)
- **布局方式**：Flexbox、CSS Grid
- **交互效果**：原生JavaScript实现
- **资源管理**：本地文件系统

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
- 通用图片存放于 `image/other-image/`

## 配置与自定义

### 修改班级信息
编辑对应HTML文件中的内容部分：
- `profile.html` - 更新班级历史信息
- `members.html` - 修改成员信息
- `main.html` - 调整首页内容

### 样式调整
编辑 `main.css` 文件：
- 主色调变量：`#128afa`
- 响应式断点：`@media` 查询
- 布局与组件样式

## 注意事项

### 资源使用
- 项目中使用的部分背景图片来源于网络，如需正式部署请确保使用合规资源或替换为原创内容
- 学生与老师照片涉及隐私，公开部署前请获得相关授权

### 浏览器兼容性
- 支持现代浏览器（Chrome 60+、Firefox 55+、Safari 11+、Edge 79+）
- 部分高级CSS特性在旧版浏览器中可能受限

### 项目状态
- 部分页面（活动、相册）处于开发中状态
- 班级成员信息需根据实际情况完善

## 学校信息

本项目为 **四川省成都市青苏职业中专学校** 2023级数字媒体对口升学一班的学生作品，主要用于班级内部交流与纪念。

## 许可证说明

本项目目前暂无明确的开源许可证。项目代码仅供学习参考，部分资源（如图片）版权归原作者所有。

---

**心心向善 · 事事尚美**

*青春纪念，数字留存*
