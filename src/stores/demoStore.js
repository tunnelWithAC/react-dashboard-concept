export function getTableData() {

  let counter = 0;
  function createData(name, calories, fat, carbs, other) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, other };
  }

  const columnData = [
    { id: 'Ticket Location', numeric: false, label: 'Ticket Location' },
    { id: '# Tickets Sold', numeric: true, label: '# Tickets Sold' },
    { id: '# Tickets Remaining', numeric: true, label: '# Tickets Remaining' },
    { id: '% Remaining', numeric: true,  label: '% Remaining' }
  ];

  const rowData = [
    createData('Clan Terrace', 305, 3.7, 67, 0),
    createData('Main Terrace', 452, 25.0, 51, 0),
    createData('Bohermore Terrace', 262, 16.0, 24, 0),
    createData('College Rd. Terrace', 159, 6.0, 40, 0),
    createData('GT Seated Stand', 159, 6.0, 40, 0),
  ];

  const res = { 'columnData': columnData, 'rowData': rowData, 'orderBy': 'calories' }

  return res

}
