import * as React from "react";

import type { CalendarEvent } from "./data";

type Props = {
  list: CalendarEvent[];
};
type EventMap = { [key: CalendarEvent["id"]]: { start: number; end: number } };

export function Events({ list }: Props) {
  const [sorted, setSorted] = React.useState(list);
  const [sortingBy, setSortingBy] = React.useState<string | null>(null);

  // thorw in a use effect to handle list changing

  function handleColumnClick(
    event: React.MouseEvent<HTMLTableHeaderCellElement>
  ) {
    const prev = sortingBy;
    const current = event.currentTarget.textContent;

    if (prev === current) {
      setSorted((tempList) => [...tempList].reverse());
    } else if (current) {
      setSorted((tempList) =>
        [...tempList].sort((a, b) => a[current] != null && a[current].localeCompare(b[current]))
      );
    }

    setSortingBy(current);
  }

  const eventMap: EventMap = list.reduce(
    (acc, event) => ({
      ...acc,
      [event.id]: {
        start: new Date(event.start).getTime(),
        end: event.end === null ? Infinity : new Date(event.end).getTime()
      }
    }),
    {}
  );

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(list[0])
            .map(
              (header) =>
                header !== "id" && (
                  <th onClick={handleColumnClick} key={header}>
                    {sortingBy === header ? <em>{header}</em> : header}
                  </th>
                )
            )
            .filter(Boolean)}
        </tr>
      </thead>
      <tbody>
        {sorted.map((event) => (
          <tr key={event.id} className={allConflictingEvents(event, eventMap)}>
            <td>{event.title}</td>
            <td>{event.category}</td>
            <td>{formatDate(event.start)}</td>
            <td>{event.end === null ? "Present" : formatDate(event.end)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "PST"
  }).format(new Date(date));
}

function allConflictingEvents(event: CalendarEvent, map: EventMap): string {
  return Object.entries(map)
    .filter(([eventId, { start, end }]) => {
      if (String(event.id) === eventId) return false;
      const { start: startTime, end: endTime } = map[event.id];
      return (
        // current event's end is between another event's points on the timeline
        (endTime > start && endTime < end) ||
        // current event's start is between another event's points on the timeline
        (startTime < end && startTime > start)
      );
    })
    .map(([eventId]) => `conflict-with-${eventId}`)
    .join(" ");
}
