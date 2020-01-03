const Mock = require("mockjs");

const data = Mock.mock({
    "list|5":[
        {
            "id|+1" : 1,
            "name" : "@cname",
            "price" : '@float',
            "flag" : "@boolean",
            "birthday" : "@date",
            "entrydate":"@date(yyyy/MM/dd)",
            "time" : "@time",
            "ctime" : "@datetime",
            "cctime" : "@datetime(yyyy/MM/dd HH:mm:ss)",
            "pic" : "@image",
            "title" : "@ctitle(3,6)",
            "content" : "@csentence(10,50)",
            "first" : "@cfirst",
            "last" : "@clast",
            "url" : "@url('https','www.baidu.com')",
            "domain" : "@domain",
            "ip" : "@ip",
            "email" : "@email",
            "area" : "@region",
            "address" : "@county(true)",
            "zipCode" : "@zip",
            "color" : "@color"
        }
    ]
});

console.log(JSON.stringify(data,null,2))
