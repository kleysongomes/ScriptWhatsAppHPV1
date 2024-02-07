async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
HARRY POTTER E A PEDRA FILOSOFAL

DUMBLEDORE

Eu deveria saber que você estaria
aqui Professora McGonagall.

MCGONAGALL

Boa noite Professor Dumbledore. São
os rumores são verdadeiros Albus?

DUMBLEDORE

Receio que sim, professor. O bom e
o mal.

MCGONAGALL

E o menino?

DUMBLEDORE

Hagrid está trazendo ele.

MCGONAGALL

Você acha sensato confiar em Hagrid?
com algo tão importante quanto isso?


DUMBLEDORE

Ah, Prof. Eu confiaria em Hagrid com meu
vida

HAGRID

Professor. Dumbledore, senhor. Professor
McGonagall.

DUMBLEDORE

Sem problemas, confio no Hagrid?

HAGRID

Não senhor. O garotinho adormeceu enquanto
estávamos sobrevoando Bristol. Não tente
para acordá-lo. Ai está.

MCGONAGALL 

Alvo, você realmente acha que é seguro partir
ele com essas pessoas? Eu assisti
eles o dia todo. Há o pior tipo
de trouxas imagináveis. Eles realmente são-
-
DUMBLEDORE


A única família que ele tem.

MCGONAGALL

Esse garoto será famoso. Não haverá
seja uma criança em nosso mundo que não
sei o nome dele.

DUMBLEDORE

Exatamente. Ele está muito melhor crescendo
longe de tudo isso. Até que ele esteja
preparar. Pronto, pronto, Hagrid. Não é
realmente adeus, afinal. Boa sorte,
Harry Potter.






- - - -

TIA PETÚNIA

Acima. Levantar! Agora!

DUDLEY

Acorda primo! Nós vamos ao zoológico!


TIA PETÚNIA

Aí vem ele o aniversariante!

TIO VARDON

Feliz Aniversário, filho.

TIA PETÚNIA

Por que você simplesmente não prepara o café da manhã
e tente não queimar nada.

ATORMENTAR

Sim, tia Petúnia.

TIA PETÚNIA

Eu quero que tudo seja perfeito para
dia especial do meu Dudley!

TIO VARDON

Se apresse! Traga meu café, garoto!

ATORMENTAR

sim, tio Válter.

TIA PETÚNIA

Eles não são maravilhosos, querido?

DUDLEY

Quantos são?

TIO VARDON

36, eu mesmo os contei.

DUDLEY

36?! MAS ANO PASSADO TINHA 37!!!
TIO VARDON 


Sim, mas alguns deles são um pouco maiores
do que no ano passado!

DUDLEY

Eu não me importo com o tamanho deles!

TIA PETÚNIA

Agora, agora, agora, é isso que vamos
pendência. É que quando saímos estamos
vou comprar dois novos presentes para você. Como vai
aquela abóbora?




TIA PETÚNIA

Deve ser um lindo dia no zoológico.
Eu estou realmente esperando por isso.


TIO VARDON

Estou te avisando agora, garoto. Qualquer negócio engraçado,
nada e você não terá nenhuma refeição
por uma semana. Entrem.




DUDLEY

Faça-o se mover.

TIO VARDON

Mover.


MOVIMENTO

DUDLEY
!                                      ATORMENTAR

Ele está dormindo.

DUDLEY

Ele é chato.

ATORMENTAR

Sinto muito por ele, ele não entende
como é ficar deitado lá no dia seguinte
dia assistindo as pessoas pressionarem seus feios
enfrenta você. Você pode me ouvir? Isso é
só que nunca falei com uma cobra antes.
Você... Você conversa com as pessoas frequentemente?
Você é da Birmânia, não é? Foi isso
legal aí? Você sentiu falta da sua família?
Eu vejo. Esse sou eu também. eu nunca soube
meus pais também.

DUDLEY

Mamãe, papai, venha aqui você não vai acreditar
o que esta cobra está fazendo! Uau! Uau!
Ah!

COBRA

Obrigado.

ATORMENTAR

A qualquer momento.

OUTRO

Cobra! Ahh!

DUDLEY

Mãe! Mamãe! Me ajude!

PERCY

Meu querido garoto! Como você entrou aí!
Quem fez isto? Como você entrou aí?
Existe uma cobra?






- - - -

TIA PETÚNIA

Está tudo bem, querido. Nós conseguiremos
você fora dessas roupas horríveis.


TIO VARDON


O que aconteceu?

ATORMENTAR

Eu juro, não sei! Um minuto o
o vidro estava lá, então desapareceu,
foi como mágica!

TIO VARDON


Não existe magia.




TIO VARDON


Ah, Marge está doente. Comi um búzio engraçado.


DUDLEY

Pai! Olhar! Harry recebeu uma carta!

ATORMENTAR

Ei, devolva! É meu!

TIO VARDON


Seu? Quem estaria escrevendo para você?




TIO VARDON


Não há mais correspondência nesta caixa de correio.





TIA PETÚNIA

Tenha um ótimo dia no escritório, querido.


TIO VARDON


Xô! Prossiga!




TIO VARDON


Belo dia domingo. Na minha opinião melhor
dia da semana. E por que isso é Duda?


ATORMENTAR

Porque não há postagem aos domingos.


TIO VARDON


Certo, você é Harry. Não há postagem no domingo.
Ha! Nada de cartas malditas hoje! Não senhor!
Nem uma única maldita carta! Nenhum!
Não, senhor, nenhum maldito e miserável-
-DUDLEY
_


Faça isso parar, por favor!

TIO VARDON


Pare com isso!

DUDLEY

Mamãe, o que está acontecendo?

TIO VARDON


Me dê isso! Dê-me essa carta!


ATORMENTAR

Sair! São minhas cartas! Solte
de mim!

TIO VARDON


É isso! Estamos indo para longe, para longe!
Onde eles não podem nos encontrar!

DUDLEY

Papai enlouqueceu, não foi?



- - - -

ATORMENTAR

Faça um desejo, Harry.

TIO VARDON


Quem está aí?

HAGRID

Desculpa aí.

TIO VARDON


Exijo que você saia imediatamente. Você
estão arrombando e entrando.

HAGRID

Seque Dursley, sua ótima ameixa. Bem,
Eu não te vejo desde que você era um bebê
Atormentar. Mas você está um pouco mais adiantado então
Eu teria esperado; particularmente
em torno do meio.

DUDLEY

Eu não sou... eu não sou Harry.

ATORMENTAR

Eu sou.

HAGRID

Bem, é claro que você está! Pegou algo
para você. Com medo de ter sentado
isso em algum momento, mas imagino que isso acontecerá
gosto bem do mesmo jeito. Assei eu mesmo,
palavras e tudo.

ATORMENTAR

Obrigado!

HAGRID

Não é todo dia que seu jovem vira
11 agora é?

ATORMENTAR

Com licença, mas quem é você?

HAGRID

Rubeus Hagrid, guardião das chaves e dos terrenos
em Hogwarts. Claro que você sabe tudo
sobre Hogwarts

ATORMENTAR

Desculpe, não.

HAGRID

Não? Caramba, Harry, você nunca se perguntou
você nunca se perguntou como sua mãe
e papai aprendeu tudo?

ATORMENTAR

Aprendeu o quê?

HAGRID

Você é um bruxo Harry.

ATORMENTAR

Eu sou o quê?

HAGRID

Um feiticeiro. E um bom golpe, eu
aposte depois de treinar um pouco.


ATORMENTAR

Não, você cometeu um erro. Digo, eu
não posso ser um bruxo... quero dizer, sou Harry,
Apenas Harry.

HAGRID

Bem, "Just Harry" você já fez
aconteceu alguma coisa? Qualquer coisa que você não pudesse
explique, quando você estava com raiva ou com medo?
Um Hum.

ATORMENTAR

Prezado Sr. Potter, temos o prazer de informar
você que foi aceito no
Escola de Magia e Bruxaria de Hogwarts.


TIO VARDON


Ele não irá! Nós juramos quando
nós o acolhemos para que pudéssemos parar
para todo esse lixo!

ATORMENTAR

Você sabia? Nós sabíamos o tempo todo e você
nunca me contou?

TIA PETÚNIA

Claro que sabíamos. Como você não pôde
ser? Meu ser perfeito quem ela era. Oh
Lembro-me do dia em que ela recebeu a carta.
Meus pais estavam muito orgulhosos. Nós temos uma
bruxa na família. Não é maravilhoso?
Eu fui o único que a viu pelo que
ela era... uma aberração. E então ela conheceu
aquele Potter, e então ela teve você e
Eu sabia que você seria igual a
estranho e igualmente anormal. E então,
por favor, ela se explodiu
levantamos e pousamos com você.

ATORMENTAR

Explodir?! Você me disse que meus pais morreram
em um acidente de carro!

HAGRID

Um acidente de carro? Um acidente de carro matou Lily
e Tiago Potter?

TIA PETÚNIA

Tínhamos que dizer alguma coisa!

HAGRID

É um ultraje. É um escândalo.

TIO VARDON


Ele não irá.

HAGRID

Ah, e suponho que um grande trouxa como
você mesmo vai impedi-lo.

ATORMENTAR

Trouxa?

HAGRID

Pessoas não-mágicas. Esse garoto teve seu
nome desde que nasceu. Ele está indo
para a melhor escola de bruxaria e
magia no mundo. E ele estará
sob o melhor diretor que Hogwarts
já viu, Alvo Dumbledore...


TIO VARDON


Eu não vou pagar para ter um pouco de maconha
velho idiota lhe ensine truques de mágica!

HAGRID

Nunca insulte Albus Dumbledore na frente
de mim... eu apreciaria se você não o fizesse
contar a alguém em Hogwarts sobre isso.
Estritamente falando, eu não deveria
faça mágica.

HARRY,

OK,

HAGRID

Estamos um pouco atrasados. Melhor ser
desligado. A menos que você prefira ficar, é claro.




- - - -

ATORMENTAR

Todos os alunos devem estar equipados com um
um caldeirão de estanho de tamanho padrão dois,
e podem trazer, se assim o desejarem,
uma coruja, um gato ou um sapo. Podemos encontrar
tudo isso em Londres?

HAGRID

Se você sabe para onde ir.

TOM (BARTENDOR)

Ah, Hagrid, o de sempre, presumo.

HAGRID

Não, obrigado Tom, estou em Hogwarts oficial
negócios. Apenas ajudando o jovem Harry a comprar
seu negócio escolar.

TOM

Abençoe minha alma, é Harry Potter.

OUTRO

Bem-vindo de volta, Sr. Potter, bem-vindo de volta.


DÓRIS

Doris Crockford, Sr. Não posso
acredito que finalmente estou conhecendo você.

QUIRRELL

Harry Pp-potter. C-não posso te dizer como
p-prazer em conhecê-lo.

HAGRID

Olá, professor, não te vi aí.
Harry Professor Quirrell será seu
professor de defesa contra as artes das trevas.


ATORMENTAR

Ah, prazer em conhecê-lo,

QUIRRELL

Um assunto terrivelmente fascinante. N-não
que você precisa disso, né, P-potter?

HAGRID

Sim, bem, devemos ir agora. Muito para
comprar.

ATORMENTAR

Adeus.

HAGRID

Viu, Harry? Você é famoso.

ATORMENTAR

Mas por que sou famoso, Hagrid? Todos aqueles
pessoas lá atrás, como é que elas sabem
quem eu sou?

HAGRID

Não tenho certeza se sou a pessoa certa
para te dizer isso, Harry. Bem vindo Harry,
para o Beco Diagonal. É aí que você chega
suas penas e tinta. Ali, todos
seus pedaços para fazer magia.


OUTRO

É uma vassoura de corrida de classe mundial.

OUTRO

Uau! Olha só a nova Nimbus 2000!
É o modelo mais rápido até agora!

ATORMENTAR

Mas Hagrid, como vou pagar por tudo isso?
Eu não tenho dinheiro.

HAGRID

Bem, aí está o seu dinheiro, Harry! Gringotes,
o banco mágico! Não há lugar mais seguro,
nenhum! 'Exceto talvez Hogwarts.

ATORMENTAR

Hagrid, o que exatamente são essas coisas?


HAGRID

Eles são duendes, Harry. Inteligentes como eles
vêm os goblins, mas não os mais amigáveis
de feras. Melhor ficar por perto. Sr.
Potter deseja fazer um saque


GOBLIN

E o Sr. Harry Potter tem a chave?


HAGRID

Espere um minuto. Tenho aqui em algum lugar.
Ha! Aí está o diabinho. Óh, e
há algo mais também. Professor
Dumbledore me deu isso. É sobre
Você-Sabe-O que no Vault você sabe qual.


GOBLIN

Muito bem.

GRIPHOOK

Vault 687. Lâmpada, por favor. Chave, por favor


HAGRID

Não pensei que sua mãe e seu pai iriam
te deixou sem nada agora, não é?


GRIPHOOK

Cofre 713.

ATORMENTAR

O que tem aí, Hagrid?

HAGRID

Não posso te contar, Harry. Negócios de Hogwarts.
Muito secreto.

GRIPHOOK

Afaste-se.

HAGRID

Melhor não mencionar isso para ninguém, Harry.


ATORMENTAR

Eu ainda preciso... de uma varinha.

HAGRID

Uma varinha? Bem, você quer o de Olivaras.
Não há lugar melhor. Por que não
você corre e espera. Eu tenho mais um
coisa para fazer. Não demorará muito.

ATORMENTAR

Olá? Olá?

ERA

Eu me perguntei quando veria você, Sr.
Oleiro. Parece que foi ontem que
sua mãe e seu pai estavam aqui comprando
suas primeiras varinhas. Aqui estamos. Bem
dê um aceno. Aparentemente não. Talvez
esse. NÃO, definitivamente não. Não importa.
Eu me pergunto... Curioso... muito curioso


ATORMENTAR

Desculpe, mas o que é curioso

ERA

Lembro-me de cada varinha que vendi
Sr. Potter, cada um. Acontece
que a fênix cuja pena da cauda
reside em sua varinha, deu outra pena.
Apenas um outro. É curioso que você
deveria ser destinado a esta varinha quando
seu irmão lhe deu aquela cicatriz.

ATORMENTAR

E quem era o dono daquela varinha?

ERA

Não falamos o nome dele. A varinha escolhe
o bruxo Sr. Potter. Nem sempre é
claro por quê. Mas acho que está claro que
podemos esperar grandes coisas de você.
Afinal, Aquele-Que-Não-Deve-Ser-Nomeado
fez grandes coisas. Terrível, sim, mas
ótimo.

HAGRID

Atormentar! Atormentar! Feliz aniversário!

ATORMENTAR

Uau!

HAGRID

Você está bem Harry? Você parece muito quieto.


ATORMENTAR

Ele matou meus pais, não foi? O
aquele que me deu isso. Você conhece Hagrid.
Eu sei que você faz.

HAGRID

Primeiro e entenda isso Harry porque
Isso é muito importante. Nem todos os magos
são bons. Alguns deles ficam ruins. Um pouco
anos atrás, um deles foi tão ruim quanto
você pode ir. Seu nome era V--. O nome dele
era V--.

ATORMENTAR

Bem, talvez se você anotasse?

HAGRID

Não, não consigo soletrar. Tudo bem, Voldemort.


ATORMENTAR

Voldemort?

HAGRID

Shh. Foram tempos sombrios, Harry, tempos sombrios.
Voldemort começou a reunir alguns seguidores.
Trouxe-os para o Lado Negro.
Qualquer um que o enfrentasse acabou
morto. Seus pais lutaram contra ele.
Ninguém viveu quando ele decidiu matar
eles. Ninguém, nem um. Exceto você.


ATORMENTAR

Meu? Voldemort tentou me matar?

HAGRID

Sim. Isso não é um corte comum no seu
testa Harry. Uma marca disso apenas
vem de ser tocado por uma maldição,
uma maldição maligna nisso.

ATORMENTAR

O que aconteceu com V...... Com Você-Sabe-Quem?


HAGRID

Bem, alguns dizem que ele morreu. Bacalhau em
minha opinião. Não, acho que ele está fora
ainda estou cansado demais para continuar. Mas
uma coisa é absolutamente certa. Algo
sobre você o deixou perplexo naquela noite. Isso é
por que você é famoso. É por isso que todo mundo
sabe seu nome. Você é o garoto que
vivido.

HAGRID

Bem, alguns dizem que ele morreu. Bacalhau em
minha opinião. Não, acho que ele está fora
ainda estou cansado demais para continuar. Mas
uma coisa é absolutamente certa. Algo
sobre você o deixou perplexo naquela noite. Isso é
por que você é famoso. É por isso que todo mundo
sabe seu nome. Você é o garoto que
vivido.



- - - -

HAGRID

O que você está olhando? Caramba é isso
tempo? Desculpe Harry, mas eu vou ter
para te deixar. Dumbledore estaria querendo
seu... Bem, ele estaria querendo ver
meu. Agora, seu trem sai em 10 minutos.
Aqui está o seu ingresso. Atenha-se a isso Harry,
isso é muito importante. Fique com você
bilhete.

ATORMENTAR

Plataforma 9 ¾? Mas, Hagrid, deve haver
ser um erro. Aqui diz Plataforma 9 ¾.
Nao existe tal coisa. Existe?

OUTRO

Desculpe.

ATORMENTAR

Com licença! Com licença!

OUTRO

À sua esquerda.

ATORMENTAR

Com licença senhor. Você pode me dizer onde
Posso encontrar a Plataforma 9 ¾?

OUTRO

9¾? Você acha que está sendo engraçado, não é?


SRA. WEASLEY

É a mesma coisa todos os anos repleto de
Trouxas, é claro. Vamos!

ATORMENTAR

Trouxas?

SRA. WEASLEY

Plataforma 9 ¾ por aqui! Tudo bem Percy
você primeiro. Fred você é o próximo.

GEORGE WEASLEY

Ele não é Fred, eu sou!

Fred Weasley

Honestamente, mulher, você se chama de nossa
mãe!

SRA. WEASLEY

Sinto muito, Jorge.

Fred Weasley

Só brincando! Eu sou Fred.

ATORMENTAR

Com licença! Você poderia me dizer como...


SRA. WEASLEY

Como entrar na plataforma? Sim,
não se preocupe querido, é o primeiro do Ron
hora de ir para Hogwarts também. Agora, todos vocês
tem que fazer é andar direto na parede
entre as plataformas 9 e 10. Melhor fazer
corra se você estiver nervoso.

GINA

Boa sorte!



- -

RON WEASLEY

Com licença, você se importa? Em todos os lugares
o resto está cheio.

ATORMENTAR

De jeito nenhum.

RON WEASLEY

A propósito, meu nome é Ron! Ron Weasley.

ATORMENTAR

Eu sou Harry. Harry Potter.

RON WEASLEY

ENTÃO é verdade! Você realmente tem o...
o...

ATORMENTAR

O quê?

RON WEASLEY

A cicatriz?

ATORMENTAR

Oh!

RON WEASLEY

Malvado!

OUTRO

Alguma coisa fora do carrinho, queridos?

RON WEASLEY

Não, obrigado, estou pronto.

ATORMENTAR

Nós levaremos o lote!

RON WEASLEY

Uau!

ATORMENTAR

Feijões de todos os sabores de Bertie Bott?

RON WEASLEY

Eles significam todos os sabores! Tem chocolate,
hortelã-pimenta e também fígado de espinafre,
e tripa. George jurou que dançava
aromatizado uma vez.

ATORMENTAR

Estes não são sapos de verdade, são?

RON WEASLEY

É apenas um feitiço. Mas são as cartas
você quer. Cada matilha tem uma bruxa famosa
ou mago. Eu tenho cerca de 500 para mim.
Assista! Isso é uma péssima sorte. Eles têm
só consegui um bom salto para começar
com.

ATORMENTAR

Eu tenho Dumbledore!

RON WEASLEY

Eu tenho cerca de 6 dele.

ATORMENTAR

Ei, ele se foi!

RON WEASLEY

Bem, você não pode esperar que ele fique por aqui
o dia todo, você pode? Este é Scabbers de
o caminho. Patético, não é?

ATORMENTAR

Só um pouco.

RON WEASLEY

Fred me deu um feitiço para deixá-lo amarelo.
Quero ver?

ATORMENTAR

Sim!

RON WEASLEY

Aham... Luz do sol...

HERMIONE

alguém viu um sapo? Um menino chamado
Neville tem um.

RON WEASLEY

Não.

HERMIONE

Ah, você está fazendo mágica? Vamos ver então.


RON WEASLEY

Aham. Manteiga de margaridas do sol suave
Transforme este estúpido rato gordo em amarelo.

HERMIONE

Tem certeza de que é um feitiço de verdade? Bem,
não é muito bom, não é? Claro,
Eu só tentei alguns simples
mas todos eles funcionaram para mim. Por exemplo:
Oculus Reparo. Assim é melhor, não é?
Santo críquete! Você é Harry Potter! Eu sou
Hermione Granger. E você é...?


RON WEASLEY

Eu sou Rony Weasley.

HERMIONE

Prazer. É melhor vocês dois se trocarem
suas vestes. Espero que estejamos chegando
breve. Você tem sujeira no nariz perto do
caminho. Bem ali.

HAGRID

Certo então. Primeiros anos assim, por favor!
Primeiros anos, não seja tímido. Venha agora,
se apresse! Olá Harry!

ATORMENTAR

Olá Hagrid!

RON WEASLEY

Uau!

HAGRID

Certo então. Por aqui até os barcos.
Vamos agora, siga-me.

RON WEASLEY

Malvado!



- - - -

MCGONAGALL

Bem-vindo a Hogwarts. Agora, em alguns momentos
você passará por essas portas e
junte-se aos seus colegas de classe. Mas antes de você
tomem seus lugares, vocês devem estar ordenados
em suas casas. Eles são da Grifinória,
Lufa-Lufa, Corvinal e Sonserina.
Agora, enquanto você estiver aqui, sua casa
seja como sua família. Seus triunfos serão
você ganha pontos. Qualquer quebra de regra e
você perderá pontos. No fim de
do ano, as casas com mais pontos
recebe a taça da casa.

NEVILHA

Trevor! Desculpe.

MCGONAGALL

A Cerimônia de Seleção começará momentaneamente.


DRACO MALFOY

É verdade então, o que eles estão dizendo
no trem. Harry Potter chegou
para Hogwarts.

N e OUTROS

Harry Potter?

DRACO MALFOY

Estes são Crabbe e Goyle. E eu sou Malfoy.
Draco Malfoy. Acho que meu nome é engraçado
você? Não há necessidade de perguntar o seu. cabelo vermelho
e um manto de segunda mão? Você deve ser
um Weasley. Você logo descobrirá isso
algumas famílias bruxas são melhores do que
outros, Potter. Você não quer fazer
amigos com o tipo errado. eu posso ajudar
você aí.

ATORMENTAR

Acho que posso dizer o tipo errado para
eu mesmo agradeço.

MCGONAGALL

Estamos prontos para você. Me siga.

HERMIONE

Não é real o teto. É apenas
enfeitiçado para parecer a noite lá fora.
Eu li sobre isso em Hogwarts, Uma História.


MCGONAGALL

Você pode esperar aqui, por favor. Agora
antes de começarmos, Professor Dumbledore
gostaria de dizer algumas palavras.

DUMBLEDORE

Tenho alguns avisos de início de semestre que
deseja anunciar. Os primeiros anos por favor
observe que a Floresta Negra é estritamente
proibido a todos os alunos. Além disso, nosso
zelador, Sr. Filch, me pediu para
lembro que o corredor do terceiro andar
no lado direito está fora dos limites
para todos que não desejam morrer mais
morte dolorosa. Obrigado.

MCGONAGALL

Quando eu chamar seu nome você virá
adiante, colocarei o Chapéu Seletor
na sua cabeça, e você será classificado
em suas casas. Hermione Granger!


HERMIONE

Oh não. OK, relaxe.

RON WEASLEY

Mental, estou lhe dizendo.

SHARRY

Ah, certo então. Hum... Certo. OK,
Grifinória!

MCGONAGALL

Draco Malfoy!

SHARRY

Sonserina!

RON WEASLEY

Não há nenhuma bruxa ou bruxo que tenha ido
ruim quem não estava na Sonserina.

MCGONAGALL

Susan Ossos!

ATORMENTAR

Ai!

RON WEASLEY

Harry, o que é isso?

ATORMENTAR

Nada. Nada Estou bem

SHARRY

...onde devo colocar você? Vamos ver...
Eu sei! Lufa-Lufa!

MCGONAGALL

Ronald Weasley!

SHARRY

Ha! Outro Weasley! Eu sei exatamente o que
a ver com você... Grifinória!

MCGONAGALL

Harry potter

SHARRY

Hmmm... Difícil, muito difícil. Bastante
de coragem, eu vejo. Também não é uma mente ruim.
Há talento, ah, sim, e sede
para provar a si mesmo. Mas onde colocar
você...

ATORMENTAR

Nem Sonserina, nem Sonserina!

SHARRY

Não é Sonserina, hein? Tem certeza? Você
poderia ser ótimo, você sabe. Está tudo aqui
sua cabeça. E a Sonserina vai te ajudar
no caminho para a grandeza, não há
dúvida sobre isso. Não? (Harry sussurrando:
Por favor, por favor, qualquer coisa menos a Sonserina,
qualquer coisa, menos Sonserina.) Bem, se você estiver
claro, é melhor que seja... Grifinória!

MCGONAGALL

Sua atenção por favor.

DUMBLEDORE

Que comece a festa!

ATORMENTAR

Uau!

SFRED WEASLEY

Estou meio a meio. Meu pai é trouxa,
mamãe é uma bruxa. Foi um choque desagradável
para ele quando ele descobriu!

ATORMENTAR

Diga Percy, quem é aquele professor falando
para o professor Quirrell?

PERCY

Oh, Professor Snape, chefe da Sonserina
casa.

ATORMENTAR

O que ele ensina?

PERCY

Poções. Mas todo mundo sabe que é o
Artes das Trevas que ele gosta. Ele está atrás
O trabalho de Quirrell há anos.

RON WEASLEY

Ah!

SIR NEVILLE

Olá! Como vai você? Bem-vindo à Grifinória.


OUTRO

É o Barão Sangrento!

PERCY

Olá, senhor Nicolau. Tenha um ótimo verão?


SIR NEVILLE

Triste. Mais uma vez meu pedido de adesão
a Caçada Sem Cabeça foi negada.


RON WEASLEY

Eu conheço você. Você é Nick quase sem cabeça.


SIR NEVILLE

Prefiro Sir Nicholas, se não se importa.


HERMIONE

"Quase" sem cabeça? Como você pode estar "quase"
sem cabeça?

SIR NEVILLE

Assim.

RON WEASLEY

Ah!



- - - -

PERCY

Grifinórios, sigam-me, por favor. Manter
acima. Obrigado.

OUTRO

Corvinal, siga-me. Por aqui.

PERCY

Esta é a parte mais direta para o
dormitórios. Ah, e fique de olho
as escadas, eles gostam de mudar.
Continue por favor e siga-me. Rapidamente
agora, vamos lá. Vamos.

OUTRO

Essa imagem está se movendo!

OUTRO

Olhe para aquele.

OUTRO

Acho que ela gosta de você.

OUTRO

Olhe olhe!

OUTRO

Quem é aquela garota?

IMAGEM DE PAREDE

Bem-vindo a Hogwarts!

A SENHORA GORDA

Senha?

PERCY

A cabeça do dragão. Siga-me, pessoal.
Manter-se. Rápido, vamos! Reunir em torno de
aqui. Bem-vindo ao comum da Grifinória
sala. Os dormitórios masculinos ficam no andar de cima
e para baixo à sua esquerda. Meninas iguais
à sua direita. Você encontrará todos os seus
pertencentes já foram trazidos
acima.






- - - -

RON WEASLEY

Uau! Conseguimos! Você pode imaginar o
olhe no rosto de McGonagall se estivéssemos
tarde? Isso foi brilhante!

MCGONAGALL

Obrigado por essa avaliação, Sr. Weasley.
Talvez fosse mais útil se eu
transfigurou o Sr. Potter e você mesmo
em um relógio de bolso. Dessa forma um dos
você pode chegar na hora certa.

ATORMENTAR

Nós nos perdemos.

MCGONAGALL

Então talvez um mapa? Eu confio que você não
preciso de um para encontrar seus lugares.




SEVERO SNAPE

Não haverá nenhum aceno tolo de varinha
ou encantamentos bobos nesta classe.
Como tal, não espero que muitos de vocês
apreciar a ciência sutil e
arte exata que é fazer poções. No entanto,
para aqueles poucos selecionados que possuem o
predisposição. Eu posso te ensinar como
para enfeitiçar a mente e enredar o
sentidos. Eu te mostro como engarrafar a fama,
preparar glória e até mesmo colocar uma rolha
morte. Então, novamente, talvez alguns de vocês
vieram para Hogwarts em posse
de habilidades tão formidáveis ​​que você
sinta-se confiante o suficiente para não prestar atenção.
Sr. Potter, nossa nova celebridade. Dizer
eu, o que eu conseguiria se adicionasse root
de asfódelo a uma infusão de absinto?
Você não sabe? Bem, vamos tentar novamente.
Onde Sr. Potter você olharia se eu
pediu para você me encontrar um bezoar?

ATORMENTAR

Eu não sei, senhor.

SEVERO SNAPE

E qual é a diferença entre Monkswood
e acônito?

ATORMENTAR

Eu não sei, senhor.

SEVERO SNAPE

Pena. Claramente a fama não é tudo.
É o Sr. Potter?




SFRED WEASLEY

Olho de coelho, zumbido de picada de harpa, vire
essa água em rum... Olho de coelho
harpa picada hum, transforme essa água em
rum.

ATORMENTAR

O que Seamus está tentando fazer com aquele copo
de água?

RON WEASLEY

Transforme em rum. Na verdade ele conseguiu
fazer chá fraco ontem, antes de ---
Ah, a correspondência chegou.

ATORMENTAR

Posso enterrar isso? Obrigado.

OUTRO

Ei, olhe! Neville tem um Lembral.


HERMIONE

Eu li sobre isso. Quando a fumaça
fica vermelho, significa que você esqueceu
algo.

NEVILHA

O único problema é que não consigo me lembrar
o que esqueci.

ATORMENTAR

Ei, Ron, alguém invadiu Gringotes.
Ouça: "Acredita-se que seja obra de
Bruxos das trevas ou bruxas desconhecidas, Gringotes
goblins estavam reconhecendo a violação
insista que nada foi levado. O cofre
na questão número 713 foi esvaziada
mais cedo naquele mesmo dia." Isso é
chance. Esse é o cofre que Hagrid e eu fomos
para.



- - - -

CASAR

Boa tarde classe.

Outros

Boa tarde, senhora Hooch.

MARY

Boa tarde Amanda, boa tarde.
Bem-vindo à sua primeira aula de vôo.
Bem, o que você está esperando? Todos
aproxime-se do lado esquerdo da vassoura.
Vamos agora, apresse-se. Fique à direita
entregue a vassoura e diga.

H e outros

Acima! Acima!

ATORMENTAR

Uau!

DRACO MALFOY

Acima.

RON WEASLEY

Acima. Acima!

MARY

Com sentimento!

HERMIONE

Acima. Acima! Acima. Acima!

RON WEASLEY

ACIMA! Ai! Cala a boca Harry.

MARY

Agora, depois de pegar sua vassoura,
Eu quero que você monte. Segure-o com força.
Você não quer escorregar no final.
Quando eu apito, quero cada um
de você dar o pontapé inicial do chão,
duro. Mantenha sua vassoura firme, passe o mouse
por um momento, depois incline-se ligeiramente para a frente
e toque novamente. No meu apito.
Três, dois... Sr. Longbottom. Sr. Sr.
Senhor Longbottom!

Outros

Abaixo! Abaixo!

ATORMENTAR

Neville!

NEVILHA

Ajuda! Ajuda!

MARY

Volte neste instante! Senhor Longbottom!
Todos fora do caminho!

HERMIONE

Ele está bem?

NEVILHA

Ai!

MARY

Oh oh oh. Nossa, é um pulso quebrado.
Pobre garoto. Vamos agora, levante-se. Todos
é manter os pés firmemente no
chão enquanto levo o Sr. Longbottom para
a ala hospitalar. Entender? Se eu
vejo uma única vassoura no ar aquela
montando nele, eles se encontrarão fora de
Hogwarts antes que eles possam dizer "Quadribol".


DRACO MALFOY

Você viu o rosto dele? Se o caroço de gordura
tivesse dado um aperto nisso, ele se lembraria
cair em sua bunda gorda.

ATORMENTAR

Dê aqui, Malfoy.

DRACO MALFOY

Não, acho que vou deixar em algum lugar
para Longbottom encontrar. Que tal em
o telhado? Qual é o problema Potter?
Um pouco além do seu alcance?

HERMIONE

Atormentar! Sem chance! Você ouviu o que Madame
Hooch disse. Além disso você nem sabe
como voar! Que idiota!

ATORMENTAR

Dê aqui Malfoy ou eu vou bater em você
fora da sua vassoura!

DRACO MALFOY

É assim mesmo? Faça do seu jeito, então!


OUTRO

Sim!

OUTRO

Muito bem, Harry!

OUTRO

Isso foi malvado, Harry!

MCGONAGALL

Harry Potter! Me siga. Você espera aqui.


QUIRRELL

... este é um ingrediente...

MCGONAGALL

Professor Quirrell, com licença, com licença
eu poderia pegar Wood emprestado por um momento,
por favor?

QUIRRELL

Bem, sim, claro.

MCGONAGALL

Potter, este é Oliver Wood. Madeira eu
encontrei para você um Buscador.







- - - -

SIR NEVILLE

Você já ouviu falar que Harry Potter é o novo
Apanhador da Grifinória. Eu sempre soube que ele
fazer bem.

RON WEASLEY

Buscador? Mas os primeiros anos nunca chegam ao
equipes da casa. Você deve ser o mais novo
Jogador de quadribol em...

ATORMENTAR

Um século. De acordo com McGonagall.


Fred Weasley

Bem, cúpula Harry! Wood acabou de nos contar!


RON WEASLEY

Fred e George também estão no time.
Batedores.

GEORGE WEASLEY

Nosso trabalho é garantir que você não
ficar sangrando muito. Não consigo fazer nenhum
promessas, é claro. Jogo difícil de Quadribol.


Fred Weasley

Brutal! Mas ninguém morre há anos.
Alguém desaparece ocasionalmente.

GEORGE WEASLEY

Mas eles aparecerão em um ou dois meses!


RON WEASLEY

Ah, vá em frente, Harry! Quadribol é ótimo.
O melhor jogo que existe, e você será ótimo
também!

ATORMENTAR

Mas eu nunca joguei Quadribol!
E se eu fizer papel de bobo?

HERMIONE

Você não vai fazer papel de bobo. Isso é
em seu sangue.

RON WEASLEY

Uau! Harry, você nunca me contou o seu
meu pai também era um buscador!

ATORMENTAR

Eu não sabia.






- - - -

RON WEASLEY

Estou lhe dizendo, é assustador! Ela sabe
mova-se sobre você do que você!

ATORMENTAR

Quem não gosta? O que está acontecendo?

HERMIONE

As escadas mudam, lembra?

ATORMENTAR

Vamos por aqui.

RON WEASLEY

Antes que a escada se mova novamente. Faz
alguém sente que não deveríamos estar aqui?


HERMIONE

Não deveríamos estar aqui. Esse
é o terceiro andar. É proibido!


ATORMENTAR

Vamos.

HERMIONE

O gato do Flic!

ATORMENTAR

Correr! Rápido, vamos nos esconder através disso
porta! Está trancado!

RON WEASLEY

é isso que terminamos!

HERMIONE

Oh! Mova-se! Alohomora! Entrem!

RON WEASLEY

Alohomorfo?

HERMIONE

Livro Padrão de Feitiços - Capítulo 7!


FILCH

Alguém aqui meu querido? Vamos.

HERMIONE

Ele acha que esta porta está trancada.

RON WEASLEY

Ele acha que esta porta está trancada.

HERMIONE

Estava trancado.

ATORMENTAR

E por um bom motivo.

H, R e HERMIONE

AH!

RON WEASLEY

O que eles pensam que estão fazendo? Guardando
uma coisa dessas trancada em uma escola?


HERMIONE

Você não usa os olhos, usa? Não
você vê onde ele estava?

RON WEASLEY

Eu não estava olhando para seus pés! Eu era
um pouco preocupado com suas cabeças. Ou
talvez você não tenha percebido... os três!


HERMIONE

Estava parado em um alçapão. Não foi
lá por acidente. Está guardando alguma coisa.


ATORMENTAR

Guardando alguma coisa?

HERMIONE

Isso mesmo. Agora, se vocês dois não
lembre-se, vou dormir antes de qualquer um
vocês tiveram outra ideia inteligente
ser morto ou pior... expulso.


RON WEASLEY

Ela precisa definir suas prioridades.




- - - -

OLIVER MADEIRA

O Quadribol é bastante fácil de entender.
Cada equipe tem 7 jogadores. Três caçadores,
dois batedores, um goleiro e um apanhador,
é você. Existem três tipos de
bolas. Este é chamado de Goles.
Os artilheiros seguram a goles e tentam
passar por um desses três
aros. O Guardião, sou eu, defende
os aros. Comigo até agora?

ATORMENTAR

Eu penso que sim. O que são aqueles?

OLIVEIRA MADEIRA

É melhor você aceitar isso. Cuidado agora, é
voltando. Nada mal, Potter, você faria
um batedor justo. Ah, ah.

ATORMENTAR

O que é que foi isso?

OLIVEIRA MADEIRA

Balaços. Pequenos insetos desagradáveis. Mas
você é um buscador. A única coisa que eu quero
você deve se preocupar é com isso, o Golden
Dedo duro.

ATORMENTAR

Eu gosto desta bola.

OLIVEIRA MADEIRA

Eh, você gosta agora. Mas é perverso
rápido e quase impossível de ver.


ATORMENTAR

O que eu faço com isso?

OLIVEIRA MADEIRA

Você pega. Antes do outro time
Buscador. Se você entender isso, o jogo acaba.
Você pega isso, Potter, e nós vencemos.


ATORMENTAR

Uau!



- - - -

PROFESSOR FLITWICK

Uma das habilidades mais rudimentares de um mago
é a levitação ou a habilidade de fazer
objetos voam. Todos vocês têm suas penas?
Bom. Agora não se esqueça do belo pulso
movimento que temos praticado. Zumbir!
O "Swish e Flick". Todos, o
"Swish e Flick". Bom! Ah, e anuncie!
Wingardium Leviosa. Vá embora então!


Outros

Wingardium Leviosa; Wingardium Leviosa!


RON WEASLEY

Wingardium Leviosa!

HERMIONE

Não, pare, pare, pare! Você vai
tirar o olho de alguém! Além disso, você está
dizendo errado. É Levi-o-sa, não
Leviosar.

RON WEASLEY

Você faz isso então se você for tão inteligente.
Vá em frente, vá em frente!

HERMIONE

Wingardium Leviosa.

PROFESSOR FLITWICK

Ah, ah! Bom trabalho! Veja aqui todos,
Senhorita Granger conseguiu! Oi, oi! Esplêndido!


SFRED WEASLEY

Wingard-Leviosa; Wingard - Leviosa


PROFESSOR FLITWICK

Muito bem Amor. OH!

ATORMENTAR

Acho que vamos precisar de outro
pena aqui professor.

RON WEASLEY

"É Levi-o-sa, não Leviosar." Ela é
um pesadelo, honestamente! Não é nenhuma maravilha
ela não tem amigos!

ATORMENTAR

Acho que ela ouviu você.




ATORMENTAR

Onde está Hermíone?

NEVILHA

Parvati Patil disse que não viria
do banheiro feminino. Ela disse
ela ficou lá a tarde toda, chorando.


QUIRRELL

Troll na masmorra! Troll na masmorra!
Embora você devesse saber.

Outros

Ah!

DUMBLEDORE

SILÊNCIO! Todos, por favor, não entrem em pânico!
Agora, prefeitos, por favor, acompanhem sua casa
para os dormitórios. Os professores seguirão
eu para as masmorras.

PERCY

Grifinórios, continuem, por favor, e fiquem
alerta!

ATORMENTAR

Como um troll poderia entrar?

RON WEASLEY

Não por conta própria. Trolls são realmente estúpidos.
Provavelmente pessoas fazendo piadas. O que?


ATORMENTAR

Hermione! Ela não sabe!

RON WEASLEY

Acho que o troll saiu da masmorra!


ATORMENTAR

Está indo para o banheiro feminino.
Mexa-se Hermione!

HERMIONE

Ajuda! Ajuda!

RON WEASLEY

Ei, cérebro de ervilha!

HERMIONE

Ah! Ajuda!

ATORMENTAR

Uau!

RON WEASLEY

Eca!

ATORMENTAR

Faça alguma coisa!

RON WEASLEY

O que?

ATORMENTAR

Qualquer coisa! Se apresse!

HERMIONE

"Swish & Flick!"

RON WEASLEY

Wingardium Leviosa! Legal.

HERMIONE

Está morto?

ATORMENTAR

Não, apenas nocauteado.

ATORMENTAR

Eca.

RON WEASLEY

Danças de trolls.

MCGONAGALL

Ó meu Deus! Expliquem-se ambos
de você!

H & RON WEASLEY

Bem, o que é-

HERMIONE

A culpa é minha Professor Mc Gonagall


MCGONAGALL

Senhorita Granger?

HERMIONE

Fui procurar o troll que li
sobre eles e eu pensei que poderia lidar
isto. Mas eu estava errado. Se Harry e Rony
não tivesse vindo e me encontrado... eu provavelmente
estar morto.

MCGONAGALL

Seja como for, foi um evento extremamente
coisa tola de se fazer. eu teria esperado
comportamento mais racional de sua parte
e estou muito decepcionado com você, senhorita.
Granger. Serão retirados cinco pontos
Grifinória por sua grave falta de
julgamento. Quanto a vocês dois, gentis, eu apenas
espero que você perceba o quão sortudo você é.
Poucos alunos do primeiro ano poderiam fazer
em um troll da montanha adulto e
viva para contar a história. Cinco pontos serão
será concedido a cada um de vocês, por pura
sorte idiota.

QUIRRELL

Talvez você devesse ir. Pode acordar
acima.



- - - -

RON WEASLEY

Pegue um pouco de torrada, companheiro. Prossiga.

HERMIONE

Ron está certo, Harry, você vai precisar
sua força hoje.

ATORMENTAR

Eu não estou com fome.

SEVERO SNAPE

Boa sorte hoje, Potter. Então de novo,
agora que você provou seu valor contra
um troll, um joguinho de quadribol
deve ser um trabalho fácil para você. Ainda que
é contra a Sonserina.

ATORMENTAR

Isso explica o sangue.

HERMIONE

Sangue?

ATORMENTAR

Ouça, ontem à noite, acho que Snape
deixe o troll entrar como diversão para que ele
poderia passar por aquele cachorro de três cabeças.
Mas ele foi mordido, por isso está mancando.


HERMIONE

Mas por que alguém chegaria perto daquele cachorro?


ATORMENTAR

No dia em que estive em Gringotes, Hagrid tirou
algo de um dos cofres.
Disse que era assunto de Hogwarts, muito
segredo.

HERMIONE

Então você está dizendo- -

ATORMENTAR

É isso que o cachorro está protegendo. Isso é
o que Snape quer.

HERMIONE

Um pouco cedo para o correio, não é?

ATORMENTAR

Mas nunca recebo correspondência.

RON WEASLEY

Vamos abrir.

ATORMENTAR

É uma vassoura.

RON WEASLEY

Não é apenas uma vassoura, Harry. Isso é
do Nimbus 2000!

ATORMENTAR

Mas quem--?




OLIVEIRA MADEIRA

Com medo, Harry?

ATORMENTAR

Um pouco.

OLIVEIRA MADEIRA

Está tudo bem. Eu me senti da mesma maneira antes
meu primeiro jogo.

ATORMENTAR

O que aconteceu?

OLIVEIRA MADEIRA

Eu... uh... eu realmente não me lembro...
Levou um balaço na cabeça por dois minutos
dentro. Acordei no hospital uma semana depois.


LJ

Olá! Bem-vindo ao primeiro quadribol de Hogwarts
jogo da temporada! Jogo de hoje: Sonserina
contra a Grifinória! O jogador pega seu
posições enquanto Madame Hooch entra
o campo para começar o jogo!

MARY

Agora, eu quero um jogo limpo e bonito... de
todos vocês.

LJ

Os balaços estão em alta. Seguido pelo
Pomo de Ouro. Lembre-se que o pomo é
vale 150 pontos. O buscador que pega
o pomo encerra o jogo. A goles
é lançado e o jogo começa! Angelina
Gol de Johnson! Dez pontos para a Grifinória!


HAGRID

Bom trabalho!

LJ

Sonserina pega a goles. Bletchley
passa para o capitão Marcus Flint. Outro
dez pontos para a Grifinória!

MFRED WEASLEY

Me dê isso! Fique desse lado!

HAGRID

O que está acontecendo com a vassoura de Harry?


HERMIONE

É o Snape! Ele está azarando a vassoura!


RON WEASLEY

Azarando a vassoura?! O que nós fazemos?


HERMIONE

Deixe para mim!

RON WEASLEY

Vamos, Hermione!

HERMIONE

Lacarno de Inflamara.

OUTRO

Fogo! Você está no fogo!

HAGRID

Vai Vai Vai Vai! Parece que ele vai
esteja doente!

LJ

Ele pegou o pomo! Harry Potter recebe
150 pontos por pegar o pomo!


MARY

Grifinória vence!

HAGRID

Sim!

Outros

Convergência Harry Potter! Harry Potter
Limite! Convergência Harry Potter! atormentar
Potter Confindo! Convergência Harry Potter!







- - - -

HAGRID

Absurdo! Por que Snape lançaria uma maldição
na vassoura de Harry?

ATORMENTAR

Quem sabe? Por que ele estava tentando conseguir
passou por aquele cachorro de três cabeças no Halloween?


HAGRID

Quem te contou sobre o Fluffy?

RON WEASLEY

Fofinho?

HERMIONE

Essa coisa tem nome?

HAGRID

Bem, é claro, ele tem um nome! Ele é
meu! Eu o tirei de um irlandês
Eu me conheci no pub ano passado. Então
Eu o emprestei para Dumbledore para guardar o ---


ATORMENTAR

Sim?

HAGRID

Eu não deveria ter dito isso. Não mais
questões! Não faça mais perguntas!
Isso é ultrassecreto.

ATORMENTAR

Mas Hagrid, o que quer que Fofo esteja guardando
Snape está tentando roubá-lo!

HAGRID

Bacalhau! Professor Snape é um Hogwarts
professor!

HERMIONE

Professor de Hogwarts ou não, eu conheço um feitiço
quando vejo um! Eu li tudo sobre
eles. Você tem que manter contato visual
e Snape não estava piscando!

ATORMENTAR

Exatamente.

HAGRID

Agora me escutem, vocês três,
você está se intrometendo em coisas que deveriam
não se intrometa. É perigoso!
O que aquele cachorro está guardando é estritamente
entre Professor Dumbledore e Nicholas
Flamel.

ATORMENTAR

Nicolau Flamel?

HAGRID

Eu não deveria ter dito isso. Eu deveria
não ter dito isso.

ATORMENTAR

Nicolau Flamel. Quem é Nicolau Flamel?


HERMIONE

Não sei.




FANTASMAS DE HOGWART

Feliz Natal, Feliz Natal. Anel
o sino de Hogwarts. Feliz Natal, feliz
Natal. Lance um feitiço de Natal.


ATORMENTAR

Cavaleiro para E-5.

RON WEASLEY

Rainha para E-5.

HERMIONE

Isso é totalmente bárbaro!

RON WEASLEY

Esse é o xadrez do bruxo. Eu vejo que você
embalado.

HERMIONE

Veja que você não fez isso.

RON WEASLEY

Mudança de planos. Meus pais decidiram
ir para a Romênia visitar meu irmão
Charlie. Ele está estudando dragões lá.


HERMIONE

Bom. Você pode ajudar Harry então. Ele é
vou procurar informações na biblioteca
em Nicolau Flamel.

RON WEASLEY

Já olhamos centenas de vezes!

HERMIONE

Não na Seção Restrita. Feliz
Natal.

RON WEASLEY

Acho que tivemos uma má influência
dela.






- - - -

RON WEASLEY

Harry, acorde! Vamos Harry! Acordar!
Feliz Natal Harry!

ATORMENTAR

Feliz Natal Rony! O que você está vestindo?


RON WEASLEY

Ah, minha mãe fez isso. Parece que você
tenho um também.

ATORMENTAR

Eu tenho presentes?

RON WEASLEY

Sim! Ali estão eles.

ATORMENTAR

"Seu pai deixou isso em minha posse
antes de morrer. Já é hora de ser devolvido
para você. Use bem."?

RON WEASLEY

O que é?

ATORMENTAR

Algum tipo de capa.

RON WEASLEY

Bem, vamos ver então! Coloque-o! Uau!


ATORMENTAR

Meu corpo se foi!

RON WEASLEY

Eu sei o que é isso! Isso é uma invisibilidade
Capa!

ATORMENTAR

Eu sou invisível?

RON WEASLEY

Eles são realmente raros. Eu me pergunto quem deu
isso para você.

ATORMENTAR

Não havia nome. Apenas dizia: "Use
está bem."

ATORMENTAR

Famosos Comedores de Fogo. Século quinze
Demônios. Flamel. Nicolau Flamel. Onde
você é?

FILCH

Eu sei que você está aí. Você não pode se esconder.
Quem é esse? Mostre-se!

QUIRRELL

Severo III

SEVERO SNAPE

Você não me quer como seu inimigo Quirrell.


QUIRRELL

Eu não sei o que você quer dizer.

SEVERO SNAPE

Você sabe perfeitamente o que quero dizer.
Em breve teremos outra pequena conversa.
Quando você tiver tempo para decidir onde
suas lealdades mentem.

FILCH

Professores. Encontrei isso no Restrito
Seção. Ainda está quente. Que significa
há um estudante fora da cama.

ATORMENTAR

Mãe pai? Rony! Você realmente tem que ver
esse! Rony! Você tem que ver isso! Rony!
Vamos, saia da cama!

RON WEASLEY

Por que?

ATORMENTAR

Há algo que você precisa ver!
Agora, vamos! Vamos! Vir! Venha ver!
São meus pais!

RON WEASLEY

Eu só nos vejo.

ATORMENTAR

Olhe corretamente. Vá em frente, fique aí.
Lá. Você os vê, não é? Isso é---


RON WEASLEY

Esse sou eu! Só que eu sou monitor-chefe. E eu sou
segurando a Taça de Quadribol. E sangrento
inferno! Eu também sou capitão de quadribol! eu olho
bom! Harry, você acha que esse espelho
mostra o futuro?

ATORMENTAR

Como pode isso? Meus pais estão mortos.





DUMBLEDORE

De volta Harry? Eu vejo que você, tipo
muitos outros antes de você descobrir
as delícias do Espelho de Ojesed.
Eu confio agora, você percebe o que é o que
isso acontece. Deixe-me dar uma pista. O
o homem mais feliz do mundo olharia para dentro
o espelho e só se vê exatamente
como ele é.

ATORMENTAR

Então, isso nos mostra o que queremos...
O que quisermos?

DUMBLEDORE

Sim e não. Não nos mostra mais nada
ou menos que o mais profundo e desesperado
desejos de nossos corações. Agora você Harry,
que nunca conheceu sua família você
veja-os parados ao seu lado. Mas lembre-se
isso, Harry. Este espelho não nos dá nem
conhecimento ou verdade. Os homens desperdiçaram
longe na frente dele. Até enlouqueceu.
É por isso que amanhã será movido
para uma nova casa. E devo perguntar a você não
para ir procurá-lo novamente. Isso acontece
não é bom ficar pensando em sonhos, Harry, e
esqueça de viver.



- - - -

HERMIONE

Eu fiz você procurar na seção errada!
Como pude ser tão estúpido? eu chequei
isso foi lançado semanas atrás para um pouco de luz
leitura!

RON WEASLEY

Isso é leve?

HERMIONE

Claro! Aqui está! "Nicolau Flamel
é o único criador conhecido do Feiticeiro
Pedra

H&RON WEASLEY

O quê?

HERMIONE

Honestamente, vocês dois não lêem? “O Feiticeiro
A pedra é uma substância lendária com
poderes surpreendentes. Isso vai transformar
qualquer metal em ouro puro e produzir
o Elixir da Vida que tornará o
bebedor imortal."

RON WEASLEY

Imortal!

HERMIONE

Isso significa que você nunca morrerá.

RON WEASLEY

Eu sei o que isso significa!

HERMIONE

A única pedra que existe atualmente
pertence ao Sr. Nicholas Flamel, o
notável alquimista que no ano passado celebrou
seu aniversário de 665 anos." É isso que Fluffy
guarda no terceiro andar. Isso é
o que está sob o alçapão. O Feiticeiro
Pedra.

ATORMENTAR

Hagrid!

HAGRID

Ah, olá. Eu não quero ser rude,
mas não estou em condições de entreter
hoje.

H&R&HERMIONE

Sabemos sobre a Pedra Filosofal!




g; Oh.

ATORMENTAR

Achamos que Snape está tentando roubá-lo.


HAGRID

Snape? Caramba, você ainda está falando sobre
ele, você é?

ATORMENTAR

Hagrid! Sabemos que ele está atrás da Pedra
simplesmente não sabemos por quê!

HAGRID

Snape é um dos professores que protege
a pedra! Ele não está prestes a roubá-lo.


ATORMENTAR

O que?

HAGRID

Você ouviu. Certo, agora, vamos, estou
um pouco preocupado hoje.

ATORMENTAR

Espere um minuto! "Um dos professores"?


HERMIONE

Claro! Há outras coisas defendendo
a Pedra, não é? Feitiços, encantamentos?


HAGRID

Certo. Perda de tempo se você perguntar
meu. Ninguém vai passar pelo Fluffy.
Não há alma que saiba como, exceto eu e
Dumbledore. Eu não deveria ter te contado
que. Eu não deveria ter te contado isso.


ATORMENTAR

Hagrid, o que exatamente é isso?

HAGRID

Oh aquilo? É um... é um...

RON WEASLEY

Eu sei o que é isso! Mas Hagrid como
você conseguiu um?

HAGRID

Eu ganhei! De um estranho que conheci no
bar. Parecia muito feliz por se livrar
isso, na verdade.

HERMIONE

Isso é... um dragão?

RON WEASLEY

Isso não é apenas um dragão! Esse é um norueguês
Ridgeback! Meu irmão Charlie trabalha
com estes na Roménia.

HAGRID

Ele não é lindo? Oh, Deus o abençoe, olhe,
ele conhece sua múmia! Olá Norberto!


ATORMENTAR

Norberto?

HAGRID

Bem, ele tem que ter um nome, não é?
Você não é Norberto? Te o o o! Oh!
Uau! Ele terá que ser treinado
um pouco, é claro. Quem é aquele?

ATORMENTAR

Malfoy.

HAGRID

Oh céus.

ATORMENTAR

Hagrid sempre quis um dragão. Ele disse
eu então na primeira vez que o conheci.


RON WEASLEY

É louco! E pior, Malfoy sabe.


HERMIONE

Eu não entendo. Isso é ruim?

RON WEASLEY

É mau.

MCGONAGALL

Boa noite. Nada eu repito nada
dá ao aluno o direito de passear
a escola à noite. Portanto como punição
por suas ações, 50 pontos serão
levado.

HARRY

50!

MCGONAGALL

Cada. E para garantir que isso não aconteça
acontecer novamente, todos vocês quatro receberão
detenção.

DRACO MALFOY

Com licença professor. Talvez eu tenha ouvido
você está errado. Eu pensei que você disse os quatro
de nós.

MCGONAGALL

Não, você me ouviu corretamente, Sr. Malfoy.
Você vê, honrado como suas intenções
você também estava fora da cama depois do expediente.
Você se juntará aos seus colegas na detenção.





FILCH

Uma pena que eles deixaram as antigas punições
morrer. Foi um tempo de detenção que encontrou você
pendurado pelos polegares nas masmorras.
Deus, vou sentir falta dos gritos. Você vai
estarei cumprindo detenção com Hagrid esta noite.
Ele tem um trabalhinho para fazer dentro do
Floresta Negra. É uma pena isso, Hagrid.
Oh meu Deus, você ainda não está falando
aquele maldito dragão agora é você?

HAGRID

Norberto se foi. Dumbledore o enviou
partiu para a Romênia para viver em uma colônia.


HERMIONE

Bem, isso é bom, não é? Ele estará
com sua própria espécie.

HAGRID

Sim, mas e se ele não gostar da Roménia?
E se os outros dragões forem maus
ele? Afinal, ele é apenas um bebê.

FILCH

Oh, pelo amor de Deus, controle-se
homem. Você vai para a floresta depois
todos. Tenho que ter o meu juízo sobre você.


DRACO MALFOY

A floresta? Eu pensei que isso era uma piada.
Não podemos entrar lá. Os alunos não estão
permitido. E há... lobisomens!


FILCH

Ah, há mais que lobisomens em
aquelas árvores, rapaz. Você pode ter certeza
que. Boa noite.

HAGRID

Certo, vamos.




ATORMENTAR

Hagrid, o que é isso?

HAGRID

Para que estamos aqui. Vê isso? Isso é
sangue de unicórnio, quero dizer. eu encontrei um
morto há algumas semanas. Agora, este é
foi gravemente ferido por alguma coisa. Então, é
nosso trabalho é ir e encontrar o pobre animal.
Rony, Hermione, vocês virão comigo.


RON WEASLEY

OK...

HAGRID

E Harry, você irá com Malfoy.

DRACO MALFOY

Ok, então eu pego Fang!

HAGRID

Multar. Só para você saber que ele é um covarde.


DRACO MALFOY

Espere até meu pai saber disso!
Isso é coisa de servo.

ATORMENTAR

Se eu não conhecesse melhor Draco, eu diria
você estava com medo.

DRACO MALFOY

Potter assustado. Você ouviu isso?

ATORMENTAR

Vamos, Fang!

DRACO MALFOY

Assustado!




ATORMENTAR

O que é isso Fang?

DRACO MALFOY

AH!

FIRENZA

Harry Potter, você deve ir embora. Você é
conhecido por muitas criaturas aqui. A floresta
não é seguro neste momento. Especialmente
para você.

ATORMENTAR

Mas o que foi aquilo que você me salvou
de?

FLORENÇA

Uma criatura monstruosa. É um terrível
crime matar um unicórnio. Bebendo o
sangue de um unicórnio irá mantê-lo vivo
mesmo se você estiver a um centímetro da morte.
Mas a um preço terrível. Para você tem
matou algo tão puro que o momento
o sangue toca seus lábios você tem
uma meia-vida, uma vida amaldiçoada.

ATORMENTAR

Mas quem escolheria uma vida assim?

FLORENÇA

Você não consegue pensar em ninguém?

ATORMENTAR

Você quer dizer aquela coisa que matou
o unicórnio, que estava bebendo seu sangue,
aquele era Voldemort?

FLORENÇA

Você sabe o que está escondido na escola
neste exato momento, Sr. Potter?

ATORMENTAR

A pedra do feiticeiro!

HERMIONE

Atormentar!

HAGRID

Olá, Firenze. Veja, você se conheceu
nosso jovem Sr. Potter. Tudo bem aí
Atormentar?

FLORENÇA

Harry Potter, é aqui que eu saio
você. Você está seguro agora. Boa sorte.





HERMIONE

Você quer dizer que Você-Sabe-Quem está fora
aí agora na Floresta?

ATORMENTAR

Mas ele é fraco. Ele está vivendo de unicórnios.
Você não vê? Nós erramos! Snape
não quer a Pedra para si.
Ele quer a Pedra para Voldemort. Com
o Elixir da Vida, Voldemort se tornará
forte novamente. Ele, ele vai voltar.


RON WEASLEY

Mas se ele voltar, você não acha
ele vai tentar te matar, não é?

ATORMENTAR

Eu acho que se ele tivesse a chance, ele faria
tentaram me matar esta noite.

RON WEASLEY

E pensar, tenho me preocupado com
minha final de Poções.

HERMIONE

Aguarde um minuto. Estamos esquecendo um
coisa. Quem é o bruxo Voldemort
é sempre temido? Dumbledore. Contanto
enquanto Dumbledore está por perto, Harry, você está
seguro. Enquanto Dumbledore estiver por perto
você não pode ser tocado.






- - - -

HERMIONE

Eu ouvi dizer que os exames finais de Hogwarts eram
assustador, mas descobri que são bastante
agradável

RON WEASLEY

Fale por você mesmo. Tudo bem aí
Atormentar?

ATORMENTAR

Minha cicatriz. Continua queimando.

HERMIONE

Já aconteceu antes.

ATORMENTAR

Assim não.

RON WEASLEY

Talvez você devesse ver a enfermeira.

ATORMENTAR

Acho que é um aviso. Isso significa que o perigo
chegando. Ah. Ah, claro.

HERMIONE

O que é?

ATORMENTAR

Você não acha um pouco estranho isso
o que Hagrid quer mais do que tudo
é um dragão e um estranho aparece
e por acaso tem um? Quero dizer,
quantas pessoas andam por aí com dragão
ovos nos bolsos? Por que eu não
viu isso antes? Hagrid, quem te deu
aquele ovo de dragão? Como ele era?


HAGRID

Eu não sei. Eu nunca vi o rosto dele. Ele manteve
seu capuz levantado.

ATORMENTAR

Este estranho, porém, você e ele devem
tenho falado.

HAGRID

Bem, ele queria saber que tipo de
criaturas que eu cuidava. E eu disse
ele, depois do Fluffy um dragão vai aparecer
sem problemas.

ATORMENTAR

Ele parecia interessado em Fluffy?

HAGRID

Bem, é claro que ele estava interessado em
Fofinho! Com que frequência você se depara
cachorros de três cabeças você encontra
mesmo se você estiver no comércio? Mas eu disse
ele, eu disse, eu disse: "O truque com
qualquer animal deve saber como acalmá-lo."
Veja o Fluffy, por exemplo, apenas jogue com ele
um pouco de música e ele cai direto
dormindo. Eu não deveria ter te contado isso.
Onde você está indo? Onde você está---?





ATORMENTAR

Temos que ver o professor Dumbledore
imediatamente!

ATORMENTAR

Temos que ver o Professor Dumbledore
imediatamente!

MCGONAGALL

Receio que o Professor Dumbledore não esteja
aqui. Ele recebeu uma coruja urgente de
o Ministério da Magia e saiu imediatamente
para Londres.

ATORMENTAR

Ele se foi! Mas isso é importante! Esse
é sobre a Pedra Filosofal!

MCGONAGALL

Como você sabia ---?

ATORMENTAR

Alguém vai tentar roubá-lo!


MCGONAGALL

Eu não sei como vocês três descobriram
sobre a Pedra, mas garanto-lhe
está perfeitamente bem protegido. Agora seria
você volta para seus dormitórios em silêncio.


ATORMENTAR

Esse não era um estranho que Hagrid conheceu. Isto
era Snape. O que significa que ele sabe
como passar pelo Fluffy.

HERMIONE

E com a partida de Dumbledore...

SEVERO SNAPE

Boa tarde. Agora, o que três
jovens Grifinórios, como vocês
estar fazendo dentro de casa em um dia como este?


HERMIONE

Nós estávamos... estávamos apenas...

SEVERO SNAPE

Você deveria ter cuidado. As pessoas vão
acho que você está tramando alguma coisa.

HERMIONE

Agora o que vamos fazer?

ATORMENTAR

Desceremos pelo alçapão esta noite.





ATORMENTAR

Trevor.

RON WEASLEY

Trevor, merda, você não deveria estar aqui!


NEVILHA

Você também não deveria. Você está se esgueirando
saiu de novo, não é?

ATORMENTAR

Agora Neville ouça. Nós estávamos... nós estávamos...


NEVILHA

Não, eu não vou deixar você! Você vai conseguir a Grifinória
em apuros novamente! Eu vou, eu vou lutar
você!

HERMIONE

Neville, eu realmente sinto muito por
esse. Petrificus totalus!

RON WEASLEY

Você é um pouco assustador às vezes, você
saiba disso. Brilhante, mas assustador.  


ATORMENTAR

Vamos.

ATORMENTAR

Desculpe.

HERMIONE

Desculpe.

RON WEASLEY

É para o seu próprio bem, você sabe.




HERMIONE

Ai! Você ficou no meu pé!



Desculpe.

HERMIONE

Alohomorfo

ATORMENTAR

Espere um minuto. Ele está roncando. Snape
já esteve aqui. Ele colocou um feitiço
na harpa.

RON WEASLEY

Eca! Está com um hálito horrível.

ATORMENTAR

Temos que mover sua pata.

RON WEASLEY

O que?

ATORMENTAR

Vamos! Ok, empurre! Eu vou primeiro.
Não me siga até que eu lhe dê um sinal.
Se algo ruim acontecer, prepare-se
fora! Parece um pouco quieto para você?


HERMIONE

A harpa parou de tocar.

RON WEASLEY

Eca! Que nojo! Eca!

ATORMENTAR

Pular!

RON WEASLEY

Uau! Sorte que essa planta está aqui
realmente! Uau!

HERMIONE

Pare de se mover, vocês dois! Isto é do Diabo
Laço. Você tem que relaxar! Se você não
isso só vai te matar mais rápido!

RON WEASLEY

Nos matar mais rápido? Ah, agora posso relaxar!


R&HARRY

Hermione!

RON WEASLEY

Ah, agora o que vamos fazer?

HERMIONE

Apenas relaxe!

ATORMENTAR

Hermínio onde você está?

HERMIONE

Faça o que eu digo! Confie em mim!

RON WEASLEY

Ah! Atormentar! Atormentar!

HERMIONE

Você está bem?

ATORMENTAR

Sim, sim, estou bem. (Rony Weasley: Socorro!)


HERMIONE

Ele não está relaxando, está? (Ron Weasley:
Ajuda!)

ATORMENTAR

Aparentemente não. (Rony Weasley: Me ajude!)


HERMIONE

Temos que fazer alguma coisa! (Ron Weasley:
Ajuda!)

ATORMENTAR

O que? (Rony Weasley: Socorro!)

HERMIONE

Lembro-me de ler algo em Herbologia.
(Ron Weasley: Socorro!) “Armadilha do Diabo
Devil's Snare é mortalmente divertido; mas irá
ficar de mau humor ao sol. É isso! Demonios
Armadilha, você odeia a luz do sol! Lumus Sol!


ATORMENTAR

Rony, você está bem?

RON WEASLEY

Sim. Sorte que não entramos em pânico!



Lucky Hermione presta atenção em Herbologia.


HERMIONE

O que é aquilo?

ATORMENTAR

Não sei. Parecem asas.

HERMIONE

Curioso, nunca vi pássaros assim
esses.

ATORMENTAR

Eles não são pássaros, são chaves. E
Aposto que um deles cabe naquela porta.


HERMIONE

O que é isso?

ATORMENTAR

Não sei. Estranho.

RON WEASLEY

Alohomora! Bem, valeu a pena tentar.


HERMIONE

O que nós vamos fazer? Deve haver
haja mil chaves lá em cima!

RON WEASLEY

Estamos procurando por um grande antiquado
um. Provavelmente enferrujado como o cabo.


ATORMENTAR

Lá! Eu vejo isso! Aquele com o quebrado
asa!

HERMIONE

O que há de errado Harry?

ATORMENTAR

É muito simples.

RON WEASLEY

Ah, vá em frente, Harry! Se Snape conseguir pegar
naquela vassoura velha, você pode!
Você é o apanhador mais jovem em um século!
Isso complica um pouco as coisas!

ATORMENTAR

Pegue a chave!

RON WEASLEY

Se apresse!




HERMIONE

Eu não gosto disso. Eu não gosto disso
de forma alguma.

ATORMENTAR

Onde estamos? Um cemitério?

RON WEASLEY

Isto não é um cemitério, é um tabuleiro de xadrez.


ATORMENTAR

Aí está a porta!

HERMIONE

Agora o que fazemos?

RON WEASLEY

É óbvio, não é? Nós temos que jogar
nosso caminho através da sala. Tudo bem,
Harry, você pega a praça do bispo vazia.
Hermione, você será o castelo do lado da rainha.
Quanto a mim, serei um cavaleiro.

HERMIONE

O que acontece agora?

RON WEASLEY

Bem, as brancas se movem primeiro, e então nós
jogar.

HERMIONE

Ron, você não acha que isso vai ser assim
xadrez de bruxo de verdade, não é?

RON WEASLEY

Você aí D-5. Sim, Hermione, eu acho
isso vai ser exatamente igual ao do Wizard
xadrez. Castelo para E-4! Peão para C-3!


ATORMENTAR

Espere um minuto.

RON WEASLEY

Você entende certo Harry. Assim que eu fizer
minha jogada, a rainha me levará. Então
você está livre para dar xeque no rei.

ATORMENTAR

Não. Rony, não!

HERMIONE

O que é?

ATORMENTAR

Ele vai se sacrificar!

HERMIONE

Não, você não pode! Deve haver outro
caminho!

RON WEASLEY

Você quer impedir que Snape fique
aquela Pedra ou não? Harry, é você quem
tem que continuar. Eu sei isso! Eu não! Não
Hermione! Você! Cavaleiro para H-3. Verificar.
Ah!

ATORMENTAR

Rony! Não, não se mexa! Não esqueça que estamos
ainda jogando! Xeque-mate! Tomar cuidado
de Ron, então vá para o corujal. Enviar um
mensagem para Dumbledore. Rony está certo.
Eu tenho que continuar.

HERMIONE

Você vai ficar bem, Harry. Você é um ótimo
mago. Você realmente é.

ATORMENTAR

Não tão bom quanto você.

HERMIONE

Meu? Livros, inteligência. Há mais
coisas importantes. Amizade e bravura.
E Harry, apenas tome cuidado.




ATORMENTAR

Você? Não, não pode ser; Snape ele era ele
foi o único---

QUIRRELL

Sim, ele parece ser o tipo, não é?
Ao lado dele quem suspeitaria de pp-pobre
Professor Quirrell gago?


ATORMENTAR

Mas naquele dia, durante a partida de Quadribol,
Snape tentou me matar.

QUIRRELL

Oh não, querido garoto, eu tentei te matar!
E acredite em mim se a capa de Snape não tivesse
pegou fogo e quebrou meu contato visual
Eu teria conseguido. Mesmo com Snape
murmurando sua pequena contra-maldição.


ATORMENTAR

Snape estava tentando me salvar?

QUIRRELL

Eu sabia que você era um perigo para mim, certo
desde o início. Especialmente depois do Halloween.


ATORMENTAR

Então você deixou o troll entrar!

QUIRRELL

Muito bom Potter sim. Snape infelizmente
não foi enganado, quando todo mundo estava
correndo pela masmorra que Snape foi
para o terceiro andar para me guiar. Ele
é claro que nunca mais confiou em mim. Ele
raramente me deixava sozinho. Mas ele não
entenda, nunca estou sozinho. Nunca.
Agora, esse espelho serve? Eu vejo o que
Eu desejo. Eu me vejo segurando a Pedra.
Mas como faço para conseguir isso?

VOLDEMORT

Use o garoto.

QUIRRELL

Venha aqui Potter! Agora! Diga-me o que
você vê? O que é isso que você vê?


ATORMENTAR

Estou apertando a mão de Dumbledore. Eu tenho
ganhou a Copa das Casas.

VOLDEMORT

Ele mente.

QUIRRELL

Diga a verdade! O que você vê?

VOLDEMORT

Deixe-me falar com ele.

QUIRRELL

Mestre, você não é forte o suficiente.

VOLDEMORT

tenha força suficiente para isso. atormentar
Potter, nos encontramos novamente.

ATORMENTAR

Voldemort?

VOLDEMORT

Sim, você vê o que eu me tornei? Ver
o que devo fazer para sobreviver? Viva
outro. Um mero parasita. sangue de unicórnio
pode me sustentar, mas não pode me dar
um corpo meu. Mas há algo
que pode. Algo que convenientemente
o suficiente está no seu bolso. Pare ele!
Não seja tolo! Por que sofrer um horrível
morte quando você pode se juntar a mim e
ao vivo?

ATORMENTAR

Nunca!

VOLDEMORT

Bravura, seus pais também tiveram. Dizer
eu, Harry, você gostaria de ver o seu
mãe e pai de novo? Juntos nós
pode trazê-los de volta. Tudo que eu peço é
algo em troca. É isso Harry.
Não existe bem e mal, existe
apenas o poder e aqueles que são fracos demais para buscar
isto. Juntos faremos algo extraordinário
coisas. Apenas me dê a Pedra!

ATORMENTAR

Seu mentiroso!

VOLDEMORT

Mate ele!

QUIRRELL

O que é essa mágica?

VOLDEMORT

Tolo, pegue a Pedra!




DUMBLEDORE

Boa tarde Harry. Tokens do seu
admiradores.

ATORMENTAR

Admiradores?

DUMBLEDORE

O que aconteceu nas masmorras entre
você e o professor Quirrell são um completo
segredo. Então, naturalmente, toda a escola
sabe. Ah, vejo que seu amigo Ronald
poupou você do trabalho de abrir
seus sapos de chocolate.

ATORMENTAR

Ron estava aqui? Ele está bem? A respeito
Hermone?

DUMBLEDORE

Multar. Ambos estão bem.

ATORMENTAR

Mas, o que aconteceu com a Pedra?

DUMBLEDORE

Relaxe querido garoto. A Pedra foi destruída.
Meu amigo Nicholas e eu tivemos uma
conversamos um pouco e concordamos que era melhor
em volta.

ATORMENTAR

Mas então Flamel, ele vai morrer, não é?


DUMBLEDORE

Ele tem Elixir da Vida suficiente para definir
seus assuntos em ordem. Mas sim, ele vai
o.

ATORMENTAR

Como é que consegui a Pedra, senhor? Um minuto
Eu estava lá olhando no espelho e
então o próximo ---

DUMBLEDORE

Ah, você vê apenas uma pessoa que queria
para encontrar a Pedra, encontre-a, mas não
usá-lo seria capaz de obtê-lo. Que
é uma das minhas ideias mais brilhantes. E
entre você e eu isso está dizendo alguma coisa.


ATORMENTAR

Isso significa que sem a Pedra isso
é que Voldemort nunca poderá voltar?


DUMBLEDORE

Ah, temo que existam maneiras pelas quais
ele pode retornar. Harry você sabe por que
O professor Quirrell não suportava
você tocou nele? Foi por causa
sua mãe. Ela se sacrificou
para você. E esse tipo de ato deixa
uma marca. Não, não, esse tipo de marca não pode
ser visto. Ele vive na sua pele.


ATORMENTAR

O que é?

DUMBLEDORE

Amo Harry. Amor. Cada de Bertie Bott
Sabor Feijão. Eu fui muito infeliz
na minha juventude me deparei com um sabor de vômito
um. Desde então tenho medo de ter perdido
meu gosto por eles. Mas acho que poderia
esteja seguro com um bom caramelo. Infelizmente! Cera de ouvido!


ATORMENTAR

Tudo bem, Rony?

RON WEASLEY

Tudo bem. Você?

ATORMENTAR

Tudo bem. Hermone?

HERMIONE

Nunca melhor.




DUMBLEDORE

Mais um ano que se foi. E agora como eu entendo
isso, a Copa das Casas precisa de premiação. E
os pontos ficam assim: Na quarta
lugar, Grifinória com 312 pontos. Terceiro
lugar, Lufa-Lufa com 352 pontos. Em
segundo colocado Ravenclaw com 426 pontos.
E em primeiro lugar, com 472 pontos,
Casa Sonserina.

DRACO MALFOY

Legal, cara.

DUMBLEDORE

Sim Sim. Muito bem, Sonserina. Bom trabalho
Sonserina. Contudo, os acontecimentos recentes devem
ser levado em conta. E eu tenho um
alguns pontos de última hora para conceder. Para
Senhorita Hermione Granger, pelo legal
uso do intelecto quando outros estavam em
grave perigo. 50 pontos. Em segundo lugar, ao Sr.
Ronald Weasley, para o melhor jogado
jogo de xadrez Hogwarts viu isso
muitos anos. 50 pontos. E terceiro, para
Sr. Harry Potter, por pura coragem e
coragem extraordinária. Eu premio a Grifinória
Casa 60 pontos.

HERMIONE

Estamos empatados com a Sonserina!

DUMBLEDORE

E finalmente, é preciso muito
coragem para enfrentar seus inimigos.
Mas muito mais para enfrentar
seus amigos. Eu dou 10 pontos para Neville
Longbottom. Supondo meus cálculos
estão corretos, acredito que uma mudança
da decoração está em ordem. Grifinória
ganha a Copa das Casas!

HAGRID

Sim!






- - - -

HAGRID

Venha agora. Apresse-se, você vai se atrasar!
O trem está partindo. Prossiga. Vamos, rápido
acima.

HERMIONE

Vamos Harry.

ATORMENTAR

Um minuto.

HAGRID

Pensei que você estava indo embora sem dizer
adeus, foi? Isto é para você.


ATORMENTAR

Obrigado Hagrid.

HAGRID

Oh. Prossiga. Vamos com você. Vamos com você
agora. Vamos com você. Ah, ouça, Harry.
Se aquele seu primo idiota, Dudley
te dá qualquer dor que você puder sempre hum...
ameaçá-lo, com um belo par de orelhas
para ir com aquele rabo dele.

ATORMENTAR

Mas Hagrid, não temos permissão para fazer
magia longe de Hogwarts. Você sabe disso.


HAGRID

Eu sei que. Mas seu primo não faz
ele?

HERMIONE

É estranho ir para casa, não
isto?

ATORMENTAR

Eu não vou para casa. Na verdade.



O FIM
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
