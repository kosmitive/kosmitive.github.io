---
layout: post
title: Variational inference, briefly
description: Approximating a Bayesian posterior by solving an optimization problem.
math: true
---

Bayesian inference asks what we can learn about hidden variables $z$ from observations $x$. The posterior is

$$
p(z \mid x) = \frac{p(x,z)}{p(x)}.
$$

The difficulty is the evidence, $p(x)=\int p(x,z)\,dz$, which can be expensive to compute.

Variational inference picks a tractable family $q_\phi(z)$ and adjusts its parameters to approximate the posterior. A common objective minimizes $\mathrm{KL}(q_\phi(z)\,\|\,p(z\mid x))$.

### A computable objective

Instead of evaluating the posterior directly, we maximize the evidence lower bound (ELBO):

$$
\mathcal{L}(\phi)
= \mathbb{E}_{q_\phi}[\log p(x,z)]
- \mathbb{E}_{q_\phi}[\log q_\phi(z)].
$$

The identity

$$
\log p(x)=\mathcal{L}(\phi)
+\mathrm{KL}\!\left(q_\phi(z)\,\|\,p(z\mid x)\right)
$$

shows why this works: the evidence is fixed, so increasing the ELBO decreases the divergence.

### The tradeoff

A mean-field approximation uses $q_\phi(z)=\prod_j q_{\phi_j}(z_j)$. This simplifies optimization, but cannot represent dependencies between hidden variables and can underestimate uncertainty.

The practical recipe is simple: choose a family, optimize the ELBO, then check whether the approximation is adequate for the question you care about.

Further reading: Blei, Kucukelbir, and McAuliffe, [Variational Inference: A Review for Statisticians](https://arxiv.org/abs/1601.00670).
