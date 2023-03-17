<script>
    import {Link} from 'svelte-routing'
</script>

<nav class="main-font">
    <ul class="grid grid-cols-7 justify-items-center gap-x-4 text-xl">
        <li class="hover:text-lime-500 cursor-pointer transition ease-in-out link-underline link-underline-black">
            <Link to="/">Inicio</Link>
        </li>
        <li class="hover:text-lime-500 cursor-pointer transition ease-in-out link-underline link-underline-black">
            <Link to="/mexico">México</Link>
        </li>
        <li class="hover:text-lime-500 cursor-pointer transition ease-in-out link-underline link-underline-black">
            <Link to="/england">Inglaterra</Link>
        </li>
        <li class="hover:text-lime-500 cursor-pointer transition ease-in-out link-underline link-underline-black">
            <Link to="/spain">España</Link>
        </li>
        <li class="hover:text-lime-500 cursor-pointer transition ease-in-out link-underline link-underline-black">
            <Link to="/italy">Italia</Link>
        </li>
        <li class="hover:text-lime-500 cursor-pointer transition ease-in-out link-underline link-underline-black">
            <Link to="/germany">Alemania</Link>
        </li>
        <li class="hover:text-lime-500 cursor-pointer transition ease-in-out link-underline link-underline-black">
            <Link to="/france">Francia</Link>
        </li>
    </ul>
</nav>

<style>
    .link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}
    .link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#84cc16, #84cc16)
	}

	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%
	}
</style>