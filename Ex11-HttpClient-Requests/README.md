
# Ex11 — Angular HTTP Client Example

>This project demonstrates how to use Angular's HTTP client to fetch and display user data from an external API.

## Project Structure

- `src/app/app.ts` — Root component. Fetches users on init and manages state.
- `src/app/app.html` — Bootstrap-styled template for user list and details.
- `src/app/dto/user.ts` — `User` interface for API data.
- `src/app/services/userservice.ts` — Service for HTTP requests to [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- `src/app/app.config.ts` — Registers `provideHttpClient(withFetch())` for Fetch API support.

## Key Features

- Uses Angular's standalone API and modern HTTP client setup.
- Fetches all users and individual user details.
- Handles errors gracefully and displays messages in the UI.
- Responsive, clean UI with Bootstrap.

## Quick Start

```bat
cd Ex11-HttpClient-Requests
npm install
npm start
```

Visit [http://localhost:4200/](http://localhost:4200/) to view the app.

## Build & Test

```bat
npm run build
npm test
```

## Notes

- Requires network access to fetch data from JSONPlaceholder.
- To use a different backend, change the `url` in `userservice.ts`.
- For troubleshooting (CORS, network errors), check your browser console and network settings.

---
For enhancements (loading indicators, more error handling, etc.), open an issue or request a feature!
