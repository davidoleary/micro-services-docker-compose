## About

[![Build Status](https://cloud.drone.io/api/badges/davidoleary/micro-services-docker-compose/status.svg)](https://cloud.drone.io/davidoleary/micro-services-docker-compose)

Single repo with multiple services.

Each service could be in its own repo.

- `api-gateway` service can send http requests to the second service.
- `nodemon` watches for changes and restarts the app inside docker container.
- `inspector/debugger` is enabled by default for development.
- `vscode` debug launcher configured for each service. This allows debugging of each services by attaching to its docker container.
- `jest` Unit test framework with coverage and support for file watch.
- `jest + supertest` Service level integration test framework with.
- Cross service boundary integration tests (requires services to be running).
- Single test execution with debugging support.
  - `npm run single-test [path to unit test file]`.
  - To debug a file open the test file in vscode and select the `Jest run current file`.
- e2e tests using `postman` and `newman` with an example of passing a value from the response of one request to the body of the next request.
  - Run from the `e2e-postman-journey-tests` project with `npm run test`
- `eslint` enabled 
  - To see list of of issues `run npm lint`
  - To auto fix run `lint-fix`
- APM with rollbar - using free trial
- Added Drone CI steps
  - Every push will trigger a build
  - Currently separated unit test and integration tests into separate build steps for readability but these can be done in the same step to speed up the build.
- add identifier for each request to trace each request

## Next steps

- multiple env support local/test/uat/prod
- add status endpoint to each service
- CI/CD - Run e2e tests and cross boundary integration tests
- Auth service between `api-gateway` and any other service
- Extract any common code from services
- Create a database service or a database service for each service
- Create infrastructure as code for AWS deployment
-  Secrets management
-  Kubernetes 
