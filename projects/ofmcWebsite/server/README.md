# OFMC Admin Server

Backend server for the OFMC admin dashboard that provides persistent storage for announcements and banner settings.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## API Endpoints

### Banner Management
- `GET /api/banner` - Get current banner settings
- `POST /api/banner` - Update banner settings

### Announcements Management
- `GET /api/announcements` - Get all announcements
- `POST /api/announcements` - Add new announcement
- `DELETE /api/announcements/:id` - Delete announcement by ID

### Health Check
- `GET /api/health` - Server health check

## Data Storage

Data is stored in JSON files in the `server/data/` directory:
- `banner.json` - Banner settings
- `announcements.json` - All announcements

## Configuration

The server runs on port 3001 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## CORS

The server is configured to accept requests from any origin. In production, you should configure CORS to only allow requests from your website domain.