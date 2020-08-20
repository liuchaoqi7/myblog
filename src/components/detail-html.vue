<template>
  <div class="detail-html">
  <h1 class="title">HTML</h1>
  <pre>
HTML是一种超文本标记语言。文本可以理解为文字，超文本是指不仅仅包括文字还包含图片、音频、视频、链接、程序等元素。
<h3>HTML5文本基本格式</h3>
    &lt!DOCTYPE html>:HTML5的版本声明，不区分大小写。<br>
    &lthtml lang="zh-cn">：语言状态,中文状态格式"zh-cn",英文状态格式"en"。<br>
    &lthead><br>
        &ltmeta charset="utf-8">：声明字符编码。<br>
        &ltmeta name="author/keywords/description" content="">：起到一个优化的作用，回头在优化专题的课程里系统的学习搜索优化。<br>
        &ltmeta http-equiv="refresh" content="3;http://www.51zxw.net"><br>
        &ltmeta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0">：屏幕设置，网站的跨平台设置。<br>
        &lttitle>网页的标题&lt/body>:网页的标题。<br>
    &lt/head>:页头heat元素标签。<br>
    &ltbody><br>
        网页内容......<br>
    &lt/body>页身body元素标签。<br>
    &lt/html>网页根元素标签。
<h3>元素</h3>
元素的概念：是开始标签到结束标签的所有代码；元素分类：块级元素是会换行的，行内元素是不会产生换行的。<br>
    布局元素：<br>
        &ltheader><br>
             &lthgroup>&lt/hgroup><br>
        &lt/deader><br>
        &ltaside><br>
             &ltnav>主导航栏超链接&lt/nav><br>
        &lt/aside><br>
        &ltsection><br>
             &ltarticle><br>
                    &ltfigcaption>&lt/figcaption><br>
                    &ltfigure>&lt/figure><br>
             &lt/article><br>
        &lt/section><br>
        &ltfooter><br>
            &ltaddress>&lt/address> <br>
        &lt/footer><br>
    文本元素：<br>
        &lth1>&lt/h1>:标题标签。<br>
        &lthr>:分隔线。<br>
        &ltp>&lt/P>:段落标签。<br>
        &ltbr>:换行。<br>
        &ltpre>&lt/pre>:保持html文档的原本格式。<br>
        &ltb>&lt/b>/&ltstrong>/&lt/strong>:加粗文字。<br>
        &lti>&lt/i>/&ltem>&lt/em>:文字倾斜。<br>
        &ltdel>&lt/del>:删除文字。<br>
        &lts>&lt/s>:不准确的删除线。<br>
        &ltwbr>&lt/wbr>:安全换行，在“-”符号出换行。<br>
        &ltu>&lt/u>:给文字添加下划线。<br>
        &ltins>&lt/ins>:给文字添加下划线，从语义上讲是添加一段文字，起到强调作用。<br>
        &ltsmall>&lt/small>:添加小号字体，从语义上讲，用于免责声明和澄清声明。<br>
        &ltsub>&lt/sub>/&ltsup>&lt/sup>:添加上表和下标。<br>
        &ltdfn>&lt/dfn>:我的作用从语义上讲表示定义术语，是对一个词或短语作出解释，实际效果就是倾斜文本。<br>
        &ltabbr>&lt/abbr>:显示文本缩写，在文本显示上没有任何效果，比如：WTO。<br>
        &ltq>&lt/q>:给文本加上双引号，从语义上讲表示引用其他地方的内容。<br>
        &ltruby>英雄&ltrt>yingxiong&lt/rt>&lt/ruby>:给文字注拼音。<br>
        &ltcite>&lt/cite>:加黑字体，从语义上讲引用其他作品的标题。<br>
        &ltbdo dir="ltr/rtl">&lt/bdo>:设置文字排序方向，不是文字水平对齐方向，必须使用dir属性才可以设置，共两个值：rtl/ltr;<br>
        &ltmark>&lt/mark>:显示文本，用于记号，加上黄色背景颜色。<br>
        &lttime>&lt/time>:从语义上讲就是表示日期和时间，没有特殊效果，例如，2015-9-15。<br>
        &ltspan>&lt/span>:一般性文本，没有特殊效果,因为是行内元素，宽高无效，如果把它设置成块级元素，宽高会有效。<br>
        lang="en"状态下：<br>
           &ltcode>&lt/code>:用来表示计算机代码片段,如，function(){};<br>
           &ltsamp>&lt/samp>:表示计算机或程序输出您没有权限浏览该网页。<br>
           &ltkbd>&lt/kbd>:表示某部分内容是由用户利用键盘输入,如：请按enter键。<br>
    time元素：为一些元素添加一些时间信息，更加有利于搜索引擎的抓取。<br>
        &lttime datetime="2015-10-22" pubdate="pubdate">2015年10月12日&lt/time><br>
        &lttime datetime="2015-10-22T20:00">2015年10月12日晚上8点&lt/time><br>
        &lttime datetime="2015-10-22T20:00Z">2015年10月12日晚上8点&lt/time><br>
        &lttime datetime="2015-10-22T20:00+09:00">美国时间2015年10月12日晚上8点&lt/time><br>
        “T”是日期和时间之间的分隔符。<br>
        “Z”表示UTC时间编码。<br>
        “+9：00”表示时差。<br>
        pubdate属性是可选属性，加上它搜索引擎浏览器就可以很方便的识别出那个日期文章新闻的发表日期。<br>
    列表元素：<br>
        无序列表：<br>
            &ltul type="disc/circle/square"><br>
                &ltli><br>
                &lt/li><br>
            &lt/ul><br>
        有序列表：<br>
            &ltol type="默认整数/英文字母a、A/罗马数字i、I/" start="18" ><br>
                &ltli><br>
                &lt/li><br>
                &ltli  value="22"><br>
                &lt/li><br>
                &ltli value="26"><br>
                &lt/li><br>
            &lt/ol><br>
        自定义列表：三个列表元素之间是逐级嵌套关系。<br>
            &ltdl><br>
                &ltdt><br>
                标题
                    &ltdd><br>
                    内容....<br>
                    &ltdd>
                &lt/dt>
            &lt/dl><br>

    表格元素：<br>
        &lttable border="宽度"><br>
            &ltthead><br>
            &ltcaption>表格外部标题示例&lt/caption><br>
            &ltcolgroup span="1" style="background:red">&lt/colgroup><br>
            &ltcolgroup span="2"><br>
            &ltcol style="background:green"><br>
            &ltcol style="background:blue"><br>
            &lt/colgroup><br>
            &ltcolgroup span="1" style="background:orange">&lt/colgroup><br>
            &lttr>&ltth colspan="2">表格内部标题&lt/th>&ltth>表格内部标题&lt/th>&lt/tr><br>
            &lt/thead><br>
            &lttbody><br>            
            &lttr>&lttd colspan="4">单元格&lt/td>&lt/tr><br>
            &lttr>&lttd rowspan="3">&lt/td>&lttd>&lt/td>&lttd>&lt/td>&lttd>&lt/td>&lt/tr><br>
            &lttr>&lttd>&lt/td>&lttd>&lt/td>&lttd>&lt/td>&lt/tr><br>
            &lttr>&lttd>&lt/td>&lttd>&lt/td>&lttd>&lt/td>&lt/tr><br>
            &lt/tbody><br>
            &lttfoot><br>
            &lttr>&lttd>备注：&lt/td>&lttd colspan="4">&lt/td>&lt/td>&lt/tr><br>
            &lt/tfoot><br>
        &lt/table><br>
    表单元素：<br>
        &ltform action="网址/所提交的数据库" method="get/post" id="bangdingtijiao"><br>
            input元素：<br>
            &ltinput type="text/password/email/url/tel(不会对数据进行验证)/@1number/search/srange/color颜色选择输入框/file(accept='image/png   .html'、multipe)/<br>
            @2submit提交按钮/reset重置按钮/--button按钮--/image图片式提交按钮/<br>
            checkbox复选框(cheked)/radio单选框可多选，需将同一组单选项设置为一个相同的name属性值。<br>
            datetime/datetime-local/date/month/week/time/<br>
            hidden"<br>
            属性名类：<br>
            name/<br>
            @1value/max/min/step/maxlength/<br>
            readonly只读、提交时发送至服务器/disabled不可操作、提示作用、不提交不隐藏/placeholder输入框提示语/
            <br>
            target="_self/_blank":表单是在本网页提交还是在新网页提交。<br>
            required必填项/autofocus自动获取焦点/accesskey="k"快捷键,火狐不支持/tabindex="数字"，按tab键移动浏览器本身自带此功能/<br>
            autocomplete浏览器记忆功能值off/on<br>
            novalidate设置数据提交时不进行格式验证/enctype规定发送到服务器之前应该如何对表单进行编码/accept-chartset规定服务器处理表单时所接受的字符集/<br>
            =""<br>
            pattern="[0-9]{4}"><br>
            select元素下拉表单：<br>
            &ltselect size="3" multiple="/*多选设置*/"><br>
              &ltoptgroup label="本地运动系列"><br>
                      &ltoption  >跑步&lt/option><br>
                      &ltoption>打篮球&lt/option><br>
                      &ltoption>散步&lt/option><br>
              &lt/optgroup><br>
              &ltoptgroup   label="外出运动系列"><br>
                      &ltoption label="外出运动">骑自行车&lt/option><br>
                      &ltoption>旅游&lt/option><br>
                      &ltoption>爬山&lt/option><br>
              &lt/optgroup><br>
            &lt/select><br>
            datalist元素下拉表单：<br>
              &ltinput type="text" name="" list="mydatalist"><br>
              &ltdatalist id="mydatalist"><br>
                   &ltoption>&lt/option><br>
                   &ltoption>&lt/option><br>
                   &ltoption>&lt/option><br>
                   &ltoption>&lt/option><br>
              &lt/datalist><br>
        label元素及其属性：<br>
            label元素的作用：让鼠标点中单选按钮和复选按钮的文本时选中此项。<br>
            &ltinput type="radio/chekbox" id="bangdingwenben">&ltlabel for="bangdingwenben">选项内容&lt/label><br>
            &ltlabel>&ltinput type="radio/chekbox">选项内容&lt/label><br>
            label属性的作用：<br>
            1.给下拉表单分组optgroup元素添加分组名
            2.修改option的文本(火狐不支持，谷歌支持)。<br>
            &ltselect><br>
              &ltoptgroup label="本地运动系列"><br>
                      &ltoption>跑步&lt/option><br>
                      &ltoption>打篮球&lt/option><br>
                      &ltoption>散步&lt/option><br>
              &lt/optgroup><br>
              &ltoptgroup   label="外出运动系列"><br>
                      &ltoption label="外出运动">骑自行车&lt/option><br>
                      &ltoption>旅游&lt/option><br>
                      &ltoption>爬山&lt/option><br>
              &lt/optgroup><br>
            &lt/select> <br> 
            textarea文本区域元素：&lttextarea cols="5" rows="9">默认文本&lt/textarea><br>
            &ltfieldset><br>
                &ltlegend>为fieldest元素定义的标题&lt/legend><br>
                可将表单内的相关元素分组，并以一个边框和别的元素区分开来<br>
            &lt/fieldset> <br>
            @2提交按钮的重写属性：formaction/method/target......=""; <br>
            progress进度条元素：&ltprogress>&lt/progress>没有最小值设置，默认0/meter度量条元素：&ltmeter>&lt/meter>有最小值属性min,有最大值属性max，有低于某值属性low,有高于某值属性high,有最佳值属性optimum。<br>
            &ltkeygen challenge="提交时询问" keytype="定义密匙类型" ><br>     
        &lt/form><br>
        &ltinput type="text" form="bangdingtijiao"><br>
        &ltbutton type='submit/button/reset' >&ltimg src="图片地址">：元素按钮&lt/button>可以对元素进行CSS等操作，比通过input元素的type='button'创建的按钮操作起来更方便。<br>
        output数据输出元素：<br>
            &ltform oninput="num.value=parseInt(num1.value)+parseInt(num2.value)"><br>
                &ltinput type="number" id="num1">+&ltinput type="number" id="num2">=&ltoutput  for="num1 num2" id='num'>&lt/output><br>
            &lt/form><br>
            &ltdetails open='open'><br>
                &ltsummary>内容标题&lt/summary><br>
                此元素属于非表单form元素的内容<br>
            &lt/details><br>
        <table border="2px">
            <tr><td></td><td>提交</td><td>页面修改</td><td>页面显示</td><td>类型</td></tr>
            <tr><td>readonly</td><td>是</td><td>否</td><td>是</td><td>名</td></tr>
            <tr><td>disabled</td><td>否</td><td>否</td><td>是</td><td>名</td></tr>
            <tr><td>placeholder</td><td>否</td><td>否</td><td>显示-隐藏</td><td>名</td></tr>
            <tr><td>hidden</td><td>是</td><td></td><td>否</td><td>值</td></tr>
        </table><br>
    超链接元素：<br>
        &lta href="网址/本地文件名/mailto:765922449@qq.com/下载文件地址">点击按钮名字/图片&lt/a><br>
        target属性的四个值：_blank(新窗口)/_self（当前窗口）/_top（最顶层框架）/_parent（父框架）;<br>
        内锚点链接：&lta href="#maodian">锚点1&lt/a>  &lta id="maodian">锚点1<br>
        内联框架：&lta href='http://www.taobao.com' target="myframe">****&lt/a><br>
                  &lta href='http://www.jingdong.com' target="myframe">****&lt/a><br>

                  &ltiframe src="http://www.baidu.com" name="myframe" frameborder="0/1" width="" height="" >&lt/iframe><br>
        超链接a元素点击之后跳转和点击事件会产生冲突，会先发生点击事件后发生超链接跳转，所以点击事件遮罩会闪现闪退现象。<br>
    img元素：<br>
         &ltimg  src="本地/网上图片地址"  width="500px"  height="300px"   title="鼠标放在图片上时显示的文字"   alt="图片无法显示时显示的文字" ><br>
    video元素：<br>
  &ltvideo id="此属性便于JS通过id属性名调用" src="视频地址" controls="此属性是添加播放按钮，否则只是一张图片无法播放" width="宽度值" height="高度值" autoplay='自动播放' loop='循环播放'  poster='播放前的预览图片' preload='none/auto/metadate'><br>
        &ltsource src='' type='video/mp4'>&lt/source> <br>
        &lt/video><br>
    audio元素：用法与video元素相似，&ltaudio>&lt/audio> <br>
    embed元素：用来嵌入如flash插件。<br>
    object元素：之前都是用此元素,可以嵌入音频视频flash等多种元素。<br>
    canvas元素：<br>
               1.是HTML双标签元素,放在JS语言外边，用JS语言操作;<br>
               2.可添加设置属性--id、width、height、style='background:red';(注意：设置canvas元素的样式属性时只能在canvas元素的开始标签里设置，如果在css样式表中设置的话就会出现绘制路径问题)<br>
               3.开始标签与结束标签之间可以添加版本升级提示语句。         
<h3>元素的属性</h3>
属性的概念：就是为元素添加某种特征，起到修饰元素的作用。<br>
属性的语法：&lt元素开始标签 属性名="属性值">;<br>
属性名和值：<br>
    通用属性：属性值为数值时必须是正整数，不能为零。<br>
        id属性；<br>
        class属性；和id属性值一样不能以数字开头。<br>
        style属性；<br>
        title属性：<br>
        dir属性：设定文字排序方向，ltr、rtl。<br>
        lang属性：设置中英文状态，有时显示会有一点不同。<br>
        align="left/right/center";<br>
        bgcolor="red":只能在body开始标签中使用。<br>
        大多数属性都是在CSS中设置：<br>
        background-color/background:red/green/blue/......;<br>
        width、height的属性值，如果设置为正整数时，单位是默认px（像素），不需要添加；但在style中必须注明单位否则会出错，可以作为img元素的属性，不可以作为div元素的属性,max-width:最大宽度。<br>
        overflow:auto内容超出父容器后自动添加滚动条。<br>
<h3>补充的知识点</h3>
&lt!--内容-->:注释标记，快捷键ctrl+？。<br>
绝对路径：需要逐级输入文件的地址路径。<br>
相对路径：相对于所创建的文件地址。同一等级的路径可以直接书写文件名，每向上一级可可用一个“../”表示，如果是向下的等级从下一级逐级书写。<br>
特殊符号的输入：<br>
   <table border="2px">
        <tr><td>符号</td><td>输入实体</td><td>实体数值</td><td>描述</td><td>备注</td></tr>
        <tr><td>空格</td><td>&ampnbsp</td><td>&amp#160</td><td>空格</td><td></td></tr>
        <tr><td>&lt</td><td>&amplt</td><td></td><td>小于号</td><td></td></tr>
        <tr><td>&gt</td><td>&ampgt</td><td>&amp#162</td><td>大于号</td><td></td></tr>
        <tr><td>&amp</td><td>&ampamp</td><td>&amp#38</td><td>链接符号</td><td></td></tr>
        <tr><td>&quot</td><td>&ampquot</td><td>&amp#34</td><td>双引号</td><td></td></tr>
        <tr><td>&plusmn</td><td>&ampplusmn</td><td>&amp#177</td><td>正负号</td><td></td></tr>
        <tr><td>&copy</td><td>&ampcopy</td><td>&amp#169</td><td>著作权符号</td><td></td></tr>
        <tr><td>&#174</td><td></td><td>&amp#174</td><td>注册商标</td><td></td></tr>
   </table>
  </pre>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-html{
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
