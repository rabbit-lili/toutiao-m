// PostCss配置文件

module.exports = {
    // 配置要使用的postcss插件
    plugins: {
        // 配置使用了 autoprefixer 插件
        // 作用，生成浏览器css样式规则前缀
        // VueCLI内部已配置了autoprefixer插件
        // 所以这里又配置了一个，会产生冲突，控制台才标红提醒。
//     'autoprefixer': {// 插件配置
        // 配置要兼容到的环境信息
//     browsers: ['Android >= 4.0', 'ios >= 8']
// },

        // 配置使用了postcss-pxtorem插件
        // 作用：把px转为rem
    'postcss-pxtorem': {
        // lib-flexible的rem适配方案，把一行分为10分，每份就是十分之一
        // 所以rootValue应该设置为你的设计稿宽度的十分之一
        // 例；设计稿通常是iphone6的宽度是750px，所以rootValue应该设置为750/10=75
        // Vant建议设置为37.5，为什么？vant设计是基于375px写成的，所以必须设置成37.5
        // 而我们的设计稿对应的尺寸也必须要进行减半，例搜索框100px,要除以2写成50px
        // 有没有办法自动处理这种情况，不用每次手动除2
        // 如果是vant的样式，就按37.5转换，如果时自己的样式，就按75来转换
        // 查阅文档可知，rootValue支持两种类型：
        // 数字：【固定的数值】和函数：【可动态的处理返回】
        //  postcss-pxtorem处理每个css文件时都会调用这个函数，会把被处理的css文件相关的信息通过参数传递给该函数

        // rootValue:37.5,
        rootValue({file}){
            // console.log("处理的css文件相关的信息：",file);
            // 判断文件路径中是否包含vant，如果不等于-1，表示找到vant，设置37.5
            // 这样设计稿就可以，量多少，写多少了
            return file.indexOf('vant')!==-1?37.5:75;
        },
        // 配置要转换的css属性  * 表示所有
        propList:['*']
        }
    }
}
    