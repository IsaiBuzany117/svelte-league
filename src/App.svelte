<script>
    import { Router, Route } from "svelte-routing";
    import Espaa from "./pages/España.svelte";
    import Home from "./pages/Home.svelte";
    import Inglaterra from "./pages/Inglaterra.svelte";
    import Mexico from "./pages/Mexico.svelte";
    import España from "./pages/España.svelte";
    import Italia from "./pages/Italia.svelte";
    import Alemania from "./pages/Alemania.svelte";
    import Francia from "./pages/Francia.svelte";
    
    export let url = '';
</script>

<Router url={url}>
    <Route path="/" component={Home}/>
    <Route path="/mexico" component={Mexico}/>
    <Route path="/england" component={Inglaterra}/>
    <Route path="/spain" component={España}/>
    <Route path="/italy" component={Italia}/>
    <Route path="/germany" component={Alemania}/>
    <Route path="/france" component={Francia}/>
</Router>

