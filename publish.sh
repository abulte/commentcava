cd frontend
source ~/nvs/nvs.sh
nvs-use<.nvmrc
yarn build
cd ..
docker-compose build
docker tag commentcava_web abulte/commentcava
docker push abulte/commentcava
