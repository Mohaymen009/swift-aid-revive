@echo off
:: EMRS Site Auto-Update Script

:: Ask for commit message
set /p msg="Enter commit message: "

:: Add all changes
git add .

:: Commit changes
git commit -m "%msg%"

:: Push to main branch
git push origin main

pause
