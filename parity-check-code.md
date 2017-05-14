## ${}^\forall q, n$に対して$F = F\_q$上のパリティ検査符号$\mathcal{P}\_n$の誤り訂正能力

最近傍復号を利用した場合に${}^\forall q,n$に対して、$F = F\_q$上のパリティ検査符号$\mathcal{P}\_n$で$w = \lfloor \frac{n-1}{2} \rfloor$個までの誤りが訂正できることを示す。

## Proof

送信語$\mathcal{P}\_n \ni {}^\forall \boldsymbol{u} = (u \dots u) \ (u \in F)$に対して 受信語を$\boldsymbol{v}$と置く、このとき、$w \leq \lfloor \frac{n-1}{2} \rfloor$個のシンボルが誤っているとする。

正しく転送されているシンボルの個数は$r = n - w$で、$d\_H (\boldsymbol u , \boldsymbol v) = w = n - r$である。

$\mathcal{P}\_n \ni {}^\forall \boldsymbol{u}^\prime = (u^\prime \dots u^\prime) \neq \boldsymbol{u}$について考える。このとき$r$個の符号語が正しく転送されているため、$d\_H (\boldsymbol{v}, \boldsymbol{u}^\prime) \geq r$

$w = n - r \leq \lfloor \frac{n - 1}{2} \rfloor \Leftrightarrow 2(n - r) \leq n - 1 \Leftrightarrow n + 1 \leq 2r \Leftrightarrow \frac{n + 1}{2} \leq r$

よって$d\_H(\boldsymbol{u} , \boldsymbol{v}) \leq w \leq \lfloor \frac{n - 1}{2} \rfloor \leq \frac{n + 1}{2} \leq r \leq d\_H (\boldsymbol{u}^\prime , \boldsymbol{v})$

よって、他のどんな符号語よりも送信語のほうがハミング距離の意味で受信語に近いため、最近傍復号によって受信語に訂正されることがわかる。
