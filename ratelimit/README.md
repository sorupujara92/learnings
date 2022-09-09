# Overview

To show case how Spring cloud gateway can be used with other microservices.

Here we have

1. **ms_gateway** : Gateway which receives the client request and forward to corresponding microservice.
2. **ms-1 and ms-2** : Different microservices behind the gateway.

## Usages

[AuthenticationFilter](./ms_gateway/src/main/java/com/ratelimit/AuthenticationFilter.java) : Being used as a global filter which checks if authentication token is valid or not.
If not valid sends Forbidden error in response.

//TODO ratelimit