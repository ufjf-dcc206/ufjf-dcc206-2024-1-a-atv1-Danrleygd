import {test, expect} from "vitest";

test('test de div', () => {
    const div = document.createElement('div');
    div.textContent = 'Olá, mundo!';
    expect(div.textContent).toBe('Hello, world!');
});