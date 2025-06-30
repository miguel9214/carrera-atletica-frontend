<template>


    <div class="container py-5">
        <h2 class="text-center mb-4 fw-bold" style="color: var(--color-dark)">Kit del Participante</h2>

        <div class="row justify-content-center mb-4">
            <div class="col-lg-8 text-center">
                <p class="lead">
                    Al inscribirte recibirás un completo kit para que vivas al máximo la experiencia de la Carrera
                    Atlética.
                </p>
            </div>
        </div>

        <div class="row g-4 justify-content-center">
            <div v-for="item in kitItems" :key="item.title" class="col-6 col-md-4 col-lg-3">
                <div class="card text-center shadow-sm h-100 border-0">
                    <div class="card-body">
                        <i :class="item.icon" class="display-4 mb-3" :style="{ color: item.color }"></i>
                        <h5 class="card-title fw-bold">{{ item.title }}</h5>
                        <p class="card-text small">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>

            <div class="row justify-content-center mt-5">
        <div class="col-md-10">
            <div class="card border-0 shadow-sm p-4">
                <h4 class="text-center fw-bold mb-4" style="color: var(--color-dark)">
                    Elementos destacados del kit
                </h4>
                <div class="row g-4">
                    <div class="col-md-6 text-center">
                        <img src="/camiseta.jpg" alt="Camiseta oficial" class="img-fluid rounded shadow" />
                        <p class="mt-2 fw-semibold">Camiseta oficial de la carrera</p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src="/tula.jpg" alt="Tula para hidratación" class="img-fluid rounded shadow" />
                        <p class="mt-2 fw-semibold">Tula para llevar tu hidratación</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="text-center mt-5">
            <RouterLink to="/register" class="btn btn-primary btn-lg">
                ¡Inscríbete ahora!
            </RouterLink>
        </div>
    </div>



</template>

<script setup>
const kitItems = [
    {
        title: 'Camiseta deportiva',
        description: 'Con el logo de la carrera, variedad de tallas.',
        icon: 'bi bi-person-lines-fill',
        color: 'var(--color-primary)',
    },
    {
        title: 'Medalla de participación',
        description: 'Recuerdo conmemorativo del evento.',
        icon: 'bi bi-award',
        color: 'var(--color-orange)',
    },
    {
        title: 'Número de corredor',
        description: 'Con chip o QR para control de tiempo.',
        icon: 'bi bi-hash',
        color: 'var(--color-magenta)',
    },
    {
        title: 'Hidratación',
        description: 'Botella de agua + bebida isotónica.',
        icon: 'bi bi-cup-straw',
        color: 'var(--color-accent)',
    },
    {
        title: 'Snacks',
        description: 'Fruta, barra energética o refrigerio.',
        icon: 'bi bi-basket',
        color: '#FFC107',
    },
    {
        title: 'Obsequios',
        description: 'Patrocinadores te sorprenderán.',
        icon: 'bi bi-gift',
        color: 'var(--color-dark)',
    },
]
</script>

<style scoped>
img {
    max-height: 280px;
    object-fit: contain;
}
</style>