kuber day 165
- server is created of 4 things os runtime dependencies codebase
- when these 4 things come together in a file this is called dockerfile
- when the docker file runs it becomes a container 
- image can be runned multiple times and everytime we get a new container 



why kubernetes 

kubernetes (K8s) is used to automate the deployment, scaling, and management of contaiinerized applications, enabling high availability and efficient resource utilization


on deploying version of application the old version works until the new version without any error starts working 



cluster - collection of servers containers


deployment - manages pods 
image - cpu - ram - maxreplica


deployment.yml (deployment simple)
which image - what resources - number of replicas

service brings traffic to pods 

metrics server is a component that reads cpu data













commands

folder address 

cd /c/Users/SOURABH/Desktop/cohort2dev/backendjs/kubernetes

send multiple request on my server 
hey -z 2m -c 10 http://localhost

get top pods 
while true; do clear; kubectl get pods; sleep 2; done

logs of service
kubectl logs deployment/product-deployment --tail=100 -f

autoscale

kubectl autoscale deployment express-deployment \
  --min=1 \
  --max=5 \
  --cpu=50

  cpu percent 50 se jyada toh pods badhna chalu