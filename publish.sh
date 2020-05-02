docker-compose build
docker tag commentcava_web abulte/commentcava
docker push abulte/commentcava
ssh $CCV_SERVER "$CCV_DEPLOY_COMMAND"
