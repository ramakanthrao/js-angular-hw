The repository for this project is empty
If you already have files you can push them using the command line instructions below.

Note that the master branch is automatically protected. Learn more about protected branches

You can automatically build and test your application if you enable Auto DevOps for this project. You can automatically deploy it as well, if you add a Kubernetes cluster.

Otherwise it is recommended you start with one of the options below.

Command line instructions

Git global setup
git config --global user.name "Ramakanth Kulkarni"
git config --global user.email "ramakanth_kulkarni@epam.com"

Create a new repository
git clone https://githyd.epam.com/Ramakanth_Kulkarni/js-angular-hw.git
cd js-angular-hw
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Existing folder
cd existing_folder
git init
git remote add origin https://githyd.epam.com/Ramakanth_Kulkarni/js-angular-hw.git
git add .
git commit -m "Initial commit"
git push -u origin master

Existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin https://githyd.epam.com/Ramakanth_Kulkarni/js-angular-hw.git
git push -u origin --all
git push -u origin --tags
