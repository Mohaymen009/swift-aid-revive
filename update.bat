@echo off
REM ===============================
REM Git Quick Push Script
REM ===============================

REM Ask for commit message
set /p msg="Enter commit message: "

REM Navigate to your GitHub project folder
cd /d "C:\Users\mohaymen\Desktop\invoice site\currency-builder"

REM Stage all changes
git add .

REM Commit with your message
git commit -m "%msg%"

REM Push to main branch
git push origin main

pause
