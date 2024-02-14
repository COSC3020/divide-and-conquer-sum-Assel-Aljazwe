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
In my code, each recursive call divides the array into three parts. <br />
There are three recursive calls on subarrays, each of size n/3. <br />
Combining the results from these recursive calls involves a constant amount of work, c. <br />

Therefore we can define: $T(n)$ = $3T(n/3)$ + $c$ <br />
Solving it: $T(n)$ = $3T(n/3)$ + $c$ <br />
$T(n)$ = 3(3T(n/3<sup>2</sup>) + c) + $c$ <br />
      $T(n)$ = 3<sup>2</sup>T(n/3<sup>2</sup>) + $3c + c$ <br />
$T(n)$ = 3<sup>3</sup>T(n/3<sup>3</sup>) + 3<sup>2</sup>c + 3c + c <br />
...<br />
...<br />
$T(n)$ = 3<sup>i</sup>T(n/3<sup>i</sup>) + (3<sup>i-1</sup> + 3<sup>i-2</sup> + ... + 3 + 1)c <br />
The geometric series becomes:
S = (3<sup>i</sup>-1) / (3-1) = 3<sup>i</sup>-1 / 2 <br />
$T(n)$ = 3<sup>i</sup>T(n/3<sup>i</sup>) + (3<sup>i</sup>-1 / 2)c <br />
T(1) is a constant operation, so let T(1) = d, and the recursion stops when n/3<sup>i</sup> = 1, we get n = 3<sup>i</sup>, solving for i: i = log<sub>3</sub>(n)<br />
$n/3$<sup>$i$</sup> = $1$<br />
$n = 3$<sup>i</sup><br />
$i = log$<sub>$3$</sub>$n$<br />
Substituting everything back into the recurrence gives us:<br />
$T(n)$ = $nT(1)$ + (n-1/2)c <br />
$T(n)$ = $nd$ + (n-1/2)c <br />
Since the term (n-1/2)c is less significant than n*d for large values of n, the dominant term becomes (nd). Since d is a constant, we ignore it thus simplifying the total work to :<br />
$T(n)$ = $\Theta$ (n)<br />

****Reasoning for Big Theta Complexity****:<br />
The Big Theta complexity of my implemented algorithm is determined by the constant work done after each recursion and by the depth of the recursive calls. The depth of the recursion for this problem is log<sub>3</sub>(n), with the parts being split up into three parts in each step of recursion. However, the work to combine the recursive results is constant, not depending on n, and so the total work done over levels of recursion is proportional to the number of recursive calls, which is n. Therefore, the Big Theta complexity of the algorithm is $\Theta$ (n), indicating the time complexity grows linearly with the size of the input.


