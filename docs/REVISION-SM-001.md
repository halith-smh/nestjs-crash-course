# NestJS Concepts - Revision Summary

## 1. Controllers & Routing
- **Decorators**: `@Controller()`, `@Get()`, `@Post()`.
- **Request Payloads**: Extracting data using `@Query()`, `@Param()`, and `@Body()`.
- **Reference**: `src/episodes/episodes.controller.ts`

## 2. Services & Dependency Injection
- **Providers**: Creating services using the `@Injectable()` decorator.
- **Dependency Injection (DI)**: Injecting the service into the controller's constructor (e.g., `constructor(private episodesService: EpisodesService) {}`).
- **Reference**: `src/episodes/episodes.service.ts`

## 3. Data Transfer Objects (DTOs) & Validation
- **DTO setup**: Defining the shape of data using classes (e.g., `CreateEpisodeDto`).
- **Validation**: Using `class-validator` decorators like `@IsString()`, `@IsNotEmpty()`, `@IsBoolean()`, and `@IsOptional()`.
- **Binding Validation**: Applying the built-in `ValidationPipe` at the method level (`@Body(ValidationPipe)`).
- **Reference**: `src/episodes/dto/create-episode.dto.ts`

## 4. Data Transformation & Pipes
- **Type Transformation**: Using `class-transformer` `@Type(() => Date)` to automatically cast incoming payload primitives to class instances.
- **Built-in Pipes**: Applying `ParseIntPipe` to parse string queries into integers, and `DefaultValuePipe` to supply fallback values.
- **Reference**: `src/episodes/episodes.controller.ts` (findAll method)

## 5. Guards & Authorization
- **Implementation**: Creating a class that implements the `CanActivate` interface to control access.
- **Execution Context**: Using `ExecutionContext` to access the underlying HTTP Request (e.g., reading `x-api-key` from headers).
- **Binding Guards**: Applying the guard at the controller level using `@UseGuards(ApiKeyGuard)`.
- **Reference**: `src/guards/api-key.guard.ts`

## 6. Exception Handling
- **Built-in Exceptions**: Throwing standard HTTP exceptions to return appropriate HTTP status codes and error messages.
  - `NotFoundException` (404) when an episode is not found.
  - `UnauthorizedException` (401) when the API key is invalid or missing.
- **Reference**: `src/episodes/episodes.controller.ts` and `src/guards/api-key.guard.ts`
