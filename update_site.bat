@echo off
:: EMRS Site Auto-Update Script

:: Ask for commit message
set /p msg="Enter commit message: "

:: Make sure branch is main
git branch -M main

:: Add all changes, including untracked files
git add -A

:: Commit changes
git commit -m "%msg%"

:: Force push to main
git push -u origin main --force

pause
