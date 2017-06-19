CONTAINER_ID=$(docker ps -qf "name=problem3_php")
docker exec $CONTAINER_ID /var/www/teamleader/api/vendor/bin/phpunit
