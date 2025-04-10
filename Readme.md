# 🕒 Interactive Timeline Component

This project implements a **custom horizontal timeline component** in React, where events are displayed in space-efficient horizontal lanes. It includes features such as:

- Compact lane assignment based on start and end dates
- Interactive drag-and-drop to change event positions
- Fully dynamic layout using only vanilla JavaScript (no timeline libraries)

---

## 🚀 Features

- 📅 **Compact layout**: Events that do not overlap are displayed on the same horizontal lane.
- 🖱️ **Drag-and-drop**: Move items along the timeline to update their start and end dates.
- 🎨 **Color-coded events**: Each item is assigned a random background color.

---

## 🛠️ Stack

- React (no external timeline libraries)
- JavaScript Date API (no Moment or date-fns)
- Styled-components

---

## 📦 How to run:

```bash
npm install
npm start
```

Make sure you have Node.js and npm installed. Then run the above commands in your terminal to start the development server.

---

## 🧠 Implementation Reflection

### ✅ What I like about my implementation:
- The layout is clean and intuitive.
- Drag-and-drop interaction is lightweight and easy to use.
- Timeline scaling and positioning feel responsive without external dependencies.

### 🔁 What I would change if I were to do it again:
- Add keyboard accessibility and ARIA roles for better usability.
- Improve drag-and-drop precision with visual feedback (like ghost elements).
- Introduce undo/redo for timeline changes.
- Edit the name of the event inline.

### 💡 Design decisions:
- Inspired by Airtable’s UI style and simplicity.
- Prioritized a minimal and functional interface over animations or complex transitions.
- Used basic HTML5 drag-and-drop logic to avoid unnecessary dependencies.

### 🧪 How I would test this with more time:
- Unit tests for utility functions like `computeItemDimensions` and `assignLanes`.
- End-to-end tests using Cypress to simulate real user interactions.

