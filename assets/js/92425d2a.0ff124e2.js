"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[984],{67738:e=>{e.exports=JSON.parse('{"functions":[{"name":"_call","desc":"An Internal Function for use when passing arguments into a recycled thread.","params":[{"name":"callback","desc":"","lua_type":"(T...) -> nil"},{"name":"...","desc":"","lua_type":"T..."}],"returns":[{"desc":"","lua_type":"void"}],"function_type":"method","tags":["Internal Use Only"],"private":true,"source":{"line":76,"path":"lib/init.lua"}},{"name":"_createThread","desc":"Creates a new thread in the ThreadPool.","params":[],"returns":[{"desc":"","lua_type":"void"}],"function_type":"method","tags":["Internal Use Only"],"private":true,"source":{"line":98,"path":"lib/init.lua"}},{"name":"spawn","desc":"Runs the provided function on a new or reused thread with the supplied parameters.","params":[{"name":"callback","desc":"","lua_type":"(...: any) -> nil"},{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"void"}],"function_type":"method","source":{"line":138,"path":"lib/init.lua"}},{"name":"new","desc":"Creates a new `ThreadPool` Instance.\\n\\n:::note\\nYou can specify the amount of threads the ThreadPool will keep open by setting the `threadCount` parameter.\\n\\nYou can also specify the max time the Thread will be cached for by setting the `cachedThreadLifetime` parameter.\\nSetting this parameter to 0 will disable caching.","params":[{"name":"threadCount","desc":"","lua_type":"number?"},{"name":"cachedThreadLifetime","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"ThreadPool"}],"function_type":"static","source":{"line":164,"path":"lib/init.lua"}}],"properties":[{"name":"_openThreads","desc":"References to open threads.","lua_type":"{ thread? }","tags":["Internal Use Only"],"private":true,"source":{"line":37,"path":"lib/init.lua"}},{"name":"_threadCount","desc":"The amount of threads to cache.\\n\\nNegative numbers will enable Dynamic Caching, the Absolute Value of the property will always represent the minimum amount of threads that will be kept open.","lua_type":"number","tags":["Internal Use Only"],"private":true,"readonly":true,"source":{"line":50,"path":"lib/init.lua"}},{"name":"_cachedThreadLifetime","desc":"The amount of seconds a thread will be kept alive after going idle.","lua_type":"number","tags":["Internal Use Only"],"private":true,"readonly":true,"source":{"line":61,"path":"lib/init.lua"}}],"types":[],"name":"ThreadPool","desc":"Recyles threads instead of creating a new thread everytime you want to run your code in a thread.\\n\\n**Usage**\\n\\n```lua\\n    local ThreadPool = Require(path.to.module)\\n    \\n    local myThreadPool = ThreadPool.new()\\n    myThreadPool:spawn(function(...)\\n        print(...) -- Prints \\"Hello World\\"\\n    end, \\"Hello, world!\\")\\n```","source":{"line":26,"path":"lib/init.lua"}}')}}]);