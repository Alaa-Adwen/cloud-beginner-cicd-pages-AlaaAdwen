# cloud-beginner-cicd-pages-Alaa Adwen

**Cloud Computing — CI/CD Assignment**  
Automated static site deployment using GitHub Actions + GitHub Pages.

---

## 🔗 Live Site

> **[https://alaa-adwen.github.io/cloud-beginner-cicd-pages-AlaaAdwen/](https://alaa-adwen.github.io/cloud-beginner-cicd-pages-AlaaAdwen/)**  

---

## 📁 Project Structure

```
├── index.html          # Main page (CI/CD explainer + pipeline simulator)
├── style.css           # Styles
├── script.js           # Interactive pipeline simulator
├── README.md           # This file
└── .github/
    └── workflows/
        └── deploy.yml  # CI/CD workflow (build checks + GitHub Pages deploy)
```

---

## 🚀 How to Open Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Alaa-Adwen/cloud-beginner-cicd-pages-AlaaAdwen.git
   cd cloud-beginner-cicd-pages-AlaaAdwen
   ```

2. **Open directly in browser:**
   ```bash
   open index.html       # macOS
   start index.html      # Windows
   ```
   Or simply drag `index.html` into any browser window — no server needed.

---

## ⚙️ CI/CD Pipeline

Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`:

| Step | Job | Action |
|------|-----|--------|
| 1 | `build` | Checkout code |
| 2 | `build` | Verify `index.html`, `style.css`, `script.js` exist |
| 3 | `build` | Upload site as Pages artifact |
| 4 | `deploy` | Publish artifact to GitHub Pages |

Check the **Actions** tab for live run status.

---
