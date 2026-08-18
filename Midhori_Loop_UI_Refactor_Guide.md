# Midhori Loop UI Refactor Plan

This document contains the replacement code structure and the primary
files to update.

## 1. Install

``` bash
npm install lucide-react recharts
```

## 2. Folder Structure

``` text
src/
  assets/
  components/
    layout/
    common/
    dashboard/
    forms/
  pages/
  styles/
```

## 3. Replace `App.tsx`

``` tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Certification from "./routes/Certification";
import Signup from "./routes/Signup";
import Contact from "./routes/Contact";
import Admin from "./routes/Admin";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
```

## 4. Replace `styles.css`

Replace the existing stylesheet with a modern design system including: -
CSS variables - 8px spacing system - Responsive grid - Card styles -
Button styles - Status badges - Dashboard widgets - Sticky glassmorphism
header - Better typography

(The stylesheet is intentionally summarized here because it spans
several hundred lines.)

## 5. Home Page

Create: - Hero - Statistics cards - How it works timeline - Feature
cards - CTA section

## 6. Dashboard

Create: - KPI cards - Search - Filters - Material table - Activity
feed - Charts

## 7. Signup

Convert into a multi-step form.

## 8. Admin

Add: - Overview cards - Pending approvals - Partner table - Analytics

## 9. Certification

Display downloadable certificate cards with QR placeholders.

## 10. Contact

Replace static text with a proper contact form.
