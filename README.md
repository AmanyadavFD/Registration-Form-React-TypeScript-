
# 📝 Owner Registration Form – React + TypeScript

This project is an **Owner Registration Form** built with **React + TypeScript**.
It showcases how to build **reusable and type-safe form components** along with **polymorphic components** for maximum flexibility.
<img width="1366" height="768" alt="Screenshot from 2025-09-09 19-42-08" src="https://github.com/user-attachments/assets/b2235177-61de-4745-b677-5da4f101b9f5" />

---

## 🚀 Features

* ✅ **React + TypeScript** for strong typing and better scalability
* ✅ **Reusable form inputs** (`Input`, `Select`, `CheckBox`, `TextArea`)
* ✅ **Polymorphic `Box` component** – renders as different HTML elements (`div`, `section`, etc.)
* ✅ Usage of **`ComponentPropsWithoutRef`** for safer prop handling
* ✅ Clean and modular project structure

---

## 🌐 Live Demo

👉 [Registration Form – Live Demo](https://registration-form-react-type-script.vercel.app/)

---

## 📂 Project Structure


```
REGISTRATION-FORM/
│── public/
│── src/
│   ├── assets/                 # Static assets (images, etc.)
│   ├── components/
│   │   ├── Form/
│   │   │   └── Form.tsx        # Main form container
│   │   ├── FormsInputs/
│   │   │   ├── CheckBox.tsx    # Reusable checkbox
│   │   │   ├── Input.tsx       # Reusable input
│   │   │   ├── Select.tsx      # Reusable select dropdown
│   │   │   └── TextArea.tsx    # Reusable textarea
│   │   ├── Box.tsx             # Polymorphic component (as="div" | "section" | ...)
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── MainFormSection.tsx
│   │
│   ├── Layout/
│   │   └── Layout.tsx          # Layout wrapper for form
│   │
│   ├── data.ts                 # Static data (e.g., states, dropdown values)
│   ├── type.ts                 # Shared TypeScript types
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   ├── index.css
│   └── App.css
│
│── package.json
│── tsconfig.json
│── README.md
```

---

## 📖 What I Learned

1. 🔹 Building **reusable and type-safe form components** with TypeScript
2. 🔹 Creating a **polymorphic component (`Box`)** to dynamically render different HTML elements
3. 🔹 Using **`ComponentPropsWithoutRef`** to inherit props safely without extra boilerplate
4. 🔹 Organizing a React + TypeScript project with **FormInputs** and **Layout** separation

---

## 📸 Example – Polymorphic Component (`Box.tsx`)

```tsx
import React from "react";
import { ComponentPropsWithoutRef, ElementType } from "react";

type BoxProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const Box = <T extends ElementType = "div">({
  as,
  ...props
}: BoxProps<T>) => {
  const Component = as || "div";
  return <Component {...props} />;
};
```

Usage:

```tsx
<Box as="div" className="wrapper">Content inside div</Box>
<Box as="section" className="section">Content inside section</Box>
```

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Owner-Registration-Form-React-TypeScript.git
cd Owner-Registration-Form-React-TypeScript
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Project

```bash
npm run dev
# or
yarn dev
```



