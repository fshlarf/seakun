<template>
  <div class="pt-20">
    <div
      class="relative z-0 partner-bg gradient tn:px-4 py-4 lg:px-16 xl:px-28 tn:h-[620px] md:h-52 lg:h-60 xl:h-80"
    >
      <div class="container text-white xl:mt-12 xl:mb-4">
        <h2 class="tn:text-xl md:text-2xl font-bold tn:my-2 md:my-2 xl:mb-4">
          Ingin Usaha kamu ada di Seakun.id?
        </h2>
        <p class="xl:text-lg font-semibold">
          Jangan khawatir ya, Seakun bisa kok meningkatkan usaha kamu disini!
          <br />Ayo klik tombol di bawah ini untuk mewujudkannya!
        </p>
      </div>
      <div class="md:container">
        <div
          class="counter-card tn:grid tn:grid-cols-2 tn:gap-0 md:flex justify-center mt-2 md:mt-0"
        >
          <HexCard
            v-for="(counter, id) in dataCounter"
            :key="id"
            class="hexa-card"
            :value="counter.value"
            :label="counter.label"
          />
        </div>
      </div>
    </div>
    <div
      class="tn:hidden md:block text-center z-10 px-7 md:mt-28 lg:mt-36 xl:mt-40"
    >
      <a type="button" href="mailto:partnership@seakun.id">
        <Button
          class="mx-auto btn-partner"
          variant="secondary"
          label="Ajukan Kerja Usaha saya dengan Seakun"
        />
      </a>
    </div>
    <div
      class="relative flex justify-center z-0 tn:-mt-6 tn:block md:hidden text-center px-7 mb-16"
    >
      <div class="tn:block md:hidden absolute mx-auto z-10 top-0">
        <a  href="mailto:partnership@seakun.id">
          <Button
            class="mx-auto btn-partner"
            variant="secondary"
            label="Ajukan permintaan"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import HexCard from '~/components/atoms/HexCard';
import Button from '~/components/atoms/Button';
export default {
  data() {
    return {
      dataCounter: [
        {
          id: 1,
          value: '18.000+',
          label: 'Total Transaksi',
        },
        {
          id: 2,
          value: '7.000+',
          label: 'Total Pengguna',
        },
        {
          id: 3,
          value: '10',
          label: 'Total Layanan',
        },
        {
          id: 4,
          value: '8,5/10',
          label: 'Tingkat Kepuasan',
        },
      ],
    };
  },
  components: {
    HexCard,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.gradient {
  background-image: linear-gradient(to left, #8dcabe, #4bac99);
}

@media (max-width: 600px) {
  .gradient-sm {
    background-image: linear-gradient(to left, #8dcabe, #4bac99);
  }
}
</style>
