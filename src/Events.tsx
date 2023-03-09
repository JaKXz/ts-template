import * as React from "react";

import { CalendarEvent } from "./data";

type Props = {
  list: CalendarEvent[];
};

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
    } else {
      setSorted((tempList) =>
        [...tempList].sort((a, b) => a.title.localeCompare(b.title))
      );
    }

    setSortingBy(current);
  }

  return (
    <table>
      <thead>
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
      </thead>
      <tbody>
        {sorted.map((event) => (
          <tr key={event.id}>
            <td>{event.title}</td>
            <td>{event.category}</td>
            <td>{event.start}</td>
            <td>{event.end === null ? "Present" : event.end}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
