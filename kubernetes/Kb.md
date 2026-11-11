folder address 

cd /c/Users/SOURABH/Desktop/cohort2dev/backendjs/kubernetes

send multiple request on my server 
hey -z 2m -c 10 http://localhost

get top pods 
while true; do clear; kubectl get pods; sleep 2; done

logs of service
kubectl logs deployment/product-deployment --tail=100 -f