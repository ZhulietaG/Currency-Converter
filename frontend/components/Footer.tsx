import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer style={{ backgroundColor: "#f2f2f2", padding: "20px", textAlign: "center" }}>
            <p>&copy; 2025 Your Company Name. All rights reserved.</p>
            <p>
                <a href="/privacy-policy.html">Privacy Policy</a> |{" "}
                <a href="/terms-of-service.html">Terms of Service</a> |{" "}
                <a href="/contact.html">Contact Us</a>
            </p>
        </footer>
    );
};