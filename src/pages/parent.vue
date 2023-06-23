<template>
    <!-- right code, wrong type -->
    <p><RouterLink to="/child">Child 1</RouterLink></p>

    <!-- wrong code, right type -->
    <p><RouterLink to="/parent/child">Child 2</RouterLink></p>

    <RouterView />
</template>

<route lang="json">
{
    "path": "/"
}
</route>