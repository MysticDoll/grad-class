## 符号の例

ここではいくつかの単純な符号の例について考える。

これらは簡単に理解できるが、伝送速度または誤り確率の点で有効ではない。

より効率的な例については後の章で考える。

### 例 6.3(反復符号)

体$F$上の反復符号$\mathcal{R}\_n$は$u \in F$に対して$ \boldsymbol{u} = uu\dots u \in \mathcal{V} = F^n$なる符号語から構成される。

よって、$M = \mid F \mid = q$である。

もし$F$が体ならば$\mathcal{R}\_n$は$11\dots 1$なる符号語(あるいはベクトル)の張る次元$1$の線形符号になる。

図6.1は$\mathcal{V} = F^3$の部分空間として$\mathcal{R}\_3$なる二元符号を示している。黒い点が$\mathcal{R}\_3$の符号語である。

5章では$q = 2$で$n$が偶数の場合、$\boldsymbol{R}\_n$は$(n -1) /2$個の誤りを訂正したのを見た。

このことから、$\boldsymbol{u} \in \mathcal{R}\_n$が伝送され、それらの$n$個のシンボルのうち、多くとも$(n-1)/2$個が誤って伝送されたとき、
最近傍復号は常に正しくなる。

似たような議論によって、どんな$q$と$n$に対しても、

$\lfloor x \rfloor = \max {\lbrace M \in \boldsymbol{Z} \mid m \leq x \rbrace}$

として、最近傍復号を使えば$\mathcal{R}\_n$は$\lfloor (n - 1) / 2 \rfloor$個の誤りを訂正することが言える。

これは素晴らしいが、運の悪いことに式(6.2)によって$n \rightarrow \infty$のとき伝送速度$R = 1 / n = 0$となり、良くないことが言える。

### 例6.4(パリティ検査符号)

体$F = F\_q$上のパリティ検査符号$\mathcal{P}\_n$は、$\boldsymbol{u} = u\_1 u\_2 \dots u\_n \in \mathcal{V} ; \sum\_{i} u\_i = 0$なる全てのベクトルから構成される。
$u\_1, \dots , u\_{n-1}$を情報桁、$u\_n$を$u\_n = - u\_1 - \cdots - u\_{n-1}$として定義される検査桁としてみなすことができる。

例えば$n=3$かつ$q=2$のとき、図6.2に示されるように$\mathcal{P} = \lbrace 000, 011, 101,110 \rbrace$となる。

一次方程式によって定義されるので、$\mathcal{P}\_n$は線形符号である。

これは次元$k = n - 1$で、$\mathcal{V}$の標準基底ベクトル$\boldsymbol{e}\_i = 000\dots 010 \dots 0$の下で、
$\boldsymbol{u}\_1 = \boldsymbol{e}\_1 - \boldsymbol{e}\_n , \dots , \boldsymbol{u}\_{n-1} = \boldsymbol{e}\_{n-1} - \boldsymbol{e}\_n$
なる基底を持つ。
(これを理解するためには、それぞれのベクトル$\boldsymbol{u} = u\_1 \dots u\_n \in \mathcal{P}\_n$が
$u\_1 \boldsymbol{u}\_1 + \cdots + u\_{n-1} \boldsymbol{u}\_{n-1}$なる唯一の$\boldsymbol{u}\_i$の線型結合で書けることに注意すると良い。)

このようにして、$M = q^{n-1}$で、$n \rightarrow \infty$のとき、$R = (n-1)/n$は$R \rightarrow 1$となり、伝送速度が良いことがわかる。

不幸なことに、この符号は誤り訂正の目的ではほとんど使えない。 これは1個の誤りを検出するが、それを訂正できないからである。

$\boldsymbol{u} = u\_1 \dots u\_n \in \mathcal{P}\_n$が伝送され、$\boldsymbol{v} = v\_1 \dots v\_n \in \mathcal{V}$が受信された場合を考えよう。

受信者は$\sum\_i v\_i$を$F$上で計算する。一つの誤りがあれば、$\boldsymbol{v}$の1桁$v\_i$のみが対応する$\boldsymbol{u}$の$u\_i$の桁と異なり、
$\sum\_i u\_i = 0$から$\sum\_i v\_i \neq 0$である。

このとき受信者は$\boldsymbol{v}$が符号語でないことと1つの誤りがあることを知っている。
しかし、どの1桁を変更することによっても符号語を得ることができるので、どの桁が間違っているかを判断する方法はない。

更に悪いことに、$\boldsymbol{v}$の2つ及びそれ以上の相殺される誤りは検知できない。
