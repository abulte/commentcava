cd frontend
source ~/nvs/nvs.sh
nvs-use<.nvmrc
yarn build
cd ..
git add dist/ && git commit dist/ -m 'build for deploy'
docker-compose build
docker tag commentcava_web abulte/commentcava
docker push abulte/commentcava
ssh root@$CCV_SERVER "cd commentcava && docker service update --image 'abulte/commentcava:latest' commentcava_web"
