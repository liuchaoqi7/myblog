<template>
  <div class="detail-interview">
    <div class="interview-content">
    <h1 class="title">面试题</h1>
      <p class="interview-desc">面试是一个双向选择的过程，我们面试的时候不要把自己当成一个被挑选的弱势者。前端知识杂却多，有时面试结果不理想，不要怀疑自己。只是在某个方面自己还有欠缺，之后补上就可以了。我们不是在祈求别人给我们一份工作，我们只是在找寻一个适合我们的公司。不妄自菲薄更不骄傲自负，整理好心态，你一定能找到适合自己的公司！！！加油啊
      </p>
      <h1>CSS篇</h1>
      <h3>居中</h3>
      <p>https://juejin.im/post/6844903679242305544#heading-9</p>
      <details>
      	<summary>水平居中</summary>
      	<ol> 
      		<li>行内元素: text-align: center</li>
      	    <li>父子元素宽度都固定的话，设置position:absolute属性，计算出left值就可以了；</li>
      		<li>块级元素: margin: 0 auto</li>
      		<li>子元素宽高固定，margin:auto,将其设置为absolute定位,top,bottom,left,right都设置为0;</li>
      		<li>position:absolute +left:50%+margin-left:-子元素的宽度的一半；</li>
      		<li>position:absolute +left:50%+ transform:translateX(-50%)</li>
      		<li>css3中的计算属性position: absolute;top: calc(50% - 50px);left: calc(50% - 50px);</li>
      		<li>display:flex + justify-content: center</li>
      		<li>tabel单元格中的内容天然就是垂直居中的，只要添加一个水平居中属性text-align:center就好了</li>
      		<li>css新增的table属性，可以让我们把普通元素，变为table元素的现实效果：display: table-cell;text-align: center;vertical-align: middle;要给子元素添加display:inline-block;</li>
      	</ol>
      </details>
      <details>
      	<summary>垂直居中</summary>
      	<ul>
      		<li>设置line-height 等于height(元素内的文字垂直居中)</li>
      		<li>子元素宽高固定，margin:auto,将其设置为absolute定位,top,bottom,left,right都设置为0;</li>
      		<li>position：absolute +top:50%+ transform:translateY(-50%）</li>
      		<li>display:flex + align-items: center</li>
      		<li>display:table+display:table-cell + vertical-align: middle;</li>
      	    <li>vertical-align也可以在垂直方向做到居中，需要将父元素的宽高设置为父元素的高度</li>
      	    <li>writing-mode可以改变文字的显示方向,然后用text-align:center;</li>
      	</ul>
      </details><br>
      <details>
      	<summary>calc, support, media各自的含义及用法？</summary>
      	<ul>
      		<li>@support主要是用于检测浏览器是否支持CSS的某个属性，其实就是条件判断，如果支持某个属性，你可以写一套样式，如果不支持某个属性，你也可以提供另外一套样式作为替补。</li>
      		<li>calc() 函数用于动态计算长度值。 calc()函数支持 "+", "-", "*", "/" 运算；</li>
      		<li>@media 查询，你可以针对不同的媒体类型定义不同的样式:@media screen and (min-width:960px) and (max-width:1200px){}</li>
      	</ul>
      </details>
      <details>
      	<summary>1rem、1em、1vh、1px各自代表的含义？</summary>
      	<ul>
      		<li>rem是全部的长度都相对于根元素html元素。通常做法是html元素设置一个字体大小，然后其他元素的长度单位就为rem。</li>
      		<li>子元素字体大小的em是相对于父元素字体大小;子元素的width/height/padding/margin用em的话是相对于该子元素的font-size</li>
      		<li>vw/vh：全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好。</li>
      	</ul>
      </details>
      <details>
      	<summary>BFC</summary>
      	<ul>
      		<li>BFC（Block Formatting Context）块级元素格式化上下文，通俗点说就是一个块级元素在页面中的渲染模式；</li>
      		<li>由于flaot、position、dispaly和overflow属性会影响外部元素的文档流，为了此独立的块级元素与外部是不相互影响的就需要BFC了；</li>
      		<li>bfc的区域不会与float的元素区域重叠：BFC区域会把浮动的元素剩余宽度给自动填满，此自动填满宽度特性还会把浮动引起的文字环绕给清除；</li>
      		<li>计算bfc的高度时，浮动元素也参与计算，利用此特性可以清除浮动，也可以解决元素的高度塌陷问题；</li>
      	</ul>
      </details>
      <details>
      	<summary>link和@import的区别</summary>
      	<ul>
      		<li>1、link是html的标签，不仅可以加载css还可以定义Rss,rel连接属性；@import是css的语法规则，只能引入样式；</li>
      		<li>2、加载页面时，link是同时加载的，@impor是页面加载完后才加载</li>
      		<li>3、link没有兼容性的问题，而@import只在较高版本的浏览器才可以识别</li>
      		<li>4、link可以通过js插入操作dom，@import 不可以！</li>
      	</ul>
      </details>
      <details>
      	<summary>position:sticky</summary>
      	<ul>
      		<li>单词sticky的中文意思是“粘性的”，position:sticky表现也符合这个粘性的表现。基本上，可以看出是position:relative和position:fixed的结合体——当元素在屏幕内，表现为relative，就要滚出显示器屏幕的时候，表现为fixed。</li>
      		<li>sticky元素效果完全受制于父级元素们</li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <h1>JavaScript篇</h1>
      <h3>数据类型</h3>
      <details>
      	<summary>JavaScript 有几种类型</summary>
      	<ul>
      		<li>基本数据类型：undefined、null、boolean、number、string、symbol(es6的新数据类型)</li>
      		<li>引用数据类型：object、array、function()统称为object</li>
      	</ul>
      </details>
      <details>
      	<summary>数据类型检测</summary>
      	<ul>
      		<li>typeof 对于基本数据类型来说，除了 null(null可以看做一个空对象) 都可以显示正确的类型，typeof 对于对象来说，除了函数都会显示 objec</li>
      		<li>instanceof通过原型链来判断数据类型的:p1 = new Person();p1 instanceof Person // true</li>
      		<li>Object.prototype.toString.call()可以检测所有的数据类型，算是一个比较完美的方法了。</li>
      	</ul>
      </details>
      <details>
      	<summary>原始类型与引用类型有什么区别？</summary>
      	<ul>
      		<li>基本数据类型是存放在栈区的,栈区包括了变量的标识符和变量的值;引用类型是同时保存在栈区和堆区中的，栈区保存变量标识符和指向堆内存的地址，堆区保存引用类型的值；</li>
      		<li>基本数据类型的赋值是简单赋值，赋值前后的两个变量可以参与任何操作而不会相互影响；引用类型的赋值其实是对象保存在栈区地址指针的赋值，所以两个变量指向同一个对象，任何的操作都会互相影响.</li>
      		<li>基本数据类型不可以添加属性和方法，所以基本数据类型的值（变量的值）是不可变的,标识符（变量的名）中指针的指向可以改变；由于引用类型可以添加属性和方法，所以引用类型的值是可以改变的；</li>
      		<li>ECMAScript还提供了三个特殊的引用类型Boolean,String,Number.我们称这三个特殊的引用类型为基本包装类型，也叫包装对象.</li>
      		<li>基本数据类型的比较是值的比较，引用类型的比较是引用的比较</li>
      		<li>使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都是一直保存在内存中.而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁</li>
      	</ul>
      </details>
      <h3>作用域</h3>
      <details>
      	<summary>变量声明提升</summary>
      	<ul>
      		<li>在 JavaScript 中，函数声明（function aa(){}）与变量声明（var）经常被 JavaScript 引擎隐式地提升到当前作用域的顶部。</li>
      		<li>函数声明的优先级高于变量，如果变量名跟函数名相同且未赋值，则函数声明会覆盖变量声明</li>
      	</ul>
      </details>
      <details>
      	<summary>作用域链（作用域的层级关系）</summary>
      	<ul>
      		<li>因为函数的嵌套形成作用域的层级关系。当函数执行时，从当前作用域开始搜，没有找到的变量，会向上层作用域查找，直至全局函数，这就是作用域链。</li>
      	</ul>
      </details>
      <details>
      	<summary>闭包</summary>
      	<ul>
      		<li>闭包的实质是因为函数嵌套而形成的作用域链</li>
      		<li>闭包的定义即：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包</li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <h3>原型和继承</h3>
      <p>https://www.cnblogs.com/leftJS/p/10943482.html</p>
      <details>
      	<summary>js 创建对象的几种方式</summary>
      	<ul>
      		<li>var obj={};</li>
      		<li>var obj=new Object();</li>
      		<li>new一个构造函数:
              <pre>
                function Pel(){};
                var p=new Pel();
                p.name="hu";
                p.age="25";
                p.address=function(){}
              </pre>
      		</li>
      		<li>var test = Object.create({x:1});</li>
      	</ul>
      </details>
      <details>
      	<summary>一句话解析什么是原型链</summary>
      	<ul>
      		<li>遍历一个实列的属性时，先遍历实列对象上的属性，再遍历它的原型对象，一直遍历到Object</li>
      	</ul>
      </details>
      <details>
      	<summary>apply、call、bind</summary>
      	<ul>
      		<li>call、apply和bind是Function对象自带的三个方法，都是为了改变函数体内部 this 的指向。</li>
      		<li>apply 、 call 、bind 三者第一个参数都是 this 要指向的对象，也就是想指定的上下文；</li>
      		<li>apply 、 call 、bind 三者都可以利用后续参数传参；</li>
      		<li>call 传入参数列表,apply 传入数组;</li>
      		<li>bind() 方法会创建一个 新函数，当调用这个新函数时，新函数会以创建它时传入 bind() 方法的第一个参数 作为 this，传入bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。</li>
      	</ul>
      </details>
      <details>
      	<summary>说一下事件代理？</summary>
      	<ul>
      		<li>事件委托是指将事件绑定到目标元素的父元素上，利用冒泡机制触发该事件</li>
      	</ul>
      </details>
      <details>
      	<summary>target、currentTarget的区别？</summary>
      	<ul>
      		<li>currentTarget当前所绑定事件的元素;target当前被点击的元素</li>
      	</ul>
      </details>
      <details>
      	<summary>const、let、var的区别</summary>
      	<ul>
      		<li>let块级作用域，不存在预解析，不存在变量提升，存在暂时性死区，此外let不允许重复声明</li>
      		<li>const特点与let相同，不同的是const声明常量，一旦声明，常量的值不可以改变。</li>
      		<li>var声明全局变量</li>
      	</ul>
      </details>
      <details>
      	<summary>js中的内存泄漏</summary>
      	<ul>
      		<li>内存泄露是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。</li>
      		<li>当页面中元素被移除或替换时，若元素绑定的事件仍没被移除，在IE中不会作出恰当处理，此时要先手工移除事件，不然会存在内存泄露。把事件处理函数设为null解绑，或者通过事件委托的方式来避免有事件解绑导致的内存泄漏</li>
      		<li>尽量减少全局变量的声明；</li>
      		<li>把不需要的定时器给即使清除；</li>
      	</ul>
      </details>
      <details>
      	<summary>如何理解JavaScript中的this？</summary>
      	<ul>
      		<li>this是 JavaScript 语言的一个关键字。</li>
      		<li>它是函数运行时，在函数体内自动生成的一个对象，只能在函数体内使用。</li>
      		<li>函数的不同使用场合，this有不同的值。总的来说，this 就是函数运行时所在的环境对象。下面分四种情况，详细讨论 this 的用法。</li>
      		<li>当函数作为对象的方法被调用时， this 指向该对象</li>
      		<li>当函数作为普通函数被调用时，this 指向全局对象(在浏览器的 JavaScript 里指向 window)</li>
      		<li>当函数作为构造函数被使用时，this 指向返回的这个对象</li>
      		<li>call 或 apply 调用</li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <h3>数据请求</h3>
      <details>
      	<summary>get、post的区别</summary>
      	<ul>
      		<li>1.get传参方式是通过地址栏URL传递，是可以直接看到get传递的参数，post传参方式参数URL不可见，get把请求的数据在URL后通过？连接，通过&进行参数分割。psot将参数存放在HTTP的包体内</li>
      		<li>2.get传递数据是通过URL进行传递，对传递的数据长度是受到URL大小的限制，URL最大长度是2048个字符。post没有长度限制</li>
      		<li>3.get后退不会有影响，post后退会重新进行提交</li>
      		<li>4.get请求可以被缓存，post不可以被缓存</li>
      		<li>5.get请求只URL编码，post支持多种编码方式</li>
      		<li>6.get请求的记录会留在历史记录中，post请求不会留在历史记录</li>
      		<li>7.get只支持ASCII字符，post没有字符类型限制</li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <h1>vue.js篇</h1>
      <details>
      	<summary>说说你对 SPA 单页面的理解，它的优缺点分别是什么？</summary>
      	<ul>
      		<li>优点：用户体验好、快；SPA 相对对服务器压力小；前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；</li>
      		<li>缺点：初次加载耗时多；SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。</li>
      	</ul>
      </details>
      <details>
      	<summary>v-show 与 v-if 有什么区别？</summary>
      	<ul>
      		<li>v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。</li>
      		<li>v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。</li>
      		<li>所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。</li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>Class 与 Style 如何动态绑定？</summary>
      	<ul>
      		<li> 两者可以通过对象语法和数组语法进行动态绑定；</li>
      		<li>v-bind:Class用来给标签动态添加或者移除类名；v-bind:style用来动态添加或者移除(三元表达式)属性</li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>怎样理解 Vue 的单向数据流？</summary>
      	<ul>
      		<li>所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。</li>
      		<li>额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。</li>
      	</ul>
      </details>
      <details>
      	<summary>computed 和 watch 的区别和运用的场景？</summary>
      	<ul>
      		<li>computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；（购物车）</li>
      		<li>watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；（路由的检测）</li>
      	</ul>
      </details>
      <details>
      	<summary>直接给一个数组项赋值，Vue 能检测到变化吗？</summary>
      	<ul>
      		<li>由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：</li>
      		<li>当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
              <ol>
              	<li>Vue.set(vm.items, indexOfItem, newValue)</li>
              	<li>vm.$set(vm.items, indexOfItem, newValue)</li>
              	<li>vm.items.splice(indexOfItem, 1, newValue) </li>
              </ol>
      		</li>
      		<li>当你修改数组的长度时，例如：vm.items.length = newLength
              <ol>
              	<li>vm.items.splice(newLength) </li>
              </ol>
      		</li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>谈谈你对 Vue 生命周期的理解？</summary>
      	<ul>
      		<li><img src="@/assets/img/vue实例生命周期图.jpg" alt=""></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>Vue 的父组件和子组件生命周期钩子函数执行顺序？</summary>
      	<ul>
      		<li>Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：</li>
      		<li>加载渲染过程:父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted</li>
      		<li>子组件更新过程:父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated</li>
      		<li>父组件更新过程:父 beforeUpdate -> 父 updated</li>
      		<li>销毁过程:父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed</li>
      	</ul>
      </details>
      <details>
      	<summary>在哪个生命周期内调用异步请求？</summary>
      	<ul>
      		<li>可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：</li>
      		<li>能更快获取到服务端数据，减少页面 loading 时间；</li>
      		<li>ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；</li>
      	</ul>
      </details>
      <details>
      	<summary>在什么阶段才能访问操作DOM？</summary>
      	<ul>
      		<li>在钩子函数 mounted 被调用前，Vue 已经将编译好的模板挂载到页面上，所以在 mounted 中可以访问操作 DOM。</li>
      		<li>更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：</li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>父组件可以监听到子组件的生命周期吗？</summary>
      	<ul>
      		<li>在子组件相应的钩子函数中利用emmit()出发父组件中的事件处理函数</li>
      		<li>更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：
      		  <pre>
      		  	//  Parent.vue
                 &ltChild @hook:mounted="doSomething" &gt&lt/Child&gt
                  doSomething() {
                    console.log('父组件监听到 mounted 钩子函数 ...'); 
                },
                   //  Child.vue 
                   mounted(){ 
                   console.log('子组件触发 mounted 钩子函数 ...');
                 }, 
                  // 以上输出顺序为：
                  // 子组件触发 mounted 钩子函数 ...
                 // 父组件监听到 mounted 钩子函数 ...  
      		  </pre>
      		</li>
      		<li>当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。</li>
      	</ul>
      </details>
      <details>
      	<summary>谈谈你对 keep-alive 的了解？</summary>
      	<ul>
      		<li>keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：</li>
      		<li>一般结合路由和动态组件一起使用，用于缓存组件；</li>
      		<li>提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；</li>
      		<li>对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。</li>
      	</ul>
      </details>
      <details>
      	<summary>组件中 data 为什么是一个函数？</summary>
      	<ul>
      		<li>因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。</li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>v-model 的原理？</summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>Vue 组件间通信有哪几种方式？</summary>
      	<ul>
      		<li>props / $emit 适用 父子组件通信</li>
      		<li>ref 与 $parent / $children 适用 父子组件通信:ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例</li>
      		<li>EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信</li>
      		<li>$attrs/$listeners 适用于 隔代组件通信:
               <ol class="details">
               	<li>$attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 inheritAttrs 选项一起使用。</li>
               	<li>$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件</li>
               </ol>
      		</li>
      		<li>provide / inject 适用于 隔代组件通信:祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。</li>
      		<li>Vuex 适用于 父子、隔代、兄弟组件通信</li>
      	</ul>
      </details>
      <details>
      	<summary>你使用过 Vuex 吗？</summary>
      	<ul>
      		<li>State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。</li>
      		<li>Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。</li>
      		<li>Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。</li>
      		<li>Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。</li>
      		<li>Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。</li>
      	</ul>
      </details>
      <details>
      	<summary>使用过 Vue SSR 吗？说说 SSR？</summary>
      	<ul>
      		<li>SSR大致的意思就是vue在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的html 片段直接返回给客户端这个过程就叫做服务端渲染。</li>
      		<li>服务端渲染的优点：</li>
      		  <ul class="details">
      		  	<li>更好的 SEO： 因为 SPA 页面的内容是通过 Ajax 获取，而搜索引擎爬取工具并不会等待 Ajax 异步完成后再抓取页面内容，所以在 SPA 中是抓取不到页面通过 Ajax 获取到的内容；而 SSR 是直接由服务端返回已经渲染好的页面（数据已经包含在页面中），所以搜索引擎爬取工具可以抓取渲染好的页面；</li>
      		  	<li>更快的内容到达时间（首屏加载更快）： SPA 会等待所有 Vue 编译后的 js 文件都下载完成后，才开始进行页面的渲染，文件下载等需要一定的时间等，所以首屏渲染需要一定的时间；SSR 直接由服务端渲染好页面直接返回显示，无需等待下载 js 文件及再去渲染等，所以 SSR 有更快的内容到达时间；</li>
      		  </ul>
      		<li>服务端渲染的缺点：</li>
      		  <ul class="details">
      		  	<li>更多的开发条件限制： 例如服务端渲染只支持 beforCreate 和 created 两个钩子函数，这会导致一些外部扩展库需要特殊处理，才能在服务端渲染应用程序中运行；并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，服务端渲染应用程序，需要处于 Node.js server 运行环境；</li>
      		  	<li>更多的服务器负载：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 ( high traffic ) 下使用，请准备相应的服务器负载，并明智地采用缓存策略。</li>
      		  </ul>
      	</ul>
      </details>
      <details>
      	<summary>vue-router 路由模式有几种？</summary>
      	<ul>
      		<li>hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；</li>
      		<li>history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；</li>
      		<li>abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.</li>
      	</ul>
      </details>
      <details>
      	<summary>能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？</summary>
      	<ul>
      	    <li>hash 模式的实现原理
      	        <ol class="detail">
      		       <li>location.hash 的值就是 URL 中 # 后面的内容</li>
      		       <li>hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；</li>
      		       <li>可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用 JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；</li>
      		       <li>我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。</li>
      		    </ol>
      		</li>
      		<li>history 模式的实现原理
      			<ol class="detail">
      				<li>history.pushState() 和 history.repalceState()这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：</li>
      				<li></li>
      				<li></li>
      				<li></li>
      			</ol>
      		</li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>什么是 MVVM？</summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>Vue 是如何实现数据双向绑定的？</summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>Vue 框架怎么实现对象和数组的监听？</summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>虚拟 DOM 的优缺点？</summary>
      	<ul>
      		<li>保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；</li>
      		<li>无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；</li>
      		<li>跨平台： 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。</li>
      		<li>缺点：无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。</li>
      	</ul>
      </details>
      <details>
      	<summary>虚拟 DOM 实现原理？</summary>
      	<ul>
      		<li>用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；</li>
      		<li>diff 算法 — 比较两棵虚拟 DOM 树的差异；</li>
      		<li>pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。</li>
      	</ul>
      </details>
      <details>
      	<summary>你有对 Vue 项目进行哪些优化？</summary>
      	<p><a href="https://juejin.im/post/6844903913410314247">https://juejin.im/post/6844903913410314247</a></p>
      	<ul>
      		<li>代码层面的优化
                <ol class="detail">
                	<li>v-if 和 v-show 区分使用场景</li>
                	<li>computed 和 watch 区分使用场景</li>
                	<li>v-for 遍历必须为 item 添加 key，且避免同时使用 v-if</li>
                	<li>长列表性能优化</li>
                	<li>事件的销毁</li>
                	<li>图片资源懒加载</li>
                	<li>路由懒加载</li>
                	<li>第三方插件的按需引入</li>
                	<li>优化无限列表性能</li>
                	<li>服务端渲染 SSR or 预渲染</li>
                </ol>
      		</li>
      		<li>
      			Webpack 层面的优化
      			<ol class="detail">
      				<li>Webpack 对图片进行压缩</li>
      				<li>减少 ES6 转为 ES5 的冗余代码</li>
      				<li>提取公共代码</li>
      				<li>模板预编译模板预编译</li>
      				<li>提取组件的 CSS</li>
      				<li>优化 SourceMap</li>
      				<li>构建结果输出分析</li>
      				<li>Vue 项目的编译优化</li>
      			</ol>
      		</li>
      		<li>基础的 Web 技术的优化
                <ol class="detail">
                	<li>开启 gzip 压缩</li>
                	<li>浏览器缓存</li>
                	<li>CDN 的使用</li>
                	<li>使用 Chrome Performance 查找性能瓶颈</li>
                </ol>
      		</li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>Vue 中的 key 有什么作用？</summary>
      	<ul>
      		<li>更准确</li>
      		<li>更快速</li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>vue 的优点是什么？</summary>
      	<ul>
      		<li>数据驱动避免了大量的DOM操作</li>
      		<li>组件化使得代码模块更便于重复使用，开发效率得到了很大的提升；同时也达到了低耦合的特性；</li>
      		<li>独立开发，前后端分离，提升了开发效率；</li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>vue实现路由懒加载及组件懒加载的方式</summary>
      	<ul>
      		<li>常用的懒加载方式有两种：</li>
      		<li>vue异步组件实现懒加载
                <pre>
                	import Vue from 'vue'
                    import Router from 'vue-router'
                    　　/* 此处省去之前导入的HelloWorld模块 */
                    Vue.use(Router)
                     
                    export default new Router({
                     routes: [
                      {
                       path: '/',
                       name: 'HelloWorld',
                       component: resolve=>(require(["@/components/HelloWorld"],resolve))
                      }
                     ]
                    })
                </pre>
      		</li>
      		<li>ES 提出的import方法，（------最常用------）
                <pre>
                	import Vue from 'vue'
                    import Router from 'vue-router'
                    Vue.use(Router)
                    const HelloWorld = ()=>import("@/components/HelloWorld")
                    export default new Router({
                     routes: [
                      {
                       path: '/',
                       name: 'HelloWorld',
                       component:HelloWorld
                      }
                     ]
                    })
                </pre>
      		</li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary>vue-router 有哪几种导航钩子?</summary>
      	<ul>
      		<li>全局导航钩子
                <ol class="detail">
                	<li>router.beforeEach(to, from, next)</li>
                	<li>router.beforeResolve(to, from, next)</li>
                	<li>router.afterEach(to, from ,next)</li>
                </ol>
      		</li>
      		<li>组件内钩子
                <ol class="detail">
                	<li>beforeRouteEnter</li>
                	<li>beforeRouteUpdate</li>
                	<li>beforeRouteLeave</li>
                </ol>
      		</li>
      		<li>单独路由独享组件
                <ol class="detail">
                	<li>beforeEnter</li>
                </ol>
      		</li>
      	</ul>
      </details>
      <details>
      	<summary>自定义指令(v-check, v-focus) 的方法有哪些? 它有哪些钩子函数? 还有哪些钩子函数参数</summary>
      	<ul>
      		<li>全局定义指令：在 vue 对象的 directive 方法里面有两个参数, 一个是指令名称, 另一个是函数。</li>
      		<li>组件内定义指令：directives</li>
      		<li>钩子函数: bind(绑定事件出发)、inserted(节点插入时候触发)、update(组件内相关更新)</li>
      		<li>钩子函数参数： el、binding</li>
      	</ul>
      </details>
      <details>
      	<summary>vuex 的 getter 特性是什么</summary>
      	<ul>
      		<li>getter 可以对 state 进行计算操作，它就是 store 的计算属性</li>
      		<li>虽然在组件内也可以做计算属性，但是 getters 可以在多给件之间复用</li>
      		<li>如果一个状态只在一个组件内使用，是可以不用 getters</li>
      	</ul>
      </details>
      <details>
      	<summary>vue 中 ajax 请求代码应该写在组件的 methods 中还是 vuex 的 action 中</summary>
      	<ul>
      		<li>如果请求来的数据不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入 vuex 的 state 里</li>
      		<li>如果被其他地方复用，请将请求放入 action 里，方便复用，并包装成 promise 返回</li>
      	</ul>
      </details>
      <details>
      	<summary>不用 vuex 会带来什么问题</summary>
      	<ul>
      		<li>可维护性会下降，你要修改数据，你得维护 3 个地方</li>
      		<li>可读性下降，因为一个组件里的数据，你根本就看不出来是从哪里来的</li>
      		<li>增加耦合，大量的上传派发，会让耦合性大大的增加，本来 Vue 用 Component 就是为了减少耦合，现在这么用，和组件化的初衷相背</li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      <details>
      	<summary></summary>
      	<ul>
      		<li></li>
      		<li></li>
      	</ul>
      </details>
      



    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-interview{
    position: relative;
    background-image: url(../assets/img/detailBg.jpg)
}
.title{
    text-align: center;
}
.interview-content{
	padding: 0.3rem;
}
.interview-desc{
	padding: 0.5rem 0;
}
.details>li{
	margin-left: 0.2rem;
	list-style-type: disc;
}
</style>
