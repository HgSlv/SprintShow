define(function () {
    return [
    {
        "id": "AD-8353",
        "name": "Remove ipayment from Now DemoShop Type",
        "type": "Task",
        "summary": "Remove ipayment from Now DemoShop Type",
        "priority": "Major",
        "integrated": "7.16.0",
        "platform": "ePages6"
    },
    {
        "id": "AD-8223",
        "name": "Mollie: Use redirect instead of post to external payment page",
        "type": "Research",
        "summary": "We are doing a POST request to their payment page, but this needs to be a redirect request.",
        "priority": "Critical",
        "integrated": "7.16.0",
        "platform": "ePagesJ",
        "links": [
            "<a href='https://demounity.barcelona.epages.systems/' target='_blank'>ePages Now SF</a>",
            "<a href='http://barcelona.epages.systems/epages/DemoShop.mobile' target='_blank'>Mobile SF</a>"
        ]
    },
    {
        "id": "ESF-1647",
        "name": "",
        "type": "Bug",
        "summary": "The ESF tests for PayPal Express are broken and is not running in the epages pipeline right now",
        "priority": "Major",
        "integrated": null,
        "platform": "ePages6"
    },
    {
        "id": "AD-8336",
        "name": "Add ESF Tests to our pipeline",
        "type": "Task",
        "summary": "As part of our ESF Epic we decided to create more transparency, before repairing test and rewriting them for epages Now.",
        "priority": "Major",
        "integrated": null,
        "platform": "ePages6"
    }
]
})
