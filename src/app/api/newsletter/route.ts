import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export async function POST(request: Request) {
	try {
		const { email } = await request.json();

		// Validate email
		if (!email || typeof email !== "string") {
			return NextResponse.json({ error: "Email is required" }, { status: 400 });
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email format" },
				{ status: 400 }
			);
		}

		const normalizedEmail = email.toLowerCase();
		// Use email as document ID (natural deduplication)
		const docRef = doc(db, "newsletter_subscribers", normalizedEmail);

		// Check if already subscribed
		const existingDoc = await getDoc(docRef);
		if (existingDoc.exists()) {
			return NextResponse.json(
				{ error: "Email already subscribed" },
				{ status: 409 }
			);
		}

		// Add the email to Firestore
		await setDoc(docRef, {
			email: normalizedEmail,
			subscribedAt: new Date().toISOString(),
			source: "landing_page",
		});

		return NextResponse.json(
			{ message: "Successfully subscribed!" },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Newsletter subscription error:", error);
		return NextResponse.json(
			{ error: "Failed to subscribe. Please try again." },
			{ status: 500 }
		);
	}
}
