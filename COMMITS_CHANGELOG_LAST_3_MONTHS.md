# NRAIL Website — Comprehensive Commit Change Log & Audit Report
**Reporting Period:** July 13, 2026 – October 13, 2026 *(Last 3 Months)*  
*(Includes contextual reference to June 2026 development milestones and current uncommitted working-tree status)*

---

## Executive Summary

Over the past three months (July–October 2026), the primary development focus on the **NRAIL** web application centered on:
1. **33rd Annual General Meeting (AGM 2025–26) Lifecycle:** Complete roll-out of AGM documentation—from pre-dispatch notices, newspaper advertisements, and 2025–26 Annual Report publication to final board proceedings, scrutinizer reports, and voting outcomes.
2. **FY 2026–27 Compliance & Regulatory Disclosures:** Seamless onboarding of the new fiscal year (2026–27) for SEBI LODR compliances, quarterly results (Q1 FY27 ended June 30, 2026), shareholding patterns, secretarial audits, investor complaint statements, and credit rating intimations.
3. **Smart ODR & Regulatory Navigation Enhancements:** Integration of SEBI's Online Dispute Resolution (Smart ODR) portal into the Other Compliances module, along with sensitive document access control for Independent Directors.
4. **UI/UX & Terminology Alignment:** Renaming navigation and page headers for industry standardization (e.g., "Financial Reports" → "Financial Results", "NRAIL Annual Reports" → "Annual Reports", "Policies at NRAIL" → "Policies").
5. **Asset Optimization & Performance:** Conversion of heavy event photography to modern `.webp` formats, PDF size compression for faster loading, and Vite development server optimization to ignore distribution archive artifacts.

---

## Commit Summary Overview (Last 3 Months)

| Commit Hash | Date | Author | Commit Message Summary | Key Changes / Affected Modules |
| :--- | :--- | :--- | :--- | :--- |
| `1792426` | 2026-09-04 | Ayaansoftdev007 | `feat(investors): add compressed 33rd AGM Proceedings, Voting Result & Scrutinizer Report, and Newsroom Corrigendum` | 33rd AGM Proceedings, Voting Results, Newsroom Newspaper Corrigendum PDF |
| `4e89c00` | 2026-08-18 | GS3 SOLUTION | `feat(documents): add 2026-27 Newsroom and 33rd AGM PDFs with compression, clean up duplicate assets` | Q1 FY27 Results, AGM Intimations, Navbar/Breadcrumb renaming, Vite watcher config |
| `119c0a8` | 2026-08-04 | Ayaansoftdev007 | `add: 33rd AGM Notice & Annual Report 2025-26 PDFs (compressed)` | Annual Report 2025-26, AGM Notice 2025-26, .gitignore update |
| `159b838` | 2026-07-30 | Ayaansoftdev007 | `add: Pre Dispatch Newspaper publication PDF for 33rd AGM (2025-26)` | Pre-dispatch AGM newspaper ad PDF |
| `9df41fb` | 2026-07-28 | GS3 SOLUTION | `add: investor PDF documents and 2026-27 tabs for Other Compliances, Newsroom, and Shareholder Information` | FY 2026-27 Shareholding pattern, Q1 Compliances, Credit Rating, Board Meeting notice |
| `12089f6` | 2026-07-21 | GS3 SOLUTION | `Add 33rd AGM tab, Smart ODR link, filter Independent Directors docs, and optimize environment day images` | AgmPage 33rd AGM tab & empty state, Smart ODR portal link, WebP conversion |

---

## Detailed Breakdown of Commits (Chronological: Most Recent First)

### 1. Commit `17924268d9130982c0ed1c19a9f8c3bf6de59707`
- **Date:** Friday, September 4, 2026 (14:15:30 +0530)
- **Author:** Ayaansoftdev007 (`ayaan007ayk@gmail.com`)
- **Subject:** `feat(investors): add compressed 33rd AGM Proceedings, Voting Result & Scrutinizer Report, and Newsroom Corrigendum`

#### Details & Files Changed:
1. **33rd AGM Official Post-Meeting Documents:**
   - Added: `client/src/assets/4. AGM/4. AGM/33rd AGM (2025-26)/Proceedings of 33rd AGM.pdf` (235 KB)
   - Added: `client/src/assets/4. AGM/4. AGM/33rd AGM (2025-26)/Voting result and scrutinizer report.pdf` (813 KB)
   - *Impact:* Completes statutory filing requirements post-AGM under Regulation 44 and Regulation 30 of SEBI (Listing Obligations and Disclosure Requirements).
2. **Investor Newsroom Disclosures:**
   - Added: `client/src/assets/7. Newsroom/7. Newsroom/2026-27/CORRIGENDUM TO NEWSPAPER PUBLICATION - 19.08.2026.pdf` (1.55 MB)
   - *Impact:* Publishes official corrigendum regarding newspaper AGM notices for FY 2026-27.

---

### 2. Commit `4e89c0014e8f4693a82b488620baf6d6dc2bc9c3`
- **Date:** Tuesday, August 18, 2026 (20:06:58 +0530)
- **Author:** GS3 SOLUTION (`gs3websolutions@gmail.com`)
- **Subject:** `feat(documents): add 2026-27 Newsroom and 33rd AGM PDFs with compression, clean up duplicate assets`

#### Details & Files Changed:
1. **Q1 FY 2026-27 Financial Results:**
   - Added: `client/src/assets/2. Financial Report/2. Financial Report/2026-27/QUARTER ENDED JUNE 30, 2026.pdf` (4.11 MB)
   - *Impact:* Made Q1 FY27 unaudited financial statement accessible on the Financial Results page under the newly introduced 2026-27 fiscal category.
2. **33rd AGM Intimation & Notice Documents:**
   - Added: `INTIMATION OF ANNUAL REPORT AND NOTICE.pdf` (9.52 MB)
   - Added: `INTIMATION OF NOTICE OF AGM.pdf` (1.03 MB)
   - Added: `INTIMATION OF RECORD DATE_04-08-2026.pdf` (685 KB)
   - Added: `NOTICE UNDER SECTION 160 - P K MUNDRA.pdf` (301 KB)
   - Added: `POST DISPATCH NEWSPAPER PUBLICATION_05-08-2026.pdf` (5.61 MB)
3. **Newsroom & Corporate Disclosures (FY 2026-27):**
   - Added: `CLOSURE OF TRADING WINDOW - 30.06.2026.pdf` (41 KB)
   - Added: `Intimation under Reg 30 - Form INC 26-15.08.2026.pdf` (4.43 MB)
   - Added: `NEWSPAPER RESULTS - 05.08.2026.pdf` (3.77 MB)
   - Added: `OUTCOME OF BOARD MEETING - 05.08.2026.pdf` (854 KB)
4. **Product Asset Compression & Cleanup:**
   - Added: `client/src/assets/Iconic Grey Board 16.04.2025.pdf` (200 KB)
   - Replaced / compressed: `client/src/assets/Specifications - NR Iconic Grey Back.pdf` (285 KB → 200 KB)
   - Removed obsolete duplicate: `client/src/assets/11. Other Compliances/Related Party Transactions Disclosure/RPT Disclosure- 30.06.2020 (1).pdf`
   - Modified `client/src/pages/DuplexBoardPage.jsx`: Updated spec PDF import link to reference `Iconic Grey Board 16.04.2025.pdf`.
5. **UI & Navigation Modernization:**
   - `client/src/components/Navbar/Navbar.jsx`:
     - Changed `'Financial Report'` to `'Financial Results'`
     - Changed `'NRAIL Annual Report'` to `'Annual Reports'`
   - `client/src/pages/FinancialReportsPage.jsx`:
     - Updated breadcrumb text and header title from `"Financial Reports"` to `"Financial Results"`.
   - `client/src/pages/NrailAnnualReportsPage.jsx`:
     - Updated breadcrumb text and main banner title from `"NRAIL Annual Reports"` to `"Annual Reports"`.
6. **Vite Build & Watcher Optimization:**
   - Modified `client/vite.config.js`:
     ```javascript
     server: {
       watch: {
         ignored: ['**/dist/**', '**/*.zip', '**/*.tar.gz'],
       },
     }
     ```
     *Benefit:* Prevents dev server file-watcher thrashing and accidental hot reloads when bundling archive releases or outputting zip files.

---

### 3. Commit `119c0a8a46a5d990b948dbe57d820207f9f663fb`
- **Date:** Tuesday, August 4, 2026 (14:07:45 +0530)
- **Author:** Ayaansoftdev007 (`ayaan007ayk@gmail.com`)
- **Subject:** `add: 33rd AGM Notice & Annual Report 2025-26 PDFs (compressed)`

#### Details & Files Changed:
1. **Annual Report 2025-26:**
   - Added: `client/src/assets/3. NRAIL Annual Report/3. NRAIL Annual Report/Annual Report-2025-26.pdf` (4.01 MB compressed)
   - *Impact:* Official publication of the FY 2025-26 Annual Report on the dedicated Annual Reports page.
2. **Notice of 33rd AGM:**
   - Added: `client/src/assets/4. AGM/4. AGM/33rd AGM (2025-26)/NOTICE - 2025-26.pdf` (1.68 MB)
3. **Repository Cleanliness:**
   - Adjusted `.gitignore` to maintain proper tracking of designated asset directories.

---

### 4. Commit `159b8385b7a641a7e6fc27154e058fb2c2331186`
- **Date:** Thursday, July 30, 2026 (17:02:38 +0530)
- **Author:** Ayaansoftdev007 (`ayaan007ayk@gmail.com`)
- **Subject:** `add: Pre Dispatch Newspaper publication PDF for 33rd AGM (2025-26)`

#### Details & Files Changed:
- Added: `client/src/assets/4. AGM/4. AGM/33rd AGM (2025-26)/Pre Dispatch Newspaper publication_30-07-2026.pdf` (2.46 MB)
- *Impact:* Published statutory pre-dispatch newspaper advertisement informing shareholders about e-voting and AGM convening dates.

---

### 5. Commit `9df41fb6a05ac4238214b7770ee042c6badeeca0`
- **Date:** Tuesday, July 28, 2026 (15:32:27 +0530)
- **Author:** GS3 SOLUTION (`gs3websolutions@gmail.com`)
- **Subject:** `add: investor PDF documents and 2026-27 tabs for Other Compliances, Newsroom, and Shareholder Information`

#### Details & Files Changed:
1. **Shareholding Pattern (Q1 FY27):**
   - Added: `client/src/assets/1.Shareholder Information/1.Shareholder Information/Shareholding Pattern/2026-27/Shareholding Pattern-30.06.2026.pdf` (192 KB)
2. **Statutory Governance & Compliance Reports:**
   - Added: `Integrated Governance Documents/Integrated Governance - 31.03.2026.pdf` (204 KB)
   - Added: `Investor Complaints Report/Report on Investor Complaints-30.06.2026.pdf` (67 KB)
   - Added: `Investor Complaints Report/Report on Investor Complaints-31.03.2026.pdf` (67 KB)
   - Added: `Related Party Transactions Disclosure/RPT Disclosure-31.03.2026.pdf` (203 KB)
   - Added: `Share Capital Audit Report/Share Capital Audit Report-30.06.2026.pdf` (774 KB)
   - Added: `Share Capital Audit Report/Share Capital Audit Report-31.03.2026.pdf` (3.80 MB)
   - Added: `secretarial Compliance Report/Secretarial Compliance Report-31.03.2026.pdf` (438 KB)
3. **Newsroom & Board Intimations:**
   - Added: `7. Newsroom/2026-27/Intimation Reg 30 Credit Rating-17.07.2026.pdf` (740 KB)
   - Added: `7. Newsroom/2026-27/Notice of Board meeting-05.08.2026.pdf` (31 KB)
   - Added: `8. Investor Information/Intimation Reg 30 Credit Rating-17.07.2026.pdf` (740 KB)
   - Added: `8. Investor Information/Notice of Board meeting-05.08.2026.pdf` (31 KB)
4. *Impact:* Provisioned initial FY 2026-27 subcategories across `ShareholderInformationPage`, `OtherCompliancesPage`, and `NewsroomPage`.

---

### 6. Commit `12089f664bd0c7a76c40d2e4b107aa4ce7196f5f`
- **Date:** Tuesday, July 21, 2026 (15:33:53 +0530)
- **Author:** GS3 SOLUTION (`gs3websolutions@gmail.com`)
- **Subject:** `Add 33rd AGM tab, Smart ODR link, filter Independent Directors docs, and optimize environment day images`

#### Details & Files Changed:
1. **AGM Page (`client/src/pages/AgmPage.jsx`):**
   - Programmatically injected `'33RD AGM (2025-26)'` into the category tab array even if no documents had been committed yet.
   - Introduced user-friendly empty state message: `No documents available yet for this AGM.`
2. **Other Compliances Page (`client/src/pages/OtherCompliancesPage.jsx`):**
   - Added **Smart ODR** category tile that opens `https://smartodr.in/login` in an external browser tab upon clicking.
   - Implemented strict filtering on the `Independent Directors` category to only render:
     - *Terms & Conditions of Appointment of Independent Directors.pdf*
     - *Familiarization Programme for Independent Directors.pdf*
     *(Prevents direct display of individual appointment letters in that section).*
3. **Media Page & Environment Day Photos (`client/src/pages/MediaPage.jsx`):**
   - Converted five WhatsApp event images (`WhatsApp Image 2026-06-23 at 3.07.*.jpeg`) to `.webp` format, saving bandwidth and load times.
   - Streamlined `import.meta.glob('../assets/**/*.webp')` selector in `MediaPage.jsx` to exclusively load modern `.webp` media.

---

## Thematic Categorization of Changes

### A. 33rd Annual General Meeting (AGM 2025–26) Pipeline
```
[Pre-Dispatch Newspaper Ad] (30-07-2026)
         │
         ▼
[Notice of 33rd AGM & Annual Report 2025-26] (04-08-2026)
         │
         ▼
[Record Date, Section 160 Notice & Post-Dispatch Ad] (18-08-2026)
         │
         ▼
[Proceedings, Voting Results & Scrutinizer Report] (04-09-2026)
```

### B. FY 2026–27 Statutory Compliance Pipeline
- **Financial Reporting:** Q1 FY27 Results for period ending June 30, 2026.
- **SEBI LODR Compliance:** Reg 30 Credit Rating intimation, Board Meeting Intimations, Trading Window Closure, Shareholding Pattern as of 30.06.2026, Reconciliation of Share Capital Audit, and Investor Grievance Reports.
- **Dispute Resolution:** One-click redirection to SEBI Smart ODR (`https://smartodr.in/login`).

### C. UI & Information Architecture
- **Navbar & Breadcrumb Alignments:**
  - Standardized terminology across header menus and page titles (`Financial Reports` → `Financial Results`, `NRAIL Annual Reports` → `Annual Reports`).
- **Media Optimization:**
  - Full migration of event photography to `.webp`.
  - Compression applied across high-volume PDF files to improve mobile download speeds.
- **Developer Experience:**
  - Vite configuration updated with file-watcher ignore flags for build outputs and zip archives.

---

## Contextual Prior Changes (Late June 2026 Reference)

To give full context to the quarterly changes, the following major updates immediately preceded the July–September window:
- **`1a8c9ca` (2026-06-27):** Reorganized Independent Directors documents into Other Compliances; removed redundant directorship entity PDF; added Environment Day gallery; updated Deepak Asopa portrait.
- **`ae80430` (2026-06-15):** Rewrote the core Mission Statement on the *Our Story* page.
- **`e330e14` (2026-06-14):** Fixed Windows vs Linux case-sensitivity import discrepancy for PDF files in `LeadershipPage.jsx`.
- **`1e8cd65` (2026-06-14):** Added five new leadership testimonials to *Employee Stories* (Amandeep Singh, Chitranjan, Deepak Asopa, Rajendra More, Rasik Padia); refreshed SEBI LODR disclosures and contact phone numbers.
- **`9fe8c17` (2026-06-09):** Updated Corporate Video modal link on Navbar and tuned Core Values grid spacing.
- **`86121c3` (2026-06-03):** Mobile responsive layout revamp across Commitments, Community Champs, Contact, and Investor detail pages.

---

## Current Working Tree Status (Pending / In-Progress Changes)

The workspace currently contains working-tree modifications that are uncommitted:
1. **`PoliciesPage.jsx` Simplification:** Refactoring policies from a multi-level nested folder view into a streamlined single-level card grid.
2. **`EmployeeStories.jsx` Image Positioning:** Adding fine-grained object position properties (`position: "object-left"`, `mobileCenter: true`) to ensure leadership photos are centered accurately on mobile screens.
3. **`LeadershipPage.jsx`:** Preparing the inclusion of **Manoj Chauhan** (*Chief Marketing & Business Transformation Officer*).
4. **MOA & AOA Consolidation:** Consolidating Memorandum & Articles of Association documents in Other Compliances.
5. **Deployment Scripts:** Addition of automated build deployment helpers (`client/copy_htaccess.cjs`, `client/zip_dist.cjs`, `client/public/.htaccess`).
6. **`EmployeeStories.jsx` Testimonial Removal:** Removed Sr. No. 07 (Amandeep Singh, *Sr. Vice President - Procurement & Materials*) from the Home Page Employee Stories / Testimonials section and re-indexed stories 07 through 13 accordingly.
