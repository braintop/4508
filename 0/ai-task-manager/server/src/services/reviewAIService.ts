import { GoogleGenAI, Type } from '@google/genai'

import { ReviewAnalysis } from '../types/Review'

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})


export async function analyzeReview(
    reviewText: string
): Promise<ReviewAnalysis> {

    const response = await ai.models.generateContent({

        model: 'gemini-2.5-flash',

        contents: reviewText,

        config: {

            systemInstruction: `
You analyze customer product reviews.

Rules:

1. Determine the sentiment.

2. sentiment must be:
positive
neutral
negative

3. Give the review a rating from 1 to 5.

4. Create a short summary of the review.

5. Return only the requested structured data.
            `,

            responseMimeType: 'application/json',

            responseSchema: {

                type: Type.OBJECT,

                properties: {

                    sentiment: {
                        type: Type.STRING,
                        enum: [
                            'positive',
                            'neutral',
                            'negative'
                        ]
                    },

                    rating: {
                        type: Type.NUMBER
                    },

                    summary: {
                        type: Type.STRING
                    }

                },

                required: [
                    'sentiment',
                    'rating',
                    'summary'
                ]
            }
        }
    })

    const analysis: ReviewAnalysis =
        JSON.parse(response.text ?? '{}')

    return analysis
}