const internationalMoviesData = [
    { title: 'Parasita', country: '🇰🇷 Coreia do Sul', director: 'Bong Joon-ho', context: 'Vencedor de 4 Oscars. Mostra a desigualdade social sul-coreana.', awards: 'Palma de Ouro, Oscar', language: 'Coreano (Legendas PT-BR)', platform: 'Pluto TV', link: 'https://pluto.tv/' },
    { title: 'O Labirinto do Fauno', country: '🇪🇸 Espanha / México', director: 'Guillermo del Toro', context: 'Fábula sombria na Guerra Civil Espanhola.', awards: '3 Oscars', language: 'Espanhol (Legendas)', platform: 'Rakuten Viki', link: 'https://viki.com/' },
    { title: 'Cidade de Deus', country: '🇧🇷 Brasil', director: 'Fernando Meirelles', context: 'Retrato cru e revolucionário da favela no Rio de Janeiro.', awards: '4 indicações ao Oscar', language: 'Português', platform: 'YouTube', link: 'https://youtube.com/' },
    { title: 'Túmulo dos Vagalumes', country: '🇯🇵 Japão', director: 'Isao Takahata', context: 'Obra visceral de animação sobre sobrevivência na 2ª Guerra.', awards: 'Festival de Chicago', language: 'Japonês (Leg)', platform: 'Spcine Play', link: 'https://spcineplay.com.br/' },
    { title: 'A Caça', country: '🇩🇰 Dinamarca', director: 'Thomas Vinterberg', context: 'Destruição da inocência numa comunidade tradicional.', awards: 'Melhor Ator em Cannes', language: 'Dinamarquês (Leg)', platform: 'Plex TV', link: 'https://plex.tv/' },
    { title: 'Memórias de um Assassino', country: '🇰🇷 Coreia do Sul', director: 'Bong Joon-ho', context: 'Baseado na história real do primeiro serial killer sul-coreano.', awards: 'Festival de San Sebastián', language: 'Coreano (Leg)', platform: 'Pluto TV', link: 'https://pluto.tv/' },
    { title: 'A Separação', country: '🇮🇷 Irã', director: 'Asghar Farhadi', context: 'Conflito ético, religioso e de classes em Teerã.', awards: 'Oscar Melhor Filme Estrangeiro', language: 'Persa (Leg)', platform: 'NetMovies', link: 'https://netmovies.com.br/' },
    { title: 'Amélie Poulain', country: '🇫🇷 França', director: 'Jean-Pierre Jeunet', context: 'Magia lúdica sobre a solidão e alegria em Paris.', awards: 'César de Melhor Filme', language: 'Francês (Leg)', platform: 'YouTube', link: 'https://youtube.com/' },
    { title: 'Roma', country: '🇲🇽 México', director: 'Alfonso Cuarón', context: 'Tributo semi-autobiográfico à infância no México dos anos 70.', awards: 'Leão de Ouro, 3 Oscars', language: 'Espanhol (Leg)', platform: 'Mercado Play', link: 'https://play.mercadolivre.com.br/' },
    { title: 'In the Mood for Love', country: '🇭🇰 Hong Kong', director: 'Wong Kar-wai', context: 'O romance mais belo visualmente do século 20.', awards: 'Melhor Ator em Cannes', language: 'Cantonês (Leg)', platform: 'Sesc Digital', link: 'https://sesc.digital/' }
];

const classicMoviesData = [
    { year: 1931, title: 'Luzes da Cidade', director: 'Charles Chaplin', runtime: '87 min', history: 'Um dos maiores sucessos de Chaplin, transição do mudo.', rating: 'Livre', platforms: 'YouTube, Libreflix', desc: 'Um vagabundo se apaixona por uma florista cega e faz de tudo para ajudá-la.', alt: 'Vimeo' },
    { year: 1936, title: 'Tempos Modernos', director: 'Charles Chaplin', runtime: '87 min', history: 'Crítica atemporal à revolução industrial e ao capitalismo.', rating: 'Livre', platforms: 'Libreflix', desc: 'Chaplin luta para sobreviver nas engrenagens da sociedade industrial moderna.', alt: 'YouTube' },
    { year: 1948, title: 'Ladrões de Bicicletas', director: 'Vittorio De Sica', runtime: '89 min', history: 'O auge do Neorrealismo Italiano, filmado com não-atores.', rating: '10 anos', platforms: 'YouTube, Libreflix', desc: 'Em Roma, um pai desesperado busca a bicicleta roubada que garante seu emprego.', alt: 'Vimeo' },
    { year: 1950, title: 'A Malvada', director: 'Joseph L. Mankiewicz', runtime: '138 min', history: 'Recordista em indicações ao Oscar, retrato implacável do teatro.', rating: '12 anos', platforms: 'NetMovies', desc: 'Uma jovem ambiciosa se infiltra na vida de uma estrela consagrada da Broadway.', alt: 'YouTube' },
    { year: 1950, title: 'Crepúsculo dos Deuses', director: 'Billy Wilder', runtime: '110 min', history: 'Crítica sombria de Hollywood sobre o estrelato esquecido.', rating: '14 anos', platforms: 'Pluto TV', desc: 'Um roteirista falido se torna refém de uma ex-estrela do cinema mudo enlouquecida.', alt: 'YouTube' },
    { year: 1954, title: 'Os Sete Samurais', director: 'Akira Kurosawa', runtime: '207 min', history: 'A obra-prima de Kurosawa que redefiniu os filmes de ação.', rating: '14 anos', platforms: 'YouTube', desc: 'Uma pobre vila de fazendeiros contrata sete samurais para protegê-los de bandidos.', alt: 'Vimeo' },
    { year: 1957, title: '12 Homens e uma Sentença', director: 'Sidney Lumet', runtime: '96 min', history: 'Estudo magistral sobre moralidade inteiramente no mesmo cenário.', rating: '12 anos', platforms: 'YouTube, NetMovies', desc: 'Um membro de um júri tenta convencer os outros 11 de que o caso pode não ser tão claro assim.', alt: 'Pluto TV' },
    { year: 1958, title: 'Um Corpo que Cai', director: 'Alfred Hitchcock', runtime: '128 min', history: 'Eleito por muitos como o melhor filme já feito, mestre do suspense.', rating: '14 anos', platforms: 'NetMovies', desc: 'Um detetive aposentado com fobia de altura é contratado para seguir a esposa de um amigo.', alt: 'YouTube' },
    { year: 1959, title: 'Os Incompreendidos', director: 'François Truffaut', runtime: '99 min', history: 'Marco fundador da Nouvelle Vague Francesa.', rating: '14 anos', platforms: 'Libreflix', desc: 'A emocionante e crua jornada de amadurecimento do jovem Antoine Doinel em Paris.', alt: 'YouTube' },
    { year: 1960, title: 'Psicose', director: 'Alfred Hitchcock', runtime: '109 min', history: 'Redefiniu as regras para qual nível de violência e terror podia ser mostrado.', rating: '14 anos', platforms: 'Pluto TV, NetMovies', desc: 'Uma secretária em fuga se esconde em um motel remoto administrado por um jovem estranho.', alt: 'YouTube' },
    { year: 1964, title: 'Dr. Fantástico', director: 'Stanley Kubrick', runtime: '95 min', history: 'A maior sátira política da Guerra Fria da história.', rating: '12 anos', platforms: 'NetMovies, YouTube', desc: 'Um general insano tenta iniciar uma guerra nuclear enquanto os políticos tentam impedi-lo.', alt: 'Vimeo' },
    { year: 1966, title: 'Três Homens em Conflito', director: 'Sergio Leone', runtime: '161 min', history: 'O Spaghetti Western definitivo com a icônica trilha de Ennio Morricone.', rating: '14 anos', platforms: 'NetMovies', desc: 'Três pistoleiros competem para encontrar uma fortuna em ouro enterrada durante a Guerra Civil.', alt: 'Pluto TV' },
    { year: 1968, title: '2001: Uma Odisseia no Espaço', director: 'Stanley Kubrick', runtime: '149 min', history: 'A ficção científica mais filosoficamente ambiciosa já produzida.', rating: 'Livre', platforms: 'NetMovies, YouTube', desc: 'A humanidade embarca numa jornada épica para júpiter guiados pelo computador HAL 9000.', alt: 'Vimeo' },
    { year: 1972, title: 'O Poderoso Chefão', director: 'Francis Ford Coppola', runtime: '175 min', history: 'Transformou o cinema ao focar a máfia a partir da perspectiva interna da família.', rating: '16 anos', platforms: 'Pluto TV', desc: 'O patriarca de uma dinastia do crime organizado transfere o controle para seu filho relutante.', alt: 'NetMovies' },
    { year: 1974, title: 'Chinatown', director: 'Roman Polanski', runtime: '130 min', history: 'Visto como o roteiro mais perfeito de Hollywood.', rating: '16 anos', platforms: 'Pluto TV', desc: 'Um detetive particular em 1930 descobre uma teia de corrupção e assassinato envolvendo a água de LA.', alt: 'YouTube' },
    { year: 1976, title: 'Taxi Driver', director: 'Martin Scorsese', runtime: '114 min', history: 'Um inquietante estudo de personagem do pós-Guerra do Vietnã.', rating: '18 anos', platforms: 'NetMovies', desc: 'Um taxista isolado em Nova York entra em paranoia enquanto planeja limpar a escória da cidade.', alt: 'Pluto TV' },
    { year: 1979, title: 'Apocalypse Now', director: 'Francis Ford Coppola', runtime: '147 min', history: 'A adaptação sombria e grandiosa das loucuras da Guerra.', rating: '16 anos', platforms: 'NetMovies', desc: 'Um capitão do exército viaja rio acima no Camboja para assassinar um coronel renegado.', alt: 'YouTube' },
    { year: 1980, title: 'O Iluminado', director: 'Stanley Kubrick', runtime: '146 min', history: 'Um terror psicológico e labiríntico que assombra o cinema há décadas.', rating: '16 anos', platforms: 'Pluto TV', desc: 'Um escritor leva sua família para cuidar de um hotel isolado, onde uma presença maligna os afeta.', alt: 'YouTube' },
    { year: 1982, title: 'Blade Runner', director: 'Ridley Scott', runtime: '117 min', history: 'Definiu o conceito visual do gênero cyberpunk no cinema.', rating: '14 anos', platforms: 'NetMovies, Pluto TV', desc: 'Um policial no sombrio Los Angeles de 2019 caça androides perigosos que escaparam.', alt: 'YouTube' },
    { year: 1988, title: 'Cinema Paradiso', director: 'Giuseppe Tornatore', runtime: '155 min', history: 'A grande carta de amor apaixonada frita aos próprios cinemas de rua.', rating: '12 anos', platforms: 'Sesc Digital, Libreflix', desc: 'Um cineasta de sucesso lembra-se de como se apaixonou por filmes no cinema de sua vila.', alt: 'YouTube' },
    { year: 1993, title: 'A Lista de Schindler', director: 'Steven Spielberg', runtime: '195 min', history: 'Um memorial cruel sobre os horrores inegáveis da guerra em preto e branco.', rating: '16 anos', platforms: 'Pluto TV, NetMovies', desc: 'Em uma Polônia ocupada, um industrial alemão gradualmente passa a salvar sua força de trabalho judia.', alt: 'YouTube' },
    { year: 1994, title: 'Pulp Fiction', director: 'Quentin Tarantino', runtime: '154 min', history: 'Mistura brilhante de referências da cultura pop e estrutura episódica.', rating: '18 anos', platforms: 'Pluto TV', desc: 'Várias histórias de criminosos se entrelaçam no violento e divertido submundo de Los Angeles.', alt: 'NetMovies' },
    { year: 1994, title: 'Um Sonho de Liberdade', director: 'Frank Darabont', runtime: '142 min', history: 'Avaliado pelos públicos mundiais como um dos filmes mais inspiradores da história.', rating: '16 anos', platforms: 'NetMovies', desc: 'Dois presidiários criam um vínculo ao longo de anos num conto de redenção e esperança brilhante.', alt: 'YouTube' },
    { year: 1998, title: 'Central do Brasil', director: 'Walter Salles', runtime: '113 min', history: 'O renascimento do cinema da retomada brasileira, indicado ao Oscar.', rating: '12 anos', platforms: 'Libreflix, Vix', desc: 'Uma ex-professora amargurada cria um laço improvisado com um garoto órfão procurando pelo pai.', alt: 'YouTube' },
    { year: 1999, title: 'Matrix', director: 'The Wachowskis', runtime: '136 min', history: 'Revolucionou de vez a fotografia e estética da ação com Bullet-time.', rating: '12 anos', platforms: 'NetMovies, Pluto TV', desc: 'Um hacker descobre de rebeldes misteriosos a verdadeira essência de sua realidade e seu papel nela.', alt: 'YouTube' }
];

const moviesByGenreData = [
    {
        genre: 'Ação e Aventura',
        platformRecommendation: 'Pluto TV, Runtime',
        movies: [
            { title: 'O Último Suspiro', rating: '★★★★☆', reason: 'Excelente ritmo de suspense e ação constante.', platform: 'Pluto TV', hiddenGem: false, link: 'https://pluto.tv/' },
            { title: 'Assalto ao Poder', rating: '★★★☆☆', reason: 'Ação pura com astros.', platform: 'Mercado Play', hiddenGem: true, link: 'https://play.mercadolivre.com.br/' },
            { title: 'Django Livre', rating: '★★★★★', reason: 'Clássico moderno de Tarantino listado gratuitamente.', platform: 'Mercado Play', hiddenGem: false, link: 'https://play.mercadolivre.com.br/' },
            { title: 'Caçadores de Emoção', rating: '★★★★☆', reason: 'Ação clássica essencial.', platform: 'NetMovies', hiddenGem: false, link: 'https://netmovies.com.br/' }
        ]
    },
    {
        genre: 'Comédia e Feel-good',
        platformRecommendation: 'Vix, Pluto TV',
        movies: [
            { title: 'O Golpista do Ano', rating: '★★★★☆', reason: 'Comédia irreverente baseada em fatos reais.', platform: 'Mercado Play', hiddenGem: true, link: 'https://play.mercadolivre.com.br/' },
            { title: 'Chef', rating: '★★★★☆', reason: 'Carta de amor à gastronomia, leve e divertida.', platform: 'Vix', hiddenGem: false, link: 'https://www.vix.com/' },
            { title: 'A Mentira', rating: '★★★★☆', reason: 'Comédia teen inteligente.', platform: 'Pluto TV', hiddenGem: false, link: 'https://pluto.tv/' },
            { title: 'Antes de Partir', rating: '★★★★☆', reason: 'Emocionante e divertido para toda a família.', platform: 'Red Bull TV', hiddenGem: true, link: 'https://www.redbull.com/' }
        ]
    },
    {
        genre: 'Drama e Suspense',
        platformRecommendation: 'Sesc Digital, Spcine Play',
        movies: [
            { title: 'Whiplash', rating: '★★★★★', reason: 'Um dos filmes mais intensos da última década.', platform: 'Mercado Play', hiddenGem: false, link: 'https://play.mercadolivre.com.br/' },
            { title: 'A Caça', rating: '★★★★★', reason: 'Atuação magistral e uma reflexão social incômoda.', platform: 'Plex TV', hiddenGem: true, link: 'https://www.plex.tv/pt-br/' },
            { title: 'Preciosa', rating: '★★★★☆', reason: 'Drama brutal e recompensador, ganhador do Oscar.', platform: 'Pluto TV', hiddenGem: false, link: 'https://pluto.tv/' },
            { title: 'O Homem Duplicado', rating: '★★★★☆', reason: 'Suspense psicológico labiríntico.', platform: 'Vix', hiddenGem: true, link: 'https://www.vix.com/' }
        ]
    },
    {
        genre: 'Terror',
        platformRecommendation: 'Pluto TV (Canal Terror)',
        movies: [
            { title: 'Hereditário', rating: '★★★★★', reason: 'O terror moderno definitivo.', platform: 'Mercado Play', hiddenGem: false, link: 'https://play.mercadolivre.com.br/' },
            { title: 'A Bruxa', rating: '★★★★☆', reason: 'Terror folclórico com atmosfera arrepiante.', platform: 'NetMovies', hiddenGem: false, link: 'https://www.netmovies.com.br/' },
            { title: 'It Follows', rating: '★★★★☆', reason: 'Trilha sonora incrível.', platform: 'Pluto TV', hiddenGem: true, link: 'https://pluto.tv/' },
            { title: 'Um Lugar Silencioso', rating: '★★★★☆', reason: 'Conceito brilhante.', platform: 'Mercado Play', hiddenGem: false, link: 'https://play.mercadolivre.com.br/' }
        ]
    },
    {
        genre: 'Documentários',
        platformRecommendation: 'Libreflix, Sesc Digital',
        movies: [
            { title: 'O Dilema das Redes', rating: '★★★★☆', reason: 'Essencial para entender as redes sociais.', platform: 'YouTube', hiddenGem: false, link: 'https://youtube.com' },
            { title: 'Ilha das Flores', rating: '★★★★★', reason: 'Clássico absoluto documentário nacional.', platform: 'Libreflix', hiddenGem: false, link: 'https://libreflix.org/' },
            { title: 'Baraka', rating: '★★★★★', reason: 'Jornada visual pelo planeta sem diálogos.', platform: 'Sesc Digital', hiddenGem: true, link: 'https://sesc.digital/' },
            { title: 'Grizzly Man', rating: '★★★★☆', reason: 'Imersão na natureza humana.', platform: 'Spcine Play', hiddenGem: false, link: 'https://spcineplay.com.br/' }
        ]
    },
    {
        genre: 'Animes e Culturas Orientais',
        platformRecommendation: 'Crunchyroll, Pluto TV',
        movies: [
            { title: 'A Viagem de Chihiro', rating: '★★★★★', reason: 'A maior animação japonesa já feita.', platform: 'Netflix/JustWatch', hiddenGem: false, link: '' },
            { title: 'Akira', rating: '★★★★★', reason: 'Um marco cyberpunk.', platform: 'NetMovies', hiddenGem: false, link: '' },
            { title: 'Your Name', rating: '★★★★☆', reason: 'Emocionante e visualmente deslumbrante.', platform: 'HBO Max', hiddenGem: true, link: '' },
            { title: 'Ghost in the Shell', rating: '★★★★☆', reason: 'Pioneiro sci-fi resgatado.', platform: 'Pluto TV', hiddenGem: false, link: '' }
        ]
    },
    {
        genre: 'True Crime & Investigação',
        platformRecommendation: 'YouTube (Docs Oficiais), Pluto TV',
        movies: [
            { title: 'Zodiac', rating: '★★★★☆', reason: 'Obsessivo e detalhista.', platform: 'Max', hiddenGem: false, link: '' },
            { title: 'Making a Murderer', rating: '★★★★★', reason: 'O início da febre criminal.', platform: 'Netflix', hiddenGem: false, link: '' },
            { title: 'O Golpista do Tinder', rating: '★★★★☆', reason: 'Surpreendente do início ao fim.', platform: 'Netflix', hiddenGem: true, link: '' },
            { title: 'Sequestro no Ar', rating: '★★★☆☆', reason: 'Tensão imersiva durante o trajeto.', platform: 'Apple TV', hiddenGem: false, link: '' }
        ]
    },
    {
        genre: 'Ficção Científica',
        platformRecommendation: 'Plex TV, Runtime',
        movies: [
            { title: 'Duna', rating: '★★★★★', reason: 'Mundo construído de forma impecável.', platform: 'Max', hiddenGem: false, link: '' },
            { title: 'Interstellar', rating: '★★★★★', reason: 'Jornada emocional e épica no espaço.', platform: 'NetMovies', hiddenGem: false, link: '' },
            { title: 'A Chegada', rating: '★★★★☆', reason: 'Contato alienígena inteligente e reflexivo.', platform: 'Paramount', hiddenGem: true, link: '' },
            { title: 'Ex_Machina', rating: '★★★★☆', reason: 'Tensão psicológica sobre IA.', platform: 'Pluto TV', hiddenGem: false, link: '' }
        ]
    }
];

const seriesByGenreData = [
    {
        genre: 'Comédia e Sitcoms',
        platformRecommendation: 'Pluto TV, Vix',
        movies: [
            { title: 'The Office', rating: '★★★★★', reason: 'A sitcom definitiva.', platform: 'Prime/JustWatch', hiddenGem: false, link: '' },
            { title: 'Todo Mundo Odeia o Chris', rating: '★★★★★', reason: 'Clássico da TV.', platform: 'Pluto TV', hiddenGem: false, link: '' },
            { title: 'Brooklyn Nine-Nine', rating: '★★★★☆', reason: 'Comédia policial.', platform: 'Netflix/JustWatch', hiddenGem: false, link: '' },
            { title: 'Eu, a Patroa e as Crianças', rating: '★★★★☆', reason: 'Nostalgia pura.', platform: 'JustWatch', hiddenGem: false, link: '' },
            { title: 'Parks and Recreation', rating: '★★★★☆', reason: 'Humor leve e cativante.', platform: 'JustWatch', hiddenGem: true, link: '' }
        ]
    },
    {
        genre: 'Drama e Tensão',
        platformRecommendation: 'Vix, Mercado Play',
        movies: [
            { title: 'Breaking Bad', rating: '★★★★★', reason: 'A obra-prima moderna.', platform: 'Netflix/JustWatch', hiddenGem: false, link: '' },
            { title: 'Peaky Blinders', rating: '★★★★☆', reason: 'Máfia na Inglaterra.', platform: 'Netflix/JustWatch', hiddenGem: false, link: '' },
            { title: 'Chernobyl', rating: '★★★★★', reason: 'Desastre dramático.', platform: 'Max/JustWatch', hiddenGem: true, link: '' },
            { title: 'Prison Break', rating: '★★★★☆', reason: 'Fuga eletrizante.', platform: 'JustWatch', hiddenGem: false, link: '' },
            { title: 'Mr. Robot', rating: '★★★★★', reason: 'Hacking profundo.', platform: 'Prime', hiddenGem: true, link: '' }
        ]
    },
    {
        genre: 'Sci-Fi e Fantasia',
        platformRecommendation: 'Pluto TV',
        movies: [
            { title: 'Stranger Things', rating: '★★★★☆', reason: 'Vibe anos 80.', platform: 'Netflix/JustWatch', hiddenGem: false, link: '' },
            { title: 'Dark', rating: '★★★★★', reason: 'Quebra-cabeça temporal.', platform: 'Netflix/JustWatch', hiddenGem: true, link: '' },
            { title: 'Doctor Who', rating: '★★★★☆', reason: 'Clássico sci-fi.', platform: 'Pluto TV', hiddenGem: false, link: '' },
            { title: 'The Boys', rating: '★★★★☆', reason: 'Heróis distorcidos.', platform: 'Prime', hiddenGem: false, link: '' },
            { title: 'Black Mirror', rating: '★★★★★', reason: 'Distopia.', platform: 'Netflix', hiddenGem: false, link: '' }
        ]
    },
    {
        genre: 'Ação e Aventura',
        platformRecommendation: 'Mercado Play',
        movies: [
            { title: 'The Last of Us', rating: '★★★★★', reason: 'Sobrevivência pós-apocalíptica.', platform: 'Max/JustWatch', hiddenGem: false, link: '' },
            { title: 'Vikings', rating: '★★★★☆', reason: 'Batalhas nórdicas.', platform: 'Netflix/JustWatch', hiddenGem: false, link: '' },
            { title: 'The Witcher', rating: '★★★★☆', reason: 'Magia e monstros.', platform: 'Netflix/JustWatch', hiddenGem: false, link: '' },
            { title: 'Cobra Kai', rating: '★★★★☆', reason: 'Karatê de nostalgia.', platform: 'Netflix/JustWatch', hiddenGem: false, link: '' }
        ]
    }
];

const liveChannelsData = [
    { name: 'CazéTV', category: 'Futebol & Transmissões', current: 'Esportes Ao Vivo 24/7', img: 'https://images.unsplash.com/photo-1518605368461-1ee7a52e519e?auto=format&fit=crop&w=600&q=80', link: 'https://www.youtube.com/@CazeTV' },
    { name: 'Pluto TV Cine', category: 'Sessão Cinema', current: 'Acervo de Ação & Comédia', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80', link: 'https://pluto.tv/pt/live-tv/5eac97fe6bde95000780287a' },
    { name: 'Runtime Pipoca', category: 'Maratona', current: 'Clássicos de Hollywood', img: 'https://images.unsplash.com/photo-1595769816263-9b9a078028ef?auto=format&fit=crop&w=600&q=80', link: 'https://www.runtime.tv/live-tv/runtime-cine-e-series' },
    { name: 'Red Bull TV', category: 'Adrenalina', current: 'Esportes Radicais', img: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80', link: 'https://www.redbull.com/br-pt/discover' },
    { name: 'Record News', category: 'Jornalismo', current: 'Cobertura Global Ao Vivo', img: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=600&q=80', link: 'https://www.youtube.com/@RecordNews' },
    { name: 'SBT News', category: 'Jornalismo Brasil', current: 'Noticiário em Tempo Real', img: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&w=600&q=80', link: 'https://www.youtube.com/@sbtnews' }
];

const animeChannelsData = [
    { name: 'Pluto TV Anime', category: 'Canal Oficial 24h', current: 'Naruto, Bleach, Yashahime', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', link: 'https://pluto.tv/pt/' },
    { name: 'Crunchyroll Brasil', category: 'YouTube TV (Grátis)', current: 'Episódios Dublados Inteiros', img: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?auto=format&fit=crop&w=600&q=80', link: 'https://www.youtube.com/@CrunchyrollPT' },
    { name: 'NetMovies Anime', category: 'Clássicos Livres', current: 'Acervo Nostálgico Legalizado', img: 'https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=600&q=80', link: 'https://www.youtube.com/@NetmoviesAnime' },
    { name: 'Vix Animes Grátis', category: 'Sessão On-Demand', current: 'Animes e Séries Tokusatsu', img: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=600&q=80', link: 'https://www.vix.com/' }
];

// --- AUTO-HYDRATOR FOR IMAGES AND LINKS ---
const initImagesAndLinks = () => {
    const hydrate = (movies) => {
        movies.forEach(m => {
            m.img = `https://placehold.co/300x450/1e293b/FFFFFF?text=${encodeURIComponent(m.title)}`;
            m.link = `https://www.justwatch.com/br/busca?q=${encodeURIComponent(m.title)}`;
        });
    };
    hydrate(internationalMoviesData);
    hydrate(classicMoviesData);
    moviesByGenreData.forEach(g => hydrate(g.movies));
    seriesByGenreData.forEach(g => hydrate(g.movies));
};
initImagesAndLinks();

const platformsData = [
    { name: 'Pluto TV', catalog: 'Milhares de filmes, séries e animes', quality: '1080p', ads: 'Média (A cada 15 min)', devices: 'Smart TV, PC, Mobile', registration: 'Não', features: 'Canais ao vivo e On Demand', link: 'https://pluto.tv', highlight: 'Melhor para Filmes 🏆' },
    { name: 'Mercado Play', catalog: 'Grandes sucessos de Hollywood e séries', quality: '1080p', ads: 'Baixa', devices: 'PC, Mobile (App ML)', registration: 'Sim (Conta Mercado Livre)', features: 'Produções de alto orçamento gratuitas', link: 'https://play.mercadolivre.com.br/', highlight: 'Melhor para Séries 🏆' },
    { name: 'Libreflix', catalog: 'Centenas de produções independentes', quality: '720p/1080p', ads: 'Sem anúncios', devices: 'PC, Mobile', registration: 'Não', features: 'Plataforma open-source colaborativa', link: 'https://libreflix.org/', highlight: 'Melhor para Documentários 🏆' },
    { name: 'Vix', catalog: 'Séries, novelas latinas e filmes', quality: '1080p', ads: 'Média', devices: 'TV, PC, Mobile', registration: 'Não', features: 'Foco em conteúdo latino e novelas', link: 'https://www.vix.com', highlight: null },
    { name: 'NetMovies', catalog: 'Mais de 2.000 títulos clássicos e nacionais', quality: '1080p', ads: 'Média', devices: 'TV, PC, Mobile, YouTube', registration: 'Não (Direto no YouTube)', features: 'Canal forte no YouTube', link: 'https://www.netmovies.com.br/', highlight: null },
    { name: 'Plex TV', catalog: 'Mais de 50.000 títulos e +200 canais', quality: '1080p', ads: 'Média', devices: 'TV, PC, Mobile', registration: 'Sim (Opcional)', features: 'Também serve para organizar seus próprios arquivos', link: 'https://www.plex.tv/pt-br/', highlight: null },
    { name: 'Runtime', catalog: 'Mais de 5.000 filmes e séries baseados em ação', quality: '720p', ads: 'Alta', devices: 'TV, PC, Mobile', registration: 'Não', features: 'Canais temáticos por gênero', link: 'https://www.runtime.tv/', highlight: null },
    { name: 'Rakuten Viki', catalog: 'Maior acervo asiático (Doramas / K-Dramas)', quality: '1080p', ads: 'Média', devices: 'TV, PC, Mobile', registration: 'Sim', features: 'Legendas feitas por fãs, comunidade ativa', link: 'https://www.viki.com/', highlight: null },
    { name: 'Crunchyroll (Grátis)', catalog: 'Mais de 1.000 animes', quality: '1080p', ads: 'Alta', devices: 'TV, PC, Mobile', registration: 'Sim', features: 'Episódios 1 semana depois do Japão', link: 'https://www.crunchyroll.com/', highlight: null },
    { name: 'Spcine Play', catalog: 'Cinema brasileiro, mostras e festivais', quality: '1080p', ads: 'Sem anúncios', devices: 'PC, Mobile', registration: 'Sim (Looke)', features: 'Filmes curados por especialistas', link: 'https://spcineplay.com.br/', highlight: null },
    { name: 'Sesc Digital', catalog: 'Séries, curtas e documentários artísticos', quality: '1080p', ads: 'Sem anúncios', devices: 'PC, Mobile', registration: 'Não', features: 'Acervo histórico de altíssima qualidade cultural', link: 'https://sesc.digital/', highlight: null },
    { name: 'Red Bull TV', catalog: 'Esportes, música e cultura pop', quality: '4K/1080p', ads: 'Baixa', devices: 'TV, PC, Mobile', registration: 'Não', features: 'Melhor qualidade de imagem e eventos ao vivo', link: 'https://www.redbull.com/br-pt/discover', highlight: null },
    { name: 'YouTube (Filmes)', catalog: 'Mais de 500 filmes oficiais no YouTube', quality: '1080p', ads: 'Média', devices: 'TV, PC, Mobile', registration: 'Não', features: 'O formato de mais fácil acesso universal', link: 'https://www.youtube.com', highlight: null },
    { name: 'Afroflix', catalog: 'Filmes focados na cultura negra', quality: '720p/1080p', ads: 'Sem anúncios', devices: 'PC, Mobile', registration: 'Não', features: 'Valorização da cultura negra brasileira', link: 'https://www.afroflix.com.br/', highlight: null },
    { name: '+SBT', catalog: 'Novelas, programas do SBT e filmes variados', quality: '1080p', ads: 'Média', devices: 'TV, PC, Mobile', registration: 'Sim', features: 'Nostalgia da TV aberta no formato on-demand', link: 'https://mais.sbt.com.br/', highlight: null }
];

document.addEventListener('DOMContentLoaded', () => {
    // Theme setup local storage persist
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('cinelivre_theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerText = '☀️ Tema Claro';
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('cinelivre_theme', 'light');
            themeToggleBtn.innerText = '🌙 Tema Escuro';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('cinelivre_theme', 'dark');
            themeToggleBtn.innerText = '☀️ Tema Claro';
        }
    });

    // Mobile Menu logic
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    
    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Application Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const pageTitle = document.getElementById('page-title');
    const contentArea = document.getElementById('content-area');

    const titles = {
        'dashboard': 'Painel de Controle Mestre',
        'canais': '🔴 TV Ao Vivo Gratuita (Zapping)',
        'animes': '⛩️ Mundo Anime (Grátis)',
        'plataformas': 'Plataformas Gratuitas (Descoberta)',
        'generos': 'Explorar por Gênero',
        'series': 'Séries Recomendadas',
        'classicos': 'Arquivo de Cinema Clássico',
        'internacional': 'Cinema Internacional',
        'maratona': 'Arquiteto de Maratonas',
        'joias': 'Garimpeiro de Joias Escondidas'
    };

    // Renderers engine
    const renderers = {
        'dashboard': () => {
            const seriesLocal = JSON.parse(localStorage.getItem('cinelivre_tracker')) || [];
            let inProgressText = seriesLocal.length > 0 
                ? `<p style="margin-top: 10px;">🕒 Você está acompanhando <strong>${seriesLocal.length} série(s)</strong> no <a href="#" onclick="document.querySelector('[data-target=\\'rastreador\\']').click(); return false;" style="color: var(--primary-color);">Rastreador</a>.</p>`
                : `<p style="margin-top: 10px;">Nenhuma série iniciada. Vá até o <strong>Rastreador Inteligente</strong> para adicionar o seu progresso!</p>`;

            const randClassic = classicMoviesData[Math.floor(Math.random() * classicMoviesData.length)] || classicMoviesData[0];
            const randIntl = internationalMoviesData[Math.floor(Math.random() * internationalMoviesData.length)] || internationalMoviesData[0];
            const randGenCat = moviesByGenreData[Math.floor(Math.random() * moviesByGenreData.length)];
            const randGenre = randGenCat.movies[Math.floor(Math.random() * randGenCat.movies.length)];

            return `
                <div class="card" style="margin-bottom: 20px; text-align: center; background: linear-gradient(to right, #0f172a, #1e293b); color: white; padding: 40px 20px; border-radius: 12px; border-bottom: 4px solid var(--primary-color);">
                    <h2 style="font-size: 2.5em; margin-bottom: 10px; color: #fff;">Bem-vindo ao CineLivre 🍿</h2>
                    <p style="font-size: 1.1em; opacity: 0.9;">O seu hub definitivo de curadoria de streaming gratuito.</p>
                </div>
                
                <div class="ad-banner" style="margin-bottom: 20px;">
                    <span style="display:block; font-size: 0.75em; text-transform: uppercase; margin-bottom: 5px;">Espaço Publicitário</span>
                    [ Anúncio 728x90 - Google AdSense (Reserva) ]
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px;">
                    <div class="card" style="border-top: 4px solid var(--accent-color);">
                        <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">⭐ Watchlist Rápida</h3>
                        ${inProgressText}
                    </div>

                    <div class="card" style="border-top: 4px solid #10b981;">
                        <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">⚡ Acesso Rápido</h3>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <a href="https://pluto.tv/pt/on-demand" target="_blank" class="btn" style="background:#0f172a; flex:1; text-align:center;">▶ Pluto TV</a>
                            <a href="https://www.vix.com/pt/explore" target="_blank" class="btn" style="background:#ec4899; flex:1; text-align:center;">▶ Vix</a>
                            <a href="https://play.mercadolivre.com.br/" target="_blank" class="btn" style="background:#fbbf24; color: black !important; flex:1; text-align:center;">▶ Mercado Play</a>
                            <a href="https://www.youtube.com/feed/storefront?bp=kgUCcGFn" target="_blank" class="btn" style="background:#ef4444; flex:1; text-align:center;">▶ YouTube</a>
                        </div>
                    </div>
                    
                    <div class="card" style="grid-column: 1 / -1; border-top: 4px solid #8b5cf6;">
                        <h3 style="margin-bottom: 15px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">🏆 Canais de TV Ao Vivo (Esportes e Filmes)</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                            <a href="https://pluto.tv/pt/live-tv/5eac97fe6bde95000780287a" target="_blank" style="text-decoration:none;">
                                <div style="background: #0f172a; color: white; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid var(--border-color); transition: transform 0.2s;">
                                    <h4 style="margin-bottom: 5px;">Pluto TV Cine 🎬</h4>
                                </div>
                            </a>
                            <a href="https://www.youtube.com/@CazeTV" target="_blank" style="text-decoration:none;">
                                <div style="background: #ef4444; color: white; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid var(--border-color); transition: transform 0.2s;">
                                    <h4 style="margin-bottom: 5px;">CazéTV (Esportes) ⚽</h4>
                                </div>
                            </a>
                            <a href="https://pluto.tv/pt/live-tv/5f4e6677f525540007ea462f" target="_blank" style="text-decoration:none;">
                                <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid var(--border-color); transition: transform 0.2s;">
                                    <h4 style="margin-bottom: 5px;">Pluto Esportes 🏆</h4>
                                </div>
                            </a>
                            <a href="https://www.runtime.tv/live-tv/runtime-cine-e-series" target="_blank" style="text-decoration:none;">
                                <div style="background: #fbbf24; color: black; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid var(--border-color); transition: transform 0.2s;">
                                    <h4 style="margin-bottom: 5px;">Runtime Pipoca 🍿</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <h2 style="margin: 30px 0 15px 0; color: var(--text-color); border-bottom: 2px solid var(--border-color); padding-bottom: 10px;"><span style="color: var(--primary-color);">🎲</span> Previews Aleatórios para Você</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    
                    <!-- Preview Clássico -->
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                        <a href="${randClassic.link}" target="_blank" style="display: block;">
                            <img src="${randClassic.img}" alt="Clássicos" style="width: 100%; height: 260px; object-fit: cover;">
                        </a>
                        <div style="padding: 15px; flex: 1; display: flex; flex-direction: column;">
                            <span class="platform-badge" style="align-self: flex-start; margin-bottom: 10px; background-color: var(--accent-color);">Clássico Sorteado</span>
                            <h4 style="color: var(--primary-color); font-size: 1.25em;">${randClassic.title} (${randClassic.year})</h4>
                            <p style="font-size: 0.85em; margin: 10px 0; flex: 1;">"${randClassic.desc}"</p>
                            <p style="font-size: 0.8em; font-weight: bold;">Grátis em: ${randClassic.platforms}</p>
                            <a href="${randClassic.link}" target="_blank" class="btn" style="margin-top: 15px; text-align: center; width: 100%;">▶ Buscar JustWatch</a>
                        </div>
                    </div>

                    <!-- Preview Internacional -->
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                        <a href="${randIntl.link}" target="_blank" style="display: block;">
                            <img src="${randIntl.img}" alt="Mundo" style="width: 100%; height: 260px; object-fit: cover;">
                        </a>
                        <div style="padding: 15px; flex: 1; display: flex; flex-direction: column;">
                            <span class="platform-badge" style="align-self: flex-start; margin-bottom: 10px; background-color: #3b82f6;">Cinema Internacional</span>
                            <h4 style="color: var(--primary-color); font-size: 1.25em;">${randIntl.title}</h4>
                            <p style="font-size: 0.85em; margin: 10px 0; flex: 1;">"${randIntl.context}"</p>
                            <p style="font-size: 0.8em; font-weight: bold;">${randIntl.country} • ${randIntl.platform}</p>
                            <a href="${randIntl.link}" target="_blank" class="btn" style="margin-top: 15px; text-align: center; width: 100%;">▶ Buscar JustWatch</a>
                        </div>
                    </div>

                    <!-- Preview Gênero -->
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                        <a href="${randGenre.link}" target="_blank" style="display: block;">
                            <img src="${randGenre.img}" alt="Filmes" style="width: 100%; height: 260px; object-fit: cover;">
                        </a>
                        <div style="padding: 15px; flex: 1; display: flex; flex-direction: column;">
                            <span class="platform-badge" style="align-self: flex-start; margin-bottom: 10px; background-color: #f59e0b;">Destaque em ${randGenCat.genre}</span>
                            <h4 style="color: var(--primary-color); font-size: 1.25em;">${randGenre.title}</h4>
                            <p style="font-size: 0.85em; margin: 10px 0; flex: 1;">"${randGenre.reason}"</p>
                            <p style="font-size: 0.8em; font-weight: bold;">${randGenre.rating} • ${randGenre.platform}</p>
                            <a href="${randGenre.link}" target="_blank" class="btn" style="margin-top: 15px; text-align: center; width: 100%;">▶ Buscar JustWatch</a>
                        </div>
                    </div>

                </div>
            `;
        },
        'plataformas': () => {
            let html = '<p style="margin-bottom: 20px; font-size: 1.1em;">Descubra 15 plataformas 100% legais e gratuitas disponíveis no Brasil. Explore e escolha o que melhor se adapta a você!</p>';
            html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">';
            
            const gifPool = [
                'https://media.giphy.com/media/26ufncGZtAih20xZm/giphy.gif',
                'https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif',
                'https://media.giphy.com/media/3o7rc0qU6m5hneMsru/giphy.gif',
                'https://media.giphy.com/media/rTigf3I7WzN7O/giphy.gif',
                'https://media.giphy.com/media/l41lUSJpbX2PZ4Nxe/giphy.gif',
                'https://media.giphy.com/media/JkI07Ym8e5i4U/giphy.gif',
                'https://media.giphy.com/media/HSDTcqlNCdPEs/giphy.gif'
            ];

            platformsData.forEach((p, idx) => {
                const highlightBadge = p.highlight ? `<span class="platform-badge" style="position:absolute; top:10px; right:10px; z-index:2; background-color: var(--accent-color); font-size: 0.7em;">${p.highlight}</span>` : '';
                const gif = gifPool[idx % gifPool.length];
                
                html += `
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; position: relative; display: flex; flex-direction: column;">
                        ${highlightBadge}
                        <div style="height: 140px; overflow: hidden; position: relative;">
                            <img src="${gif}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;" alt="GIF preview">
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(15,23,42,1) 10%, transparent); height: 60%;"></div>
                        </div>
                        <div style="padding: 15px; display: flex; flex-direction: column; flex: 1;">
                            <h3 style="color: var(--primary-color); font-size: 1.4em; margin-bottom: 10px;">${p.name}</h3>
                            <div style="font-size: 0.85em; line-height: 1.6; margin-bottom: 15px; flex: 1;">
                                <p style="margin-bottom: 8px;"><strong>Catálogo:</strong> <span style="background:var(--bg-color); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color);">${p.catalog}</span></p>
                                <p><strong>📺 Dispositivos:</strong> ${p.devices}</p>
                                <p><strong>⚙️ Specs:</strong> ${p.quality} | Anúncios: ${p.ads}</p>
                                <p><strong>🔐 Cadastro:</strong> ${p.registration}</p>
                                <p style="margin-top: 8px; font-style: italic;">"${p.features}"</p>
                            </div>
                            <a href="${p.link}" target="_blank" class="btn" style="text-align: center; width: 100%;">Acessar ${p.name}</a>
                        </div>
                    </div>
                `;
            });
            
            html += '</div>';
            return html;
        },
        'animes': () => {
            let html = '<div class="card" style="margin-bottom: 20px;">';
            html += '<h2 style="color: #f59e0b;">⛩️ Mundo Anime (24h)</h2>';
            html += '<p style="margin-top: 10px;">Acesso dinâmico aos melhores simulcasts e canais 24 horas focados na cultura pop oriental. Opções 100% legalizadas e gratuitas!</p>';
            html += '</div>';

            html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">';
            animeChannelsData.forEach(c => {
                html += `
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border-top: 4px solid #f59e0b;">
                        <a href="${c.link}" target="_blank" style="display: block; position: relative;">
                            <span class="platform-badge" style="position: absolute; top:10px; left:10px; background-color: #f59e0b; z-index:2;">🔴 AO VIVO</span>
                            <img src="${c.img}" alt="${c.name}" style="width: 100%; height: 180px; object-fit: cover; opacity: 0.9;">
                        </a>
                        <div style="padding: 15px; flex: 1; display: flex; flex-direction: column;">
                            <span style="font-size: 0.75em; text-transform: uppercase; color: var(--text-color); letter-spacing: 1px; margin-bottom: 5px;">${c.category}</span>
                            <h3 style="color: var(--primary-color); font-size: 1.3em;">${c.name}</h3>
                            <p style="font-size: 0.9em; margin: 10px 0; flex: 1;"><strong>No Ar:</strong> ${c.current}</p>
                            <a href="${c.link}" target="_blank" class="btn" style="text-align: center; width: 100%; background: #f59e0b; color: #000; font-weight: bold;">▶ Assistir Agora</a>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            return html;
        },
        'canais': () => {
            let html = '<div class="card" style="margin-bottom: 20px;">';
            html += '<h2 style="color: #ef4444;">Guia de TV Ao Vivo 🔴</h2>';
            html += '<p style="margin-top: 10px;">Faça um zapping interativo pelos melhores canais 24h em tempo real! Tudo grátis e legalizado pelas emissoras e plataformas oficiais.</p>';
            html += '</div>';

            html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">';
            liveChannelsData.forEach(c => {
                html += `
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                        <a href="${c.link}" target="_blank" style="display: block; position: relative;">
                            <span class="platform-badge" style="position: absolute; top:10px; left:10px; background-color: #ef4444; z-index:2; animation: blink 2s infinite;">🔴 AO VIVO</span>
                            <img src="${c.img}" alt="${c.name}" style="width: 100%; height: 180px; object-fit: cover; opacity: 0.9;">
                        </a>
                        <div style="padding: 15px; flex: 1; display: flex; flex-direction: column;">
                            <span style="font-size: 0.75em; text-transform: uppercase; color: var(--text-color); letter-spacing: 1px; margin-bottom: 5px;">${c.category}</span>
                            <h3 style="color: var(--primary-color); font-size: 1.3em;">${c.name}</h3>
                            <p style="font-size: 0.9em; margin: 10px 0; flex: 1;"><strong>No Ar:</strong> ${c.current}</p>
                            <a href="${c.link}" target="_blank" class="btn" style="text-align: center; width: 100%; background: #ef4444; color: white;">Assistir no Estúdio</a>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            return html;
        },
        'series': () => {
            let html = '<div class="ad-banner" style="margin-bottom: 20px;"><span style="display:block; font-size: 0.75em; text-transform: uppercase; margin-bottom: 5px;">Espaço Publicitário</span>[ Anúncio 728x90 ]</div>';
            html += '<p style="margin-bottom: 20px; font-size: 1.1em;">Guia de Séries! Selecionamos as <strong>melhores séries disponíveis</strong> para maratonar. (Clique para buscar onde assistir de graça ou via assinatura).</p>';
            html += '<div class="grid-container">';
            
            seriesByGenreData.forEach(g => {
                let moviesHtml = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-top: 15px;">';
                g.movies.forEach(m => {
                    const gemBadge = m.hiddenGem ? '<span class="platform-badge" style="background-color: #8b5cf6; padding: 2px 6px; font-size: 0.7rem; position: absolute; top: 10px; right: 10px;">💎 Joia</span>' : '';
                    moviesHtml += `
                        <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; position: relative;">
                            ${gemBadge}
                            <img src="${m.img}" alt="${m.title}" style="width: 100%; height: 250px; object-fit: cover;">
                            <div style="padding: 15px; display: flex; flex-direction: column; flex: 1;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                    <strong>${m.title}</strong>
                                </div>
                                <span style="color: #f59e0b; font-size: 0.85em; margin: 5px 0;">${m.rating}</span>
                                <p style="font-size: 0.85em; margin: 6px 0; color: var(--text-color); flex: 1;"><em>"${m.reason}"</em></p>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                                    <span class="platform-pill">${m.platform}</span>
                                </div>
                                <a href="${m.link}" target="_blank" class="btn" style="margin-top: 15px; text-align: center;">▶ Buscar JustWatch</a>
                            </div>
                        </div>
                    `;
                });
                moviesHtml += '</div>';

                html += `
                    <div style="margin-bottom: 30px; grid-column: 1 / -1;">
                        <h3 style="color: var(--primary-color); font-size: 1.6em; border-bottom: 2px solid var(--border-color); padding-bottom: 10px;">${g.genre}</h3>
                        ${moviesHtml}
                    </div>
                `;
            });

            html += '</div>';
            return html;
        },
        'generos': () => {
            let html = '<p style="margin-bottom: 20px; font-size: 1.1em;">Guia de conteúdo organizado por gênero. Selecionamos <strong>mais de 30 títulos indispensáveis</strong>!</p>';
            html += '<div class="grid-container">';
            
            moviesByGenreData.forEach(g => {
                let moviesHtml = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-top: 15px;">';
                g.movies.forEach(m => {
                    const gemBadge = m.hiddenGem ? '<span class="platform-badge" style="background-color: #8b5cf6; padding: 2px 6px; font-size: 0.7rem; position: absolute; top: 10px; right: 10px;">💎 Joia Oculta</span>' : '';
                    moviesHtml += `
                        <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; position: relative;">
                            ${gemBadge}
                            <img src="${m.img}" alt="${m.title}" style="width: 100%; height: 250px; object-fit: cover;">
                            <div style="padding: 15px; display: flex; flex-direction: column; flex: 1;">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                    <strong>${m.title}</strong>
                                </div>
                                <span style="color: #f59e0b; font-size: 0.85em; margin: 5px 0;">${m.rating}</span>
                                <p style="font-size: 0.85em; margin: 6px 0; color: var(--text-color); flex: 1;"><em>"${m.reason}"</em></p>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                                    <span class="platform-pill">${m.platform}</span>
                                </div>
                                <a href="${m.link}" target="_blank" class="btn" style="margin-top: 15px; text-align: center;">▶ Buscar JustWatch</a>
                            </div>
                        </div>
                    `;
                });
                moviesHtml += '</div>';

                html += `
                    <div style="margin-bottom: 30px; grid-column: 1 / -1;">
                        <h3 style="color: var(--primary-color); font-size: 1.6em; border-bottom: 2px solid var(--border-color); padding-bottom: 10px;">${g.genre}</h3>
                        <p style="font-size: 0.85em; margin-top: 10px;"><strong>Fontes recomendadas:</strong> ${g.platformRecommendation}</p>
                        ${moviesHtml}
                    </div>
                `;
            });

            html += '</div>';
            return html;
        },
        'classicos': () => {
            let html = '<div class="card" style="margin-bottom: 20px;">';
            html += '<h2 style="color: var(--primary-color);">Cápsula do Tempo: 25 Clássicos Atemporais 🎞️</h2>';
            html += '<p style="margin-top: 10px;">Organizamos (1930 a 2000) a <b>coleção definitiva</b> de obras que moldaram o cinema.</p>';
            html += '</div>';

            html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">';
            classicMoviesData.forEach(c => {
                html += `
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; border-top: 4px solid var(--accent-color);">
                        <img src="${c.img}" alt="${c.title}" style="width: 100%; height: 300px; object-fit: cover;">
                        <div style="padding: 15px; display: flex; flex-direction: column; flex: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 12px;">
                                <h3 style="font-size: 1.3em; margin: 0; color: var(--primary-color);">${c.year} – ${c.title}</h3>
                                <span class="platform-badge" style="background-color: #333; flex-shrink: 0; margin-left: 10px;">${c.rating}</span>
                            </div>
                            <p style="font-size: 0.9em; font-style: italic; color: var(--text-color); margin-bottom: 12px; flex: 1;">"${c.desc}"</p>
                            <div style="font-size: 0.85em; margin-bottom: 15px; border-left: 2px solid var(--border-color); padding-left: 10px;">
                                <p><strong>🎬 Dir:</strong> ${c.director}</p>
                                <p><strong>⏳ Dur:</strong> ${c.runtime}</p>
                                <p><strong>🏛️ Hist:</strong> ${c.history}</p>
                            </div>
                            <div style="margin-bottom: 15px; background-color: var(--sidebar-hover); padding: 10px; border-radius: 8px; font-size: 0.85em;">
                                <strong>Grátis em:</strong> <span style="color: var(--primary-color);">${c.platforms}</span>
                            </div>
                            <a href="${c.link}" target="_blank" class="btn" style="text-align: center;">▶ Buscar JustWatch</a>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            return html;
        },
        'internacional': () => {
            let html = '<div class="card" style="margin-bottom: 20px;">';
            html += '<h2 style="color: var(--primary-color);">Cinema Mundial & Gateways Culturais 🌍</h2>';
            html += '<p style="margin-top: 10px;">Uma volta ao mundo através do cinema. Obras aclamadas pela crítica mundial, prontas para assistir gratuitamente.</p>';
            html += '</div>';

            html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">';
            internationalMoviesData.forEach(i => {
                html += `
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; border-top: 4px solid var(--primary-color);">
                        <img src="${i.img}" alt="${i.title}" style="width: 100%; height: 320px; object-fit: cover;">
                        <div style="padding: 15px; display: flex; flex-direction: column; flex: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <h3 style="color: var(--primary-color); font-size: 1.25em;">${i.title}</h3>
                                <span class="platform-pill" style="font-size: 0.75em; flex-shrink: 0; background-color: #333; color: white;">${i.country}</span>
                            </div>
                            <p style="margin-top: 10px; font-size: 0.9em; font-style: italic; flex: 1;">"${i.context}"</p>
                            <ul style="list-style: none; padding: 0; margin-top: 10px; font-size: 0.85em; line-height: 1.6; margin-bottom: 15px;">
                                <li><strong>🎬 Diretor:</strong> ${i.director}</li>
                                <li><strong>🏆 Prêmios:</strong> ${i.awards}</li>
                                <li><strong>🗣️ Áudio:</strong> ${i.language}</li>
                                <li><strong>📺 Grátis em:</strong> ${i.platform}</li>
                            </ul>
                            <a href="${i.link}" target="_blank" class="btn" style="text-align: center; width: 100%;">▶ Buscar JustWatch</a>
                        </div>
                    </div>
                `;
            });
            html += '</div>';

            return html;
        },
        'maratona': () => {
            let html = '<div class="card" style="margin-bottom: 20px;">';
            html += '<h2 style="color: var(--primary-color);">Arquiteto de Maratonas (12 Horas) ⏱️🍿</h2>';
            html += '<p style="margin-top: 10px;">Planejamos as maratonas perfeitas de 12 horas para o seu fim de semana usando exclusivamente o catálogo gratuito mapeado! Escolha a <i>vibe</i> e siga o roteiro com suas devidas pausas.</p>';
            html += '</div>';

            html += `
                <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
                    <!-- MARATONA 1 -->
                    <div class="card platform-card" style="flex: 1; min-width: 300px; border-top: 4px solid #ef4444;">
                        <h3 style="color: #ef4444; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">💥 Ação & Suspense Frito</h3>
                        <p style="font-size: 0.85em; margin: 10px 0;"><strong>Ritmo:</strong> Frenético, adrenalina alta.</p>

                        <ul style="list-style: none; font-size: 0.9em; padding: 0; line-height: 1.6;">
                            <li><strong>10:00 - 12:00:</strong> Caçadores de Emoção (NetMovies)</li>
                            <li style="color: var(--primary-color); font-size: 0.85em;">⏸️ <em>12:00 - 13:00: Pausa para o Almoço</em></li>
                            <li><strong>13:00 - 15:00:</strong> Um Lugar Silencioso (Mercado Play)</li>
                            <li><strong>15:00 - 17:00:</strong> Blade Runner (Pluto TV)</li>
                            <li style="color: var(--primary-color); font-size: 0.85em;">⏸️ <em>17:00 - 17:30: Lanche Rápido & Café</em></li>
                            <li><strong>17:30 - 20:00:</strong> Django Livre (Mercado Play)</li>
                            <li style="color: var(--primary-color); font-size: 0.85em;">⏸️ <em>20:00 - 20:30: Pausa pro Jantar Delivery</em></li>
                            <li><strong>20:30 - 22:45:</strong> Matrix (Pluto TV)</li>
                        </ul>
                    </div>

                    <!-- MARATONA 2 -->
                    <div class="card platform-card" style="flex: 1; min-width: 300px; border-top: 4px solid #f59e0b;">
                        <h3 style="color: #f59e0b; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">😂 Comédia & Domingueira</h3>
                        <p style="font-size: 0.85em; margin: 10px 0;"><strong>Ritmo:</strong> Leve, divertido e perfeito para família.</p>

                        <ul style="list-style: none; font-size: 0.9em; padding: 0; line-height: 1.6;">
                            <li><strong>12:00 - 13:50:</strong> Chef (Vix)</li>
                            <li><strong>13:50 - 15:40:</strong> A Mentira (Pluto TV)</li>
                            <li style="color: var(--primary-color); font-size: 0.85em;">⏸️ <em>15:40 - 16:10: Tarde do Café e Sobremesa</em></li>
                            <li><strong>16:10 - 17:50:</strong> O Golpista do Ano (Mercado Play)</li>
                            <li><strong>17:50 - 19:40:</strong> Antes de Partir (Red Bull TV)</li>
                            <li style="color: var(--primary-color); font-size: 0.85em;">⏸️ <em>19:40 - 21:00: Pausa Longa Jantar/Banho</em></li>
                            <li><strong>21:00 - 23:30:</strong> O Auto da Compadecida (Libreflix/NetMovies)</li>
                        </ul>
                    </div>
                </div>
            `;
            return html;
        },
        'joias': () => {
            let html = '<div class="card" style="margin-bottom: 20px;">';
            html += '<h2 style="color: var(--primary-color);">Garimpeiro de Joias Escondidas 💎</h2>';
            html += '<p style="margin-top: 10px;">O outro lado da moeda: plataformas 100% de nicho, alternativas e gratuitas. Explorando o fundo do oceano com visuais impressionantes.</p>';
            html += '</div>';

            const joiasData = [
                { name: 'Itaú Cultural Play', type: 'Cinema Nacional de Arte', interface: 'Ótima', mobile: 'Sim (App)', geo: 'Brasil', login: 'Sim (Gratuito)', security: 'Oficial e Seguro', user: 'Amantes do Audiovisual', img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=600&q=80', link: 'https://www.itauculturalplay.com.br/' },
                { name: 'Tamanduá TV', type: 'Documentários Independentes', interface: 'Média', mobile: 'Web Dinâmico', geo: 'Sem restrição', login: 'Sim (Email)', security: 'Seguro', user: 'Pesquisadores', img: 'https://images.unsplash.com/photo-1552084117-56a98a414591?auto=format&fit=crop&w=600&q=80', link: 'https://tamandua.tv.br/' },
                { name: 'Sesc Digital', type: 'Shows e Cult', interface: 'Excelente', mobile: 'Responsivo Web', geo: 'BR', login: 'Não exige', security: 'Oficial SESC', user: 'Fãs de Cult', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80', link: 'https://sesc.digital/' },
                { name: 'Libreflix', type: 'Open-Source, Filmes Livres', interface: 'Simples', mobile: 'WebApp', geo: 'Mundial', login: 'Não exige', security: 'Comunitário', user: 'Ativistas / Estudantes', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', link: 'https://libreflix.org/' },
                { name: 'TV Cultura Play', type: 'Castelo Rá-Tim-Bum, Roda Viva', interface: 'Boa', mobile: 'App Nativo', geo: 'Brasil', login: 'Não exige', security: 'Oficial', user: 'Famílias Nostálgicas', img: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=600&q=80', link: 'https://tvcultura.com.br/' }
            ];

            html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">';
            joiasData.forEach(j => {
                html += `
                    <div class="card platform-card img-preview-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                        <a href="${j.link}" target="_blank" style="display: block;">
                            <img src="${j.img}" alt="${j.name}" style="width: 100%; height: 200px; object-fit: cover;">
                        </a>
                        <div style="padding: 15px; flex: 1; display: flex; flex-direction: column;">
                            <span class="platform-badge" style="align-self: flex-start; margin-bottom: 10px; background-color: var(--accent-color);">💎 Garimpo Regional</span>
                            <h3 style="color: var(--primary-color); font-size: 1.3em;">${j.name}</h3>
                            <p style="font-size: 0.85em; margin: 10px 0; flex: 1;"><strong>🎭 Acervo:</strong> ${j.type}</p>
                            <p style="font-size: 0.8em; margin-bottom: 5px;"><strong>📱 Acesso:</strong> ${j.mobile}</p>
                            <p style="font-size: 0.8em; margin-bottom: 15px;"><strong>🔐 ${j.login}</strong></p>
                            <a href="${j.link}" target="_blank" class="btn" style="text-align: center; width: 100%;">Acessar ${j.name}</a>
                        </div>
                    </div>
                `;
            });
            html += '</div>';

            return html;
        }
    };


    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const target = link.getAttribute('data-target');
            pageTitle.innerText = titles[target] || 'CineLivre';

            if (renderers[target]) {
                contentArea.innerHTML = renderers[target]() + '\n<div class="ad-banner" style="margin-top: 30px;"><span style="display:block; font-size: 0.75em; text-transform: uppercase; margin-bottom: 5px;">Espaço Publicitário</span>[ Anúncio 728x90 ]</div>';
            } else {
                contentArea.innerHTML = `
                    <div class="card">
                        <h2>Módulo: ${titles[target]}</h2>
                        <p style="margin-top:10px;">Esta sessão será construída na etapa correspondente. Por enquanto a estrutura navegacional está completa!</p>
                    </div>
                `;
            }

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // Initial Render disparando o menu para montar banner e títulos corretos
    document.querySelector('[data-target="dashboard"]').click();
});
