##0x00
    vue-ckeditor 是基于[ckeditor](https://github.com/ckeditor/ckeditor-dev.git)的一个vue组件。
    它使用gulp和webpack将原先ckeditor写tag的异步加载重构为静态分析打包。您可以像熟悉ckeditor一样熟练的使用它。
    但愿它会给您带来便利。全功能的ckeditor加上vue库也打包进去一共1.2M。

##0x01
    在源码的vue-ckeditor-sample目录下有ckeditor[官方示例](https://github.com/ckeditor/ckeditor-dev/blob/master/samples/index.html)的打包,withVue是讲ckeditor作为vue组件使用的示例，如果您不愿使用vue也可以参加withoutVue的实例，试一下vue吧，它值得你的使用。
    
##0x02
    vue-ckeditor-sample中已经存在打包完毕的文件，它是一个完全版的ckeditor，可能对您来说显得臃肿了，你可以参见ckeditor的配置来去除插件重新打包，定制您的富文本编辑器。
    打包步骤如下：
    在文件夹根
     
    >npm install
     
    下载我们所要的依赖
    
    >gulp
    
    即可
    
    同样，如果您修改了ckeditor的源码，也需要重新打包。
    
##0x03
    如果您需要为ckeditor编写自定义的插件，我们默认您已经阅读了ckeditor的源码并且对如何重新构建拥有一定的认识。
    和ckeditor不同的是，您需要在config文件中添加您新定义的插件的图标，即原先plugins/icons中的图片。
    随意更改文件相对路径将会是灾难性的。
