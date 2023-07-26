function pButton(innerHTMLs, attrs) {
    if (!attrs) {
        attrs = {};
    }
    attrs.class = attrs.class ? attrs.class += 'p-button-outlined' : 'p-button-outlined';
    return `<button pButton ${attributeStr(attrs)}>${innerHTMLs.join('\r\n')}</button>`
}

function pInput(attrs) {
    if (!attrs) {
        attrs = {};
    }
    return `<input pInputText ${attributeStr(attrs)}>`
}