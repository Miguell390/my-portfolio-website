// actions/sendEmail.ts

"use server"; // This directive marks this as a Server Action

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils"; // We created this in a previous step
import ContactFormEmail from "@/email/contact-form-email"; // And this email template

// Initialize Resend with your API key from the .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    // Get the form field values
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // Simple server-side validation.
    // Never trust client-side validation alone!
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        // This is the core function that sends the email
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // Must be a verified domain in Resend
            to: "miglimwj@gmail.com", // ⚠️ CHANGE THIS TO YOUR OWN EMAIL ADDRESS
            subject: "Message from your Portfolio Contact Form",
            replyTo: senderEmail,
            // We use the React component to generate the email's HTML
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
    } catch (error: unknown) {
        // If sending fails, return the error message
        return {
            error: getErrorMessage(error),
        };
    }

    // If sending is successful, return the data
    return {
        data,
    };
};