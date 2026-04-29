# Blogify API

## Setup

1. Copy `.env.example` to `.env`.
2. Add your MongoDB Atlas connection string as `MONGODB_URI`.
3. Install dependencies with `npm install`.
4. Start the API with `npm run dev`.

## Posts API

- `GET /api/v1/posts`
- `GET /api/v1/posts/:id`
- `POST /api/v1/posts`
- `PATCH /api/v1/posts/:id`
- `DELETE /api/v1/posts/:id`

Posts returned by the `GET` endpoints include populated author data.
