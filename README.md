# 🧑‍💻 User Management Table

This is a test assignment for the **Junior Frontend Developer** position.

## 🔍 Task Overview

The goal was to build a user management table that:

- Fetches data from a mock API (JSONPlaceholder)
- Displays users in a table (name, username, email, phone)
- Allows real-time filtering by all table fields
- Uses Redux Toolkit for state management
- Applies strict TypeScript typing
- Has a clean, user-friendly UI styled with Bulma CSS

## 🚀 Live Demo

🌐 [Live App](https://your-deployment-link.vercel.app)  
_(Replace this link with your actual deployment once ready)_

## 🧰 Tech Stack

- **React** (with Vite)
- **Redux Toolkit**
- **TypeScript**
- **Bulma CSS** (for styling)
- JSONPlaceholder API (`https://jsonplaceholder.typicode.com/users`)

## 📦 Project Structure

src/
├── app/ # Redux store setup
├── components/ # UI components (table, rows, filters)
├── features/ # Redux slice (users)
├── types/ # TypeScript types (User, Filters, State)
├── utils/ # Helper functions (filter logic, phone sanitization)

## 🧪 Features

- ✅ API call using `fetch` to get users
- ✅ Table layout with dynamic headers
- ✅ Per-column real-time filtering
- ✅ Phone filtering ignores formatting
- ✅ Loading state + error handling
- ✅ State managed via Redux Toolkit
- ✅ Strong TypeScript usage
- ✅ Modular, component-based structure

## 📂 Getting Started

To run the project locally:

```bash
git clone https://github.com/andslash/smart-buisness-task.git
cd smart-buisness-task
npm install
npm run dev

```
