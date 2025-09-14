type EventHandler<E> = ((event: E) => void) | undefined;

export function composeEventHandlers<E>(...handlers: EventHandler<E>[]) {
  return (event: E) => {
    for (const handler of handlers) {
      if (handler) handler(event);
    }
  };
}
