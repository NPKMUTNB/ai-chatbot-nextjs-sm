import { NextResponse } from "next/server"
import { ChatOpenAI } from "@langchain/openai"

// Example
// const llm = new ChatOpenAI({
//     model: "gpt-4o-mini", // ชื่อโมเดล
//     temperature: 0, // ความสร้างสรรค์ของคำตอบ มีระดับ 0-1
//     maxTokens: undefined, // จำนวนคำตอบสูงสุดที่ต้องการ
//     timeout: undefined, // ระยะเวลาในการรอคำตอบ
//     maxRetries: 2, // จำนวนครั้งสูงสุดในการลองใหม่
//     apiKey: "...",  // API Key ของคุณ
//     baseUrl: "...", // URL ของ API
//     organization: "...", // ชื่อองค์กรของคุณ
//     other params... // พารามิเตอร์อื่น ๆ
// })

// กำหนดข้อความที่ต้องการแปล
// const input = `Translate "I love programming" into Thai.`

// Model จะทำการแปลข้อความ
// invoke คือ การเรียกใช้งานโมเดล
// const result = await llm.invoke(input)

// แสดงผลลัพธ์
// console.log(result)

export async function POST() {


    // สร้าง instance ของ Ollama (Local) - ใช้ ChatOpenAI กับ baseURL ของ Ollama
    const model = new ChatOpenAI({
        model: process.env.OPENAI_MODEL_NAME || "qwen2:latest", // ชื่อโมเดลที่ต้องการใช้
        temperature: 0.7,
        maxTokens: 1000,
        configuration: {
            baseURL: process.env.OLLAMA_API_BASE || "http://localhost:11434/v1", // URL ของ Ollama API
        },
        apiKey: "ollama", // Ollama ไม่ต้องการ API key จริง แต่ต้องใส่ค่าอะไรก็ได้
    })

  // สร้าง instance ของ ChatOpenAI (OpenRouter)
  // ...

  // สร้าง instance ของ Ollama (Local) - ใช้ ChatOpenAI กับ baseURL ของ Ollama
  // ...

  // กำหนดข้อความที่ต้องการแปล
  const input = `Translate "I love programming" into Thai.`

  // Model จะทำการแปลข้อความ
  const response = await model.invoke(input)

  // แสดงผลลัพธ์
  console.log(response) // ผลลัพธ์: ฉันรักการเขียนโปรแกรม
    
}