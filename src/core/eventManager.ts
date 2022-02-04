export const EventManager = (() => {
  const eventMapper: {
    [event: string]: {
      className: string;
      handler: Function;
    }[];
  } = {};
  const registedHandler: { event: string; handler: Function }[] = [];

  const addEventHandler = (
    className: string,
    event: string,
    handler: Function
  ) => {
    if (!eventMapper[event]) eventMapper[event] = [];
    eventMapper[event].push({ className, handler });
  };
  const regist = () => {
    Object.keys(eventMapper).forEach((event) => {
      const eventHandler = (e: any) => {
        const candidates = eventMapper[event];
        const targets = candidates.filter((candidate) =>
          e.target.classList.contains(candidate.className)
        );
        targets.forEach((target) => {
          target.handler();
        });
      };
      registedHandler.push({ event, handler: eventHandler });
      document.addEventListener(event, eventHandler);
    });
  };

  return { addEventHandler, regist };
})();

export default EventManager;
