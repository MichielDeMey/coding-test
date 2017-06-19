Teamleader Development Environment
---

# Setup
```
LOCAL_IP=$(ipconfig getifaddr en0) docker-compose up
```
Check the subshell command to see if it fits your environment,  
it should output your local IP address.

# Make a request
```
curl -X GET https://localhost/api/foo
```

# Test
Run unit tests
```
./test.sh
```
