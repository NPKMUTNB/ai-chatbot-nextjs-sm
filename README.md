# ai-chatbot-nextjs-sm
AI Chatbot project using Next.js and LangChain

---

## Installation

Before running the project, install the required packages:

```bash
npm install @langchain/openai @langchain/core @ai-sdk/langchain ai
```

### Package Descriptions
- **@ai-sdk/langchain**: เชื่อมต่อ LangChain กับ AI SDK สำหรับการใช้งานร่วมกับ UI message stream
- **@langchain/core**: Core library สำหรับการสร้างและจัดการ prompt, chain, และ message ใน LangChain
- **@langchain/openai**: ใช้สำหรับเชื่อมต่อและเรียกใช้งานโมเดล OpenAI ผ่าน LangChain
- **ai**: ฟังก์ชันและ type สำหรับการจัดการ message, stream และ response ฝั่ง UI/Frontend

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Installation

Before running the project, install the required packages:

```bash
npm install @langchain/openai @langchain/core @ai-sdk/langchain ai
```

### Package Descriptions

- **@ai-sdk/langchain**: ใช้สำหรับเชื่อมต่อ LangChain กับ AI SDK เพื่อจัดการ message stream ระหว่าง backend และ frontend
- **@langchain/core**: ไลบรารีหลักสำหรับการสร้างและจัดการ prompt, chain, และ message ใน LangChain
- **@langchain/openai**: สำหรับเชื่อมต่อและเรียกใช้งานโมเดล OpenAI ผ่าน LangChain
- **ai**: รวมฟังก์ชันและ type สำหรับการจัดการ message, stream และ response ฝั่ง UI/Frontend เช่น createUIMessageStreamResponse, UIMessage, convertToModelMessages

### ตัวอย่างการสร้าง instance ของ ChatOpenAI (OpenRouter)

```typescript
// OpenRouter ====================================================================================
const model = new ChatOpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    model: process.env.OPENROUTER_MODEL_NAME || "qwen/qwen3-235b-a22b-2507", // ชื่อโมเดลที่ต้องการใช้
    cache: false, // ปิดใช้งาน cache
    temperature: 0.7, // ความสร้างสรรค์ของคำตอบ มีระดับ 0-1 // 0 คือ ตอบตรง ๆ // 1 คือ ตอบแบบสร้างสรรค์
    maxTokens: 1000, // จำนวนคำตอบสูงสุดที่ต้องการ 1000 token
    configuration: {
        baseURL: process.env.OPENROUTER_API_BASE,
    },
    streamUsage: false, // ถ้าใช้ stream ต้องตั้งค่าเป็น true
})
```

- `apiKey`: ใช้สำหรับระบุ API Key ของ OpenRouter
- `model`: ระบุชื่อโมเดลที่ต้องการใช้งาน (เช่น qwen/qwen3-235b-a22b-2507)
- `cache`: ปิดหรือเปิดการ cache คำตอบ
- `temperature`: ระดับความสร้างสรรค์ของคำตอบ (0 = ตอบตรง, 1 = สร้างสรรค์)
- `maxTokens`: จำนวน token สูงสุดที่ต้องการ
- `configuration.baseURL`: ระบุ base URL สำหรับ OpenRouter API
- `streamUsage`: เปิด/ปิดการใช้งาน stream (บาง provider/proxy อาจไม่รองรับ)

### ตัวอย่างการสร้าง instance ของ ChatOpenAI (OpenAI)

```typescript
// สร้าง instance ของ ChatOpenAI
const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0, // ความสร้างสรรค์ของคำตอบ มีระดับ 0-1 // 0 คือ ตอบตรง ๆ // 1 คือ ตอบแบบสร้างสรรค์
  maxTokens: 300, // จำนวนคำตอบสูงสุดที่ต้องการ 300 token
})
```

- `model`: ระบุชื่อโมเดลที่ต้องการใช้งาน (เช่น gpt-4o-mini)
- `temperature`: ระดับความสร้างสรรค์ของคำตอบ (0 = ตอบตรง, 1 = สร้างสรรค์)
- `maxTokens`: จำนวน token สูงสุดที่ต้องการ

### ตัวอย่างการสร้าง instance ของ ChatOpenAI สำหรับ Ollama (Local)

```typescript
const model = new ChatOpenAI({
  model: process.env.OPENAI_MODEL_NAME || "qwen2:latest", // ชื่อโมเดลที่ต้องการใช้
  temperature: 0.7,
  maxTokens: 1000,
  configuration: {
    baseURL: process.env.OLLAMA_API_BASE || "http://localhost:11434/v1", // URL ของ Ollama API
  },
  apiKey: "ollama", // Ollama ไม่ต้องการ API key จริง แต่ต้องใส่ค่าอะไรก็ได้
})
```

- `model`: ระบุชื่อโมเดลที่ต้องการใช้งาน (เช่น qwen2:latest)
- `temperature`: ระดับความสร้างสรรค์ของคำตอบ (0 = ตอบตรง, 1 = สร้างสรรค์)
- `maxTokens`: จำนวน token สูงสุดที่ต้องการ
- `configuration.baseURL`: URL สำหรับเชื่อมต่อกับ Ollama API (เช่น http://localhost:11434/v1)
- `apiKey`: Ollama ไม่ต้องการ API key จริง แต่ต้องใส่ค่าอะไรก็ได้


