# 🚀 Middleware Playground (Express.js)

A hands-on sandbox for understanding how **Express.js middleware and routing** come together. Use this as a quick reference to remember what was built, why it was added, and how to extend it.

---

## 🧩 Phase 1: Project Setup

### 🎯 Goal
Get an Express server running and hook in the built-in middleware chain.

### 🛠 Steps

```bash
mkdir middleware-playground
cd middleware-playground
npm init -y
npm install express
```

Create a minimal server:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('ok'));

app.listen(4000, () => console.log('✅ Server running on port 4000'));
```

Hook up the built-in middleware:

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
```

### 📘 Quick Notes

- `app.use()` mounts middleware in the order they are declared.
- `express.json()` reads JSON bodies from API requests.
- `express.urlencoded()` handles HTML form payloads.
- `express.static()` serves files (HTML, CSS, JS, images) from `public/`.

---

## ⚙️ Phase 2: Middleware Fundamentals

### 🎯 Goal
Build a custom global middleware to see the lifecycle in action.

### 🛠 Steps

```bash
mkdir middlewares
```

Create `middlewares/logger.js`:

```js
module.exports = (req, res, next) => {
   console.log(`[${new Date().toLocaleString()}] Method: ${req.method}, URL: ${req.url}`);
   next();
};
```

Register the middleware in `server.js`:

```js
const logger = require('./middlewares/logger');
app.use(logger);
```

### 📘 Quick Notes

- This middleware runs before every route because it is mounted globally.
- Always call `next()` to move the request forward.

---

## 🧱 Phase 3: Routing Setup

### 🎯 Goal
Organize routes with `express.Router()` and handle dynamic parameters.

### 🛠 Steps

```bash
mkdir routes
```

Create `routes/userRoutes.js`:

```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('👤 All Users'));

router.get('/:username', (req, res) => {
   res.send(`Welcome, ${req.params.username}`);
});

module.exports = router;
```

Mount the router in `server.js`:

```js
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
```

### 📘 Quick Notes

- `router.get()` defines handlers within the router scope.
- `/:username` is a dynamic segment; read it with `req.params.username`.

---

## 🔒 Phase 4: Route-Specific Middleware

### 🎯 Goal
Protect sensitive routes using router-level middleware.

### 🛠 Steps

Create `middlewares/checkAuth.js`:

```js
module.exports = (req, res, next) => {
   const isAdmin = req.query.admin === 'true';
   if (isAdmin) {
      next();
   } else {
      res.status(403).send('Access Denied: Admins only!');
   }
};
```

Create `routes/adminRoutes.js`:

```js
const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth');

router.use(checkAuth);

router.get('/', (req, res) => res.send('🛠 Admin Dashboard'));
router.get('/stats', (req, res) => res.send('📊 Admin Stats'));

module.exports = router;
```

Mount the admin router:

```js
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);
```

### ✅ Try It

- `/admin` → `Access Denied: Admins only!`
- `/admin?admin=true` → `🛠 Admin Dashboard`

### 📘 Quick Notes

- Router-level middleware (`router.use(checkAuth)`) protects everything under `/admin`.
- Query params live on `req.query` (e.g., `?admin=true`).

---

## ⚠️ Bonus: Error & 404 Handling

Create a central error handler `middlewares/errorHandler.js`:

```js
module.exports = (err, req, res, next) => {
   console.error('❌ Error:', err.message);
   res.status(500).send('Something went wrong!');
};
```

Register it after your routes:

```js
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);
```

Add a 404 handler last:

```js
app.use((req, res) => {
   res.status(404).send('404 Not Found');
});
```

---

## 🧠 Summary Cheat Sheet

| Concept | Description |
|---------|-------------|
| `app.use()` | Mounts middleware functions in the Express pipeline. |
| Global Middleware | Runs for every incoming request. |
| Route-Level Middleware | Applied to specific routes or router groups. |
| `req.params` | Holds dynamic URL segments like `/:username`. |
| `req.query` | Stores query string values like `?admin=true`. |
| Error Middleware | Catches errors passed to `next(err)` and formats the response. |
| 404 Middleware | Handles requests that do not match any defined route. |

Keep iterating on this playground as you explore more Express patterns.