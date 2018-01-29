**Big O** is used the metric used to define a program's efficiency. When describing Big O we drop the contents and use the dominant term. 
**Time Complexity** used to describe the the run-time
**Space Complexity** used to describe how much space or memory is required to run a program 

## Terms:
**O (Big O)** - upper bounds.

**Big Omega** - lower bounds.
 
**Big-Theta** is a tight bound, i.e. upper and lower bound.
Adding vs Multiplying Runtimes

## Add
```JavaScript
for(let i = 0; i < arr.length ;i++){
  console.log(i)
}
for(let j = 0; j < arr.length ;i++){
  console.log(j)
} // runtime is O(n + n or m) or simplifies to O(n)
```
## Mutiply
```JavaScript
for(let i = 0; i < arr.length ;i++){
  for(let i = 0; j < arr.length ;j++){
  console.log(i + j)
  }
} // runtime is O(n * m) or O(n^2)
```
