import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/svelte";
import { calculateTimeBasedOnStringArray } from '../utils/math';

import Main from './Main.svelte';

describe('Main State', () => {
    let component: RenderResult;
    let input: HTMLInputElement;

    beforeEach(() => {
        component = render(Main, {});
        input = component.getByRole('textbox') as HTMLInputElement;
    });

    afterEach(() => {
        cleanup();
    })

    it('should change inputValue', async () => {
        let testInputValue = "1,2,3";

        await fireEvent.input(input, { target: { value: testInputValue } });

        expect(input.value).toBe(testInputValue);
    });

    it('should not contain letters in inputValue', async () => {
        let testInputValue = "1,2,3,test";
        let testValueExpected = "1,2,3";

        await fireEvent.input(input, { target: { value: testInputValue } });

        expect(input.value).toBe(testValueExpected);
    });

    it('should calculate total time correctly', async () => {
        let testInputValue = "1,2,3".split(",");
        let timeExpected = 6;

        let timeCalculated = calculateTimeBasedOnStringArray(testInputValue);

        expect(timeCalculated).toBe(timeExpected);
    })

    it('should have an input', () => {
        const input = component.getByRole('textbox') as HTMLInputElement;

        expect(input).toBeInTheDocument();
    });

    it('should only contain input array length of Card elements', async () => {
        const testInputValue = "1,2,3";
        const totalElements = testInputValue.split(',').length;

        await fireEvent.input(input, { target: { value: testInputValue } });

        const cards = await component.findAllByTestId('card');

        expect(cards).toHaveLength(totalElements);
    });

    it('should discard last element if it is a comma', async () => {
        const testInputValue = "1,2,3,";
        const totalElements = testInputValue.split(',').length - 1;
        console.log("totalElements", totalElements);

        await fireEvent.input(input, { target: { value: testInputValue } });

        const cards = await component.findAllByTestId('card');

        expect(cards).toHaveLength(totalElements);
    });

    it('should show info if no value is added to the input', () => {
        const infoModal = component.getByTestId('info-no-values') as HTMLParagraphElement;

        expect(infoModal).toBeInTheDocument();
    });

    it('should hide info if input has values', async () => {
        const testInputValue = "1,2,3";
        const infoModal = component.getByTestId('info-no-values') as HTMLParagraphElement;

        await fireEvent.input(input, { target: { value: testInputValue } });

        expect(infoModal).not.toBeInTheDocument();
    });

});

