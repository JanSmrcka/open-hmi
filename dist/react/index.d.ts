import { HmiCounter } from '..';

// Export component types for direct use
export { HmiCounter };

// Default export for dynamic imports in Next.js
export default function HmiComponents(): null;

// This makes the custom elements available in JSX automatically
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hmi-counter': React.DetailedHTMLProps<React.HTMLAttributes<any>, any>;
      // Add more components as they are created
    }
  }
}
