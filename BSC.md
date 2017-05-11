## 二元対称通信路(Binary Symmetric Channel)

二元対称通信路$\Gamma$は入力と出力の情報源が$\mathcal{A} = \mathcal{B} = \boldsymbol{Z}\_2 = \lbrace 0, 1 \rbrace$であり、ある確率$P$で入出力のアルファベットが正しく送信される通信路である。

以下、$2$値確率変数の片方の確率を $0 \leq p \leq 1$ に対し、 $H(p) = -p \log p - \bar{p} \log \bar{p}$ のように記すことにする。

入力文字と出力文字に対するエントロピーは、入力と出力での$0$の生起確率の確率をそれぞれ$p, q$とすると、

それぞれ$H(\mathcal{A}) = H(p)$, $H(\mathcal{B}) = H(q)$ 

$H(\mathcal{B} \mid \mathcal{A}) \\\\
 = \sum\_{x \in \mathcal{B}} P\_\mathcal{A} (x) H(\mathcal{B} \mid \mathcal{A} = x) \\\\
 = p H(\mathcal{B} \mid \mathcal{A} = 0) + \bar{p} H(\mathcal{B} \mid \mathcal{A} = 1) \\\\
 = p (- \sum\_{x \in \mathcal{B}} \frac{P\_{\mathcal{B},\mathcal{A}}(x, 0)}{P\_\mathcal{A} (0)} \log \frac{P\_{\mathcal{B},\mathcal{A}}(x, 0)}{P\_\mathcal{A} (0)}) + \bar{p} (- \sum\_{x \in \mathcal{B}} \frac{P\_{\mathcal{B},\mathcal{A}}(x, 1)}{P\_\mathcal{A} (1)} \log \frac{P\_{\mathcal{B},\mathcal{A}}(x, 1)}{P\_\mathcal{A} (1)}) \\\\
 = p (- \frac{pP}{p} \log \frac{pP}{p} - \frac{p\bar{P}}{p} \log \frac{p\bar{P}}{p}) + \bar{p} (- \frac{\bar{p}P}{\bar{p}} \log \frac{\bar{p}P}{\bar{p}} - \frac{\bar p\bar{P}}{\bar{p}} \log \frac{\bar{p}\bar{P}}{\bar{p}}) \\\\
 = - (p P \log P + p \bar{P} \log \bar{P} + \bar{p} P \log P + \bar{p} \bar{P} \log \bar{P}) \\\\
 = - p (P \log P + \bar{P} \log \bar{P}) - \bar{p} (P \log P + \bar{P} \log \bar{P}) \\\\
 = - P \log P - \bar{P} \log \bar{P} = H(P)$

相互情報量 $I(\mathcal{A} ; \mathcal{B}) = I(\mathcal{B}; \mathcal{A}) = H(\mathcal{B}) - H(\mathcal{B} \mid \mathcal{A}) = H(q) - H(P)$ より

通信路容量$C$は相互情報量を最大化する値として定義され、$C = 1 - H(P)$ ($P$を固定すると、$H(q)$が最大になるとき相互情報量は最大になる。)

## シャノンの基本定理

$\Gamma$ を確率$P$で正しく伝送される二元対称通信路する。このとき$\Gamma$は通信路容量$C = 1 - H(P)$を持つ。

$\delta , \epsilon > 0$を置くと、十分大きな${}^\forall n$に対して符号$C \subseteq \boldsymbol{Z}\_2^n$が存在し、その伝送速度$R$は$C - \epsilon \leq R < C$を満足し、最近傍復号の誤り確率$Pr\_E$は$\text{Pr}\_E  < \delta$となる。

BSCではシャノンの基本定理を満たす線形符号が存在する。教科書5.4では伝送速度$R$に対して$2^{nR}$個の符号語を持つ符号をランダムにとって証明の概略を説明している。

ここで、$R = \frac{k}{n}$として、$q^k = 2^k$個の符号語を持つ符号について考えても一般性を失わないため、線形符号に対してもシャノンの基本定理の類似系を満たすと言える。
