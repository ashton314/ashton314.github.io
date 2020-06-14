---
title: Programming Languages and Typography
---

An analogy occurred to me this evening as I was thinking about programming language design:

> Choosing good keywords and function names is like picking a good font; the ideas conveyed may be the same, but a change can drastically impact legibility and enjoyment of use.

PHP does a spectacular job of providing a *bad* example. It's like the Comic Sans of programming languages. Now there are [many reasons why PHP is not a good language](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)—I'd like to investigate this particular aspect of its design here briefly.

There are ~55 [functions in PHP that start with `array_`](https://www.php.net/manual/en/ref.array.php). Why? Why would you need to call the `map` operator `array_map`? Or `array_filter`, etc. Most other languages just call it `map` and leave it at that.

You might argue that that is a superficial difference: you are still doing the same thing so the expressive power of PHP is the same as whatever other languages you are comparing it to. I disagree. That extra clutter of the `array_` prefix *should not* be there and it's purely clutter.

A bad font changes the tone and the perception of a body of text. Likewise, shoddy selection of keywords and names in a language changes it's tone and feel.

Other examples:

 - Java
 - PHP's `function` keyword and other similar atrocities
 - Common Lisp (the length of its function names are a shortcoming)

I'll continue fleshing this iut more, but these are my thoughts at the present