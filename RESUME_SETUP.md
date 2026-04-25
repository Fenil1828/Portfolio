# Resume Setup Instructions

## How to Add Your Resume

Your portfolio is set up to download your resume. Follow these steps:

### Step 1: Prepare Your Resume
- You have a resume PDF file ready (from your uploaded document)

### Step 2: Add to Public Folder
1. Navigate to: `fenil-portfolio/fenil-portfolio/public/`
2. Place your resume PDF file in this folder
3. Name it: `resume.pdf`

### Step 3: Done!
The download button in the Hero section will now work. Visitors can click "Download Resume" and your PDF will download.

## File Path
```
fenil-portfolio/
└── fenil-portfolio/
    └── public/
        └── resume.pdf  ← Place your resume here
```

## How It Works
- Hero component has a download button
- Button downloads from `/resume.pdf`
- The `/` refers to the `public` folder
- When someone clicks the button, the resume downloads

## Troubleshooting
- If download doesn't work, make sure:
  - File is named exactly `resume.pdf`
  - File is in the `public` folder
  - File path is `fenil-portfolio/fenil-portfolio/public/resume.pdf`
  - Refresh your browser after adding the file
