# clean docker
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker ps
# clean image
docker rmi $(docker images -q)
docker system prune -f
docker images