declare module 'color-blind' {
  export function protanopia(color: string): string;
  export function protanopia(color: string, returnRGB: boolean): string;

  export function protanomaly(color: string): string;
  export function protanomaly(color: string, returnRGB: boolean): string;

  export function deuteranomaly(color: string): string;
  export function deuteranomaly(color: string, returnRGB: boolean): string;

  export function deuteranopia(color: string): string;
  export function deuteranopia(color: string, returnRGB: boolean): string;

  export function tritanomaly(color: string): string;
  export function tritanomaly(color: string, returnRGB: boolean): string;

  export function tritanopia(color: string): string;
  export function tritanopia(color: string, returnRGB: boolean): string;

  export function achromatomaly(color: string): string;
  export function achromatomaly(color: string, returnRGB: boolean): string;

  export function achromatopsia(color: string): string;
  export function achromatopsia(color: string, returnRGB: boolean): string;
}
