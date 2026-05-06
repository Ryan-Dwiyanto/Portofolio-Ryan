# Portfolio Project

This repository contains both the Frontend and Backend for my portfolio website.

## Structure

- `/FrontendPorto`: React + Vite application for the frontend.
- `/BackendPorto`: Express.js backend for handling contact form emails, designed to run as Vercel Serverless Functions.

## Deployment

### Backend (Vercel)
The backend is configured to run on Vercel. Make sure to set the following environment variables in the Vercel project settings:
- `EMAIL_USER`: Your Gmail address.
- `EMAIL_PASS`: Your Gmail App Password.
- `RECEIVER_EMAIL`: The email address where you want to receive messages.

### Frontend (Vercel)
The frontend is a Vite project. It can be deployed to Vercel by selecting the `FrontendPorto` directory as the root.
