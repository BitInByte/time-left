import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/svelte";

import Layout from './Layout.svelte';

describe('General Layout', () => {
    let component: RenderResult;

    beforeEach(() => {
        cleanup();
        component = render(Layout, {});
    });

    it('should contain header', () => {

        const header = component.container.querySelector('header');

        expect(header).toBeTruthy();
    });

    it('should contain main', () => {

        const header = component.container.querySelector('main');

        expect(header).toBeTruthy();
    });

    it('should contain footer', () => {

        const header = component.container.querySelector('footer');

        expect(header).toBeTruthy();
    });

    it('shold have an input', () => {
        const input = component.getByRole('textbox') as HTMLInputElement;

        expect(input).toBeInTheDocument();
    });
});

describe('Layout State', () => {
    let component: RenderResult;
    let input: HTMLInputElement;
    beforeEach(() => {
        component = render(Layout, {});
        input = component.getByRole('textbox') as HTMLInputElement;
    });

    it('should change inputValue', async () => {

        let testInputValue = "Test";

        await fireEvent.input(input, { target: { value: testInputValue } });

        expect(input.value).toBe(testInputValue);
    });

});
