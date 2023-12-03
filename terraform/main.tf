provider "aws" {
  region = "us-east-1" # Update with your preferred region
}

resource "aws_instance" "product-api-server" {
  ami           = "ami-0c55b159cbfafe1f0" # Update with the desired AMI
  instance_type = "t2.micro"
}

resource "aws_db_instance" "product-db" {
  engine         = "mongodb"
  instance_class = "db.t2.micro"
  allocated_storage = 10
  identifier     = "product-inventory-db"
}