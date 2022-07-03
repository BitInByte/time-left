<script lang="ts">
    import Main from "./Main.svelte";
</script>

<!-- markup (zero or more items) goes here -->
<header>
    <h1>Time Remaining</h1>
</header>
<Main />
<footer />

<style lang="scss">
    header {
        width: 100%;
        height: 4rem;
        background-color: #2c2c34;
        color: #ccc;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 2rem 2rem;
    }
</style>
