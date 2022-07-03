import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/svelte';
import Card from './Card.svelte';

describe('Card State', () => {
    let component: RenderResult;
    let card: HTMLDivElement;
    let delegateTest: jest.Mock;
    const minutesTest: number = 15;

    beforeEach(() => {
        delegateTest = jest.fn();
        component = render(Card, {
            minutes: minutesTest,
            delegate: delegateTest,
        });
        const { getByTestId } = component;

        card = getByTestId('card') as HTMLDivElement;
    });

    afterEach(() => {
        cleanup();
    });

    it('should render values with props', () => {
        expect(card).toHaveTextContent(minutesTest.toString());
    });

    it('should listen to click event and triggers function from props', async () => {
        await fireEvent.click(card);

        expect(delegateTest).toHaveBeenCalled();
        expect(delegateTest).toHaveBeenCalledTimes(1);
        // expect(delegateTest).toHaveBeenLastCalledWith(1);
    });
});

