# Deploying to Kubernetes

Dan Wahlin
Twitter: @DanWahlin
https://codewithdan.com

https://github.com/danwahlin/angular-jumpstart
https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands
https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#-strong-api-overview-strong-
https://kubernetes.io/docs/reference/kubectl/cheatsheet/
https://kompose.io/

## Agenda

1. Container Orchestration Options (Docker Swarm, Kubernetes)
2. Using Docker Compose

docker-compose build
docker-compose up
docker-compose down

3. Docker Stacks --> Docker Desktop --> Kubernetes

docker stack deploy -c docker-compose.yml angular-jumpstart
docker stack ls
docker stack rm angular-jumpstart

4. Deploying Containers to Kubernetes

 kompose convert -h


Additional resources:

https://pluralsight.pxf.io/danwahlin

