## vue-rabbit [暂定]

>开发请注意，请使用4个空格作为缩进。

### 开发环境

* vue2.5
* es6
* typescript
* less
* vue-class-component
* eslint
* tslint
* stylelint
* webpack4

### 浏览器兼容

> 兼容ie10、chrome35 以上版本

### 目录规范

```
|-- dist
|   |-- static              /* 静态资源目录 */
|   |   |-- fonts
|	|
|   |-- vue-rabbit.css      /* 组件样式 */
|   |-- vue-rabbit.jss      /* 组件库 */
|
|-- src
|   |-- components          /* 组件库 */
|   |   |-- button          /* 组件名 */
|   |       |-- index.ts    /* 对外接口 */
|   |       |-- button.tsx  /* button组件核心代码 */
|   |
|   |-- locale              /* 多语音 */
|   |   |-- index.ts        /* 对外接口 */
|   |   |-- lang            /* 语言目录 */
|   |       |-- zh-CH.ts    /* 简体中文 */
|   |
|   |-- mixins              /* 基类组件 */
|   |
|   |-- styles              /* 样式 */
|   |   |-- common          /* 公共样式 */
|   |   |-- animation       /* 动画 */
|   |   |-- mixins          /* 基类样式 */
|   |   |-- components      /* 组件样式 */
|   |       |-- button.less /* button组件样式代码 */
|   |
|   |-- utils               /* 工具类 */
|
|-- examples
|
|-- package.json
|-- README.md
|-- .stylelintrc
|-- postcss.config.js
|-- .babelrc
|-- tslint.json
|-- .gitattributes
|-- .travis.yml
|-- .eslintrc
|-- .eslintignore
|
|-- build
```

### 开发规范

* 开发群内沟通认领所开发的组件
* 完善README文档，在`components`中标记作者和主要功能(后续组织文档很重要)，并在examples目录中给出demo
* 规范代码，具体请看`eslint`和`stylelint`规范，主要是4个空格，合理换行，规范命名

### feature

* 开发群内沟通

### components

- affix 固钉
- alert​ 提醒面板
- avatar​ 头像
- back-top​ 返回顶部
- badge​ 徽章
- breadcrumb​ 面包屑
- button-group​ 按钮租
- button​ 按钮 [rabbit]
    * 支持圆角
    * 支持disabled和loading
    * 支持块级
    * 支持文字按钮
    * 支持按钮连接
    * 支持幽灵按钮
    * 支持按钮样式
- card​ 卡片
- carousel 走马灯
- cascader​ 级联选择
- checkbox-group​ 多选组
- checkbox​ 多选
- confirm​ 确认弹窗
- container​ 响应容器
- date-picker​ 日历
- divider​ 分割线
- drawer​ 抽屉
- dropdown​ 下拉菜单
- form​ 表单
- grid​ 栅格 [yuan1998]
- icon​ 图标
- image​ 图片
- input​ 输入框
- layout​ 布局 [yuan1998]
- list​ 列表
- menu 菜单
- message 消息​弹窗
- modal​ 弹窗
- notification​ 通知弹窗
- pagination​ 分页
- panel​ 面板
- popover​ 气泡浮层
- popup 弹窗基类组件
    * 支持选择挂载在body或父节点
    * 支持trigger唤醒
    * 支持存在trigger时自定定位
- progress​ 进度条
- radio-group​ 单选组
- radio​ 单选
- rate​ 评分
- scrollbar 滚动栏​
- select​ 下拉选择
- slider​ 滑块选择
- spin​ 菊花加载
- steps​ 步骤条
- switch​ 开关
- table​ 表格
- tabs​ 选项卡
- tag​ 标签
- tree 树
- time-picker​ 时间选择
- timeline​ 时间线
- tooltip​ 文字提示
- transfer​ 穿梭狂
- uploader 上传


### ts规则

连接<https://palantir.github.io/tslint/rules/>

### 开发分支规范

>开发阶段统一 使用 dev/[用户名]

### commit 标准

>开发阶段都在master开发

* 组件 `[分支]：component 组件名称 开发行为（dev、bugfix：bug详情、update：更新了哪些）`
* 示例 `[分支]：example 组件名称`
