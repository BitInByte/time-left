<script lang="ts">
    // your script goes here
    import { calculateTimeBasedOnStringArray } from "../utils/math";
    import Card from "./Card.svelte";

    // your script goes here
    let totalTime: number = 0;
    let inputValue: string;
    let valuesArray: string[] = [];

    function onInputChange(): void {
        console.log(inputValue);
        valuesArray = filterInputHandler();

        calculateTotalTimeInMinutes();
        // console.log(valuesArray.length);
        console.log(valuesArray);
    }

    function filterInputHandler(): string[] {
        const valuesArray = inputValue
            .trim()
            .split(",")
            .filter((item) => {
                console.log("Item: ", item);
                return !isNaN(+item);
            });

        inputValue = valuesArray.join(",").trim();

        filterLastEmptyElement(valuesArray);

        return valuesArray;
    }

    function filterLastEmptyElement(valuesArray: string[]): void {
        const lastElement = valuesArray[valuesArray.length - 1];

        console.log("Last Element: ", lastElement);

        if (lastElement === "") {
            valuesArray.pop();
        }
    }

    function calculateTotalTimeInMinutes(): void {
        totalTime = calculateTimeBasedOnStringArray(valuesArray);
    }

    function onClickHandler(): void {
        console.log("Card Pushed");
    }
</script>

<main>
    <section class="form">
        <h2>Section Minutes</h2>
        <input
            placeholder="Insert the section minutes separated by commas."
            bind:value={inputValue}
            on:input={onInputChange}
        />
    </section>
    <section>
        <div>
            <h2>Add minutes to start calculation...</h2>
        </div>
        {#if valuesArray.length === 0}
            <p data-testid="info-no-values">
                No values added yet, start adding to start the calculation!
            </p>
        {/if}
        <div class="cards">
            {#each valuesArray as value}
                {#if +value !== 0}
                    <Card minutes={+value} delegate={onClickHandler} />
                {/if}
            {/each}
        </div>
    </section>
</main>

<!-- markup (zero or more items) goes here -->
<style lang="scss">
    /* your styles go here */
    main {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

        section {
            flex: 1;
        }

        input {
            padding: 0.5rem;
            width: 30rem;
            border-radius: 0.5rem;
            border: 1px solid #ccc;
        }

        .cards {
            display: flex;
            gap: 1rem;
        }
    }
</style>
