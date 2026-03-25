@echo off
color 0b
echo ==============================================
echo   Versao Final 2.0 - Atualizador do CineLivre
echo ==============================================
echo.

echo [1/4] Identificando autor (apenas por precaucao)...
git config user.name "Thiago Sirtoli"
git config user.email "sirtoliThiago@gmail.com"

echo [2/4] Atualizando os arquivos (Commit)...
git add .
git commit -m "feat: lancamento mega atualizacao v2.0 com series, Ads e JustWatch"

echo.
echo [3/4] Reconectando a pasta a sua gaveta oficial...
git branch -M main
git remote drop origin 2>nul
git remote add origin https://github.com/sirtoliThiago/cinelivre.git

echo.
echo [4/4] Enviando novidades para a nuvem do GitHub...
echo Se abrir tela do Gmail/GitHub, basta clicar em "Sign In" para autorizar.
echo.
git push -u origin main

echo.
echo ==============================================
echo Finalizado! Nao se importe com avisos pequenos caso mostre.
echo Verifique as novidades em: github.com/sirtoliThiago/cinelivre
echo ==============================================
pause
