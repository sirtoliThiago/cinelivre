@echo off
color 0A
echo ==========================================================
echo       CineLivre - Sistema de Versionamento Interativo
echo ==========================================================
echo.
echo Iniciando o processo de versionamento para o GitHub...
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

:: Verifica inicializacao do repositorio
if not exist ".git" (
    echo [*] Repositorio Git local nao encontrado. Inicializando do zero...
    git init
    git branch -M main
    git remote add origin https://github.com/sirtoliThiago/cinelivre.git
)

echo [1/4] Adicionando os novos arquivos modificados...
git add .
echo.

color 0B
echo [2/4] NOMENCLATURA DA VERSAO
echo Descreva as alteracoes feitas ou digite a versao (ex: v2.5 - Canais de Anime).
set /p msg_commit="Digite aqui a versao/ajuste atual: "

echo.
color 0A
echo [3/4] Registrando o historico (Commit)...
git commit -m "%msg_commit%"

echo.
echo [4/4] Subindo as novidades para a nuvem da sua conta...
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
echo   SUCESSO ABSOLUTO! A versao "%msg_commit%" esta no Github!
echo ==========================================================
echo O projeto CineLivre acaba de ser atualizado em seguranca.
echo Pode fechar esta janela.
pause
