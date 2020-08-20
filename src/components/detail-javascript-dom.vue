<template>
  <div class="detail-javascript-dom">
    <h1>《JavaScript DOM 编程艺术》观后感</h1>
    <p>之前一直都是通过视频和搜索引擎来学习前端开发，但是对很多知识点都是一知半解，而且还很零碎不容易形成知识体系进行记忆，自己一直为此感到很苦恼；自己之所以从一开始没有选择通过书籍来学习前端开发，认为视频讲解知识更直白易懂，当然这也是视屏学习的优点，但是不够深入、零碎的缺点同时暴露出来；通过阅读《JavaScript DOM 编程艺术》这本书让我意识到，虽然阅读书籍不像观看视屏那样直白易懂，但是却能深入全面的学习前端开发知识点；视频学习和书籍学习两者能达到优缺点互补，更好的进行学习；早期学习基础知识确实不错，但是现在自己已经有了一定的学习基础，需要更深、更全面的进阶学习，所以现阶段阅读书籍学习是一个明智的选择。</p>
    <P>《JavaScript DOM 编程艺术》是一本入门级的书，但是这本书层层递进、循循善诱的排版结构非常容易让读者对前端开发有一个全面大概的了解；虽然说这本书中涉及到对处理浏览器兼容性的知识点有点过时，但是这种解决问题的思路还是很重要的，以后很有可能把这种思路应用的其他的地方；并且这本书通过大量的实例，还把一些之前一直很困惑自己的渐进增强、向后兼容、平稳退化等概念讲解的很到位，总之这是一本对自己很有价值的书。自己有必要对这本书在第一遍阅读完后进行第二遍的笔记整理，然后再通过《JavaScript高级程序设计》进行更加深入全面的学习。</P>
    <h1>《JavaScript DOM 编程艺术》阅读笔记</h1>
    <strong>渐进增强：</strong>把不同的拓展功能模块、核心内容功能模块逐次的分离开来且相互之间可以互不影响，然后再把单个的拓展功能模块逐次的添加到核心内容功能模块之上；<br>
    <strong>平稳退化：</strong>在页面的部分拓展功能模块由于浏览器不兼容等原因无法表现时，可以放弃拓展功能模块的表现并且不影响核心内容功能模块的正常表现；
    <p>关键字：</p>
    <p class="text_indent">return:跳出当前代码，不再继续往下执行；return false:把false传递给所属的事件处理函数，告诉事件处理函数当前事件没有发生阻止其默认行为,并跳出当前代码，不再继续往下执行；return true :跳出当前代码，传递true值给所属函数(疑问：
    为什么有的地方要传值true)；continue:跳出当前循环，开始下一次循环；</p>
    <p>疑问：try、catch关键字的意思和用法；</p>
    <p>疑问：硬编码是直接编写在脚本里不能轻易改变的意思吗？也就是常量吧；</p>
    <h4>前言</h4>
    <p>归根结底，再复杂的代码都是思想和概念的体现。</p>
    <p>其实没有人能把一种程序设计语言的语法和关键字都记住，如果有拿不准的地方可以查阅参考书就行了，就像遇到不会写的字可以查阅一下字典一样。</p>
    <h2>第一章：JavaScript简史</h2>
    <div class="box_wrap_header">
        <div class="box_header">JavaScript</div> 
    </div>
    <div>
        <div class="box_line"></div>
    </div>
    <div class="box_line_bottom_none_wrap">
        <div class="box_line_bottom_none"></div>
        <div class="box_line_bottom_none border_left_none"></div>
    </div>
    <div class="box_wrap float_clear_both">
        <div>ECMAScript <br>（由ECMA制定的核心与基础）</div>
        <div>DOM <br>（由W3C制定的标准）</div>
        <div>BOM</div>
    </div><br><br>
    <h3 class="float_clear_both margin_top">JavaScript起源</h3>
    <p>JavaScript诞生于1995年。</p>
    <p>在95年之前，人们都是通过服务器端进行验证表单，但是这样会增加服务器端的压力，同时验证交互时间较长影响用户体验；于是在95年的时候有人开发了一种可以在用户端进行表单验证的脚本语言--JavaScript;之后随着JavaScript的发展，它本身所能实现的功能越来越多，如今在前端开发领域占据着重要的地位。</p>
    <p>在JavaScript发展初期，各大浏览器厂商并没有一个统一的JavaScript标准，所以这对于开发人员造成了很大的不便，所以各大浏览器厂商共同成立了一个组织--欧洲计算机制造商协会（ECMA）,一致认同由ECMA制定JavaScript的标准--ECMAScript，从此以后各大浏览器厂商以ECMAScript为JavaScript的核心和基础进行开发JavaScript及其拓展功能。</p>
    <h3>DOM(文档对象模型)</h3>
    <p>DOM(文档对象模型):是一套对文档内容进行抽象化和概念化的方法,也是一种得到公认的API(应用程序接口)。其实也可以简单理解成是文档内容的地图及通过地图操作实物的方法。</p>
    <p>DOM等级：</p>
    <p class="text_indent">在还未形成统一标准之前的DOM被称为第0级DOM(DOM0)。</p>
    <p>DHTML(动态HTML，即HTML、CSS、JavaScript三者结合的产物，不是超文本标记语言，是靠DOM把这三者凝聚在一起的，本质上和今天的HTML5的类似):早期主要是html和css两者对页面的静态组合，JavaScript所占比重很小；当JavaScript对页面操作功能大幅度增加后，页面的动态交互也大量增加，所以此时的HTML称作动态HTML，即DHTML。但是由于早期不同的浏览器厂商都有着各自不同的操作文档的方法，这给开发人员带来了很大的麻烦，W3C为了解决此问题制定了一个标准化的DOM(DOM1),此后各大浏览器厂商都以此标准开发浏览器，于此同时，DHTML成为了计算机领域的历史。并且W3C制定的标准化的DOM可以让任何一种程序设计语言对使用任何一种标记语言编写出来的任何一份文档进行操控。W3C对DOM的定义：一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态地访问和修改文档的内容、结构和样式。</p> 
    <p>虽然本书的重点是教会你如何通过JavaScript使用DOM,但是当你需要使用诸如PHP或者Python之类的程序设计语言去解析XHL文档的时候，你获得的DOM新知识将会有很大的帮助。</p>
   <h2>第二章：JavaScript语法</h2>
   <p>用JavaScript编写的代码必须通过HTML/XHTML文档才能执行。</p>
   <p>由于HTML文档是由上向下依次执行的，所以最好把&ltscript src="js文件名.js"&gt&lt/script&gt放在最后。</p>
   <p>由于HTML脚本语言可以被多种脚本程序语言操作控制，所以在&ltscript &gt&lt/script&gt中用type="text/javascript"声明脚本控制语言的类型，由于在HTML文档中&ltscript &gt&lt/script&gt的type属性默认值是"text/javascript"，所以type="text/javascript"可以省略不写。</p>
   <p>程序设计语言分为解释型和编译型两大类。</p>
   <p class="text_indent">Java或C++等语言是编译型语言，需要通过编译器把编写好的源代码翻译成可以直接在计算机上执行的文件；而JavaScript是解释型语言，编写好的源代码需要通过浏览器的解释器解释和执行才可以。</p>
   <p class="text_indent">用编译型语言编写的代码有错误，这些错误在代码编译阶段就能发现；而解释型语言代码中的错误只能等到解释器执行到有关代码时才能发现；</p>
   <p class="text_indent">与解释型语言相比，编译型语言往往速度更快，可移植性更好，但是它的学习曲线也更加陡峭。</p>
   <p class="text_indent">JavaScript的优点就是入门相对容易；</p>
   <p>JavaScript的脚本都是有一系列的指令构成，这些指令叫做语句；每一行是一个语句，每一个语句之间需要用分号来分割它们；这样不仅可以方便阅读，这样还可以方便追踪代码的执行。</p>
   <p>JavaScript的注释方式：</p>
   <p class="text_indent">单行注释：//或者&lt--;</p>
   <p class="text_indent">多行注释：/*所要注释的内容*/;</p>
   <p>把值存入变量的操作称为赋值。一个变量被赋值以后，我们就说该变量包含这个值。</p>
   <p>JavaScript允许程序员直接对变量赋值而无需事先声明；如果对未声明的变量进行赋值，复制操作将自动声明该变量；出于良好习惯的养成还是建议赋值之前声明变量。</p>
   <p>一个声明变量的关键字Var可以一次声明多个变量，且用逗号隔开：var mood="sad",sad=27;</p>
   <p>在JavaScript语言里，变量和其他语法元素的名字是区分字母大小写的；变量名中是不允许包含空格和标点符号（"$"除外）；允许变量命中包含字母、数字、美元符号和下划线（但第一个字符不允许是数字）；</p>
   <p>通常驼峰格式的命名方法是函数名、方法名和对象属性名命名的首选格式。</p>
   <p>变量的值叫做字面量；</p>
   <p>有些语言要求在声明变量的同时还要声明变量的数据类型，这种做法叫做类型声明。必须明确类型声明的语言称为强类型语言。JavaScript不需要进行数据类型声明，因此它是一种弱类型语言；</p>
   <p>变量的值是字符串的情况下，如果字符串里包含单引号外部则用双引号，如果字符串内部包含双引号外部则用单引号；如果外部是单引号，内部也用单引号的话，内部的单引号则需要转义字符\,双引号则是同样;</p>
   <p>带小数点的数值称为浮点数；</p>
   <p>如果某个变量在任意时刻都只能是一个值，那这个变量就是标量；字符串、数字、布尔值都是标量；如果想用一个变量存储一组数值就需要用到数组；</p>
   <p>数组是一种特殊的对象--Array；</p>
   <p>数组的声明方式：</p>
   <p class="text_indent">var arrayName=Array();   </p>
   <p class="text_indent">var arrayName=Array(数组长度值);   </p>
   <p class="text_indent">var arrayName=Array(单个数组项，单个数组项，单个数组项，单个数组项.......);   </p>
   <p class="text_indent">var arrayName=[单个数组项，单个数组项，单个数组项，单个数组项.......];   </p>
   <p>向数组中添加元素的操作称为填充，在填充单个数组元素时需要标注数组的下标；</p>
   <p>关联数组：下标不是默认数字，而是自定义的数组；本质上在创建关联数组时，其实创建的是Array对象的属性；在JavaScript中所有变量实际上都是某种类型的对象；</p>
   <p>对象的创建方法：</p>
   <p class="text_indent">关键字创建法：var objectName=Object();objectName.attrName1=attrValue1;objectName.attrName2=attrValue2;objectName.attrName3=attrValue3;</p>
   <p class="text_indent">花括号创建法：var objectName={attrName1：attrValue1，attrName2：attrValue2，attrName3：attrValue3......
   }</p>
   <p>操作符：</p>
   <p class="text_indent">累加操作符“++”可以看做year=year+1的缩写；累减操作符“--”可以看做year=year-1的缩写；</p>
   <p>加号操作符“+”既可以进行加法运算又可以进行字符串的拼接操作；当把值为数字的变量进行字符串拼接时，变量的数据类型将自动从数字类型转变为字符串类型；如果把值为数字的两个变量用“+”操作符来链接时则结果将是一个数值；如果值为被引号包含的数字的变量的数据类型为字符串；累加赋值操作符“+=”是先累加在赋值；</p>
   <p>如果if语句中的花括号部分只包含着一条语句的话，那就可以不使用花括号，这条if语句的全部内容写在同一行上；</p>
   <p>if(a=b){};判断的是赋值后的结果，在a=false情况下是假，其余情况下是真；</p>
   <p>false和空字符串的值是相等的，但是数据类型是不同的；“==”是只比较数值大小，不比较数据类型；“===”是既比较数值的大小，又比较数据的类型；不等于符号话是把等号的第一个符号改成“！”就行了；</p>
   <p>逻辑操作符：逻辑与“&&”、逻辑或“||”，逻辑非“！”是对结果取反；</p>
   <p>if条件语句是只执行一次，而循环语句在满足条件情况下可以反复执行数次；</p>
   <p>在while循环语句中，循环体可能一次都不会被执行；在do{}while()循环语句中，循环体至少被执行一次；</p>
   <p>for循环语句其实是While循环语句的变形结构，使得结构更加紧凑清晰；for(key in array){}是用来遍历关联数组的一个循环体，key是数组的下标；</p>
   <p>函数就是一组可以随时调用的代码；</p>
   <P>在JavaScript中提供了很多的内置函数，alert()就是一例；</P>
   <p>函数不仅能够以参数的形式接收数据，同时还可以返回数据，这需要用到return;函数的真正价值体现在，我们还可以把他们当做一种数据类型来用，这意味着可以把一个函数的调用结果赋值给一个变量；</p>
   <P>在给变量命名时采用下划线命名法，在给函数命名时采用驼峰命名法；这样在阅读代码时就能识别出哪个是函数哪个是变量了；</P>
   <p>全局变量可以在脚本的任何位置被引用，全局变量的作用域是整个脚本；局部变量只存在于声明他的那个函数的内部，在那个函数的外部无法引用它，局部变量的作用域仅限于某个特定的函数。</p>
   <p>如果在一个函数的内部不小心使用了某个全局变量的名字，即使本意是想使用一个局部变量，JavaScript也会认为是在引用那个全局变量。这个问题的解决的办法：可以用var关键字明确的为函数变量设定作用域。如果在某个函数中使用了var,即使函数外部有同名的全局变量，那个变量就将变成一个局部变量，它只存在于这个函数的上下文中；反之，如果没有使用var,那这个函数中的变量就将被视为一个全局变量，如果脚本里已经存在了一个与之同名的全局变量，这个函数就会改变那个全局变量的值。</p>
   <p>在定义一个函数时，我们一定要把它内部的变量全部明确的声明为局部变量；如果总是在函数里使用var关键字来定义变量，就能避免任何形式的二义性隐患。</p>
   <p>属性是隶属于某个特定对象的变量；方法是只有某个特定对象才能调用的函数；对象就是由一些属性和方法组合在一起而构成的一个数据实体。在JavaScript里属性和方法都是用“点”语法来访问。</p>
   <p>为给定对象创建一个新实例需要用到new关键字：var jeremy=new Person;jeremy.age</p>
   <p>数组其实就是JavaScript中内置的一个特殊对象，当我们用new关键字去初始化一个数组时，其实是在创建一个Array对象的新实例：var beatle=new Array();Math对象和Date对象分别提供了许多的方法供人们处理数值和日期。</p>
   <p>宿主对象：是由浏览器这个运行环境本身定义好的一些对象，不是JavaScript语言本身定义的，常用的宿主对象如：document;不常用的宿主对象如：window（浏览器窗口对象）、Form、Image、Element。</p>
   <h2>第三章：DOM</h2>
   <P>浏览器在加载网页文档时，会把网页文档转换成一个文档对象document。</P>
   <p>与某个特定对象相关联的变量被称为这个对象的属性；只能通过某个特定对象去调用的函数被称为这个对象的方法。</p>
   <P>文档是由节点构成的集合。节点分为：元素节点类（nodeType属性值是1）、属性节点（nodeType属性值是2）、文本节点（nodeType属性值是）；</P>
   <P>在css中，节点树上的各个元素将续承其父元素的样式属性。</P>
   <p>事实上，HTML文档中的每一个元素都是一个对象；</p>
   <p>获取元素的三种DOM方法：getElementById()（返回对象）、getElementsByTagName（）（返回数组，通配符“*”必须放在引号里，这样便于与乘法符号相区别）、getElementByClassName（）（返回数组，类名可以是多个，且多个类名之间用空格隔开没有顺序之别，表示同时拥有多个类名的元素）;这三个函数都是获取的所属对象下的元素；</p>
   <p>getAttribute(“属性名”)、setAttribute(“属性名”，“属性值”)、removeAttribute(属性):是一个获取元素属性、一个设置元素节点属性和移除元素属性的方法，但是他们不属于document对象，所以不能通过document对象调用，只能通过元素节点对象调用；</p>
   <p>通过setAttribute设置的属性并不会对静态文档的内容产生改变，只会对文档内容动态刷新渲染，原因是由于DOM的工作模式：先加载文档的静态内容，再动态刷新，动态刷新不影响文档的静态内容。这正是DOM的真正威力：对页面进行刷新却不需要再浏览器刷新页面。</p>
   <h2>第四章：JavaScript图片库</h2>
   <p>占位符：为了在HTML文档中占据一片区域而在此区域放置一个空的标签；</p>
   <p class="font_weight">非DOM解决方案：</p>
   <p class="text_indent">setAttribute方法是“第1级DOM(DOM Level 1，即DOM Core)的组成部分”，它可以设置<strong>任意元素节点的任意属性</strong>，DOM可以用于任何一种标记语言。在“第1级DOM”出现之前()即HTML-DOM，你可以通过element.attribute="the new value"设置<strong>大部分元素的属性，</strong>此方法只能用于web文档。</p>
   <p>事件处理函数：在特定事件发生时调用特定的JavaScript代码。在HTMl文档里添加事件处理函数时，被调用的函数要放到引号中，并且引号里可以添加任意数量的JavaScript代码，只需把各条语句用分号隔开即可。如果在引号里添加return false ,引号中的代码会把false传递给所属的事件处理函数，事件处理函数会认为没有事件触发行为，同时也就阻止超链接的点击默认行为（事件处理函数引号中的代码的优先级大于超链接的默认行为的优先级；相当于事件没发生）。</p>
   <p>childNodes属性：元素的子节点，不是后代节点；element.hasChildNode():判断元素是否有子节点的方法；element.removeChild():移除子节点的方法；</p>
   <p>页面文档对象加载完成时执行：window.onload=function(){}/函数名，如果用此事件处理函数，则引用文件的&ltscript>标签可以放在head标签里；</p>
   <p>nodeValue属性：是获取和设置不同类型节点的值的属性，如果想要获取段落元素中的文本需要通过element.childNodes[i].nodeValue来获取；</p>
   <P>nodeName:节点名字，返回的值是大写字母形式； </P>
   <p>firstChild和lastChlid属性：是第一个子元素和最后一个子元素的获取方式；</p>
   <h2>第5章：最佳实践</h2>
   <p>window.open(URL,name,窗口的设置数据用引号包住用逗号隔开)</p>
   <p>只有极少数搜索引擎机器人能够理解JavaScript代码，如果一个网站不能平稳退化，那么在搜索引擎上的排名大受损害。</p>
   <p>&lta href="http://www.example.com/" onclick="popUp(this.href);return false;">example&lt/a></p>
   <p>在javascript中给元素添加事件处理函数可以用HTML-DOM中的onclick方式:element.onclick=function(){}；也可以用HTML5中添加事件监听方式：element.addEventListener("事件类型"，被调用的事件函数，ture/false),但是此方式是否可以支持给一个元素添加多个同类型的事件处理函数（疑问）;</p>
   <p>在文档被加载到一个浏览器窗口里时，先加载window对象，而document对象（其实就是HTML文档）是window对象的属性，所以在window对象加载完成时，其实document对象也已经存在了，同时window.onload=function(){}也可以对HTMl正常操作了。</p>
   <p>在使用对象检测时，一定要删掉方法名后面的小括号，如果不删掉的话，测试的将是方法的结果，无论这个方法是否存在。</p>
   <p>性能优化的方式：</p>
   <p class="text_indent">尽量少访问DOM：不管什么时候，只要是查询DOM中的某些元素，浏览器都会搜索整个DOM树，从中查找可能匹配的元素，访问DOM的次数越多，整体性能越慢。在多个地方需要用到一组类似元素的情况下，可以考虑重构代码，把搜索结果保存到一个全局变量里，或者把一组元素直接以参数的形式传递给函数。</p>
   <p class="text_indent">尽量减少标记标签：过多不必要的元素只会增加DOM树的规模，进而增加遍历DOM树的时间。</p>
   <p class="text_indent">把JavaScript脚本以单个外部文件引入进来：既能够把脚本与标记分离开来，易维护，同时浏览器还能够对站点中多个页面重用缓存过的相同脚本，还可以减少加载页面是发送的请求数量。 </p>
   <p class="text_indent">把脚本引入标签放到文档的尾部：浏览器加载HTML文档是从上往下依次加载；一般来说，根据HTTP协议浏览器最多只能同时下载两个文件，当在下载脚本时，浏览器就无法下载其他的任何文件；如果把脚本引入标签放到头部，浏览器在加载头部脚本时无法下载其他文件，且HTML文档也未必加载完成，增加初次加载的时间；如果把脚本引入标签放在尾部，则不会出现以上问题，且初次加载速度也会大大提升，window.onload事件依然可以执行对文本的各种操作；</p>
   <p class="text_indent">使用压缩工具压缩编写代码：降低网站所占内存的大小，降低加载的负荷，在文件名上加上.min;</p>
   <p>检测某一元素是否存在：if(!document.getElementById("id")) return false;如果此元素存在代码继续往下执行，此元素如果不存在就跳出当前代码，执行结束，也不会出现报错；</p>
   <p>作为一条原则，如果想要用JavaScript给某个网页添加一些行为，就不应该让JavaScript代码对这个网页的结构有任何依赖；</p>
   <p>如果给一个元素对象添加多个同一类型的事件处理函数，那么只有最后一个事件处理函数会被执行，因为前面的会被最后一个取代（每个事件处理函数只能绑定一条指令）；解决办法：可以先创建一个匿名函数来容纳这两个函数，然后把那个匿名函数绑定在onload事件上，代码结构如下，window.onload=function(){firstFunction();sectionFuction();}。还有一种更好的解决方法代码如下，function addLoadEven(func){var oldonload=window.onload;if(typeof window.onload='function'){window.onload=func;}else{window.onload=function(){oldonload();func();}}}</p>
   <p>三元操作符：判断条件？为真的结果：为假的结果；三元操作符其实是if else的一种变体形式；</p>
   <p>当给元素对象想要添加与点击事件相同的键盘事件时，只需要把点击事件赋值给键盘事件就可以了：links[i].onkeypress=links[i].onclick;</p>
   <p>在几乎所有的浏览器里，用Tab键移动到某个链接然后按下回车键的动作也会触发onclick事件。</p>
   <h2>第7章：动态创建标记</h2>
   <p>document.write():document对象的write()方法可以方便快捷地把字符串插入到文档里，字符串中的标签元素可以被执行，此方法是传统的往文档里添加字符串的方法（不属于DOM方法），但是此方法尽量避免使用。并且此方法还容易导致验证错误，字符串中的前标签容易被误认为是元素标签，而在&ltscript>标签后出现标签元素是非法的；</p>
   <p>innerHTML属性：可以插入和获取元素中的文本，并不是DOM标准范围内的属性，但是现在已经包含在html5规范中了；插入的字符串中的元素标签会被执行，获取的字符串中元素标签会被显示出来。</p>
   <p>DOM是文档的表示，DOM所包含的信息与文档里的信息一一对应；DOM的方法可以改变节点树的结构内容，但并不可以改变文档的物理内容；你不是在创建标记，你是在改变DOM节点树；从DOM的角度来看，一个文档就是一个节点树；</p> 
   <P><strong>DOM方法：</strong></P>
   <p>creatElement()方法：创建一个新元素的方法；如果只是创建好却没有插入到节点树中的元素对象，他就像游荡在JavaScript世界里的一个孤儿，他被称为文档碎片。</p>
   <p>parent.appendChild(child):把子节点插入到父子节点里的方法；</p>
   <p>createTextNode("文本")方法：创建文本节点的方法；</p>
   <p>对于HTML文档中只被DOM方法处理的元素，最好用JavaScript来创建它，这样能够很好支持平稳退化。</p>
   <p>targetElement.parentNode.insertBefore(newElement,targetElement):在已有元素前插入一个新元素，或者写为parentElement.insertBefore(newElement,targetElement);</p>
   <p>nextSibling属性：下一个兄弟元素节点；</p>
   <p>编写insertAfter函数：在已有元素后面插入一个新元素；</p>
   <pre class="font_size">
       function insertAfter(newElement,targetElement){
           var parent = targetElement.parentNode;
           if(parent.lastChild == targetElement){
               parent.appentChild(newElement);
           }else{
               parent.insertBefore(newElement,targetElement.nextSibling);
           }
       }
   </pre>
   <P>Ajax:是一种异步加载页面内容的技术。使用Ajax可以做到只加载更新页面中的一小部分，在Ajax向后台发送请求时，用户还可继续正常的浏览网页并与网页进行互动；Ajax是依赖JavaScript运行，搜索引擎的蜘蛛程序也不会抓取到相关内容；</P>
   <p>Ajax的技术核心就是XHLHttpRequest对象。这个对象充当着浏览器中的脚本（客户端）与服务器之间的中间人的角色。以往的请求都由浏览器发出，而JavaScript通过这个对象可以自己发送请求，同时也自己处理响应。</p>
   <p>XMLHttpRequest对象有许多方法。open("GET/POST/SEND","文件名",true/false指定请求是否以异步方式发送或处理)</p>
   <pre class="font_size">
       function getNewContent(){
           var request = getHTTPObject();
           if(request){
               request.open("GET"，"example.txt",true);
               request.onreadstatechange = function(){
                   if(request.readyState == 4){
                       var para = document.createElement("p");
                       var txt = document.createTextNode(request.reponseText);
                       para.appendChild(txt);
                       document.getElementById('new').appendChild(para);
                   }
               };
               request.send(null);
           }else{
               alert{'Sorry,your browser dosn\'t support XMLHttpRequest'};
           }
       }
   </pre>
   <p>onreadstatechange是一个事件处理函数，他会在服务器给XMLHttpRequest对象送回响应的时候被触发执行。</p>
   <p>request.onreadstatechange = dosomething;,在为onreadstatechange指定函数引用时，不要在函数名后面加括号。因为加括号表示立即执行所调用的函数，而我们在此只想把函数自身的引用（而不是函数的结果）赋值给onreadstatechange属性。</p>
   <p>在指定了请求的目标，也明确了如何处理响应之后，就可以用send方法发送请求了：request.send(null);</p>
   <p>服务器在向XMLHttpRequest对象发回响应时，该对象有许多属性可以用，浏览器会在不同的阶段更新readyState属性的值，他有5个可能的值：过程状态码</p>
   <p class="text-indent">0表示未初始化;1表示正在加载;2表示加载完毕;3表示正在交互;4表示完成；</p>
   <p>status:结果状态码，200、0等。statusText:结果状态文本。</p>
   <p>访问服务器发送回来的数据要通过两个属性完成。responseText属性：用于保存文本字符串形式的数据;responseXML属性：用于保存Content-Type头部中指定为“text/xml”的数据，其实是一个DocumentFragment对象（文档碎片）。你可以使用各种DOM方法来处理这个对象。而这也正是XMLHttpRequest这个名称里有XML的原因（疑问）。</p>
   <p>request.send(所要发送的数据)：在编写好Ajax的请求事件处理函数后运用此方法发送数据;</p>
   <p>在使用Ajax时，千万要注意同源策略（应该就是同域的意思，本地是一个域，服务端是一个域，疑问）。</p>
   <p>Hijax:渐进增强的使用Ajax;拦截表单提交按钮的默认行为，用onsubmit事件处理函数捕获该事件，由XMLHttpRequest对象代为发送请求；</p>
   <h2>第8章：充实文档的内容</h2>
   <p>&ltabbr>&ltabbr>:缩略语标签；</p>
   <p>标记语言类型的选择：</p>
   <p class="text_indent">HTML:兼容型标记语言；</p>
   <p class="text_indent">XHTML:标准型标记语言，需要在文档声明时加入一段字符串；</p>
   <p class="text_indent">HTML5:最新型标记语言规范,&lt!DOCTYPE html>,此文档声明同样也支持HTML和XHTML标记 ；</p>
   <p>IE7之前的浏览器是不支持abbr缩略语标签元素的，解决办法：</p>
   <p class="text_indent">把abbr元素统一换成acronym元素。我对这种解决方案不感兴趣，因为我不想为了一种顽固不化的浏览器而牺牲一大批语义正确的标记。</p>
   <p class="text_indent">在元素中使用HTML命名空间（&lthtml:abbr>bbr&lt/html:abbr>）,这样IE就可以认出这些元素。这个方案涉及修改标记，如果想要在其他的文档里使用此函数问题仍得不到解决。（疑问命名空间）</p>
   <p class="text_indent">通过脚本让其自动判断退出，实现平稳退化。</p>
   <p>元素的快捷键属性accesskey:windows系统的浏览器里，快捷键的使用方法是同时按下ALT键和特定按键；在Mac系统的浏览器里是同时按下Ctrl和特定的按键。</p>
   <p>JavaScript脚本只应该用来充实文档内容，要避免使用DOM技术来创建核心内容；</p>
   <h2>第9章：CSS-DOM</h2>
   <p>文档中每个元素的style属性的数据类型是对象而不是字符串；</p>
   <P>element.style.color:这是元素的style属性的获取方式，必须通过".style.color"的方式来获取；</P>
   <p>带有链接符“-”的样式属性获取方法：DOM要求用驼峰命名法来引用一个中间带有减号的CSS属性。因为属性之间的连字符与JavaScript中减法操作符相同，连接符会被解释为减号，会把连接符之前的看做是属性，连接符后面的看做是一个变量，把整个表达式看做一个减法运算；加号和减号之类的操作符是保留字，，不允许用在函数和变量的名字里；这同时也意味着他们也不能用在方法或属性的名字里（别忘了，方法和属性其实关联在某个对象上的函数和变量）。</p>
   <p>DOM在表示样式属性时采用的单位并不总是与他们在CSS样式表里的的设置相同。如果CSS样式属性中的颜色值是16进制的话，在某些浏览器里DOM属性值会以RGB的格式返回。还好这类情况并不多，绝大多数样式属性的返回值与它们的设置值都采用同样的计量单位，比如像素、em的计量单位是相同的。</p>
   <p>通过DOM style 属性只能获取标记元素内嵌的style样式属性，却不能获取外部CSS样式表和头部head标签内添加的样式属性，但是却可以获取通过DOM 设置的样式。通过DOM style对象设置的属性的优先级高于元素内嵌属性、css外部文件属性、文档头部head标签内样式的优先级，也就是说通过DOM style对象设置的属性的优先级最高；</p>
   <p>许多DOM属性是只能读取的--previousSibing、nextSibling、parentNode、firstChild、lastChild等，如果想要设置插入一些节点属性可以用一些方法属性--insertBefore()、appendChlid()、nodeValue等；但是DOM中的style对象的各个属性都是既可以读取也可以设置刷新的。在位DOM的style属性设置赋值属性值时，要把属性值包含在引号之内，如果不加引号，JavaScript会把赋值号右边的属性值解释为一个变量。</p>
   <p>在给元素设置添加样式时，优先使用css外部文件设置样式，如果外部css文件设置样式不太方便的情况下，再考虑使用DOM style 来设置元素的样式属性；</p>
   <P>当想要获取“下一个元素节点”而不是“下一个节点”时，可以通过以下函数实现；函数内部调用自身函数；</P>
   <pre class="font_size">
       function getNextElement(node){
           if(node.nodeType == 1){
               return node;
           }
           if(node.nextSibing){
               return getNextElement(node.nextSibling);
           }
           return null;
       }
   </pre>
   <p>如果你想改变某个元素的呈现效果，使用CSS；如果想改变某个元素的行为，使用DOM；如果你想根据某个元素的行为去改变它的呈现效果，请运用你的智慧，这个没有放之四海而皆准的答案。</p>
   <p>className属性：是类名设置属性，如果某已有class属性的元素使用此属性，则原本的类名将会被覆盖，如果想在原有的类名上再添加一个新类名，则需要在新类名的前面添加一个空格；</p>
   <p class="font_weight">对函数进行抽象：</p>
   <p>把一个非常具体的东西改进为一个较为通用的东西的过程叫做抽象；通常把一些具体的值转换为这个函数的参数，就可以让它成为一个更为通用的函数；无论何时你发现可以对一个函数进行抽象，都应该马上去做，这总是一个好主意。</p>
   <h2>第10章：用JavaScrip实现动画效果</h2>
   <p>relative的含义与static相似，区别是position属性等于relative的元素还可以（通过应用float属性，疑问：应该是通过left、top等方位属性）从文档的正常显示顺序脱离出来。</p>
   <p>setTimeout("带有括号的函数名"，毫秒单位的时间)：某一时间后执行某函数的定时器函数；通常情况下把此定时器函数赋值给一个变量，如果此变量是一个全局变量则在脚本的任何地方都可以使用；</p>
   <p>clearTimeout(将要取消的定时器函数变量)：取消某一定时器的函数；</p>
   <p>parseInt(字符串)：把字符串转换为整数；parseFloat(字符串)：把字符串转换为小数；</p>
   <p>雪碧图：把多张小图片生成一张大图片，只需要加载一张大图就行了，增加了图片加载速度，只需要改变大图片的位置就可以在某一小包裹容器中查看各张图片。</p>
   <p>当既不能使用全局变量，也不能使用局部变量。我们需要一种介乎他们二者之间的东西，需要一个只与正在被移动的那个元素有关变量。那就是JavaScript允许我们为元素创建新的属性类型，例如：element.foo="bar";疑问：为什么不能直接判断定时器变量是否存在，如果存在就清楚此定时器；</p>
   <p class="text_indent">但这存在一个作用域问题。因为变量section是一个局部变量，他只有在prepareInternalnav函数执行期间存在，等到了事件处理函数执行的时候他就不存在了。要解决这个问题，可以为每个链接创建一个自定义的属性，然后把sectionId赋值给它。</p>
   <p>Math.ceil()：将浮点数向大于方向舍入为与之最接近的整数；Math.floor():将浮点数向小于方向舍入为最为接近的整数；Math.round():将浮点数舍入为与之最为接近的整数；</p>
   <<h2>第11章：HTML5</h2>
   <p>HTML5是HTML标记语言当前及未来的新标准。HTML5的目标是和已有的HTML和XHTML文档全部兼容。</p>
   <P>原本结构层、行为层和表现层的代码是分离的，但是HTML5使得这三个层的界限越来越模糊了。</P>
   <p>HTML5增添了一些具有语义的新标记元素；有些元素还带有自己的JavaScript和DOM AP；在样式层面，css3还增加了一些新功能，如：高级选择器、渐变、动画等。最后新JavaScript API 还包括其他很多模块，比如Geolocation、storage、Drap-and-Drop、Socker以及多线程等。 </p>
   <p>对于一些不支持HTML5的浏览器可以引用一些较好的开源库来解决浏览器兼容性问题，自己也可以基于平稳退化的原则来编写脚本；</p>
   <p>有的读者可能不知道，其实你可以在大多数浏览器器中创建类似&ltfoo>这样的元素，然后再为该元素应用样式--只要你不在乎验证结果就无所谓。</p>
   <p>canvas是用来在浏览器中绘制图片以及与现有图片进行交互的技术（有点类似于PhoteShop制图工具。）；</p>
   <P>HTML5为音频视频制定了一种标准方式，同时也把之前复杂的嵌入操作简化为了一个标签，用起来十分方便；但是由于种种原因，HTML5并没有声明支持哪种特定的音频视频格式；</P> 
   <p>本章对web前端的新技术规范进行了一些简要的介绍，并编写了几个canvas、video和audio、表单方面例子，由于我阅读本书的目标是只对知识点进行全面基础的了解，所以如果以后需要了解更为详细的HTML5的方面的知识，可以查阅相关资料。</p>
   <h2>第12章：综合示例</h2>
   <p>在引入多个外部样式表时，可以通过@import url(样式表路径)方式把多个外部样式表文件引入到一个主样式表文件里，然后只需要在HTMl中引入这个主样式文件就行；</p>
   <p>用通配选择器“*”把所有元素的内外边距都设置为0，这样就把不同浏览器为元素设置的不同内外边距都给删除了。 </p>
   <p>获取当前页面的URL则可以使用window.location.href，将此属性与导航栏中超链接的href的属性值进行对比来设置导航栏高亮显示。</p>
   <p>string.indexOf(substring):在字符串中寻找子字符串第一次出现的位置，如果查找不到则返回-1，如果查找到则返回字符串第一次出现的位置数值;</p>
   <p>str.toLowerCase():是把文本转换成小写形式的方法；</p>
   <p>str.split(分隔符)：根据分隔符把一个字符串分成数部分的方法；</p>
   <p>form对象：此对象为HTML DOM中的一个对象；文档中每一个表单元素都是一个form对象，每个form对象都有一个elements.length属性。这个属性返回包含表单中的包含的表单元素的个数(包括文本节点)：form.elements.length</p>
   <p>onfocus事件：获取焦点事件；onblur事件：失去焦点事件；</p>
   <p>onsubmit事件：表单提交事件；</p>
   <p>在把表单数据同过Ajax提交到服务器时，需要以URL字符串的格式发送，并用encodeURLComponent()函数将URL字符串编码成URL安全的字符串。</p>
   <p>数组名.join("链接符")：把数组中的各项用指定符号链接起来。</p>
   <p>request.setRequestHeader("Content-type","application/x-www-form-urlencoded"):这个头部信息对于POST请求是必须的，他表示请求中包含URL编码的表单。</p>
   <p>正则表达式：就是一种模式，它以用来匹配字符串中的不同部分。对于正则表达式的详细信息，回头查阅相关资料进行了解（match()用法)。</p>
   <h2>附录：JavaScript库</h2>
   <p>CDN:内容分发网络，用于解决分布共享库的问题。对于一些共享使用较多的库文件，为了用户更快更方便的使用这个库，可以把这些库文件分别存放在世界各地不同的服务器上，当用户访问这些存放在服务器上的库文件时，CDN底层会根据用户的地理位置和自身网络的带宽选择距离最近、下载最快的库供用户下载使用。优点:当用户浏览多个网站需要下载库文件时，不需要重复下载多次库文件，只需要缓存一次就可以供浏览器重复使用无数次，增加了用户体验。</p>
   <p>如果担心依赖CDN不保险，可以再提供一个后备的&ltscript>标签，以便在CDN不可用的时候从本地服务器下载相应文件：&ltscript  src=CDN服务器文件地址>&lt/script>;&ltscript>!window.jQuery&&document.write(unescape('%3C script src="scripts/jquery-1.4.3.min.js"%3E%3C/script%3E')) &lt/script></p>
   <P>jQuery库中的迭代each()方法、回调函数filter()方法、map()方法、模板插件（275页）不太明白，回头仔细研究一下（疑问）；</P>
   <p>回头买一本书《锋利jQuery》来详细的学习一下jQuery，不仅要学习它的使用方法，也要学习一下它的源码设计思路；因为一方面自己对jQuery已经有了一些了解和使用，如果去学习源码的设计思路将会对自己的技术水平的提升有很大的帮助。</p>   
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-javascript-dom{
  width: 10rem;
  background-image: url(../assets/img/detailBg.jpg);
  padding:0.8rem 0.3rem;
  box-sizing: border-box;
}
.margin_top{
    margin-top: 80px;
}
p{
    text-indent: 2em;
}
.text_indent{
    text-indent: 4em;
}
.box_wrap_header{
    width: 300px;height: 75px;border: solid 1px rgb(255,255,255);text-align: center;line-height: 100px;
}
.box_header{
    width: 150px;height: 75px;margin-left: 75px; border: solid 1px rgb(0,0,0);text-align: center;line-height: 75px;
}
.box_line{
    border-right: solid 1px rgb(0,0,0);width: 150px;height: 50px
}
.box_line_bottom_none_wrap{
    margin-left:49px;
}
.box_line_bottom_none{
    width: 100px;height: 50px;border:solid 1px rgb(0,0,0);float:left;border-bottom: 0;
}
.box_wrap>div{
    width: 90px;height: 140px;border:solid 1px rgb(0,0,0);float:left;text-align: center;line-height: 33px;margin-right:10px;
}
.float_clear_both{
    clear: both;
}
.border_left_none{
    border-left: 0px!important;
}
.font_weight{
    font-weight: 900;
}
.font_size{font-size: 20px;}
</style>
