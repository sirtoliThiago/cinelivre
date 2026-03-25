@echo off
color 0A
echo ==========================================================
echo       CineLivre V2 - Mega Atualizador do GitHub
echo ==========================================================
echo.
echo Iniciando o processo de versionamento final...
echo.

:: Verifica se o Git esta instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    color 0E
    echo [AVISO] O termo 'git' nao foi reconhecido no seu computador.
    echo Certifique-se de que o 'Git para Windows' foi instalado ou
    echo execute este arquivo atraves do 'GitHub Desktop Terminal'.
    echo.
    pause
    exit /b
)

:: Verifica se o git ja foi inicializado nesta pasta
if not exist ".git" (
    echo [*] Repositorio Git local nao encontrado. Inicializando do zero...
    git init
    git branch -M main
    git remote add origin https://github.com/sirtoliThiago/cinelivre.git
)

echo [1/3] Preparando os super novos arquivos (Séries, Ads, Capas)...
git add .

echo [2/3] Registrando o historico (Commit)...
git commit -m "Build V2: Painel Dinamico com Imagens, Rastreador, Canais e AdBanners"

echo [3/3] Subindo as novidades para a nuvem da sua conta...
git push -u origin main
if %errorlevel% neq 0 (
    color 0C
    echo.
    echo [ERRO] Algo deu errado no envio!
    echo Confira se apareceu alguma janela do navegador pedindo permissao
    echo do seu Gmail/GitHub e clique para aceitar.
    pause
    exit /b
)

color 0B
echo.
echo ==========================================================
echo   SUCESSO ABSOLUTO! Tudo salvo na sua conta do Github!
echo ==========================================================
echo Pode fechar esta janela.
pause
