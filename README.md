# React Context Family 👨‍👩‍👧‍👦

A simple React project to demonstrate how **Context API** and **Prop Drilling** can be used to manage and share state across deeply nested components. 🧠💡

---

## 🔍 Features

- ✅ React Context API for global state management
- ✅ Prop Drilling alongside Context for comparison
- ✅ Dynamic money management (Add / Spend)
- ✅ Nested family component structure
- ✅ Conditional rendering with user interaction

---

## 🏗️ Components Structure

```
GrandPa
 ├── Dad
 │    └── Cousin
 ├── Uncle
 │    └── Cousin
 └── Aunty
      ├── Cousin
      └── Sister
```

---

## 💰 Shared State: Money

The `MoneyContext` allows all child components to:

- View current money 💸
- Add money (from Aunty ➕)
- Spend money (from Sister ➖)
- Reflect changes across the app instantly ✅

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/react-context-family.git
cd react-context-family
npm install
npm start
```

---

## 🌐 Live Demo

🔗 [Add your Netlify or Vercel deployment link here]

---

## 🛠️ Technologies Used

- React JS (Vite or CRA)
- Context API
- useState & useContext
- CSS or Tailwind CSS

---

## 🙋‍♂️ Author

**Developer Imran**  
📧 imran@example.com  
🌐 [ My portfolio➤ https://imran775-ct.github.io/developer-imran-portfolio/]

---

## 📜 License

This project is licensed under the **MIT License** – use freely!
