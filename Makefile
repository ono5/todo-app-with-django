.PHONY: release all_tests ut mk flt ash startapp superuser django react

release:
	docker-compose up --abort-on-container-exit migrate
	docker-compose run app python3 manage.py collectstatic --no-input
	docker-compose up ${option}

all_tests:
	docker-compose run --rm app pytest

test:
	docker-compose run --rm app sh -c "pytest -l -v -s ${app} && flake8"

ut:
	docker-compose run --rm app pytest -v -s -l --tb=short ${dir}

flake8:
	docker-compose run --rm app pytest --flake8

mk:
	docker-compose run --rm app python3 manage.py makemigrations ${app_name}
	docker-compose run --rm app python3 manage.py migrate

startapp:
	docker-compose run --rm app python3 manage.py startapp ${app_name}

superuser:
	docker-compose run --rm app python3 manage.py createsuperuser

django:
	docker-compose run --rm app sh -c "django-admin startproject app ."

react:
	docker-compose run --rm frontend sh -c "npx create-react-app frontend"
