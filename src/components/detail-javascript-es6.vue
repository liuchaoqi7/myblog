<template>
<div class="detail-javascript-ES6">
<h1 class="title">深入理解ES6</h1>
<pre>
for-in,for-of,for的区别：疑问
<h1>第一章：块级作用域绑定</h1> 
    无论在哪里用var声明的变量，都会被当成在当前作用域顶部声明的变量，这就是我们常说的提升机制；为此ECMAScript 6引入块级作用域来强化对变脸生命周期的控制；
    块级声明用于声明在指定块的作用域之外无法访问的变量，存在于：
        函数内部；
        块中--字符{}中的区域,例如for语句、if语句等；
    用let代替var来声明变量，就可以把变量的作用域限制在当前代码块中；由于let声明不会被提升，因此开发者通常将let声明语句放在封闭代码块的顶部，以便整个代码块都可以访问；
    禁止重声明：假设某个作用域中已存在某个标识符，此时如果再用let关键字声明它会抛出错误；
    使用const声明的是常量，其值一旦被设定后不可更改，因此每个通过const声明的常量必须进行初始化；
    const和let声明的都是块级标识符，所以常量也只能在当前代码块内有效，一旦执行到块外会立即被销毁；常量同样也不会被提升至作用域顶部；
    在同一作用域中用const声明已经存在的标识符也会导致语法错误；
    都不可以为const定义的常量再赋值，否则会抛出错误；如果常量是对象，则对象中的值可以修改；但是对象的绑定不能修改：
    临时死区：如果在let或者const声明的变量之前访问变量，此时的变量处在临时死区，会被报错；操作符typepf在块级作用域中访问临时死区的变量会报错，在块级作用域外用typeof访问临死死区的变量会返回undefined;
    循环里的每次迭代同时共享着变量i,循环内部创建的函数全部保留对相同变量的引用；为了解决这个问题，开发者们在循环中使用立即调用函数表达式（IIFE）,以强制生成计数器变量的副本：
        var funcs = [];
        for(var i = 0;i < 10;i++){
            funcs.push((funcion(value){
                return function(){
                    console.log(value)
                }
            }(i)))
        }
    let声明模仿上述示例中IIFE所做的一起来简化循环过程，每次迭代循环都会创建一个新变量，并以之前迭代中同名变量的值将其初始化；
    let声明在循环内部的行为是标准中专门定义的，它不一定与let的不提升特性相关；
    对于普通的for循环来说，可以在初始化变量时使用const,但是更改这个变量的值就会抛出错误；而在for-in和for-of循环中，是因为每次迭代不会修改已有绑定，而是会创建一个新绑定；
    用var在全局作用域创建的变量是全局对象的属性，而用let和const创建的不是全局对象的属性：当var被用于全局作用域时，它会创建一个新的全局变量作为全局对象的属性，这意味着用var很可能会无意中覆盖一个已经存在的全局变量；即使全局变量被定义在window上也不能幸免于被var声明覆盖；如果你在全局作用域中使用let或const，会在全局作用域下创建一个绑定，但该绑定不会添加为全局对象的属性；换句话说，用let或const不能覆盖全局变量，而只能遮蔽它；如果不想为为全局对象创建属性，则使用let和const要安全的多；
<h1>第二章：字符串和正则表达式</h1>   
    正则表达式之所以重要是因为它赋予了开发者更多操作字符串的能力；
    在ES6之前的版本中使用的是UTF-16编码格式，而ES6使用了UTF-32的编码格式；
    Unicode的目标是为全世界每一个字符提供全球唯一的标识符（又被称作码位），我们称之为字符编码；
    codePointAt()方法：此方法接收编码单元的位置而非字符位置作为参数，返回与字符串中给定位置对应的码位；
    c.codePointAt(0) > 0xFFFF:检测一个字符占用的编码单元数量；
    string.fromCodePoint():此方法根据指定的码位生成一个字符；
    normalize()方法：标准化字符串的方法，此方法接收一个可选的字符串参数：
        “NFC”:
        "NFD":
        "NFKC":
        "NFKD":
    正则表达式u修饰符：当一个正则表达式添加了u修饰符，他就从编码单元操作模式切换为字符模式，如此一来正则表达式就不会视代理对为两个字符，从而完全按照预期正常运行；
    检测字符串中是否包含某子字符串的方法：第一个参数指定要搜索的文本；第二个参数是可选的，指定一个开始搜索的位置的索引；如果传入正则表达式会发生错误；indexOf()和lastIndexOf()可以接收正则表达式；
        includes():如果在字符串中检测到指定文本则返回true,否则返回false;
        startsWith():如果在字符串的起始位置检测到指定文本则返回true,否则返回false;
        endsWith():如果在字符串的结束位置检测到指定文本则返回true,否则返回false;
    repeat()方法：接收一个number类型的参数，表示该字符串的重复次数；
    正则表达式y修饰符：
        它会影响正则表达式搜索过程中的sticky属性，当在字符串中开始字符串匹配时，它会通知搜索从正则表达式的lastIndex属性开始进行，如果在指定位置没能匹配成功，则会停止继续匹配；
        没有修饰符的还会从索引0开始搜索；有修饰符g的从索引index开始搜索；有修饰符y的粘滞正则表达式从索引index搜索不到相应字符就此终止；
        调用正则表达式对象的方法才会涉及lastIndex属性，调用字符串的方法则不会触发粘滞行为；
        sticky属性是检测y修饰符是否存在；如果浏览器不支持粘滞修饰符则同try-catch语句检测；
    正则表达式的复制：
        let re1 = /ab/i,
            re2 = new RegExp(re1,"g");//在ES5中抛出错误，在ES6中正常运行
        当使用RegExp构造函数将其复制为新变量re2时，使用g修饰符代替了i修饰符；如果不传入第二个参数re1与re2使用相同的操作符；
    source属性获取正则表达式的文本，flags属性获取所有应用于当前正则表达式的修饰符字符串；
    模板字面量：
        为了让开发者解决更复杂的问题，ES6模板字面量语法支持创建专用语言（DSL）;JavaScript是一门通用语言，DSL是与其概念相反的的编程语言，通常是指为某些具体且有限的目标设计的语言；
        这个方案是扩展ECMAScript基础语法的语法糖，其提供一套生成、查询并操作来自其他语言里内容的DSL,且可以免受注入攻击，例如，XSS、SQL注入，等等；
        事实上ECMAScript5中一直缺少许多特性，而ECMAScript6通过模板字面量的方式进行了填充：直白点讲就是对ECMAScript5的功能的补充；
            多行字符串：
            基本的字符串格式化：将变量的值嵌入字符串的能力；
        使用反撇号（`）替代了单双引号来创建字符串模板字面量，支持直接换行而不需要换行符，当然也可以支持换行符；
        自JavaScript诞生起，开发者们一直在寻找一种创建多行字符串的方式，但如果使用单双引号，字符串一定要在同一行才行；由于JavaScript长期以来一直存在一个语法bug，在一个新行最前方添加反斜杠（\）可以承接上一行的代码，因此确实可以利用这个bug来创造多行字符串；只需要在字符串中加上换行符（\n\）就可以输出一个新行了；
        在一个模板字面量中，你可以把任何合法的JavaScript表达式嵌入到占位符中并将其作为字符串的一部分输出到结果中；占位符有一个左侧的${和右侧的}符号组成，中间可以包含任意的JavaScript表达式；也可以在一个模板字面量中嵌入另一个模板字面量；
        标签模板：
            每个模板标签都可以执行模板字面量上的转换并返回最终的字符串值：let message = tag`hello world`;
            标签可以是一个函数：
                let count = 10,
                price = 0.25,
                message = tag`${count} items cost $${(count*price).toFixed(2)}.`;
                function tag(literals,...substitutions){
                  // 返回一个字符串
                }
                literals数组包含以下元素：
                    第一个占位符前的空字符串（""）；
                    第一第二个占位符之间的字符串（" items cost $"）；
                    第二个占位符后的字符串（“.”）；
                substitutions数组包含以下元素：
                    count：
                    count*price).toFixed(2)：
        String.raw()标签:通过模板标签可以访问到字符转义被转换成等价字符串前的原生字符串 
            message2 = String.raw`hello\nworld`；
            console.log(message2); // hello\\nworld
            原生字符串信息同样被传入模板标签；
<h1>第三章：函数</h1>
    JavaScript函数有一个特别的地方，无论在函数定义中声明里多少形参，都可以传入任意数量的参数，也可以在定义函数时添加针对参数数量的处理逻辑，当已定义的形参无对应的传入参数时为其指定一个默认值。
    在包含逻辑或（||)操作符的表达式中，如果不显示前一个操作数的值为false时，总会返回后一个值。对于函数的命名参数，如果不显示的传值，则其默认值为undefined。
    ES6中的默认参数值：
        如果没有参数传入值则为其提供一个初始值；
        function makeRequest(url,timeout = 2000,callback = function(){}) {
            //函数的其余部分
        }
        function makeRequest(url,timeout = 2000,callback) {
            //函数的其余部分
            //在这种情况下，只有当不为第二个参数传入值时或主动为第二个参数传入undefined时才会使用timeout的默认值；
            //当给第二个参数传入null值时，不使用默认参数，null 是合法值；
        }
    在非严格模式下，命名参数的变化会同步更新到arguments对象中，所以当first和second被赋予新值时，arguments[0]和arguments[1]相应的也就更新了；
    在严格模式下，命名参数的变化不会同步更新到arguments对象中，所以当first和second被赋予新值时，arguments[0]和arguments[1]依然不会改变；当使用默认参数时和在严格模式下一样，arguments不会改变；
    参数的默认值不可访问函数体内声明的变量；
    在函数的命名参数前添加三个点（...）就表明这是一个不定参数，该参数为一个数组，包含着自它之后传入的所有参数，通过这个数组名即可逐一访问里面的参数；函数的length 属性统计 的是命名参数的数量，不定参数的加入不会影响length属性的值；
    每个函数最多只能声明一个不定参数，而且一定要放在所有参数的末尾；不定参数不能用于对象字面量setter中，因为对象字面量setter的参数有且只能有一个；
        let object = {
            //语法错误：不可以在setter中使用不定参数
            set name(...value){
                //执行一些逻辑
            }
        }
    如果声明函数时定义了不定参数，则在函数被调用时，arguments对象包含了所有传入函数的参数；
    不定参数可以让你指定多个各自独立的参数，并通过整合后的数组来访问；而展开运算符可以让你指定一个数组，将他们打散后作为各自独立的参数传入函数；
    Math.max()方法不允许传入数组，所以在ES5及之前的版本中可能需要手动实现从数组中遍历取值，或者像这样使用apply()方法；
        let values = [25,50,75,100];
        console.log(Math.max.apply(Math,values)); //100
    在ES6中使用展开运算符：
        let values = [-25,-50,-75,-100];
        Math.max(...values,0);//100 第二个参数是用来限定返回的最小值是0；
    name属性：
        函数表达式有一个名字，这个名字比函数本身被赋值的变量的权重高；
        getter函数或者setter函数其名称带有前缀get或set;
        通过bind()函数创建的函数，其名称将带有“bound”前缀；
        通过Function构造函数创建的函数，其名称将带有前缀“anonymous”;
    ES5及之前的版本中函数可以结合new使用，函数内的this值将指向一个新对象，函数最终返回这个对象；如果不使用new操作符则会执行这个函数不会返回什么；
    JavaScript函数有两个不同的内部方法：
        [[call]]:如果不使用new操作符调用函数，则执行[[call]]函数，从而直接直接执行函数体；
        [[construct]]:当使用new操作符调用函数时，执行的是[[construct]]函数，它负责创建一个通常被称作实例的新对象，然后再执行函数体，将this绑定在实例上；具有[[construct]]方法的函数被统称为构造函数；并不是所有的函数都是构造函数，因此也就不是所有的函数都可以通过new调用，例如箭头函数就没有[[construct]]方法；
    原属性new.target:指向实例的构造函数；在函数外部使用new.target是一个语法错误；
    在ES5中严格模式下，在代码块中声明函数会出现语法错误；在非严格模式下不会报错；在ES6中也不会报错；
    在ES6中即使处于非严格模式下，也可以声明块级函数，但其行为与严格模式下稍有不同。这些函数不再提升至代码块的顶部，而是提升至外围函数或全局作用域的顶部；
    箭头函数与传统函数有一些不同点：
        没有this、supper、argunments和new.target绑定，这些值都是有外围最近一层非箭头函数决定；
        不能通过new关键字调用；
        没有原型；
        不可以改变this的绑定；
        不支持重复的命名参数；
    箭头函数同样也有一个name属性，这与其他函数的规则相同；
    箭头函数语法：箭头函数的设计目标是用来替代匿名函数表达式的；
        创建一个空函数：
            let doNothing = () => {};
        没有参数传入时：
            let getName = () => "Nicholas";
        一个参数且返回参数：
            let reflect = value => value;
        传入两个或者两个以上的参数：
            let sum = (num1,num2) => num1 + num2;
        有多个表达式组成的更传统的函数体：
            let sum = (num1,num2) =>{
                return num1 + num2;
            }
        在箭头函数外返回一个对象字面量：
            let getTempItem = id =>({id:id,name:"Temp"});
    立即执行函数表达式：
        定义一个匿名函数并立即调用，自始至终不保存对该函数的引用：
            let person = function(name){
                return {
                    getName: function(){
                        return name;
                    }
                }
            }("Nicholas");
            在这段代码中，立即执行函数表达式通过getName()方法创建了一个新对象，将参数name作为该对象的一个私有成员返回给函数的调用者。
        只要将箭头函数包裹到小括号里，就能用它实现相同的功能：
            let person = ((name) => {
                return {
                    getName:function(){
                        return name;
                    }
                }
            })("Nicholas");
            注意，小括号只包裹箭头函数定义，没有包含("Nicholas"),这一点与正常函数有所不同，有正常函数定义的立即执行函数表达式既可以用小括号包裹函数体，也可以额外包裹函数调用的部分；疑问：P63
    尾调用指的是函数作为另一个函数的最后一条return语句被调用返回；通常用作函数的优化；但是不能有其他的操作；
<h1>第四章：扩建对象的功能性</h1>
    对象的类别：
        普通对象：具有JavaScript对象所有的默认内部行为；
        特异对象：具有某些与默认行为不符的内部行为；
        标准对象：ES6规范中定义的额对象，例如：Array、Date等，标准对象既可以是普通对象，也可以是特异对象；
        内建对象：脚本在开始执行脚本时存在于JavaScript执行环境中的对象，所有标准对象都是内建对象；
    ES6中对象字面量的语法扩展：
        当一个对象的属性与本地变量同名时，不必再写冒号和值，简单地只写属性名即可；
        创建对象内的方法时，消除了冒号和function关键字；其name属性为方法名；
    对象中的可计算属性：就是对象的属性名可以通过变量形式在方括号中引用；
    Object.is()方法来弥补全等运算符的不准确运算，这个方法接收两个参数，如果两个参数类型相同且具有相同的值，则返回true;此方法大部分情况下与===运算符相同，唯一的区别在于+0和-0被识别为不相等并且NaN和NaN等价；
    Object.assign(receiver,object)方法：混合方法是一个对象接收来自另一个对象的属性和方法；此方法不能讲提供者的访问器属性复制到接收对象中，访问器属性最终会被转变为接收对象中的一个数据属性；
    Object.create()方法：创建对象的方法；
    Object.setPrototypeof()方法：改变、设置任意原型对象的原型，他接受两个参数，被改变原型的对象及替代第一个参数原型的对象；
    简化原型访问的Super引用：此属性必须在简写方法的对象中使用，如果在其他方法声明中使用会导致语法错误；
    对象的方法有一个内部的[[HomeObject]]属性来容纳这个方法从属的对象；
    在ES6中同样清晰定义了自有属性的枚举顺序：当枚举属性时，数值键在先，字符键在后；数值键总按升序排列，字符键按照插入时的顺序排列；
<h1>第五章：解构--使数据访问更便捷</h1>
    对象解构：必须提供相应的初始化程序--var,let和const,且要初始化;
        let node = {
            type:"inde",
            name:"foo"
        };
        let {type, name} = node;
        修改变量的值：
        let node = {
            type:"inde",
            name:"foo"
        },
        type = 5,
        name = 6;
        ({type, name} = node);
    使用解构赋值表达式时，如果指定的局部变量名称在对象中不存在，那么这个局部变量会被赋值为undefined;
    当指定的属性不存在时，可以随意定义一个默认值，在属性名称后添加一个等号（=）和相应的默认值即可；
    为非同名局部变量赋值：
        let node = {
            type:"inde",
            name:"foo"
        };
        let {type：localType, name:localName} = node;
        console.log(localType);//inde
        console.log(localName);//foo
        当使用其他变量名进行赋值时也可以添加默认值，只需在变量名后添加等号和默认值即可；
        let node = {
            type:"inde",
        };
        let {type：localType, name:localName = "bar"} = node;
        console.log(localType);//inde
        console.log(localName);//bar
    嵌套对象解构：
        let node = {
            type:"inde",
            name:"foo",
            loc:{
                start:{
                    line:1,
                    column:1
                },
                end:{
                    line:1,
                    column:4
                }
            }
        };
        let {loc:{start}} = node;
        console.log(start.line);//1
        console.log(start.column);//1
        与对象属性不同名的局部变量嵌套：
        let node = {
            type:"inde",
            name:"foo",
            loc:{
                start:{
                    line:1,
                    column:1
                },
                end:{
                    line:1,
                    column:4
                }
            }
        };
        let {loc:{start：localStart}} = node;
        console.log(localStartlocalStart.line);//1
        console.log(localStart.column);//1
    数组解构：
        在数组解构语法中，我们通过值在数组中的位置进行选取，且可以将其存储在任意变量中，未显示声明的元素都会直接被忽视；在这个过程中，数组本省不会发生任何变化；
        let colors = ["red","green","blue",["deepRed","deepBlue"]];
        let [ , ,thirdColor,[deep1]] = colors;
        console.log(thirdColor);//"deepRed"
        console.log(deep1);//"blue"
        更改变量的值并设置默认值：
        let colors = ["red","green","blue"],
            thirdColor = "black";
        let [ , ,thirdColor,forthColor = "yellow"] = colors;
        console.log(thirdColor);//"blue"
        console.log(forthColor);//"yellow" 
    不定元素；在数组中通过...语法将数组中的其余元素赋值给一个特定的变量；
        let colors = ["red","green","blue"];
        let [ firstColor,...restColor] = colors;
        console.log(firstColor);//"red"
        console.log(restColor.length);//2
        console.log(restColor[0]);//"green"
        console.log(restColor[1]);//"blue"
    结构参数：
        将参数设置为命名属性的对象，可以更加清晰地了解函数预期传入的参数；
            function setCookie(name,value,{secure,path,domain,expires}){

            };
            setCookie("type","js",{
                secure:true,
                expires:6000
            });
            此种模式下的参数为必填参数，如果调用时不传递参数会报错;
            如果想要结构参数为可选，则必须为其提供默认参数：
            function setCookie(name,value,{secure,path,domain,expires} = {}){
                //结构参数都为undefined,且不会报错
            };

        结构参数的默认值：
            function setCookie(name,value,
            {  
                secure=false,
                path="/",
                domain="ex",
                expires="red"} = {

                }){
                //结构参数都为undefined,且不会报错
            };
<h1>第六章：Symbol和Symbol属性</h1>
    Symbol是第六种原始数据类型；起初人们用它来创建对象的私有成员（私有名称），也就对象的非字符串访问方式；
    Symbol的创建方式：
        let firstName = Symbol("first name");
        let person = {};
        person[firstName] = "Nicholas";
        console.log(person[firstName]);//"Nicholas"
        console.log("first name" in person);//false
        console.log(firstname);// "Symbol(first name)"
        Symbol的描述被存储在内部的[[Description]]属性中，通常不能直接访问，但可以输出；
    所有使用可计算属性名的地方，都可以使用Symbol;
    有时需要在不同的代码中共享一个Symbol,因此ES6提供了一个可以随时访问的全局Symbol注册表解决此问题--Symbol.for()；
        接受即将创建的Symbol的字符串标识符，这个参数也被用于Symbol的描述：
            let uid = Symbol.for("uid");
            let object = {};
            object[uid] = "12345";
            console.log(object[uid]);//"12345"
            console.log(uid);//"Symbol(uid)"
        Symbol.keyFor()方法：此方法在Symbol全局注册表中检索与Symbol有关的键；
    String()函数调用了uid.toString()方法，返回字符串类型的Symbol描述的内容，但是不可以和字符串进行拼接；但是等价于布尔值的true;
    Object.getOwnPropertySymbols()方法：此方法返回的值是一个包含所有Symbol自有属性的数组；
    通过well-know Symbol暴露内部操作：
        Symbol.hasInstance:一个在执行instance时调用的内部方法，用于检测对象的续承信息；
            每一个函数都有一个Symbol.hasInstance方法，用于确定对象是否为函数的实例；
            Symbol.hasInstance方法只接受一个参数，即要检查的值，如果传入的值是函数的实例，则返回true；
            obj instanceof Array;等价于：Array[Symbol.hasInstance](obj);
            定义一个无实例的函数：
                function MyObject(){
                    //空函数
                }；
                Object.defineProperty(MyObject,Symbol.hasInstance,{
                    value:function(v){
                        return false;
                    }
                });
                let obj = new MyObject();
                console.log(obj instanceof MyObject); //false\
        Symbol.isConcatSpreadable:一个布尔值，用于用于表示当传递一个集合作为Array.prototype.concat()方法的参数时，是否应该将集合内的元素规整到同一层级；是一个可选属性；
            concat()方法被设计用于拼接两个数组，会将非数组参数逐一添加到数组末尾；   
            Symbol.isConcatSpreadable属性值为true表明类数组对象的属性值应当作为独立元素添加到数组中；
    替换正则表达式的作用Symbol属性
    ：这四个Symbol属性是相应方法的第一参数应该调用的正则表达式参数的方法，他们本定义在RegExp.prototype中，是字符串方法应该使用的默认实现；
        Symbol.match:一个在调用String.prototype.match()方法时调用的方法，用于比较字符串；
        Symbol.replace:一个在调用String.prototype.replace()方法时调用的方法，用于替换字符串的子字符串；
        Symbol.search:一个在调用String.prototype.search()方法时调用的方法，用于在字符串中定位子字符串；
        Symbol.split:一个在调用String.prototype.split()方法时调用的方法，用于分割字符串；
    Symbol.toPrimitive:一个返回对象原始值的方法；
        在JavaScript引擎中，当执行特定操作时，经常会尝试讲对象转换到相应的原始值；到底使用哪一种原始值以前是有内部操作决定的，但ES6的标准中，通过Symbol.toPrimitive方法可以更改那个暴露出来的值；
        此方法接收三个参数--类型提示：“number”、"string"或"default";
    Symbol.toStringTag属性：
        在不同作用域中的对象之间传递，如何确定它的类型，Symbol.toStringTag属性就是为了解决这个问题；
        此属性定义了调用对象的Object.prototype.toString.call()方法时返回的值；
        Person.prototype.[Symbol.toStringTag] = "person";
    Symbol.unscopables:一个定义了一些不可被with语句引用的对象属性名称的对象集合；
<h1>第七章：Set集合与Map集合</h1>
    在ECMAScript标准制定之前，由于可选的集合类型有限，数组使用的又是数值型索引，因而经常被用于创建队列和栈。如果开发者们需要使用非数值型索引，就会用非数组对象创建所需的数据结构，而这就是Set集合和Map集合的早期实现；
    Set集合是一种无重复元素的列表，开发者们一般不会逐一读取数组中的元素，也不太可能逐一访问Set集合中的每一个元素，通常的做法是检测给定的值在某个集合中是否存在。Map集合内含多组键值对，集合中每个元素分别存放着可访问的键名和它对应的值，Map集合经常被用于缓存频繁取用的数据。在之前ES5中用非数组对象实现了类似功能；
    模拟Set集合和Map集合对象的唯一区别是存储的值不同；一般来说，Set集合常被用检查对象中是否存在某个键名，而Map集合常被用于获取已存的信息；
    模拟的Set集合和Map集合对象也存在一些问题：为了解决这些文题ES6中加入了Set集合和Map集合；
        所有对象的属性名必须是字符串类型，必须确保每个键名都是字符串且在对象中是唯一的；如果对象的属性名是数值类型的，则会被转换为相应的字符串类型，则数值类型的属性名和相应字符串类型的属性则为同一个属性名；
        用对象作为属性的键名也会引起类似的问题，因为所有的对象在作为属性名时都会被转换为对象对应的默认字符串“[object Object]”,那么所有的对象属性名将指向同一个属性名的值；
        在检测对象属性是否存在会与对象值是否为0会出现混乱；
    in运算符其不需要读取对象的值就可以判断属性在对象中是否存在，如果存在就会返回true;但是in运算符也会对象的原型，只要当对象原型为null时使用这个方法才比较稳妥；
    创建Set集合并添加元素：不会对所存值进行强制转换，且每个值都是唯一的、不重复的，引擎内部使用Object.is()方法检测两个值是否一致；
        let set = new Set();
        set.add(5);
        set.add("5");
        console.log(set.size);//2
        如果多次调用add()方法并传入相同的值作为参数，则后续的调用则会被忽略；
        也可以用数组来初始化Set集合，Set构造函数同样会过滤掉重复的值从而保证集合中的元素各自唯一；
        实际上，Set构造函数可以接收所有可迭代对象作为参数--数组、Set集合、Map集合；
        has()方法：此方法检测Set集合中是否存在某个值；
        delete()方法：移除Set集合中的某一个元素；
        clear()方法：移除集合中所有的元素；
        forEach()方法：简化数组遍历过程，不再需要编写循环语句；
            此方法的回调函数接收以下三个参数；
                Set集合中下一次索引的位置；
                与第一个参数一样的值；
                被遍历的Set集合本身（ownerSet）；
            在Set集合的forEach()方法中，第二个参数也与数组的一样，如果需要在回调函数中使用this引用，则可以将他作为第二个参数传入forEach函数；如果使用箭头函数则可以省略this,因为箭头函数会调用外围函数的this；
            Set集合不能像访问数组元素那样直接通过索引访问集合中的元素，如果需要访问集合中的元素最好将Set集合转换为一个数组；
            将数组转换为Set集合的过程很简单，只需要给Set构造函数传入数组即可；将Set集合再转换回数组只需要用到展开运算符(...),他可以将数组中的元素分解为各自独立函数参数；
        在Set集合中如果将key设置为null,是无法清除对初始对象的引用；
    Weak Set集合：弱引用Set集合；
        在Weak Set集合中如果将key设置为null,是可以清除对初始对象的引用；
        用WeakSet构造函数可以创建Weak Set 集合，此集合支持add()、has()和delete()方法；
            let set = new WeakSet();
            或者：
            let key1 = {},
                key2 = {},
                set = new WeakSet([key1,key2]);
            WeakSet构造函数不接受任何原始值，如果传入的数组中包含其他非对象值，程序会抛出错误；疑问：P139
            Weak Set集合不可迭代，所以不能被用于for-of循环、keys()、values()和forEach()方法；
            Weak Set集合不支持size属性；
    Set集合类型可以用来处理列表中的值，但不使用与处理键值对这样的信息结构；Map集合来解决类似的问题；
    Map集合：
        Map类型是一种储存着许多键值对的有序列表，其中的键名和对应的值支持所有的数据类型，所以不会像对象那样把属性名强制转换成字符串类型；
        创建Map集合：此集合支持clear()、has()和delete()方法和size属性；
            let map = new Map();
            map.set("title","hello");
            let key1 = {};
            map.set(key1,5);//在对象中不能使用对象作为对象属性的键名，但是在Map集合中却可以这样做，且不会将其强制转换成字符串格式；
            console.log(map.get("title"));//"hello"
            console.log(map.get(key1));//5
        Map集合的初始化方法：
            可以像Map构造函数传入数组来初始化一个Map集合，数组中的每个元素都是一个子数组，子数组中包含一个键值对的键名与值两个元素：
                let map = new Map([["name","xiaoming"],["age",25]]);
                console.log(map.get("name"));//"xiaoming"
                console.log(map.get("age"));//25
        forEach()方法：此方法的回调函数接收三个参数；
            map.forEach(function(value,key,ownerMap){

            })
            在Map集合的forEach()方法中，第二个参数也与数组的一样，如果需要在回调函数中使用this引用，则可以将他作为第二个参数传入forEach函数；如果使用箭头函数则可以省略this,因为箭头函数会调用外围函数的this；
    Weak Map集合：弱引用Map集合；
        Weak Set集合中的键名必须是一个非null对象，如果使用非对象键名会报错；
        Weak Map集合的创建方法与Weak Set集合相似；通过set()方法添加数据，通过get()方法获取数据；但不支持size属性；

            let key1 = {},
                key2 = {},
                map = new WeakMap([[key1,"xiaoming"],[key2,25]]);
                console.log(map.get(key1));//"xiaoming"
                console.log(map.get(key2));//25
        此集合支持has()和delete()方法,不支持clear()方法；不支持键名枚举；
<h1>第十三章：用模块封装代码</h1>
    模块是自动运行在严格模式下并且没有办法退出运行的JavaScript代码；
    在模块顶部创建的变量不会自动被添加到全局共享作用域；在模块的顶部this的值是undefined；
    导出的基本语法：
        export关键字：将一部分已经发布的代码暴露给其他模块；
        可以将export放在任何变量、函数或者类声明的前面：
            export var color = "red";
            export let name = "xiaoming";
            export const mag = 7;
            export function sum(num1,num2){
                return num1 + num2;
            };

            function sum2(num1,num2){
                return num1 + num2;
            };
            export sum2;//导出sum2函数；
            或者：
            export {sum2 as add};//导出重命名，以add的名字导出sum2,当另一个模块导入这个函数时必须以add的名字导入;

            export class Rectangke{
                constructor(length,width){
                    this.length = length;
                    this.width = width;
                }
            };


    导入的基本语法：
        import /from关键字：从某指定的外部模块文件以某对象导入到本模块文件；
            import {sum1,sum2} from "./example.js";

            import * as example from "./example";//导入整个模块作为一个单一的对象，然后所有的导出都可以作为对象的属性使用,相当于导出成员的命名空间对象；
            console.log(example.sum(1,2));
            
            import {add as sum5} from "./example"";//导入重命名，以sum5的名字来导入add;
        export和import必须在其他的语句和函数之外使用，不允许出现在{}之中，只能在模块顶部使用；
        不能给导入的绑定重新赋值；
        Node.js则遵循基于文件系统前缀区分本地文件和包的惯例；例如example是一个包而./example.js是一个本地文件；
        import语句为变量、函数和类创建的是只读绑定，此绑定只能在被导入模块中修改，无法在现模块代码修改；
        
    default关键字：指定单个变量、函数和类，只能为每个模块设置一个默认的导出值，导出时多次使用default关键字是一个错误的语法；
        导出默认值：
            export default function(num1,num2){
                return num1 + num2;
            }
            这是一个默认的导出，由于函数被模块所取代，因而他不需要一个名字；
            或者：
            function sum(num1,num2){
                return num1 + num2;
            }；
            export default sum;
     
            为默认导出值指定标识符的重命名语法：
            function sum(num1,num2){
                return num1 + num2;
            }；
            export {sum as default };
        导入默认值：、
            import sum from "./exaple.js";//这里并没有使用{}，本地sum用于表示模快导出的任何默认函数；
            console.log(sum(1,2));

            import sum,{color} from "./example.js";//导入默认值和一个或多个非默认绑定的模块；用逗号将默认的本地名称与大括号包裹的非默认值分开，在import中，默认值必须排在非默认值之前；

            import {default sa sum,color } from "./example.js";//导入默认值时使用重命名语法；默认导出值被重命名为sum,并且还导入了color;

            重新导出模块已经导入的内容：比如，你正在用几个小模块创建一个库，然后在导出导入的值；
                import {sum} from "./example.js";
                export {sum};
                相当于：
                export {sum} from "./example.js";
                
                export {sum as add} from "./example.js";//重命名导出；

                export * from "./example.js";、、导出另一个模块中的所有值；
        import  "./example.js";//无绑定导入
    加载模块：
        &ltscript&gt元素的你默认行为是将JavaScript文件作为脚本加载，而非作为模块加载，当type属性缺失或包含一个JavaScript内容类型（如“text/JavaScript”）时就会发生这种情况。当type属性的值为“module”时支持加载模块，浏览器将所有内联代码或src属性指定的文件代码按照模块而非脚本的方式加载。    
        &ltscript type ="module"&gt执行时自动应用defer属性；加载文件时defer属性是可选的，但加载模块时defer属性是必须的；defer属性会立即下载，等到文档被完全解析模块才会按照顺序被执行；
        async：异步；     
    将模块作为Woker加载：
        let worker = new Worker("script.js");//按照脚本的方式加载script.js
        let worker = new Worker("script.js",{type:"module"});//按照模块的方式加载script.js
    浏览器模块说明符解析：
        以/开头的解析为从根目录开始；
        以./开头的解析为从当前目录开始；
        以../开头的解析为从父目录开始；
        URL格式；
<h1>第八章：迭代器（Iterator）和生成器（Generator）</h1>
    迭代器是一种特殊对象，他有一些专门为迭代过程设计的专有接口，所有的迭代器对象都有一个next()方法，每次调用都返回一个结果对象。结果对象有两个属性：一个是value，表示下一个将要返回的值，如果没有相关数据则会返回undefined；另一个是done,他是一个布尔类型的值，当没更多可返回数据时返回true。迭代器还会保存一个内部指针，用来指向当前集合中值的位置，每调用一次next()方法，都会返回下一个可用的值；
    ES5中的迭代器很复杂，而ES6中的迭代器的编写规则也同样复杂，但ES6同时还引入了一个生成器对象，它可以让创建迭代器对象的过程变得简单；
    生成器是一种返回迭代器的函数，通过function关键字后的星号（*）来表示，函数中会用到新的关键字yield。星号可以紧挨着function关键字，也可以在中间添加一个空格；
    不能用箭头函数来创建生成器；
    生成器的调用方式与普通函数相同，只不过返回的是一个迭代器；
    yield：
        通过此关键字来调用迭代器的next()方法时的返回值（任何值或表达式）及返回顺序；
        每当执行完一条yeild语句后函数就会自动停止执行；
        此关键字只可在生成器的内部使用，即便在生成器的内部的函数中使用也会报错；因为它与return关键字一样都不能穿透函数的边界；
    生成器函数表达式：
        也可以通过函数表达式来创建生成器，只需要在function关键字和小括号中间添加一个星号（*）即可；
    生成器对象的方法：
        由于生成器本身是函数，因而可以将它们添加到对象中。在ES5中的对象字面量中，可以通过函数表达式来创建生成器，就像这样：
            let o = {
                createIterator:function *(items){
                    for(let i = 0;i< items.length;i++){
                        yield items[i];
                    }
                }
            };
            let iterator = o.createIterator([1,2,3]);
        也可以用ES6的函数方法的简写方式来创建生成器，只需要在函数名前添加一个星号（*）：
            虽然可以在星号和方法名之间留空格，但是我们还是将星号紧贴在方法名之前；
            let o = {
                *createIterator*(items){
                    for(let i = 0;i< items.length;i++){
                        yield items[i];
                    }
                }
            };
    可迭代对象和for-of循环：
        可迭代对象具有Symbol.iterator属性，是一种与迭代密切相关的对象。Symbol.iterator通过指定的函数可以返回一个作用于附属对象的迭代器。在es6中，所有的集合对象（数组、Set集合及Map集合）和字符串都是可迭代对象，这些对象中都有默认的迭代器。ES6中新加入的特性for-of循环需要用到可迭代对象的这些功能。
        由于生成器默认会为Symbol.iterator属性赋值，因此所有通过生成器创建的迭代器都是可迭代对象。
        for-of循环每执行一次都会调用可迭代对象的next()方法，并将迭代器返回的结果对象的value属性存储在一个变量中，循环将持续执行这一过程直到返回对象的done属性的值为true;
        如果将for-of语句用于不可迭代对象、null或undefined将会导致程序抛出错误；
    访问默认迭代器：
        可以通过Symbol.iterator来访问对象默认的迭代器，就像这样：
            let values = [1,2,3];
            let iterator = values[Symbol.iterator]();
        因为具有Symbol.iterator属性的对象都有默认的迭代器，，因为可以用它来检测对象是否为可迭代对象：
            function isIterable(object){
                return typeof object[Symbol.iterator] === "function";
            };
    创建可迭代对象：
        默认情况下，开发者定义的对象都是不可迭代对象，但如果给Symbol.iterator属性添加一个生成器，则可以将其变为可迭代对象，例如：
            let collection {
                items:[],
                *[Symbol.iterator](){
                    for(let item of this.items){
                        yield item;
                    };
                };
            };
    内建迭代器：
        ES6中有三种类型的集合对象：数组、Map和Set集合；为了更好访问对象中的内容，为他们内建了三种迭代器：
                let colors = ["red","green","blue"];
                let tracking = new Set([123,456,789]);
                let data = new Map();
                data.set("title","Understanding ECMAScript 6");
                data.set("format","ebook");
            entries():返回一个迭代器，其值为多个键值对；
                for(let entry of colors.entries()){
                    console.log(entry);//[0,"red"][1,"green"][2,"blue"]
                };
                for(let entry of tracking.entries()){
                    console.log(entry);//[123,123][456,456][789,789]
                };
                for(let entry of data.entries()){
                    console.log(entry);//["title","Understanding ECMAScript 6"]["format","ebook"]
                };
            values():返回一个迭代器，其值为集合的值；
                for(let entry of colors.values()){
                    console.log(entry);//"red" "green" "blue"
                };
                for(let entry of tracking.values()){
                    console.log(entry);//123 456 789
                };
                for(let entry of data.values()){
                    console.log(entry);//"Understanding ECMAScript 6" "ebook"
                };
            keys():返回一个迭代器，其值为集合中的所有键名；
                for(let entry of colors.entries()){
                    console.log(entry);//0  1 2
                };
                for(let entry of tracking.entries()){
                    console.log(entry);//123 456 789
                };
                for(let entry of data.entries()){
                    console.log(entry);//"title" "format"
                };
    对于数组对象来说，无论是否为数组添加命名属性，打印出来的都是数字类型的索引；而for-in循环迭代的是数组属性而不是数字类型的索引；
    不同集合类型的默认迭代器：
        数组和Set集合的默认迭代器是values()方法，Map集合的默认迭代器是entries()方法；WeakMap和WeakSet集合没有默认的迭代器；
    字符串迭代器：
        由于字符串中的方括号操作的是编码单元而非字符，因此无法正确访问双字节字符；可以用for-of来访问双字节字符；
    在数组字面量中可以多次使用展开运算符，将可迭代对象中的多个元素依次插入新数组中，替换原先展开运算符所在的位置；
    高级迭代器功能：
        如果给迭代器的next()方法传递参数，则这个参数的值就会替代生成器内部上一条yeild语句的返回值；
        通过throw()方法，当迭代器恢复执行时可令其抛出一个错误；
    生成器返回语句：
        在生成其中，return表示所有操作已经完成，属性done被设置为true；如果同时提供了相应的值，则属性value会被设置为这个值；
    委托迭生成器：
        会把多个生成器作为迭代器放入一个父生成器中，迭代器会依次执行；
    for-of循环可以持续获取可迭代对象中的值，与传统的for循环迭代相比，for-of循环不需要追踪值在集合中的位置，也不需要控制循环结束的时机，使用起来非常方便，他会自动从迭代器中读取所有值，如果没有更多可返回的值就自动退出循环；
<h1>第九章：JavaScript中的类</h1>
    在ES5中实现类的概念的方法是：首先创建一个构造函数，然后定义一个方法并赋值给构造函数的原型；
    类的声明：
        要声明一个类，首先编写class关键字，紧跟着的是类的名字，其他部分的语法类似于对象字面量的简写形式，但不需要在类的各元素之间使用逗号分隔；
            class PersonClass{
                constructor(name){
                    this.name = name;
                }

                sayName(){
                    console.log(this.name);
                }
            }

            let person = new PersonClass("Nicholas");
            person.sayName();//outputs "Nicholas"

            console.log(typeof PersonClass);//"function"
            console.log(typeof PersonClass.prototype.sayName);//"function"

    类声明仅仅是基于已有自定义类型声明的语法糖；通过语法糖包装以后，类就可以代替自定义类型的功能，你不必担心使用的是哪种方法，只需要关注如何定义正确的类；
    与函数不同的是，类属性不可被赋予新值，在之前的示例中，PersonClass.prototype就是一个只读的类属性；
    为何使用类语法：
        尽管类与自定义类型之间有诸多相似之处，我们仍需要牢记他们的这些差别：
            函数声明可以被提升，而类声明与let声明类似，不能被提升；真正执行声明语句之前，他们会一直处在临时死区中；
            类声明中的所有代码将自动只能运行在严格模式下；
            在自定义类型中，需要通过Object.defineProperty()方法手工指定某个方法为不可枚举；而类中所有方法都是不可枚举的；
            通过new关键字调用那些不含[[Construct]]的方法会导致程序抛出错误；
            如果不使用new关键字调用类的构造函数会导致错误；
            在类中修改类名会导致程序错误；
    类表达式形式：表达式形式的函数和类与之类似，只是不需要在关键字后添加标识符，类表达式的设计初衷是为了声明相应变量或传入函数作为参数；
        let PersonClass = class{
            constructor(name){
                this.name = name;
            }

            sayName(){
                console.log(this.name);
            }
        }

        let person = new PersonClass("Nicholas");
        person.sayName();//outputs "Nicholas"

        console.log(typeof PersonClass);//"function"
        console.log(typeof PersonClass.prototype.sayName);//"function"
        在匿名类表达式中，就像之前的示例中，PersonClass是一个空字符串；当使用一个类声明时，PersonClass.name将是“PersonClass”字符串；
    命名类表达式：
        声明时，在关键字class后面添加一个标识符即可定义为命名类表达式；
        let PersonClass = class PersonClass2{
            constructor(name){
                this.name = name;
            }

            sayName(){
                console.log(this.name);
            }
        }

        let person = new PersonClass("Nicholas");
        person.sayName();//outputs "Nicholas"

        console.log(typeof PersonClass);//"function"
        console.log(typeof PersonClass);//"undefined"
    













</pre>  
</div>
</template>

<script>
export default {

}
</script>


<style scoped>
.detail-javascript-ES6{
  width: 10rem;
  background-image: url(../assets/img/detailBg.jpg);
  padding:0.8rem 0.3rem;
  box-sizing: border-box;
}
pre{
  white-space: pre-wrap;
  /*font-size: 16px;line-height: 25px;*/
}
.title{
    text-align: center;
    padding-bottom: 0.3rem;
}
</style>