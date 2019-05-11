## About

Single repo with multiple services.

Each service could be in its own repo.

- `api-gateway` service can send http requests to the second service.
- `nodemon` watches for changes and restarts the app inside docker container.
- `inspector/debugger` is enabled by default for development
- `vscode` debug launcher configured for each service. This allows debugging of each services by attaching to its docker container.
- `jest` Unit test framework

## Next steps

- Service level integration tests
- Cross service integration tests
- e2e tests
- Auth service between `api-gateway` and any other service
- Extract any common code from services
- Create a database service or a database service for each service
- Create infrastructure as code for AWS deployment
-  Secrets management
