// This configures the apostrophe-users module to add an admin-level
// group by default:

module.exports = {
    /*restApi: true*/
    groups: [
        {
            title: 'customer',
            permissions: []
        },
        {
            title: 'admin',
            permissions: ['admin']
        },
        {
            title: 'center',
            permissions: ['admin']
        },
        {
            title: 'partner',
            permissions: []
        }
    ],
    addFields: [
        {
            name: 'canLogin',
            label: 'Can login to backend',
            type: 'boolean'
        }
    ],
    removeFields: [
        'disabled'
    ]

};
