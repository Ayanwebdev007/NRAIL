# NRAIL Project

Modern business and retail hub website built with React + Vite frontend and Node.js backend.

## Deployment

This project is configured for deployment on Render using Blueprint (render.yaml).

### Services
- **Frontend**: Static site (React + Vite)
- **Backend**: Node.js API server

### Deploy to Render

1. Push code to GitHub repository
2. Connect repository to Render
3. Render will automatically detect `render.yaml` and deploy both services

## Local Development

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

## Environment Variables

Backend requires:
- `NODE_ENV`: production
- `PORT`: 10000 (default on Render)
