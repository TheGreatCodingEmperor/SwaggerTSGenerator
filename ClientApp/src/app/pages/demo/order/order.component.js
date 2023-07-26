function div(innerHTMLs, attrs) {
    return `<div ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</div>`
}

function span(innerHTMLs, attrs) {
    return `<span ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</span>`
}

function p(innerHTMLs, attrs) {
    return `<p ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</p>`
}

function table(innerHTMLs, attrs) {
    return `<table ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</table>`
}

function tr(innerHTMLs, attrs) {
    return `<tr ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</tr>`
}

function th(innerHTMLs, attrs) {
    return `<th ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</th>`
}

function td(innerHTMLs, attrs) {
    return `<td ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</td>`
}

function button(innerHTMLs, attrs) {
    return `<button ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</button>`
}

function form(innerHTMLs, attrs) {
    return `<form ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</form>`
}

function input(attrs) {
    return `<input ${attributeStr(attrs)}>`
}
function pButton(innerHTMLs, attrs) {
    if(!attrs){
        attrs = {};
    }
    attrs.class = attrs.class? attrs.class+='p-button-outlined':'p-button-outlined';
    return `<button pButton ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</button>`
}
function pInput(attrs) {
    if(!attrs){
        attrs = {};
    }
    return `<input pInputText ${attributeStr(attrs)}>`
}

function attributeStr(attrs) {
    return Object.keys(attrs).map(key => {
        switch (key) {
            case 'directive':
            case 'd': {
                return attrs[key];
            }
            default: {
                return `${key}="${attrs[key]}"`;
            }
        }
    }).join(' ');
}

let html = div([
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
console.log(html);
