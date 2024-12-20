provider "aws" {
  region = "us-east-1"
}

# Create VPC, ECS Cluster, RDS, etc.
# This will get more complex, but start simple:
resource "aws_ecr_repository" "backend_repo" {
  name = "task-backend"
}
