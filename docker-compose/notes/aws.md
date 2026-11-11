how to deploy an docker image on aws to make it global

ecr stores multiple versions of image -> its primary usage is storage area 

ecs Is the one who runs the server 

task defiination in ecs knows which image to run how much cpu it gets what ram it needs 

simple
kis image ko run krna hai kkitne resources ke saath run krna hai 

images on ecr can only be accessed by user 

we create a seperate user instead of using the credentials of root user while using aws services


create aws service ->


go to console page aws 


then go to all services -> Iam
IAM users
create user -> provide user access (no need)
details (attach policies)
permissions -> AmazonEC2ContainerRegistryFullAccess AmazonECS_FullAccess
create user
go to user -> security credentials -> create access key -> select cli -> confirm -> ignore description -> get keys

access key - *****************
secret access key - ********************

download aws cli  windows msi file download  
aws ~~version
aws configure
run these commands in terminal CMD
paste access key secret access key ap-south-1


all services - ecr
create ecr repository on console amazon

view push commands push windows commands on git bash in your current project folder

copy folder path paste in terminal

run commands 

aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin 282767548927.dkr.ecr.ap-southeast-2.amazonaws.com

docker buildx build --platform linux/amd64 -t cohort-demo --load .

docker tag cohort-demo:latest 282767548927.dkr.ecr.ap-southeast-2.amazonaws.com/cohort-demo:latest

docker push 282767548927.dkr.ecr.ap-southeast-2.amazonaws.com/cohort-demo:latest

ecr pe successfully image pahuch jayegi 




ECS

all services - networking - create vpc -> vpc and more - you can change name - create vpc


ecs -> create cluster - name it - fargate only - create - task defination - create new td - name it - task role - IAM - IAM resources - roles - create role - AWS service - usecase (Elastic container service ) - task execution role for elastic container service - next - name role - create role 

use this task role in task role and task execution role

name container 
browse ecr image 
select repo 
click latest
image tag 
select image 


container port 3000 name port 
add env variables
create

service
ecs - clusters - click cluster -services create - give task defination
desired tasks 2
networking - select vpc - remove private subnet - use existing security group - load balancing - use load balancer - application load balancer 
name lb - target group name create - service created 

service won't work - configuration networking - security groups - edit inbound rule - add rule - all TCP anywhere - save 

lecture - ECR ECS day 162
