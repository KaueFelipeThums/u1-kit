import type { Ref, RefObject } from 'react';

/**
 * Junta múltiplas refs em uma única ref.
 */
export function composeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as RefObject<T | null>).current = node;
      }
    });
  };
}
