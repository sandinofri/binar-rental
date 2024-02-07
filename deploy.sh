echo " switching branch to master "
git checkout master

echo "Building App . . . "
npm run build

echo " Deploying file to server . . ."
scp -r build root@193.203.163.209:/var/www/loave.tech/

echo "Done!"