div([
    span(['Name'], {
        class: 'p-inputgroup-addon'
    }),
    pInput({
        '[(ngModel)]': 'conditions.name'
    }),
    pButton([],{
        label:'hello',
        '(click)':"show()"
    })
], {
    class: 'p-inputgroup'
});