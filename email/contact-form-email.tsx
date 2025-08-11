import React from "react";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export default function ContactFormEmail({
                                             message,
                                             senderEmail,
                                         }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body style={{ backgroundColor: "#f3f4f6", color: "#333" }}>
                    <Container>
                        <Section
                            style={{
                                backgroundColor: "white",
                                border: "1px solid #e5e7eb",
                                borderRadius: "0.5rem",
                                padding: "2rem",
                            }}
                        >
                            <Heading style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                                You received the following message from the contact form
                            </Heading>
                            <Text style={{ fontSize: "1rem" }}>{message}</Text>
                            <Hr />
                            <Text style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                                The sender's email is: {senderEmail}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}