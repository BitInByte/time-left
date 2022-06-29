<script lang="ts">
    // your script goes here
    let totalTime: number = 0;
    let inputValue: string;
    let valuesArray: string[];

    function onInputChange() {
        valuesArray = inputValue.split(" ");

        totalTime = valuesArray.reduce(
            (prevValue, curValue) => +curValue + +prevValue,
            0
        );
    }
</script>

<!-- markup (zero or more items) goes here -->
<header>
    <h1>Time Left</h1>
</header>
<main>
    <section class="form">
        <h2>Section Minutes</h2>
        <input
            placeholder="Insert the section minutes separated by spaces"
            bind:value={inputValue}
            on:input={onInputChange}
        />
    </section>
    <section>
        <p>{totalTime}</p>
        <p>{inputValue}</p>
    </section>
</main>
<footer />

<style lang="scss">
    header {
        width: 100%;
        height: 4rem;
        background-color: #230903;
        color: #ccc;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 2rem 2rem;
    }

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
    }
</style>
