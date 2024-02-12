[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

**Recurrence Relation**:<br />
In my code, each recursive call divides the array into three parts, which implies that the function is called three times for each division. <br />
Each call deals with 1/3 of the original problem size <br />
Lastly, there is a linear amount of work done outside of the recursive calls to calculate the splitting points and then combine the sums. <br />

Therefore we can define: $T(n)$ = $3T(n/3)$ + $f(n)$ <br />
Solving it: $T(n)$ = $3T(n/3)$ + $cn$ <br />
$T(n)$ = $3(3T(n/9) + c(n/3))$ + $cn$ <br />
$T(n)$ = $9T(n/9)$ + $2cn$ <br />
$T(n)$ = $27T(n/27)$ + $3cn$ <br />
...<br />
...<br />
$T(n)$ = $3$<sup>$i$</sup>$T$($n/3$<sup>$i$</sup>) + $icn$<br />
Applying base case to find i:<br />
$n/3$<sup>$i$</sup> = $1$<br />
$i = log$<sub>$3$</sub>$n$<br />
Substituting i back into the recurrence gives us:<br />
$T(n)$ = $nT(1)$ + cnlog<sub>$3$</sub>$n$<br />
Assuming T(1) is constant and ignoring constant factors and coefficients the final $\Theta$ complexity is:<br />
$\Theta$ (n log n)<br />

****Reasoning for Big Theta Complexity****:<br />
The algorithm's Big theta complexity can be explained by looking at two things: <br />
The depth of the recursion and the work done at each step. We cut the problem into three smaller pieces each time, which creates a recursion tree that grows with the log of the size of the problem. For every recursion, there's the task of summing the parts. This process is much similar to the mergesort we did in class, where you divide and then combine. The only difference here is that we divide by three instead of two, however the overall complexity doesn't change; it still remains $\Theta$ (n log n). This tells us that as the size of the problem increases, the time to solve it increases by a factor of the log of the problem size times the problem size itself. Thus creating a general pattern for divide and conquer algorithms
