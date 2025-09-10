# อธิบายไฟล์ API ในโฟลเดอร์ `src/app/api`

## 1. route.ts
ไฟล์นี้เป็นตัวอย่าง API ที่รองรับทุก HTTP method (GET, POST, PUT, DELETE)
- ทุก method จะตอบกลับเป็น JSON พร้อมข้อความระบุว่า API ทำงานด้วย method อะไร
- ใช้ `NextResponse.json()` ในการตอบกลับ

ตัวอย่าง:
```typescript
export async function GET() {
  return NextResponse.json({ message: "API Running with GET" });
}
```

## 2. test/route.ts
ไฟล์นี้เป็นตัวอย่าง API ที่รองรับ GET, POST, PUT, DELETE และสามารถรับข้อมูลจาก query string หรือ request body ได้
- GET: รับ query string เช่น `/api/test?name=John` และตอบกลับ "Hello, John!"
- POST: รับข้อมูล JSON จาก body เช่น `{ "name": "Jane" }` และตอบกลับ "Hello, Jane!"
- PUT: รับข้อมูล JSON จาก body เช่น `{ "name": "Jane" }` และตอบกลับ "Hello, Jane!"
- DELETE: ตอบกลับข้อความ "Delete request received"

ตัวอย่าง:
```typescript
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "World";
  return NextResponse.json({ message: `Hello, ${name}!` });
}
```

## หมายเหตุ
- ทุก API ใช้ฟังก์ชัน async และตอบกลับด้วย NextResponse
- สามารถทดสอบแต่ละ method ได้ด้วย curl หรือ Postman
- เหมาะสำหรับการเรียนรู้โครงสร้าง API ใน Next.js
