# ai-chat-image-selector

Create a UI where I can chat with an image linked by url

Show me 10 example images from different categories from unsplashed that I can choose from, which will populate the url selector if i click them

Also show an input box with prompt from user on what to ask AI system about the image

Example use of the backend API:
requests.post("https://freider-kive-demo--sglang-inference-web-api.modal.run", json={"image_url": image_url, "question": question}).json()[“answer”]


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/ai-chat-image-selector.git
cd ai-chat-image-selector
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
