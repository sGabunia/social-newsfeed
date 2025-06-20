# React + TypeScript + Vite

To start the project, make sure to copy the `.env.example` file to `.env`, then update the values with needed configuration.

> ⚠️ **Note:** This project is more focused on implementing features than on detailed styling due to limited time.  
> For UI components and styling, Mantine library was used to speed up development.

## Tech Stack

- **Vite** — fast build tool and dev server  
- **React** — UI library  
- **Axios** — HTTP client for API requests  
- **React Query** — data fetching and caching  
- **Zod** — schema validation and type inference  
- **Mantine** — React component library for UI and styling

## Project structure

Project lives in src folder.

Using feature sliced folders.

```sh
src/features/some-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- utils       # utility functions for a specific feature
```
Types are in top level file. But in bigger projects it can be in features folders


It's a small project, so structure is as simple, as possible.
Not using index files in folders for exports.

## Features

### 📝 Posts
- Create and publish new posts using either text or file input
- Simple form validation, not used any form library
- created custom hook to handle file upload
- Posts are submitted, the post list is invalidated and updated immediately
- Add reactions (like 👍) to posts — updates appear instantly using optimistic updates
- Users can only delete their own posts
- On hover user can see post reactors

### 💬 Comments
- Same features as in posts
- Supports infinite nesting of comments using recursive rendering
- Threaded comment structure for better readability

### 🧭 Sidebar
- View primitive activity insights (e.g. total reactions, comment counts
- I found no api for that, so rendered dummy data

###  env variables
- validating env variables with zod


