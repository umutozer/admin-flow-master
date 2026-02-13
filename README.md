# admin-flow-master

Kapsamlı kullanıcı hiyerarşisi ve ürün envanter yönetimi sağlayan merkezi admin kontrol paneli.

## Teknoloji

| | |
|---|---|
| Mimari | react-vite |
| Frontend | React (Vite), Tailwind CSS, Shadcn UI, TanStack Query |
| Backend | Node.js (Express) or ASP.NET Core API |
| Veritabani | PostgreSQL |
| Deployment | Docker, Vercel/AWS |

## Kurulum

```bash
cd backend
npm install
npm run dev

# Baska terminal
cd frontend
npm install
npm run dev
```

## Dosya Yapisi

```
admin-flow-master/
  styles/variables.css
  styles/reset.css
  styles/global.css
  database/schema.sql
  database/seed.sql
  backend/package.json
  backend/server.js
  backend/routes/api.js
  backend/controllers/mainController.js
  backend/.env.example
  frontend/package.json
  frontend/vite.config.js
  frontend/index.html
  frontend/src/main.jsx
  frontend/src/App.jsx
  frontend/src/App.css
  frontend/src/components/Header.jsx
  frontend/src/pages/Dashboard.jsx
  frontend/src/pages/UserManagement.jsx
  frontend/src/pages/ProductCatalog.jsx
  frontend/src/components/Footer.jsx
  tests/test-plan.md
  tests/checklist.md
  .gitignore
  .github/workflows/deploy.yml
  Dockerfile
  docker-compose.yml
```

## Uretim Raporu

- uiux: Tamamlandi
- db: Tamamlandi
- backend: Tamamlandi
- frontend: Tamamlandi
- qa: Tamamlandi
- devops: Tamamlandi

---

> Bu proje Kurumsal AI Yazilim Ajansi tarafindan otomatik olarak uretilmistir.
