.PHONY: start stop restart logs test migrate

# Build and start all services (API, Postgres, Redis)
start:
	docker compose up --build -d

# Stop all running containers
stop:
	docker compose down

# Restart all services
restart: stop start

# Show real-time logs for all services
logs:
	docker compose logs -f

# Run Prisma migrations (useful if you want to run outside the container)
migrate:
	docker compose exec nest-app npx prisma migrate deploy

# Run tests inside the NestJS container
test:
	docker compose exec nest-app npm run test

