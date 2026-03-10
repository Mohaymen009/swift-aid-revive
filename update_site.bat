@echo off
REM ===============================
REM Git Quick Push Script
REM ===============================

REM Ask for commit message
set /p msg="Enter commit message: "

REM Navigate to your project folder
cd /d "C:\Users\mohaymen\Downloads\swift-aid-revive-main\swift-aid-revive-main"

REM Stage all changes
git add .

REM Commit with your message
git commit -m "%msg%"

REM Push to GitHub and set upstream if needed
git push --set-upstream origin master

pause