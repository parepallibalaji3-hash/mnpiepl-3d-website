# 🚀 How to Deploy MNPIEPL 3D Website on Render.com

Follow these step-by-step instructions to deploy your Flask + React 3D website live on Render for free.

---

## Step 1: Upload Your Project to GitHub

1. Go to [GitHub.com](https://github.com) and log in (or create an account).
2. Click **New Repository** (`+` icon at the top right).
3. Name your repository: `3d-website-mnpiepl`.
4. Keep it **Public** (or Private) and click **Create repository**.
5. Push your local project to GitHub using Git commands in terminal:
   ```bash
   cd "C:\Users\SASIKIRAN\OneDrive\Desktop\3d website for mnpiepel"
   git init
   git add .
   git commit -m "Initial commit for MNPIEPL 3D Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/3d-website-mnpiepl.git
   git push -u origin main
   ```

---

## Step 2: Create a Web Service on Render.com

1. Go to [Render.com](https://render.com) and log in or create a free account.
2. Click **New +** button at the top right and select **Web Service**.
3. Choose **Connect a repository** and select your GitHub repository `3d-website-mnpiepl`.

---

## Step 3: Configure Deployment Settings

Fill in the following fields on the Render setup screen:

| Setting Field | Value to Enter |
| :--- | :--- |
| **Name** | `mnpiepl-3d-website` |
| **Language / Environment** | `Python 3` |
| **Branch** | `main` |
| **Region** | Choose nearest location (e.g. Singapore or Frankfurt) |
| **Build Command** | `pip install -r backend/requirements.txt && cd mnpiel-3d-website && npm install && npm run build` |
| **Start Command** | `cd backend && gunicorn app:app` |
| **Instance Type** | `Free` |

---

## Step 4: Add Environment Variables (`.env`)

Under the **Environment** section on Render, add your secret keys from your local `.env` file:

* `FIREBASE_PROJECT_ID` = `hanvi-4c419`
* `FIREBASE_CLIENT_EMAIL` = `firebase-adminsdk-fbsvc@hanvi-4c419.iam.gserviceaccount.com`
* `FIREBASE_DATABASE_URL` = `https://hanvi-4c419-default-rtdb.firebaseio.com/`
* `SMTP_USER` = `parepallibalaji3@gmail.com`
* `SMTP_PASSWORD` = `nafqlyyuxqxvjfmz`
* `ADMIN_EMAIL` = `22p61a66f3@vbithyd.ac.in`
* `CLIENT_EMAIL` = `22p61a66f3@vbithyd.ac.in`
* `FLASK_DEBUG` = `False`

---

## Step 5: Deploy & Access

1. Click **Create Web Service**.
2. Render will automatically install Python & Node dependencies, build the 3D frontend bundle, and launch the Gunicorn WSGI server.
3. Once completed (showing **Live** in green), click your Render URL (e.g. `https://mnpiepl-3d-website.onrender.com`) to view your live 3D website!
