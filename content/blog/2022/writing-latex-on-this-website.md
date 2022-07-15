---
title: Writing LaTeX on this website
description: How equations are displayed on this website?
author:
  name: PhysicistSouravDas
  bio: Owner of this site
  image: https://www.gravatar.com/avatar/89ab578e60d83d52fe015a73741629fa?s=200&d=retro
# createdAt: 2022-02-03T15:58:28.498Z
# updatedAt: 2022-02-03T15:58:28.498Z
series: false
tags:
  - math
  - latex
---

In this article, I will describe about writing $\LaTeX{}$. Using this, you can write mathematical symbols and equations. It is a remarkable tool!

<!--more-->

## What is $\LaTeX{}$?

Suppose I want to write one of the most famous equation, the Einstein mass-energy equivalence equation. In text, someone would write it like this: E = mc2. But how to raise that 2 to the power? Let us use $\LaTeX{}$ now. $E = mc^{2}$. How's it? Amazing, isn't it?

Some more equations below:

$$
\begin{align*}
\nabla\cdot\textbf{E} &= \frac{\rho}{\epsilon_{0}} \\
\nabla\cdot\textbf{B} &= 0 \\
\nabla\times\textbf{E} &= -\frac{\partial{\textbf{B}}}{\partial{t}} \\
\nabla\times\textbf{B} &= \mu_{0}\textbf{j} + \frac{1}{c^{2}}\frac{\partial{\textbf{E}}}{\partial{t}}
\end{align*}
$$

The above equations are Maxwell's equations. The $\LaTeX{}$ code you have to right to generate above equations will look like this,

```latex
$$
\begin{align*}
\nabla\cdot\textbf{E} &= \frac{\rho}{\epsilon_{0}} \\
\nabla\cdot\textbf{B} &= 0 \\
\nabla\times\textbf{E} &= -\frac{\partial{\textbf{B}}}{\partial{t}} \\
\nabla\times\textbf{B} &= \mu_{0}\textbf{j} + \frac{1}{c^{2}}\frac{\partial{\textbf{E}}}{\partial{t}}
\end{align*}
$$
```

## Displaying $\LaTeX{}$ on websites

If any website does not have the software to compile $\LaTeX{}$, or the software fails to compile, then, instead of the formulae, you would see dollar signs $$$. It is because these dollar signs are used to write $\LaTeX{}$.

As you may already know, this website is created using the [Nuxt](https://nuxtjs.org/) framework, which is a JavaScript framework. To display $\LaTeX{}$ in this website, I use _MathJax_ via `remark-math@4.0.0` and `rehype-mathjax@3.1.0`. Note that version of these packages later than these won't work with Nuxt v2 (which I am currently using), because the later version of remark packages are ESM package, which cannot be `require()`'d from CommonJS. An alternative to _MathJax_ is _KaTeX_, created by developers at Khan Academy. _KaTeX_ is faster than _MathJax_, but _MathJax_ has complete support for $\LaTeX{}$, and used more widely on the internet.
