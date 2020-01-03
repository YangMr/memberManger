/**
 * 1. 安装mock.js   cnpm i mockjs --save-dev
 * 2. 引入mockjs
 * **/

//引入mockjs
const Mock = require("mockjs");
//使用mockjs定义数据
const data = Mock.mock({
    "memberList|10" : [
        {
            id : 1,
            name : "jack"
        }
    ],
    "user|20" : [
        {
            id : 1,
            name : "rose"
        }
    ]
});

// console.log(data)
console.log(JSON.stringify(data,null,2))
