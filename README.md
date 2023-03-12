# ThreadPool

<a href="https://clownxz.github.io/ThreadPool/"><strong>View docs</strong></a>

A library for creating Thread Pools to improve performance and reduce latency.

---

#### Thread Pooling
Thread Pooling reuses already existing threads instead of creating new threads every time you need to use one.

#### Why use this?
You shouldn't need to, unless you are creating multiple threads at a given time.

#### Usage
```lua
local ThreadPool = Require(path.to.module)

local myThreadPool = ThreadPool.new()

myThreadPool:spawn(function(...)
        print(...) -- Prints "Hello World"
end, "Hello, world!")
```

---

#### Building with Rojo

To build yourself, use: 
```bash
rojo build -o "ThreadPool.rbxm"
```

For more help, check out [the Rojo documentation](https://rojo.space/docs).