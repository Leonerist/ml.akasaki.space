(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{783:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"convolutional-block-attention-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convolutional-block-attention-module"}},[t._v("#")]),t._v(" Convolutional Block Attention Module")]),t._v(" "),a("h3",{attrs:{id:"这篇笔记的写作者是asthestarsfall。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这篇笔记的写作者是asthestarsfall。"}},[t._v("#")]),t._v(" 这篇笔记的写作者是"),a("a",{attrs:{href:"https://github.com/asthestarsfalll",target:"_blank",rel:"noopener noreferrer"}},[t._v("AsTheStarsFall"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("论文名称："),a("a",{attrs:{href:"https://arxiv.org/abs/1807.06521",target:"_blank",rel:"noopener noreferrer"}},[t._v("CBAM: Convolutional Block Attention Module"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("作者：Sanghyun Woo, Jongchan Park, Joon-Young Lee, and In So Kweon，Korea Advanced Institute of Science and Technology, Daejeon, Korea")])]),t._v(" "),a("h2",{attrs:{id:"摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[t._v("#")]),t._v(" 摘要")]),t._v(" "),a("ul",[a("li",[t._v("CBAM（Convolutional Block Attention Moudule)是一种简单有效的"),a("a",{attrs:{href:"https://www.cnblogs.com/samshare/p/11801806.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前馈"),a("OutboundLink")],1),t._v("卷积神经网络注意力模块。")]),t._v(" "),a("li",[t._v("该模块为混合域注意力机制（）从通道和空间两个方面依次推断attention map。")]),t._v(" "),a("li",[t._v("CBAM是一个轻量级的通用模块，可以无缝集成到任何CNN中。")])]),t._v(" "),a("p",[a("strong",[t._v("关键词:物体识别，注意机制，门控卷积")])]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("ul",[a("li",[t._v("卷积神经网络(CNNs)基于其丰富的表达能力显著提高了视觉任务的性能，目前的主要关注网络的三个重要因素："),a("strong",[t._v("深度，宽度和基数")]),t._v("（Cardinality）。")]),t._v(" "),a("li",[t._v("从LeNet到残差网络，网络变的更加深入，表达形式更加丰富；GoogLeNet表明宽度是提高模型性能的另一个重要因素；Xception和ResNext则通过增加网络的"),a("strong",[t._v("基数")]),t._v("，在节省参数的同时，来获得比深度、宽度更强的表达能力（引用于ResNext论文）。")]),t._v(" "),a("li",[t._v("除了这些因素之外，本文考察了与网络结构设计不同的方面——注意力。")])]),t._v(" "),a("h2",{attrs:{id:"注意力机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意力机制"}},[t._v("#")]),t._v(" 注意力机制")]),t._v(" "),a("ul",[a("li",[t._v("注意（attention）在人类感知中起着重要的作用。人类视觉系统的一个重要特性是，它不会试图一次性处理整个场景，而是利用一系列的局部一瞥（a sequence of partial glimpses）来获得对显著部分的关注。")]),t._v(" "),a("li",[t._v("近年来有一些尝试将注意力机制加入CNN中，如使用Endcoder-Decoder结构注意力模块的Residual Attention Network，使用“Squeeze-Excitation“模块的SEnet。")]),t._v(" "),a("li",[t._v("具体可见"),a("a",{attrs:{href:"https://asthestarsfalll.icu/2021/05/12/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("注意力机制"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"cbam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cbam"}},[t._v("#")]),t._v(" CBAM")]),t._v(" "),a("h3",{attrs:{id:"整体结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体结构"}},[t._v("#")]),t._v(" 整体结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Thedeadleaf/images/raw/master/image-20210512124618161.png",alt:"image-20210512124618161"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("CBAM在混合域（通道域、空间域）上引入注意力机制，拥有更强的表达能力；")])]),t._v(" "),a("li",[a("p",[t._v("整个过程可以被概括为：")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mi",[t._v("F")]),a("mtext",[t._v("’")]),a("mo",[t._v("=")]),a("msub",[a("mi",[t._v("M")]),a("mi",[t._v("c")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("F")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("⊗")]),a("mi",[t._v("F")]),a("mspace",{attrs:{linebreak:"newline"}}),a("msup",[a("mi",[t._v("F")]),a("mrow",[a("mo",{attrs:{mathvariant:"normal"}},[t._v("′")]),a("mo",{attrs:{mathvariant:"normal"}},[t._v("′")])],1)],1),a("mo",[t._v("=")]),a("msub",[a("mi",[t._v("M")]),a("mi",[t._v("s")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("msup",[a("mi",[t._v("F")]),a("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("⊗")]),a("msup",[a("mi",[t._v("F")]),a("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("F’=M_c(F)\\otimes F\\\\\nF''=M_s(F')\\otimes F'\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mord"},[t._v("’")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.10903em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("c")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("⊗")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")])]),a("span",{staticClass:"mspace newline"}),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.801892em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.801892em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("′′")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.051892em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.10903em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("s")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.801892em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("⊗")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.801892em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.801892em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])])])])])])]),t._v(" "),a("p",[t._v("其中"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("F")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("F")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")])])])]),t._v("为模块的输入，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("M")]),a("mi",[t._v("c")])],1),a("mtext",[t._v("、")]),a("msub",[a("mi",[t._v("M")]),a("mi",[t._v("s")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M_c、M_s")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.10903em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("c")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mord cjk_fallback"},[t._v("、")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.10903em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("s")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),t._v("表示通道注意力图和空间注意力图，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[t._v("⊗")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\otimes")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord"},[t._v("⊗")])])])]),t._v("表示element-wise multiply，在具体的实现过程中会相应的进行广播。")])])]),t._v(" "),a("h3",{attrs:{id:"channel-attention-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-attention-module"}},[t._v("#")]),t._v(" Channel attention module")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Thedeadleaf/images/raw/master/image-20210512130136918.png",alt:"image-20210512130136918"}})]),t._v(" "),a("p",[t._v("利用通道之间的关系生成通道注意图（channel attention map），具体可见"),a("a",{attrs:{href:"https://asthestarsfalll.icu/2021/05/12/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("注意力机制"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("通道注意力主要关注的是图像的“什么”更有意义。")]),t._v(" "),a("p",[t._v("实现过程：")]),t._v(" "),a("ol",[a("li",[t._v("对input进行"),a("strong",[t._v("全局平均池化")]),t._v("和"),a("strong",[t._v("全局最大池化")]),t._v("来聚集空间内的信息;")]),t._v(" "),a("li",[t._v("通过一个"),a("strong",[t._v("共享的")]),t._v("MLP(多层感知机)(具体实现可用1X1卷积层),为了减少参数隐藏层的通道数被设置为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mfrac",[a("mi",[t._v("C")]),a("mi",[t._v("R")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\frac{C}{R}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.217331em","vertical-align":"-0.345em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.872331em"}},[a("span",{staticStyle:{top:"-2.6550000000000002em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")])])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.394em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.345em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])]),t._v("，在第一层之后设置了ReLU函数来引入非线性（类似于SENet，这种结构出现在各种网络之中，作用之一是为了减少参数和计算量，作用之二是为了获得更多的非线性）；")]),t._v(" "),a("li",[t._v("对应求和之后经过一个ReLU层得到最终的Channel attention map")]),t._v(" "),a("li",[t._v("将其与input相乘（会自动进行广播）。")])]),t._v(" "),a("p",[t._v("代码复现：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Channel_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  in_ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ratio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Channel_module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global_avg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AdaptiveAvgPool2d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global_max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AdaptiveMaxPool2d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fc1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Conv2d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in_ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in_ch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bias"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReLU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inplace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fc2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Conv2d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in_ch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in_ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bias"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fc2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fc1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global_avg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fc2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fc1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global_avg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        attention "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sigmoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("attention\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h3",{attrs:{id:"spatial-attention-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spatial-attention-module"}},[t._v("#")]),t._v(" Spatial attention module")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Thedeadleaf/images/raw/master/image-20210512133601683.png",alt:"image-20210512133601683"}})]),t._v(" "),a("p",[t._v("利用空间之间的关系来生成空间注意力图（spatial attention map）")]),t._v(" "),a("p",[t._v("空间注意力主要关注“哪里”有重要信息，与通道注意力相辅相成。")]),t._v(" "),a("p",[t._v("实现过程：")]),t._v(" "),a("ol",[a("li",[t._v("在通道维度上分别进行平均池化和最大池化，然后进行concat；")]),t._v(" "),a("li",[t._v("经过一个7X7的卷积层，将通道数降为1；")]),t._v(" "),a("li",[t._v("Sigmoid函数；")]),t._v(" "),a("li",[t._v("与inputs也就是上一层的Channel-refined feature对应相乘。")])]),t._v(" "),a("p",[t._v("代码复现：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Spatial_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kernel_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Spatial_module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Conv2d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kernel_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" padding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                              bias"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用padding保持大小不变")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepdim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 沿着channel维度计算均值和最大值")]),t._v("\n        m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepdim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sigmiod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("x\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"arrangement-of-attention-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arrangement-of-attention-modules"}},[t._v("#")]),t._v(" Arrangement of attention modules.")]),t._v(" "),a("p",[t._v("以上两个注意力模块计算互补的注意力，考虑到这一点，这两个模块可以并行或是顺序排列。实验表明，顺序排列比并行排列效果更好，其中通道优先顺序略好于空间优先顺序。")]),t._v(" "),a("h2",{attrs:{id:"ablation-studies-消融研究"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ablation-studies-消融研究"}},[t._v("#")]),t._v(" Ablation studies（消融研究）")]),t._v(" "),a("p",[t._v("作者团队首先寻找计算通道注意的有效方法，然后是空间注意。最后，我们考虑如何结合通道关注模块和空间关注模块。")]),t._v(" "),a("h3",{attrs:{id:"channel-attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channel-attention"}},[t._v("#")]),t._v(" Channel attention")]),t._v(" "),a("p",[t._v("作者团队比较了3种不同的通道注意力:平均池化、最大池化和两种池化的联合使用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/12/kFItTg6yD1u5joJ.png",alt:"image-20210512160839407"}})]),t._v(" "),a("p",[t._v("可以看到，最大池化与平均池化同样重要，而SENet忽略了最大池化的重要性。")]),t._v(" "),a("p",[a("strong",[t._v("对显著部分进行编码的最大池化特征可以补偿对全局信息软编码的平均池化特征")]),t._v("。")]),t._v(" "),a("p",[t._v("在空间注意力的研究当中，将直接使用最大池化特征和平均池化特征，并将R设置为16。")]),t._v(" "),a("h3",{attrs:{id:"spatial-attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spatial-attention"}},[t._v("#")]),t._v(" Spatial attention")]),t._v(" "),a("p",[t._v("作者团队考虑了两种空间注意力的方案："),a("strong",[t._v("一是使用通道维度上的平均池化和最大池化，二是使用1X1卷积进行降维")]),t._v("。此外还研究了3X3和7X7卷积核的影响。在实验当中，将空间注意力模块置于通道注意力模块之后。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Thedeadleaf/images/raw/master/image-20210512162421957.png",alt:"image-20210512162421957"}})]),t._v(" "),a("p",[t._v("可以看到，通道池化的效果更好，同时，使用较大的核会产生更好的精度，这意味着需要一个更大的感受野来决定空间上的重要区域。")]),t._v(" "),a("h3",{attrs:{id:"arrangement-of-the-channel-and-spatial-attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arrangement-of-the-channel-and-spatial-attention"}},[t._v("#")]),t._v(" Arrangement of the channel and spatial attention.")]),t._v(" "),a("p",[t._v("作者团队考虑了三种不同的模块安排方案：通道优先，空间优先和并行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Thedeadleaf/images/raw/master/image-20210512163932604.png",alt:"image-20210512163932604"}})]),t._v(" "),a("p",[t._v("可以看到，通道优先的效果更好。")]),t._v(" "),a("h3",{attrs:{id:"最终效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最终效果"}},[t._v("#")]),t._v(" 最终效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/Thedeadleaf/images/raw/master/image-20210512164218849.png",alt:"image-20210512164218849"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);