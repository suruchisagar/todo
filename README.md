#  Todo List App — React + Tailwind CSS

A simple and clean **Todo List App** built with **React**, **Tailwind CSS**, and **Vite**.  
This app allows users to add tasks, mark them as completed, and delete them with smooth UI interactions.

---

##  Features

###  Add Tasks  
Add new items using the input field that appears when clicking **Add New Task**.

###  Mark Tasks as Completed  
Check the checkbox to toggle completion.  
Completed tasks show a **line-through** effect.

###  Delete Tasks  
Hover on a task to show the **DELETE** button.  
Removes the item instantly.

###  Unique Todo Identification  
Each task uses `Date.now()` to generate a unique ID, ensuring correct rendering and preventing UI bugs.

###  Responsive & Beautiful UI  
- Background image with `bg-cover`  
- Tailwind-based layout  
- Smooth hover and transition effects  

---

##  Project Structure

```
src/
│
├── assets/
│   └── bg-image.jpg
│
├── components/
│   └── AddItem.jsx
│
└── App.jsx
```

---

##  Core Logic Overview

### Add New Todo
```js
setTodos([...todos, { id: Date.now(), title: text }]);
```

### Toggle Task Completion
```js
updated[index].status = !updated[index].status;
```

### Delete Todo
```js
updated.splice(index, 1);
```

### Fix Checkbox Bug with Unique Keys
```jsx
<Child key={item.id} ... />
```

---

## UI Behavior

- The **AddItem** component handles:
  - Add todo
  - Toggle input visibility
  - Render todo list

- The **Child** component handles:
  - Display of a single todo
  - Completion toggle
  - Delete button on hover

---



---

## Technologies Used

| Tech | Purpose |
|------|---------|
| **React** | Component-based UI |
| **Tailwind CSS** | Styling |
| **Vite** | Fast dev environment |
| **JavaScript** | Main logic |

---

## Future Enhancements  
- Save todos using **localStorage**  
- Add **edit task** feature  
- Add **task categories**  
- Add **dark mode**  
- Add **animations**  


