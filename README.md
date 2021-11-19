# Piano
 阿里前端练习生结课项目

#### 界面效果

![image-20211119151315732](C:\Users\13422\AppData\Roaming\Typora\typora-user-images\image-20211119151315732.png)

#### 在线预览地址

https://likefrost.github.io/Piano

#### 快速开始

```
cd Piano
npm install
npm start
```

#### 项目开发

本项目基于 [React](https://reactjs.org/) + [icejs](https://ice.work/) + [Fusion Design](https://fusion.design/)

#### 项目功能

- 弹奏钢琴，记录用户操作历史
- 播放用户弹奏历史
- 播放用户输入的音乐
- 动态显示当前音频柱状图及随机音符

#### 文件结构

```
├─public							//全局资源
│  ├─img
│  └─music
├─src
|   ├─models						//全局状态
|   └─pages							//页面
|   |   └─Dashboard
|   |        └─components			//页面组件
|   |        |  ├─InputMusic		//输入音乐框
|   |        |  ├─MusicDisplay		//显示音乐组件
|   |        |  ├─MusicWave			//音乐可视化组件
|   |        |  └─Piano				//钢琴组件
|   |        ├─index.jsx			//页面入口		
|   |        └─index.module.scss
|   ├─app.jsx						//应用入口
|   ├─global.css					//全局css配置
|   ├─routes.js						//路由配置
|   └─store.js						//store
├─build.json        // 工程配置
└─package.json
```

#### 代码规范

使用 eslint 规则，遵循[阿里巴巴前端规范](https://f2e.alibaba-inc.com/specification/)

命令行配置：

```json
// package.json
"scripts": {
  "lint": "npm run eslint && npm run stylelint",
  "eslint": "eslint --cache --ext .js,.jsx,.ts,.tsx ./",
  "stylelint": "stylelint **/*.{css,scss,less}"
}
```

运行 lint 任务：

```
npm run lint
```

#### 项目部署

