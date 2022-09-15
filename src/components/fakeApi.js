const db = {
    invoices: [
        {
            id: '172987',
            recipient: 'Jacob Mercer',
            account: 20138714,
            total: 8000,
            date: {
                created: '2011-10-05T14:48:00.000Z',
                due: '2011-10-12T00:00:00.000Z',
            },
        },
        {
            id: '173987',
            recipient: 'Adrian Cross',
            account: 30138714,
            total: 110000,
            date: {
                created: '2017-07-05T12:18:00.000Z',
                due: '2017-10-14T00:00:00.000Z',
            },
        },
        {
            id: '192987',
            recipient: 'Solomo Fokes',
            account: 20139914,
            total: 7500,
            date: {
                created: '2013-11-05T14:48:00.000Z',
                due: '2013-10-12T00:00:00.000Z',
            },
        },
        {
            id: '133987',
            recipient: 'Filip Jonson',
            account: 12338714,
            total: 15000,
            date: {
                created: '2001-10-05T14:48:00.000Z',
                due: '2001-10-12T00:00:00.000Z',
            },
        },
        {
            id: '172087',
            recipient: 'Sem Bulka',
            account: 20508714,
            total: 2000,
            date: {
                created: '2017-10-05T14:48:00.000Z',
                due: '2017-10-12T00:00:00.000Z',
            },
        },
        {
            id: '174487',
            recipient: 'Piter Pen',
            account: 20131514,
            total: 1000000,
            date: {
                created: '2019-10-05T14:48:00.000Z',
                due: '2019-10-12T00:00:00.000Z',
            },
        },
        {
            id: '199987',
            recipient: 'John Cramer',
            account: 90138714,
            total: 28000,
            date: {
                created: '2010-10-05T14:48:00.000Z',
                due: '2010-10-12T00:00:00.000Z',
            },
        },
    ]
};

export const getInvoices = () => {
    return Promise.resolve(db.invoices);
};

export const getInvoiceById = invoiceId => {
    return Promise.resolve(db.invoices.find(invoice => invoice.id === invoiceId));
};