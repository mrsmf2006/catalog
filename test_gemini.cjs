const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({});
async function test() {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: 'سلام',
        });
        console.log("Success:", response.text);
    } catch(e) {
        console.log("Error:", e.message);
    }
}
test();
