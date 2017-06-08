## 6.3 最小距離

最近傍復号法を用いるとき、送信された符号語$\boldsymbol{u}$は受信語$\boldsymbol{v} \in \mathcal{V}$から最も近い符号語$\Delta (\boldsymbol{v})$になるため、
他の符号語から互いに離れた符号語$\boldsymbol{u}$を用いることで誤り確率$\text{Pr}\_E$を低く保つことができる。

よって、$C$の最小距離を任意の異なる2つの符号語のハミング距離の最小値

$d = d(C) = \min \lbrace d(\boldsymbol{u}, \boldsymbol{u}^\prime) \mid \boldsymbol{u}, \boldsymbol{u}^\prime \in C, \ \boldsymbol{u} \neq \boldsymbol{u}^\prime \rbrace \ \ \text{(6.3)}$

として定める。

ある符号が符号長$n$、符号語数$M$で最小距離$d$のとき、これを$(n, M, d)$符号と呼ぶことがある。
もし符号が線形で次元が$k$ならば、これは$\lbrack n, k, d \rbrack$符号と呼ばれる。

我々の目的は$\text{Pr}\_E$を小さくするために、符号語$C$を$d$が大きくなるように選ぶことである。

もし、$C$が$M$個の符号語を持つ場合、$\text{(6.3)}$を用いて$d$を求めることは、$\begin{pmatrix} M \\\\ 2 \end{pmatrix} = M(M - 1)/2$通りの距離の計算と比較を要求する。
これはとてもうんざりする。

しかしながら、この作業は$C$が線形の場合次に示すようにとても単純になる。

まず、任意のベクトル$\boldsymbol{v} = v\_1 v\_2 \dots v\_n \in \mathcal{V}$に対する重みを、$\boldsymbol{0} = 00 \dots 0$として以下のように定義する。

$\text{wt} (\boldsymbol{v}) = d(\boldsymbol{v}, \boldsymbol{0}) \ \ \text{(6.4)}$

言い換えると、$\text{wt} (\boldsymbol{v})$は単純に$v\_i \neq 0$となるような添字$i$の数である。
任意の$\boldsymbol{u}, \boldsymbol{u}^\prime \in \mathcal{V}$に対して、

$d(\boldsymbol{u}, \boldsymbol{u}^\prime) = \text{wt}(\boldsymbol{u} - \boldsymbol{u}^\prime)$ 

となることは容易にわかる。

### 系6.8

$C$が線形符号のとき、その最小距離$d$は

$d = min \lbrace \text{wt} (\boldsymbol{v}) \mid \boldsymbol{v} \in C , \ \boldsymbol{v} \neq \boldsymbol{0} \rbrace$

で与えられる。

#### 証明

$\boldsymbol{v} = \boldsymbol{u} - \boldsymbol{u}^\prime$の下、$d(\boldsymbol{u}, \boldsymbol{u}^\prime) = \text{wt} (\boldsymbol{v})$とする。
今、$C$は$\mathcal{V}$の線形部分空間なので、$\boldsymbol{u}$と$\boldsymbol{u}^\prime$が全ての$C$内の異なる組み合わせに及ぶと、
それらの差$\boldsymbol{v} = \boldsymbol{u} - \boldsymbol{u}^\prime$は$C$の全ての非零な要素に及ぶ。

これは$d(C)$なるこのような$\boldsymbol{u}, \boldsymbol{u}^\prime$の組の間の最小距離は、これらの重み$\text{wt} (\boldsymbol{v})$に等しくなる。

この結果の利点は、非線型な符号で$M(M-1)/2$回の計算と比較をする場合に比べて、$M-1$回の計算と比較で済むことである。
$\S \text{7.3}$では、より良い線形符号の最小距離計算の方法があることを確認する。

### 練習 6.3

二元ハミング符号$\mathcal{H}\_7$(例6.5)の符号語を全て列挙せよ。そして系6.8を用いて最小距離が3であることを確認せよ。

### 練習 6.4

$C$が最小距離$d$の二元線形符号のとき、拡大符号$\bar{C}$は$d$が偶数または奇数に応じて、それぞれ$d$または$d + 1$なる最小距離を持つことを示せ。
拡大二元ハミング符号$\bar{\mathcal{H}\_7}$の符号語を列挙し、その最小距離を求めよ。

今どのように符号の最小距離がその符号の誤り訂正能力に影響するかを考える。
符号$C$は$t$個の誤りを訂正する、または$t$重誤り訂正とは、符号語$\boldsymbol{u} \in C$が伝送され、多くとも$t$個のシンボルが誤って受信された場合はいつでも結果として受信語$\boldsymbol{v}$は正しく$\boldsymbol{u}$として復号されることを言う。
これは$\boldsymbol{u} \in C$かつ$\boldsymbol{v} \in \mathcal{V}$で、$d(\boldsymbol{u}, \boldsymbol{v}) \leq t$を満たす場合いつでも、決定則$\Delta$が$\Delta (\boldsymbol{v}) = \boldsymbol{u}$を与えることと同値である。

