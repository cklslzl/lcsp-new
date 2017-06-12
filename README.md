### 日程项目

> 主要框架使用vue，ui框架为vue-material。具体运行步骤可参见下面的说明


### 框架 vue2.0
``` bash
# 1.vue2.0
# 2.vue-router

```

### UI框架 Vue-Material
``` bash
# 文档链接：
http://vue-material.com/#/components/list

# 使用步骤
# 1.下载组件
  cnpm install vue-material --save

# 2.引入组件文件
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.css';

# 3.应用组件
Vue.use(VueMaterial);

# 4.使用组件
<md-button>默认</md-button>

```

### 初始化，编译，打包项目

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

### git操作步骤

``` bash
# 获取服务器最新代码
git pull

# 将所有的更改添加到队列中
git add --all

# 将所有队列中的文件添加到待提交区
git commit -m "你记录的日志"

# 将提交区的文件提交到服务器上
git push

```

### 手势密码组件使用说明
``` bash
# 引入组件
import  "./PwdGestures/index.js";

# 组建中直接调用
<pwd-gestures></pwd-gestures>

```

### 加载样式组件使用说明
``` bash
# 引入组件
import Pop from  "./pop/index.js";
#配置组件引用
Vue.use(Pop)

# 组建中直接调用
<icon-loading text="加载中文字" v-bind:show="true" v-bind:error="false" errorTxt="加载错误" ></icon-loading>


#项目中的使用，在main.js中我引入了混合
#配置混合
Vue.mixin({
  data(){
    return {
      loader: {
        text: '',
        show: true,
        error: false,
        errorTxt: '加载错误'
      }
    }
  },
  methods: {
    showLoading(text){
      text && (this.loader.text = text);
      this.loader.show = true;
    },
    showError(text){
      this.loader.error = true;
      this.loader.show = true;
      text && (this.loader.errorTxt = text);
    },
    hideLoading(){
      this.loader.error = false;
      this.loader.show = false;
    },
  }
})

#所以新实例出来的组件都带有以上data和methods，可以直接调用
#在组件中使用案例：
 <icon-loading
      v-bind:text="loader.text"
      v-bind:show="loader.show"
      v-bind:error="loader.error"
      v-bind:errorTxt="loader.errorTxt">
    </icon-loading>

#显示loading：
 this.showLoading('要显示的文字，不写走默认')
#隐藏loading：
 this.hideLoading()
#显示报错：
 this.showError('错误文字，不写走默认')

```

### 提示框样式展示
``` bash
# 引入组件
import Pop from  "./pop/index.js";
#配置组件引用
Vue.use(Pop)
<icon-info text="提示信息" v-bind:show="true"></icon-info>

```

### 日历控件
``` bash
# 引入组件
import Calendar from "./calendar/index.js"

# 配置组件引用
Vue.use(Calendar)
<normal-calendar></normal-calendar>

```


