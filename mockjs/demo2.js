const Mock = require("mockjs");

const data = Mock.mock({
    "list|5" : [
        {
            "id|+1" : 1,
            //如果属性值是一个字符串，那么当前定义的规则则是生成5个重复的jack
            "name|5" : "jack",
            //随机生成1-3  rose
            "cname|1-3" : "rose",
            "age|1-120" : 1,
            "salary|20-40.1-3" : 1,
            "flag|1" : true,
            "check|4-8" : true,   //4/(4+8)   8/(4+8),
            "user|3" : {id:1,name : "jack",age : 20},
            "user|1-3" : {id:1,name : "jack",age : 20},
            "idCard" : /\d{15}|\d{18}/
        }
    ]
})
console.log(JSON.stringify(data,null,2))
