@echo off
cd prodev-mobile-app-0x06
if %errorlevel% neq 0 (
    echo Failed to change directory. Exiting.
    exit /b %errorlevel%
)
npm cache clean --force
if %errorlevel% neq 0 (
    echo npm cache clean failed. Exiting.
    exit /b %errorlevel%
)
rd /s /q node_modules
if %errorlevel% neq 0 (
    echo Failed to remove node_modules. Exiting.
    exit /b %errorlevel%
)
npm install
if %errorlevel% neq 0 (
    echo npm install failed. Exiting.
    exit /b %errorlevel%
)
echo Cleanup and install complete.
