import { TelegramClient, Api } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import input from "input";
import { GoogleGenAI } from "@google/genai";
import 'dotenv/config.js';

const apiId = 36351812; // Get from my.telegram.org
const apiHash = "db5581e1878e3799b07fa6c838299b27";
const stringSession = new StringSession(""); // Leave empty to login first time
const gemApiKey = process.env.MY_GEMINI_API_KEY;
const ai = new GoogleGenAI({ "apiKey": gemApiKey });


(async () => {
    console.log("Loading interactive example...");
    const client = new TelegramClient(stringSession, apiId, apiHash, {
        connectionRetries: 5,
    });
    await client.connect();
    await client.start({
        phoneNumber: "+380633700847",
        phoneCode: async () =>
            await input.text("Please enter the code you received: "),
        onError: (err) => console.log(err),
    });
    console.log("You should now be connected.");
    console.log(client.session.save()); // Save this string to avoid logging in again
    await client.sendMessage("me", { message: "Hello!" });
    
    console.log("Connected to Telegram");


    const channel = "pandachinatea";
    const history = await client.invoke(
        new Api.messages.GetHistory({
            peer: channel,
            limit: 100
        })
    );

    const rawText = history.messages
        .map((m) => m.message)
        .filter(Boolean)
        .join("\n---\n");

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            config: {
                responseMimeType: "application/json",
                thinkingConfig: {
                    thinkingLevel: "high"
                }
            },
            contents: `Output:JSON, parse this information, and make structured JSON, delete the emoji's, if the information is absent in post, find it on the internet, and scurpulously check for the info relevancy, and translate to Ukranian, keep only the JSON structure, create an id-slug that that contains category, name, pcs(if the tea is portioned, year.      
        Required structure:
            '''
                interface Product {
                    id: string,
                    name: string,
                    description: TeaDetails | unknown,
                    price: number,
                    imageUrl: string,
                    inStock: boolean,

                    categoryId?: string,
                    orderItem?: OrderItem[],
                    category?: Category
                }
                interface TeaDetails{
                    origin: string,
                    ingredients: string[],
                    weight: number,//grams
                    quantity: number,
                    dimensions: { // Centimeters
                        length: number,
                        width: number
                    },
                    steepTime: number, //minutes float
                    steepTemperature: number,
                    caffeine: "None" | "Low" | "Medium" | "High",
                    notes: string
                } 
            '''
            Posts:
            ${rawText}
        `,
        });

        console.log("____ Gemini response ____");
        console.log(response.text);
    } catch (error) {
        console.log("AI error: " + error);
    }
})();
