# Creating a pull request from master
Step# | Description | Command
------------ | ------------- | -------------
1. | Create a new brach (If you need one) | git cb branch-name
2. | Check all pending changes before Stash | git st
3. | Content in the second column | git stash -u
4. | Get status of pending changes | git st
5. | Pull request from Master to branch | git pull origin master
6. | Apply stashed changes | git stash apply
7. | Start project | npm start

# Committing to master from branch
Step# | Description | Command
------------ | ------------- | -------------
1. | Check all pending changes before Commit | git st
2. | Add all pending changes to Commit branch | git add .
3. | Get status of pending changes | git st
4. | Commit changes to branch | git commit -m “Title” -m “Description”
5. | Get status of pending changes | git st
6. | Push committed changes to Master branch | git push
7. | Pull latest version of project from Master | git pull
8. | Create a release | https://milestone-sys.github.io/web-design-system/docs/creating-a-new-release.html
