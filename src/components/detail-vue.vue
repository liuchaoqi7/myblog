<template>
  <div class="detail-vue">
  <pre>
  <h1 class="title">vue.js</h1>
<h3>npm命令</h3>
当想要进入C、D、E盘时，直接在当前目录下输入硬盘名外加冒号就可以了，不需要使用cd命令了；
如果是下载好的插件文件，可以在黑屏终端cd到此文件夹下运行npm install就可以安装了；
在命令行中输入vue -V ，(大写的V),即可查询版本号，否则将出现vue 不是内部或外部命令，也不是可运行的程序或批处理文件。
yarn:是一个包管理工具，和npm有类似功能，如果遇到yarn报错无法执行可以用npm代替就行了；
ctrl+c：终止命令的执行；
命令行工具 (CLI):（用于快速构建程序结构的工具，有点类似于建房子时搭建的架子）
    Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了 batteries-included 的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。







Object.freeze():此方法阻止修改现有属性;
$watch("a",function(newValue,oldValue){})方法：用来监测属性的变化；
<h3>指令</h3>
v-for 指令：
    可以绑定数组或对象的数据来渲染一个项目列表：此指令需要基于"item,index in items"/"value,key in object"特殊语法；v-bind:key = "index/key":简写形式是:key = "index/key"；给了vue一个追踪每个节点的提示，从而重新排序元素；
    在 v-for 块中，我们可以访问所有父作用域的 property(也就是Vue对象实例中的data中的数据);
    在 v-for 里使用值范围：
    v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数。
        &ltdiv&gt
            &ltspan v-for=&quotn in 10&quot&gt以插值表达式插入n&lt/span&gt
        &lt/div&gt
        结果：1 2 3 4 5 6 7 8 9 10
v-once 指令: 
    你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：
v-html 指令:
    为了输出真正的 HTML，你需要使用 v-html 指令,v-html 指令的值会插入当前元素标签内；
v-bind attribute：
    被称为指令。指令带有前缀 v-，以表示它们是 Vue 提供的特殊 attribute。
    指令 attribute 的值预期是单个 JavaScript 表达式；
    可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：
        &lta v-bind:[attributeName]="url"&gt ... &lt/a&gt
        这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。
        动态参数预期会求出一个字符串，异常情况下值为null。这个特殊的null值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。
        动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在 HTML attribute 名里是无效的

    在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。
    用在组件上:
        当在一个自定义组件上使用 class property 时，这些 class 将被添加到该组件的根元素上面。这个元素上已经存在的 class 不会被覆盖。
v-if指令：用于条件性的渲染一块内容，这块内容只有在此指令返回真的时候才会被渲染；此指令的元素不是始终存在于文档中，回来会创建和销毁；
    v-else-if/v-else指令也是当返回真的时候渲染这块内容；
    v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。
    v-if/v-else-if/v-else指令中两个模板使用了相同的元素，将不会清除用户已经输入的内容。如果这两个元素是完全独立的，不要复用它们”。只需在不需要复用元素上添加一个具有唯一值的 key attribute 即可；
    你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法：
当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级;
v-show指令：
    此指令的值也是接收一个布尔值，此指令对应着display属性，此指令的元素始终存在于文档中；但是此属性不支持templete;
v-model 指令:
    它能实现在表单元素输入和应用状态之间的双向数据绑定;
    修饰符:
            .lazy:
                在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步：
                在“change”时而非“input”时更新 
                &ltinput v-model.lazy="msg"&gt
            .number:
                如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：
                &ltinput v-model.number="age" type="number"&gt
                这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值。
            .trim；
                如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
                &ltinput v-model.trim="msg"&gt
v-on:even指令；
    v-on:click = "submit":简写形式为@click = "submit"，给元素添加事件监听，绑定事件；
<h3>变更方法</h3>
    Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：
        push()
        pop()
        shift()
        unshift()
        splice()
        sort()
        reverse()
     变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 filter()、concat() 和 slice()。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组：

<h3>计算属性与方法</h3>
我们可以通过在表达式中调用方法来达到同样的效果，然而，不同的是计算属性是基于它们的响应式依赖进行缓存的；只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要message还没有发生改变，多次访问reversedMessage计算属性会立即返回之前的计算结果，而不必再次执行函数。
相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。
计算属性 vs 侦听属性
    Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。
    当你有一些数据需要随着其它数据变动而变动时，不要用watch侦听属性，是使用计算属性；
    计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：
    当需要在数据变化时执行异步或开销较大的操作时，watch侦听器属性是最有用的。
<h3>修饰符</h3>
修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
事件修饰符：修饰符可以串联 
    .stop：阻止单击事件继续传播
    .prevent
    .capture:添加事件监听器时使用事件捕获模式 , 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理
    .self:只当在 event.target 是当前元素自身时触发处理函数,即事件不是从内部元素触发的 
    .once:点击事件将只会触发一次
    .passive:会告诉浏览器你不想阻止事件的默认行为。       
<h3>实例生命周期钩子</h3>
每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。
<img src="@/assets/img/vue实例生命周期图.jpg" alt="">
mounted：
    实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
    注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：
        mounted: function () {
          this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
          })
        }
errorCaptured：
    当捕获一个来自子孙组件的错误时被调用。
<strong>自定义事件</strong>
我们推荐你始终使用 kebab-case 的事件名。
    自定义组件的 v-model:
        Vue.component('base-checkbox', {
            model: {
              prop: 'checked',
              event: 'change'
            },
            props: {
              checked: Boolean
            },
            template: `
              &ltinput
                type="checkbox"
                v-bind:checked="checked"
                v-on:change="$emit('change', $event.target.checked)"
              &gt
            `
        })
        现在在这个组件上使用 v-model 的时候：
        &ltbase-checkbox v-model="lovingVue"&gt&lt/base-checkbox&gt
        这里的 lovingVue 的值将会传入这个名为 checked 的 prop。同时当 base-checkbox 触发一个 change 事件并附带一个新的值的时候，这个 lovingVue 的 property 将会被更新。
        注意你仍然需要在组件的 props 选项里声明 checked 这个 prop。
将原生事件绑定到组件:
    在一个组件的根元素上直接监听一个原生事件，你可以使用 v-on 的 .native 修饰符： 
        &ltbase-input v-on:focus.native="onFocus"&gt&lt/base-input&gt
    但是像下面的例子，父级的 .native 监听器将静默失败。它不会产生任何报错，但是 onFocus 处理函数不会如你预期地被调用。
    &ltlabel&gt
      以插值表达式插入 label 
      &ltinput
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      &gt
    &lt/label&gt  
    为了解决这个问题，Vue 提供了一个 $listeners property，它是一个对象，里面包含了作用在这个组件上的所有监听器。例如：
        {
          focus: function (event) { /* ... */ }
          input: function (value) { /* ... */ },
        }
    有了这个 $listeners property，你就可以配合 v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。对于类似&ltinput&gt的你希望它也可以配合 v-model 工作的组件来说，为这些监听器创建一个类似下述 inputListeners 的计算属性通常是非常有用的：
        Vue.component('base-input', {
            inheritAttrs: false,
            props: ['label', 'value'],
            computed: {
              inputListeners: function () {
                var vm = this
                // `Object.assign` 将所有的对象合并为一个新对象
                return Object.assign({},
                  // 我们从父级添加所有的监听器
                  this.$listeners,
                  // 然后我们添加自定义监听器，
                  // 或覆写一些监听器的行为
                  {
                    // 这里确保组件配合 `v-model` 的工作
                    input: function (event) {
                      vm.$emit('input', event.target.value)
                    }
                  }
                )
              }
            },
            template: `
              &ltlabel&gt
                以插值表达式插入 label 
                &ltinput
                  v-bind="$attrs"
                  v-bind:value="value"
                  v-on="inputListeners"
                &gt
              &lt/label&gt
            `
        })
.sync 修饰符：对一个 prop 进行“双向绑定”。
<h3>组件</h3>
<strong>全局注册</strong>
组件格式：局部组件使用的components属性，全局组件使用的是templete属性
    // 定义名为 todo-item 的新组件，建议组件名字全部是小写字母且必须包含一个连字符
    Vue.component('todo-item', {
      props: ['todo'],//把全局作用域中的值传给子组件，注意是复数形式
      data:function(){
          return {
              count:0 //组件内部的数据，此数据在相同的两个组件之间并不相互影响,因为你每用一次组件，就会有一个它的新实例被创建;一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
          }
      },
      template: '&ltli v-on:click = "clickfun"&gt以插值表达式插入count这是个待办项以插值表达式插入todo.text&lt/li&gt' ,
      method:{
          clickfun:function(){
              this.count ++;
      this.$emit("clicknow",this.count);//        触发子组件的父部的事件并传递为事件参数this.count，并在全局vue实例中的method属性中编写clicknow事件方法;
          }
      }
    })

    var app = new Vue({
        el: '#app',
        data: {
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ]
            },
        method:{
            clicknow:function(e){
                console.log(e);
            }
        }
    })
 
    现在你可以用它构建另一个组件模板：

    &ltol id = "app"&gt  //组件模板必须要一个根节点
      //创建一个 todo-item 组件的实例 
      &lttodo-item
            v-for="item in groceryList"
            v-bind:todo="item"//把全局作用域中的值传给子组件
            v-bind:key="item.id"
            v-on:click = "clicknow"
      &gt
        &ltslod&gt&lt/slod&gt //通过此标签可以在组件内部插入任何内容
      &lt/todo-item&gt
    &lt/ol&gt
<strong>局部注册</strong>
var ComponentA = { /* ... */ }；
    new Vue({
      el: '#app',
      components: {
        'component-a': ComponentA,
      }
    })
<strong>在动态组件上使用 keep-alive</strong>
我们更希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来。为了解决这个问题，我们可以用一个 &ltkeep-alive&gt元素将其动态组件包裹起来;
    失活的组件将会被缓存！
    &ltkeep-alive&gt
      &ltcomponent v-bind:is="currentTabComponent"&gt&lt/component&gt
    &lt/keep-alive&gt
异步组件:
    Vue.component('async-example', function (resolve, reject) {
      setTimeout(function () {
        // 向 `resolve` 回调传递组件定义
        resolve({
          template: '<div>I am async!</div>'
        })
      }, 1000)
    })
处理加载状态:
    这里的异步组件工厂函数也可以返回一个如下格式的对象：
    const AsyncComponent = () => ({
      // 需要加载的组件 (应该是一个 `Promise` 对象)
      component: import('./MyComponent.vue'),
      // 异步组件加载时使用的组件
      loading: LoadingComponent,
      // 加载失败时使用的组件
      error: ErrorComponent,
      // 展示加载时组件的延时时间。默认值是 200 (毫秒)
      delay: 200,
      // 如果提供了超时时间且组件加载也超时了，
      // 则使用加载失败时使用的组件。默认值是：`Infinity`
      timeout: 3000
    })
<strong>插槽</strong>
插槽内可以包含任何模板代码，包括 HTML和组件；
父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。
具名插槽：
    有时我们需要多个插槽，slot 元素有一个特殊的 attribute：name。这个 attribute 可以用来定义额外的插槽：
    &ltdiv class="container"&gt
      &ltheader&gt
        &ltslot name="header"&gt&lt/slot&gt
      &lt/header&gt
      &ltmain&gt
        &ltslot&gt&lt/slot&gt
      &lt/main&gt
      &ltfooter&gt
        &ltslot name="footer"&gt&lt/slot&gt
      &lt/footer&gt
    &lt/div&gt
    一个不带 name 的 slot出口会带有隐含的名字“default”。
    在向具名插槽提供内容的时候，我们可以在一个 template 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称：
    &ltbase-layout&gt
      &lttemplate v-slot:header&gt //具名插槽的缩写形式 &lttemplate #header&gt
        &lth1&gtHere might be a page title&lt/h1&gt
      &lt/template&gt
    
      &ltp&gtA paragraph for the main content.&lt/p&gt
      &ltp&gtAnd another one.&lt/p&gt
    
      &lttemplate v-slot:footer&gt
        &ltp&gtHere's some contact info&lt/p&gt
      &lt/template&gt
    &lt/base-layout&gt
作用域插槽：
    为了让 user 在父级的插槽内容中可用，我们可以将 user 作为 &ltslot&gt 元素的一个 attribute 绑定上去：
        &ltspan&gt
          &ltslot v-bind:user="user"&gt
            以插值表达式插入user.lastName 
          &lt/slot&gt
        &lt/span&gt
    绑定在slot元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字：
        &ltcurrent-user&gt
          &lttemplate v-slot:default="slotProps"&gt
            以插值表达式插入 slotProps.user.firstName 
          &lt/template&gt
        &lt/current-user&gt
    独占默认插槽的缩写语法：
        &ltcurrent-user v-slot:default="slotProps"&gt
          以插值表达式插入 slotProps.user.firstName 
        &lt/current-user&gt
        或者：
        &ltcurrent-user v-slot="slotProps"&gt
          以插值表达式插入 slotProps.user.firstName 
        &lt/current-user&gt
    注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：
        无效，会导致警告
        <&ltcurrent-user v-slot="slotProps"&gt
          以插值表达式插入 slotProps.user.firstName 
          &lttemplate v-slot:other="otherSlotProps"&gt
            slotProps is NOT available here
          &lt/template&gt
        &lt/current-user&gt
    解构插槽 Prop：
        &ltcurrent-user v-slot="{ user }"&gt
          以插值表达式插入 user.firstName 
        &lt/current-user&gt
    将 user 重命名为 person：
        &ltcurrent-user v-slot="{ user: person }"&gt
          以插值表达式插入 person.firstName 
        &lt/current-user&gt
    你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：
        &ltcurrent-user v-slot="{ user = { firstName: 'Guest' } }"&gt
          以插值表达式插入 user.firstName 
        &lt/current-user&gt
    动态插槽名：
        动态指令参数也可以用在 v-slot 上，来定义动态的插槽名：
            &ltbase-layout&gt
              &lttemplate v-slot:[dynamicSlotName]&gt
                ...
              <&lt/template&gt
            &lt/base-layout&gt

<strong> Prop </strong>
Prop 类型:
    但是，通常你希望每个 prop 都有指定的值类型。这时，你可以以对象形式列出 prop，这些 property 的名称和值分别是 prop 各自的名称和类型：
        props: {
          title: String,
          likes: Number,
          isPublished: Boolean,
          commentIds: Array,
          author: Object,
          callback: Function,
          contactsPromise: Promise // or any other constructor
        }
Prop 验证:
    Vue.component('my-component', {
        props: {
          // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
          propA: Number,
          // 多个可能的类型
          propB: [String, Number],
          // 必填的字符串
          propC: {
            type: String,
            required: true
          },
          // 带有默认值的数字
          propD: {
            type: Number,
            default: 100
          },
          // 带有默认值的对象
          propE: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
              return { message: 'hello' }
            }
          },
          // 自定义验证函数
          propF: {
            validator: function (value) {
              // 这个值必须匹配下列字符串中的一个
              return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
          }
        }
      })
传递静态或动态 Prop:
    给 prop 传入一个静态的值：只能在传递静态字符串类型时省略v-bind
        &ltblog-post title="My journey with Vue"&gt&lt/blog-post&gt
    prop 可以通过 v-bind 动态赋值:这是一个 JavaScript 表达式而不是一个字符串。
        &ltblog-post v-bind:title="post.title"&gt &lt/blog-post&gt
    包含该 prop 没有值的情况在内，都意味着 `true`：
        &ltblog-post is-published&gt&lt/blog-post&gt
    传入一个对象的所有 property：
        post: {
          id: 1,
          title: 'My Journey with Vue'
        }
        下面的模板：
        &ltblog-post v-bind="post"&gt&lt/blog-post&gt
        等价于：
        &ltblog-post
          v-bind:id="post.id"
          v-bind:title="post.title"
        &gt&lt/blog-post&gt
单向数据流:
    所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。这意味着你不应该在一个子组件内部改变prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。
    这里有两种常见的试图变更一个 prop 的情形：
        这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data property 并将这个 prop 用作其初始值：
            props: ['initialCounter'],
            data: function () {
              return {
                counter: this.initialCounter
              }
            }
        这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：
            props: ['size'],
            computed: {
              normalizedSize: function () {
                return this.size.trim().toLowerCase()
              }
            }
        注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态。     


监听子组件事件：
    通过改变子组件中的事件改变跟实例中data中的数据，因为跟实例中data中的数据绑定在父组件中，所以实现了通过子组件控制父组件的数据；
禁用 Attribute 继承:
    如果你不希望组件的根元素继承 attribute，你可以在组件的选项中设置 inheritAttrs: false。例如：
    Vue.component('my-component', {
      inheritAttrs: false,
      // ...
    })
<h3>过渡 & 动画</h3>
过渡的类名：
    <img src="@/assets/img/过渡类名.png" alt="">
    对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 transition，则 v- 是这些类名的默认前缀。如果你使用了 &lttransition name="my-transition"&gt，那么 v-enter 会替换为 my-transition-enter。
CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。
自定义过渡的类名:他们的优先级高于普通的类名
    enter-class
    enter-active-class
    enter-to-class 
    leave-class
    leave-active-class
    leave-to-class 
显性的过渡持续时间:
    &lttransition :duration="1000"&gt...&lt/transition&gt
    你也可以定制进入和移出的持续时间：
    &lttransition :duration="{ enter: 500, leave: 800 }"&gt...&lt/transition&gt
JavaScript 钩子:
    &lttransition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
    
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    &gt
      <!-- ... -->
    &lt/transition&gt


    // ...
    methods: {
      // --------
      // 进入中
      // --------
    
      beforeEnter: function (el) {
        // ...
      },
      // 当与 CSS 结合使用时
      // 回调函数 done 是可选的
      enter: function (el, done) {
        // ...
        done()
      },
      afterEnter: function (el) {
        // ...
      },
      enterCancelled: function (el) {
        // ...
      },
    
      // --------
      // 离开时
      // --------
    
      beforeLeave: function (el) {
        // ...
      },
      // 当与 CSS 结合使用时
      // 回调函数 done 是可选的
      leave: function (el, done) {
        // ...
        done()
      },
      afterLeave: function (el) {
        // ...
      },
      // leaveCancelled 只用于 v-show 中
      leaveCancelled: function (el) {
        // ...
      }
    }
    
    当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
    推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。

初始渲染的过渡:
    &lttransition appear&gt
      <!-- ... -->
    &lt/transition&gt
同时生效的进入和离开的过渡不能满足所有要求，所以 Vue 提供了过渡模式
    in-out：新元素先进行过渡，完成之后当前元素过渡离开。
    out-in：当前元素先进行过渡，完成之后新元素过渡进入。
    &lttransition name="fade" mode="out-in"&gt
      <!-- ... the buttons ... -->
    &lt/transition&gt
列表过渡:&lttransition-group&gt
<strong>插件</strong>
使用插件：
    通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：
    // 调用 `MyPlugin.install(Vue)`
    Vue.use(MyPlugin)
    
    new Vue({
      // ...组件选项
    })
    也可以传入一个可选的选项对象：
    Vue.use(MyPlugin, { someOption: true })
Vue.js 官方提供的一些插件 (例如 vue-router) 在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()。然而在像 CommonJS 这样的模块环境中，你应该始终显式地调用 Vue.use()：
    // 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
    var Vue = require('vue')
    var VueRouter = require('vue-router')
    
    // 不要忘了调用此方法
    Vue.use(VueRouter)
开发插件：
    Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
        MyPlugin.install = function (Vue, options) {
            // 1. 添加全局方法或 property
            Vue.myGlobalMethod = function () {
              // 逻辑...
            }
          
            // 2. 添加全局资源
            Vue.directive('my-directive', {
              bind (el, binding, vnode, oldVnode) {
                // 逻辑...
              }
              ...
            })
          
            // 3. 注入组件选项
            Vue.mixin({
              created: function () {
                // 逻辑...
              }
              ...
            })
          
            // 4. 添加实例方法
            Vue.prototype.$myMethod = function (methodOptions) {
              // 逻辑...
            }
          }
过滤器：
    Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：



    <h1>vue.js移动旅游网实战教程笔记</h1>

<h3>工具篇</h3>
联调测试模拟上线：
    1.联调（删除mock假数据）
     1.1更改config/index.js
     1.2后端开启php的apache服务器
    2.测试
     2.1在package.json的script中修改 --host 0.0.0.0
     2.2document.documentElement.scrollTop改为body
    3.打包
     3.1修改目录tour
     3.2npm run build
     3.3dist文件放在后端
问题：轮播图、滚动时都会出现文字抖动？；
import '@/assets/style/iconfont.css'
vue给我们提供一个操作dom的属性，ref。绑定在dom元素上时，用起来与id差不多，通过this.$refs来调用;
其实简单的理解就是，当你修改了data的值然后马上获取这个dom元素的值，是不能获取到更新后的值， 你需要使用$nextTick这个回调，让修改后的data值渲染更新到dom元素之后在获取，才能成功。
通过this.$refs.name.style添加的样式会将原本通过this.$refs.name.style添加的样式覆盖；
sublime:
    主菜单栏中的项目选项：可以添加文件夹到左边侧边栏作为项目目录；
    主菜单栏中的首选项选项：可以设置快捷键和管理插件；
    ctrl+左右箭头：光标逐词跳动；
    .class#idname+tab键：可以直接生成拥有类名和id名的div;
    ctrl+enter:直接跳转到下一行；
node.js:
    JavaScript是一个单线程语言，当遇到计算量过大执行时间过长的情况下会停止执行；但是node.js通过事件驱动就解决这个问题；
git:https://blog.csdn.net/u011146511/article/details/78315252
    git使用来记录本地代码的增删改查的记录，github或者码云使用来记录多人之间远程对服务器的代码进行增删改查的记录；

    ssh-keygen -t rsa -C "15664002199"：为邮箱账户设置公钥的指令，生成ssh公钥；
    cat ~/.ssh/id_rsa.pub:查看公钥的指令
    git config --global user.name "刘超奇"：本地设置姓名的指令；
    git config --global user.email "765922449@qq.com"：本地设置邮箱的指令；
    git clone 网址：把远程地址的代码拖到本地；
    master:主枝干；branch:子分枝；
    git pull:把远程仓库中更新的代码给拖下来；
    git checkout 分枝名:切换到分枝上；
    git add . :添加到暂存区；
    git commit -m "说明"：提交到本地仓库；
    git merge 分支名：把缓存好的内容添加主分支上；
    git push:提交到远程仓库；
    git config --list：码云的帮助信息；
phpstudy:
    DNS服务器：将域名转换为ip地址的服务器；
    apache服务器：是存放静态资源的服务器；
    phpstudy:相当于一个远程服务器，包含apache服务器，php,数据库等模块，只不过安装在本地电脑上，方便我们学习使用；
<h3>基础知识篇</h3>
Stylus - 富有表现力的、动态的、健壮的CSS
    1.变量
    2.mixins
link标签遇到就会加载，import加载完成后再引入；
js动画其实就是使用钩子函数；
methods中的函数名可以直接放在插值表达式中进行执行；事件处理函数也可以不带括号；事件类型在js层面需要加$，在html层面需要以v-on:形式；加冒号的属性是动态属性，不加冒号的属性是静态属性；
反单引号之中包含html表签的字符串如果放在插值表达式中，会显示包含html标签的字符串；如果放在v-html指令中则html标签会被执行；
计算属性计算过后会有缓存，只要缓存不改变，无论是否刷新网页都不会在从新计算，直接返回之前的缓存；而methods只要刷新就会从新计算，没有缓存；
计算属性中的函数在插值表达式中不需要加括号，methods中的函数在表达式中需要加括号；
侦听器watch：
    当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
    watch:{
        list(){

        }
        或者
        list:function(){

        }
    }
v-bind:style与v-bind:class都支持对象语法和数组语法的绑定；
v-if/else中相同的模板会被复用，如果添加一个key="name"就不会被复用了；
在v-for循环渲染对象中item是对象的值，index是对象属性，key是对象的索引；通过后缀添加的属性无法渲染，通过对象字面量的方式添加的属性可以渲染；：key="index"为了面对重复的数据不进行渲染，即使是重复的数据也会渲染且不会报错；
事件的参数e包含着有关事件的所有信息，可以通过console.log(e)输出查看；
全局组件用Vue.compenent({})注册声明；局部组件是先写一个对象形式的组件，然后在vue根实例中用compenent:{}方式进行注册；
组件传值：
    传值就是指组件之间的数据交互，可分为父子，子父，同级，复杂；
    父子：v-bind props
    子父：$emit与$on
        在子组件中用$emit发送出事件并可以携带数据，在父组件中用$on监测触发事件；
        在父组件中date是一个对象，在子组件中的date是一个函数；
        $emit发送出事件类型是自定义的但不能包含大写字母，要与父组件上的事件类型相匹配，并且父组件上的事件类型的事件处理函数要父组件中编写，并且以参数形式接受从子组件传来的数据；
    同级：公用bus
        var bus = new Vue()：对象bus作为全局变量可以被局部注册子组件引用，相当于子组件之间沟通的媒介，在发送组件中用bus.$emit('boy',this.info)发送事件，在接收组件中用us.$on('boy',function(info){me.msg = info})触发事件；
    复杂：vuex
动态组件component的is属性添加在 component标签里，is属性的值为想要引用的组件的标签名；
传值校验type，require，default，validator	：接收数据的子组件中
    props:{
            msg:{
                type:String,
                required:true,
                default:'hello,51zxw',
                validator:function(value){ //类似于回调函数，对接收的值进行一些操作
                    return value.length < 20
                }

            }
        },	
单项数据流：	
    当父组件向子组件进行传值时，子组件不能进行修改传过来的数据；如果想要修改数据需要把值赋值给一个新数据，然后修改这个新数据；
    data(){
            return {
                info:''
            }
        },
        created(){
            this.info = this.msg
            console.log(this.info+'test')
        },
具名插槽：在注册组件时的slot标签添加name="aa",在使用组建时标签之间的元素上添加slot="aa";
作用域插槽：用来将组件作用域中的数据传递给组件插槽中的作用域；在注册组件时用&ltslot :msg=msg&gt&lt/slot&gt,在使用组件时用：
        &ltboy&gt
			&lttemplate slot-scope="data"&gt
		        &ltdiv>以插值表达式插入data.msg&lt/div>&gt
			&lt/template&gt
		&lt/boy&gt
1.css动画：过渡动画和animate的使用
2.js动画：钩子动画，velocity的使用
组件的 data 必须是一个函数(除了 new Vue 外的任何地方,因为只存在一个这样的实例)。当 data 的值是一个对象时，它会在这个组件的所有实例之间共享。
对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。
这条规则只和单文件组件有关。你不一定要使用 scoped attribute。设置作用域也可以通过 CSS Modules，那是一个基于 class 的类似 BEM 的策略，当然你也可以使用其它的库或约定。
在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。


v u e - r o u t e r:
&ltbody&gt
	<&ltdiv id="app"&gt  //2.配置vue根实例的作用域标签
		&ltrouter-link to="/"&gtindex&lt/router-link&gt //7.使用路由 
		或者
		&ltrouter-link :to="{name:'index'}"&gtindex&lt/router-link&gt //命名路由
		&ltrouter-link to="/list"&gtlist&lt/router-link&gt 
		&ltrouter-link to="/list/one"&gtlist&lt/router-link&gt 
		&ltrouter-link to="/list/two"&gtlist&lt/router-link&gt 
		&ltrouter-view&gt&lt/router-view&gt  //8.渲染模板内容 ；
		&ltrouter-view name="name"&gt&lt/router-view&gt  //命名视图
		&ltrouter-view name="info"&gt&lt/router-view&gt  //命名视图
		&ltrouter-link to="/s/one"&gts-one&lt/router-link&gt //组件传参
		&ltrouter-link to="/s/two"&gts-two&lt/router-link&gt //组件传参
		&ltbutton @click="change"&gt导航&lt/button&gt
	&lt/div&gt

	&ltscript&gt
	    var pageId = {
			template:`&ltdiv&gt以插值表达式插入item&lt/div&gt`,
			props:['item']
		}
		var router = new VueRouter({ //3.创建vue-router的实例；一个VueRouter实例只对应一个router-view标签和多个router-link标签
			routes:[ //4.配置路由的项
				{
					path:'/', //5.配置路由路径
					redirect:"/list",//路由的重定向
					component:{ //6.渲染的模板内容
						template:`&ltdiv&gt首页&lt/div&gt`
					}
				},
				{  //嵌套路由
					path:'/list',
					component:{ 
						template:`
						&ltdiv&gt
						list页
						&ltrouter-link to="one" append&gtone&lt/router-link&gt //append区分嵌套路由的标志
						&ltrouter-view&gt&lt/router-view&gt
						&lt/div&gt`
					},
					children:[
						{
							path:'one',
							component:{
								template:`&ltdiv&gtone&lt/div&gt`
							}
						}
					]
				},
				{
					path:'/list/:item', //动态路由，多个router-link标签对应一个动态路径路由配置
					component:{
						template:`&ltdiv&gt{{$route.params.item}}&lt/div&gt` //把路由地址item作为参数传入进来
					},
					alias:'/compute' //路由的重定向
				},
				{ //路由组件传值
					path:'/list/:item', 
					component:pageId,
					props:true	
				},
				{
					path:'/s/:item',
					component:pageId,
					props:true
				}，
				{ //命名视图
					path:'/',
					name:'index',//可以当做路径参数传递
					components:{
						name:{
							template:`
									&ltdiv&gt
									首页
									&ltdiv&gtname&lt/div&gt
									&lt/div&gt`
						},
						info:{
							template:`
						&ltdiv&gt
						首页
						&ltdiv&gtname&lt/div&gt
						&ltdiv&gt评论&lt/div&gt
						&lt/div&gt`
						}
					}
				}，
				{ //局部路由首位
					path:'/user',
					component:{
						template:`&ltdiv&gtuser页&lt/div&gt`
					},
					beforeEnter:(to,from,next)=>{
						var login = true
						if(!login){
							next('/login')
						}else{
							next()
						}
				    }
				},
				{
					path:'/user',
					component:{
						template:`&ltdiv&gtuser页&lt/div&gt`
					},
					meta:{  //路由原信息，替代路径判断
						flag:true
					}
				}

			]
		})
        router.beforeEach(function(to,from,next){ //全局路由守卫
			var login = false
			if(!login && to.path === '/user'){
				next('/login')
			}else{
				next()
			}
		})
		或者：路由原信息
		router.beforeEach(function(to,from,next){
			// console.log(to.matched)
			if(to.matched.some(function(item){
				return item.meta.flag
			})){
				next('/login')
			}else{
				next()
			}
		})
		var app = new Vue({  //1.vue-router是一个基于vue的插件，首先要注册vue根实例
			el:"#app",
			router:router //9.注册路由
			methods:{ //编程式导航
				change:function(){
					setTimeout(function(){
						this.router.push('/list/two')
						setTimeout(function(){
						this.router.replace('/list/one')
					},2000)
					},2000)
					this.$router.go(-1)
				}
			}
		})




	&lt/script&gt
	
&lt/body&gt   
&ltdiv id="app"&gt
	根组件：&ltdiv&gt以插值表达式插入this.$store.state.count+1}}&lt/div&gt
	子组件：&ltcounter&gt&lt/counter&gt

	以插值表达式插入this.$store.getters.add(2)}}
	以插值表达式插入add(2)}} 映射后直接用数据add
	以插值表达式插入add(5)}} 映射后直接用数据add
&lt/div>


vuex:
    var ADD = 'ADD'；
    var store = new Vuex.Store({
 		state:{
	 		count:0 //存放数据
 		},
 		getters:{ //有点类似于compute
   			add:state => n =>{
   				return state.count + n
   			}
   		}，
 		mutations:{ //操作更改数据；无法执行异步操作，需要用actions来执行异步操作
	 		increment(state,n){  //传参载荷接收
		 		state.count+=10
	 		}
	 		或者：
	 		increment(state,payload){  //另一种传参载荷接收方式;payload就是载荷的意思
		 		state.count+=payload.n
	 		}
	 		或者：
	 		[ADD](state){ //大写字母命名法
	   				state.count++
	   			}
 		},
 		actions:{ //执行异步操作
	   			incrementAsync({commit}){
	   				setTimeout(()=>{
	   					commit('increment')
	   				},3000)
	   			}
	    }
	})
	store.commit('increment') //触发更改数据的函数
	store.commit('increment')
	store.commit('increment',10) //传参载荷发送
	或者：
	store.commit({ //另一种传参载荷发送方式
	   	type:'increment',
	   	n:10
	   })
	或者：//大写字母命名法，方便与一般的函数进行区分
	store.commit('ADD') //大写字母命名法
	store.dispatch('incrementAsync') //派发异步操作
	console.log(store.state.count)
    Vue.component('counter',{
	   	template:`
	   	&ltdiv @click="add"&gt以插值表达式插入count}}&lt/div&gt`, //映射后直接用数据count
	   	computed:Vuex.mapState(['count']) //映射store中的state中的数据count
        methods:{
	   		...Vuex.mapMutations(['ADD']), 映射store中的state中的数据ADD
	   		add:function(){
	   			this.ADD()
	   			console.log('aa')
	   		}
	   	} 
	})
	var app = new Vue({
	   	  el:"#app",
	   	  store，
	   	  computed:Vuex.mapGetters(['add']) 映射store中的state中的数据add
	   })



<h3>实战篇</h3>	
vue init webpack 项目名：基于webpack初始化“项目名”；
README.md和README.en.md是项目介绍文件；
package.json和package-lock.json：项目的依赖配置文件；
    package.json： npm install 会自动下载此文件中的依赖包
        "dependencies": { //上线时也要依赖的文件
          "vue": "^2.5.2",
          "vue-router": "^3.0.1"
        },
        "devDependencies": { //开发环境时要依赖的文件
            bable:转码工具；
        }
        "engines": { //运行环境
            "node": ">= 6.0.0",
            "npm": ">= 3.0.0"
          },
          "browserslist": [ //浏览器
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ]
        }
    package-lock.json和package.json作用差不多；
index.html:挂载文件，我们的项目是被挂载到这个文件上的；
postcssrc.js:css自动补充文件；
gitignore:在上传代码时，有些东西需要过滤掉不用上传，可以在这里设置，比如测试文件之类的；
editorconfig:编码的一些习惯都可以在这里保存一下；
bablerc:babel是代码转码工具，此文件设置babel项；
static:静态文件，后续的假数据都可以放在这里；
config文件夹：一些基础的设置；
buil文件夹：打包设置文件夹；

引入路径中的.vue类型的文件后缀可以省略；
渲染组件时既可以通过在当前文件引入渲染，也可以在路由中渲染，为了项目的条理清晰的特性还是尽量在路由中渲染；
meta配置：&ltmeta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"&gt
    width=device-width：宽度等于设备宽度；
    initial-scale=1.0：初始的缩放比例是1；
    maximum-scale=1.0：最大的缩放比例是1；
    minimum-scale=1.0：最小的缩放比例是1；
    user-scalable=no:禁止缩放；
border/reset.css:
    border.css:解决移动设备上一像素的问题；
    reset.css:解决厂商不同的问题；
fastclick:解决移动端点击后有300毫秒延迟的问题；
stylus-loader：书写样式的工具；在单文件组件的style标签中添加lang="stylus"即可；
clear指定：清屏；


</pre> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-vue{
  background-image: url(../assets/img/detailBg.jpg);
  padding:0.8rem 0.3rem;
  box-sizing: border-box;
}
pre{
  white-space: pre-wrap;
}
.title{
	text-align: center;
	padding-bottom: 0.3rem;
}
img{
	width: 100%;
}
</style>
