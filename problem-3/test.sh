docker run -v $PWD/server:/app \
           --rm phpunit/phpunit \
           --configuration phpunit.xml
