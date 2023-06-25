export class Task {
    #title;
    #status;

    constructor(title, status) {
        this.#title = title;
        this.#status = status;
    }

    createListItem(d) {
        const li = d.createElement('li');
        li.setAttribute('class', 'list-group-item d-flex align-items-center border-0 mb-2 rounded');
        li.setAttribute('style', 'background-color: #f4f6f7;');

        const input = d.createElement('input');
        input.setAttribute('class', 'form-check-input me-2');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('aria-label', '...');
        input.setAttribute('value', '');
        if (this.#status === 'completed') {
            input.setAttribute('checked', '');
            li.appendChild(input);
            const s = d.createElement('s');
            s.innerText = this.#title;
            li.appendChild(s);
        } else {
            li.appendChild(input);
            li.appendChild(d.createTextNode(this.#title));
        }
        return li;
    }
}

