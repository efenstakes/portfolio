

export interface Tool {
    tool: string
    proeffiency: number
}
export interface Skill {
    title?: string
    image?: string
    tools: Array<Tool>
}