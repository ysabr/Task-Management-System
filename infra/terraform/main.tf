provider "aws" {
  region = "us-east-1"
}

resource "aws_ecr_repository" "backend_repo" {
  name = "task-backend"
}

resource "aws_ecr_repository" "frontend_repo" {
  name = "task-frontend"
}

# Additional resources like ECS Cluster, Task Definitions, Services, Load Balancers, RDS for PostgreSQL, etc., would be defined here.
