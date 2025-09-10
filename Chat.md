# อธิบายไฟล์ API ในโฟลเดอร์ `src/app/api/*`

## chat/route.ts
API สำหรับ Chatbot ที่ใช้ Next.js + LangChain + OpenAI
- รับข้อความจาก frontend (useChat hook)
- สร้าง Prompt Template กำหนดบทบาท AI
- เรียกใช้งานโมเดล OpenAI (gpt-4o-mini) ผ่าน LangChain
- ส่งผลลัพธ์กลับแบบ Streaming
- มีการจัดการ error และตอบกลับ status 500

## chat_01_start/route.ts
API ตัวอย่างการใช้งาน ChatOpenAI
- สร้าง instance ของ ChatOpenAI ด้วย model, temperature, maxTokens
- ตัวอย่างการแปลข้อความและการตั้งค่า system prompt
- รองรับการส่ง message หลายรูปแบบ (role: system, user, assistant)
- ดึงชื่อโมเดลจริงจาก metadata
- มีการจัดการ error และตอบกลับ JSON

## chat_02_request/route.ts
API ที่รับ message จาก client ผ่าน body
- สร้าง instance ของ ChatOpenAI (gpt-4o-mini)
- รับ message array จาก body
- เรียกใช้งานโมเดลและส่งกลับ content + usedModel
- มีการจัดการ error และตอบกลับ JSON

## test/route.ts
API ตัวอย่างที่รองรับ GET, POST, PUT, DELETE
- GET: รับ query string เช่น `/api/test?name=John` และตอบกลับ "Hello, John!"
- POST/PUT: รับข้อมูล JSON จาก body เช่น `{ "name": "Jane" }` และตอบกลับ "Hello, Jane!"
- DELETE: ตอบกลับข้อความ "Delete request received"

## route.ts
API ตัวอย่างที่รองรับทุก HTTP method (GET, POST, PUT, DELETE)
- ทุก method ตอบกลับเป็น JSON ระบุว่า API ทำงานด้วย method อะไร

## หมายเหตุ
- ทุก API ใช้ฟังก์ชัน async และตอบกลับด้วย NextResponse
- สามารถทดสอบแต่ละ method ได้ด้วย curl หรือ Postman
- เหมาะสำหรับการเรียนรู้โครงสร้าง API ใน Next.js และการเชื่อมต่อ AI
