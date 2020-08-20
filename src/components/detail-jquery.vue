<template>
  <div class="detail-jquery">
  <h1 class="title">JQuery.js</h1>
  <pre>
JQuery是一个JavaScript的外置库，极大的简化了编程，还解决了浏览器之间的兼容问题。
JQuery基础语法：
    $("所要操作的HTML元素").action();
    $与jQuery完全等价。
    代码是由上而下执行，如果把jQuery代码放在HTML代码前面将会无法执行，所以要让jQuery代码加载完网页之后执行可以采用两种方法：
        window.onload=function(){jQuery代码}:必须等到包括网页图片加载完之后才会执行，不能编写多个window.onload,因为只能执行一个，后面的会覆盖前面的。
        $(document).ready(function(){jQuery代码})：DOM结构加载完之后就执行，可以编写多个且都会执行，简写形式$(function(){jQuery代码})。
jQuery选择器：jQuery选择器之后不能连接addEventListener()，只能通过JS源码通过id的方式获取或者用on("touchstart",function(){})进行事件绑定；jQuery选择器之后也不能连接touch等事件，需要通过addEventListener("touchstart",function(){})的方式添加或者用on("touchstart",function(){})进行事件绑定；
    基本选择器：
        元素选择器：$("元素名").css("color","red");
        ID选择器：$("#id名").css("color","red");
        类选择器：$(".类名").css("color","red");
        群组选择器：$("选择器1,选择器2,选择器3,......,选择器n").css("color","red");
        全选选择器：$("*").css("color","red");
    层级选择器：
        后代选择器：$("E F").css("color","red");
        子选择器：$("E>F").css("color","red");
        兄弟选择器：$("E~F").css("color","red");
        相邻兄弟选择器：$("E+").css("color","red");
    属性选择器：
        $("[属性名]").css("color","red");
        $("E[属性名]").css("color","red");
        $("E[属性名="属性值"]").css("color","red");
        $("E[属性名!="属性值"]").css("color","red");
        $("E[属性名*="属性值的某部分"]").css("color","red");
        $("E[属性名^="属性值的某部分"]").css("color","red");
        $("E[属性名$="属性值的某部分"]").css("color","red");
    伪类选择器（过滤选择器）：
        ：not(selector)选择除了某个选择器之外的所有选择器。
        ：first/first()选择某类元素中的第一个。
        ：last/last()选择某类元素中的第一个。
        ：odd选择元素的索引值为奇数的元素。
        ：even选择元素的索引值为偶数的元素。
        ：eq(索引值)按照索引值来检索元素。
        ：lt(索引值)选择小于索引值的元素。
        ：gt(索引值)选择大于索引值的元素。
        ：header选择h1~h6标题元素。
        ：focus选择获取焦点的元素，要在获取焦点的情况下才能起作用。
        ：选择页面的根元素。
        ：animated选择所有正在执行动画效果的元素。
    子元素伪类选择器：
        ：first-child选择父元素中的第一个子元素。
        ：last-child选择父元素中的最后一个子元素。
        ：nth-child(n/odd/even/3n+1)选择第n/奇数项/偶数/3n+1项个子元素。
        ：only-child选择父元素中的唯一一个子元素，父容器中只有一个子元素。
        ：first-of-type:子元素中同类中的第一个。
        ：last-of-type:子元素中同类中的最后一个。
        ：nth-of-type:子元素中同类中的第n个。
        ：only-of-type:同类型中的唯一一个子元素，父容器中可以有多个子元素。
    可见性伪类选择器：
        ：hidden选取所有不可见元素。
            样式：display:none空间不存在 ;visibility:hidden空间存在;
            属性：type="hidden";
        ：visible选取所有可见元素。
    内容伪类选择器：
        ：contains(text)选择包含给定文本内容的元素。
        ：has(selector)选择含有选择器所匹配元素的元素。
        ：empty选择所有不包含子元素或者不包含文本的元素。
        ：parent选择含有子元素或者文本的元素，和：empty相反。
    表单元素伪类选择器：
        ：input 选择所有input元素。
        ：button/submit/reset/text/password/radio/checkbox/image/hidden/file 选择所有type="button/submit/reset/text/password/radio/checkbox/image/hidden/file"的input元素。
        ：textarea选择所有多行文本框。
    表单属性伪类选择器：
        ：enabled 选择所有可用的input元素。
        ：disabled 选择所有禁用的input元素。
        ：selected 选择所有被选中的option元素，其实是选中的这个操作，通常用下拉列表。
        ：checked 选择所有被选中的表单元素，一般用于radio和checkbox，其实是选中的这个操作。
DOM操作：
    创建节点：$("&ltli>&lt/li>"),var $li=document.createElement("li");
    节点插入:
        元素内部插入元素：     
             append()和appendTo();
             append(新插入元素/function(index,html){})在元素内部结尾插入元素内容,如果插入原有html节点，则原有html节点消失。
             appendTo(原有的元素)：将元素插入到原有元素内部结尾,不可以插入匿名函数。
             prepend()和prependTo()：将元素插入到元素内部开头。
        元素外部插入元素：
             after()和insertAfter();
             before()和insertBefore();
    删除节点：选定的元素.
             选定的元素.remove()删除选定的元素节点(包括该元素绑定的事件和相关的数据)。
             选定的元素.detach()删除选定的元素节点(不包括该元素绑定的事件和相关的数据)。
             选定的元素.empty()删除选定的元素内部的子节点,元素本身还会保留,只是删除内部内容,(不包括该元素绑定的事件和相关的数据)。
    复制节点：clone(true/false是否复制事件和数据)克隆节点。
    包裹节点：
             wrap("元素/function(){}")给<i>每个</i>选定元素添加<strong>一个单独</strong>包裹节点,已存在的元素被选作包裹节点时不会被移动，只会被复制。
             wrapAll()将<i>所有</i>选定的元素放在<strong>一个</strong>包裹节点里。
             unwrap()将父元素移除。
             wrapInner()将一个文本元素的<strong>子内容</strong>包裹起来。
    节点替换：
             replaceWith()/replaceAll()用指定的HTML内容或元素替换被选定元素,作用相同，语法位置不同，replaceWith()的参数可以是函数。
    节点遍历：
             each(function(index){})
    过滤方法：
             first()和last()获取第一个和最后一个被选中元素。
             eq(n)获取第n个选中的元素。
             $('元素名').index()获取元素索引序号的方法。
             filter($('#li1,#li2'))返回符合规定标准的元素。
             not('#li1,#li2')返回不符合标准的所有元素。
             is()判断所选元素是否符合规定条件，返回值是布尔值。
             has('em')使用自定义表达式来选择符合标准的元素。
             slice(start,[end])选取从第start个开始到第end个元素结束（不包括第end个元素），start从0开始，如果是负数则是从尾部倒数开始数起（-5,-2）。
    查找方法：
             查找祖先元素：
                 parent()选定被选定元素的父元素，参数可以是进一步过滤的元素。
                 parents('#div')选定被选定元素的所有父级元素，参数可以是进一步过滤的元素。
                 parentsUntil('#div')选定到终止选定元素的父元素，参数是所要终止位置的元素,不包括参数元素。
             查找后代元素：
                 children('#div')选定元素的子元素，参数可以是进一步过滤的元素。
                 find('#div') 选定元素的所有后代子元素的筛选元素，参数是必选的。
                 contents()选定元素的子元素, 包含文本和注释节点,和children()的用途一样，文本并没有被选出，此方法不常用了解即可。
             同级向前查找：
                 prev()同级前一个元素。
                 prevAll('#div')同级前面所有元素。
                 prevUntil('#div')到指定元素的同级前面所有元素。 
             同级向后查找：
                 next()同级后一个元素。
                 nextAll('#div')同级后面所有的元素。
                 nextUntil('#div')到指定元素的同级后面所有元素。
             同级查找：
                 siblings('#div')返回除被选元素的所有同级元素。
             其他：
                 add()将元素添加到匹配元素中，相当于“和”的意思。
                 addBack()将其同级后面的元素添加到其当前元素共同操作。
                 end()结束当前链中最近的一次筛选操作，并将匹配元素集合返回到前一次状态。
                 map()把当前匹配集合中的每个元素传递给函数，其返回值是JQuery封装的数组，要获取其返回值不能直接输出,这一点和js中的代码输出是不同的，要用get()方法，然后再用数组的属性和方法操作。
                 closest()从当前元素本身查找父元素，查找到最近的祖先元素就停止。
                 offsetParent()获得用于定位的第一个父元素。
属性
属性的操作方法
    attr()设置或返回匹配元素的属性和值。
        返回被选元素的属性值，语法：$(选择器).attr(属性名),$(选择器).css("width");
        设置所选元素的属性值：$(选择器).attr(属性名，属性值),$(选择器).attr({"属性名1"："属性值1","属性名2"："属性值2","属性名3"："属性值3".....});
        使用函数设置所选属性的名和值：$(选择器).attr(属性名，function(index,值){代码块});
    removeAttr()从元素中移除指定属性。
        $(选择器).removeAttr(属性名)。
        只可以删除HTML标签元素中原有的属性，无法删除用JS动态添加的元素。
CSS属性操作：复合属性只能用css添加，attr无效，且单个复合属性拥有多个属性值之时也无效。
    $(选择器).css(属性名);
    $(选择器).css(属性名，属性值);
    $(选择器).css({"属性名1"："属性值1","属性名2"："属性值2","属性名3"："属性值3"...});
CSS类属性操作：
    addClass("类名1 类名2 类名3......")向被选元素中添加一个或多个类属性；
    removeClass("类名1 类名2 类名3......")移除被选元素中一个或多个类属性；
    toggleClass("类名1 类名2 类名3......"/function(index返回集合中元素的index位置,className返回被选中元素的当前类名),true添加/false移除)对被选元素进行添加删除更换操作,函数里第二个参数布尔值，可以通过取余等计算操作来来改变布尔值。
元素的宽度高度：
    width(function(index,oldWidth){代码块}):获取或设置元素的宽度（不包括内边距、边框、外边距）；
    innerWidth():获取或设置元素的宽度（包括内边距）；
    outerWidth(false/true是否包含外边距):获取或设置元素的宽度（包括内边距、边框）；
    height()、innerHeight()、outerHeight()与宽度类似。
元素的位置：
    offset().top/left:获取元素的位置。
    offset({top:100,left:100}):设置元素的位置。
    offset(function(index,old){}):设置多个元素<strong>相对于文档</strong>的距离,old有left和top属性。
    position():获取元素<strong>相对于被定位的父元素</strong>的距离,有left和top属性，需要将父元素设置为相对定位，将子元素设置为绝对定位，如果不设置定位将和offset一样。
    scrollTop()和scrollLeft():获取或设置垂直滚动条顶部和水平滚动条左端的距离，样式：overflower:auto。
页面内容操作方法：
    text()获取或设置元素的“文本内容”。
    html()获取或设置元素的“html文本内容”。
    val()获取或设置表单元素的值。
事件
鼠标事件：
    click()单击事件，当鼠标按下并松开时事件会执行。
    dblclik()双击事件。
    mousedown()和mouseup()鼠标按下和鼠标松开事件。
    mouseover()和mouseout()鼠标移入和移出“元素及其后代元素”触发事件。
    mouseenter()和mouseleave()鼠标移入和移出该元素本身不包含后代元素触发事件。
    hover(function(){悬停时样式},function(){默认样式})鼠标悬停事件。
    mousemove()当鼠标在指定元素中移动是触发。
键盘事件：
    keydowm()键盘按键按下事件,按键编码keyCode适用于此方法。
    keyup()键盘按键松开事件。
    keypress()键盘字母按键和数字按键按下松开过程触发事件，对功能键ctrl、shift不起作用，字符编码charCode适用于此方法。
    event.which指示按了哪个键，返回按键编码和字符编码，也可用于鼠标事件。
表单事件：
    focus()当元素获取焦点时触发事件。
    blur()当元素失去焦点时触发事件。
    focusin()/focusout()当获取或失去焦点触发其父元素事件。
    change()当元素的值发生改变时触发事件。
    select()当文本被选中时触发事件。
    submit()当提交表单时触发事件。
其他时间：
    scroll()当滚动条滑动的时候触发事件,事件去抖：通过在定时器setTimeout(fn,times)前面添加clearTimeout()，达到触发事件后间隔一定时间段在执行;事件节流：通过if判断当前事件触发时间与上次事件触发事件的毫秒数之差是否符合条件来执行函数。
    resize()当窗口大小改变时触发事件。
事件对象：
    属性：
         event.type描述事件的类型。
         event.target触发该事件的DOM元素,表示点击元素。
         event.currentTarget触发该事件的DOM元素，表示绑定元素。
         event.relatedTarget返回当鼠标移入或移出时的那个元素。
         event.date事件调用时的额外数据。
         screenX/Y获取显示器屏幕的位置。
         clientX/Y获取相对于页面视口的位置。
         pageX/Y获取相对于文档的位置。
         event.result返回同一个元素上的同一类型事件的上一个事件的返回值。
         event.timeStamp返回当前触发事件时间的毫秒值。
    方法：
         event.preventDefault()阻止事件的默认动作。
         event.isDefaultPrevent()是否调用了禁止默认的动作。
         event.stopPropagation()阻止事件冒泡。
         event.isPropagationStopped()是否调用了阻止事件冒泡的方法。
         return false同时阻止默认行为和冒泡行为。
         event.stopImmediatePropagation()阻止剩余的事件函数处理执行且防止事件冒泡,同一元素和同一事件类型。
         event.isImmediatePropagationStopped()检测是否调用了阻止剩余的事件函数处理执行且防止事件冒泡。
    事件处理：
         事件绑定：
             on("事件类型",/'元素名',data/null,function(){}/不带括号的函数名)
             或者
             on({事件类型1：function(){}/不带括号的函数名,事件类型2：function(){}/不带括号的函数名,事件类型3：function(){}/不带括号的函数名}):添加的额外数据类型可以是任何类型，如果是字符串类型则放在第三个参数里，因为事件委托要以'元素'的方式用第二个参数。
             one()绑定的事件只能执行一次。
             trigger()在每一个匹配的元素上触发某类事件，也就是默认事件执行。
                trigger的额外数据示例：
                    $("btn1").on("click",300,function(e,100,200){alert(date1+date2+e.date)}).trigger("click",[100,200])
                trigger()与triggerHandler()的区别：
                    triggerHandler()不会触发事件的默认行为，只会影响匹配到的第一个元素，创建的事件不会产生事件冒泡，返回的是事件函数的返回值。
         事件解绑：
             off()解绑所有事件。
             off("事件名1 事件名2")。
             off("事件名",不带括号的函数名)。
             off(click.a/.a)通过命名空间移除事件函数,添加绑定事件类型的时候也要在事件类型后加上.a。
         事件委托：
             给动态添加的元素绑定事件：
             添加事件委托：
                 $("祖先元素").on("事件类型","动态添加的元素"/null,"额外数据",function(){})
             移除事件委托：
                 $("祖先元素").off("事件类型","事件元素");
动画
显示和隐藏：
    shou(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)显示
    hide(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)隐藏
    toggle(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)切换
滑动显示和隐藏（通过高度）:
    slideDown(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)滑动显示
    siideUp(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)滑动隐藏
    slideToggle(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)滑动切换
淡入和淡出：
    fadeIn(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)淡入
    fadeOut(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)淡出
    fadeToggle(fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)淡入淡出切换
    fadeTo(fast200/norma400/slow600/毫秒数,透明度值,'linear/swing',回调函数)切换到指定的不透明度
自定义动画：
    animate(属性集,fast200/norma400/slow600/毫秒数,'linear/swing',回调函数)执行css属性集的自定义动画,注意有关color的属性本方法无效。
队列动画：
    添加多个animate(),属性会按animate()的顺序执行。
动画常用方法：
    stop(stopAll,goToEnd)两个参数的值都是布尔值。
    finish()会跳转到结束时的状态。
    delay(毫秒数)操作完成之后延迟一段时间在执行下一个操作。
    :animated动画选择器。
    JQuery.fx.off()关闭页面上所有动画。
    JQuery.fx.interval设置动画的显示帧数，默认值是13。
插件：类似于封装的函数，像引入jquery库一样引入插件，再直接调用比较方便。
    类级别插件开发：很少用，了解即可。
        1、JQuery.chajianming=function(i){代码块}；
        2、JQuery.extend({chajianming1:function(i){代码块},chajianming2:function(){代码块}})；
        3、JQuery.mingmingkongjianming={chajianming:function(i){代码块}},写插件的时候要return obj,否则无法使用后续的链式操作；
补充知识点：
    JQuery可以识别带有“-”链接的多单词属性格式，也可以识别第二个单词首字母大写的多单词属性格式；而JavaScript只能识别第二个单词首字母大写的多单词属性格式；css只能识别带有“-”链接的多单词属性格式。
  </pre>  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-jquery{
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
</style>
