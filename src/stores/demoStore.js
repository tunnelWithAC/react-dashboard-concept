export function getTableData() {

  let counter = 0;
  function createData(name, ticketsSold, ticketsRemaining, percentRemaining, protein) {
    counter += 1;
    return { id: counter, name, ticketsSold, ticketsRemaining, percentRemaining, protein };
  }

  const columnData = [
    { id: 'Ticket Location', numeric: false, label: 'Ticket Location' },
    { id: '# Tickets Sold', numeric: true, label: '# Tickets Sold' },
    { id: '# Tickets Remaining', numeric: true, label: '# Tickets Remaining' },
    { id: '% Remaining', numeric: true,  label: '% Remaining' }
  ];

  const rowData = [
    createData('Clan Terrace', 305, 3.7, 67, 0, 0),
    createData('Main Terrace', 452, 25.0, 51, 0, 0),
    createData('Bohermore Terrace', 262, 16.0, 24, 0, 0),
    createData('College Rd. Terrace', 159, 6.0, 40, 0, 0),
    createData('GT Seated Stand', 159, 6.0, 40, 0, 0),
  ];

  const res = { 'columnData': columnData, 'rowData': rowData, 'orderBy': 'ticketsSold' }

  return res

}

export function getMatchData() {
  const res = [
    { 'name': 'Munster 2018',
      'event_id': 35409,
      'tickets': [
        {'days_out': 5, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 4, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 3, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 2, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 1, 'ticket_type': 'adult', 'price': 20}
      ]
    },
    { 'name': 'Munster 2017',
      'event_id': 35409,
      'tickets': [
        {'days_out': 5, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 4, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 3, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 2, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 1, 'ticket_type': 'adult', 'price': 20}
      ]
    },
    { 'name': 'Munster 2016',
      'event_id': 35409,
      'tickets': [
        {'days_out': 5, 'ticket_type': 'student', 'price': 20},
        {'days_out': 4, 'ticket_type': 'student', 'price': 20},
        {'days_out': 3, 'ticket_type': 'student', 'price': 20},
        {'days_out': 2, 'ticket_type': 'student', 'price': 20},
        {'days_out': 1, 'ticket_type': 'student', 'price': 20}
      ]
    },
    { 'name': 'Munster 2015',
      'event_id': 35409,
      'tickets': [
        {'days_out': 5, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 4, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 3, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 2, 'ticket_type': 'adult', 'price': 20},
        {'days_out': 1, 'ticket_type': 'adult', 'price': 20}
      ]
    }
  ]

  return res
}

export function getHorizontalBarData() {
  const data = {
    labels: ['Season Tickets', 'Match Tickets', 'Corporate', 'Hospitality'],
    datasets: [
      {
        backgroundColor: [
          'rgba(255,99,132,0.4)',
          'rgba(255,99,132,0.4)',
          'rgba(255,99,132,0.4)',
          'rgba(255,99,132,0.4)'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [478, 900, 2245, 1574]
      }
    ]
  };

  return data
}
