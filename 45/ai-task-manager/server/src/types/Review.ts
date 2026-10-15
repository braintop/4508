export type ReviewAnalysis = {
    sentiment: 'positive' | 'neutral' | 'negative'
    rating: number
    summary: string
}