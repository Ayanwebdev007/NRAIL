---
name: stitch-design
description: Design and develop premium websites and UI components using Google's Stitch AI tool. Use this skill when the user asks to design, mockup, or build a new website, page, or complex UI component from a text prompt.
---

# Stitch-Design Skill

This skill allows the agent to use the **StitchMCP** server to bridge the gap between high-level design concepts and production-ready code.

## Core Capabilities

1.  **Stitch Project Management**:
    *   Initialize new design projects with `mcp_StitchMCP_create_project`.
    *   List existing work using `mcp_StitchMCP_list_projects`.

2.  **AI-Powered UI Generation**:
    *   Generate complete screen mockups from natural language prompts using `mcp_StitchMCP_generate_screen_from_text`.
    *   Iterate and refine designs with `mcp_StitchMCP_edit_screens`.
    *   Explore visual variations with `mcp_StitchMCP_generate_variants`.

3.  **Design-to-Code Implementation**:
    *   Retrieve design details and assets using `mcp_StitchMCP_get_screen`.
    *   Translate visual mockups from Stitch into high-quality HTML, CSS (Tailwind), and React components.

## When to Use

- When a user asks: "Design a landing page for X" or "Create a modern contact form".
- When you need visual inspiration or a solid starting point for a new feature.
- When building multi-page applications that require consistent design language.

## Workflow Patterns

### Pattern 1: Concept to Page
1.  **Create Project**: Start with `mcp_StitchMCP_create_project(title="Project Name")`.
2.  **Generate Screen**: Use `mcp_StitchMCP_generate_screen_from_text(projectId=..., prompt=...)`.
3.  **Refine**: Call `mcp_StitchMCP_edit_screens(projectId=..., selectedScreenIds=..., prompt=...)` based on user feedback.
4.  **Implement**: Use the generated design as a reference to write code in the local project.

### Pattern 2: Component Design
1.  Use `mcp_StitchMCP_generate_screen_from_text` focusing on a specific component (e.g., "A premium testimonial card").
2.  Analyze the generated structure and styles.
3.  Implement the React component locally using the visual reference.

## Premium Design Principles

When using Stitch, always promote:
- **Rich Aesthetics**: Vibrant colors, dark modes, glassmorphism.
- **Dynamic Interaction**: Hover effects, micro-animations.
- **Modern Typography**: Inter, Outfit, Roboto.
- **Visual Proof**: Capture screenshots of the Stitch designs to show the USER.
