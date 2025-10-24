# Why we need to use keys when creating elements
React uses keys to identify elements when comparing the old virtual DOM with the new one.
It expects a key={id} to work correctly.

In this example, we append a new item to the start of a list without giving keys.
If you click an item, it changes color. But after adding a new element, the color sticks to the position in the list, not to the item itself, showing why keys are necessary.

## How to run locally
```bash
1. npm install
2. npm run dev
```