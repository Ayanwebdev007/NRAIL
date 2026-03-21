---
name: visual-verify
description: Use the browser tool to verify UI consistency, responsiveness, and functional correctness. Use this skill to perform automated visual regression tests and ensure the UI matches the intended design across all breakpoints.
---

# Visual-Verify Skill

This skill allows the agent to maintain high-quality UI by providing a structured way to test and confirm visual changes.

## Core Capabilities

1.  **Breakpoint Testing**:
    *   Verify layout at **Desktop** (1280px+), **Tablet** (768px+), and **Mobile** (375px+).
    *   Check for horizontal overflow, overlapping elements, or broken grids.

2.  **Visual Consistency**:
    *   Confirm that implemented code matches the design (from Stitch or implementation plan).
    *   Check for correct font sizing, brand colors, and spacing.

3.  **Interaction Verification**:
    *   Test hover states (buttons, cards, links).
    *   Confirm that animations (sliders, fades, transforms) trigger and finish correctly.
    *   Validate form interactions and navigation links.

4.  **Proof of Work**:
    *   Capture screenshots for the USER to review.

## When to Use

- After any major UI change.
- Before final delivery (in VERIFICATION mode).
- When the user reports: "Something looks wrong" or "It's broken on mobile."

## Workflow

1.  **Launch Preview**: Ensure the dev server is running (`npm run dev`).
2.  **Browser Scan**: Use `browser_subagent` to navigate to the target URL.
3.  **Visual Audit**: Inspect elements, capture screenshots, and compare with the goal.
4.  **Confirm**: If everything is correct, provide a walkthrough to the USER.
