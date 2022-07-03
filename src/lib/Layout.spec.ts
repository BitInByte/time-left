import '@testing-library/jest-dom';
import { cleanup, render, RenderResult } from "@testing-library/svelte";

import Layout from './Layout.svelte';

describe('General Layout', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(Layout, {});
    });

    afterEach(() => {
        cleanup();
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

});

