# Happy Cypress - Development Plan

## 1. Housecall Pro (HCP) Integration via Zapier
**Goal:** Automate customer and estimate creation in HCP when a user completes the website quote.
**Strategy:** Replace the current Formspree form with a direct **Zapier Webhook**.

**Steps for You (Chad):**
1.  **Log in to Zapier** and create a new Zap ("Catch Hook").
2.  **Copy the Webhook URL** provided by Zapier.
3.  **Send me the Webhook URL** so I can update the form action in the code.
4.  **Configure the Zap Action:**
    *   **Action 1 (Find/Create Customer):** Search HCP for a customer by email. If not found, create one using the Name, Email, Phone, and Address from the form.
    *   **Action 2 (Create Estimate):** Create a new estimate for that customer.
    *   **Map Data:** Map the "Quote Summary" text (the big list of windows) into the "Description" or "Line Item" field of the estimate. Map the "Total Price" to the estimate total.

**Why:** This bypasses the API fee because Zapier integrations are often included or cheaper, and it handles the messy logic of "finding vs creating" customers automatically.

## 2. Smart Chatbot Implementation
**Goal:** Make the "Happy Cypress Chat" functional.
**Strategy:** Use an embeddable AI chat widget or build a lightweight Vercel AI route.

**Recommendation:** Since we are on Vercel, we can build a simple API route that uses the **Vercel AI SDK** (OpenAI or Anthropic) to answer questions based on a system prompt containing your pricing and services.

**Next Steps:**
*   Do you have an OpenAI API key? If yes, I can wire up the backend to answer basic questions like "Do you clean tracks?" or "How much for a slider?" using the logic we already know.
*   *Alternative:* Use a pre-built tool like **Voiceflow** or **Tidio** (easier to manage, harder to customize visually).

## 3. Booking & Time Estimation
**Goal:** Allow users to book a slot immediately after getting a quote.
**Strategy:** "Estimate -> Time Calc -> HCP Booking".

**Time Calculation Logic (Proposal):**
We can use a **Revenue-per-Hour** heuristic.
*   *Assumption:* You aim for ~$100-$125/hr (example).
*   *Formula:* `Quote Total / $125 = Estimated Hours`.
*   *Buffer:* Add 30 mins for setup/travel.

**Implementation:**
1.  **HCP Online Booking:** Does your HCP plan support a public "Book Online" link?
2.  **The Flow:**
    *   User sees Quote ($350).
    *   System calculates: $350 / $125 = 2.8 hours. Rounds to **3 hours**.
    *   "Book Now" button links to your HCP Booking Page, pre-filling a "3 Hour Window Cleaning" slot (if HCP allows passing duration via URL) OR we just tell the user "This job will take approx 3 hours, please select a slot."

## 4. Website Review (Gap Analysis)
**Current Site (happycypressco.com) vs. New Site:**

| Feature | Old Site | New Site | Action Needed |
| :--- | :--- | :--- | :--- |
| **Aesthetic** | Wix/Standard | Custom/Modern | **None** (New is better) |
| **Content** | Brief "About", "Services" | Detailed Value Props | **Transfer** the "Full Service" list text to the new "Services" section to be specific. |
| **Social Proof** | 1 Review (Kaysea) | 2 Reviews (Kaysea + Placeholder) | **Add** more real reviews if you have them from Yelp/Google. |
| **Conversion** | "Contact Us" Form | **Instant Quote Engine** | **None** (Huge upgrade) |
| **SEO** | Basic | Needs Work | **Add** meta descriptions, og:images, and keywords for "Monterey Window Cleaning". |
| **Yelp Link** | Prominent | Footer only | **Add** a "Check us on Yelp" badge near the reviews. |

**Missing Content to Migrate:**
*   "Interior and Exterior Glass" specific wording.
*   "Vacuumed Tracks" (We have "Deep Track Cleaning", maybe align wording).
*   "Frame Cleaning" (We mention tracks, but should explicitly say frames are wiped).

## Summary of Next Actions
1.  **Zapier:** You create the Webhook -> I update the code.
2.  **Booking:** Confirm if you have a direct "HCP Online Booking" link I can use.
3.  **Chat:** Decide if you want a custom AI (requires API key) or a widget.
4.  **Content:** I will polish the text on the new site to match the specific promises of the old site (Frame Cleaning, etc.).
