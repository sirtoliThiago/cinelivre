@echo off
color 0b
echo ==============================================
echo   Script de Versionamento - CineLivre (Correcao)
echo ==============================================
echo.

rem Verifica se o Git esta instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] O Git nao foi encontrado no seu computador!
    echo Instale o Git em: https://git-scm.com/downloads
    pause
    exit /b
)

echo [1/4] Configurando identificacao do Git para o seu Gmail...
rem Se o git nunca foi usado, ele trava pedindo o seu nome e email para "assinar" o codigo.
git config user.name "Thiago Sirtoli"
git config user.email "seu_email_aqui@gmail.com"

echo [2/4] Salpicando e salvando os arquivos na maquina (Commit)...
git init
git add .
git commit -m "feat: lancamento da v1.0 do CineLivre"

echo.
echo ==============================================
echo [MUITO IMPORTANTE - PASSO 3/4]
echo O Git precisa que exista uma "gaveta vazia" la no GitHub para receber os arquivos.
echo.
echo 1. Abra seu navegador e entre na sua conta do GitHub
echo 2. Clique em "New" (Criar Repositorio)
echo 3. Nomeie exatamente como: cinelivre
echo 4. Role para baixo e clique em "Create repository" (NAO marque a caixa de adicionar README).
echo ==============================================
echo Quando o repositorio "cinelivre" estiver criado la no painel,
pause

echo.
echo [4/4] Conectando a nuvem e fazendo o envio final...
git branch -M main
git remote drop origin 2>nul
git remote add origin https://github.com/sirtoliThiago/cinelivre.git

echo.
echo Se abrir uma janela do GitHub pedindo autenticacao, 
echo clique em "Sign in with your browser" e use o seu login do Gmail!
echo.
git push -u origin main

echo.
echo Finalizado! Verifique o www.github.com/sirtoliThiago/cinelivre
pause
