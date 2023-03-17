<script>
    import TitleLogo from './TitleLogo.svelte';
    import Nav from './Nav.svelte';

</script>

<div class="flex flex-col justify-center items-center">
    <TitleLogo />
    <Nav />
</div>
<main class="bg-orange-500 flex justify-center items-center w">
    <div class="bg-blue-500 w-[800px] mx-auto mt-8 p-2">
        <slot></slot>
        <!-- <div class="max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100">
          <h2 class="text-lg font-semibold text-center text-blue-500 sm:text-xl">Me adapto a todo</h2>
          <p class="mt-3 text-gray-600">Esta caja es adaptable. Diseño primero para las dimensiones pequeñas y voy aumentando para las grandes.</p>
        </div> -->
    </div>
</main>
