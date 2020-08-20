<template>
  <div class="detail-javascript-total">
  <h1 class="title">JavaScript知识点汇总</h1>
  <pre>
<h3>函数的组成</h3>
函数也可以看做是实现某种功能的方法:<br>
    为满足自己某种特殊功能的需要所编写的方法，称作自定义函数；JavaScript库中内置封装好的具有某种特殊功能的方法，称作内置函数或者全局函数，也叫做顶层函数或者系统函数。<br>
函数的语法y=f(x)：<br>
    常量即不改变的量（水）、变量即可以改变的量（装水的瓶子）、自变量（将要倒进池子里染色的水）、因变量（从池子里排除已经染过色的水）、操作方法f()（往池子里倒水、倒染料、搅拌、从池子里排水的过程，或者说给水染色的过程）。<br>
函数的三种声明方式：<br>
    普通声明方式：function 函数名（参数）{执行代码块}；<br>
    变量声明方式：var 变量名=function(参数){代码执行块}；<br>
    构造函数声明方式：var 变量名=new Function{代码执行块}；<br>
回调函数：<br>
    将一个函数（不加括号的函数名）作为另一个函数的参数。<br>
    将一个函数值（函数名（参数））作为另一个函数的参数。<br>
匿名函数：<br>
    单独的匿名函数是无法运行和调用的,可以把匿名函数赋值个变量。<br>
    匿名函数的调用和普通函数的调用一样，如果不加括号则输出函数的代码块，如果加括号则输出函数的输出值。<br>
    匿名函数通过表达式自我执行：(function(){代码执行块})();<br>
    匿名函数的参数传递：(function(m,n){alert(m+n)})(100,2600);<br>
<h3>变量</h3>
基本类型：<br>
    undefined、null、boolean、number、string，内存大小是固定的，按值来访问的，复制的时候复制的是值本身，修改的时候是只修改某一个值。<br>
引用类型：<br>
    对象、数组、函数，内存大小不固定，存储的是地址，复制的时候复制的是地址，修改的时候修改的不是地址，而是在修改值，只要是所指向这个量地址的量值都会改变,函数的参数是按值来传递的。<br>
执行环境与作用域：<br>    
    全局变量可以看做是window的属性，任何函数都可以调用，函数可以看做是window的方法，window可以省略；局部变量是在函数内部的变量，且带有var声明的变量，只能被本函数调用，外部其他函数无法调用，如果在函数内部不带有var声明的变量，则被当做全局变量。<br>
    外部函数无法访问函数内部变量却可以访问函数内部的函数(通过外部函数输出内部函数的方式输出)，内部函数可以访问外部变量。<br>
    在变量的查询中，查询局部变量要比查询全局变量快，因为查询变量时是从局部变量往全局变量展开搜索。<br>
    在JS中内存的分配与回收是自动完成的，内存在不使用的时候会被系统自动回收，全局变量直到页面关闭时内存才被系统收回，及时将不再使用的变量设为null,函数中局部变量内存在函数执行完毕后就会被自动释放掉。<br>
变量的命名规范：<br> 
    不能是数字开头，因为在JS中数字作为属性值时是不需要加引号的，这样属性值会和变量产生混乱。（像颜色作为属性值都加上引号以字符串的形式出现）<br>
变量的属性值类型（数据类型）：<br>
    字符串：<br>
        字符串的创建方法：<br>
            @1var str="字符串内容";<br>
            @2var str=new string("字符串内容");注意：此方法创建的数据类型为对象类型。<br>
        转换成字符串的方法：<br>
            string():函数把对象的值转换成字符串。<br>
            数字变量名.toString():将数字转换为字符串的方法。<br>
            数字变量名.toString(n):将数字转换为n进制的方法。<br>
        操作字符串的方法：
            字符串名.indexOf('被检索的字符')与字符串名.serach('被检索的字符')：检索字符在字符串中首次出现的位置，如果检索不到会返回-1。<br>
            字符串名.lastIndexOf('被检索的字符')：倒序检索字符在字符串中首次出现的位置，如果检索不到会返回-1。<br>
            字符串名.match('a'):获取与之相匹配的正则表达式并以数组的形式输出,匹配不到输出null。<br>
            字符串名.replace('所要查找的字符','所要替换字符')：替换字符串中的字符,返回值是替换后的字符串,怎么无效啊。<br>
            字符串变量名.charAt(n)：获取第n个指定位置的字符。<br>
            字符串变量名.charCodeAt(n)：获取第n个指定位置的字符Unicode编码。<br>
            字符串变量名.slice(n,m)：提取字符串从第n个到第m个的片段的方法。<br>
            或者：
            字符串变量名.substring(n,m)，多数情况下两者一样，为负数时不同，这一点很少遇到。<br>
            字符串变量名.substr(n,m)：提取字符串从第n个开始的m个字符的片段的方法。<br>
            字符串变量名1.concat(字符串变量名2)：链接字符串的方法：<br>
            字符串名.toLowerCase():将字符串转为小写；字符串名.toUpperCase():将字符串转为大写。<br>
            parseInt("小数")：将字符串转化为整数的方法：<br>
            parseFloat("小数")：将字符串转化为浮点数的方法：<br>
            字符串变量名.split('字符串中的分隔符号',分隔之后数组元素的个数)：将字符串分隔成数组的方法。<br>
            evel('所要执行的代码')：执行一段字符串格式的代码也可输出执行的结果。alert('')是只输出不执行，有点类似于alert()输出执行html格式的文档。<br>
            字符串的编码与解码：<br>
                escape()与unescape();<br>
                encodeURI()与decodeURI();<br>
                encodeURIComponent()与decodeURICoponet()<br>
            isFinite():检测某个值是否为有限位数，Infinity无穷大，-Infinity无穷小。<br>
            注意：字符串对象的操作方法所操作的是全新的字符串，原字符串并不会改变。<br>
        转义字符：
            转义字符“\”，反斜杠“\\”，双引号“\""”有效;
            换行符“\n”，回车符“\b”，无效，用br标签代替。<br>
        正则表达式：其实就是封装好的更加简便的字符串的操作方法。<br>
            res.value=str.replace(new RegExp(st,"替代符"),"");<br>
        创建正则表达式的方法：<br>
            1、var reg1=new RegExp("正则表达式","修饰符");<br>
            2、var reg2=/所要查找的字符/修饰符;
            /查找的字符（或者[a-Z]/[0-9]/[^0-9]/[abc]/[a-z0-9]/第[1-2][0-9]章/51|abc|dfc/51.com/\w/\W/\d+(?=cm)/\D/\s+(?!cm)/\S/^Go+*?{x,y}d$/(Go){x,y}/）/g(全局匹配)i(不区分大小写)m(多行匹配);<br>
            方括号“[]”是用来规定所要查找的字符串范围；“[^abc]”表示除了abc之外都是所要查找的范围；或符号“|”表示要查找其中的一个就行，如果不加全局修饰符号则默认默认为查找到的第一个；元字符“.”表示查找单个字符，除了换行符和行结束符；转义字符“\”可以通过“\.”“\+”的格式查找;换行符“\n”:在alert()中输出起到换行作用，在document.write()输出不起作用。<br>
            \w:查找字母、数字、和下划线；\W:查找非字母、非数字、非下划线。<br>
            \d:查找数字；\D:查找非数字。\s:查找空格；\S:查找非空格。<br>
            判断正则表达式是否具有全局检测/大小写检测/多行匹配检测：RegExp.global/ignoreCase/multiline。<br>
            量词：n+:至少包含一个字符n;n*:包含零个或者多个字符n；n?:包含零个或一个n；n{x，y}:查找包含x到y个n的字符；n$:查找以n结尾的字符；^n：查找以n开头的字符；?=n:其后紧跟n的字符；?!n:查找其后不是紧跟n的字符;(td){x,y}:会把td当做一个整体查找。<br>
            正则表达式的文本输出：RegExp.source，不是原字符串的文本;<br>
            正则表达式的文本匹配：RegExp.test(字符串变量名)，输出布尔值;<br>
            正则表达式的下一次开始检测的位置：RegExp.lastIndex;<br>
            正则表达式的编译将其转化为内部格式执行效率更高：RegExp.compile/exec(所要搜索的变量名/"正则表达式文本","g");<br>
    数字：
        Number("数字")：将任意类型的值转化为数字的方法。<br>
        isNaN():函数检查其参数是否是是非数值。<br>
        太大或太小的值表示方法--var a=3.14e2或a=3.14e-2;<br>
        八进制是以0开头，十六进制是以0x开头,无论几进制数输出时都转化为十进制；<br>
    布尔值：<br>
        任何非0的数值都为真（true），0值和NaN值为假(false)；<br>
        空字符串为假，非空字符串为真，空格字符串也为真；<br>
        布尔值的false和true会转换为0和1。<br>
    数组：
        一种特殊的函数，输入元素序号（自变量），输出元素序号所对应的元素（因变量）。<br>
        数组的创建方法：<br>
            @1var sz=["数组1","数组2","数组3","数组4"];<br>
            @2var sz=new Array("数组1","数组2","数组3","数组4")<br>
            @3var sz=new Array();<br>
                  sz[0]="数组1";<br>   
                  sz[1]="数组2";<br>
                  sz[2]="数组3";<br>
                  sz[3]="数组4";<br>
                  alert(sz[2]);<br>
            @4var sz=new Array(n);数组中有n个空元素<br>
        数组的操作方法：<br>
            length属性：<br>
                数组名.length:数组的长度；数组名.length=n:设置数组的长度； <br>
            数组名.splice(插入点,裁切个数,插入的数组):数组名.splice(1,2,'qq','aa','bb')删除、插入、替换数组中的元素。<br>
            数组名.slice(裁切起始点，裁切结束点)：裁剪一段数组元素。<br>
            delete 数组名[n]:删除数组的第n个元素。<br>
            数组名.push("数组元素1","数组元素1"):给数组添加元素至末尾。<br>
            数组名.pop():删除末尾数组元素。<br>
            数组名.shift():删除首端元素。<br>
            数组名.unshift():添加首端元素，并输出数组长度。<br>
            数组名.join('数组元素之间的隔离符号#￥@...'):设置数组元素之间的隔离符号。<br>
            数组名.reverse():将数组元素倒序的排列过来。<br>
            数组名.sort(sortfunction):将数组以数组元素第一个数字的大小从小到大的顺序排列，是以字符串的格式排列。<br>
            数组名1.concat(数组名2/数组元素)：将数个数组合并在一起。<br>
            数组名.toString():alert(typeof 数组名.toString())得string，如果只是转换后输出数组类型仍是数组，将数组转换为字符串格式的数据。<br>
    对象:<br>
        一种特殊的函数，输入元素属性名（自变量），输出元素属性名所对应的属性值（因变量）。<br>
        创建对象的基本方法（基础模式）：代码繁琐不方便，没有关联性，浪费内存空间。<br>
            @1var person={name:"小明",age:18,id:12345,vip:"普通会员"};<br>
                  alert(person.age) ;<br>
            @2var person={"name":"小明","age":"18","id":"12345","vip":"普通会员"};<br>
                  alert(person['age']) ;<br>
            属性名和属性值可以都加上引号，属性名的引号可以省略，纯数字属性值的引号可以省略，对象的属性值可以是对象，也可以是函数。<br>
            输出方式：alert(person.name)或者alert(person["name"]);<br>
            @3 var person={};<br>
                   person.name="刘超奇";<br>
                   person.sex="男";<br>
                   person.age="25岁";<br>
                   person.shengao="178cm";<br> 
                   alert(person.name)<br>  
            @4 var person=new Object();<br>
                   person.name="刘超奇";<br>
                   person.sex="男";<br>
                   person.age="25岁";<br>
                   person.shengao="178cm";<br>
                   alert(person.name)<br><br>  
            对象的方法名定义时不加括号，相当于一个属性；引用时加括号，相当于一个一个函数。<br>
        创建对象的批量方法（工厂模式）：没有关联性，浪费内存空间。<br>
            将创建对象的方法封装成一个函数，无法体现所创建的对象之间的联系性。<br>
            function createobject(属性值1,属性值2,属性值3,......){<br>
                var people=new Object();<br>
                    people.属性名1="属性值1";<br>
                    people.属性名2="属性值2";<br>
                    people.属性名3="属性值3";<br>
                    ......<br>
                    people.函数属性名=function(){<br>
                        return<br>
                        this.属性名1+"的技能是"+<br>
                        this.属性名2+"的技能是"+<br>
                        this.属性名3+......<br>
                            };<br>
                return people<br>
                    }<br>
            var people1=createobject(参数1，参数2，参数3，......)；<br>
            var people2=createobject(参数1，参数2，参数3，......)；<br>
                ......<br>
                alert(people1.函数属性名())；<br>
                alert(people2.函数属性名())；<br>
                ......<br>
            people1.函数属性名与people2.函数属性名的内容是相同的，但存储地址（存储位置）是不同的。<br>
        构造函数模式：浪费内存空间，new是一个函数，this所在的函数属于谁，this就是代指的谁，有点类似于代词。<br>
            示例1：<br>
                function fun(){alert(this)};<br>
                fun():得object Window;<br>
                new fun():得object Object;(是new函数里边创建出来的对象)<br>
            示例2：<br>
                function fun(参数1,参数2,......){<br>     
                    this.属性名1='参数1';<br>
                    this.属性名2="参数2";<br>
                    ......<br>
                    this.函数属性名=function{<br>
                        this.属性名1+"的技能是"+this.属性名2+"的技能是"+......<br>
                            }<br>
                        }<br>
                var zhangsan=new fun();<br>
                    alert(zhangsan.函数属性名);<br>
                解决了所创建的函数之间的关联性问题：新创建的对象名 instanceof 函数名，检测新创建的对象名是否是由函数名所创建。<br>
            对象的冒充：call()和apply();<br>
                var master=new Object();<br>
                fun.call(master,"参数a","参数b");<br>
                fun.apply(master,["参数a","参数b"]);<br>
                alert(master.run());<br>
        原型构造模式（propotype模式）：不能传参数，缺少灵活性。<br>
            fuction 函数名(){}<br>
                函数名.propotype.属性名1="属性值1";<br>
                函数名.propotype.属性名2="属性值2";<br>
                函数名.propotype.属性名3="属性值3";<br>
                函数名.propotype.属性名4="属性值4";<br>
                函数名.propotype.函数属性名={<br>
                    return<br>    
                    this.属性名1+"的技能是"+this.属性名2+"的技能是"+this.属性名3+"的技能是"+this.属性名4+......<br>
                            };<br>
            简写形式：<br>
            function 函数名(){}<br>
                函数名.propotype={<br>
                    constructor:函数名,(强制指向构造函数)<br>
                        属性名1：属性值1,属性名2：属性值2,属性名3：属性值3,......<br>
                    run：function(){<br>
                        return      
                        this.属性名1+"的技能是"+this.属性名2+"的技能是"+this.属性名3+"的技能是"+this.属性名4+......}<br>
                            }<br>
            var 新函数名1=new 函数名();<br>
            var 新函数名2=new 函数名();<br>
                alert(新函数名1==新函数名2);<br>
                    得true;<br>
                alert(新函数名.constructor)：返回创建该对象的原型函数。<br>                 
                alert(函数名.propotype.属性名 isPropotypeof 新函数名):检测函数的原型模式是否是示例的原型模式。<br>
                alert(属性名 in 新函数名)：检测新函数是否拥有该属性，不去考虑是本地属性，还是继承属性。<br>
                alert(新函数名 hasOwnProperty("属性名"))：检测是否是本地属性ture,如果是从原型中继承来的属性则输出false。<br>
        函数构造模式和原型模式的组合模式：没有将两种模式的函数封装在一起，缺少一点美观性。<br>
            用构造函数添加对象的属性，且属性可以独立修改。<br>
                function 函数名(函数名1/参数值1,函数名1/参数值1,......){<br>
                    constructor:函数名;<br>
                    this.属性名1=参数值1;<br>
                    this.属性名2=参数值2;<br>
                    ......<br>
                }<br>
            用原型函数添加对象的方法，只构造一次且可以共享。<br>
            函数名.propotype={<br>
                方法名：function(){return this.属性名1+"的技能是"+this.属性名2+"的技能是"+this.属性名3+"的技能是"+this.属性名4+......}<br>
            }<br>
            var 新函数名1=new 函数名(函数名a/参数值a,函数名b/参数值b,......);<br>
            var 新函数名2=new 函数名(函数名c/参数值c,函数名d/参数值d,......);<br>
            alert(新函数名1.方法名());<br>
            alert(新函数名2.方法名());<br>
        动态原型方法：解决了封装问题。<br>
            function 函数名(函数名1/参数值1,函数名1/参数值1,......){<br>
                constructor:函数名;<br>
                this.属性名1=参数值1;<br>
                this.属性名2=参数值2;<br>
                ......<br>
                if(typeof this.方法名!="function"){<br>
                alert("初始化开始");<br>
                函数名.propotype.方法名=
                function(){return this.属性名1+"的技能是"+this.属性名2+"的技能是"+this.属性名3+"的技能是"+this.属性名4+......}<br>
                alert("初始化结束");<br>
                }<br>
            }<br>
            if语句起到方法名实例化一次。<br><br>
        对象的继承：冒充继承，原型链继承，混合方式继承(变得项用构造函数，不变的项用原型模式)。<br>
            function monkey(_type,_home){<br>
                this.type=_type;<br>
                this.home=_home;<br>
                this.say=function(){
                alert("我是一只快乐的小猴子，家住在"+this.home)
                }<br>
            }<br>
            function money1(_HP){<br>
                this.HP=_HP;<br>
            }<br>
            function monkeyson(_type,_home,arr){<br>
                monkey.call(this,_type,_home);<br>
                monkey1.call(this,_HP);<br>
                this.skill=arr;<br>
            }<br>
            var monkeysonson=new monkeyson("猴子","花果山",["筋斗云","七十二变"],1000);<br>
            alert(monkeysonson.home);<br>
            alert(monkeysonson.say());<br>
        原型链：<br>
            function monkey(){};<br>
                 monkey.propoty.type="猴子";<br>
                 monkey.propoty.home="花果山";<br>
                 monkey.propoty.say=function(){alert("我是一只快乐的小猴子哦")};<br>
            function monkeyson(){};<br>
                 monkeyson.propoty=new monkey();<br>
                 monkeyson.propoty.skill="法术";(如果放在前面会被覆盖。)<br>
                 var wukong=new monkeyson();<br>
            alert(wukong.home);<br>
            alert(wukong.say());<br>
        对象的操作方法：    
            删除对象属性的方法：delete person.age;如果添加属性的话直接在所创建的函数中添加就行了：对象名.属性名="属性值"； <br>
            如果函数为属性值时，则在输出属性名时加上括号，定义时是匿名函数赋值给对象属性，且属性不加括号。<br>
            for(var x in 对象名)：alert(x)得属性名，alert(对象名[x])得属性值，x其实就是对象的属性名，对象名[x]也就会输出对象的属性值，此方法专门用来遍历输出对象的名和值。<br>
    null：<br>
        已定义并初始化为null,为了不影响前面变量的代码运行并不让前面变量影响后边代码的运行，所以给变量赋值为空。<br>
    undefined；未定义变量或定义之后没赋值的变量<br> 
    查询数据类型：typeof(变量);<br>
运算符：处理变量之间关系的符号，使变量之间成为关系式。<br>
    单目运算符：只能带一个操作数的称之为单目运算符（也叫一元运算符）。<br>
    多目运算符：带多个操作数的称之为多元运算符（也叫多元运算符）。<br>
    算术运算符：+、-、*、/、%（取余数或取模）。<br>
        “+”:加号运算符；正号运算符；关联运算符；<br>
        将数字与字符串相加，字符串会自动转换为数字值进行比较，结果将成为字符串；<br>
        若两个都是字符串，则比较字符串的首个数字的大小；<br>
    赋值运算符：=、+=、-=、*=、/=、%=。<br>
    递增递减运算符：++、--。<br>
        var a=10;b=a++;alert(b)得10，alert(a):得11;b=++a;alert(a)得11，alert(b)得11；若有赋值，前置则先赋值后运算。<br>
    比较运算符：>、<、>=、<=。<br>
    数值相等运算符：==;数值不等运算符：!=;<br>
    等同运算符：===（数据与数据类型都相同）；不等同运算符：！==。<br>
    逻辑运算符：&&、||、!。<br>
    条件运算符：?。<br>
        var fenshu=86;<br>
        var chengji=(fenshu>60)?"恭喜你及格啦"："很遗憾不及格";<br>
            alert(chengji);<br>
    逗号运算符“,”：用以分隔同时声明的多个变量。var a=4,b=5,c=9;<br>
控制语句：是一种处理语句关系的特殊语句。<br>
    if条件语句：<br>
        if(判断选择条件语句){<br>
            代码执行语句块<br>
            }else{<br>
            代码执行语句块<br>
            }<br>
        判断语句等于：i==3,而不要写成赋值语句：i=3;<br>
    switch条件语句：来选择要执行的多个代码块之一。<br>
        switch(n){<br>
                  case 1:代码执行块1;break;<br>
                  case 2:代码执行块2;break;<br>
                  case 3:代码执行块3;break;<br>
                  case 4:代码执行块4;break;<br>
                  case 5:代码执行块5;break;<br>
                  ...... <br>
                  default:代码执行块;<br>
                        (可选项，在没有与n相匹配的选项时所执行的代码块,类似于if中的else)<br>
                  }<br>
        如果代码执行块有一样的可以简化为一个：case 1：case 2：case 3：........<br>
    for循环语句：<br>
        for(语句1（可放在前面）;语句2(此语句如果省略且语句3递增递减，则会让浏览器崩溃);语句3（可放在后面）){<br>
                        执行代码块<br>
                        }<br>
        补充点：   
                遍历数组时，i是在for循环内部声明递增的，a[i]也是只在内部有效，a[i].属性名 也只是在内部有效；
                如果for循环内部再嵌套一个for循环的话（内循环），在内循环属性名设置为空，起到清除属性的作用；
                如果将a[i].属性名放置在内循环中的话将无效，a[i].属性名只在for循环的内部有效，在内循环中和外部都无效；通过this.属性名可以在内部的内部有效。
    while循环语句：<br>
        while(条件表达式){<br>
                          执行代码块<br>
                         }<br>
        或者：<br>
        do{<br>
           执行代码块<br>
           }
        while(条件表达式)；<br>
    break：直接跳出当前循环；continue:跳过当前操作继续执行下一个操作。<br>
<h3>内置函数</h3>
系统日期对象：
    创建date对象四种方法：<br>
        @1var date=new Date():无参数情况下返回值为当前时间。<br>
        @2var date=new Date(milliseconds): 将毫秒数转换为当前时间。<br>
        @3var date=new Date(dateString):将年，月，日日期转换为时间。<br>
        @4var date=new Date(year,month,day,hours,minutes,seconds,milliseconds):将此格式转换为时间 <br>
    获取时间数据的方法：<br>
        getDate():从Date对象返回一个月的某一天（1-31）；<br>
        getDay():从Date对象返回一个周的某一天（0-6）；<br>
        getFullYear():从Date对象以四位数字返回某个年份；<br>
        getHours():从Date对象返回一天的某一小时（0-23）；<br>
        <del>getMilliSeconds()</del>或者getTime()或者valueOf()或者+new Date():返回对象中的毫秒数（0-999）；<br>
        getMinutes():从Date对象返回一小时的某一分钟（0-59）；<br>
        getMonth():从Date对象返回一年中的某一月（0-11）；<br>
        getSeconds()：从Date对象返回一分钟的某一秒钟（0-59）；<br>
    设置时间数据的方法：<br>
        setDate():设置Date对象一个月的某一天（1-31）；<br>
        setFullYear():设置Date对象以四位数字输出某个年份；<br>
        setHours():设置Date对象一天的某一小时（0-23）；<br>
        setMilliSeconds():设置对象中的毫秒数（0-999）；<br>
        setMinutes():设置Date对象一小时的某一分钟（0-59）；<br>
        setMonth():设置Date对象一年中的某一月（0-11）；<br>
        setSeconds():设置Date对象一分钟的某一秒钟（0-59）；<br>
        setTime():以毫秒设置Date对象。<br>
    将时间转换为字符串格式的方法:<br>
        toString():获取Date时间的字符串表示。<br>
        toDateString():获取Date的日期部分字符串表示。<br>
        toTimeString():获取Date的时间部分字符串表示。<br>
        toLocaleString():获取Date的当地时间字符串表示。<br>
        toLocaleDateString():获取Date的当地日期字符串表示。<br>
        toLocaleTimeString():获取Date的当地时间字符串表示。<br>
    将时间转换为毫秒的方法：<br>
        Date.parse():将时间转换为毫秒数。所支持的格式：1/24/2016;January&nbsp24,2016;January&nbsp24&nbsp2016&nbsp10:10:10&nbspGMT+0800;<br> 
        Date.UTC():将时间转换为毫秒数。所支持的格式：2016,1;2016,1,24,10,10,10;月份和日期是从零开始的。<br>
<h3>Math对象</h3>
数值取整的方法：<br>
    ceil(x):对整数进行上舍入；<br>
    floor(x):对整数进行下舍入；<br>
    round(x):对数进行四舍五入为最近的整数：<br>
设置随机数的方法：<br>
    random():返回0-1之间的随机数，注意：不包括0和1。<br>
最大值、最小值的设置方法：<br>
    max(x-y)、min(x-y);<br>
绝对值的设置方法：<br>
    abs(x);<br>
x的y次方的设置方法：<br>
    pow(x,y);<br>
 <h3>浏览器对象</h3>
对话框对象：<br>
    alert('所要输出内容'):只有一个确定按钮。<br>
    confirm('所要输出内容'):有确定与取消两个按钮，返回值为布尔值。<br>
    prompt('提示语句','默认值')：有确定与取消两个按钮，有提示语句，有输入框。<br>
窗口控制方法：<br>
    open('网址路径','窗口名/_parent','width=100,height=200,top=300,left=400'):没有参数默认新建一个窗口打开文件，有位置宽高参数的话默认弹出一个窗口打开文件，_self/_blank/_parent在原有窗口打开，_target在新窗口打开;如果窗口名相同的话，只会打开最后一个窗口，如果窗口名不同的话则会把所有的窗口打开。<br>
    close():关闭浏览器窗口。<br>
innerWidth：窗口的文档显示宽度；innerHeight:窗口的文档显示高度。<br>
screen对象：<br>
    screen.availWidth:不包含任务栏的宽度；screen.availHeight:不包含任务栏的高度；<br>
    screen.width:任务栏的宽度；screen.height:任务栏的高度；<br>
history对象：<br>
    history.length:浏览器网页历史长度。<br>
    history.back():浏览上一个页面；history.forward():浏览下一个页面。<br>
    history.go(1/-1):返回到某一个具体的页面。<br>
location对象：<br>
    涉及到一些服务器和路径的操作，在这里不做过多学习。<br>
    location.href:获取本地文档路径。文档名字最好是英文的，否则解析之后会很长。<br>
    location.assign("文档网址"):加载新的文档；location.replace("文档网址"):替换当前文档，但不会生成历史记录。<br>
    location.reload():重新加载文档。<br>
navigater对象：返回浏览器的一些信息。<br>
定时器：
    setTimeout(不加括号的函数名/整个函数代码，时间毫秒数):延迟多少秒后执行此操作，返回值为id；clearTimeout(定时器返回值/定时器);<br>
    setInterval(不加括号的函数名，时间毫秒数)：以多少秒为周期的执行此操作；clearInterval(不加括号的函数名，时间毫秒数)<br>
    定时器的输出值是一个id值，清除定时器时可以直接将id放在清除定时器函数的括号里，火狐不支持setInterval。 <br>
    注意：定时器函数是属于异步函数，不是同步函数；也就是说定时器内部的代码不是先加载好等到一定时间后再操作，而是等到一定时间好定时器再加载内部的代码；如定时器内部嵌套定时器。
<h3>文档对象</h3>
可以把文档的节点看做一个对象，此对象有三个属性：nodeName,nodeType,nodeValue；nodeName分为三类：#document、元素名、属性名、#text。
创建新元素的方法：<br>
    &ltdiv class="div">&lt/div><br>
    var img1=document.createElement('元素名');<br>
    &nbspimg1.src='元素路径'；<br>
    var div1=document.getElementById('div');<br>
    &nbspdiv1.appendChild('img1');添加元素节点<br>
        封装成一个函数可以连续创建多个元素。<br>
    element.removeChild('所要删除的元素名')：删除元素的方法。<br>  
获取HTML文档对象的方法：<br>
    document.getElementById('id属性值'):通过指定id属性值获取对象。<br>
    document.getElementsByName('name属性值'):通过指定name属性值获取对象,获得是一个具有多个元素的数组，所以操作此元素时要加上下标再访问。<br>
    document.getElementsByTagName('元素标签名'):通过指定元素标签名获取对象，获得是一个具有多个元素的数组，所以操作此元素时要加上下标再访问。<br>
    document.getElementsByClassName();通过类名获取对象。<br>
    document.元素标签名s[i]:通过元素标签名获取对象。<br>
    document.元素标签名s["name属性名"]:通过元素标签的name属性名获取对象。<br>
    name属性名.子属性.孙子属性....:通过元素标签的name属性名获取对象。<br>
获取元素内容和标签名称：<br>
    element.innerHTML:获取或设置元素的内容。<br>
    document.write('所要写入的内容')：向HTML中写入内容的方法。<br>
    element.tagName或者element.nodeName:获取元素的标签名。<br>
获取或改变、添加元素属性值的方法：<br>
    element.属性名；<br>
    注意：如果是class属性，要用element.className格式。<br>
    element.getAttribute('属性名')；<br>
    element.setAttribute('属性名'，'属性值')；<br>
    element.removeAttribute('属性名')；移除属性的方法。<br>
获取或改变、添加样式属性值的方法：<br>
    element.style.属性名；<br>
    注意：如果带有“-”的样式属性名的话，要把“-”省略，并且第二个单词的首字母大写。<br>
    控制多个元素样式的方法是给多个元素添加相同的class属性值，然后通过控制属性选择器来控制样式；一个元素添加两个选择器的样式，属性值之间用空格隔开，JS代码之间也要添加一个空格代码。<br>
查询节点类型的方法（可以把节点看做模块或容器，可以通过节点来操作样式等）：<br>
    element.nodeType;<br>
    元素返回1，属性返回2，文本返回3。<br>
    注意：好像和nodeName有点类似。名称#text和#document。<br>
element.nodeValue:<br>
    文本节点的nodeValue为文本内容；<br>
    属性节点的nodeValue为属性值；<br>
    元素节点没有nodeValue值<br>
element.parentNode:获取元素的父节点。<br>
element.childNodes:获取元素的子节点。注意：在用属性length查询子节点个数的时候有的浏览器会把空格看做一个子节点，且空格节点无法控制操作样式。<br>
element.children:获取元素的子节点。注意：在用属性length查询子节点个数的时候,空格是不会被看做一个节点的。<br>
element.first/lastChildren:获取元素的第/最后一个子节点子节点（有的浏览器包括空格）；element.first/lastElementChildren:获取元素的第/最后一个子节点子节点(不包括空格)；两者之间存在浏览器兼容问题，可以用if条件语句解决此问题。<br>
element.previousSibling;element.previousElementSibling:同级节点的前一个节点。<br>
element.nextSibling;element.nextElementSibling:同级节点的后一个节点。<br>
属性节点：<br>
    element.attributes:元素属性节点。<br>
    element.insertBefore(所要插入的元素名，element.children[n](所要插入的位置))：插入到某元素之前。<br>
    element.replaceChild(所要插入的元素名，element.children[n](所要替换的元素)):替换元素中的子节点。<br>
css选择器对象节点：
document.querySelector('单个选择器名').style.background='red':获取此类选择器元素中的第一个。
注意：document.querySelector('单个选择器名1,单个选择器名2'):只会获取html文档中的第一个选择器。
document.querySelectorAll('选择器名').style.background='red':获取此类选择器元素中的所有元素，此元素是不支持动态添加情况下的元素查找。（一定要通过for循环语句吗）

<h3>事件</h3>
事件可以看做手动调用函数的行为，类似于开启启动按钮的操作。<br>
添加事件的方法:<br>
    HTML元素内添加事件（可以添加多个事件，中间用逗号隔开）；<br>
    script标签内添加事件（不可以添加多个事件，只会执行最后一个事件）；在script标签中格式：获取的元素名.onclick=函数名,(此格式是不加括号的，如果加了括号不需要点击按钮，刷新之后则函数会直接已经执行,同时也不加引号，因为它是已经被定义的函数。);<br>
    元素名.addEventListener('click',不加括号的函数名)添加多个事件方式；元素名.removeEventListener('click',不加括号的函数名);
    此方法存在浏览器兼容问题，可以使用if-elseif-else语句解决此问题，attachEvent/detachEvent<br>
常用的事件类型：<br>
鼠标事件：<br>
    onclick：鼠标单击事件;<br>
    ondblclick：鼠标双击事件;<br>
    onmousedown:鼠标按下事件;<br>
    onmouseup:鼠标松开事件;<br>
    onmouseover:鼠标移入事件(元素名.addEventListener('onmouseover',不加括号的函数名));<br>    onmouseout:鼠标移开事件(元素名.addEventListener('onmouseover',不加括号的函数名));<br>
    contextmenu:单击鼠标右键事件(元素名.addEventListener('contextmenu',不加括号的函数名));<br>
键盘事件：<br>
    onkeydown:键盘按键按下事件，可以监听某个键是否被按下。（位置）；<br>
    onkeyup:键盘按键松开事件（位置）；<br>
    onkeypress:键盘按键按下松开事件（大小写），此键不能享用系统按键--control按键、shift按键等；<br>
    三者执行的顺序：onkeydown、onkeypress、onkeyup；<br>
其他事件：<br>
    onload:页面加载完成之后执行（也可以直接放在body开始标签中：onload=加括号不加引号的函数名）。<br>
    onchange=""事件；<br>
    onblur=""失去焦点执行事件；<br>
    oninput='':当用户对元素输入数据时触发。<br>
    text.select()：选取文本内容。<br>
    oncontextmenu="":鼠标右击事件。<br>
    text.focus()：获取焦点：<br>
    自动更换文本框焦点：<br>
        &ltinput type="text" name="text1" onkeydown="swi(form.text2)"><br>
        &ltinput type="text" name="text2" onkeydown="swi(form.text3)"><br>
        &ltinput type="text" name="text3" onkeydown="swi(form.text4)"><br>
        &ltinput type="text" name="text4" onkeydown="swi(form.text1)"><br>
        swi(str){<br>
            if(event.keyCode==13){<br>
                str.focus();<br>
                }<br>
            }<br>
    text1.oncopy="":禁止复制触发事件。
        text1.oncopy=function(){<br>
            alert("此文子禁止复制");<br>
            return false;<br>
            "alert(你复制了内容");<br>
            }<br>
    text1.onpaste="":禁止粘贴触发事件。
        text1.onpaste=function(){<br><br>
            alert("此位置禁止粘贴");<br><br>
            return false;<br><br>
            alert("你复制了内容");<br><br>          
        }<br><br>
事件的对象（event）：包含事件一些特征信息的对象,当事件触发时会给事件函数默认添加一个event作为参数,火狐要添加上事件函数参数才支持，谷歌支持。<br>
    type:事件的类型。<br>
    target:事件的目标。<br>
    clientX/Y:触发事件时，鼠标的水平/垂直坐标（相对于文档可见区域）（浏览器版本兼容问题：var e=e?e:event或者var e=e||event）。<br>
    screenX/Y:触发事件时，鼠标的水平/垂直坐标（相对于窗口区域）（浏览器版本兼容问题：var e=e?e:event或者var e=e||event）。<br>
    keyCode/which:返回按键的编码（也存在浏览器版本兼容问题）。<br>
    ctrlKey:事件触发时，是否按下ctrl键；<br>
    altKey:事件触发时，是否按下alt键；<br>
    shiftKey:事件触发时，是否按下shift键；<br>
    button:事件触发时，哪个鼠标按键被按下；返回值是0、1、2；（document.onmousedown=不带括号的函数名）<br>
事件的冒泡与捕获：<br>
    冒泡是从内侧子元素向外侧父元素依次执行，捕获是从外侧父元素向内侧子元素执行。<br>
    元素名.addEventListener('click',不带括号的函数名，false冒泡/true捕获)；<br>
    event.stopPropagation():阻止事件冒泡,可以直接把添加侦测事件函数的第三个参数省略，火狐不支持，谷歌支持。<br>
    event.preventDefault():阻止事件的默认行为,火狐不支持，谷歌支持。<br>
选择器对象：通过查找选择器获取对象。<br>
    document.querySelector('单个选择器名').style.background='red':获取此类选择器元素中的第一个。<br>
    注意：document.querySelector('单个选择器名1,单个选择器名2'):两个选择器只会获取html文档中的第一个选择器。<br>
    document.querySelectorAll('选择器名')[i].style.background='red':获取此类选择器元素中的所有元素，是一个数组；此元素是不支持动态添加情况下的元素查找。（要通过for循环语句输出所有）<br>
补充的内置函数：<br>
return():没有输出功能，就相当于一个装有水的瓶子，但是没有把水倒出来的能力,放到执行代码的最后，起到保存最后全部结果，return只能保存第一个数据，return之后的代码无法执行。<br><
arguments:就是把函数的参数封装成一个数组存储在arguments中，然后调用这个数组。在函数代码中，使用特殊对象arguments存储函数调用时“输入传递”给该函数的所有参数；arguments.length:检测参数的个数；arguments[0/1/2...]:某一个参数。<br>length:在创建函数时所设置的函数参数的个数。<br>
        function people(){<br>
        &nbsp&nbsp&nbspreturn  arguments.length;<br>
        }<br>
        var num=people{"name","age","职业"};<br>
        alert(num);<br>
        代码注释：单行//，多行/*..*/；<br>
this:与在哪里定义没有关系，与在哪里调用有关系，有点类似于语言中的代词。<br>
    在函数外部调用this,就是指的window对象。<br>
    在函数内部调用this,仍然指的是window对象。<br>
    用new来调用，那么绑定将是新创建的对象：<br>
        function test(){this.x=100};<br>
        var obj=new test();<br>
        alert(obj.x);<br>
        得100；<br>
    作为某个函数的方法调用，这时this就是指的上级对象：<br>
        function test1(){alert(this.x)};<br>
        var objo={};<br>
        objo.x=1000;<br>
        objo.m=test1;<br>
        objo.m();<br>
        得1000。<br>
    事件监听函数里的this。<br>
函数的apply()方法和call()方法：<br>
    function sum(num1,num2){return num1+num2};<br>
    function applysum1(num1,num2){return sum.apply(this,[num1,num2])};<br>
    function applysum2(num1,num2){return sum.apply(this,arguments)};<br>   function callsum(num1,num2){retuen sum.call(this,num1,num2)};<br>
    alert(sum/applysum1/applysum2/callsum(10,20));<br>
        得30；<br>
    扩充作用域的作用：<br>
    var color="red";<br>
    var o={color:"blue"};<br>
    function saycolor(){alert(this.color)};<br>
    saycolor()/saycolor.call(this)/saycolor.call(window);<br>
    得red;<br>
    saycolor.call(o);<br>
    得blue；<br>
    isFinite():此函数检查其参数是否为有限位的数，返回值为true或false。Infinite无穷大，-Infinite无穷小，系统定义常量。<br>
<h3>自定义函数</h3>
闭包：访问内部函数的方法,可以想成链接函数内部和外部的桥梁。<br>
内部函数的调用方法：<br>
    alert(函数名()())：每次都是从主函数开始执行;<br>
    得：内部函数的输出值。<br>
    var 变量名=函数名();<br>
    alert(变量名())：只是第一次从主函数开始执行，以后每次只执行内函数;<br>
    得：内部函数的输出值。<br>
闭包的作用：<br>
    应用闭包访问内部变量(局部变量)：用函数的内部函数访问函数的内部变量。<br>
    可以让局部变量始终保存在内存中；<br>
循环函数中的匿名函数：<br>
    function 外函数名(){<br>
        var arr=[];<br>
        for(var i=0;i<5;i++){ <br>
           arr[i]=(function(){<br>
              return "元素"+i;<br>
           })()<br>
        }<br>
        return arr;<br>
    }<br>
    匿名函数立即执行，参数的传递是按值传递。<br>
循环函数中的闭包：通过闭包让局部变量贮存在内存中。<br>
    function 外函数名(){<br>
        var arr=[];<br>
        for(var i=0;i<5;i++){<br>
           arr[i]=function(n){<br>
              return function(){<br>
                 return "元素"+i;<br>
              }<br>
           }(i)<br>
        }<br>
        return arr;<br>
    }<br>
    1.这里的匿名函数有一个参数n,也就是最终将返回的结果数值；<br>
    2.在调用每个匿名函数时传入变量i;<br>
    3.变量i的当前值会赋予n;<br>
    4.匿名函数内部创建并返回了一个访问n的包；<br>
    5.如此数组arr中的每个函数中都有了自己n变量的一个副本（闭包可以将局部变量贮存的内存中）。<br>
闭包中的this:<br>
    匿名函数的执行函数具有全局性，this通常是指向Window;<br>
        var name="window";<br>
        var obj={<br>
           name:object,<br>
           get:function(){<br>
              return function(){<br>
              return this.time;}<br>
           }<br>
        }<br>
        alert(obj.get()());
        可以使用对象冒充，强制改变this方向。<br>
        alert(obj.get().call(obj));<br>
        将this赋予一个变量，闭包访问这个变量。<br>
        var name="window";<br>
        var obj={<br>
           name:object,<br>
           get:function(){<br>
              var self=this;<br>
              return function(){<br>
              return this.time;}<br>
           }<br>
        }<br>
模仿块级作用域：通过将块级函数立即执行掉的方式来起到限制变量的作用域范围。<br>
    我们只希望声明的变量在局部作用域中起作用，在局部作用域之外的区域无效，起到节约内存的作用，所以我们通过模仿块级作用于的方法来实现此作用。<br>
    function fun(){<br>
       (function(){<br>
          for(var i=0;i<5;i++){<br>
               alert(i);<br>
          }<br>
       })()会立即执行匿名函数<br>
       alert(i);此时的i已经不存在，会报告不存在<br>
    }<br>
私有变量：<br>
    包括函数参数、局部变量和函数内部定义的其他函数。<br>
    特权方法：内部创建一个闭包，闭包可以访问私有变量；因此创建用于访问私有变量的公用方法，称作特权方法。<br>
    可以通过构造方法传参的方法访问私有变量。（此方法无法实现共享）<br>
    function people(_name){<br>
        var name=_name;<br>
        this.getname=function(){<br>
             return name;<br>
        }<br>
        this.setname=function(value){<br>
             name=value;<br>
        }<br>
    }<br>
    var p=new people("张三");<br>
    alert(p.getname());<br>
静态私有变量:函数内部不带有var的变量是全局变量，可以被全局调用，可以用共享模式propotype操作，如果把不带有var的变量函数放在在函数内部，此变量函数可以访问内部变量，简单的说，既可以实现共享又可以实现访问内部函数。<br>
    (function(){<br>
        var name="张三"；<br>
        User=function(){};<br>
        User.propotype.getname=function(){<br>
             return name;<br>
        }<br>
        User.propotype.setname=function(value){<br>
             return name="value";<br>
        }<br>
    })()<br>
<h3>表格</h3>
表格的行属性rows和单元格属性cells。<br>
table元素的方法：<br>
    添加行：<br>
    var addrow=table.insertRow(4);<br>
        addrow.style.background="red";<br>
        addrow.innerHTML="<td>新增1</td><td>新增2</td><td>新增3</td>";<br>
    删除行：<br>
        table.deleteRow(3);<br>
    删除标题：<br>
        table.deleteCaption();<br>
    添加标题：<br>
        table.createCaption();<br>
        table.innerHTML="添加的标题";<br>
        table.style.background="red";<br>
    添加删除：<br>
        create/addThead/Tfoot;<br>
<h3>表单</h3>
select对象方法：<br>
    select.add(option,before):向下拉列表中添加一个选项;<br>
    select.remove(index)：从下拉列表中删除一个选项;<br>
    创建下拉列表选项：<br>
        new Option("文本","value值",默认选中项true,是否有效值true);<br>
        使用createElement()方法。<br>
    function(){<br>
        var obj=document.form1.selcet1;<br>
        var opt=new Option("文本","value值");<br>
            obj.add(opt);<br>
        删除下拉列表全部选项：<br>
        obj.options.length=0; <br>
        删除下拉列表的选中项：<br>
        var index=obj.selectedIndex;<br>
        obj.remove(index); <br>
    }<br>
级联菜单：<br>
form方法：<br>
  reset():表单重置方法。<br>
  submit():表单提交方法。<br>
form对象事件句柄：放置在form开始元素标签内。<br>
    onreset():在重置表单之前调用。<br>
    onsubmit():在提价表单之前调用。<br>
    &ltform onreset="return chongzhi()" onsubmit="return tijiao()">&lt/form>:如果不将函数的返回值保存在return中，意思是只要函数执行就提交，无论返回值是什么，而把函数的返回值保存在return中并传递给onreset/onsubmit，意思是onreset/onsubmit能够识别布尔值并作出相应的判断。<br> 
<h3>视频</h3>
    v.play():播放方法；<br>
    v.pause()：暂停方法;<br>
    v.load;v.src="所要加载的视频路径":加载视屏方法；<br>
    v.canPlayType ("文件格式类型")；<br>
    v.paused属性：设置或返回是否暂停，属性值有true/false;<br>
    v.currentSrc返回文件路径(有时返回空置？)；<br>
    v.currentTime:设置或返回播放时间点。可以通过此方法设置重播、快进、快退功能。<br>
    v.defaultMuted:设置或返回是否默认静音；muted:设置静音功能。<br>
    v.volume:设置或返回音量的具体数值，数值在0到1之间。<br>
    v.controls:设置或返回播放按钮是否显示，有两个值true和false;<br>
    v.defultPlaybackRate=2;v.load();:设置默认的播放速度。速度值大于4时没声音，过小也会没声音。<br>
    v.duration：设置或返回视频总长度，必须网页加载完之后才可输出此值，所以需用onclike事件才可完成。<br>
进度条的创建方法：<br>
    &ltprogress id="progress" style="background:green  ; width: 500px">&lt/progress>@1可以直接用进度条元素标签创建<br>
    &ltdiv id="progressdiv" style="background:red  ; width: 2px;height: 20px">&lt/div>@2可以通过创建div的方式来创建进度条<br>
    &ltscript type="text/javascript"><br>
        var v=document.getElementById("vi");<br>
            function progress(){<br>
               var progress=document.getElementById("progress");<br>
               progress.max=v.duration;<br>
               progress.value=v.currentTime;<br>
               var progressdiv=document.getElementById("progressdiv");<br>
               progressdiv.style.width=Math.floor((v.currentTime/v.duration)*v.width)+"px"
            } <br>
            window.onload=function () {<br>
              v.addEventListener("timeupdate",progress)<br>
            }<br>
            或者：window.addEventListener("load",function(){v.addEventListener("timeupdate",progress)})<br>
    &lt/script><br>
<h3>canvas元素</h3>
绘制线条：<br>
    绘制直线的方法：<br>
        var canvas=document.getElementById("canvas元素的ID属性值"):通过canvas元素ID属性值获取画布。<br>
    var c=canvas.getContext("2d"):是JavaScript库中内置封装好的绘制基本线条、图形的方法在指定的2d环境进行绘制操作。<br>
    lineWidth=数字:设置线条宽度;<br>
    strokeStyle="颜色"：设置线条颜色。<br>
    moveTo(x,y):设置线条起点;<br>
    lineTo(x,y):设置线条路径。<br>
    stroke():绘制线条路径；fill():填充指定区域。<br>
    beginPath()：开始路径；colosePath():结束路径。<br>
绘制曲线的方法：<br>
    创建二次贝塞尔曲线：<br>
           moveTo(起始端点x1,起始端点y1)<br>
           quadraticCurveTo(控制点x2,控制点y2,结束端点x3,结束端点y3);<br>
           stroke();<br>
    创建三次贝塞尔曲线：<br>
           moveTo(起始端点x1,起始端点y1)<br>
           bezierCurveTo(控制点x2,控制点y2,控制点x3,控制点y3，结束端点x4,结束端点y4);<br>
           stroke();<br>
设置线条端点样式的方法：<br>
    lineCap:设置或返回线条的结束端点样式。<br>
        1.butt 默认，向线条的每个末端端点添加平直的边缘。<br>
        2.round 向线条的每个末端添加圆形线帽。<br>
        3.square 向线条的每个末端添加正方形线帽。<br>
    lineJoin:设置或返回两条线相交时的拐角类型。<br>
        1.miter 默认，创建夹角。<br>
        2.bevel 创建斜角。<br>
        3.round 创建圆角。<br>
    miterLimit:设置或返回最大的夹角结合长度。<br>
        1.lineJoin属性值为miter时，夹角结合长度可能过长；<br>
        2.可以通过设置miterLimit的属性值来改变夹角结合长度，并以斜角的类型显示。<br>
补充知识点：<br>
    绘图状态的保存与恢复：<br>
        c.save()：绘图状态的保存，只要放在状态之后就可保存;可以从上而下逐级保存。<br>
        c.restore():绘图状态的恢复，只要放在绘制操作方法之前就可恢复；可以自下而上逐级恢复。<br>
    检测此点是否在该路径中的方法：<br>
        c.beginPath();<br>
        c.moveTo(100,200);<br>
        c.lineTo(500,200);<br>
        c.lineTo(500,400);<br>
        c.closePath();<br>
        c.stroke();<br>
        if(c.isPointInPath(200,200)){<br>
            alert("该点在此路径中")<br>
        }else{<br>
            alert("该点不在此路径中")<br>
        }<br>
    注意：此路径必须是一个封闭路径，如果是线段的话只能判断出两端点在此路径中！<br>
    原点坐标的转换：<br>
        c.translate(x,y):坐标原点的移动；<br> 
        c.scale(倍数/百分数，倍数/百分数):缩放<br>
        c.rotate(Math.PI*弧度数)：旋转角度<br>
<h3>绘制矩形</h3>
绘制矩形的方法：<br>
    rect(x,y,矩形长度,矩形宽度);stroke();fill()<br>
    strokeRect(x,y,矩形长度,矩形宽度)<br>
    fillRect(x,y,矩形长度,矩形宽度)<br>
绘制圆角矩形：<br> 
    根据绘制圆弧的方法--arc()绘制圆角矩形：<br>
        c.arc(圆心x1,圆心y1,半径r,Math.PI*1,Math.PI*3/2);<br>
        c.arc(圆心x2,圆心y2,半径r,Math.PI*3/2,Math.PI*2);<br>
        c.arc(圆心x3,圆心y3,半径r,Math.PI*0,Math.PI*1/2);<br>
        c.arc(圆心x4,圆心y4,半径r,Math.PI*1/2,Math.PI*1);<br>
        c.closePath();<br>
        c.stroke();<br>
        c.fill();<br>
    根据双切线绘制圆角矩形：<br>
        c.moveTo(x4,y4-半径r);<br>
        c.arcTo(x1,y1,x2,y2,半径r);<br>
        c.arcTo(x2,y2,x3,y3,半径r);<br>
        c.arcTo(x3,y3,x4,y4,半径r);<br>
        c.arcTo(x4,y4,x1,y1,半径r);<br>
        c.stroke();<br>
        c.fill();<br>  
    将绘制圆角矩形的方法封装成一个函数：<br>
        由于JavaScript库中没有内置封装好的绘制圆角矩形的方法，所以我们可以将绘制圆角矩形的方法封装成一个函数以便随时调用。<br>
        function roundrect(x,y,w,h,r){<br>
            c.beginPath();<br>
            c.moveTo(x,y+h-r);<br>
            c.arcTo(x,y,x+w,y,r);<br>
            c.arcTo(x+w,y,x+w,y+h,r);<br>
            c.arcTo(x+w,y+h,x,y+h,r);<br>
            c.arcTo(x,y+h,x,y,r);<br>
            c.stroke();<br>
            c.fill(); <br>                    
        }<br>
        roundrect(100,1000,400,200,50);<br>         
    用循环语句调用函数绘制多个圆角矩形：<br>
        for(j=1;j<5;j++){<br>
            for(i=1;i<20;i++){<br>
                roundrect(50*i,1300+130*j,30,100,10);<br>
                      } <br>
                  } <br> 
    清空矩形区域的方法：<br>
        clearRect(x,y,矩形长度,矩形宽度);<br>
        注意：此方法只是清空画布中所绘制的色彩，并不能清空画布的背景色彩，如需清空画布背景色可以将画布背景色设置为无色或者在画布中绘制一个无色的图形。<br>
    裁切矩形图片的方法：此方法会裁切此代码之前的所有路径。<br>
        c.rect(x,y,w,h);<br>
        c.clip();注意还有问题没有解决此知识点！！！<br>
<h3>绘制圆弧</h3>
绘制圆弧的方法：<br>
    arc(x,y,半径长度,开始角度,结束角度,绘制方向);<br>
    stroke();<br>
    fill();<br>
根据两切线绘制圆弧的方法：<br>
    moveTo(x0,y0);<br>
    arcTo(x1,y1,x2,y2,r);<br>
    lineTo(x2,y2);<br>
    stroke();<br>
    fill();<br>
    注意：两切线所切的扇形区域必定是四分之的圆形面积，或者说所切扇形的两半径边必定与两切线垂直。<br> 
<h3>绘制文字</h3>
绘制文字的方法：<br>
    c.font="50px 隶书";<br>
    c.strokeText("绘制的文字",起始点x,起始点y,字体最大值);<br>
    c.fillText("绘制的文字",起始点x,起始点y,字体最大值);<br>
文本的水平对齐方式:<br>
    c.textAlign="start/end/center/left/right";<br>
文本的垂直对齐方式:<br>
    c.textBaseline="top/bottom/middle/hanging(悬挂基线)/ideographic(中文基线)"<br>
指定文本的宽度：<br>
    var str="文本的宽度";<br>
    var width=c.measureText(str).width;<br>
    alert();<br>
绘制文字阴影的方法：<br>
    shadowColor='颜色名';<br>
    shadowOffsetX=纯数字不加引号;<br>
    shadowOffsetY="数字加单位可以加引号";<br>
    shadowBlur=纯数字;(可以把模糊系数看成Z轴的数值)<br>
<h3>创建渐变色</h3>
线性渐变色：<br>
    var gradient=c.createLinearGradient(x1,y1,x2,y2);<br>
        gradient.addColorStop(大于0小于1的小数,"颜色");<br>
        gradient.addColorStop(大于0小于1的小数,"颜色");<br>
        gradient.addColorStop(大于0小于1的小数,"颜色");<br>
        gradient.addColorStop(大于0小于1的小数,"颜色");<br>
    c.fillStyle=gradient;<br>
    c.fillRect(x,y,w,h);<br>
放射性渐变色：
    var radial=c.createRadialGradient(x1,y1,r1,x2,y2,r2);<br>
        radial.addColorStop(大于0小于1的小数,"颜色");<br>
        radial.addColorStop(大于0小于1的小数,"颜色"");<br>
        radial.addColorStop(大于0小于1的小数,"颜色");<br>
        radial.addColorStop(大于0小于1的小数,"颜色");<br>
        radial.addColorStop(大于0小于1的小数,"颜色");<br>
    c.fillStyle=radial;<br>
    c.fillRect(x,y,w,h);<br>

创建背景填充模式的方法：c.createPattern(img,'repeat/repate-x/repeat-y/no-repeat');<br>
    方法一：<br>
        var img=new Image();@1<br>
            img.src="图片路径";@2(注意：@1、@2这两个步奏是获取画布环境下的图片，如果引用此页面中已有的图片等同于var img=document.getElementById("图片的id属性值"))<br>
            img.onload=function(){<br>
                var pattern=c.createPattern(img,"repeat");<br>
                c.fillStyle=pattern;<br>
                c.fillRect(x,y,w,h)<br>
            }
    方法二：
        此方法有一点小问题，应该是己的代自码出现错误，大体思路已理清，回头再细究其原因
画布的转换：此功能只作用于此代码之后。<br>
    c.translate(x,y):重置画布原点。<br>
    c.scale(x,y):画布的缩放。<br>
    c.totate(弧度)：旋转,如需将角度转换为弧度，需按公式：degrees*Math.PI/180。<br>
图像的合成：透明度会对重合区域有一些影响<br>
    c.globalAlpha=0.5:透明度设置。<br>
    c.globalCompositeOperation（整体合成操作）='source/destination(目标)-over/atop/in/out或lighter/copy/xor';<br>
图像的绘制：
    c.drawImage(img,x1,y1,x2,y2,x3,y3,x4,y4):1,2坐标点是图片的裁切和所裁切的宽高，3,4坐标点图片的摆放位置宽高，img3/34/3412。<br>
像素操作：<br>   
    获取像素对象的操作方法：<br>
    var xs=getImageData(x,y,w,h);<br>
        alert(xs.width);<br>
        alert(xs.height);<br>
        alert(xs.data.length);<br>
        每一个data数据之中包含四个颜色分量<br>
        alert(xs.data[0]);<br>
        alert(xs.data[1]);<br>
        alert(xs.data[2]);<br>
        alert(xs.data[3]);<br>
    设置像素对象的操作方法：<br>
    for(var i=0;i&ltxs.data.length/4;i++){<br>
      obj.data[0+4*i]=数值/Math.floor(Math.random()*255);<br>
      obj.data[1+4*i]=数值/Math.floor(Math.random()*255);<br>
      obj.data[2+4*i]=数值/Math.floor(Math.random()*255);<br>
      obj.data[3+4*i]=数值/Math.floor(Math.random()*255);<br>
      (注意：反色图形的绘制：obj.data[0+4*i]=255-obj.data[0+4*i]；只设置三个颜色，不设置透明度。滤镜效果：只需改变三个颜色分量之中的一个分量就可以实现滤镜效果。)<br>
      }<br>
    c.putImageData(obj,x0,y0,x1,y1,x2width,y2height):0是摆放坐标位置，12是裁切点和裁切宽高<br>
    注意：如果对外部图片进行像素操作的话需要设置虚拟环境或将图片上传至服务器之后再操作，这里我先不去设置这一块，回头需要的时候再细究。<br>
    创建新的像素对象的方法:
    c.createImageData(x,y或者已有的创建好的像素对象)；
    注意：通过取余、平方等函数对颜色分量赋值可以得到有趣的图像。<br>
    toDataUrl()对象的使用：<br>
    &ltimg src="" id="img1"><br>
    var img1=document.getElementById("img1");<br>
    var imgsrc=can.toDataURL();<br>
        img1.src=imgsrc;<br>
    注意：此方法还有一些问题没搞明白，回头再细究。<br>
  </pre>        
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-javascript-total{
  background-image: url(../assets/img/detailBg.jpg);
  padding:0.8rem 0.3rem;
}
pre{
  white-space: pre-wrap;
}
.title{
  text-align: center;
  padding-bottom: 0.3rem;
}
</style>
