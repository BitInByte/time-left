<script lang="ts">
    // your script goes here
    export let minutes: number;
    export let delegate: () => void;
</script>

<!-- markup (zero or more items) goes here -->
<div data-testid="card" on:click={delegate}>{minutes}</div>

<style lang="scss">
    /* your styles go here */
    div {
        width: 4rem;
        height: 4rem;
        background-color: #b18fcf;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;
        font-weight: 700;
    }
</style>
