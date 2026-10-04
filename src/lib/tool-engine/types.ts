export interface ToolResultGroup {
  heading?: string;
  lines: string[];
}

export interface ToolResult {
  title?: string;
  groups: ToolResultGroup[];
}

export type Generator = (input: string, opts?: Record<string, unknown>) => ToolResult;

/* Shared keyword helpers used across generators. */
export function cleanKeywords(input: string): string[] {
  return input
    .split(/[,\n;]+/)
    .map((k) => k.trim())
    .filter(Boolean)
    .slice(0, 8);
}

export function firstKeyword(input: string): string {
  return cleanKeywords(input)[0] || input || "your topic";
}
