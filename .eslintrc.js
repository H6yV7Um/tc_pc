// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'standard',
    plugins: [
        'html'
    ],
    globals: {
        '$': true
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        //警告
        "no-inner-declarations": [0, "both"],     //不建议在{}代码块内部声明变量或函数
        "no-extra-boolean-cast": 0,               //多余的感叹号转布尔型
        "no-extra-semi": 0,                       //多余的分号
        "no-extra-parens": 0,                     //多余的括号
        "no-empty": 0,                            //空代码块
        "no-use-before-define": [0, "nofunc"],    //使用前未定义
        "complexity": [0, 10],                    //圈复杂度大于10 警告
        //常见错误
        "comma-dangle": [0, "never"],             //定义数组或对象最后多余的逗号
        "no-debugger": 0,                         //debugger 调试代码未删除
        "no-constant-condition": 0,               //常量作为条件
        "no-dupe-args": 0,                        //参数重复
        "no-dupe-keys": 0,                        //对象属性重复
        "no-duplicate-case": 0,                   //case重复
        "no-empty-character-class": 0,            //正则无法匹配任何值
        "no-invalid-regexp": 0,                   //无效的正则
        "no-func-assign": 0,                      //函数被赋值
        "valid-typeof": 0,                        //无效的类型判断
        "no-unreachable": 0,                      //不可能执行到的代码
        "no-unexpected-multiline": 0,             //行尾缺少分号可能导致一些意外情况
        "no-sparse-arrays": 0,                    //数组中多出逗号
        "no-shadow-restricted-names": 0,          //关键词与命名冲突
        "no-undef": 0,                            //变量未定义
        "no-unused-vars": 0,                      //变量定义后未使用
        "no-cond-assign": 0,                      //条件语句中禁止赋值操作
        "no-native-reassign": 0,                  //禁止覆盖原生对象

        //代码风格优化
        'padded-blocks': 0,                       //取消块内填充
        'no-eval': 0,                             //取消eval 限制
        'no-labels': 0,                       //取消空标签限制
        'space-before-function-paren': 0,         //取消函数前置空格
        'one-var': 0,                             //取消函数中变量强制一起声明
        'no-void': 0,                             //取消void限制
        'eol-last': 0,                            //取消文件末尾空行限制
        'wrap-iife': 0,                           //取消立即执行函数需要括号包起限制
        'sort-imports': 0,                        //取消模块内的import 排序
        'no-mixed-spaces-and-tabs': 0,             //取消空格与Tab混合缩进限制
        'no-tabs': 0,                            // 取消tab验证
        'indent': 0,                               // 取消 缩进验证
        'no-new': 0,                              //new 初始化实例建议赋值
        'semi': [0, 'always'],                    //强制分号结尾
        "quotes": [0, "single"],                  //建议使用单引号
        "no-else-return": 0,                      //在else代码块中return，else是多余的
        "no-multi-spaces": 0,                     //不允许多个空格
        "key-spacing": [0, {"beforeColon": false, "afterColon": true}],//object直接量建议写法 : 后一个空格签名不留空格
        "block-scoped-var": 0,                    //变量定义后未使用
        "consistent-return": 0,                   //函数返回值可能是不同类型
        "accessor-pairs": 0,                      //object getter/setter方法需要成对出现
        "dot-location": [0, "property"],          //换行调用对象方法  点操作符应写在行首
        "no-lone-blocks": 0,                      //多余的{}嵌套
        "no-extend-native": 0,                    //禁止扩展原生对象
        "no-floating-decimal": 0,                 //浮点型需要写全 禁止.1 或 2.写法
        "no-loop-func": 0,                        //禁止在循环体中定义函数
        "no-new-func": 0,                         //禁止new Function(...) 写法
        "no-self-compare": 0,                     //不允与自己比较作为条件
        "no-sequences": 0,                        //禁止可能导致结果不明确的逗号操作符
        "no-throw-literal": 0,                    //禁止抛出一个直接量 应是Error对象
        "no-return-assign": [0, "always"],        //不允return时有赋值操作
        "no-redeclare": [0, {"builtinGlobals": true}],//不允许重复声明
        "no-unused-expressions": [0, {"allowShortCircuit": true, "allowTernary": true}],//未使用的表达式
        "no-useless-call": 0,                     //无意义的函数call或apply
        "no-useless-concat": 0,                   //无意义的string concat
        "no-with": 0,                             //禁用with
        "no-warning-comments": [0, {"terms": ["todo", "fixme", "any other term"], "location": "anywhere"}],//标记未写注释
        "curly": 0,                                //if、else、while、for代码块用{}包围
        "keyword-spacing" : 0
    }
}
