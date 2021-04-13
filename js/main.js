var app = new Vue({
    el: '#root',
    data: {
        header: {
            links: {
                names: ['home','pages','blog','shop','shortcodes','support','contact'],
                active: 0,
                pathStart: 'img/icons/header/',
                pathEnd: '.png'
            }
        },
        footer: {
            map: {
                nImages: 14,
                pathStart: 'img/images/map/',
                pathEnd: '.png'
            },
            contacts: {
                contents: [
                    {
                        name: 'postal address',
                        text: [
                            'fable care center',
                            '85 fentiman ave',
                            'ottawa, ON K1S 0T7'
                        ]
                    },
                    {
                        name: 'phone & e-mail',
                        text: [
                            'phone: 1-800-64-38',
                            'fax: 1-800-64-39',
                            'office@fable.com'
                        ]
                    },
                    {
                        name: 'business hours',
                        text: [
                            'monday - friday',
                            '8.00 am - 5.00 pm',
                            'weekend closed'
                        ]
                    },
                    {
                        name: 'sessions',
                        text: [
                            'mornings, 8 am - 12 noon',
                            'afternoons, 1 pm - 5 pm',
                            'full day, 8 am - 5 pm'
                        ]
                    }
                ],
                pathStart: 'img/icons/footer/contacts/',
                pathEnd: '.png'
            }
        }
    }
});
Vue.config.devtools = true;