#!/bin/bash
git status
git add .
msg=$(date) 
git commit -m "$msg"
git push -u origin main
