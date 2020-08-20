<template>
  <div class="detail-css">
  <h1 class="title">CSS</h1>
  <pre>
样式表的三种嵌入方法：<br>
    直接样式表：style="属性名：属性值"；<br>
    内部样式表：&ltstyle>选择器名{属性值：属性名；属性值：属性名；......} &lt/style>；<br>
    外部样式表：&llink rel="stylesheet" type="text/css" href="样式表路径"><br>
CSS语法：<br>
    选择器{属性名1：属性值1;属性名2：属性值2;......}
    选择器之间用逗号“，”隔开，属性名之间用分号“；”隔开，属性值之间用空格隔开。<br>
    优先级：离元素越近，越精确，优先级越高；强制优先级：！important;如果元素的优先级较低，可以通过添加其长辈级元素在其前面来提高其优先级。<br>
    如果属性值为若干单词，则要给值加引号，除了这种情况其他情况不可以加引号。<br>
    外观样式比如字体、颜色可以续承，而布局有关的样式不可以续承，比如边框。<br>
    注释标记：/*......*/。<br>
<h3>选择器</h3>
常用选择器：<br>
    通用选择器：*；<br>
    元素选择器：元素名；<br>
    ID选择器：#；<br>
    类选择器：.，class="class1 class2";<br>
属性选择器：<br>
    E[att]:选择具有att属性的E元素。<br>
    E[att='val']:选择具有att属性且属性值为val的E元素。<br>
    E[att~='val']:选择具有att属性且属性值有多个，其中一个为val的E元素。<br>
    E[att*='val']:选择具有att属性且属性值包含val的E元素。<br>
    E[att^='val']:选择具有att属性且属性值以val开头的E元素。<br>
    E[att$='val']:选择具有att属性且属性值以val结束的E元素。<br>
    E[att|='val']:选择具有att属性且属性值以val开头并以连接符“-”分隔的字符串的E元素。<br>
关系选择器：<br>
    后代选择器：ul li{},后代选择器可以选择作为某元素的所有后代元素（包含儿子级元素，孙子等级元素）。<br>
    子选择器：ul>li,与后代选择器相比，子元素选择器只能选择作为某元素的子元素，进一步缩小了选择范围（只包含儿子级选择器）。<br>
    相邻选择器：E+F,选择紧贴在E元素之后的F元素。<br>
    兄弟选择器：E~F,选择E元素所有兄弟选择器F（只可以选择到之后的元素）。<br>
伪元素选择器：<br>
    E：first-letter/E：:first-letter:设置元素内的第一个字符的样式。<br>
    E：first-line/E：:first-line:设置元素内的第一行字符的样式。<br>
    E：before/E：:before:在每个元素的内容之前插入内容，用来和content属性一起使用，E：before{content:"内容"}。<br>
    E：after/E：:after:在每个元素的内容之后插入内容，用来和content属性一起使用，E：after{content:"内容"}。<br>
    E::selection:设置对象被选中时的颜色,火狐不支持，谷歌不支持。<br>
伪类选择器：<br>
    ：root:选择文档的根元素。<br>
    E：first-child:父元素的第一个子元素E。<br>
    E：last-child:父元素的最后一个子元素E。<br>
    E：only-child:仅有的一个子元素E。<br>
    E：nth-child(n):元素的第n个子元素E，可以用数值（2）、奇数（odd）、偶数（even）、公式（3n）。<br>
    E：nth-last-child(n):匹配父元素的倒数第n个子元素。<br>
    E：first-of-type:匹配同类型中的第一个同级元素E。<br>
    E：last-of-type:匹配同类型中的最后一个同级元素E。<br>
    E：only-of-type:只有一个这种类型的子元素E。<br>
    E:nth-of-type(n):匹配同类型中的第n个同级兄弟元素E。<br>
    E:nth-last-of-type(n):匹配同类型中的倒数第n个同级兄弟元素E。<br>
锚伪类选择器：<br>
    E：active:向被激活的元素添加样式。<br>
    E：hover:向鼠标悬浮在元素上方时添加元素样式。<br>
    E：link:向未被访问过的链接添加样式。<br>
    E: visited:向已被访问过的链接添加样式。<br>
    顺序：由于优先级导致的覆盖，所以顺序link、visited,hover,active,但是link的样式无法显示。<br>
    父元素E:hover 子元素f{属性：属性值}：当鼠标放置在父元素上时给子元素添加样式。<br>
其他伪类选择器：<br>
    E:focus：向拥有键盘输入焦点的元素添加样式。<br>
    input:checked：选择每个被选中的input元素。<br>
    input:disabled：选择每个被禁用的input元素。<br>
    input:enabled：选择每个启用的input元素。<br>
    E:target：选择当前活动的元素（某个被连接的元素）。<br>
    :not(E)：选择E元素之外的每个元素。<br>
    E:lang：向带有指定lang属性的元素添加样式。<br>
<h3>CSS文本属性</h3> 
字体<br>
    font属性值的顺序：font-style/variant/weight/size/family。<br>
    font-size：规定文本的字体尺寸。<br>
    font-family:规定文本的字体系列，也可以自定义字体系列。<br>
    font-weight:normal、bolder更粗的字体、lighter更细的字体、100-900由细到粗的字符；400等同于normal，700等同于bolder。<br>
    font-style:normal,italic,oblique了解即可,规定文本的字体样式。<br>
    font-variant:normal、small-caps,规定是否以小型大写字母显示文本。<br>
文本属性：<br>
    color:字体颜色。<br>
    text-align:left、right、start、end、center、justify，文本水平对齐方式。<br>
    line-height:行高，从上行字的底部到下行字的底部。<br>
    text-decoration:none、underline、overline、line-thtough，向文本添加修饰。<br>
    text-transform:none、uppercase、lowercase,设置文本字母的大小写。<br>
    direction:ltr，默认；rtl,文本从右至左,设置文本方向。<br>
    text-indent:首行缩进，也就是段落开头空两个空格。<br>
    letter-spacing:设置字符间距。<br>
    word-spacing:设置字/单词间距。<br>
    需要熟悉的内容：<br>
    white-space:设置元素中空白的处理方式。<br>
         normal:默认，空白会被浏览器忽略。<br>
         pre:空白会被浏览器保留。<br>
         pre-wrap:保留空白符，但是正常的进行换行。<br>
         pre-line:合并空白符，但是正常的进行换行。<br>
         nowrap:文本不会换行，文本会在同一行上继续，直到遇到br标签为止。<br>
    word-wrap:break-word,允许对长的不可分割的单词进行分割并换行到下一行。<br>
    word-break:break-all,允许在单词内换行；keep-all:只能在半角空格或连字符处换行。<br>
    user-select:none;取消双击选中文本时的背景颜色变为蓝色。<br>
垂直对齐方式：<br>
    vertical-align：<br>
        baseline:默认，把元素的基线放置在父元素的基线上。<br>
        top:把元素的顶端与行中最高元素的顶端对齐。<br>
        middle:把此元素中点放置在父元素的基线上。<br>
        bottom：把元素的顶端与行中最低的元素的顶端对齐。<br>
        text-top:把元素的文本的顶端与父元素的基线对齐。<br>
        text-bottom:把元素的底端与父元素的基线对齐。<br>
        sub:垂直对齐文本的下标。<br>
        super:垂直对齐文本的上标。<br>
    text-fill-color:文本填充颜色；
    text-stroke-width/color:文本描边颜色。<br>
    text-shadow:设置文本的阴影。text-shadow:5px 5px 5px green;<br>
    text-overflow。<br>
 <h3>盒子模型</h3>
width:宽度；height:高度；<br>
border:边框；padding:内边距；margin:外边距，当外边距合并之后会显示较大的那个数值,margin属性值为auto时，如果是相对定位，此元素可以居中，如果是绝对定位，需要把左右位置定位设置为0
。<br>
属性值是一个数值：同时设置四条边；属性值是两个数值：分别设置上下两条边和左右两条边；属性值是三个数值：分别设置上一条边、左右两条边、下一条边；属性值是四个数值：分别设置上下左右每条边；或者单独设置一条边：border-bottom-color:red;<br>
top/bottom/left/right:上下左右。<br>
border属性：<br>
     border-style：none无边框，solid实线，dashed虚线，dotted点状线，double双实线,groove3d凹槽边框，ridge3d垄状边框，inset3dinset边框，outset3doutset边框，边框样式；<br>
     border-width:thin细边框/medium默认/thick粗边框/px,边框宽度,可单独设置;<br>
     border-color:边框颜色。<br>
    边框填充：<br>
         border-image:url() 30 fill/20px/30px repeat,复合属性，用图片来填充边框。<br>
         border-image-source:url(),图片来源路径。<br>
         border-image-slice:边框背景图的分隔方式30 fill,九宫格，四角对四角，四边对四边。<br>
         border-image-width:边框的宽度。<br>
         border-image-outset:边框背景图的扩展（边框图像区域超出边框的量）。<br>
         border-image-repeat:stretch拉伸/repeat重复铺满/round重复铺满并对图片进行调整，边框图像的平铺方式。<br>
         box-shadow:green 5px 5px 5px inset向方框添加一个或多个阴影，outset/inset外内阴影。<br>
    圆角设置：<br>
         border-radius:3em 5em 1em 2em/2em 9em 5em 4em(/是分隔x、y值的)设置圆角。<br>
         border-top-left-radius:2em 5em,(直径的x、y值可以不一样)。<br>
    轮廓属性：<br>
         outline-width:轮廓线的宽度；<br>
         outline-style:轮廓线的样式；<br>
         outline-color:轮廓线的颜色；<br>
         outline:轮廓线的复合属性；<br>
         outline-offset:轮廓线到边框的距离。<br>
CSS背景设置：<br>
     background:背景设置，复合属性。<br>
     background-color:背景颜色设置。<br>
     background-image:把图片设置为背景，此时路径设置要相对于css文件夹的子元素，../img/tupianming.jpg，而不是相对于index.html文件。<br>
     background-repeat:repeat平铺默认/norepeat不平铺/repeat-X沿X方向平铺/repeat-Y沿垂直方向平铺。<br>
     background-position:设置背景图的起始位置。注意：如果用元素选择器设置了background-image属性再设置此属性无效,因为background-image属性被元素选择器默认background-position为0,0，所以需要用类选择器或id选择器设置background-image属性后在设置此属性才有效。<br>
        left/right/top/bottom/center:如果是top center则是把背景图片横纵坐标的三分之一处作为元素的背景原点，因为要保证图片的比例。<br>
        x% y%。<br>
        数值50px 80px。<br>
     background-size:px/百分比/cover背景图片被拉伸、图片比例不变、保证被填充区域被填满/contain保证背景图片的完整显示、图片比例不变,至少有一边是和图片相等的，设置背景图片的尺寸。<br>
     background-clip/background-origin:border-box/padding-box/content-box,规定背景的裁切区域和定位区域。<br>
     background-attachment:背景图像是否固定或者随着页面的其余部分滚动。scroll默认值/fixed不移动。<br>
     渐变色：<br>
        linear-gradient(to left/right/top/bottom/60deg,起始颜色 20%/px，颜色值1 50%/px，颜色值2 70%/px，...... ，结束颜色 90%/px),线性渐变,开始颜色和结束颜色是必选项;<br>
        repeating-linear-gradient(to left/right/top/bottom/60deg,起始颜色 20%/px，颜色值1 50%/px，颜色值2 70%/px，...... ，结束颜色 90%/px)，重复性线性渐变;<br>
        radial-gradient(circle/ellipse 50px/closest/farthest-side/corner  at left/right/top/bottom/center,起始颜色,颜色值1，颜色值2，...... ，结束颜色)，放射性渐变,椭圆时要失职长短半径值；<br>
        repeating-radial-gradient(circle/ellipse 50px、closest/farthest-side/corner  at left/right/top/bottom/center,起始颜色,颜色值1，颜色值2，...... ，结束颜色)，重复放射性渐变；<br>
溢出处理：<br>
     overflow/overflow-X/overflow-Y:<br>
        visible:不剪裁内容，可能会显示在内容之外。<br>
        hidden:剪裁内容，不提供流动按钮。<br>
        scroll:剪裁内容，提供流动按钮。<br>
        auto:通过计算，如果溢出框，则应该提供流动按钮。<br>
     text-overflow:设置是否使用一个单行省略标记（......）来标示对象内文本的溢出。<br>
                   clip,默认不显示。<br>
                   ellipsis,当对象内文本溢出时显示省略标记（......）。<br>
                   该属性需要和overflow:hidden、white-space:nowrap配合使用。<br>

                       多行省略号：
                         display: -webkit-box;
                         -webkit-line-clamp: 2;
                         -webkit-box-orient: vertical;
列表和表格：<br>
    表格有关的属性：<br>
        caption-side:top顶端，bottom在表格之下，设置表格表题的位置。<br>
        border-spacing:设置分隔单元格边框的距离。<br>
        border-callapse:设置是否把表格边框合并为单一的边框，属性值separate默认值/callapse边框合并。<br>
        empty-cells:show显示、hide不显示，设置是否显示表格中的空单元格。<br>
        table-layout:auto默认/fixed固定，设置显示宽度是否随内容拉伸。<br>
    列表有关的属性：<br>
        list-style:简写属性。<br>
        list-style-type:设置列表项标记的内容。<br>
                none无标记/disc实心圆默认/circle空心圆/square实心方框。<br>
                decimal数字/decimal-leading-zero以0开头的数字。<br>
                lower-roman小写罗马数字/upper-roman大写罗马数字。<br>
                lower-alpha小写英文字母/upper-alpha大写英文字母。<br>
        list-style-position:设置列表项目标志的位置，属性值：inside/outset默认值。<br>
        list-style-imge:url()将图片设置为列表项标志，属性值：url图片路径/none默认。<br>

<h3>动画效果</h3>
变形：transform是属性名，translate()、scale()等是属性名的属性值,且translate()的参数代表移动了某段距离，而不是移动到移动到给某个点。<br>
    transform:translate(100px,100px)/translate3D(100px,100px,150PX)/translateX/Y/Z(200px)平移;如果移动的数据是百分比参数，则以当前被移动元素的宽高为参照标准，可以此知识点设置元素居中；<br>
    scale(0.5,2.6)/scaleX/Y(1.3)缩放；<br>
    rotate(-45deg/0.5rad)/rotate3D(1,1,1,60deg)/rotateX/Y/Z(-45deg)旋转；<br>
    skewX/Y(30deg,60deg)沿轴转动；<br>
    matrix(缩放x值，倾斜x轴角度，倾斜y轴角度，缩放y值，平移x值，平移y值),不添加单位，角度单位为弧度；<br>
    transform-origin:left、right、top、bottom关键字/px像素/%百分比，设置元素的基准点。<br>
    perspective:1000px,眼睛离电脑屏幕的距离,设置在其父元素上。<br>
过渡动画：<br>
    transition:简写属性。<br>
    transition-property:none/all/单个属性，规定所要过渡的属性项。<br>
    transition-delay:规定过渡效果何时开始，默认是0。<br>
    transition-duration:定义过渡效果花费的时间，默认是0，单位是秒或毫秒。<br>
    transition-timing-function:规定过渡效果的时间曲线，默认是'case'。<br>
        linear:规定以相同的速度开始至结束的过渡效果（等于cubic-bezier(0,0,1,1)）;<br>
        case:规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0,0.25,1)）；<br>
        case-in:规定以慢速开始的过渡效果（cubic-bezier(0.42,0,1,1)）;<br>
        case-out:规定以慢速结束的过渡效果（cubic-bezier(0,0,0.58,1)）;<br>
        case-in-out:规定以慢速开始和结束的过渡效果cubic-bezier(0.42,0,0.58,1);<br>
        cubic-bezier(n,n,n,n):自定义时间曲线。<br>        
关键帧动画：<br>
    div{<br>
        width:200px;<br>
        height:200px;<br>
        font-size:50px;<br>
        background:red;<br>


        animation-name:mydh;(动画名字)<br>
        animation-duration:1s;(动画时长)<br>
        animation-delay:2s;(动画延迟时长)<br>
        animation-timing-function:linear;(动画时长曲线)<br>
        animation-iteration-count:1/2/5/.../infinite;(动画循环次数)<br>
        animation-direction:alternate;(动画逆向运动)<br>
        animation:动画名字 动画时长 动画延迟时长 动画时长曲线 动画循环次数 动画逆向运动。<br>
        animation-fill-mode:forward/backward在有延迟情况下/both;(动画动态时间之外的状态，不可写进简写属性中)<br>
    }<br>
    @keyframes mydh{<br>
                    from/0%{<br>
                            margin-left:50px;<br>
                            margin-top:50px;<br>
                            background:green;<br>
                            }<br>
                    30%{<br>
                        margin-left:100px;<br>
                        margin-top:100px;<br>
                        background:red;<br>
                        }<br>
                    70%{<br>
                        margin-left:200px;<br>
                        margin-top:200px;<br>
                        background:orange;<br>
                        }<br>
                    to/100%{<br>
                            margin-left:300px;<br><
                            margin-top:300px;<br>
                            baakground:blue;<br>
                            }<br>
    }<br>
<h3>CSS布局</h3>
CSS定位:<br>
CSS有三种基本的定位机制：普通流、浮动流（导致普通流环绕在他的身边，需要要用clear属性将其清除）、定位流（三种流的优先级：浮动流>定位流>普通流；定位流+z-index:x>浮动流+“||z-index:x”>普通流）。<br>
position:定位时要设置宽高，否则定位无效。<br>
    static,默认值，没有定位。<br>
    relative,相对定位，相对于其正常位置，保留原有位置区域，位移的距离产生高度塌陷。<br>
    absolute,绝对定位，相对于父元素，并且需要将父元素设置为相对定位relative,父元素会产生高度塌陷，需要手动设置父元素高度；可以层叠，不保留原有位置区域。<br>
    fixed,绝对定位，相对于浏览器窗口，不保留原有位置区域,设置为固定定位后需要设置位置，否则不显示此元素<!-- 如果用四边距离设置遮罩要用id选择器 -->。<br>
设置参照基准点：<br>
    将父元素设为相对定位，且不设置坐标。<br>
    如果父元素设置了相对定位，子元素的绝对定位将以父元素的基准点为参照基准点。<br>
    绝对定位时元素不在原来的维度里。<br>
    如果父元素不设置相对定位，而此元素设置绝对定位，则基准点会以body为参照点，也就是说设置定位时必须有基准点。<br>
常用布局方式：<br>
    固定布局（px）和流体布局（%）;<br>
    浮动布局；<br>
    定位布局；<br>
    弹性布局。<br>
Z-index:设置元素的堆叠顺序，数越大越靠前。<br>
clip:rect(top,right,bottom,left):设置元素的形状,四条边的数值是以top和bottom作为参照点的。此属性只有在position:absolute或position:fixed。auto自动和不设置一样。<br>
float:left、right、none,浮动；clear:both、left、right、none,清楚浮动。<br>
box-sizing：content-box(不包含边框的宽度);border-box(包含边框的宽度)；<br>
多列布局：<br>
    columns:多列布局的简写属性。<br>
            columns-width:规定列的宽度（该宽度为缩放时的最小宽度，默认为auto ）。<br>
            columns-count:规定列的数目。<br>
            此属性存在兼容性问题，可以通过添加前缀解决。<br>
    column-rule:设置列之间的间距，复合属性。<br>
            column-rule-color:规定列之间的颜色。<br>
            column-rule-style:规定列之间的样式。<br>
            column-rule-width/gap:规定列之间的宽度。<br>
    column-span:规定元素应该跨的列数，默认值为1，可以设置为all。<br>
弹性布局：<br>
    display:(首先用display开启弹性布局盒子，适用于父元素上)<br>
            flex,将对象设置为弹性伸缩盒子；<br>
            inline-flex，讲对象设置为块级弹性伸缩盒;<br>
    flex-flow:<br>
            flex-direction:row/row-reverse/column/column-reverse,弹性盒子布局中子元素的排列顺序。<br>
            flex-wrap:设置子元素超出父容器时是否换行。<br>
                      wrap:换行；<br>
                      nowrap:不换行；<br>
                      wrap-reverse:反向换行；<br>
    justify-content:弹性盒子子元素在主轴上的对齐方式,将此属性设置在容器元素上。<br>
            flex-start/flex-end/center/space-between/space-around<br>
    align-content:适用于多行弹性伸缩盒的对齐方式，此属性会抵消掉align-items属性的作用。<br>
            flex-start/flex-end/center/space-between/space-around<br>
    align-items:弹性盒子子元素在侧轴上的对齐方式,设置在父元素上。<br>
            flex-start/flex-end/center/baseline/strentch(拉伸，默认)<br>
    align-self:弹性盒子子元素在主轴上的对齐方式,设置在子元素上。<br>
            flex-start/flex-end/center/baseline/strentch(拉伸，默认)<br>
    order：<br>
            适用于弹性伸缩盒的子元素，用数值来定义子元素的排列顺序，数值小的排在前面，可以为负值。<br>
    flex:适用于弹性盒子的子元素，设置子元素如何分配空间。<br>
            none：默认值0,0，auto;<br>
            flex-grow:弹性扩展因子。<br>
            flex-shrink:弹性收缩因子。<br>
            flex-basis:固定因子。<br>
<h3>补充的知识点</h3>
颜色的表示方式：<br>
    颜色名称：red、green、blue。<br>
    十六进制：#ab4c5f, 不支持透明颜色。<br>
    rgb三原色：rgb(110,200,255,非必选项的0-1之间的透明度数值)，支持透明度。<br>
    HSLA模式：HSLA(0-360色调，0%-100%饱和度，0%-100%的亮度，0-1的透明度)。<br>
    拾色器<br>
    opacity:设置透明度，作用于内容和元素标签。而rgba()透明度只作用于元素标签不作用于内容。<br>
    在HTML文本中颜色要加上引号，在CSS文本中不需要加引号。<br>
大小单位：<br>
    浏览器默认字体大小为：16px;<br>
    em:是以父元素的单位作为参考标准的；<br>
    rem:是以html文档的单位为参考标准的。<br>
前缀：<br>
    -webkit-:webkit内核的浏览器Chorme和Safari,手机端基本都是采用此内核;-ms-:trident内核的浏览器IE;-moz-:Gecko内核的浏览器Firefox;-o-:Presto内核的浏览器Opera;<br>
    快捷键方法：ul+tab+复制粘贴；<br>
鼠标样式：<br>
    cursor:hand/wait/.... 。<br>
display:<br>
    none:此元素被隐藏,画面和空间都被隐藏。<br>
    block:此元素显示为块级元素，换行，可设置宽高尺寸。<br>
    inline:行内元素，不换行，大小自适应,让所有元素都在同一条线上。<br>
    inline-block:行内块级元素，可设置大小，但不可以换行。<br>
visibility:didden,画面隐藏，空间保留。<br>
div元素的居中方式：margin:0 auto;<br>
HTML5大纲算法：<br>
    输入H5大纲算法网址；<br>-
    body、nav没有标题标签也是合理的，section元素标签中至少含有一个h1~h6的标签的，这样的话大纲才能结构完整清晰。如果不需要标题标签的话可以通过display:none属性来隐藏。
  </pre> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail-css{
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
