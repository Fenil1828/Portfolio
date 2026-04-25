# Contact Form Setup Guide

## ✅ What's Been Set Up

1. **Contact Form Component** - Beautiful form with validation
   - Name field (required)
   - Email field (required)
   - Phone field (optional)
   - Message textarea (required)
   - Loading states and success/error messages

2. **API Route** - Backend email handler at `/api/contact`
   - Validates form data
   - Sends confirmation email to user
   - Sends submission to your inbox: jasanifenil18@gmail.com

3. **Resend Integration** - Email service installed
   - Sends transactional emails
   - Includes professional email templates

## 🚀 Next Steps

### 1. Get Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Sign up or log in with your email
3. Create a new API key
4. Copy the API key

### 2. Add API Key to .env.local

Open `.env.local` file and replace:
```
RESEND_API_KEY=your_resend_api_key_here
```

with your actual API key:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

### 3. (Optional) Verify Email Domain

For production use, add your custom domain to Resend:
1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Update the email sender in `/app/api/contact/route.ts` from `onboarding@resend.dev` to your domain

### 4. Test the Form

1. Start your dev server: `npm run dev`
2. Go to your website's contact section
3. Fill in the form and submit
4. Check your email (jasanifenil18@gmail.com) for the submission
5. You should also receive a confirmation email

## 📧 Email Features

- **User receives**: Confirmation email acknowledging their message
- **You receive**: Detailed email with all form data
- **Both emails**: Professional formatting with company branding

## 🔒 Security Notes

- Never commit `.env.local` to version control (already ignored by gitignore)
- Keep your Resend API key private
- Form validates email format on both client and server
- Rate limiting recommended for production

## 📝 Form Fields

You can customize the form by:
1. Editing the form fields in `components/Contact.tsx`
2. Updating the API validation in `app/api/contact/route.ts`
3. Modifying email templates in the same route file

## 💡 Tips

- The form shows loading state while sending
- Success message appears for 5 seconds
- Users can see validation errors immediately
- Phone field is optional - perfect for flexibility

---

**Questions?** Feel free to customize any part of the form or email templates!
