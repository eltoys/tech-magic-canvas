import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App.tsx'
import './index.css'

// Initialize Sentry
// Note: Replace SENTRY_DSN with your actual DSN from Sentry dashboard
Sentry.init({
  dsn: "YOUR_SENTRY_DSN", // You'll need to replace this with your actual Sentry DSN
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: import.meta.env.MODE,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
