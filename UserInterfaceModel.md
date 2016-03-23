Motorcycling Weather App
As a user, I want to:
1)  Give the user an option to login
2)	Input a start location
3)	Input a final destination
4)	Input additional destinations (phase II)
5)	Input a start time
6)	Input the time I will spend at each stop (phase II)
7)	Input how I want to go, (e.g., avoid highways, avoid tolls, avoid ferries)
8)	Give the user the ability to save the "trip"
Results:
1)	See the weather from my start location
2)	Show a map with the route highlighted
3)	Show what time my trip will begin
4)	Show the distance I will travel on my trip
5)	Show the time it will take to travel from my start location to my end location (including time for breaks – phase II)
6)	Show the weather at my final destination based on the total time it will take to travel
7)  Allow the user (if they are logged in) to select any previously saved rides/trips


Before we work on the project we need to...
0. git pull mike master
#Once you have an up to date master branch from the main repository
1. create a branch and switch to it
 - git checkout -B [branchName]
 (work on your changes)
2. git add .
3. git commit -m "good message"
 -after all your work complete
4. switch back to master
  git checkout master
5. git pull mike master
6. switch back to [branchName]
 - git checkout [branchName]
7. merge master into branch
 git merge master [[while you are on branchName]]
8. RESOLVE ALL CONFLICTS (IF ANY)
9. AFTER RESOLVING OF CONFLICTS (if any), git add .
10. AFTER RESOLVING OF CONFLICTS (if any), git commit -m "message explaining conflict resolution"
11. git push origin [branchName]
12. issue pull request from [branchName] **GITHUB**
 THEN GO TO Github.com and go to your forked repository and do a Pull Request.
 It will ask for a title.  Put in a descriptive title and use the comments to put detailed stuff about the changes you made and if you're have any issues with the code you uploaded.
13. switch back to master **gitbash**
 - git checkout master
14. git pull mike master
 - after pull request update
15. delete [branchName] ​_optional if you are skeered_​
 - git branch -D [branchName]
 - **you cannot be on the branch that you are deleting**
16. rinse and repeat

**if you are ever unsure of the branch layout, just type _git branch_**
