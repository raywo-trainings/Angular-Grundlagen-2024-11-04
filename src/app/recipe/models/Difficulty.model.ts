export enum Difficulty {
  EASY = "Einfach",
  MEDIUM = "Mittel",
  HARD = "Schwierig"
}

// Alternative zu enums in TypeScript. Auf diese Art sind „enums“ meist
// leichter in der Komponente zu handhaben.
type DifficultyType = "Einfach" | "Mittel" | "Schwierig"
let difficulty: DifficultyType = "Einfach"
